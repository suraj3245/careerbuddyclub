"use client";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Skeleton,
  Box, Card, CardContent, Container, Grid, Typography, Button, CssBaseline, useMediaQuery,
} from "@mui/material";
import { LocationOn, Link } from "@mui/icons-material";
import BlogSection from "./blog-section";
import FilterPanel from "./filterpanel";
import axios from "axios";
import ModalHeader from "@/app/components/homeModal";
import { toStreamPath, findStreamIdByPathTitle } from "@/utils/streamPath";
import {
  parseFiltersFromSearchParams,
  filtersToURLParams,
  FiltersObject,
} from "@/utils/filters.utils";

interface FilterPageProps {
  initialStreamPath?: string;
}

const theme = createTheme({
  palette: { primary: { main: "#00B5D1" }, info: { main: "#00B5D1" } },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: "8px" } } },
    MuiCard: { styleOverrides: { root: { borderRadius: "16px" } } },
  },
});
const CollegeCard = styled(Card)({
  marginBottom: "20px",
  backgroundColor: "#b4e4f6",
  borderRadius: "16px",
  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
});
const RegisterBanner = styled(Box)(({ theme }) => ({
  position: "sticky", top: theme.spacing(2), [theme.breakpoints.down("lg")]: { display: "none" },
}));
const FloatingButton = styled(Button)(({ theme }) => ({
  position: "fixed", bottom: 20, right: 20, zIndex: 1000, [theme.breakpoints.up("lg")]: { display: "none" },
}));

function extractFromPath(pathname: string) {
  const regex = /^\/colleges(?:\/([a-z0-9-]+))?(?:\/colleges-in-([a-z0-9-]+))?/;
  const match = pathname.match(regex);
  return { streamSlug: match?.[1] || "", citySlug: match?.[2] || "" };
}
function toCitySlug(city: string) {
  return city?.toLowerCase().replace(/\s+/g, "-") || "";
}
function fromCitySlug(citySlug: string, allCities: string[]) {
  return allCities.find(c => toCitySlug(c) === (citySlug?.toLowerCase() || "")) || "";
}

const INIT_FETCH = {
  colleges: undefined as any[] | undefined,
  streams: undefined as any[] | undefined,
};

const FilterPage: React.FC<FilterPageProps> = ({ initialStreamPath }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [allColleges, setAllColleges] = useState<any[]>([]);
  const [streams, setStreams] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [streamToCollegeIdMap, setStreamToCollegeIdMap] = useState<Map<string, Set<number>>>(new Map());

  // -- Fetch data only once --
  useEffect(() => {
    let didCancel = false;
    (async () => {
      const [{ data: { colleges = [] } = {} }, { data: { streams: streamsData = [] } = {} }] = await Promise.all([
        axios.post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails"),
        axios.post("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata"),
      ]);
      if (!didCancel) {
        setAllColleges(colleges);
        setStreams(streamsData);

        // Pre-process streams for fast college filtering
        const newMap = new Map<string, Set<number>>();
        (streamsData ?? []).forEach((stream: any) => {
          newMap.set(String(stream.id), new Set((stream.colleges ?? []).map((c: any) => c.id)));
        });
        setStreamToCollegeIdMap(newMap);
        setIsLoading(false);
      }
    })();
    return () => { didCancel = true; };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  // --- URL Synchronization Logic ---
  // On initial page load, if the URL has a "pretty path", sync it to the query params.
  useEffect(() => {
    if (streams.length === 0 || allColleges.length === 0) return; // Wait for data

    const { streamSlug, citySlug } = extractFromPath(pathname ?? "");
    const currentParams = new URLSearchParams(searchParams.toString());

    if (streamSlug && !currentParams.has("Streams")) {
      const foundId = findStreamIdByPathTitle(streamSlug, streams);
      // On initial load, we replace the URL instead of pushing to history
      if (foundId) router.replace(`/colleges/${streamSlug}?Streams=${foundId}`, { scroll: false });
    } else if (citySlug && !currentParams.has("Location")) {
      const allCities = Array.from(new Set(allColleges.map((c: any) => c.city).filter(Boolean)));
      const city = fromCitySlug(citySlug, allCities);
      // On initial load, we replace the URL
      if (city) router.replace(`/colleges/colleges-in-${citySlug}?Location=${city}`, { scroll: false });
    }
  }, [streams, allColleges, pathname, searchParams, router]); // Added dependencies

  // 2. The single source of truth for filters is ALWAYS the URL search params.
  const filters: FiltersObject = useMemo(() => {
    return parseFiltersFromSearchParams(searchParams) ?? {};
  }, [searchParams]);

  // -- Canonical update, shallow routing, avoid any "page reload"!
  const updateFilters = useCallback((category: string, values: string[]) => {
    let nextFilters: FiltersObject = { ...filters, [category]: values };
    if ((nextFilters.Streams ?? []).length === 0) delete nextFilters.Streams;
    if ((nextFilters.Location ?? []).length === 0) delete nextFilters.Location;

    // --- Correct Pretty URL Logic ---
    const stream = streams.find(s => String(s.id) === (nextFilters.Streams?.[0] ?? ""));
    const streamSlug = stream ? toStreamPath(stream.title, stream.id) : null;
    const city = nextFilters.Location?.[0];
    const citySlug = city ? toCitySlug(city) : null;

    let prettyUrl = "/colleges";
    // Logic to handle combined pretty URLs
    if (streamSlug) prettyUrl += `/${streamSlug}`;
    if (citySlug) prettyUrl += `/colleges-in-${citySlug}`;

    const qStr = filtersToURLParams(nextFilters);

    // ALWAYS use router.push. This is the correct Next.js way.
    router.push(`${prettyUrl}${qStr ? `?${qStr}` : ""}`, { scroll: false });
  }, [filters, streams, router]);

  const removeFilterChip = useCallback((cat: string, val: string) => {
    const filteredVals = (filters[cat] ?? []).filter((v: string) => v !== val);
    updateFilters(cat, filteredVals);
  }, [filters, updateFilters]);

  const handleClearAll = useCallback(() => {
    router.push("/colleges", { scroll: false });
  }, [router]);

  const getChipLabel = useCallback(
    (cat: string, val: string) => {
      if (cat === "Streams") {
        const stream = streams.find((s: any) => String(s.id) === val);
        return stream ? stream.title : val;
      }
      return val;
    },
    [streams]
  );

  // -- Memoize all derived/filtering logic, minimal re-renders --
  const clgLocation = useMemo(
    () => Array.from(new Set(allColleges.map((c: any) => c.city).filter(Boolean))),
    [allColleges]
  );

  const filterOptions = useMemo(() => {
    if (!allColleges.length || !streams.length) return {};

    const selectedStreamId = filters.Streams?.[0];
    const result: Record<string, any[]> = {};

    // If no stream is selected, show the Streams filter.
    // If a stream IS selected, hide the Streams filter.
    if (!selectedStreamId) {
      result.Streams = streams.map((s) => ({
        name: s.title,
        id: String(s.id),
      }));
    } else {
      // If a stream is selected, find it and show its related courses.
      const selectedStream = streams.find(s => String(s.id) === selectedStreamId);
      if (selectedStream && selectedStream.courses) {
        result.Courses = selectedStream.courses.map((c: any) => ({ name: c.name }));
      }
    }

    // Locations
    const locMap = new Map<string, number>();
    allColleges.forEach((c) => {
      if (c.city) locMap.set(c.city, (locMap.get(c.city) || 0) + 1);
    });
    result.Location = Array.from(locMap, ([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name));

    // Types
    const typeMap = new Map<string, number>();
    allColleges.forEach((c) => {
      if (c.type) typeMap.set(c.type, (typeMap.get(c.type) || 0) + 1);
    });
    result.Type = Array.from(typeMap, ([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name));

    // Approved By is often null/inconsistent, so we filter out falsy values
    const appMap = new Map<string, number>();
    allColleges.forEach((c) => {
      if (c.approved_by) appMap.set(c.approved_by, (appMap.get(c.approved_by) || 0) + 1);
    });
    result.ApprovedBy = Array.from(appMap, ([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [streams, allColleges]);

  const displayedColleges = useMemo(() => {
    let filtered = allColleges;

    // 1. Filter by Stream
    const selectedStreamIds = filters.Streams ?? [];
    if (selectedStreamIds.length > 0) {
      const validCollegeIds = new Set<number>();
      selectedStreamIds.forEach((streamId: string) => {
        streamToCollegeIdMap.get(streamId)?.forEach((collegeId: number) => validCollegeIds.add(collegeId));
      });
      filtered = filtered.filter((c: any) => validCollegeIds.has(c.id));
    }

    // 2. Filter by other categories
    if ((filters.Location ?? []).length) filtered = filtered.filter((c: any) => filters.Location?.includes(c.city));
    if ((filters.Type ?? []).length) filtered = filtered.filter((c: any) => filters.Type?.includes(c.type));
    if ((filters.ApprovedBy ?? []).length) filtered = filtered.filter((c: any) => filters.ApprovedBy?.includes(c.approved_by));

    // 3. Filter by Courses (if a stream is selected)
    const selectedCourses = filters.Courses ?? [];
    if (selectedCourses.length > 0) {
      filtered = filtered.filter(college =>
        college.courses?.some((course: any) => selectedCourses.includes(course.name))
      );
    }

    return filtered;
  }, [allColleges, filters, streamToCollegeIdMap]); // Dependencies are correct

  const RegisterContent = useCallback(() => (
    <Box sx={{
      p: 3, bgcolor: "#FFD700", borderRadius: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: 320, maxWidth: 340, mx: "auto",
    }}>
      <Typography variant="h6" gutterBottom>
        Get personalised college<br/>recommendations
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Register to explore more colleges based on your preferences.
      </Typography>
      {!isLoggedIn && (
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#00B5D1",
            boxShadow: "0 4px 10px 0 rgba(0,0,0,0.08)",
            borderRadius: 2,
            fontWeight: 600,
            fontSize: 18,
            py: 1.25,
            mt: 2,
            "&:hover": { bgcolor: "#009BB3" },
          }}
          onClick={() => { setModalType("student"); setIsModalOpen(true); }}>
          Register
        </Button>
      )}
    </Box>
  ), [isLoggedIn]);

  const handleApplyNow = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setModalType("student");
    setIsModalOpen(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, pt: 20 }}>
        <BlogSection streams={streams} clgLocation={clgLocation} filters={filters} router={router} />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={3} sx={{ position: "sticky", top: 96 }}>
            <FilterPanel
              filterOptions={filterOptions}
              filters={filters}
              onChangeCategory={updateFilters}
              onRemoveFilterChip={removeFilterChip}
              getChipLabel={getChipLabel}
              onClearAll={handleClearAll}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: 'block' }}>
            {isLoading ? (
              Array.from(new Array(5)).map((_, index) => (
                <CollegeCard key={index}>
                  <CardContent>
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="text" width="40%" height={20} sx={{ mt: 1 }} />
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={4}><Skeleton variant="rectangular" height={40} /></Grid>
                      <Grid item xs={4}><Skeleton variant="rectangular" height={40} /></Grid>
                      <Grid item xs={4}><Skeleton variant="rectangular" height={40} /></Grid>
                    </Grid>
                  </CardContent>
                </CollegeCard>
              ))
            ) : displayedColleges.length > 0 ? (
                displayedColleges.map((college: any) => (
                  <CollegeCard
                    key={college.id}
                    onClick={() => router.push(`/college-details/${college.college_short_name}`)}
                    sx={{
                      cursor: "pointer",
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)" },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {college.college_full_name} ({college.college_short_name})
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <LocationOn sx={{ mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">
                          {college.city} • {college.type}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <Typography variant="body2" color="text.secondary">Approved By</Typography>
                            <Typography>{college.approved_by || "N/A"}</Typography>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Typography variant="body2" color="text.secondary">Established</Typography>
                            <Typography>{college.established_year || "N/A"}</Typography>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            {!isLoggedIn && (<Button variant="outlined" startIcon={<Link />} onClick={handleApplyNow}>Apply Now</Button>)}
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                  </CollegeCard>
                ))
            ) : (
              <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
                No colleges found matching the selected filters.
              </Typography>
            )}
          </Grid>
          <Grid item lg={3} sx={{ display: isLargeScreen ? 'block' : 'none' }}>
            <RegisterBanner><RegisterContent /></RegisterBanner>
          </Grid>
        </Grid>
        {!isLoggedIn && (
          <FloatingButton
            variant="contained"
            color="primary"
            onClick={() => { setModalType("student"); setIsModalOpen(true); }}
          >Apply Now</FloatingButton>
        )}
        <ModalHeader
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          modalType={modalType}
          onSuccess={() => {
            setIsModalOpen(false);
            router.push("/dashboard/candidate-dashboard/profile");
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default FilterPage;
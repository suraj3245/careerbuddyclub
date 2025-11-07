"use client";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
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
  const urlFilters = useMemo(() => parseFiltersFromSearchParams(searchParams) ?? {}, [searchParams]);
  const [filters, setFilters] = useState<FiltersObject>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allColleges, setAllColleges] = useState<any[]>([]);
  const [streams, setStreams] = useState<any[]>([]);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

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
      }
    })();
    return () => { didCancel = true; };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  // -- Canonical, in-sync filter state from path and params --
  useEffect(() => {
    const { streamSlug, citySlug } = extractFromPath(pathname ?? "");
    let hydrated: FiltersObject = {};
    if (streamSlug && streams.length) {
      const foundId = findStreamIdByPathTitle(streamSlug, streams);
      if (foundId) hydrated.Streams = [String(foundId)];
    }
    if (citySlug && allColleges.length) {
      const allCities = Array.from(new Set(allColleges.map((c: any) => c.city)));
      const city = fromCitySlug(citySlug, allCities);
      if (city) hydrated.Location = [city];
    }
    Object.entries(urlFilters ?? {}).forEach(([cat, vals]) => {
      if (cat !== "Streams" && cat !== "Location") hydrated[cat] = vals;
    });
    setFilters(hydrated);
    // eslint-disable-next-line
  }, [pathname, streams, allColleges, urlFilters]);

  // -- Canonical update, shallow routing, avoid any "page reload"!
  const updateFilters = useCallback((category: string, values: string[]) => {
    let nextFilters: FiltersObject = { ...filters, [category]: values };
    if ((nextFilters.Streams ?? []).length === 0) delete nextFilters.Streams;
    if ((nextFilters.Location ?? []).length === 0) delete nextFilters.Location;
    const stream = streams.find(s => String(s.id) === (nextFilters.Streams?.[0] ?? ""));
    const streamSlug = stream ? toStreamPath(stream.title, stream.id) : null;
    const city = nextFilters.Location?.[0];
    const citySlug = city ? toCitySlug(city) : null;
    let url = "/colleges";
    if (streamSlug) url += `/${streamSlug}`;
    if (citySlug) url += `/colleges-in-${citySlug}`;
    let queryObj = { ...nextFilters };
    if (streamSlug) delete queryObj.Streams;
    if (citySlug) delete queryObj.Location;
    const qStr = filtersToURLParams(queryObj);
    router.push(`${url}${qStr ? "?" + qStr : ""}`, { scroll: false,  });
    setFilters(nextFilters);
  }, [filters, streams, router]);

  const removeFilterChip = useCallback((cat: string, val: string) => {
    const filteredVals = (filters[cat] ?? []).filter((v: string) => v !== val);
    updateFilters(cat, filteredVals);
  }, [filters, updateFilters]);

  const handleClearAll = useCallback(() => {
    setFilters({});
    router.push("/colleges", { scroll: false, });
  }, [router]);

  // -- Memoize all derived/filtering logic, minimal re-renders --
  const clgLocation = useMemo(
    () => Array.from(new Set(allColleges.map((c: any) => c.city).filter(Boolean))),
    [allColleges]
  );

  const displayedColleges = useMemo(() => {
    let filtered = allColleges;
    if ((filters.Streams ?? []).length) {
      const validIds = new Set<number>();
      streams.forEach((s: any) => {
        if (filters.Streams?.includes(String(s.id))) (s.colleges ?? []).forEach((c: any) => validIds.add(c.id));
      });
      filtered = filtered.filter((c: any) => validIds.has(c.id));
    }
    if ((filters.Location ?? []).length)
      filtered = filtered.filter((c: any) => filters.Location?.includes(c.city));
    if ((filters.Type ?? []).length)
      filtered = filtered.filter((c: any) => filters.Type?.includes(c.type));
    if ((filters.ApprovedBy ?? []).length)
      filtered = filtered.filter((c: any) => filters.ApprovedBy?.includes(c.approved_by));
    return filtered;
  }, [allColleges, streams, filters]);

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3} sx={{ position: "sticky", top: 96 }}>
            <FilterPanel
              streams={streams}
              allColleges={allColleges}
              filters={filters}
              onChangeCategory={updateFilters}
              onRemoveFilterChip={removeFilterChip}
              onClearAll={handleClearAll}
            />
          </Grid>
          <Grid item xs={12} md={9} lg={6}>
            {displayedColleges.length > 0 ? (
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
                          {!isLoggedIn && (
                            <Button
                              variant="outlined"
                              startIcon={<Link />}
                              onClick={handleApplyNow}
                            >Apply Now</Button>
                          )}
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
          <Grid item lg={3}>
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
"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, useTransition } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Skeleton, Box, Card, CardContent, Container, Grid, Pagination, PaginationItem, Typography, Button,
  CssBaseline, useMediaQuery,
} from "@mui/material";
import { LocationOn, Link } from "@mui/icons-material";
import BlogSection from "./blog-section";
import FilterPanel from "./filterpanel";
import ModalHeader from "@/app/components/homeModal";
import { toCitySlug } from "@/utils/streamPath";
import type { FiltersObject } from "@/utils/filters.utils";
import { COLLEGES_PER_PAGE } from "@/config/site";
import type { CollegeCardData, StreamLink } from "@/app/colleges/listing";

/**
 * College listing UI. Filtering and pagination are done on the server
 * (see app/colleges/listing.ts) — this component only receives the 20 colleges
 * for the current page and navigates to a new URL when filters/page change.
 */
interface FilterPageProps {
  h1: string;
  streamId: number | null;
  streamDescription: string | null;
  city: string | null;
  colleges: CollegeCardData[];
  total: number;
  page: number;
  pageCount: number;
  basePath: string;
  extraQuery: string;
  filters: FiltersObject;
  filterOptions: Record<string, any[]>;
  streams: StreamLink[];
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

/** Build the listing URL for a filter set: stream + first city go in the path, the rest in the query. */
function buildListingUrl(filters: FiltersObject, streams: StreamLink[]): string {
  const stream = streams.find((s) => String(s.id) === (filters.Streams?.[0] ?? ""));
  const [city, ...otherCities] = filters.Location ?? [];
  let path = "/colleges";
  if (stream) path += `/${stream.slug}`;
  if (city) path += `/colleges-in-${toCitySlug(city)}`;

  const q = new URLSearchParams();
  otherCities.forEach((c) => q.append("Location", c));
  (["Type", "ApprovedBy", "Courses"] as const).forEach((key) =>
    (filters[key] ?? []).forEach((v) => q.append(key, v))
  );
  const qs = q.toString();
  return qs ? `${path}?${qs}` : path;
}

function pageHref(basePath: string, extraQuery: string, page: number): string {
  const q = new URLSearchParams(extraQuery);
  if (page > 1) q.set("page", String(page));
  const qs = q.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

const FilterPage: React.FC<FilterPageProps> = ({
  h1, streamId, streamDescription, city, colleges, total, page, pageCount, basePath, extraQuery,
  filters, filterOptions, streams,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const asideRef = useRef<HTMLDivElement>(null);
  const [asideHeight, setAsideHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const navigate = useCallback(
    (url: string) => startTransition(() => router.push(url, { scroll: false })),
    [router]
  );

  const updateFilters = useCallback(
    (category: string, values: string[]) => {
      const next: FiltersObject = { ...filters, [category]: values };
      Object.keys(next).forEach((k) => (next[k] ?? []).length === 0 && delete next[k]);
      // Picking a new stream clears course filters from the previous one.
      if (category === "Streams") delete next.Courses;
      navigate(buildListingUrl(next, streams));
    },
    [filters, streams, navigate]
  );

  const removeFilterChip = useCallback(
    (cat: string, val: string) => updateFilters(cat, (filters[cat] ?? []).filter((v) => v !== val)),
    [filters, updateFilters]
  );

  const handleClearAll = useCallback(() => navigate("/colleges"), [navigate]);

  const getChipLabel = useCallback(
    (cat: string, val: string) => {
      if (cat === "Streams") return streams.find((s) => String(s.id) === val)?.title ?? val;
      return val;
    },
    [streams]
  );

  // Keep the college list column the same height as the filter sidebar so the
  // two columns line up, scrolling the list internally when a page overflows.
  useLayoutEffect(() => {
    if (!isLargeScreen || !asideRef.current) {
      setAsideHeight(undefined);
      return;
    }
    const measure = () => setAsideHeight(asideRef.current?.getBoundingClientRect().height);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isLargeScreen, filterOptions, filters]);

  const RegisterContent = useCallback(() => (
    <Box sx={{
      p: 3, bgcolor: "#FFD700", borderRadius: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: 320, maxWidth: 340, mx: "auto",
    }}>
      <Typography variant="h6" component="p" gutterBottom>
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
    e.preventDefault();
    e.stopPropagation();
    setModalType("student");
    setIsModalOpen(true);
  }, []);

  const firstShown = total === 0 ? 0 : (page - 1) * COLLEGES_PER_PAGE + 1;
  const lastShown = Math.min(total, firstShown + colleges.length - 1);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, pt: 20 }}>
        <BlogSection h1={h1} streamId={streamId} streamDescription={streamDescription} city={city} />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={3} sx={{ position: "sticky", top: 96 }}>
            <Box ref={asideRef}>
              <FilterPanel
                filterOptions={filterOptions}
                filters={filters}
                onChangeCategory={updateFilters}
                onRemoveFilterChip={removeFilterChip}
                getChipLabel={getChipLabel}
                onClearAll={handleClearAll}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: "block" }}>
            {total > 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Showing {firstShown}–{lastShown} of {total} colleges
              </Typography>
            )}
            <Box
              sx={{
                maxHeight: asideHeight ? `${asideHeight}px` : "none",
                overflowY: asideHeight ? "auto" : "visible",
                pr: asideHeight ? 1 : 0,
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
            {isPending ? (
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
            ) : colleges.length > 0 ? (
                colleges.map((college) => (
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
                      <Typography variant="subtitle1" component="h2" fontWeight={600} sx={{ fontSize: "1rem" }}>
                        <NextLink
                          href={`/college-details/${college.college_short_name}`}
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {college.college_full_name} ({college.college_short_name})
                        </NextLink>
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
              <Typography variant="h6" component="p" sx={{ mt: 4, textAlign: "center" }}>
                No colleges found matching the selected filters.
              </Typography>
            )}
            </Box>
            {pageCount > 1 && (
              <Box component="nav" aria-label="College list pages" sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Pagination
                  count={pageCount}
                  page={page}
                  color="primary"
                  renderItem={(item) => (
                    <PaginationItem
                      component={NextLink}
                      href={pageHref(basePath, extraQuery, item.page ?? 1)}
                      {...item}
                    />
                  )}
                />
              </Box>
            )}
          </Grid>
          <Grid item lg={3} sx={{ display: isLargeScreen ? "block" : "none" }}>
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

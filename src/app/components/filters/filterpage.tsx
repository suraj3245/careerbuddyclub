"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  CssBaseline,
  Dialog,
  useMediaQuery,
} from "@mui/material";
import { LocationOn, Link } from "@mui/icons-material";
import BlogSection from "./blog-section";
import FilterPanel from "./filterpanel";
import axios from "axios";
import { createSlug } from "@/utils/slugify";
import { getStreamSlug } from "@/utils/customslugs";
import ModalHeader from "@/app/components/homeModal"; // Import the modal

interface Stream {
  id: number;
  title: string;
  description: string;
  colleges: College[];
  companies: Company[];
  careers: Career[];
  courses: Course[];
}
interface Company {
  id: number;
  name: string;
}
interface Career {
  id: number;
  title: string;
}
interface Course {
  id: number;
  name: string;
}
interface College {
  id: number;
  college_full_name: string;
  college_short_name: string;
  type: string;
  approved_by: string;
  established_year: number;
  about: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  city: string;
}

const theme = createTheme({
  palette: {
    primary: { main: "#00B5D1" },
    info: { main: "#00B5D1" },
  },
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
  position: "sticky",
  top: theme.spacing(2),
  [theme.breakpoints.down("lg")]: { display: "none" },
}));
const FloatingButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  right: 20,
  zIndex: 1000,
  [theme.breakpoints.up("lg")]: { display: "none" },
}));

export default function FilterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Modal state for Apply Now
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  // Check if user is logged in (token in localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(!!localStorage.getItem("token"));
    }
  }, []);

  // Query params from URL (initialize from URL, re-sync via effect if changed)
  const streamIdParam = searchParams.get("streamId");
  const cityParam = searchParams.get("city");
  const [streamId, setStreamId] = useState<string | null>(streamIdParam);
  const [collegeId, setCollegeId] = useState<string | null>(searchParams.get("collegeId"));
  const [courseId, setCourseId] = useState<string | null>(searchParams.get("courseId"));

  const [allColleges, setAllColleges] = useState<College[]>([]);
  const [streams, setStreams] = useState<Stream[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const clgLocation = useMemo(
    () => Array.from(new Set(allColleges.map((c) => c.city).filter(Boolean))),
    [allColleges]
  );

  // Fetch data once
  useEffect(() => {
    axios.post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails")
      .then((res) => setAllColleges(res?.data?.colleges || []))
      .catch(console.error);
    axios.post("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata")
      .then((res) => setStreams(res?.data?.streams))
      .catch(console.error);
  }, []);

  // Memo: find selected stream object from ID
  const selectedStream = useMemo(
    () => streams.find((s) => s.id.toString() === streamId),
    [streams, streamId]
  );

  // Handler: When stream filter is changed via FilterPanel or Finder
  const handleStreamChange = (id: string | number | null) => {
    setStreamId(id ? String(id) : null);
  };

  // Sync URL and selectedFilters with state/URL params (streamId, city)
  useEffect(() => {
    // Handle no stream selected
    if (!streamId) {
      router.replace(`/colleges`, { scroll: false });
      setSelectedFilters(cityParam ? [`Location||${cityParam}`] : []);
      return;
    }

    // Find stream, update slug and filters
    const stream = streams.find((s) => s.id.toString() === streamId);
    if (stream) {
      const slug = getStreamSlug(stream.title, stream.id);
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set("streamId", streamId);
      params.delete("streamTitle"); // cleanup if exists

      // Build filters: Always include stream, include city if present
      const filters = [`Streams|${streamId}|${stream.title}`];
      const city = params.get("city");
      if (city) {
        filters.push(`Location||${city}`);
      }

      router.replace(`/colleges/${slug}?${params.toString()}`, { scroll: false });
      setSelectedFilters(filters);
    }
  // Only return if these change (avoid infinite loop)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamId, streams, searchParams, router, cityParam]);

  // Main filter logic
  const displayedColleges = useMemo(() => {
    let baseColleges: College[] = allColleges;

    // Course filter
    const selectedCourseIds = selectedFilters.filter(f => f.startsWith("Courses|")).map(f => f.split("|")[1]);
    if (selectedCourseIds.length > 0) {
      const validCollegeIds = new Set<number>();
      streams.forEach((stream) => {
        stream.colleges.forEach((college) => {
          const courseIdsInStream = stream.courses.map((c) => c.id.toString());
          const hasMatchingCourse = selectedCourseIds.some((cid) => courseIdsInStream.includes(cid));
          if (hasMatchingCourse) validCollegeIds.add(college.id);
        });
      });
      baseColleges = baseColleges.filter((college) => validCollegeIds.has(college.id));
    }

    // Add other filters (Company/Career) if needed...

    if (selectedFilters.length === 0) return baseColleges;
    const filtersByCategory = selectedFilters.reduce((acc, filter) => {
      const [category, id, name] = filter.split("|");
      if (!acc[category]) acc[category] = new Set();
      acc[category].add(id || name);
      return acc;
    }, {} as Record<string, Set<string>>);

    // Stream filter
    if (selectedStream && !filtersByCategory.Streams) {
      const ids = new Set(selectedStream.colleges.map((c) => c.id));
      baseColleges = baseColleges.filter((col) => ids.has(col.id));
    }
    // Filter by streams (multi)
    if (filtersByCategory.Streams) {
      const streamIds = filtersByCategory.Streams;
      const validCollegeIds = new Set<number>();
      streams.forEach((stream) => {
        if (streamIds.has(String(stream.id))) {
          stream.colleges.forEach((college) => validCollegeIds.add(college.id));
        }
      });
      baseColleges = baseColleges.filter((college) => validCollegeIds.has(college.id));
    }

    // Location, Type, ApprovedBy
    return baseColleges.filter((college) => {
      if (filtersByCategory.Location && !filtersByCategory.Location.has(college.city)) return false;
      if (filtersByCategory.Type && !filtersByCategory.Type.has(college.type)) return false;
      if (filtersByCategory.ApprovedBy && !filtersByCategory.ApprovedBy.has(college.approved_by)) return false;
      return true;
    });
  }, [allColleges, selectedStream, selectedFilters, streams]);

  // Only the button is hidden, not the banner itself!
  const RegisterContent = () => (
    <Box
      sx={{
        p: 3,
        bgcolor: "#FFD700",
        borderRadius: 3,
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        minWidth: 320,
        maxWidth: 340,
        mx: "auto",
        my: 0,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Get personalised college<br />recommendations
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
       Registering gives you the benefit to browse variety of colleges based on your preferences.
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
            "&:hover": {
              bgcolor: "#009BB3",
            },
          }}
          onClick={() => {
            setModalType("student");
            setIsModalOpen(true);
          }}
        >
          Register
        </Button>
      )}
    </Box>
  );

  // Handler for Apply Now button on college card
  const handleApplyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalType("student");
    setIsModalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, pt: 20 }}>
        {/* Add BlogSection at the top */}
        <BlogSection
          streams={streams}
          clgLocation={clgLocation}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3} lg={3}>
            <FilterPanel
              streams={streams}
              allColleges={allColleges}
              selectedStreamId={streamId}
              collegeId={collegeId}
              courseId={courseId}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              onStreamFilterChange={handleStreamChange}
            />
          </Grid>

          {/* College Listings */}
          <Grid item xs={12} md={9} lg={6}>
            {displayedColleges.map((college) => (
              <CollegeCard
                key={college.id}
                onClick={() => router.push(`/college-details/${college.college_short_name}`)}
                sx={{
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)",
                    // backgroundColor: "#e7f7fb",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1">
                          {college?.college_full_name} (
                          {college?.college_short_name})
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <LocationOn sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            {college?.city} : {college?.type}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Details Section: full width */}
                  <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">
                          Approved By
                        </Typography>
                        <Typography>{college?.approved_by || "N/A"}</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          Established
                        </Typography>
                        <Typography>
                          {college?.established_year || "N/A"}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">
                          Email
                        </Typography>
                        <Typography sx={{
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                        }}>{college?.email || "N/A"}</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          Phone
                        </Typography>
                        <Typography>{college?.phone || "N/A"}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          {!isLoggedIn && (
                            <Button
                              variant="outlined"
                              startIcon={<Link />}
                              onClick={handleApplyNow}
                            >
                              Apply Now
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            onClick={e => e.stopPropagation()}
                          >
                            Brochure
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </CollegeCard>
            ))}
            {displayedColleges.length === 0 && (
              <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
                No colleges found matching the selected filters.
              </Typography>
            )}
          </Grid>

          {/* Register Banner (Third Column) */}
          <Grid item lg={3}>
            <RegisterBanner>
              <RegisterContent />
            </RegisterBanner>
          </Grid>
        </Grid>

        {/* Floating Button */}
        {!isLoggedIn && (
          <FloatingButton
            variant="contained"
            color="primary"
            onClick={() => {
              setModalType("student");
              setIsModalOpen(true);
            }}
            sx={{
              minWidth: "120px",
              py: 1,
              px: 2,
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            Apply Now
          </FloatingButton>
        )}

        {/* Dialog for small screens */}
        <Dialog
          open={dialogOpen && !isLargeScreen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="xs"
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <RegisterContent />
        </Dialog>
        {/* Modal for Apply Now */}
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
}
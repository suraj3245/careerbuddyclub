"use client";
import { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Button,
  CssBaseline,
  Dialog,
  useMediaQuery,
} from "@mui/material";
import { FavoriteBorder, Search, LocationOn, Link } from "@mui/icons-material";
import Image from "next/image";
import BlogSection from "./blog-section";
import FilterPanel from "./filterpanel";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface Stream {
  id: number;
  title: string;
  description: string | null;
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

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#00B5D1",
    },
    info: {
      main: "#00B5D1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
});

const CollegeCard = styled(Card)({
  marginBottom: "16px",
  backgroundColor: "rgb(186, 230, 243)",
});

const RegisterBanner = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const FloatingButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  right: 20,
  zIndex: 1000,
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export default function CollegeListing() {
  const searchParams = useSearchParams();
  const streamId = searchParams.get("streamId");
  const collegeId = searchParams.get("collegeId");
  const companyId = searchParams.get("companyId");
  const careerId = searchParams.get("careerId");
  const courseId = searchParams.get("courseId");

  const [allColleges, setAllColleges] = useState<College[]>([]);
  const [filteredByCoursesColleges, setFilteredByCoursesColleges] = useState<
    College[]
  >([]);
  const [streams, setStreams] = useState<Stream[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured");
  const [dialogOpen, setDialogOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    // Fetch all college details
    axios
      .post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails")
      .then((res) => setAllColleges(res?.data?.colleges || []))
      .catch(console.error);

    // Fetch streams with nested relations
    axios
      .post("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata")
      .then((res) => setStreams(res?.data?.streams))
      .catch(console.error);
  }, []);

  const fetchCollegesByCourse = async (courseIds: string[]) => {
    try {
      const res = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getcollegesbycourses",
        {
          course_ids: courseIds,
        }
      );
      return res?.data?.colleges;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const courseIds = selectedFilters
      .filter((filter) => filter.startsWith("Courses|"))
      .map((filter) => filter.split("|")[1]); // extract course ID

    if (courseIds.length > 0) {
      fetchCollegesByCourse(courseIds).then((colleges) => {
        setFilteredByCoursesColleges(colleges || []);
      });
    } else {
      setFilteredByCoursesColleges([]);
    }
  }, [selectedFilters]);

  // Find the selected stream object
  const selectedStream = useMemo(
    () => streams.find((s) => s.id.toString() === streamId),
    [streams, streamId]
  );

  // Decide which colleges to show: all or only those in the selected stream
  const displayedColleges = useMemo(() => {
    let baseColleges: College[] =
      filteredByCoursesColleges.length > 0
        ? filteredByCoursesColleges
        : allColleges;

    // If no filters, return early
    if (selectedFilters.length === 0) return baseColleges;

    // Organize selectedFilters by category
    const filtersByCategory = selectedFilters.reduce((acc, filter) => {
      const [category, id, name] = filter.split("|");
      if (!acc[category]) acc[category] = new Set();
      acc[category].add(id || name); // use id if available, else name
      return acc;
    }, {} as Record<string, Set<string>>);

    // If a stream is selected, filter to its colleges first
    if (selectedStream && !filtersByCategory.Streams) {
      const ids = new Set(selectedStream.colleges.map((c) => c.id));
      baseColleges = baseColleges.filter((col) => ids.has(col.id));
    }

    if (filtersByCategory.Streams) {
      const streamIds = filtersByCategory.Streams;
      const validCollegeIds = new Set<number>();
      streams.forEach((stream) => {
        if (streamIds.has(String(stream.id))) {
          stream.colleges.forEach((college) => validCollegeIds.add(college.id));
        }
      });
      baseColleges = baseColleges.filter((college) =>
        validCollegeIds.has(college.id)
      );
    }

    // Apply filters
    return baseColleges.filter((college) => {
      // Location
      if (
        filtersByCategory.Location &&
        !filtersByCategory.Location.has(college.city)
      ) {
        return false;
      }

      // Type
      if (filtersByCategory.Type && !filtersByCategory.Type.has(college.type)) {
        return false;
      }

      // ApprovedBy
      if (
        filtersByCategory.ApprovedBy &&
        !filtersByCategory.ApprovedBy.has(college.approved_by)
      ) {
        return false;
      }

      return true;
    });
  }, [allColleges, filteredByCoursesColleges, selectedStream, selectedFilters]);

  const RegisterContent = () => (
    <Box sx={{ p: 3, bgcolor: "#FFD700", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Get personalised college recommendations
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Registering gives you the benefit to browse variety of colleges based on
        your preferences
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#00B5D1",
          "&:hover": {
            bgcolor: "#009BB3",
          },
        }}
      >
        Register
      </Button>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, pt: 20 }}>
        {/* Add BlogSection at the top */}
        <BlogSection />
        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3} lg={3}>
            <FilterPanel
              streams={streams}
              allColleges={allColleges}
              selectedStreamId={streamId}
              collegeId={collegeId}
              companyId={companyId}
              careerId={careerId}
              courseId={courseId}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </Grid>

          {/* College Listings */}
          <Grid item xs={12} md={9} lg={6}>
            {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ flexGrow: 1 }} />
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as string)}
                  displayEmpty
                  sx={{
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.main,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <MenuItem value="Featured">Sort by: Featured</MenuItem>
                  <MenuItem value="Alphabetical">
                    Sort by: Alphabetical
                  </MenuItem>
                  <MenuItem value="Established">
                    Sort by: Established Year
                  </MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            {displayedColleges.map((college) => (
              <CollegeCard key={college.id}>
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
                      {/* <Box
                        sx={{
                          position: "relative",
                          width: 60,
                          height: 60,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src="/placeholder.svg"
                          alt={`${college?.college_short_name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </Box> */}
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
                    {/* <IconButton sx={{ alignSelf: "flex-start" }}>
                      <FavoriteBorder />
                    </IconButton> */}
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
                        <Typography>{college?.email || "N/A"}</Typography>
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
                          <Button variant="outlined" startIcon={<Link />}>
                            Visit Website
                          </Button>
                          <Button variant="contained">Brochure</Button>
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
        <FloatingButton
          variant="contained"
          color="primary"
          onClick={() => setDialogOpen(true)}
          sx={{
            minWidth: "120px",
            py: 1,
            px: 2,
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          Register
        </FloatingButton>

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
      </Container>
    </ThemeProvider>
  );
}

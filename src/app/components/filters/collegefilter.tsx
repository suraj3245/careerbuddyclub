"use client";
import React, { useEffect, useMemo, useState, useRef, useTransition } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toStreamPath } from "@/utils/streamPath";
import { setFilterCategory, parseFiltersFromSearchParams } from "@/utils/filters.utils";


interface Stream {
  id: number;
  title: string;
  description: string | null;
  colleges: College[];
  companies: Company[];
  careers: Career[];
  courses: Course[];
}
interface College {
  id: number;
  college_full_name: string;
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

const CollegeFinder: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<number | null>(null);
  const [allStreamsData, setAllStreamsData] = useState<Stream[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const router = useRouter();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // canonical filter state from URL
  const searchParams = useSearchParams();
  const filters = useMemo(() => parseFiltersFromSearchParams(searchParams) ?? {}, [searchParams]);

  // Sync with filter URL: when Streams param is set, update local streamId
  useEffect(() => {
    if (filters.Streams && filters.Streams[0]) {
      const id = Number(filters.Streams[0]);
      if (id !== activeStreamId) {
        setActiveStreamId(id);
      }
    }
  }, [filters.Streams, activeStreamId]);

  // Set default streamId to the first valid stream (with data) when streams are loaded or changed
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata");
        const streamsData = response?.data?.streams || [];
        setAllStreamsData(streamsData);
        // Set the initial active stream if not already set by URL params
        if (!activeStreamId && streamsData.length > 0) {
          setActiveStreamId(streamsData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
        setAllStreamsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []); // Runs only once on initial page load

  const [isPending, startTransition] = useTransition();
  const handleStreamChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    startTransition(() => {
      setFilterCategory(router, "Streams", [String(newValue)], filters);
    });
  };

  const activeStreamData = useMemo(() => allStreamsData.find(s => s.id === activeStreamId) || null, [allStreamsData, activeStreamId]);
  const selectedStreamTitle = activeStreamData?.title || "";
  const { colleges = [], companies = [], careers = [], courses = [] } = activeStreamData || {};

  // View All handlers: update the filter, and optionally update the pretty URL
  const handleViewAllColleges = () => {
    if (activeStreamId != null) {
      startTransition(() => {
        setFilterCategory(router, "Streams", [String(activeStreamId)], filters);
        router.push(`/colleges/${toStreamPath(selectedStreamTitle, activeStreamId)}`);
      });
    }
  };
  const handleViewAllCompanies = () => {
    startTransition(() => {
      router.push("/company-v1");
    });
  };
  const handleViewAllCareers = () => {
    startTransition(() => {
      router.push("/careers");
    });
  };
  const handleViewAllCourses = () => {
    startTransition(() => {
      router.push("/courses");
    });
  };

  const prefetchedRoutesRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (typeof activeStreamId === "number" && selectedStreamTitle) {
      const route = `/colleges/${toStreamPath(selectedStreamTitle, activeStreamId)}`;
      if (!prefetchedRoutesRef.current.has(route)) {
        prefetchedRoutesRef.current.add(route);
        setTimeout(() => {
          router.prefetch(route);
        }, 0);
      }
    }
  }, [activeStreamId, selectedStreamTitle, router]);

  return (
    <div className="container mt-80">
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
        >
          Find The Perfect College For You
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Discover top colleges, exams, and opportunities in your preferred
          field.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : allStreamsData.length > 0 ? (
            typeof activeStreamId === "number" && (
              <Tabs
                value={activeStreamId}
                onChange={handleStreamChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{ style: { backgroundColor: "#13adbd" } }}
              >
                {allStreamsData.map((stream) => (
                  <Tab
                    key={stream.id}
                    label={stream.title}
                    value={stream.id}
                    sx={{
                      fontWeight: "bold",
                      color: "text.secondary",
                      "&.Mui-selected": {
                        color: "#13adbd",
                      },
                    }}
                  />
                ))}
              </Tabs>
            )
          ) : (
            <Typography color="textSecondary" sx={{ mt: 2 }}>
              No streams available.
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2, height: { xs: "auto", md: "50vh" } }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
            <CircularProgress size={48} />
          </Box>
        ) : !activeStreamData ? (
          <Typography align="center" sx={{ mt: 8 }}>
            No stream data found. Please select another stream.
          </Typography>
        ) : (
          <Grid container spacing={2} sx={{ height: "100%" }}>
            {/* First Column */}
            {/* Featured Colleges */}
            <Grid item xs={12} md={4} sx={{ height: { xs: "auto", md: "100%" } }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  backgroundColor: "#f0f8ff",
                  padding: "7px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    marginX: 2,
                  }}
                >
                  Featured Colleges
                  <Button variant="text" size="small" onClick={handleViewAllColleges}>
                    View All
                  </Button>
                </Typography>
                <CardContent sx={{ flex: 1, overflowY: "auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: { xs: "nowrap", md: "wrap" },
                      gap: 1,
                      padding: 1,
                      overflowX: { xs: "auto", md: "hidden" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {colleges?.map((college, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        sx={{
                          flex: "1 0 auto",
                          minWidth: "120px",
                          fontSize: ".7rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {college.college_full_name}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* Middle Column with 2 Rows */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: { xs: "auto", md: "100%" },
              }}
            >
              {/* First Row - Top Hiring Companies */}
              <Grid
                item
                sx={{
                  flex: "1 1 50%",
                  overflowY: "auto",
                  paddingBottom: 1,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    backgroundColor: "#f0f8ff",
                    padding: "7px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: 2,
                    }}
                  >
                    Top Hiring Companies
                    <Button variant="text" size="small" onClick={handleViewAllCompanies}>
                      View All
                    </Button>
                  </Typography>
                  <CardContent sx={{ flex: 1, overflowY: "auto" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: { xs: "nowrap", md: "wrap" },
                        gap: 1,
                        padding: 1,
                        overflowX: { xs: "auto", md: "hidden" },
                        whiteSpace: "nowrap",
                      }}
                    >
                      {companies?.map((company, index) => (
                        <Button
                          key={index}
                          variant="outlined"
                          sx={{
                            flex: "1 0 auto",
                            minWidth: "120px",
                            fontSize: ".7rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {company.name}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Row - Top Careers */}
              <Grid
                item
                sx={{
                  flex: "1 1 50%",
                  overflowY: "auto",
                  paddingTop: 1,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    backgroundColor: "#f0f8ff",
                    padding: "7px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      marginX: 2,
                    }}
                  >
                    Top Careers
                    <Button variant="text" size="small" onClick={handleViewAllCareers}>
                      View All
                    </Button>
                  </Typography>
                  <CardContent sx={{ flex: 1, overflowY: "auto" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: { xs: "nowrap", md: "wrap" },
                        gap: 1,
                        padding: 1,
                        overflowX: { xs: "auto", md: "hidden" },
                        whiteSpace: "nowrap",
                      }}
                    >
                      {careers?.map((career, index) => (
                        <Button
                          key={index}
                          variant="outlined"
                          sx={{
                            flex: "1 0 auto",
                            minWidth: "120px",
                            fontSize: ".7rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {career.title}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Third Column */}
            {/* Related Courses */}
            <Grid item xs={12} md={4} sx={{ height: { xs: "auto", md: "100%" } }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  backgroundColor: "#f0f8ff",
                  padding: "7px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    marginX: 2,
                  }}
                >
                  Related Courses
                  <Button variant="text" size="small" onClick={handleViewAllCourses}>
                    View All
                  </Button>
                </Typography>
                <CardContent sx={{ flex: 1, overflowY: "auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: { xs: "nowrap", md: "wrap" },
                      gap: 1,
                      padding: 1,
                      overflowX: { xs: "auto", md: "hidden" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {courses?.map((course, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        sx={{
                          flex: "1 0 auto",
                          minWidth: "120px",
                          fontSize: ".7rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {course.name}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default CollegeFinder;

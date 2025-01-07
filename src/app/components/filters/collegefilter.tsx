"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";

const CollegeFinder: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const categories = [
    "Engineering",
    "Management",
    "Commerce and Banking",
    "Medical",
    "Science",
    "Hotel Management",
    "Information Technology",
    "Engineering",
    "Management",
    "Commerce and Banking",
    "Medical",
    "Science",
    "Hotel Management",
    "Information Technology",
  ];

  const featuredColleges = [
    "Parul University",
    "Lovely Professional University",
    "Chandigarh University",
    "K. R. Mangalam University",
    "NIMS University",
    "Lingaya's Vidyapeeth",
    "Jagannath University, Jaipur",
    "Jagannath University NCR Haryana",
  ];

  const importantExams = ["GPAT", "LPUNEST", "HPCET", "TS EAMCET", "OJEE"];

  const relatedCourses = [
    "B Pharm + MBA Integrated",
    "M Pharm in Pharmaceutics",
    "B Pharm Hons.",
    "B Pharm Unani",
    "Pharmacy Courses",
    "Pharmacology",
  ];

  const topStates = [
    "Maharashtra",
    "Tamilnadu",
    "Delhi",
    "Karnataka",
    "Andhra Pradesh",
    "Punjab",
  ];

  return (
    <div className="container mt-80">
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
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
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { backgroundColor: "#13adbd" } }}
          >
            {categories.map((category, index) => (
              <Tab
                key={index}
                label={category}
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
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2, height: "50vh" }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          {/* First Column */}
          {/* Featured Colleges */}
          <Grid item xs={12} md={4} sx={{ height: "100%" }}>
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
                <Button variant="text" size="small">
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
                  {featuredColleges.map((college, index) => (
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
                      {college}
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
            sx={{ height: "100%",overflowY: "auto" }}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <Grid
              container
              spacing={2}
              direction="column"
              sx={{ height: "100%", marginTop: "0px", marginBottom: "0px" }}
            >
              {/* Top Card */}
              {/* Important Exams */}
              <Grid item sx={{ height: "50%" }}>
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
                    <Button variant="text" size="small">
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
                      {importantExams.map((exam, index) => (
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
                          {exam}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Related Courses */}
              <Grid item sx={{ height: "50%" }}>
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
                    <Button variant="text" size="small">
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
                      {relatedCourses.map((course, index) => (
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
                          {course}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Third Column */}
          {/* Top States */}
          <Grid item xs={12} md={4} sx={{ height: "100%" }}>
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
                <Button variant="text" size="small">
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
                  {topStates.map((state, index) => (
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
                      {state}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CollegeFinder;
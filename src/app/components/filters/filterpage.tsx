"use client";

import { useState } from "react";
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
import { FavoriteBorder, Search, LocationOn } from "@mui/icons-material";
import Image from "next/image";
import BlogSection from "./blog-section";
import FilterPanel from "./filterpanel";

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
  const [sortBy, setSortBy] = useState("Featured");
  const [dialogOpen, setDialogOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

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
            <FilterPanel />
          </Grid>

          {/* College Listings */}
          <Grid item xs={12} md={9} lg={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
                  <MenuItem value="Rating">Sort by: Rating</MenuItem>
                  <MenuItem value="Fees">Sort by: Fees</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {[1, 2, 3, 4, 5].map((college) => (
              <CollegeCard key={college}>
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
                      <Box
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
                          alt="College logo"
                          layout="fill"
                          objectFit="contain"
                        />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1">
                          IIM Ahmedabad (IIMA) : Indian Institute of Management
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <LocationOn sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            Ahmedabad : Govt
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <IconButton sx={{ alignSelf: "flex-start" }}>
                      <FavoriteBorder />
                    </IconButton>
                  </Box>

                  {/* Details Section: full width */}
                  <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">
                          Courses Offered
                        </Typography>
                        <Typography>17 Courses | ⭐ 4.7</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          Exams Accepted
                        </Typography>
                        <Typography>CBSE, +2, ISE</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">
                          Total Tuition Fees
                        </Typography>
                        <Typography>₹64 K - 4 L</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          Average Salary
                        </Typography>
                        <Typography>₹1 L - 1.5 L</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <Button variant="outlined" startIcon={<Search />}>
                            Compare
                          </Button>
                          <Button variant="contained">Brochure</Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </CollegeCard>
            ))}
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

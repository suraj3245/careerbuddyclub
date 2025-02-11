"use client";

import { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Button,
  CssBaseline,
  Fab,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import {
  FavoriteBorder,
  Search,
  LocationOn,
  Clear,
  Person,
} from "@mui/icons-material";
import Image from "next/image";
import BlogSection from "./blog-section";

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

// Styled components
const FilterChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "& .MuiChip-deleteIcon": {
    color: "white",
  },
}));

const CollegeCard = styled(Card)({
  marginBottom: "16px",
  backgroundColor: "rgb(186, 230, 243)",
});

const RegisterBanner = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFD700",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  position: "sticky",
  top: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  right: 20,
  transform: "translateY(-50%)",
  zIndex: 1000,
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export default function CollegeListing() {
  const [filters, setFilters] = useState(["2-3 Lakh", "Ahmedabad", "MCA"]);
  const [sortBy, setSortBy] = useState("Featured");
  const [dialogOpen, setDialogOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const RegisterContent = () => (
    <>
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
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, pt: 20 }}>
        {/* Add BlogSection at the top */}
        <BlogSection />
        <Grid container spacing={3}>
          {/* Filters Header */}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                All Filters
              </Typography>
              <Button
                color="info"
                onClick={() => setFilters([])}
                sx={{ mr: 2 }}
              >
                Clear All
              </Button>
              <Typography sx={{ mr: 2 }}>1710 results</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as string)}
                  displayEmpty
                  startAdornment={
                    <Typography sx={{ mr: 1 }}>Sort By :</Typography>
                  }
                >
                  <MenuItem value="Featured">Featured</MenuItem>
                  <MenuItem value="Rating">Rating</MenuItem>
                  <MenuItem value="Fees">Fees</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
              {filters.map((filter) => (
                <FilterChip
                  key={filter}
                  label={filter}
                  onDelete={() => handleRemoveFilter(filter)}
                  deleteIcon={<Clear />}
                />
              ))}
            </Box>
          </Grid>

          {/* Left Sidebar */}
          <Grid item xs={12} md={3} lg={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Specialization
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Specialization..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              {["Digital Marketing", "Finance", "Psychology"].map((spec) => (
                <FormControlLabel
                  key={spec}
                  control={<Checkbox />}
                  label={spec}
                  sx={{ display: "block" }}
                />
              ))}
            </Paper>
          </Grid>

          {/* College Listings */}
          <Grid item xs={12} md={9} lg={7}>
            {[1, 2, 3, 4, 5].map((college) => (
              <CollegeCard key={college}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Box sx={{ position: "relative", height: 150 }}>
                        <Image
                          src="/placeholder.svg"
                          alt="College logo"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">
                          IIM Ahmedabad (IIMA) : Indian Institute of Management
                        </Typography>
                        <IconButton>
                          <FavoriteBorder />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <LocationOn sx={{ mr: 1 }} />
                        <Typography>Ahmedabad : Govt</Typography>
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            Courses Offered
                          </Typography>
                          <Typography>17 Courses | ⭐ 4.7</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            Total Tuition Fees
                          </Typography>
                          <Typography>₹64 K - 4 L</Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        Exams Accepted
                      </Typography>
                      <Typography>CBSE, +2, ISE</Typography>
                      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <Button variant="outlined" startIcon={<Search />}>
                          Compare
                        </Button>
                        <Button variant="contained">Brochure</Button>
                      </Box>
                    </Grid>
                  </Grid>
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
          color="primary"
          aria-label="register"
          onClick={() => setDialogOpen(true)}
        >
          Register
        </FloatingButton>

        {/* Dialog for small screens */}
        <Dialog
          open={dialogOpen && !isLargeScreen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="xs"
        >
          <DialogContent>
            <RegisterContent />
          </DialogContent>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

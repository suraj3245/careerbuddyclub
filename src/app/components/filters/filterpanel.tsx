"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Chip,
  InputAdornment,
} from "@mui/material";
import { Search, ExpandMore, ExpandLess, Close } from "@mui/icons-material";

interface FilterOption {
  name: string;
  count?: number;
}

const filters = {
  Location: [
    { name: "Kolkata", count: 87 },
    { name: "West Bengal", count: 110 },
    { name: "Siliguri", count: 8 },
    { name: "Durgapur", count: 8 },
    { name: "Bardhaman", count: 5 },
    { name: "West Bengal - Other", count: 3 },
  ],
  Specialization: [
    { name: "Forensic Science", count: 45 },
    { name: "Digital Marketing", count: 62 },
    { name: "Industrial Engineering", count: 38 },
    { name: "HealthCare & Hospital", count: 51 },
  ],
  Course: [
    { name: "MBA/PGDM", count: 70 },
    { name: "BBA", count: 13 },
  ],
  Fees: [
    { name: "< 1 Lakh", count: 25 },
    { name: "1 - 2 Lakh", count: 42 },
    { name: "2 - 3 Lakh", count: 38 },
    { name: "3 - 5 Lakh", count: 29 },
    { name: "> 5 Lakh", count: 15 },
  ],
  Rating: [
    { name: "1 - 2 Star", count: 12 },
    { name: "2 - 3 Star", count: 28 },
    { name: "3 - 4 Star", count: 45 },
    { name: "4 - 5 Star", count: 34 },
  ],
};

export default function FilterPanel() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["Location"])
  );
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "Biotechnology Engineering",
    "Finance",
    "Kolkata",
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleFilterSelect = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleClearAll = () => {
    setSelectedFilters([]);
  };

  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 320, p: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              All Filters
            </Typography>
          </Box>
        </Box>
        <Typography
          component="button"
          onClick={handleClearAll}
          sx={{
            color: "primary.main",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "0.875rem",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Clear All
        </Typography>
      </Box>

      {/* Selected Filters */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {selectedFilters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            onDelete={() => handleRemoveFilter(filter)}
            deleteIcon={<Close />}
            sx={{
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              bgcolor: "transparent",
              "& .MuiChip-deleteIcon": {
                color: "text.primary",
              },
            }}
          />
        ))}
      </Box>

      {/* Filter Categories */}
      {Object.entries(filters).map(([category, options]) => (
        <Box key={category} sx={{ mb: 2 }}>
          <Box
            onClick={() => handleCategoryClick(category)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              py: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {category}
            </Typography>
            {openCategories.has(category) ? <ExpandLess /> : <ExpandMore />}
          </Box>

          {openCategories.has(category) && (
            <Box sx={{ mt: 1 }}>
              {category === "Location" && (
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#F5F5F5",
                      borderRadius: "8px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              {options.map((option: FilterOption) => (
                <Box
                  key={option.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      checked={selectedFilters.includes(option.name)}
                      onChange={() => handleFilterSelect(option.name)}
                      sx={{
                        color: "#999",
                        "&.Mui-checked": {
                          color: "primary.main",
                        },
                      }}
                    />
                    <Typography variant="body2">{option.name}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    ({option.count})
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

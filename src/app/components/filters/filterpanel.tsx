"use client";
import { useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Chip,
  Button,
  useMediaQuery,
  Theme,
  IconButton,
  Drawer,
} from "@mui/material";
import { Close, FilterList } from "@mui/icons-material";

interface FiltersObject {
  [key: string]: string[];
}

interface Props {
  filterOptions?: Record<string, any[]>;
  filters: FiltersObject;
  onChangeCategory?: (cat: string, vals: string[]) => void;
  onRemoveFilterChip?: (cat: string, val: string) => void;
  getChipLabel: (cat: string, val: string) => string;
  onClearAll?: () => void;
}

export default function FilterPanel({
  filterOptions = {},
  filters = {},
  onChangeCategory = () => {},
  onRemoveFilterChip = () => {},
  getChipLabel = (cat, val) => val,
  onClearAll = () => {},
}: Props) {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Chips
  const filterChips = useMemo(() => {
    return Object.entries(filters).flatMap(([cat, vals]) =>
      (vals ?? []).map((val) => ({ cat, val }))
    );
  }, [filters]);

  // Checkbox click
  const handleCheckbox = useCallback(
    (category: string, filterValue: string) => {
      const current = filters[category] ?? [];
      const next = current.includes(filterValue)
        ? current.filter((v) => v !== filterValue)
        : [...current, filterValue];

      onChangeCategory(category, next);
    },
    [filters, onChangeCategory]
  );

  const FilterContent = () => (
    <>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          All Filters
        </Typography>
        <Button onClick={onClearAll}>Clear All</Button>
      </Box>

      {/* Filter Chips */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
          minHeight: "34px",
        }}
      >
        {filterChips.map((chip) => (
          <Chip
            key={chip.cat + chip.val}
            label={getChipLabel(chip.cat, chip.val)}
            onDelete={() => onRemoveFilterChip(chip.cat, chip.val)}
            deleteIcon={<Close />}
          />
        ))}
      </Box>

      {/* ALWAYS OPEN FILTER CATEGORIES */}
      {Object.entries(filterOptions ?? {}).map(([category, options]) => {
        if (!options || options.length === 0) return null;

        return (
          <Box
            key={category}
            sx={{
              mb: 2,
              border: "1px solid #E0E0E0",
              borderRadius: 2,
              p: 1.5,
              bgcolor: "#fff",
            }}
          >
            {/* Category Title — No Click Handler */}
            <Typography fontWeight={600} sx={{ mb: 1 }}>
              {category}
            </Typography>

            {/* Entire section ALWAYS visible */}
            <Box
              sx={{
                maxHeight: 220,
                overflowY: "auto",
                mx: -1.5,
                px: 1.5,
              }}
            >
              {options.map((opt: any) => {
                const key = category === "Streams" ? String(opt.id) : opt.name;
                const isChecked = filters[category]?.includes(key);

                return (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 0.5,
                      cursor: "pointer",
                    }}
                    onClick={() => handleCheckbox(category, key)}
                  >
                    <Checkbox
                      checked={isChecked}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => handleCheckbox(category, key)}
                    />
                    <Typography variant="body2">{opt.name}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );

  return (
    <>
      {isLargeScreen ? (
        <Box sx={{ width: "100%", maxWidth: 340 }}>
          <FilterContent />
        </Box>
      ) : (
        <>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box sx={{ width: 340, p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="h6">Filters</Typography>
                <IconButton onClick={() => setIsDrawerOpen(false)}>
                  <Close />
                </IconButton>
              </Box>

              <FilterContent />
            </Box>
          </Drawer>

          {!isDrawerOpen && (
            <Button
              startIcon={<FilterList />}
              onClick={() => setIsDrawerOpen(true)}
              variant="contained"
            >
              Filters
            </Button>
          )}
        </>
      )}
    </>
  );
}

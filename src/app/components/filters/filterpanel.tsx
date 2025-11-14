"use client";
import { useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Chip,
  InputAdornment,
  useMediaQuery,
  Theme,
  IconButton,
  Drawer,
  Button,
} from "@mui/material";
import { Close, FilterList, ExpandMore, ExpandLess } from "@mui/icons-material";

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
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(["Streams"]));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filterChips = useMemo(
    () =>
      Object.entries(filters).flatMap(([cat, vals]) =>
        (vals ?? []).map((val) => ({ cat, val }))
      ),
    [filters]
  );

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(category) ? next.delete(category) : next.add(category);
      return next;
    });
  };

  const handleCheckbox = useCallback(
    (category: string, filterValue: string) => {
      const current = filters[category] ?? [];
      const isChecked = current.includes(filterValue);

      // Consistent multi-select behavior for all categories
      const newSelection = isChecked ? current.filter((v) => v !== filterValue) : [...current, filterValue];
      onChangeCategory(category, newSelection);
    },
    [filters, onChangeCategory]
  );

  function FilterContent() {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            All Filters
          </Typography>
          <Button onClick={onClearAll}>Clear All</Button>
        </Box>

        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
          minHeight: '34px' // Set a minimum height to prevent layout shift when chips appear/disappear
        }}>
          {filterChips.map((chip) => (
            <Chip
              key={chip.cat + chip.val}
              label={getChipLabel(chip.cat, chip.val)}
              onDelete={() => onRemoveFilterChip(chip.cat, chip.val)}
              deleteIcon={<Close />}
            />
          ))}
        </Box>

        {Object.entries(filterOptions ?? {}).map(([category, options]) => {
          const filteredOpts = options;
          const isOpen = openCategories.has(category);

          // Do not render the category if there are no options to show
          if (!filteredOpts || filteredOpts.length === 0) return null;

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
              <Box
                onClick={() => handleCategoryClick(category)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography fontWeight={600}>{category}</Typography>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </Box>

              {isOpen && (
                <Box sx={{ mt: 1 }}>
                  {filteredOpts.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                      No {category.toLowerCase()} found.
                    </Typography>
                  ) : (
                    <Box sx={{
                      maxHeight: 220,
                      overflowY: "auto",
                      mx: -1.5, // Extend scroll area to the border
                      px: 1.5  // Add padding back to the inner content
                    }}>
                      {filteredOpts.map((opt: any) => {
                        const key =
                          category === "Streams" ? String(opt.id) : opt.name;
                        const isChecked = filters[category]?.includes(key);
                        return (
                          <Box
                            key={key}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              py: 0.5,
                            }}
                            onClick={() => handleCheckbox(category, key)}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", cursor: 'pointer' }}>
                              <Checkbox
                                checked={isChecked}
                                onClick={(e) => e.stopPropagation()} // Prevent parent onClick from firing
                                onChange={() => handleCheckbox(category, key)}
                              />
                              <Typography variant="body2">{opt.name}</Typography>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          );
        })}
      </>
    );
  }

  return (
    <>
      {isLargeScreen ? (
        // Desktop: Render the full panel inline
        <Box sx={{ width: "100%", maxWidth: 340 }}>
          <FilterContent />
        </Box>
      ) : (
        // Mobile: Render a button to open the drawer
        <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 340, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6">Filters</Typography>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <FilterContent />
        </Box>
      </Drawer>
      )}
      {!isLargeScreen && !isDrawerOpen && (
        <Button startIcon={<FilterList />} onClick={() => setIsDrawerOpen(true)} variant="contained">Filters</Button>
      )}
    </>
  );
}

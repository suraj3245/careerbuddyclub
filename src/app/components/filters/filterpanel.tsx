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
import {
  Search,
  Close,
  FilterList,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { FiltersObject } from "@/utils/filters.utils";

interface Stream {
  id: number;
  title: string;
  colleges: any[];
  // courses: any[];
}
interface Props {
  streams: Stream[];
  allColleges: any[];
  filters?: FiltersObject;
  onChangeCategory?: (cat: string, vals: string[]) => void;
  onRemoveFilterChip?: (cat: string, val: string) => void;
  onClearAll?: () => void;
}
export default function FilterPanel({
  streams,
  allColleges,
  filters = {},
  onChangeCategory = () => {},
  onRemoveFilterChip = () => {},
  onClearAll = () => {},
}: Props) {
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(["Streams"]));
  const [categorySearch, setCategorySearch] = useState<Record<string, string>>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Memoized filter options (very fast)
  const filterOptions = useMemo(() => {
    const result: Record<string, any[]> = {};
    result.Streams = streams.map((s) => ({
      name: s.title,
      count: Array.isArray(s.colleges) ? s.colleges.length : 0,
      id: String(s.id),
    }));

    const locMap = new Map<string, number>();
    (allColleges ?? []).forEach((c: any) => {
      if (!locMap.has(c.city)) locMap.set(c.city, 0);
      locMap.set(c.city, locMap.get(c.city)! + 1);
    });
    result.Location = Array.from(locMap, ([name, count]) => ({ name, count }));

    const typeMap = new Map<string, number>();
    (allColleges ?? []).forEach((c: any) => {
      if (!typeMap.has(c.type)) typeMap.set(c.type, 0);
      typeMap.set(c.type, typeMap.get(c.type)! + 1);
    });
    result.Type = Array.from(typeMap, ([name, count]) => ({ name, count }));

    const appMap = new Map<string, number>();
    (allColleges ?? []).forEach((c: any) => {
      if (!appMap.has(c.approved_by)) appMap.set(c.approved_by, 0);
      appMap.set(c.approved_by, appMap.get(c.approved_by)! + 1);
    });
    result.ApprovedBy = Array.from(appMap, ([name, count]) => ({ name, count }));

    // let courses: any[] = [];
    // if ((filters.Streams ?? []).length) {
    //   const ids = new Set(filters.Streams ?? []);
    //   (streams ?? []).forEach((s: any) => {
    //     if (ids.has(String(s.id))) courses = s.courses ?? [];
    //   });
    // } else {
    //   const courseMap = new Map<string, any>();
    //   (streams ?? []).forEach((s: any) => (s.courses ?? []).forEach((c: any) => courseMap.set(String(c.id), c)));
    //   courses = Array.from(courseMap.values());
    // }
    // result.Courses = (courses ?? []).map((c: any) => ({
    //   id: String(c.id), name: c.name, count: 1,
    // }));

    return result;
  }, [streams, allColleges, filters.Streams]);

  const getChipLabel = useCallback((cat: string, val: string) => {
    if (cat === "Streams") {
      const stream = streams.find(s => String(s.id) === val);
      return stream ? stream.title : val;
    }
    return val;
  }, [streams]);

  const filterChips: { cat: string, val: string }[] = useMemo(() =>
    Object.entries(filters).flatMap(([cat, vals]) =>
      (vals ?? []).map(val => ({ cat, val }))
    ), [filters]
  );

  const handleCategoryClick = useCallback((category: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category); else next.add(category);
      return next;
    });
  }, []);

  const handleCheckbox = useCallback((category: string, filterValue: string) => {
    const current = filters[category] ?? [];
    let newSelection: string[];
    if (category === "Streams" || category === "Location") {
      newSelection = current.includes(filterValue) ? [] : [filterValue];
    } else {
      newSelection = current.includes(filterValue)
        ? current.filter((v: string) => v !== filterValue)
        : [...current, filterValue];
    }
    onChangeCategory(category, newSelection);
  }, [filters, onChangeCategory]);

  function FilterContent() {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>All Filters</Typography>
          <Button onClick={onClearAll} sx={{ textTransform: "none" }}>Clear All</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {(filterChips ?? []).map((chip) => (
            <Chip
              key={chip.cat + "-" + chip.val}
              label={getChipLabel(chip.cat, chip.val)}
              onDelete={() => onRemoveFilterChip(chip.cat, chip.val)}
              deleteIcon={<Close />}
            />
          ))}
        </Box>
        {Object.entries(filterOptions).map(([category, options]) => {
          const q = categorySearch[category] || "";
          const filteredOpts = q
            ? (options ?? []).filter((opt: any) => String(opt.name).toLowerCase().includes(q.toLowerCase()))
            : (options ?? []);
          const isOpen = openCategories.has(category);

          return (
            <Box key={category} sx={{ mb: 2, border: '1px solid #E0E0E0', borderRadius: 2, p: 1.5, bgcolor: '#fff' }}>
              <Box
                onClick={() => handleCategoryClick(category)}
                sx={{
                  display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", py: 0.5,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{category}</Typography>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </Box>
              {isOpen && (
                <Box sx={{ mt: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Search"
                    value={q}
                    onChange={e => setCategorySearch({ ...categorySearch, [category]: e.target.value })}
                    sx={{ bgcolor: "#F5F5F5", borderRadius: "8px", mb: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {(filteredOpts ?? []).length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                      No {category.toLowerCase()} found.
                    </Typography>
                  ) : (
                    <Box sx={{ maxHeight: 220, overflowY: 'auto', pr: 0.5 }}>
                      {(filteredOpts ?? []).map((opt: any) => {
                        const key = category === "Streams" ? String(opt.id) : opt.name;
                        const isChecked = !!(filters[category] ?? []).includes(key);
                        return (
                          <Box
                            key={key}
                            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5, cursor: 'pointer' }}
                            onClick={() => handleCheckbox(category, key)}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Checkbox
                                checked={isChecked}
                                onChange={() => handleCheckbox(category, key)}
                                onClick={e => e.stopPropagation()}
                              />
                              <Typography variant="body2">{opt.name}</Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              ({opt.count})
                            </Typography>
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
      {!isLargeScreen && (
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <FilterList />
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 340, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <IconButton onClick={() => setIsDrawerOpen(false)}><Close /></IconButton>
          </Box>
          <FilterContent />
        </Box>
      </Drawer>
      {isLargeScreen && <Box sx={{ width: "100%", maxWidth: 340, p: 2 }}><FilterContent /></Box>}
    </>
  );
}
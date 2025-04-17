"use client";

import { useEffect, useMemo, useState } from "react";
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
  ExpandMore,
  ExpandLess,
  Close,
  FilterList,
} from "@mui/icons-material";

interface FilterOption {
  name: string;
  count: number;
  id?: number | string;
}
interface Stream {
  id: number;
  title: string;
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
  city: string;
  type: string;
  approved_by: string;
}
interface FilterProps {
  streams: Stream[];
  allColleges: College[];
  selectedStreamId: string | null;
  collegeId: string | null;
  companyId: string | null;
  careerId: string | null;
  courseId: string | null;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterPanel({
  streams,
  allColleges,
  selectedStreamId,
  collegeId,
  companyId,
  careerId,
  courseId,
  selectedFilters,
  setSelectedFilters,
}: FilterProps) {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["Streams"])
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Derive dynamic filter buckets
  const filters = useMemo(() => {
    // 1️⃣ Streams
    const streamOpts: FilterOption[] = streams.map((s) => ({
      name: s.title,
      count: s.colleges.length,
      id: s.id,
    }));

    // 2️⃣ Location   ← from allColleges
    const locMap = new Map<string, number>();
    allColleges.forEach((c) => {
      locMap.set(c.city, (locMap.get(c.city) || 0) + 1);
    });
    const locationOpts: FilterOption[] = Array.from(
      locMap,
      ([name, count]) => ({ name, count })
    );

    // 3️⃣ Type      ← from allColleges
    const typeMap = new Map<string, number>();
    allColleges.forEach((c) => {
      typeMap.set(c.type, (typeMap.get(c.type) || 0) + 1);
    });
    const typeOpts: FilterOption[] = Array.from(typeMap, ([name, count]) => ({
      name,
      count,
    }));

    // 4️⃣ ApprovedBy ← from allColleges
    const appMap = new Map<string, number>();
    allColleges.forEach((c) => {
      appMap.set(c.approved_by, (appMap.get(c.approved_by) || 0) + 1);
    });
    const approvedOpts: FilterOption[] = Array.from(
      appMap,
      ([name, count]) => ({ name, count })
    );

    // 5️⃣ Companies, Careers, Courses  ← same as before
    const companyMap = new Map<number, FilterOption>();
    const careerMap = new Map<number, FilterOption>();
    const courseMap = new Map<number, FilterOption>();

    streams.forEach((s) => {
      // company
      s.companies.forEach((co) => {
        const prev = companyMap.get(co.id);
        companyMap.set(co.id, {
          id: co.id,
          name: co.name,
          count: prev ? prev.count + s.colleges.length : s.colleges.length,
        });
      });
      // career
      s.careers.forEach((ca) => {
        const prev = careerMap.get(ca.id);
        careerMap.set(ca.id, {
          id: ca.id,
          name: ca.title,
          count: prev ? prev.count + s.colleges.length : s.colleges.length,
        });
      });
      // course
      s.courses.forEach((cu) => {
        const prev = courseMap.get(cu.id);
        courseMap.set(cu.id, {
          id: cu.id,
          name: cu.name,
          count: prev ? prev.count + s.colleges.length : s.colleges.length,
        });
      });
    });

    const companyOpts = Array.from(companyMap.values());
    const careerOpts = Array.from(careerMap.values());
    const courseOpts = Array.from(courseMap.values());

    return {
      Location: locationOpts,
      Streams: streamOpts,
      // Companies: companyOpts,
      // Careers: careerOpts,
      Courses: courseOpts,
      Type: typeOpts,
      ApprovedBy: approvedOpts,
    };
  }, [streams, allColleges]);

  useEffect(() => {
    if (selectedStreamId) {
      const s = streams.find((s) => s.id.toString() === selectedStreamId);
      if (s)
        setSelectedFilters((prev) => [
          ...new Set([...prev, `Streams|${s.id}|${s.title}`]),
        ]);
      setOpenCategories((prev) => new Set(prev).add("Streams"));
    }
  }, [selectedStreamId, streams]);

  const handleCategoryClick = (category: string) => {
    const next = new Set(openCategories);
    openCategories.has(category) ? next.delete(category) : next.add(category);
    setOpenCategories(next);
  };
  const handleFilterSelect = (category: string, option: FilterOption) => {
    const key =
      option.id != null
        ? `${category}|${option.id}|${option.name}`
        : `${category}||${option.name}`;
    setSelectedFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const handleClearAll = () => setSelectedFilters([]);
  const handleRemoveFilter = (filter: string) =>
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));

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
        <Box sx={{ width: 320, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <FilterContent
            filters={filters}
            selectedFilters={selectedFilters}
            openCategories={openCategories}
            handleCategoryClick={handleCategoryClick}
            handleFilterSelect={handleFilterSelect}
            handleClearAll={handleClearAll}
            handleRemoveFilter={handleRemoveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>
      </Drawer>
      {isLargeScreen && (
        <Box sx={{ width: "100%", maxWidth: 320, p: 2 }}>
          <FilterContent
            filters={filters}
            selectedFilters={selectedFilters}
            openCategories={openCategories}
            handleCategoryClick={handleCategoryClick}
            handleFilterSelect={handleFilterSelect}
            handleClearAll={handleClearAll}
            handleRemoveFilter={handleRemoveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>
      )}
    </>
  );
}

interface FilterContentProps {
  filters: Record<string, FilterOption[]>;
  selectedFilters: string[];
  openCategories: Set<string>;
  handleCategoryClick: (c: string) => void;
  handleFilterSelect: (category: string, option: FilterOption) => void;
  handleClearAll: () => void;
  handleRemoveFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

function FilterContent({
  filters,
  selectedFilters,
  openCategories,
  handleCategoryClick,
  handleFilterSelect,
  handleClearAll,
  handleRemoveFilter,
  searchQuery,
  setSearchQuery,
}: FilterContentProps) {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search all filters"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ bgcolor: "#F5F5F5", borderRadius: "8px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          All Filters
        </Typography>
        <Button onClick={handleClearAll} sx={{ textTransform: "none" }}>
          Clear All
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {selectedFilters.map((f) => (
          <Chip
            key={f}
            label={f.split("|")[2] || f}
            onDelete={() => handleRemoveFilter(f)}
            deleteIcon={<Close />}
          />
        ))}
      </Box>
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
              {options
                .filter((opt) =>
                  opt?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
                )
                .map((opt) => (
                  <Box
                    key={opt.name}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 0.5,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        checked={selectedFilters.includes(
                          opt.id != null
                            ? `${category}|${opt.id}|${opt.name}`
                            : `${category}||${opt.name}`
                        )}
                        onChange={() => handleFilterSelect(category, opt)}
                      />
                      <Typography variant="body2">{opt.name}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      ({opt.count})
                    </Typography>
                  </Box>
                ))}
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}

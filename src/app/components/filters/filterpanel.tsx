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
  courses: Course[];
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
  courseId: string | null;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  onStreamFilterChange?: (id: string | number | null) => void;
}

export default function FilterPanel({
  streams,
  allColleges,
  selectedStreamId,
  collegeId,
  courseId,
  selectedFilters,
  setSelectedFilters,
  onStreamFilterChange,
}: FilterProps) {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["Streams"])
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isStreamSelected = !!selectedStreamId;

  // Derive dynamic filter buckets: Streams hidden & related filter values shown if stream selected
  const filters = useMemo(() => {
    const result: Record<string, FilterOption[]> = {};

    // 1️⃣ Streams - Only show if not selected
    if (!isStreamSelected) {
      result.Streams = streams.map((s) => ({
        name: s.title,
        count: s.colleges.length,
        id: s.id,
      }));
    }

    // 2️⃣ Location   ← from allColleges (always show all locations)
    const locMap = new Map<string, number>();
    allColleges.forEach((c) => {
      locMap.set(c.city, (locMap.get(c.city) || 0) + 1);
    });
    result.Location = Array.from(locMap, ([name, count]) => ({ name, count }));

    // 3️⃣ Type
    const typeMap = new Map<string, number>();
    allColleges.forEach((c) => {
      typeMap.set(c.type, (typeMap.get(c.type) || 0) + 1);
    });
    result.Type = Array.from(typeMap, ([name, count]) => ({ name, count }));

    // 4️⃣ ApprovedBy
    const appMap = new Map<string, number>();
    allColleges.forEach((c) => {
      appMap.set(c.approved_by, (appMap.get(c.approved_by) || 0) + 1);
    });
    result.ApprovedBy = Array.from(appMap, ([name, count]) => ({ name, count }));

    // 5️⃣ Courses only (no companies/careers)
    let courses: Course[] = [];
    if (isStreamSelected) {
      const stream = streams.find((s) => s.id.toString() === selectedStreamId);
      if (stream) {
        courses = stream.courses;
      }
    } else {
      // Unique courses from all streams
      const courseMap = new Map<number, Course>();
      streams.forEach((s) => {
        s.courses.forEach((c) => courseMap.set(c.id, c));
      });
      courses = Array.from(courseMap.values());
    }

    result.Courses = courses.map((c) => ({
      id: c.id,
      name: c.name,
      count: 1,
    }));

    return result;
  }, [streams, allColleges, selectedStreamId, isStreamSelected]);

  // Select stream filter from prop on mount/URL change
  useEffect(() => {
    if (selectedStreamId && streams.length) {
      const s = streams.find((s) => s.id.toString() === selectedStreamId);
      if (s) setSelectedFilters([`Streams|${s.id}|${s.title}`]);
      setOpenCategories((prev) => new Set(prev).add("Streams"));
    }
    // If no selectedStreamId, clear Streams filter
    if (!selectedStreamId) {
      setSelectedFilters((prev) =>
        prev.filter((f) => !f.startsWith("Streams|"))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStreamId, streams]);

  useEffect(() => {
    if (courseId && streams.length) {
      streams.forEach((stream) =>
        stream.courses
          .filter((cu) => String(cu.id) === courseId)
          .forEach((cu) =>
            setSelectedFilters((prev) => [
              ...new Set([...prev, `Courses|${cu.id}|${cu.name}`]),
            ])
          )
      );
      setOpenCategories((prev) => new Set(prev).add("Courses"));
    }
  }, [courseId, streams]);

  const handleCategoryClick = (category: string) => {
    const next = new Set(openCategories);
    next.has(category) ? next.delete(category) : next.add(category);
    setOpenCategories(next);
  };

  const handleFilterSelect = (category: string, option: FilterOption) => {
    const key =
      option.id != null
        ? `${category}|${option.id}|${option.name}`
        : `${category}||${option.name}`;
    if (category === "Streams" && typeof option.id !== "undefined") {
      // If user checks a stream, call parent's stream handler
      if (selectedFilters.includes(key)) {
        setSelectedFilters([]);
        if (onStreamFilterChange) onStreamFilterChange(null); // cleared
      } else {
        setSelectedFilters([key]);
        if (onStreamFilterChange) onStreamFilterChange(option.id);
      }
    } else {
      setSelectedFilters((prev) =>
        prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
      );
    }
  };

  const handleClearAll = () => {
    setSelectedFilters([]);
    if (onStreamFilterChange) onStreamFilterChange(null);
  };
  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
    if (filter.startsWith("Streams|") && onStreamFilterChange)
      onStreamFilterChange(null);
  };

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
  const isSearchActive = searchQuery.trim().length > 0;
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

      {Object.entries(filters).map(([category, options]) => {
        const filtered = searchQuery
          ? options.filter((opt) =>
              opt.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : options;
        const isOpen = isSearchActive || openCategories.has(category);

        return (
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
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            {isOpen && (
              <Box sx={{ mt: 1 }}>
                {filtered.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    No {category.toLowerCase()} found.
                  </Typography>
                ) : (
                  filtered.map((opt) => {
                    const key =
                      opt.id != null
                        ? `${category}|${opt.id}|${opt.name}`
                        : `${category}||${opt.name}`;
                    return (
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
                            checked={selectedFilters.includes(key)}
                            onChange={() => handleFilterSelect(category, opt)}
                          />
                          <Typography variant="body2">{opt.name}</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          ({opt.count})
                        </Typography>
                      </Box>
                    );
                  })
                )}
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
}
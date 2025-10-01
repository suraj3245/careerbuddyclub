"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Link,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import blogData, { BlogContent } from "@/data/college-blog";

interface Stream {
  id: number | null;
  title: string;
  description: string;
}

interface BlogSectionProps {
  streams: Stream[];
  clgLocation: string[]; 
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  streams,
  clgLocation,
  selectedFilters,
  setSelectedFilters,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const streamIdParam = searchParams.get("streamId");
  const streamId = streamIdParam ? parseInt(streamIdParam, 10) : null;

  const selectedStream =
    streams.find((stream) => stream.id === streamId) || {
      id: null,
      title: "Best: Ranking 2025, Admissions, Courses, Fees, Placements,Campus,Reviews",
      description:
        "India boasts a rich educational landscape with a diverse range of colleges and universities offering many courses...",
    };

  const blogContent: BlogContent | undefined = streamId ? blogData[streamId] : undefined;

  const [expanded, setExpanded] = useState(false);
  const [matchedCity, setMatchedCity] = useState<string | null>(null);

  const maxPreviewHeight = 120;

  // City match logic: If blog title contains a city from clgLocation, add city to URL and selectedFilters
  useEffect(() => {
    // 1. Find city in title
    const titleToCheck = (blogContent?.title || selectedStream.title || "").toLowerCase();
    const foundCity =
      clgLocation.find((city) =>
        titleToCheck.includes(city.toLowerCase())
      ) || null;

    if (foundCity) {
      setMatchedCity(foundCity);

      // 2. Update city in URL if needed
      const currentCity = searchParams.get("city");
      if (currentCity !== foundCity) {
        const query = new URLSearchParams(Array.from(searchParams.entries()));
        query.set("city", foundCity);
        router.replace(`?${query.toString()}`, { scroll: false });
      }

      // 3. Update selectedFilters if city not already present
      const filterKey = `Location||${foundCity}`;
      if (!selectedFilters.includes(filterKey)) {
        setSelectedFilters((prev) => [...prev, filterKey]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clgLocation, blogContent, selectedStream, searchParams, router]);

  // Final blog title with city (only if not already included)
  const finalTitle = blogContent?.title || selectedStream.title;
  const titleWithCity =
    matchedCity &&
    !finalTitle.toLowerCase().includes(matchedCity.toLowerCase())
      ? `${finalTitle} in ${matchedCity}`
      : finalTitle;

  return (
    <Paper
      sx={{
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      {/* Blog Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {titleWithCity}
      </Typography>

      {/* Description & Table */}
      <Box
        id="blog-content"
        sx={{
          maxHeight: expanded ? "none" : `${maxPreviewHeight}px`,
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.3s ease",
        }}
      >
        {/* Changed: set whiteSpace: 'pre-line' for exact line breaks */}
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {blogContent?.description ||
            selectedStream.description ||
            "Explore the best colleges for this stream."}
        </Typography>

        {/* Table */}
        {blogContent?.tableData && (
          <>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              {blogContent.tableData.heading}
            </Typography>
            <Box
              sx={{
                // Enables horizontal scroll with momentum on iOS (iPhone/iPad) and nice scrollbars on desktop.
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                border: "1px solid #ccc",
                borderRadius: "8px",
                mt: 2,
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  height: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ccc",
                  borderRadius: "4px",
                },
              }}
            >
              <Table sx={{ minWidth: 800 }}>
                <TableHead>
                  <TableRow>
                    {[
                      "College",
                      "Courses",
                      "Short Description",
                      "Key Benefits",
                      "Eligibility",
                      "Fees",
                      "Website",
                    ].map((heading, idx) => (
                      <TableCell key={idx}>
                        <strong>{heading}</strong>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {blogContent.tableData.rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.label}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.shortDescription || "-"}</TableCell>
                      <TableCell>
                        {row.keyBenefits?.length ? (
                          <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                            {row.keyBenefits.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>{row.eligibility || "-"}</TableCell>
                      <TableCell>{row.fees || "-"}</TableCell>
                      <TableCell>
                        {row.website ? (
                          <Link
                            href={row.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit
                          </Link>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </>
        )}

        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50px",
              background: "linear-gradient(transparent, #f9f9f9)",
            }}
          />
        )}
      </Box>

      <Button
        onClick={() => setExpanded(!expanded)}
        endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
        aria-expanded={expanded}
        aria-controls="blog-content"
        sx={{
          textTransform: "none",
          color: "primary.main",
          mt: 1,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </Button>
    </Paper>
  );
};

export default BlogSection;

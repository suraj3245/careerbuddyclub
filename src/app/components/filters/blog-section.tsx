"use client";

import React, { useState, useMemo, useEffect } from "react";
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
import { FiltersObject, setFilterCategory } from "@/utils/filters.utils";

//   DATA FETCHER  For blog Section---

import blogData, { type BlogContent } from "@/data/college-blog";

interface Stream {
  id: number | null;
  title: string;
  description: string;
}

interface BlogSectionProps {
  streams: Stream[];
  clgLocation: string[];
  filters: FiltersObject;
  router: any;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  streams,
  clgLocation,
  filters = {},
  router,
}) => {
  const searchParams = useSearchParams();

  // Use commmon canonical filters object (filters param)
  const streamId = filters.Streams?.[0] ? parseInt(filters.Streams[0], 10) : null;
  const selectedStream = streams.find((stream) => stream.id === streamId) ||
    {
      id: null,
      title: "Best: Ranking 2025, Admissions, Courses, Fees, Placements,Campus,Reviews",
      description: "India boasts a rich educational landscape with a diverse range of colleges and universities offering many courses across various streams. Whether you're interested in engineering, medicine, arts, commerce, or emerging fields like data science and AI, India has institutions that cater to every academic pursuit. We are here to provide insights into the top colleges in India , covering aspects like rankings, admission processes, course offerings, fee structures, placement records, campus facilities, and student reviews. Stay tuned to make informed decisions about your higher education journey in India.",
    };

  const [expanded, setExpanded] = useState(false);
  const [blogContent, setBlogContent] = useState<BlogContent | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [displayBlog, setDisplayBlog] = useState(true);

  const maxPreviewHeight = 120;

  // Derive matched city from blog content and available locations
  const matchedCity = useMemo(() => {
    // Prioritize city from URL filter if it exists
    const cityFromFilter = filters.Location?.[0];
    if (cityFromFilter && clgLocation.includes(cityFromFilter)) return cityFromFilter;

    const titleToCheck = (blogContent?.title || selectedStream.title || "").toLowerCase();
    return clgLocation.find((city) => titleToCheck.includes(city.toLowerCase())) || null;
  }, [clgLocation, blogContent, selectedStream.title, filters.Location]);

  // Resolve blog content synchronously and decide if it should be displayed
  useEffect(() => {
    const toCitySlug = (city: string) => city?.toLowerCase().replace(/\s+/g, "-") || "";
    const cityFromFilter = filters.Location?.[0];
    const base = streamId ? blogData[streamId] : undefined;
    const citySlug = cityFromFilter ? toCitySlug(cityFromFilter) : null;
    const variant = citySlug && base?.variants ? base.variants[citySlug] : undefined;
    const content = variant ?? base;
    setBlogContent(content);
    if (cityFromFilter) {
      if (variant) setDisplayBlog(true);
      else setDisplayBlog(!!content?.title && content.title.toLowerCase().includes(cityFromFilter.toLowerCase()));
    } else {
      setDisplayBlog(true);
    }
  }, [streamId, filters.Location]);

  // Do not show the blog section if it's not relevant to the selected city filter.
  if (!displayBlog && !isLoading) return null;

  return (
    <Paper
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: "#ffffff",
        border: "1px solid #d9d9e5",
        borderRadius: "5px",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      {/* Blog Title */}
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: { xs: "1.75rem", md: "2rem" },
          fontWeight: "bold",
          color: "#13adbd", 
          lineHeight: 1.3,
        }}
      >
        {blogContent?.title || selectedStream.title}
      </Typography>

      {/* Description & Table */}
      <Box
        id="blog-content"
        sx={{
          maxHeight: expanded ? "none" : `${maxPreviewHeight}px`,
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)", 
        }}
      >
        <Typography
          variant="body1"
          paragraph
          sx={{ whiteSpace: "pre-line", color: "text.secondary", lineHeight: 1.6 }}
        >
          {blogContent?.description || selectedStream.description}
        </Typography>
        {/* Table */}
        {blogContent?.tableData && (
          <>
            <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: "bold" }}>
              {blogContent.tableData.heading}
            </Typography>
            <Box
              sx={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                mt: 2,
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { height: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#d0d0d0",
                  borderRadius: "3px",
                },
              }}
            >
              <Table sx={{ minWidth: 800, bgcolor: "#f0f8ff" }}>
                <TableHead sx={{ bgcolor: "rgba(255, 255, 255, 0.6)" }}>
                  <TableRow>
                    {[
                      "College", "Courses", "Short Description",
                      "Key Benefits", "Eligibility", "Fees", "Website"
                    ].map((heading, idx) => (
                      <TableCell
                        key={idx}
                        sx={{
                          fontWeight: "bold", color: "text.primary"
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {blogContent.tableData.rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& .MuiTableCell-root": {
                          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                          fontWeight: 500,
                          lineHeight: 1.75,
                          letterSpacing: "0.02857em",
                          fontSize: "0.7rem",
                          color: "rgb(25, 118, 210)",
                          verticalAlign: "top", // Align content to the top for consistency
                        },
                        "&:nth-of-type(odd)": { bgcolor: "rgba(255, 255, 255, 0.4)" },
                        "& .MuiTableCell-root:first-of-type": { // Override for first column
                          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                          fontWeight: 500,
                          lineHeight: 1.75,
                          letterSpacing: "0.02857em",
                          textTransform: "uppercase",
                          color: "rgb(25, 118, 210)",
                          minWidth: "120px",
                          fontSize: "0.7rem",
                        },
                      }}>
                      <TableCell>{row.label}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.shortDescription || "-"}</TableCell>
                      <TableCell>
                        {row.keyBenefits?.length ? (
                          <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                            {row.keyBenefits.map((b, i) => (<li key={i}>{b}</li>))}
                          </ul>
                        ) : ("-")}
                      </TableCell>
                      <TableCell>{row.eligibility || "-"}</TableCell>
                      <TableCell>{row.fees || "-"}</TableCell>
                      <TableCell>
                        {row.website ? (
                          <Link href={row.website} target="_blank" rel="noopener noreferrer">Visit</Link>
                        ) : ("-")}
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
              bottom: 0, left: 0, right: 0,
              height: "50px",
              background: "linear-gradient(to top, #f0f8ff, rgba(240,248,255,0))",
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
          fontWeight: 600,
          mt: 1,
          px: 0,
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </Button>
    </Paper>
  );
};

export default BlogSection;
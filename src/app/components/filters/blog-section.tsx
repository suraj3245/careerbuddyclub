"use client"

import { useState } from "react"
import { Box, Typography, Button, Paper, Collapse } from "@mui/material"
import { ExpandMore, ExpandLess } from "@mui/icons-material"

export default function BlogSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "transparent",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          color: "#333",
        }}
      >
        4571 Business & Management Studies Colleges in India - Courses, Fees, Admissions 2025, Cutoff, Placements
      </Typography>

      <Box sx={{ position: "relative" }}>
        <Collapse in={expanded} collapsedSize={100}>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            There are 12,000+ best Business Management colleges in India. Among these, 6,853 colleges are privately
            owned, 1,270 are owned by public/government organizations, and public-private entities own 572. Students can
            secure admission based on their Class 12 scores, and many institutions also conduct admissions through
            entrance exams like CAT, MAT, CMAT, and XAT. Some of the best MBA colleges in India include IIM Ahmedabad,
            IIM Bangalore, XLRI Xavier School of Management, IIM Calcutta, IIM Kozhikode, IIM Lucknow, DMS IIT Delhi,
            and many others.
            {expanded && (
              <>
                <br />
                <br />
                These institutions offer various specialized programs in areas such as Finance, Marketing, Human
                Resources, Operations, and International Business. The admission process typically involves multiple
                stages including written tests, group discussions, and personal interviews. Placements from these
                institutions are generally strong, with many students securing positions in leading companies across
                various sectors. The fees for management programs vary significantly, ranging from very affordable in
                government institutions to premium pricing in top private colleges. Many institutions also offer
                scholarships and financial aid to deserving candidates. The duration of most management programs is two
                years, though some specialized courses may be shorter or longer.
              </>
            )}
          </Typography>
        </Collapse>

        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50px",
              background: "linear-gradient(transparent, white)",
            }}
          />
        )}
      </Box>

      <Button
        onClick={() => setExpanded(!expanded)}
        endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
        sx={{
          textTransform: "none",
          color: "primary.main",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </Button>
    </Paper>
  )
}


import React from "react";
import Wrapper from "@/layouts/wrapper";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// If you have blogData and/or other SEO data, import it here
// import blogData from "../../components/data/college-blog";
// import { getStreamSlug } from "../../utils/customslugs";

const FilterPage = dynamic(() => import("../../components/filters/filterpage"), {
  ssr: false,
});

interface PageProps {
  params: {
    slug?: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Dynamically generate SEO metadata based on streamId and slug
export async function generateMetadata(
  { searchParams }: PageProps
): Promise<Metadata> {
  // Get streamId from URL query params
  const streamId = Array.isArray(searchParams?.streamId)
    ? searchParams?.streamId[0]
    : searchParams?.streamId;

  if (streamId === "17") {
    return {
      title: "Best Pharmacy Colleges in Dehradun (2025 Guide) | Best Pharmacy Colleges in Dehradun, Uttarakhand",
      description:
        "Discover the best pharmacy colleges in Dehradun, Uttarakhand for B.Pharm, D.Pharm, and M.Pharm programs. Compare colleges by rankings, placements, fees, and admission details for 2025.",
      keywords:
        "Top Pharmacy Colleges in Dehradun, Best Pharmacy Colleges in Uttarakhand, B.Pharm Colleges in Dehradun, D.Pharm Colleges, Pharmacy Admission 2025, Pharmacy Colleges Fees, Pharmacy Placement Dehradun",
      alternates: {
        canonical: "https://careerbuddyclub.com/colleges/top-pharmacy-colleges-in-dehradun-uttarakhand?streamId=17&city=Dehradun",
      },
      openGraph: {
        title: "Top Pharmacy Colleges in Dehradun, Uttarakhand | Career Buddy Club",
        description:
          "Explore top-ranked pharmacy colleges in Dehradun, Uttarakhand with high-quality education in B.Pharm, D.Pharm, and M.Pharm. Get details on fees, placements, rankings, and admissions.",
        url: "https://careerbuddyclub.com/colleges/top-pharmacy-colleges-in-dehradun-uttarakhand?streamId=17&city=Dehradun",
        type: "website",
        locale: "en_US",
        siteName: "Career Buddy Club",
      },
      twitter: {
        card: "summary_large_image",
        title: "Best Pharmacy Colleges in Dehradun, Uttarakhand",
        description:
          "Explore the best pharmacy colleges in Dehradun with expert reviews on placements, fees, infrastructure, and academic excellence in B.Pharm, D.Pharm, and M.Pharm.",
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
    };
  }

  // Default/fallback metadata for all other streams/pages
  return {
    title: "Explore Top Colleges in India | Find Your Best Fit Today",
    description: "Browse and compare top Indian colleges for all streams. Find the best fit for your career.",
  };
}

const CollegePage = ({ params }: PageProps) => {
  

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage />
      </div>
    </Wrapper>
  );
};

export default CollegePage;
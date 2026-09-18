import React, { Suspense } from "react";
import Wrapper from "@/layouts/wrapper";
import FilterPage from "../../components/filters/filterpage";
import { Metadata } from "next";
import { fetchCollegesData } from "../api";

interface PageProps {
  params?: { slug?: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// This version parses the "slug" param (for catch-all routes)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let stream = "";
  if (params?.slug) {
    if (Array.isArray(params.slug)) stream = params.slug[0];
    else stream = params.slug || "";
  }
  return {
    title: `Explore ${stream} Colleges in India | Career Buddy Club`,
    description: `Browse and compare colleges under ${stream} across India. Find fees, placements, and more.`,
  };
}

const CollegeFilterPage = async ({ params, searchParams }: PageProps) => {
  // Compose a single slug string—for hydration if needed
  let initialSlugPath = "";
  if (params?.slug) {
    initialSlugPath = Array.isArray(params.slug)
      ? params.slug.join("/")
      : params.slug || "";
  }

  const { colleges, streams } = await fetchCollegesData();

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterPage initialStreamPath={initialSlugPath} initialColleges={colleges} initialStreams={streams} />
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default CollegeFilterPage;
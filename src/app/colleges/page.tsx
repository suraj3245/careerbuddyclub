// app/colleges/[...slug]/page.tsx
import React from "react";
import Wrapper from "@/layouts/wrapper";
import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Top Colleges in India | Find Your Best Fit Today",
};

const FilterPage = dynamic(() => import("../components/filters/filterpage"), {
  ssr: false,
});

const CollegePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage />
      </div>
    </Wrapper>
  );
};

export default CollegePage;
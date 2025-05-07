import React from "react";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Explore Top Colleges in India | Find Your Best Fit Today",
};

const FilterPage = dynamic(() => import("../components/filters/filterpage"), {
  ssr: false,
});

const FindColleges = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage />
      </div>
    </Wrapper>
  );
};

export default FindColleges;

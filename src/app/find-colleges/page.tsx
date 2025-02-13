import React from "react";
import Wrapper from "@/layouts/wrapper";
import FilterPage from "../components/filters/filterpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Top Colleges in India | Find Your Best Fit Today",
};

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

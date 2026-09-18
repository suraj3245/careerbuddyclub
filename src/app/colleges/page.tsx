// app/colleges/page.tsx
import React from "react";
import Wrapper from "@/layouts/wrapper";
import FilterPage from "../components/filters/filterpage";
import { Metadata } from "next";
import { fetchCollegesData } from "./api";

export const metadata: Metadata = {
  title: "Explore Top Colleges in India | Find Your Best Fit Today",
};

const CollegePage = async () => {
  const { colleges, streams } = await fetchCollegesData();

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage initialColleges={colleges} initialStreams={streams} />
      </div>
    </Wrapper>
  );
};

export default CollegePage;
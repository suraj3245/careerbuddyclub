import React from "react";
import Wrapper from "@/layouts/wrapper";
import CollegeFinder from "../components/filters/collegefilter";

const CollegeFinderDemo = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <div className="container" style={{ marginTop: "200px" }}>
          <CollegeFinder />
        </div>
      </div>
    </Wrapper>
  );
};

export default CollegeFinderDemo;

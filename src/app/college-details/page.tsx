import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import FooterOne from "@/layouts/footers/footer-one";
import { Metadata } from "next";


const CollegeDetailsPage = () => {
 
  return (
    <Wrapper>
      <div className="main-page-wrapper">
       <JobPortalIntro top_border={true}/>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;
export const metadata: Metadata = {
  title: "College Details",
  robots: "noindex",
  alternates: { canonical: "https://careerbuddyclub.com/college-details" },
};

import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";

import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";

import CoursesComponent from "../components/courses/courses-header";

export const metadata: Metadata = {
  title: "Courses Details",
};

const CoursesDetailPage = () => {
  const details = college_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CoursesComponent />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CoursesDetailPage;

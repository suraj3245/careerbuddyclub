"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "../components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import courses_details from "@/data/courses-details";

import CoursesDetailsArea from "../components/company-details/courses-details-area";

const CollegeDetailsPage = () => {
  const details = courses_details[0];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details.college}
          subtitle={details.location}
        />

        <CoursesDetailsArea details={details} />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;

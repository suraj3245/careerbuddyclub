"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumbjob from "../components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import courses_details from "@/data/courses-details";

import CoursesDetailsArea from "../components/company-details/courses-details-area";

const CollegeDetailsPage = () => {
  const details = courses_details[0];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details.coursename}
          subtitle={details.coursefullform}
        />
        <CoursesDetailsArea details={details} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;

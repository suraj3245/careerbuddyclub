"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbuniversity from "../components/common/common-breadcrumb-university";
import FooterOne from "@/layouts/footers/footer-one";
import university_details from "@/data/university-details";
import UniversityDetailsArea from "../components/company-details/university-details-area";

const UniversityDetailsPage = () => {
  const details = university_details[0];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbuniversity
         logoSrc={details.logo}
          title={details.college}
          subtitle={details.location}
        />

        <UniversityDetailsArea details={details} />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default UniversityDetailsPage;

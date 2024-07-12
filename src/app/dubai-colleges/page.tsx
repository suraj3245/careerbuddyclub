"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbuniversity from "../components/common/common-breadcrumb-university";
import FooterOne from "@/layouts/footers/footer-one";
import dubai_details from "@/data/dubai-details";
import DubaiDetailsArea from "../components/company-details/dubai-details-area";

const DubaiDetailsPage = () => {
  const details = dubai_details[0];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbuniversity
         logoSrc={details.logo}
          title={details.college}
          subtitle={details.location}
        />

        <DubaiDetailsArea details={details} />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default DubaiDetailsPage;
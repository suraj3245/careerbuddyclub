"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "../components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import career_details from "@/data/career-details";
import CareerDetailsArea from "../components/company-details/career-details-area";

export const CareerDetailsPage = () => {
  const details = career_details[0];

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details.career}
          subtitle={details.location}
        />

        <CareerDetailsArea details={details} />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CareerDetailsPage;

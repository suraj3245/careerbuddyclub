import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyDetailsArea from "../components/company-details/company-details-area";
import OpenPosition from "../components/company-details/open-position";
import company_details from "@/data/company-details";

export const metadata: Metadata = {
  title: "Company Details",
};

const CompanyDetailsPage = () => {
  const details = company_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* header end */}
        {/*breadcrumb start */}
        <CompanyBreadcrumb title={details.company} subtitle={details.title} />
        {/*breadcrumb end */}
        {/* company details area start */}
        <CompanyDetailsArea details={details} />
        <JobPortalIntro top_border={true} /> {/* job portal intro end */}
        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CompanyDetailsPage;

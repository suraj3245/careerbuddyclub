import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "@/app/components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyDetailsArea from "@/app/components/company-details/company-details-area";

import company_details from "@/data/company-details";
import college_details from "@/data/college-details";
import OpenPosition from "@/app/components/company-details/open-position";
import CollegeDetailsArea from "@/app/components/company-details/college-details";

export const metadata: Metadata = {
  title: "College Details",
};

const CompanyDetailsPage = () => {
  const details = college_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb title={details.college} subtitle={details.city} />
        {/*breadcrumb end */}

        {/* company details area start */}
        <CollegeDetailsArea details={details} />

        {/* company details area end */}

        {/*job Open Position */}
        <OpenPosition />
        {/*job Open Position */}

        {/* job portal intro start */}
        <JobPortalIntro top_border={true} />
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CompanyDetailsPage;

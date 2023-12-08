import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyDetailsArea from "../components/company-details/company-details-area";
import OpenPosition from "../components/company-details/open-position";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "../components/company-details/college-details";

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
        <CompanyBreadcrumb
          title={details.college}
          subtitle={details.location}
        />
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

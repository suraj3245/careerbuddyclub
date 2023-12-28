import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "@/app/components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "@/app/components/company-details/college-details";

export const metadata: Metadata = {
  title: "College Details",
};

const CoursesDetailsPage = () => {
  const details = college_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
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

export default CoursesDetailsPage;

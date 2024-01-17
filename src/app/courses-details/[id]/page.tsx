import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "@/app/components/company-details/college-details";
import CoursesDetailsArea from "@/app/components/company-details/courses-details-area";

export const metadata: Metadata = {
  title: "College Details",
};

const CollegeDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = college_details.find(
    (j) => Number(j.id) === Number(params.id)
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}

        <CompanyBreadcrumbjob
          title={details ? details.college : ""}
          subtitle={details ? details.location : ""}
        />

        {/*breadcrumb end */}

        {/* company details area start */}
        {details && <CoursesDetailsArea details={details} />}

        {/* company details area end */}

        {/*job Open Position */}

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

export default CollegeDetailsPage;

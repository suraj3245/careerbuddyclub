import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import CoursesDetailsArea from "@/app/components/company-details/courses-details-area";

export const metadata: Metadata = {
  title: "Course Details",
};

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = college_details.find(
    (j) => Number(j.id) === Number(params.id)
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details ? details.college : ""}
          subtitle={details ? details.location : ""}
        />

        {details && <CoursesDetailsArea details={details} />}
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CourseDetailsPage;

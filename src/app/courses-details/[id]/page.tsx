import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import course_details from "@/data/courses-details";
import CollegeDetailsArea from "@/app/components/company-details/college-details";
import CoursesDetailsArea from "@/app/components/company-details/courses-details-area";

export const metadata: Metadata = {
  title: "Course Details",
};

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = course_details.find(
    (j) => Number(j.id) === Number(params.id)
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}

        <CompanyBreadcrumbjob
          title={details ? details.coursename : ""}
          subtitle={details ? details.coursefullform : ""}
        />

        {/*breadcrumb end */}

        {/* company details area start */}
        {details && <CoursesDetailsArea details={details} />}

        {/* company details area end */}

        {/*job Open Position */}

        {/*job Open Position */}

        {/* job portal intro start */}
      
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CourseDetailsPage;

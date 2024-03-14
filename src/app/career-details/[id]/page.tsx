import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import career_details from "@/data/career-details";
import CareerDetailsArea from "@/app/components/company-details/career-details-area";

export const metadata: Metadata = {
  title: "Career Details",
};

const CareerDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = career_details.find(
    (j) => Number(j.id) === Number(params.id)
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}

        <CompanyBreadcrumbjob
          title={details ? details.career : ""}
          subtitle={details ? details.location : ""}
        />

        {/*breadcrumb end */}

        {/* company details area start */}
        {details && <CareerDetailsArea details={details} />}

       
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CareerDetailsPage;

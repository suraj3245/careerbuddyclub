import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbuniversity from "@/app/components/common/common-breadcrumb-university";
import FooterOne from "@/layouts/footers/footer-one";
import university_details from "@/data/university-details";
import UniversityDetailsArea from "@/app/components/company-details/university-details-area";

export const metadata: Metadata = {
  title: "International University Details",
};

const UniversityDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = university_details.find(
    (j) => Number(j.id) === Number(params.id)
  );
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}

        <CompanyBreadcrumbuniversity
           logoSrc={details ? details.logo : ""}
          title={details ? details.college : ""}
          subtitle={details ? details.location : ""}
        />

        {/*breadcrumb end */}

        {/* company details area start */}
        {details && <UniversityDetailsArea details={details} />}

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

export default UniversityDetailsPage;

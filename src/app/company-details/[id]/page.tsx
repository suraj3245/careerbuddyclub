import React from "react";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "@/app/components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CompanyDetailsArea from "@/app/components/company-details/company-details-area";
import OpenPosition from "@/app/components/company-details/open-position";
import company_details from "@/data/company-details";

export const metadata: Metadata = {
  title: "Company Details",
  robots: "noindex",
};

const CompanyDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const details = company_details.find(
    (j) => Number(j.id) === Number(params.id)
  );

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        
        {/* header end */}
        <CompanyBreadcrumb
        title={details ? details.company : ""}
        subtitle={details ? details.title : ""}
      />
        {/*breadcrumb start */}

        {/*breadcrumb end */}

        {/* company details area start */}
        {details && <CompanyDetailsArea details={details} />}
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

export default CompanyDetailsDynamicPage;

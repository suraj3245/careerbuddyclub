import React from "react";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import career_details from "@/data/career-details";
import CareerDetailsArea from "@/app/components/company-details/career-details-area";

const CareerDetailsPage = () => {
  const details = career_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details ? details.career : ""}
          subtitle={details ? details.location : ""}
        />
        {details && <CareerDetailsArea details={details} />}
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CareerDetailsPage;

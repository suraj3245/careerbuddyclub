import React from "react";
import Head from "next/head";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "@/app/components/company-details/college-details";

const CollegeDetailsPage = ({ params }: { params: { id: string } }) => {
  const details = college_details.find((j) => j.id === params.id);

  // Default values if details are not found
  const pageTitle = details ? details.pageTitle : "College Details";
  const pageDescription = details
    ? details.metaDescription
    : "Details about various colleges.";

  return (
    <Wrapper>
      {/* Dynamically set the page title and meta description */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
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
        {details && <CollegeDetailsArea details={details} />}
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

export default CollegeDetailsPage;

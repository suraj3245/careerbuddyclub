import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/headers/header";
import FooterOne from "@/layouts/footers/footer-one";
import JobBreadcrumb from "../components/jobs/breadcrumb/job-breadcrumb";
import JobGridV3Area from "../components/jobs/grid/job-grid-v3-area";
import HeaderFour from "@/layouts/headers/header-4";

export const metadata: Metadata = {
  title: "Job Grid v3",
  robots: "noindex",
};

const JobGridThreePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/* search breadcrumb start */}
        <JobBreadcrumb />
        {/* search breadcrumb end */}

        {/* job list three start */}
        <JobGridV3Area itemsPerPage={9} />
        {/* job list three end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default JobGridThreePage;

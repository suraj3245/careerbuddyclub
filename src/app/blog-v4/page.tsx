import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import BlogFullWidthArea from "../components/blogs/blog-frull-width";
import TopPharmacyCollegesPage from "../components/top pharmacy college/toppharma";

export const metadata: Metadata = {
  title: "Blog v4",
};

const BlogV4Page = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Career Buddy Club Insights"
          subtitle=""
        />
        {/*breadcrumb end */}

        {/* blog v3 start */}
        <TopPharmacyCollegesPage/>
        {/* blog v3 end */}

        {/* job portal intro start */}
        {/* <JobPortalIntro top_border={true} /> */}
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogV4Page;
import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import ThreeColumnBlogSection from "../components/college-blogs/three-col-blog";



export const metadata: Metadata = {
  title: "Blog v5",
};

const BlogV5Page = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Top day boarding schools in Dehradun"
          subtitle="Find the best boarding schools in your area"
          backgroundImage="/assets/images/blog/grad_blog1.jpg"
        />
        

        {/* blog v3 start */}
        {/* <BlogFullWidthArea /> */}
        {/* blog v3 end */}
        <ThreeColumnBlogSection mode="schools" />
        

        

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogV5Page;

import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import ThreeColumnBlogSection from "../components/college-blogs/three-col-blog";


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
          title="Explore Best Colleges"
          subtitle="Find the best colleges and universities in your area"
          backgroundImage="/assets/images/blog/grad_blog1.jpg"
        />
        

        {/* blog v3 start */}
        {/* <BlogFullWidthArea /> */}
        {/* blog v3 end */}
        <ThreeColumnBlogSection />
        

        

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogV4Page;

import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CollegeBlogDetailsArea from "@/app/components/college-blogs/blog-details/index";
import blog_data from "@/data/college-blog1";

export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetailsPage = () => {
  const blog = blog_data[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Blog"
          subtitle="Read our blog from top talents"
        />
        {/*breadcrumb end */}

        {/* blog details start */}
        <CollegeBlogDetailsArea item={blog} />
        {/* blog details end */}

       

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;

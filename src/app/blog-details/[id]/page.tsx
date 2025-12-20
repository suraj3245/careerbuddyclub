import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import BlogDetailsArea from "../../components/blogs/blog-details";
import blog_data1 from "@/data/blog-data1";
export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const blog = blog_data1.find((b) => Number(b.id) === Number(params.id))!;
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Insights"
          subtitle="Read our blog from top talents"
        />
        {/*breadcrumb end */}

        {/* blog details start */}
        <BlogDetailsArea item={blog}/>
        {/* blog details end */}
        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogDetailsDynamicPage;

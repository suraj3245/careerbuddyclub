import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import ThreeColumnBlogSection from "../components/college-blogs/three-col-blog";

export const metadata: Metadata = {
  title: "College Guides: Best Colleges in Dehradun | Career Buddy Club",
  description:
    "College guides for 2026: compare top nursing, pharmacy, BBA, BPT, BMLT and MHA colleges in Dehradun and Uttarakhand by fees, eligibility and admission.",
  alternates: {
    canonical: "https://careerbuddyclub.com/college-blogs",
  },
  openGraph: {
    title: "College Guides: Best Colleges in Dehradun | Career Buddy Club",
    description:
      "Compare top nursing, pharmacy, BBA, BPT, BMLT and MHA colleges in Dehradun and Uttarakhand by fees, eligibility and admission.",
    url: "https://careerbuddyclub.com/college-blogs",
    siteName: "Career Buddy Club",
    type: "website",
  },
};

const BlogV4Page = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          asH1
          title="College Guides: Explore the Best Colleges"
          subtitle="Find the best colleges and universities in your area"
          backgroundImage="/assets/images/blog/grad_blog1.jpg"
        />
        

        {/* blog v3 start */}
        {/* <BlogFullWidthArea /> */}
        {/* blog v3 end */}
        <ThreeColumnBlogSection mode="campus"/>
        

        

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogV4Page;

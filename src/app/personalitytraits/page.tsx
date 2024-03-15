import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";

import CareerOne from "../components/career/career-one";
import FooterOne from "@/layouts/footers/footer-one";
import CategorySectionEight from "../components/category/category-section-8";

export const metadata: Metadata = {
  title: "Career",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
       

        {/* breadcrumb start */}
        <CareerOne   />
        <CategorySectionEight />
        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;

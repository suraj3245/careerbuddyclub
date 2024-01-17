import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import PartnersSlider from "../components/partners/partners-slider";
import FeatureOne from "../components/features/feature-one";
import CategorySectionThree from "../components/category/category-section-3";
import FeatureNineteen from "../components/features/feaure-nineteen";
import HeroBannerNine from "../components/hero-banners/hero-banner-nine";
import FeatureTwenty from "../components/features/feature-twenty";
import PartnersSlider3 from "../components/partners/parners-slider3";
import ContactCollegeArea from "../components/contactCollege/contactCollege-area";

export const metadata: Metadata = {
  title: "College",
};

const campus = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* hero banner start */}
        <FeatureTwenty />
        <HeroBannerNine />

        {/* hero banner end */}
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider />
        </div>
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider3 />
        </div>

        <FeatureOne />

        {/* how it works end */}
        <FeatureNineteen />
        <CategorySectionThree />
        {/* feature three end */}

        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default campus;

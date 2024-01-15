import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import HeroBannerFive from "../components/hero-banners/hero-banner-five";
import PartnersSlider from "../components/partners/partners-slider";
import FeedbackFour from "../components/feedBacks/feedback-four";
import FeatureOne from "../components/features/feature-one";
import CategorySectionThree from "../components/category/category-section-3";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-3";
import BlogOne from "../components/blogs/blog-one";
import FeatureNineteen from "../components/features/feaure-nineteen";
import FlipCardtwo from "../components/card/townandapt2";
import FancyBannerTwelve from "../components/fancy-banner/fancy-banner-12";
import HeroBannerNine from "../components/hero-banners/hero-banner-nine";
import FeatureTwenty from "../components/features/feature-twenty";
import PartnersSlider3 from "../components/partners/parners-slider3";
import ContactCollegeArea from "../components/contactCollege/contactCollege-area";

const campus = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* hero banner start */}
        <HeroBannerNine />

        {/* hero banner end */}
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider />
        </div>
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider3 />
        </div>
        <FeatureTwenty />

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

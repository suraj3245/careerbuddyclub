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
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-2";
import ContactArea from "../components/contact/contact-area";

export const metadata: Metadata = {
  title: "campus",
};

const campus = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* hero banner start */}
        <HeroBannerFive />
        {/* hero banner end */}
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider />
        </div>
        <FeatureOne />
        {/* how it works start */}
        <FeedbackFour />
        {/* how it works end */}
        <FancyBannerThree />
        <CategorySectionThree />
        {/* feature three end */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default campus;

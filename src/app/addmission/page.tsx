import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import HeroBanner from "../components/hero-banners/hero-banner";
import FeatureTweleve from "../components/features/feature-twelve";
import FancyBannerNine from "../components/fancy-banner/fancy-banner-9";
import FancyBannerTen from "../components/fancy-banner/fancy-banner-10";
import FeatureFour from "../components/features/feature-four";

export const metadata: Metadata = {
  title: "addmission",
};

const addmission = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        <HeroBanner />
        <FeatureTweleve />
        <FancyBannerNine />
        <FancyBannerTen />
        <FeatureFour />
        <FooterOne />

        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default addmission;

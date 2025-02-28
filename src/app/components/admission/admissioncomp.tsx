"use client";
import React from "react";

import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import HeroBanner from "../hero-banners/hero-banner";
import FancyBannerNine from "../fancy-banner/fancy-banner-9";
import PartnersSlider2 from "../partners/partners-slider2";
import { string } from "yup";
import FeatureThirteen from "../features/feature-thirteen";
import ExpertsOne from "../experts/experts-one";
import HowItWorksFive from "../how-it-works/how-it-works-5";
import Featurefifteen from "../features/feature-fifteen";
import FeatureSixteen from "../features/feature-sixteen";
import FeatureSeventeen from "../features/feature-seventeen";
import Featurefourteen from "../features/feature-fourteen";

const Admissioncomp = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeroBanner />
        <ExpertsOne />
        <HowItWorksFive />

        <FeatureThirteen />

        <Featurefourteen />
        <Featurefifteen />
        <FeatureSeventeen />
        <FeatureSixteen />
        <div className="partner-logos bg-color border-0 pt-45 pb-45 ps-3 pe-3 mt-4">
          <PartnersSlider2 />
        </div>

        <FooterOne />

        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Admissioncomp;

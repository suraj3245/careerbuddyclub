import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import HeroBannerThree from "../components/hero-banners/hero-banner-three";
import ContactArea from "../components/contact/contact-area";
import FeatureFive from "../components/features/feature-five";
import FeatureSix from "../components/features/feature-six";
import FeedbackThree from "../components/feedBacks/feedback-three";
import ContactSchoolArea from "../components/contactSchools/contactSchools-area";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-2";
import Aptibannerthree from "../components/fancy-banner/apti-banner";
import FlipCard from "../components/card/townandapt";

export const metadata: Metadata = {
  title: "campus",
};

const schools = () => {
  return (
    <Wrapper>
      {/* feature three end */}
      {/* category section 2 start */}
      <HeroBannerThree />
      <FlipCard />

      <FeatureFive />
      <Aptibannerthree />

      <FeedbackThree />
      
      <FeatureSix />
      <FooterOne />
      {/* footer end */}
    </Wrapper>
  );
};

export default schools;

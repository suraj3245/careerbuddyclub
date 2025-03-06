import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import FeatureFive from "../components/features/feature-five";
import FeatureSix from "../components/features/feature-six";
import FeedbackThree from "../components/feedBacks/feedback-three";
import ContactSchoolArea from "../components/contactSchools/contactSchools-area";
import Aptibannerthree from "../components/fancy-banner/apti-banner";
import FlipCard from "../components/card/townandapt";
import HeroBannerThree from "../components/hero-banners/hero-banner-three";
import FeatureFour from "../components/features/feature-four";

export const metadata: Metadata = {
  title: "Schools",
};

const schools = () => {
  return (
    <Wrapper>
      <HeroBannerThree/>
      <div className="container mb-4">
          <FlipCard />
      </div>

      <FeatureFive />
      <Aptibannerthree />

      <FeedbackThree />

      <FeatureSix />
      <ContactSchoolArea />

      <FooterOne />
      {/* footer end */}
    </Wrapper>
  );
};

export default schools;

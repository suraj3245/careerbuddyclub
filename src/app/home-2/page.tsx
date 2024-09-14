import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeroBannerTwo from "../components/hero-banners/hero-banner-two";
import HowItWorksTwo from "../components/how-it-works/how-it-works-2";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import MainBanner from "../components/hero-banners/main-banner";
import FooterOne from "@/layouts/footers/footer-one";
import FancyBannerSeven from "../components/fancy-banner/fancy-banner-7";
import BlogOne from "../components/blogs/blog-one";
import FeatureEleven from "../components/features/feature-eleven";
import Collegedekhocomp from "../components/college-dekho/college-dekho";
import FancyBanner16 from "../components/fancy-banner/fancy-banner-16";

export const metadata: Metadata = {
  title: "Home two",
  robots: "noindex",
};

const HomeTwo = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/* hero banner start */}
        <HeroBannerTwo />
        {/* hero banner end */}
        <HowItWorksTwo />
        <MainBanner />

        {/* feedback two start */}
        <FeedbackTwo />
        <Collegedekhocomp />
        <BlogOne />
        <FeatureEleven />
        <div className="container">
        <FancyBanner16/>
        </div>
        <FancyBannerSeven />
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default HomeTwo;

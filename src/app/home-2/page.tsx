import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-2";
import HeroBannerTwo from "../components/hero-banners/hero-banner-two";
import HowItWorksTwo from "../components/how-it-works/how-it-works-2";
import FeatureThree from "../components/features/feature-three";
import CategorySectionTwo from "../components/category/category-section-2";
import FeatureFour from "../components/features/feature-four";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import BlogTwo from "../components/blogs/blog-two";
import JobPortalIntroTwo from "../components/job-portal-intro/job-portal-intro-2";
import FooterTwo from "@/layouts/footers/footer-2";
import MainBanner from "../components/hero-banners/main-banner";
import FooterOne from "@/layouts/footers/footer-one";

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

        {/* how it works start */}
        {/* how it works end */}

        {/* feature three start */}
        {/* <FeatureThree /> */}
        {/* feature three end */}

        {/* category section 2 end */}

        {/* feature four start */}

        {/* feature four end */}

        {/* feedback two start */}
        <FeedbackTwo />
        {/* feedback two end */}

        {/* blog two start */}
        {/* <BlogTwo /> */}
        {/* blog two end */}

        {/* job portal intro 2 */}
        {/* <JobPortalIntroTwo /> */}
        {/* job portal intro 2 */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default HomeTwo;

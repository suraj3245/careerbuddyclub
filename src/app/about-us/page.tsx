import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CandidateProfileBreadcrumb from "../components/candidate-details/profile-bredcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import FeatureEleven from "../components/features/feature-eleven";
import FeatureOne from "../components/features/feature-one";
import HowItWorks from "../components/how-it-works/how-it-works";
import FeedbackOne from "../components/feedBacks/feedback-one";
import HeaderFour from "@/layouts/headers/header-4";
import FeatureEighteen from "../components/features/feature-eighteen";
import FeatureFour from "../components/features/feature-four";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-2";
import FeedbackSix from "../components/feedBacks/feedback-six";
import FeedbackSeven from "../components/feedBacks/feedback-seven";
import PartnersSlider2 from "../components/partners/partners-slider2";
import JobListTwo from "../components/jobs/list/job-list-two";
import ExpertSectionOne from "../components/expert-member/expert-section-1";
import ExpertSectionTwo from "../components/expert-member/expert-section-2";
export const metadata: Metadata = {
  title: "About us",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/* breadcrumb start */}
        <CandidateProfileBreadcrumb title="About us" subtitle="About" />
        {/* breadcrumb end */}

        {/* text feature area start */}
        <FeatureEleven />
        {/* text feature area end */}

        {/* feature one start */}
        <FeatureOne />
        <FeatureEighteen />
        {/* feature one end */}

        {/* how works start */}
        <HowItWorks />
        {/* how works end */}
        <FancyBannerTwo />
        <FeedbackSix />
        <FeedbackSeven />
        {/* feedback one start */}

        {/* feedback one end */}
        <FeatureFour />
        <ExpertSectionTwo />
        {/* job portal intro start */}
        <ExpertSectionOne />

        <JobListTwo />

        {/* job portal intro end */}
        <div className="partner-logos bg-color border-0 pt-45 pb-45 ps-3 pe-3 mt-50px">
          <PartnersSlider2 />
        </div>
        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;

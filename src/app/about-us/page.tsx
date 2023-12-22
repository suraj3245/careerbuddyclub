import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CandidateProfileBreadcrumb from "../components/candidate-details/profile-bredcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import FeatureEleven from "../components/features/feature-eleven";
import FeatureOne from "../components/features/feature-one";
import HowItWorks from "../components/how-it-works/how-it-works";
import FeedbackOne from "../components/feedBacks/feedback-one";
import HeaderFour from "@/layouts/headers/header-4";
import FeatureEighteen from "../components/features/feature-eighteen";

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

        {/* feedback one start */}
        <FeedbackOne about_p={true} />
        {/* feedback one end */}

        {/* job portal intro start */}
        <JobPortalIntro top_border={true} />
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;

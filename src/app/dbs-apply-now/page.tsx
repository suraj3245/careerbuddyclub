import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import ApplyArea from "../components/apply-now/apply-area";
import FeatureSection from "../components/videoprop/featureprop";
import ExpertSectionTwo from "../components/expert-member/expert-section-2";
import ExpertsOne from "../components/experts/experts-one";
import FeatureFour from "../components/features/feature-four";
import FancyBanner from "../components/fancy-banner/fancy-banner";
import FancyBannerNine from "../components/fancy-banner/fancy-banner-9";
import JobListTen from "../components/jobs/list/job-list-ten";
import BlogOne from "../components/blogs/blog-one";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import FeedbackOne from "../components/feedBacks/feedback-one";
import FeedbackThree from "../components/feedBacks/feedback-three";
import FeatureSix from "../components/features/feature-six";
import HeaderTwo from "@/layouts/headers/header-2";
import HeaderFour from "@/layouts/headers/header-4";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "../components/company-details/college-details-dbs";


export const metadata: Metadata = {
  title: "Apply now",
};

const RegisterPage = () => {
    const details = college_details[5];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        {/*breadcrumb start */}
        {/*breadcrumb end */}

        {/* register area start */}
        <ApplyArea />
        <CollegeDetailsArea details={details} />
        <FeatureSection />

        {/* register area end */}
        {/* <FeatureFour />
        <ExpertsOne />
        <JobListTen />
        <BlogOne /> */}
        {/* <ExpertSectionTwo /> */}
        <FeedbackThree />
        <FeatureSix />

        {/* footer start */}
        {/* <FooterOne /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
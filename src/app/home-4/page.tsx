import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import HeroBannerFour from "../components/hero-banners/hero-banner-four";
import CategorySectionFour from "../components/category/category-section-4";
import FancyBannerFour from "../components/fancy-banner/fancy-banner-4";
import JobListOne from "../components/jobs/list/job-list-one";
import FeedbackOne from "../components/feedBacks/feedback-one";
import FeatureSeven from "../components/features/feature-seven";
import FaqOne from "../components/faqs/faq-one";
import JobPortalIntroTwo from "../components/job-portal-intro/job-portal-intro-2";
import FooterOne from "@/layouts/footers/footer-one";

export const metadata: Metadata = {
  title: "CareerBuddyClub",
  robots: "noindex",
};

const HomeFour = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/* hero banner start */}
        <HeroBannerFour />
        {/* hero banner end */}

        {/* category section start */}
        <CategorySectionFour style_2={true} />
        {/* category section end */}

        {/* fancy banner start */}
        <FancyBannerFour />
        {/* fancy banner end */}

        {/* job list one start */}
        <JobListOne />
        {/* job list one end */}

        {/* feedback one start */}
        <FeedbackOne style_2={true} />
        {/* feedback one end */}

        {/*text feature start */}
        <FeatureSeven />
        {/*text feature end */}

        {/* faq start */}
        <FaqOne />
        {/* faq end */}

        {/* job portal intro 2 */}
        <JobPortalIntroTwo />
        {/* job portal intro 2 */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default HomeFour;

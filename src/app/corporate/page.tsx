import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeroBannerSix from "../components/hero-banners/hero-banner-six";
import PartnersSlider from "../components/partners/partners-slider";
import { TrendingJobs } from "../components/category/category-section-3";
import FeatureNine from "../components/features/feature-nine";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderFour from "@/layouts/headers/header-4";
import FeatureThree from "../components/features/feature-three";
import ContactArea from "../components/contact/contact-area";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import FancyBannerEight from "../components/fancy-banner/fancy-banner-8";
import PartnersSlider2 from "../components/partners/partners-slider2";

export const metadata: Metadata = {
  title: "corporate",
};

const corporate = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeroBannerSix />
        <div className="partner-logos bg-color border-0 pt-30 pb-45 ps-3 pe-3">
          {/* <PartnersSlider2 /> */}
          <PartnersSlider />
        </div>
        <FeatureNine />
        <FeatureThree />
        <FancyBannerEight style_2={true} />
        <section className="category-section-three pt-50 lg-pt-50">
          <div className="container">
            <div className="position-relative">
              <div className="title-one mb-60 lg-mb-40">
                <h2
                  className="main-font color-blue wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  100+ employers are taking benefits
                </h2>
              </div>
              <TrendingJobs />
            </div>
          </div>
        </section>
        <FeedbackTwo />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default corporate;

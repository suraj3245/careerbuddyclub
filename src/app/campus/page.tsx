import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import PartnersSlider from "../components/partners/partners-slider";
import FeatureOne from "../components/features/feature-one";
import CategorySectionThree from "../components/category/category-section-3";
import CategorySectionNine from "../components/category/category-section-9";
import FeatureNineteen from "../components/features/feaure-nineteen";
import HeroBannerNine from "../components/hero-banners/hero-banner-nine";
import FeatureTwenty from "../components/features/feature-twenty";
import PartnersSlider3 from "../components/partners/parners-slider3";
// import ContactCollegeArea from "../components/contactCollege/contactCollege-area";
import ContactCollegeForm from "../components/forms/contactCollege-form";


export const metadata: Metadata = {
  title: "College",
};

const campus = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* hero banner start */}
        <div className="container-fluid" style={{'marginTop': '8rem'}}>
        <FeatureTwenty />
        </div>
        <HeroBannerNine />
        <div className="container">
          <CategorySectionNine/>
        </div>
        {/* hero banner end */}
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider />
        </div>
        <div className="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
          <PartnersSlider3 />
        </div>
     

        <FeatureOne />

        {/* how it works end */}
        <FeatureNineteen />
        <CategorySectionThree />
        {/* feature three end */}
        <section className="contact-us-section pt-50 lg-pt-50">
          <div className="container">
            <div className="border-bottom pb-150 lg-pb-80">
              <div className="title-one text-center mb-70 lg-mb-40">
                <h2>Get in touch</h2>
              </div>

              <div className="row">
                <div className="col-xl-9 m-auto">
                  <div className="form-style-one mt-20 lg-mt-20 wow fadeInUp">
                    <ContactCollegeForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default campus;

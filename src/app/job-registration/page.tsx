import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import PartnersSlider from "../components/partners/partners-slider";
import FeatureOne from "../components/features/feature-one";
import CategorySectionThree from "../components/category/category-section-3";
import FeatureNineteen from "../components/features/feaure-nineteen";
import HeroBannerNine from "../components/hero-banners/hero-banner-nine";
import FeatureTwenty from "../components/features/feature-twenty";
import PartnersSlider3 from "../components/partners/parners-slider3";
// import ContactCollegeArea from "../components/contactCollege/contactCollege-area";
import ContactCollegeForm from "../components/forms/contactCollege-form";
import ContactjobForm from "../components/forms/job-registration";

export const metadata: Metadata = {
  title: "job-registration",
};

const campus = () => {
  return (
    <Wrapper>
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
                  <ContactjobForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
      {/* footer end */}
    </Wrapper>
  );
};

export default campus;

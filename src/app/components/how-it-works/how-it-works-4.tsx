import React from "react";
import Image from "next/image";
import screen_1 from "@/assets/images/assets/2.svg";


const FeatureImg = () => {
  return (
    <div style={{ paddingLeft: "10px", paddingTop:"100px" }}>
      <Image
        src={screen_1}
        alt="Featured Image"
        layout="responsive"
        width={200}
        height={400}
      />
    </div>
  );
};

const AptiFeaturet = () => {
  return (
    <>
      <section className="text-feature-one position-relative pt-50 xl-pt-50 lg-pt-50 md-pt-50 pb-50 xl-pb-50">
        <div className="container">
          <div className="row feature-flex">
            <div className="col-lg-5">
              <div className="content-wrapper ps-xxl-4 wow fadeInRight">
                <div className="title-one">
                  <h2>How This all Works</h2>
                </div>
                <p className="mt-40 md-mt-20 mb-40 md-mb-20">
                Navigating the Route to Tailored Career Growth and Achievement
                </p>
                <ul className="list-style-one style-none">
                  <li>
                   Discover your strengths with our Career Aptitude Test
                  </li>
                  <li>
                    Get in-depth career reports with personalized development plans.
                  </li>
                  <li>With help from our career advisers,Compare and select a few colleges from among thousands of options for your primary and backup vocations.</li>
                  <li>
                  Personalized career counselling and all-around support for all your questions will help you make the best decision.
                  </li>
                    <li>
                  Resume building, schedules for entrance exams, career e-guides, and regular updates.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <FeatureImg />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AptiFeaturet;

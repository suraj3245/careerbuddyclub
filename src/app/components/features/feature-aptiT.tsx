import React from "react";
import Image from "next/image";
import screen_1 from "@/assets/images/assets/4.svg";


const FeatureImg = () => {
  return (
    <div style={{ paddingLeft: "10px" }}>
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
                  <h2>Our Solutions</h2>
                </div>
                <p className="mt-40 md-mt-20 mb-40 md-mb-20">
                Guiding the Path to Personalized Career Development and Success
                </p>
                <ul className="list-style-one style-none">
                 
                  <li>
                    Support students in strategizing and assessing their career
                    options.
                  </li>
                  <li>Recognize and foster their distinct interests.</li>
                  <li>
                    Evaluate strengths and areas for improvement to guide
                    informed choices.
                  </li>
                  <li>
                    Uncover students' personality traits for enhanced career
                    compatibility.
                  </li>
                  <li>
                    Offer invaluable guidance & mentorship to ensure prosperous
                    career paths
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

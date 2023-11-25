import React from "react";
import Image from "next/image";
import screen_1 from "@/assets/images/assets/3.svg";

const FeatureImg = () => {
  return (
    <div style={{paddingTop:"30px"}}>
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

const AptiFeature = () => {
  return (
    <section className="text-feature-one position-relative pt-80 xl-pt-80 lg-pt-80 md-pt-80 pb-80 xl-pb-80">
      <div className="container">
        <div className="row feature-flex">
          <div className="col-lg-6">
            <FeatureImg />
          </div>
          <div className="col-lg-5">
            <div className="content-wrapper ps-xxl-4 wow fadeInRight">
              <div className="title-one">
                <h2>PROBLEMS</h2>
              </div>
              <p className="mt-40 md-mt-20 mb-40 md-mb-20">
                CHALLENGES IN TODAY'S CAREER LANDSCAPE
              </p>
              <ul className="list-style-one style-none">
                <li>
                  93% of students are aware of only 7 career options, despite
                  the existence of 250+ options spanning 26 industries and 5000
                  job roles.
                </li>
                <li>
                  Navigating parental expectations when a child's interests
                  don't align with the chosen career path.
                </li>
                <li>Self-doubt and uncertainty about career choices.</li>
                <li>
                  A significant lack of comprehensive career guidance and
                  support systems within schools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AptiFeature;

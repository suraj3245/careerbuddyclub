import React from "react";
import Image from "next/image";
import screen_1 from "@/assets/images/assets/aptifeature.jpg";

const FeatureImg = () => {
  return (
    <div>
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

const schoolFeature = () => {
  return (
    <section className="text-feature-one position-relative pt-20 xl-pt-20 lg-pt-20 md-pt-20 pb-20 xl-pb-20">
      <div className="container">
        <div className="row feature-flex">
          <div className="col-lg-6">
            <FeatureImg />
          </div>
          <div className="col-lg-5">
            <div className="content-wrapper ps-xxl-4 wow fadeInRight">
              <div className="title-one">
                <h2>Why Is It Important</h2>
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

export default schoolFeature;

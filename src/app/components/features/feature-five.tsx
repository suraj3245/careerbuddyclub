import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import screen_1 from "@/assets/images/assets/s7.jpg";
import screen_2 from "@/assets/images/assets/s14.png";

import AccordionItem from "../accordion/accordion-item";

const FeatureFive = () => {
  return (
    <section className="text-feature-three position-relative pt-150 xl-pt-150 lg-pt-100 md-pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-last ms-auto">
            <div className="wow fadeInRight">
              <div className="title-two">
                <div className="sub-title">Why is it important?</div>
                <h2 className="fw-600 color-blue">
                  Don't just cover Syllabus, Pledge to Your Students' 360° Development.
                </h2>
              </div>
              <div
                className="accordion accordion-style-one color-two mt-40"
                id="accordionOne"
              >
                <AccordionItem
                  id="one"
                  isShow={true}
                  title="Less Career Awareness"
                  desc="93% of students are aware of only 7 career options, despite the existence of 250+ options spanning 26 industries and 5000 job roles."
                  parent="accordionOne"
                />
                <AccordionItem
                  id="two"
                  title="Societal Pressure"
                  desc="Navigating parental expectations when a child's interests don't align with the chosen career path"
                  parent="accordionOne"
                />
                <AccordionItem
                  id="three"
                  title="Less Confidence"
                  desc="Self-doubt and uncertainty about career choices."
                  parent="accordionOne"
                />
                 <AccordionItem
                  id="four"
                  title="Lack of Resources"
                  desc="A significant lack of comprehensive career guidance and support systems within schools."
                  parent="accordionOne"
                />
              </div>
            
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="img-box position-relative rounded-circle d-flex align-items-center justify-content-center wow fadeInLeft">
              <Image src={screen_1} alt="screen" className="lazy-img "layout="fill"
      objectFit="cover" />
              <Image
                src={screen_2}
                alt="screen"
                className="lazy-img shapes screen_02"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureFive;

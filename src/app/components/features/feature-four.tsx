import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import screen_1 from "@/assets/images/assets/img_52.jpg";
import screen_2 from "@/assets/images/assets/screen_08.webp";
import shape from "@/assets/images/shape/shape_25.svg";
import AccordionItemTwo from "../accordion/accordian-item-two";

export function FeatureImgBox() {
  return (
    <div className="img-box position-relative d-flex align-items-center justify-content-center wow fadeInLeft">
      <Image src={screen_1} alt="screen" className="lazy-img" />
      <Image
        src={screen_2}
        alt="screen"
        className="lazy-img shapes screen_01"
      />
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
}
const FeatureFour = () => {
  return (
    <section className="text-feature-three position-relative pt-10 lg-pt-150 md-pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-last ms-auto">
            <div className="wow fadeInRight ms-xxl-5">
              <div className="title-one">
                <div className="sub-title"></div>
                <h2 className="fw-600">The 4 C's of Career Buddy</h2>
              </div>
              <div
                className="accordion accordion-style-one mt-40"
                id="accordionOne"
              >
                <AccordionItemTwo
                  id="one"
                  isShow={true}
                  title="Career"
                  desc="Shaping your future with personalised career guidance and mentorship. 
                  93% of students are aware of only 7 career options, despite the existence of 250+ options 
spanning 26 industries and 5000 job roles.We offer a comprehensive Career Aptitude Test designed to help students like you explore and understand your strengths, interests, and aspirations.
"
                  parent="accordionOne"
                  path="/careerapt"
                  bdesc="Career Aptitude"
                />
                <AccordionItemTwo
                  id="two"
                  title="Course"
                  desc=" Offering specialised programs that bridge the gap between education and industry.
                  At Career Buddy Club, we understand that choosing the right career can be a daunting task. That's why we offer a comprehensive Career Aptitude Test designed to help students like you explore and understand your strengths, interests, and aspirations. 

Our aptitude test goes beyond traditional assessments, providing a personalized and in-depth analysis of your potential career options.
"
                  parent="accordionOne"
                  path="/addmission"
                  bdesc="Courses Available"
                />
                <AccordionItemTwo
                  id="four"
                  title="College"
                  desc="Partnering with premier institutions to provide top-quality education.

                  We partner with renowned colleges providing top notch quality education for your holistic development 
Personalized Counseling: Tailored guidance based on your academic interests, career goals, and location preferences to find the perfect institutions.

Streamlined Applications: Assistance with preparing college applications and meeting deadlines, enhancing your acceptance prospects.

Scholarship Opportunities: Help in securing scholarships and financial aid to make higher education cost-effective.
"
                  parent="accordionOne"
                  path="/campus"
                  bdesc="Collaborated College"
                />
                <AccordionItemTwo
                  id="three"
                  title="Corporate"
                  desc=" Building connections and providing job opportunities through industry engagement.
"
                  parent="accordionOne"
                  path="/corporate"
                  bdesc="Collaborated Companies"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <FeatureImgBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureFour;
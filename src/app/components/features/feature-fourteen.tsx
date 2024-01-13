// Import necessary modules and components
import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape from "@/assets/images/shape/shape_25.svg";
import AccordionItemThree from "../accordion/accordian-item-three";
import screen_1 from "@/assets/images/assets/img_48.jpg";

// Define the FeatureImgBox component
export function FeatureImgBox() {
  return (
    <div className="img-box position-relative d-flex align-items-center justify-content-center wow fadeInLeft">
      <Image src={screen_1} alt="screen" className="lazy-img" width={300} height={200} />
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
}

// Define the Featurefourteen component
const Featurefourteen = () => {
  return (
    <div>
     {/*} <section className="intro-section pt-100">
        <div className="container ">
          <h3 style={{ color: "#eed30d" }}>Shortlist Your Colleges with Precision: Match Your Career Fit for the Best Educational Journey</h3>
          <p className="lead">
            Our streamlined process helps you identify colleges that align perfectly with your chosen career path. Take the guesswork out of college selection and pave the way for a successful and fulfilling academic experience.
          </p>
          <Link href="/shortlist-colleges ">
            <div className= "btn btn-primary">
              Shortlist your Colleges Here
              </div>
          </Link>
        </div>
  </section> */}

      <section className="text-feature-three position-relative pt-50 md-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 order-lg-last ms-auto">
              <div className="wow fadeInRight ms-xxl-5">
                <div className="title-one">
                  <div className="sub-title"></div>
                  <h2 className="fw-600">
                    You're Not Alone in This Journey: Your CBC Buddies Have Your Back
                  </h2>
                </div>
                <div
                  className="accordion accordion-style-one mt-40"
                  id="accordionOne"
                >
                  <AccordionItemThree
                    id="one"
                    isShow={true}
                    title="Advisor Buddy:"
                    desc="Your go-to companion throughout the admission process, guiding you from selecting the right career path to choosing the ideal college and seamlessly navigating the admissions journey."
                    parent={""}
                    path="/advisor-buddy"
                    bdesc="Learn More"
                  />
                  <AccordionItemThree
                    id="two"
                    isShow={true}
                    title="Skill Buddy:"
                    desc="Your personal mentor, dedicated to elevating both your soft and technical skills. Through personalised guidance, they ensure you acquire the expertise needed to thrive in the ever-evolving professional landscape."
                    parent={""}
                    path="/skill-buddy"
                    bdesc="Learn More"
                  />
                  <AccordionItemThree
                    id="four"
                    isShow={true}
                    title="Insight Buddy:"
                    desc="Your constant companion throughout your learning journey. They provide real-world insights and experiences, guiding you in applying your knowledge effectively. With their support, you gain practical wisdom that goes beyond the classroom."
                    parent={""}
                    path="/insight-buddy"
                    bdesc="Learn More"
                  />
                  <AccordionItemThree
                    id="three"
                    isShow={true}
                    title="Placement Buddy:"
                    desc="Your destiny designer ensuring a seamless transition into the professional world. From interview preparation to providing placement opportunities, they guide you every step, helping you embark on the next chapter of your career journey."
                    parent={""}
                    path="/placement-buddy"
                    bdesc="Learn More"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-first">
              <FeatureImgBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featurefourteen;

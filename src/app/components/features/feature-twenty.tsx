import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import screen_1 from "@/assets/images/assets/s8.png";
import screen_2 from "@/assets/images/assets/s14.png";

import AccordionItem from "../accordion/accordion-item";

const FeatureTwenty = () => {
  return (
    <section className="text-feature-three position-relative pt-180 md-mt-50 xl-pt-200 lg-pt-200 md-pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-last ms-auto">
            <div className="wow fadeInRight">
              <div className="title-two">
                <div className="sub-title"></div>
                <h2 className="fw-600" style={{color:"#14adbd"}}>
                  Advantages for Our Campus Partners
                </h2>
              </div>
              <div
                className="accordion accordion-style-one mt-40" 
                id="accordionOne"
                
              >
                <AccordionItem
                  id="one"
                  isShow={true}
                  title="2,00,000+ Students"
                  desc="Counselling 2,00,000+ Class 12th and Grad Students for admissions cycle 2024-2025."
                  parent="accordionOne"
                />
                <AccordionItem
                  id="two"
                  title="1200+ Schools"
                  desc='Forming impactful partnerships with 1200+ Schools for <a href="/careerapt" style="color: blue;">Career Aptitude Test</a> & <a href="https:/thecareertown.com" style="color: blue;">Career Town</a>.'
                  parent="accordionOne"
                />
                <AccordionItem
                  id="three"
                  title="100+ Corporates"
                  desc="100+ Corporates recruiting Students from our Campus Partners in 2024-2025."
                  parent="accordionOne"
                />
                <AccordionItem
                  id="four"
                  title="300+ Global Mentors"
                  desc="300+ Global Mentors from lvy League Universities/Fortune 500 Companies."
                  parent="accordionOne"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="img-box position-relative rounded-circle d-flex align-items-center justify-content-center wow fadeInLeft">
              <Image
                src={screen_1}
                alt="screen"
                className="lazy-img "
                layout="fill"
                objectFit="cover"
              />
            
            </div>
          </div>
        </div>
      </div>
     
  </section>

  );
};

export default FeatureTwenty;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import screen_1 from "@/assets/images/assets/s8.png";
import screen_2 from "@/assets/images/assets/s14.png";

import AccordionItem from "../accordion/accordion-item";

const FeatureTwenty = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="title-two">
                <div className="sub-title"></div>
                <h2 className="fw-600" style={{ color: "#14adbd" }}>
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
                  title="3,00,000+ Students"
                  desc="Counselling 3,00,000+ Class 12th and Grad Students for admissions cycle 2024-2025."
                  parent="accordionOne"
                />
                <AccordionItem
                  id="two"
                  title="2000+ Schools"
                  desc='Forming impactful partnerships with 2000+ Schools for <a href="/career-aptitude" style="color: blue;">Career Aptitude Test</a> & <a href="https:/thecareertown.com" style="color: blue;">Career Town</a>.'
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
          <div className="col-lg-5 col-md-6 col-sm-12">
              <span style={{'margin': 'auto'}}>
              <Image
                src={screen_1}
                alt="screen"
                className="text-center"
                style={{'width': '60vh', 'height': 'auto'}}
              />
              </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwenty;

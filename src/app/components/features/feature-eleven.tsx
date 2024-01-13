"use client";
import React, { useState } from "react";
import AccordionItem from "../accordion/accordion-item";
import VideoPopup from "../common/video-popup";
import CounterOne from "../counter/counter-one";

const FeatureEleven = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="text-feature-three position-relative pt-100 lg-pt-80 md-pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <div className="col-lg-5">
                  <div className="title-one mt-30 md-mb-40">
                    <h2 className="fw-500">
                      We’ve been helping customer globally.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className="wow fadeInRight">
                    <div
                      className="accordion accordion-style-one color-two ps-xxl-5 ms-xxl-4"
                      id="accordionOne"
                    >
                      <AccordionItem
                        id="one"
                        isShow={true}
                        title="Who we are?"
                        desc="We are a dedicated organization guiding students toward successful careers, nurturing aspirations into accomplishments."
                        parent="accordionOne"
                      />
                      <AccordionItem
                        id="two"
                        title="What’s our goal"
                        desc="Our goal is to empower students with the knowledge and resources needed for exceptional career success."
                        parent="accordionOne"
                      />
                      <AccordionItem
                        id="three"
                        title="Our vision"
                        desc="Our vision is to be the foremost catalyst in seamlessly connecting education and industry, shaping empowered careers with limitless potential."
                        parent="accordionOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}

      {/* video modal end */}
    </>
  );
};

export default FeatureEleven;

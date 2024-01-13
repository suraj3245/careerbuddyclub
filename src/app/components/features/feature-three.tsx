"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// internal
import img_1 from "@/assets/images/assets/img_11.webp";
import img_2 from "@/assets/images/assets/img_12.jpeg";
import img_3 from "@/assets/images/assets/img_13.webp";
import shape_1 from "@/assets/images/shape/shape_06.svg";
import shape_2 from "@/assets/images/shape/shape_21.svg";
import VideoPopup from "../common/video-popup";
import CounterOne from "../counter/counter-one";

const FeatureThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="ps-lg-4 wow fadeInRight">
                <div className="title-one">
                  <h2 className="fw-600">
                    Get the best employee <br /> quickly.
                  </h2>
                </div>
                <p className="mt-40 md-mt-20 mb-40 md-mb-20 text-md">
                  <strong>Quality Over Quantity:</strong> Our candidates undergo
                  thorough assessment, mentoring, and training, ensuring they
                  meet your job requirements.You can say goodbye to sifting
                  through bulk data. we match you with the right talent. Unlock
                  Quality Talent.
                </p>
                <ul className="list-style-one style-none">
                  <li>Efficiently Scale Your Recruiting</li>
                  <li>Events and Sourcing, Together</li>
                  <li>Quickly Convert Qualified Applicants</li>
                </ul>
                <Link
                  href="/about-us"
                  className="btn-five border6 mt-70 md-mt-30"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-8 m-auto order-lg-first">
              <div className="img-data position-relative me-xl-5 md-mt-20">
                <div className="row align-items-center gx-xl-5">
                  <div className="col-6">
                    <Image
                      src={img_1}
                      alt="image"
                      className="lazy-img mt-35 md-mt-20 wow fadeInLeft img"
                    />
                  </div>
                  <div className="col-6">
                    <Image
                      src={img_2}
                      alt="image"
                      className="lazy-img mt-35 md-mt-20 wow fadeInDown img"
                    />
                    <Image
                      src={img_3}
                      alt="image"
                      className="lazy-img mt-35 md-mt-20 wow fadeInUp img"
                    />
                  </div>
                </div>
                <Image
                  src={shape_1}
                  alt="shape"
                  className="lazy-img shapes shape_02"
                />
                <Image
                  src={shape_2}
                  alt="hsape"
                  className="lazy-img shapes shape_03"
                />
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-6ZbrfSRWKc"}
      />
      {/* video modal end */}
    </>
  );
};

export default FeatureThree;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import main_img from "@/assets/images/assets/ils_01.svg";
import shape from "@/assets/images/assets/ils_01_02.svg";
import tree_img from "@/assets/images/assets/ils_01_01.svg";
import { placements } from "@popperjs/core";

const HeroBannerNine = () => {
  return (
    <div className="hero-banner-three position-relative pt-120 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-7 text-center">
              <div
                className="slogan fw-500 mb-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                #1 Best For Campuses
              </div>
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Empowering Your Institute for Admissions and Placements!
              </h1>
              <p
                className="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5 wow fadeInUp"
                data-wow-delay="0.5s"
              ></p>

              <a
                href="/admission"
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer"
                className="btn-five wow fadeInUp"
                data-wow-delay="0.6s"
                style={{ marginRight: "10px" }}
              >
                Admissions
              </a>

              <Link
                href="https://jobs.careerbuddyclub.com/"
                className="btn-five wow fadeInUp "
                data-wow-delay="0.6s"
              >
                Placements
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <Image src={main_img} alt="main-img" className="lazy-img main-img" />
        <Image src={shape} alt="shape" className="lazy-img shapes screen_01" />
        <Image
          src={tree_img}
          alt="tree_img"
          className="lazy-img shapes screen_02 wow fadeInLeft"
        />
      </div>
    </div>
  );
};

export default HeroBannerNine;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import main_img from "@/assets/images/assets/ils_01.svg";
import shape from "@/assets/images/assets/ils_01_02.svg";
import tree_img from "@/assets/images/assets/ils_01_01.svg";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three position-relative pt-120 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
      <div className="img-box">
        <Image src={main_img} alt="main-img" className="lazy-img main-img" />
        <Image src={shape} alt="shape" className="lazy-img shapes screen_01" />
        <Image
          src={tree_img}
          alt="tree_img"
          className="lazy-img shapes screen_02 wow fadeInLeft"
        />
      </div>
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                className="slogan fw-500 mb-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                #1 Best For Schools
              </div>
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Help your students in choosing the right career!
              </h1>
              <p
                className="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                50% of students regret choosing their careers, such exposure is
                essential at the school level.
              </p>

              <a
                href="https://www.thecareertown.com"
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer"
                className="btn-five wow fadeInUp"
                data-wow-delay="0.6s"
                style={{ marginRight: "10px" }}
              >
                Career Town
              </a>

              <Link
                href="/career-aptitude"
                className="btn-five wow fadeInUp "
                data-wow-delay="0.6s"
              >
                Career Aptitude Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerThree;

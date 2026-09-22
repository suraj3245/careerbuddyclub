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
                className="slogan fw-500 mb-2 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  color: "#5fa388",
                  fontFamily: "var(--eb_garamond-font)",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  marginBottom: "15px",
                }}
              >
                #1 Best For Campuses
              </div>
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  fontFamily: "var(--eb_garamond-font)",
                  fontSize: "clamp(48px, 6vw, 85px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "#eed30d",
                  marginBottom: "40px",
                }}
              >
                Empowering Your <br />
                Institute for <br />
                Admissions and <br />
                Placements!
              </h1>
              
              <div
                className="d-flex justify-content-center flex-wrap wow fadeInUp"
                data-wow-delay="0.6s"
                style={{ gap: "15px" }}
              >
                <a
                  href="/admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-five"
                  style={{ minWidth: "160px", padding: "12px 30px", fontSize: "16px" }}
                >
                  Admissions
                </a>

                <Link
                  href="https://jobs.careerbuddyclub.com/"
                  className="btn-five"
                  style={{ minWidth: "160px", padding: "12px 30px", fontSize: "16px" }}
                >
                  Placements
                </Link>
              </div>
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

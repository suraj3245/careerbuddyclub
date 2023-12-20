"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@/assets/images/shape/shape_01.svg";
import shape_3 from "@/assets/images/shape/shape_03.svg";
import main_img from "@/assets/images/assets/img_50.png";

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-one position-relative">
      <div className="container">
        <div className="position-relative text-black pt-150 md-pt-100 pb-120 xl-pb-120 md-pb-80">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="wow fadeInUp text-black" data-wow-delay="0.3s">
              Welcome To{" "}
                <span style={{ color: "#eee30d" }}>Career Buddy Club</span>
              </h1>
              <h3 className="mt-40 md-mt-20 mb-40 md-mb-20">
              Your source for top talent!!{" "}
            </h3>
              <Link
                href="/dashboard/candidate-dashboard/profile"
                className="btn-five wow fadeInUp"
                data-wow-delay="0.6s"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="img-box">
            <Image src={shape_1} alt="shape" className="lazy-img shapes" />
            <Image
              src={main_img}
              alt="main-img"
              className="lazy-img main-img w-100 h-100"
            />
          </div>
        </div>
      </div>

      <Image src={shape_3} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default HeroBannerEight;

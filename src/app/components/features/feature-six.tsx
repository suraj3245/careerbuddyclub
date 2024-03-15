import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import shape from "@/assets/images/shape/bg_shape_02.png";
import logo from "@/assets/images/logo/logo.png";
import media_1 from "@/assets/images/logo/s1.png";
import media_2 from "@/assets/images/logo/s2.jpeg";
import media_3 from "@/assets/images/logo/s3.jpeg";
import media_4 from "@/assets/images/logo/s4.jpeg";
import media_5 from "@/assets/images/logo/s5.jpeg";

// brand icon
function MediaImg({ img, num }: { img: StaticImageData; num: string }) {
  return (
    <div
      className={`brand-icon icon_${num} rounded-circle d-flex align-items-center justify-content-center`}
    >
      <Image
        src={img}
        style={{ height: "50px", width: "50px" }}
        alt="media"
        className="lazy-img"
      />
    </div>
  );
}

const FeatureSix = () => {
  return (
    <section className="text-feature-four position-relative mt-60 xl-mt-60 lg-mt-60">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="wow fadeInLeft">
                <div className="title-one">
                  <h2 className="text-black">
                    Collaboration with leading Schools.
                  </h2>
                </div>
                <p className="text-black mt-20 mb-45 lg-mb-30">
                  We collaborate with a number of Schools on helping their students.
                </p>
               
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end md-mt-40">
              <div className="big-circle d-inline-block position-relative wow fadeInRight">
                <Image src={shape} alt="shape" className="lazy-img" />
                <div className="logo rounded-circle d-flex align-items-center justify-content-center">
                  <Image
                    src={logo}
                    alt="logo"
                    className="lazy-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <MediaImg img={media_1} num="01" />
                <MediaImg img={media_2} num="02" />
                <MediaImg img={media_3} num="03" />
                <MediaImg img={media_4} num="04" />
                <MediaImg img={media_5} num="05" />
                <div className="brand text-white text-start text-md">
                  <span>100+</span>Leading Schools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSix;

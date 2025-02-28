import React from "react";
import Image from "next/image";
import main_img from "@/assets/images/assets/ils_01.svg";
import shape from "@/assets/images/assets/ils_01_02.svg";
import tree_img from "@/assets/images/assets/ils_01_01.svg";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three position-relative pt-120 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
      <div className="img-box">
        {/* LCP Image */}
        <Image
          src={main_img}
          alt="Illustration of students exploring career options"
          className="main-img"
          priority
          layout="intrinsic"
          width={800}
          height={600}
        />

        {/* Optimized Lazy Images */}
        <Image
          src={shape}
          alt="Decorative shape background"
          className="shapes screen_01"
          loading="lazy"
          layout="intrinsic"
          width={400}
          height={300}
        />
        <Image
          src={tree_img}
          alt="Tree illustration"
          className="shapes screen_02 wow fadeInLeft"
          loading="lazy"
          layout="intrinsic"
          width={500}
          height={400}
        />
      </div>

      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="slogan fw-500 mb-5 wow fadeInUp" data-wow-delay="0.3s">
                #1 Best For Schools
              </div>
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Help your students in choosing the right career!
              </h1>
              <p className="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5 wow fadeInUp" data-wow-delay="0.5s">
                50% of students regret choosing their careers, such exposure is
                essential at the school level.
              </p>

              <button
                        type="button"
                        className="col-lg-8"
                        data-bs-toggle="modal"
                        data-bs-target="#SchoolLoginFormModales"
                        style={{backgroundColor: "rgb(20, 173, 189)",
                          color: "rgb(255, 255, 255)",
                          border: "none",
                          cursor: "pointer",
                          transition: 'all 0.6s ease-out',
                          padding: '13px',
                          borderRadius: '50px',
                          fontSize: '18px',}}
                      >
                        School Login
                      </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerThree;

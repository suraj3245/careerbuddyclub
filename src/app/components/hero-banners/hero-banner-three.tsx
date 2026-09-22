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
                #1 Best For Schools
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
                  marginBottom: "30px",
                }}
              >
                Help your <br />
                students in <br />
                choosing the right <br />
                career!
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  fontFamily: "var(--eb_garamond-font)",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "#222",
                  maxWidth: "500px",
                  marginBottom: "40px",
                }}
              >
                50% of students regret choosing their careers, such exposure is
                essential at the school level.
              </p>

              <button
                type="button"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                data-bs-toggle="modal"
                data-bs-target="#SchoolLoginFormModales"
                style={{
                  backgroundColor: "#14adbd",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease-out",
                  padding: "12px 40px",
                  borderRadius: "50px",
                  fontSize: "18px",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  width: "fit-content",
                  minWidth: "220px",
                }}
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

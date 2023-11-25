"use client";
import React from "react";
// import banner_1 from "@/assets/images/assets/banner_img_01.jpg";
import banner_1 from "@/assets/images/assets/banner_img_02.webp";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeroBannerSix = () => {
  const { handleSubmit, setCategoryVal, setSearchText } = useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="hero-banner-six position-relative pt-250 lg-pt-250 pb-160 lg-pb-40">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xxl-8 col-xl-9 col-lg-8 m-auto text-center">
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.3s"
                // style={{ color: "#9813bd" }}
              >
                Find & Hire Experts for any Job.
              </h1>
              <p
                className="text-md mt-25 mb-55 lg-mb-40 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{  fontWeight:'bold' }}
              >
                Welcome to Career Buddy Club, Your source for top talent!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="banner-six-carousel"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-100 h-100">
          <div
            className="carousel-item active"
            style={{ backgroundImage: `url(${banner_1.src})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSix;

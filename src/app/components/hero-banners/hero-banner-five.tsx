"use client";
import React from "react";
import Image from "next/image";
import shape from "@/assets/images/shape/shape_29.svg";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeroBannerFive = () => {
  const { handleSubmit, setSearchText } = useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="hero-banner-five position-relative pt-200 lg-pt-150">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                <span
                  style={{
                    color: "#eee30d",
                    textShadow:
                      "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
                  }}
                >
                  Career buddy club
                </span>
                <br /> Your gateway to brighter future.
              </h1>
              <p
                className="text-md mt-40 lg-mt-20 mb-65 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                With the largest professional creative community online, simply
                search through from our website
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-meta">
        <Image
          src={shape}
          alt="shape img"
          className="lazy-img shapes shape_01"
        />
      </div>
      <a href="#" className="chat-btn tran3s">
        <i className="bi bi-chat-dots"></i>
      </a>
    </div>
  );
};

export default HeroBannerFive;

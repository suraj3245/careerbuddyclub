"use client";
import React from "react";
import Image from "next/image";
import shape from "@/assets/images/shape/shape_29.svg";
import screen from "@/assets/images/assets/screen_15.webp";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import Link from "next/link";
const AptiBanner = () => {
  const { handleSubmit, setSearchText } = useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="hero-banner-apti position-relative pt-150 lg-pt-150 pb-30">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              Uncertain about the <br />  ideal career path for you?

              </h1>
              <p
                className="text-md mt-40 lg-mt-20 mb-10 lg-mb-10 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
              We discover your unique skills and interests, guiding you towards a successful and fulfilling career path.
              </p>
            </div>
          </div>
          
        </div>
              <Link
                href="/aptitudetest"
                className="btn-five wow fadeInUp "
                data-wow-delay="0.6s"
              >
              Begin your free Test
              </Link>
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

export default AptiBanner;

"use client";
import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import logo_1 from "@/assets/images/logo/s26.webp";
import logo_2 from "@/assets/images/logo/s27.jpg";
import logo_7 from "@/assets/images/logo/s28.png";
import logo_4 from "@/assets/images/logo/s34.jpg";
import logo_5 from "@/assets/images/logo/s30.png";
import logo_6 from "@/assets/images/logo/s31.png";
import logo_3 from "@/assets/images/logo/s32.jpg";
import logo_8 from "@/assets/images/logo/s33.jpg";


// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

// logo data
const logos: StaticImageData[] = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
];

const PartnersSlider3 = () => {
  return (
    <>
     <div className="text-center mt-4">
    <h3 className="mt-40 md-mt-20 mb-40 md-mb-20" style={{ color: "#14adbd" }}>
      Campus Partners
    </h3>
    </div>
      <Slider {...slider_setting} className="partner-slider">
        {logos.map((logo, i) => (
          <div key={i} className="item">
            <div className="logo d-flex align-items-center">
              <Image src={logo} alt="logo" style={{ height: "150px" }} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PartnersSlider3;

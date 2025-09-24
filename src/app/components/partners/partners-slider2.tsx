"use client";

import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";

// Import all logos
import logo_1 from "@/assets/images/logo/media_02.webp";
import logo_2 from "@/assets/images/logo/media_04.webp";
import logo_3 from "@/assets/images/logo/media_01.webp";
import logo_4 from "@/assets/images/logo/media_06.webp";
import logo_5 from "@/assets/images/logo/media_07.webp";
import logo_6 from "@/assets/images/logo/media_08.webp";
import logo_7 from "@/assets/images/logo/media_05.webp";
import logo_8 from "@/assets/images/logo/media_09.webp";
import logo_9 from "@/assets/images/logo/media_10.webp";
import logo_10 from "@/assets/images/logo/media_03.webp";

// Slider settings
const sliderSettings = {
  dots: false,
  arrows: false, // ✅ hide prev/next buttons
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1200,
  speed: 900,
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 5 } },
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

// Logo list
const logos: StaticImageData[] = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
];

const PartnersSlider2 = () => {
  return (
    <section className="py-6">
      <Slider {...sliderSettings} className="partner-slider">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="w-32 h-20 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Partner logo ${i + 1}`}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain"
                priority={i < 3} // ✅ preload first 3 logos
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnersSlider2;

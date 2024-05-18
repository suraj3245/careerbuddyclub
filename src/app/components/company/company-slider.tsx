import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { ICompany } from "@/types/company-type";
import { CSSProperties } from "react"; // Import CSSProperties for type-checking

const CompanySlider = ({ companies }: { companies: ICompany[] }) => {
  const slideStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  };

  const logoLinkStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const imageStyle: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderRadius: "50%", // Makes the image round
  };

  return (
    <Swiper
      spaceBetween={50} // Space between slides
      slidesPerView={4} // Default number of slides per view for larger devices
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true} // Enables continuous loop mode
      className="company-slider"
      breakpoints={{
        // When window width is <= 640px, display 2 slides per view
        640: {
          slidesPerView: 2,
        },
        // When window width is <= 768px, display 3 slides per view
        768: {
          slidesPerView: 3,
        },
        // When window width is >= 1024px, display 4 slides per view
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {companies.map((item) => (
        <SwiperSlide key={item.id}>
          <div style={slideStyle}>
            <Link href={`/company-details/${item.id}`} style={logoLinkStyle}>
              <Image
                src={item.img}
                alt={`${item.name} logo`}
                className="lazy-img"
                width={70}
                height={70}
                style={imageStyle}
              />
            </Link>
            <h5 className="text-center">
              <Link
                href={`/company-details/${item.id}`}
                className="company-name tran3s"
              >
                {item.name}
              </Link>
            </h5>
            <p className="text-center mb-auto">{item.location}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanySlider;

"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import expert_data_two from "@/data/expert-data-two";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 0,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const ExpertSectionTwo = () => {
  return (
    <>
      <section className="expert-section-one position-relative mt-180 xl-mt-150 md-mt-100">
        <div className="container position-relative">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="title-one">
                <h2 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                  Meet Our Leadership
                </h2>
              </div>
            </div>
          </div>

          <Slider
            {...slider_setting}
            className="expert-slider-two pt-70 lg-pt-40"
          >
            {expert_data_two.map((item) => (
              <div key={item.id} className="item">
                <div className="card-style-eight">
                  <div className="img-meta mb-20">
                    <Image src={item.img} alt="team img" className="m-auto" />
                  </div>
                  <div className="name fw-500 tran3s text-center">
                    {item.name}
                  </div>
                  <div className="post text-center">{item.designation}</div>
                  <p className="message text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ExpertSectionTwo;

"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// internal
import user_1 from "@/assets/images/logo/Unknown.webp";
import user_2 from "@/assets/images/assets/img_15.jpg";
import shape from "@/assets/images/shape/shape_26.svg";
import shape_2 from "@/assets/images/shape/shape_27.svg";

// review data
const review_data: {
  id: number;
  title: string;
  rating: number;
  desc: string;
  user: StaticImageData;
  name: string;
  location: string;
}[] = [
  {
    id: 1,
    title: "Impressive",
    rating: 4.8,
    desc: "“The team at this job portal truly cares about their clients. From the initial consultation to the final job offer, they provided me with invaluable support and guidance. I couldn't have done it without them!”",
    user: user_1,
    name: "Akhil Bharghav",
    location: "Taj Agra",
  },
  {
    id: 2,
    title: "Nice work!",
    rating: 4.7,
    desc: "“I landed my dream job! The mentorship and upskilling programs were extremely helpful in preparing me for the interview and giving me the confidence to pursue my dream.”",
    user: user_1,
    name: "Mohit",
    location: "Skywings Private Limited",
  },
  {
    id: 3,
    title: "Impressive",
    rating: 4.5,
    desc: "“I would highly recommend this service to anyone looking to further their career.”",
    user: user_1,
    name: "Ashwani Goswami",
    location: "KSPL",
  },
  {
    id: 4,
    title: "Nice work!",
    rating: 4.2,
    desc: "“The mentorship and upskilling programs were tailored to my specific needs, and the job opportunities presented to me were top-notch. Thanks to their help, I'm now in a job I love and can't imagine being happier”",
    user: user_1,
    name: "Tabish Jamal",
    location: "KSPL",
  },
];

// slider setting
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300000,
  responsive: [
    {
      breakpoint: 768,
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

const FeedbackTwo = () => {
  return (
    <section className="feedback-section-two position-relative pt-65 lg-pt-20 mt-180 xl-mt-150 md-mt-30">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-4">
            <div className="title-one mt-50 wow fadeInUp" data-wow-delay="0.3s">
              <div className="sub-title"></div>
              <h2 className="fw-600">Success Stories made by Career Buddy</h2>
            </div>
            <div
              className="fw-500 rating-title mt-80 lg-mt-40 mb-5 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              JOIN US
            </div>
            <p className="wow fadeInUp" data-wow-delay="0.5s">
              You might be the Next.
            </p>
          </div>

          <div className="col-lg-8 ms-auto">
            <div className="slider-wrapper ms-lg-5">
              <div className="row feedback-slider-two">
                <Slider {...slider_setting}>
                  {review_data.map((r) => (
                    <div key={r.id} className="item m-0">
                      <div className="feedback-block-two">
                        <div className="review fw-500">{r.title}</div>
                        <ul className="style-none d-flex rating">
                          <li>
                            <a href="#">
                              <i className="bi bi-star-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="bi bi-star-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="bi bi-star-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="bi bi-star-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="bi bi-star-fill"></i>
                            </a>
                          </li>
                        </ul>
                        <blockquote className="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark">
                          {r.desc}
                        </blockquote>
                        <div className="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20">
                          <div className="d-flex align-items-center">
                            <Image
                              src={r.user}
                              alt=""
                              className="author-img rounded-circle"
                            />
                            <div className="ms-3">
                              <div className="name fw-500 text-dark">
                                {r.name}
                              </div>
                              <span className="opacity-50">{r.location}</span>
                            </div>
                          </div>
                          <Image
                            src={shape}
                            alt="shape"
                            className="quote-icon"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape_2} alt="shape_2" className="lazy-img shapes shape_01" />
    </section>
  );
};

export default FeedbackTwo;

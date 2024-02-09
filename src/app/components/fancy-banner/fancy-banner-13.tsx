"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import shape from "@/assets/images/shape/shape_04.svg";
import user_1 from "@/assets/images/assets/img_58.webp";
import user_3 from "@/assets/images/assets/img_59.webp";
import user_2 from "@/assets/images/assets/img_60.webp";
import user_4 from "@/assets/images/assets/img_61.webp";
import user_5 from "@/assets/images/assets/img_62.webp";
import user_6 from "@/assets/images/assets/img_63.webp";
import user_7 from "@/assets/images/assets/img_64.jpeg";
import user_8 from "@/assets/images/assets/img_65.webp";
import user_9 from "@/assets/images/assets/img_66.webp";
import user_10 from "@/assets/images/assets/img_87.webp";
import user_11 from "@/assets/images/assets/img_93.webp";
import Speakers from "@/app/Speakers/page";

// expert_data
const expert_data: {
  id: number;
  user: StaticImageData;
  name: string;
 
  title: string;
  salary: string;
}[] = [
  {
    id: 1,
    user: user_1,
    name: "Ms. NISHA NARAYANAN",
    
    title: "CEO, RED FM",
    salary: "",
  },
  {
    id: 2,
    user: user_2,
    name: "Ms. MARIA GORETTI ",
    
    title: "Chef, Author & Former VJ",
    
    salary: "",
  },
  {
    id: 3,
    user: user_3,
    name: "Dr. HIMANSHU RAI",

    title: "Director, IIM INDORE",
    salary: "",
  },
  {
    id: 4,
    user: user_4,
    name: "HIMADRI PATEL ",
    
    title: "Youtuber, Content Creator, Fashion Influencer",
    salary: "",
  },
  {
    id: 5,
    user: user_5,
    name: " Mr. VISHAL SEHGAL",
  
    title: "President, Harvard University Club, India",
    salary: "",
  },
  {
    id: 6,
    user: user_6,
    name: "Ms. IRA SINGHAL",
    
    title: "IAS Topper (2014)",
    salary: "",
  },

  {
    id: 7,
    user: user_7,
    name: "SIDDHARTH SHUKLA",
    
    title: "Senior Consultant Startup Uttarakhand",
    salary: "",
  },
  {
    id: 8,
    user: user_8,
    name: "AKASH GUPTA",
   
    title: "Founder, ZYPP",
    salary: "",
  },
  {
    id: 9,
    user: user_9,
    name: "Ms. VASHUDHA RAI",
    title: "Author,Beauty and Wellness Expert",
    salary: "",
  },
  {
    id: 10,
    user: user_10,
    name: "ASHOK KUMAR",
    title: "Director General of  Police, Govt. of Uttarakhand",
    salary: "",
  },
  {
    id: 11,
    user: user_11,
    name: "MONA SINGH",
    title: "Founder, India Accelerator",
    salary: "",
  },
  
];

// slick slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  centerMode: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const FancyBanner13 = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <section className="expert-section-one position-relative mt-10 xl-mt-10 lg-mt-10 pt-150">
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-7">
            <div
              className="title-one text-center text-md-start mb-65 md-mb-50 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h2>
                100{" "}
                <span className="position-relative">
                  +{" "}
                  <Image
                    src={shape}
                    alt="shape"
                    className="lazy-img shapes shapes"
                  />
                </span>{" "}
                <br/> Global Mentors and Speakers.
              </h2>
            </div>
          </div>
        </div>
        
        <Slider
          {...slider_setting}
          className="expert-slider-one"
          ref={sliderRef}
        >
          {expert_data.map((item) => (
            <div key={item.id} className="item">
              <div className="card-style-three text-center">
                <div className="img-meta mb-40 lg-mb-20">
                  <Image
                    src={item.user}
                    alt="user-img"
                    className="m-auto"
                    style={{ height: "auto" }}
                  />
                </div>
                <a href="#" className="name text-md fw-500 text-dark">
                  {item.name}
                </a>
                
                <div className="post">{item.title}</div>
                <div className="post">{item.salary}</div>
              </div>
            </div>
          ))}
        </Slider>

        <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none sm-mt-30">
          <li className="prev_a slick-arrow" onClick={sliderPrev}>
            <i className="bi bi-arrow-left"></i>
          </li>
          <li className="next_a slick-arrow" onClick={sliderNext}>
            <i className="bi bi-arrow-right"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FancyBanner13;

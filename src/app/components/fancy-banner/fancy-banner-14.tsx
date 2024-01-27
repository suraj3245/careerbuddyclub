"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import shape from "@/assets/images/shape/shape_04.svg";
import user_1 from "@/assets/images/assets/img_67.webp";
import user_3 from "@/assets/images/assets/img_68.webp";
import user_2 from "@/assets/images/assets/img_69.webp";
import user_4 from "@/assets/images/assets/img_70.webp";
import user_5 from "@/assets/images/assets/img_71.webp";
import user_6 from "@/assets/images/assets/img_72.webp";
import user_7 from "@/assets/images/assets/img_73.webp";
import user_8 from "@/assets/images/assets/img_74.webp";
import user_9 from "@/assets/images/assets/img_75.webp";
import user_10 from "@/assets/images/assets/img_86.webp";
import user_11 from "@/assets/images/assets/img_92.webp";
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
    name: "ANUBHAV DUBEY",
    
    title: "CEO, Chai Sutta Bar",
    salary: "",
  },
  {
    id: 2,
    user: user_2,
    name: "ANKIT MACHHAR",
    
    title: "Director, Ecosystem Nen Wadhwani Foundation",
    
    salary: "",
  },
  {
    id: 3,
    user: user_3,
    name: "MOHUA CHINAPPAH",

    title: "Author of Nautanki Saala and other Stories",
    salary: "",
  },
  {
    id: 4,
    user: user_4,
    name: "ASHWIN JOSHI",
    
    title: "Head Strategic Growth and Development, IIM  Dubai",
    salary: "",
  },
  {
    id: 5,
    user: user_5,
    name: "ABHAY CHAWLA",
  
    title: "Co-Founder and  CEO, India Accelerator",
    salary: "",
  },
  {
    id: 6,
    user: user_6,
    name: "RAKESH SAOJI",
    
    title: "CTO, Compport",
    salary: "",
  },

  {
    id: 7,
    user: user_7,
    name: "RJ DEVANGGANA",
    
    title: "RJ,RED FM 93.5",
    salary: "",
  },
  {
    id: 8,
    user: user_8,
    name: "SHOAIB KABEER",
   
    title: "Actor",
    salary: "",
  },
  {
    id: 9,
    user: user_9,
    name: "ASHISH KHARE",
    title: "CEO and Founder, India Accelerator",
    salary: "",
  },
  {
    id: 10,
    user: user_10,
    name: "MUNISH BHATIA",
    title: "Co-Founder and  Director, India Accelerator",
    salary: "",
  },
  {
    id: 11,
    user: user_11,
    name: "MANINDER SINGH",
    title: "Senior  Engineering Manager, Classplus",
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

const FancyBanner14 = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <section className="expert-section-one position-relative mt-10 xl-mt-10 lg-mt-10 ">
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-7">
            <div
              className="title-one text-center text-md-start mb-65 md-mb-50 wow fadeInUp"
              data-wow-delay="0.3s"
            >
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
                <div className="img-meta mt-80 mb-40 lg-mb-20">
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

export default FancyBanner14;

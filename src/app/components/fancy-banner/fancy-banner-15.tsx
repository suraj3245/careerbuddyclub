"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import shape from "@/assets/images/shape/shape_04.svg";
import user_1 from "@/assets/images/assets/img_76.webp";
import user_3 from "@/assets/images/assets/img_77.webp";
import user_2 from "@/assets/images/assets/img_78.webp";
import user_4 from "@/assets/images/assets/img_79.webp";
import user_5 from "@/assets/images/assets/img_80.webp";
import user_6 from "@/assets/images/assets/img_81.webp";
import user_7 from "@/assets/images/assets/img_83.webp";
import user_8 from "@/assets/images/assets/img_84.webp";
import user_9 from "@/assets/images/assets/img_85.webp";
import user_10 from "@/assets/images/assets/img_88.webp";
import user_11 from "@/assets/images/assets/img_91.webp";
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
    name: "VENU AGRAHARI DHINGRA",
    
    title: "Social activist and Author",
    salary: "",
  },
  {
    id: 2,
    user: user_2,
    name: "ANUKRITI BATRA",
    
    title: " CEO, Plan Your Memories COO, Career Buddy Club",
    
    salary: "",
  },
  {
    id: 3,
    user: user_3,
    name: "SATWINDER JEET SINGH",

    title: "CEO, Nimmaan Home Automation and Interiors",
    salary: "",
  },
  {
    id: 4,
    user: user_4,
    name: "AMIT MINOCHA",
    
    title: " CEO, Maldevta Farms",
    salary: "",
  },
  {
    id: 5,
    user: user_5,
    name: "DEEPAK SHARMA",
  
    title: "Founder, IA-LABS",
    salary: "",
  },
  {
    id: 6,
    user: user_6,
    name: "NAMAN BANSAL",
    
    title: "Founder, Crafting Memories",
    salary: "",
  },

  {
    id: 7,
    user: user_7,
    name: "HIMANSHU GUPTA",
    
    title: "Founder, Lawyered",
    salary: "",
  },
  {
    id: 8,
    user: user_8,
    name: "Dr. RADHIKHA NAGRATH",
   
    title: "Yoga Teacher, Patanjali Yogpeeth",
    salary: "",
  },
  {
    id: 9,
    user: user_9,
    name: "TANVIR SHAH",
    title: "MD, The Partnerships Advisory, Director, Career Buddy Club",
    salary: "",
  },
  {
    id: 10,
    user: user_10,
    name: "JITENDER PANIHAR",
    title: "CHRO, Fitelo",
    salary: "",
  },
  {
    id: 11,
    user: user_11,
    name: "ROMIK RAI",
    title: "CEO, Green Asssets",
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

const FancyBanner15 = () => {
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
               
                <a href="#" className="name text-md fw-500 text-dark ">
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

export default FancyBanner15;

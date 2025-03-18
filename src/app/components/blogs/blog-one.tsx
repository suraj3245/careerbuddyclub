"use client";
import React, { useRef } from "react";
import blog_data from "@/data/blog-data";
import BlogItem from "./blog-item/blog-item";
import Link from "next/link";
import Slider from "react-slick";
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
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
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const BlogOne = () => {
  const blog_items = blog_data.filter((b) => b.blog === "blog-one");
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <section className="blog-section-one pt-60">
      <div className="container">
        <div className="position-relative">
          <div
            className="title-one mb-30 lg-mb-10 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2>Career Buddy Club Media Presence</h2>
          </div>

          <div className="row gx-xxl-5">
          <Slider {...slider_setting} ref={sliderRef}>
           {blog_items.map((item) => (
           <div key={item.id} className="col-lg-4 col-md-6 border">
           <BlogItem item={item} />
           </div>
           ))}
         </Slider>
         </div>
         
         
        </div>
      </div>
    </section>
  );
};

export default BlogOne;

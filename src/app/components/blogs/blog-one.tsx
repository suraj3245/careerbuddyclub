"use client";
import React, { useRef } from "react";
import blog_data from "@/data/blog-data";
import BlogItem from "./blog-item/blog-item";
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

  return (
    <section
      className="blog-section-one pt-60"
      style={{ background: "#7ed4ec"}} 
    >
      <div className="container">
        <div className="position-relative">
          <div
            className="title-one text-center text-sm-start"
            data-wow-delay="0.3s"
          >
            <h2 className="fw-600 text-center">Career Buddy Club Media Presence</h2>
          </div>

          <div className="row gx-xxl-5 text-center mt-40">
            <Slider {...slider_setting} ref={sliderRef}>
              {blog_items.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" style={{ marginBottom:'4rem' }}>
                    <BlogItem item={item} />
                  </div>
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

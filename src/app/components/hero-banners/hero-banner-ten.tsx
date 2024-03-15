"use client";
import React from "react";
import Image from "next/image";
import screen_1 from "@/assets/images/assets/screen_10.webp";
import screen_2 from "@/assets/images/assets/screen_11.webp";
import screen_3 from "@/assets/images/assets/screen_12.webp";
import screen_4 from "@/assets/images/assets/screen_13.webp";
import JobLocationSelect from "../select/job-location";
import JobCategorySelect from "../select/job-category";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import Img from "@/assets/images/assets/img_95.jpg"

const HeroBannerTen = () => {
  const { handleSubmit, setLocationVal, setCategoryVal, setSearchText } =
    useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="hero-banner-ten position-relative pt-170 lg-pt-150 pb-100 lg-pb-150 md-pb-100"  >
        <div className="container">
          <div className="position-relative  sm-pb-20">
            <div className="row">
              <div className="col-xxl-7 col-lg-8 m-auto pt-200 text-center">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s"style={{ color: 'white', textShadow: '2px 2px 4px black' }}>
                 
                "Empowering Minds, Igniting Change: Where Mentors Inspire and Speakers Spark Transformation."
                </h1>
               
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default HeroBannerTen;

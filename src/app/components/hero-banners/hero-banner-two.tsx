"use client";
import React from "react";
import Image from "next/image";
// internalc
import shape_2 from "@/assets/images/shape/shape_16.svg";
import shape_3 from "@/assets/images/shape/shape_17.svg";
import shape_4 from "@/assets/images/shape/shape_18.svg";
import shape_5 from "@/assets/images/shape/shape_19.svg";
import shape_6 from "@/assets/images/shape/shape_20.svg";
import screen_1 from "@/assets/images/assets/screen_04.png";
import screen_2 from "@/assets/images/assets/screen_05.png";
import screen_3 from "@/assets/images/assets/screen_06.png";
import main_img from "@/assets/images/assets/img_10.png";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeroBannerTwo = () => {
  const { handleSubmit, setSearchText } = useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="hero-banner-two position-relative">
      <div className="container">
        <div className="position-relative pt-225 xl-pt-200 lg-pt-150 pb-80 lg-pb-60">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                What Do You Need Help With?
              </h1>
              <p
                className="text-md mt-35 mb-20 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                -50% Students Regert Loosing Wrong Career
              </p>
              <p
                className="text-md mt-10 mb-20 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                -Only 1 In 4 Students From College Get A Job
              </p>

              <p
                className="text-md mt-10 mb-20 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                -93% Student Know 7 Courses Only
              </p>
              <p
                className="text-md mt-10 mb-20 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                -98% Of Student Follow Same Career Option Without Self-Interest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* /.img-box */}
      <div className="rating-box position-relative">
        <div className="d-sm-flex justify-content-end">
          <div className="me-sm-5 pe-xxl-4">
            <div className="d-flex align-items-center">
              <Image
                src={screen_3}
                alt="screen"
                className="lazy-img me-2 me-lg-4"
              />
              <div>
                <div className="text-lg fw-500 text-dark">1000+</div>
                <span>Career Guided</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg fw-500 text-dark mb-10">
              Best Career Guidance
            </div>
            <ul className="d-flex align-items-center style-none rating">
              <li>100+ Partners</li>
            </ul>
          </div>
        </div>
      </div>

      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      <Image src={shape_3} alt="shape" className="lazy-img shapes shape_03" />
      <Image src={shape_4} alt="shape" className="lazy-img shapes shape_04" />
      <Image src={shape_5} alt="shape" className="lazy-img shapes shape_05" />
      <Image src={shape_6} alt="shape" className="lazy-img shapes shape_06" />
    </div>
  );
};

export default HeroBannerTwo;

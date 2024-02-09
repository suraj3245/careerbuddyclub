import React from "react";
import Image from "next/image";
import ApplyForm from "../forms/apply-now";
import img1 from "@/assets/images/assets/apti.png";

const ApplyArea = () => {
  return (
    <div className="hero-banner-three position-relative pt-100 md-pt-100 xs-pt-120 pb-80 lg-pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div
              className="slogan fw-500 mb-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Welcome to Career Buddy Club
            </div>
            <h1 className="wow fadeInUp" data-wow-delay="0.4s">
              Help your students in choosing the right career!
            </h1>
          </div>

          <div className="col-lg-4 col-md-4 pt-30 ">
            <div className="user-data-form-two">
              <div className="text-center">
                <h2 style={{ color: "ffffff" }}>Register Here</h2>
              </div>
              <div className="form-wrapper m-auto pt-20">
                <ApplyForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyArea;

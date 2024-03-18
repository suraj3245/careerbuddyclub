import React from "react";
import Image from "next/image";
import ApplyForm from "../forms/apply-now";
import img1 from "@/assets/images/assets/imgbanner.jpg";
import img2 from "@/assets/images/assets/imgbanner1.jpg";

const ApplyArea = () => {
  return (
    
    <div className="hero-banner-thirteen position-relative pt-100 md-pt-100 xs-pt-120 pb-80 lg-pb-20 }">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">

          <div>
    {/* Image Section */}
    <div className="image-container d-md-none d-block">
      {/* Adjust the src, width, and height according to your image */}
      <Image src={img2} alt="Banner Image" />
    </div>
    </div>


            <div
              className="slogan fw-500 mb-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
            </div>
           
          </div>

          <div className="col-lg-4 col-md-4 pt-30 ">
            <div className="user-data-form-two">
              <div className="text-center">
                <h2 style={{ color: "ffffff" }}>Register Here</h2>
              </div>
              <div className="form-wrapper m-auto sm-pt-900 pt-20">
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

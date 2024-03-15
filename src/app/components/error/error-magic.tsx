import React from "react";
import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/images/icon/icon_61.svg";
import err_img from "@/assets/images/assets/404.svg";

const ErrorMagic = () => {
  return (
    <div className="error-page d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-md-6 ms-auto order-md-last">
            <div className="error">404</div>
            <h2>Link Expired !! </h2>
            <p className="text-md">
              Take a moment and Enjoy Our Services Start from our Homepage.
            </p>
            <Link
              href="/"
              className="btn-one w-100 d-flex align-items-center justify-content-between mt-30"
            >
              <span>Career Buddy Club</span>
              <Image src={icon} alt="icon" />
            </Link>
          </div>
          <div className="col-md-6 order-md-first">
            <Image src={err_img} alt="error-img" className="sm-mt-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMagic;

import React from "react";
import Image from "next/image";
import screen from "@/assets/images/assets/screen_14.webp";
import Link from "next/link";
import CounterOne from "../counter/counter-one";

const FancyBannerNine = () => {
  return (
    <>
      <section className="fancy-banner-nine mt-180 xl-mt-150 lg-mt-100">
        <div className="container">
          <div className="bg-wrapper position-relative wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 order-lg-last ms-auto">
                <div className="text-wrapper wow fadeInRight">
                  <div className="title-one mb-45 lg-mb-30">
                    <h2 className="text-white">
                      We ensure that you find the job of your dreams through our...
                    </h2>
                  </div>
                  <p className="text-white text-md mb-55 lg-mb-30">
                    - Personalized Career Support <br />
                    - Career & Personal Development Sessions
                    <br />
                    - Placement Support
                    <br />
                    - Buddy Assistance 
                    <br />- Skill Enhancement Sessions 
                    <br />- Industry Networking
                  </p>
                  <Link
                    href="/job-list-v1"
                    className="find-job-btn d-flex align-items-center text-white"
                  >
                    <span className="fw-500">Find your job.</span>
                    <span className="ms-1">
                      {" "}
                      <u>Explore all</u>
                    </span>
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="img-meta me-xl-4 position-relative">
                  <Image
                    src={screen}
                    alt="screen img"
                    className="lazy-img shapes screen_01"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom pb-50 lg-pb-20 mt-110 xl-mt-80 lg-mt-30">
            <div className="row">
              <CounterOne />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FancyBannerNine;

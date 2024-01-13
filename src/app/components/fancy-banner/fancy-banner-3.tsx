"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/icon/icon_37.svg";
import icon_2 from "@/assets/images/icon/icon_38.svg";
import icon_3 from "@/assets/images/icon/icon_39.svg";
import icon_4 from "@/assets/images/icon/icon_39.svg";
import VideoPopup from "../common/video-popup";

// content data
const content_data: {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}[] = [
  {
    title:
      "Boost student employability with targeted career guidance and skill development programs.",
    subtitle: "",
    icon: icon_1,
  },
  {
    title:
      "Connect your students with top companies through exclusive job postings and career fairs.",
    subtitle: "",
    icon: icon_2,
  },
  {
    title:
      "Track student placements and measure the impact of your career services.",
    subtitle: "",
    icon: icon_3,
  },
  {
    title:
      "Simplify your career services with easy-to-use tools and dedicated support.",
    subtitle: "",
    icon: icon_4,
  },
];

const FancyBannerThree = ({ style_2 = false }: { style_2?: boolean }) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      {!style_2 && (
        <section className="fancy-banner-three mt-25 lg-mt-25">
          <div className="container">
            <div className="bg-wrapper position-relative wow fadeInUp">
              <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                  <div className="text-wrapper wow fadeInRight">
                    
                    <div className="title-one mt-35 lg-mt-30 mb-30 lg-mb-20">
                      <h2 className="fw-600 text-white">
                        Key Features for{" "}
                        <span style={{ color: "#EEE30D" }}>Colleges</span>
                      </h2>
                    </div>
                    <p className="text-white">
                      Joining Career Buddy Club opens doors to a world of
                      opportunities for your college
                    </p>
                  </div>
                </div>
              </div>

              <div className="bottom-content position-relative">
                <div className="row gx-xxl-5 justify-content-between">
                  {content_data.map((c, i) => (
                    <div key={i} className="col-lg-4">
                      <div className="d-flex mt-20 wow fadeInUp">
                        <div className="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center">
                          {i + 1}
                        </div>
                        <div className="ps-4 text">
                          <div className="fw-500 text-white text-lg mb-10">
                            {c.title}
                          </div>
                          <Link
                            href="/register"
                            className="fw-500 text-uppercase"
                          >
                            {c.subtitle}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {style_2 && (
        <section className="fancy-banner-three mt-150 lg-mt-100">
          <div className="bg-wrapper pt-85 lg-pt-50 pb-80 lg-pb-50 position-relative wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                  <div className="text-wrapper p0 mb-50 md-mb-20 wow fadeInRight">
                    <a
                      className="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center"
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-play-fill"></i>
                    </a>
                    <div className="title-one mt-25 mb-25 lg-mb-20">
                      <h2 className="text-white main-font">
                        Key Features for{" "}
                        <span style={{ color: "#EEE30D" }}>Colleges</span>
                      </h2>
                    </div>
                    <p className="text-white text-md">
                      Joining Career Buddy Club opens doors to a world of
                      opportunities for your College
                    </p>
                  </div>
                </div>
              </div>

              <div className="row gx-xl-5 justify-content-between">
                {content_data.map((c, i) => (
                  <div key={i} className="col-lg-4 d-flex">
                    <div className="card-style-nine w-100 d-flex mt-20 wow fadeInUp">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <Image src={c.icon} alt="icon" className="lazy-img" />
                      </div>
                      <div className="ps-4 text d-flex flex-column">
                        <div className="text-lg mb-10">{c.title}</div>
                        <a href="#" className="fw-500 text-uppercase">
                          {c.subtitle}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-6ZbrfSRWKc"}
      />
      {/* video modal end */}
    </>
  );
};

export default FancyBannerThree;

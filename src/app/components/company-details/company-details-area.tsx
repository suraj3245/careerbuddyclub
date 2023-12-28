"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CompanyReviews from "./company-reviews";
import VideoPopup from "../common/video-popup";
import { IcompanyType } from "@/types/company-details";

// Define a type for the props if you're using TypeScript
type VideoCardProps = {
  videoId: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Set the width only when on the client-side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Styles for the video container to maintain aspect ratio
  const isSmallScreen = windowWidth !== undefined && windowWidth < 768; // Define your breakpoint for smaller screens

  const videoWrapperStyle: React.CSSProperties = isSmallScreen
    ? {
        position: "relative",
        paddingTop: "56.25%", // 16:9 aspect ratio for smaller screens
        paddingLeft: "10px",
      }
    : {
        position: "relative",
        width: "896px", // Fixed width for larger screens
        height: "442px", // Fixed height for larger screens
        marginLeft: "auto",
        marginRight: "auto",
      };

  // Styles for the iframe to make it responsive
  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: "10px", // To account for the padding on the container
    right: "10px", // To account for the padding on the container
    width: "calc(100% - 20px)", // Subtracting the left and right padding
    height: "100%",
    border: "0", // If you prefer no border
  };

  return (
    <div className="video-card" style={videoWrapperStyle}>
      <iframe
        style={iframeStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const CompanyDetailsArea = ({ details }: { details: IcompanyType }) => {
  const videoId = details.videoid;

  return (
    <>
      <section className="company-details pt-110 lg-pt-80 pb-160 xl-pb-150 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 order-xl-last">
              <div className="job-company-info ms-xl-5 ms-xxl-0 lg-mb-50">
                <Image
                  src={details.logo}
                  alt="logo"
                  className="lazy-img m-auto logo"
                />
                <div className="text-md text-dark text-center mt-15 mb-20 lg-mb-10">
                  {details.company}
                </div>
                <div className="text-center">
                  <a
                    href={details.link}
                    className="website-btn-two tran3s"
                    target="_blank"
                  >
                    Visit our website
                  </a>
                </div>

                <div className="border-top mt-35 lg-mt-20 pt-25">
                  <ul className="job-meta-data row style-none">
                    <li className="col-12">
                      <span>Location: </span>
                      <div>{details.location} </div>
                    </li>

                    <li className="col-12">
                      <span>Email: </span>
                      <div>
                        <a href={details.email}>{details.email}</a>
                      </div>
                    </li>
                    <li className="col-12">
                      <span>Founded: </span>
                      <div>{details.date}</div>
                    </li>

                    <li className="col-12">
                      <span>Category: </span>
                      <div>{details.category[0]}</div>{" "}
                      <div>{details.category[1]}</div>{" "}
                    </li>
                    <li className="col-12">
                      <span>Social: </span>
                      <div>
                        <a href={details.facebook} className="me-3">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href={details.instagram} className="me-3">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href={details.twitter} className="me-3">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href={details.linkedin}>
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 order-xl-first">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <h3>Overview</h3>
                <p>{details.overviewsection}</p>

                <h3>Intro</h3>

                <div className="col-lg-7 pb-80">
                  <VideoCard videoId={videoId} />
                </div>

                <div className="position-relative">
                  <h3>Company Reviews</h3>

                  {/* CompanyReviews */}
                  <CompanyReviews />
                  {/* CompanyReviews */}
                </div>

                <div className="share-option mt-60">
                  <ul className="style-none d-flex align-items-center">
                    <li className="fw-500 me-2">Share: </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}

      {/* video modal end */}
    </>
  );
};

export default CompanyDetailsArea;

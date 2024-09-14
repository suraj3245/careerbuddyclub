"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { IcollegeType } from "@/types/college-details";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const sliderSettings = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type VideoCardProps = {
  videoId: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth !== undefined && windowWidth < 768;

  const videoWrapperStyle: React.CSSProperties = isSmallScreen
    ? {
        position: "relative",
        paddingTop: "56.25%",
        paddingLeft: "10px",
      }
    : {
        position: "relative",
        width: "896px",
        height: "442px",
        margin: "auto",
      };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: "10px",
    right: "10px",
    width: "calc(100% - 20px)",
    height: "100%",
    border: "0",
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

const CollegeDetailsArea: React.FC<{ details: IcollegeType }> = ({ details }) => {
  // Check for details and videoId
  const videoId = details?.videoid || "defaultVideoId"; // Provide a default value if videoId is missing

  // Check if details is defined and has the expected properties
  if (!details) {
    return <div>Error: No details provided</div>;
  }

  const renderSocialLinks = () => (
    <>
      {details.facebook && <a href={details.facebook} className="me-3"><i className="bi bi-facebook"></i></a>}
      {details.instagram && <a href={details.instagram} className="me-3"><i className="bi bi-instagram"></i></a>}
      {details.twitter && <a href={details.twitter} className="me-3"><i className="bi bi-twitter"></i></a>}
      {details.linkedin && <a href={details.linkedin}><i className="bi bi-linkedin"></i></a>}
    </>
  );

  return (
    <section className="company-details lg-pt-80 pb-30 xl-pb-150 lg-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 order-xl-last">
            <div className="job-company-info ms-xl-5 ms-xxl-0 lg-mb-50">
              <Image src={details.logo || "/default-logo.png"} alt="logo" className="lazy-img m-auto logo" width={100} height={100} />
              <div className="text-md text-dark text-center mt-15 mb-20 lg-mb-10">{details.college || "College Name"}</div>
              <div className="text-center">
                <a href={details.link || "#"} className="website-btn-two tran3s" target="_blank" rel="noopener noreferrer">
                  Visit our website
                </a>
              </div>
              <div className="border-top mt-35 lg-mt-20 pt-25">
                <ul className="job-meta-data row style-none">
                  <li className="col-12">
                    <span>Location: </span>
                    <div>{details.location || "Location not available"}</div>
                  </li>
                  <li className="col-12">
                    <span>Email: </span>
                    <div>
                      <a href={`mailto:${details.email || "default@example.com"}`}>{details.email || "default@example.com"}</a>
                    </div>
                  </li>
                  <li className="col-12">
                    <span>For admission related enquiry: </span>
                    <div>{details.category?.join(", ") || "Not specified"}</div>
                  </li>
                  <li className="col-12">
                    <span>Social: </span>
                    <div>
                      {renderSocialLinks()}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 order-xl-first pt-100">
            <div className="details-post-data me-xxl-5 pe-xxl-4">
              <h3 id="overview">Overview</h3>
              <p>{details.overviewsection || "Overview not available"}</p>

              <div className="col-lg-7 pb-80">
                <VideoCard videoId={videoId} />
              </div>

              {/* Other sections with similar checks and fallbacks */}
              
              {/* Example: Courses and Fees Table */}
              <div className="details-post-data me-xxl-9 pe-xxl-8 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto">
                <Table aria-label="Courses and Fees Table">
                  <TableHeader>
                    <TableColumn>Institute Name</TableColumn>
                    <TableColumn>{details.college || "College Name"}</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {details.overviewtable?.map((overview, index) => (
                      <TableRow key={index}>
                        <TableCell className="table-body-cell">{overview.specialization || "N/A"}</TableCell>
                        <TableCell className="table-body-cell">{overview.annualfee || "N/A"}</TableCell>
                      </TableRow>
                    )) || (
                      <TableRow>
                        <TableCell colSpan={2}>No data available</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Similar checks for other sections like "Courses and Fees", "Placements", etc. */}

              <h3 className="pt-50" id="alumni">Alumni Reviews</h3>
              <Slider {...sliderSettings} className="company-review-slider">
                {details.reviewinfo?.map((item) => (
                  <div key={item.id} className="item">
                    <div className="feedback-block-four">
                      <div className="d-flex align-items-center">
                        <ul className="style-none d-flex rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <a href="#" tabIndex={0}>
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="review-score">
                          <span className="fw-500 text-dark">{item.rating}</span> out of 5
                        </div>
                      </div>
                      <blockquote>{item.desc || "No review description available"}</blockquote>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <div className="name fw-500 text-dark">{item.name || "Anonymous"}</div>
                          <span className="opacity-50">{item.location || "Location not specified"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )) || (
                  <div>No reviews available</div>
                )}
              </Slider>

              <div className="share-option mt-60">
                <ul className="style-none d-flex align-items-center">
                  <li className="fw-500 me-2">Share: </li>
                  <li>
                    <a href="#" aria-label="Share on Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Share on Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Share on Twitter">
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
  );
};

export default CollegeDetailsArea;

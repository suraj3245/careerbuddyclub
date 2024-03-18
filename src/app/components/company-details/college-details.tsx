"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import VideoPopup from "../common/video-popup";
import Slider from "react-slick";
import { IcollegeType } from "@/types/college-details";
import useSticky from "@/hooks/use-sticky";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const slider_setting = {
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


  const useSticky = () => {
    const [sticky, setSticky] = useState<boolean>(false);
    const [headerTop, setHeaderTop] = useState<number>(0);
  

    useEffect(() => {
      // Your logic for determining sticky state and headerTop value
      // For example, you might listen for scroll events to determine the headerTop value
  
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        setSticky(currentScroll > 100); // Example condition for setting sticky
        setHeaderTop(currentScroll); // Example of setting headerTop to current scroll position
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return { sticky, headerTop };
  };

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
const CollegeDetailsArea = ({ details }: { details: IcollegeType }) => {
  const videoId = details.videoid;
  const { sticky } = useSticky();
  const [headerTop, setHeaderTop] = useState<string>("275px");
  
  return (
    <>
    

      <section className="company-details  lg-pt-80 pb-30 xl-pb-150 lg-pb-80">

      <div className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* menus start */}
          <li className="nav-item">
            <a className="nav-link" href="#overview" role="button">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses" role="button">
              Courses and Fees
            </a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#placement" role="button">
              Placement
            </a>
          </li>
         
         
          <li className="nav-item">
            <a className="nav-link" href="#awards" role="button">
              Awards
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#ranking" role="button">
              Ranking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#alumni" role="button">
              Alumni Reviews
            </a>
          </li>
          {/* menus end */}
        </ul>
      </div>
    </div>


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
                  {details.college}
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
                      <span>For admission related enquiry: </span>
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
            <div className="col-xxl-9 col-xl-8 order-xl-first pt-100">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <h3 id="overview">Overview</h3>
                <p>{details.overviewsection}</p>

                <div className="col-lg-7 pb-80">
                <VideoCard videoId={videoId} />
              </div>

                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                <Table aria-label="Courses and Fees Table">
                <TableHeader>
                  <TableColumn>Institute Name</TableColumn>
                  <TableColumn>{details.college}</TableColumn>
                </TableHeader>
                <TableBody>
                      {details.overviewtable.map((overview, index) => (
                        <TableRow key={index}>
                          <TableCell>{overview.specialization}</TableCell>
                          <TableCell>{overview.annualfee}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

               


                <h3 id="courses">Courses and Fees</h3>
                <p>{details.courses}</p>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Courses and Fees Table">
                    <TableHeader>
                      <TableColumn>Courses</TableColumn>
                      <TableColumn>Specialization</TableColumn>
                      <TableColumn>Annual Fees</TableColumn>
                      <TableColumn>Selection Criteria</TableColumn>
                      <TableColumn>Eligibility Criteria</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.coursesAndFees.map((course, index) => (
                        <TableRow key={index}>
                        <TableCell>{course.course}</TableCell>
                          <TableCell>{course.specialization}</TableCell>
                          <TableCell>{course.annualFee}</TableCell>
                          <TableCell>{course.duration}</TableCell>
                          <TableCell>{course.eligibility}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>




               


                <div className="position-relative">
                  <h3 className="pt-50" id="placement">
                    Placements 
                  </h3>
                  <p>{details.placement}</p>

                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Admission Dates Table">
                      <TableHeader>
                        <TableColumn>Placement Informatiion</TableColumn>
                        <TableColumn>Details</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.placementinformation.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.info}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h3 className="pt-50" id="campus">
                    About Campus
                  </h3>
                  <p>{details.campus}</p>

                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Admission Dates Table">
                      <TableHeader>
                        <TableColumn>Campus</TableColumn>
                        <TableColumn>Details</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.campusinfo.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.info}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                 
                 


                 
                  <h3 className="pt-50" id="awards">
                    Awards
                  </h3>
                  <p>{details.awards}</p>

                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Admission Dates Table">
                      <TableHeader>
                        <TableColumn>Name of Awards</TableColumn>
                        
                      </TableHeader>
                      <TableBody>
                        {details.awardsinfo.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                           
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                 
                  <h3 className="pt-50" id="ranking">
                    Ranking
                  </h3>
                  <p>{details.ranking}</p>

                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Admission Dates Table">
                      <TableHeader>
                        <TableColumn>Ranking</TableColumn>
                        <TableColumn>Details</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.rankinginfo.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.info}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <h3 className="pt-50" id="alumni">
                    Alumni Reviews
                  </h3>

                  {/* CompanyReviews */}
                  <Slider {...slider_setting} className="company-review-slider">
                    {details.reviewinfo.map((item) => (
                      <div key={item.id} className="item">
                        <div className="feedback-block-four">
                          <div className="d-flex align-items-center">
                            <ul className="style-none d-flex rating">
                              <li>
                                <a href="#" tabIndex={0}>
                                  <i className="bi bi-star-fill"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" tabIndex={0}>
                                  <i className="bi bi-star-fill"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" tabIndex={0}>
                                  <i className="bi bi-star-fill"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" tabIndex={0}>
                                  <i className="bi bi-star-fill"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" tabIndex={0}>
                                  <i className="bi bi-star-fill"></i>
                                </a>
                              </li>
                            </ul>
                            <div className="review-score">
                              <span className="fw-500 text-dark">
                                {item.rating}
                              </span>{" "}
                              out of 5
                            </div>
                          </div>
                          <blockquote>{item.desc}</blockquote>
                          <div className="d-flex align-items-center">
                            <Image
                              src={item.user}
                              alt="user"
                              className="author-img rounded-circle"
                            />
                            <div className="ms-3">
                              <div className="name fw-500 text-dark">
                                {item.name}
                              </div>
                              <span className="opacity-50">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
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

export default CollegeDetailsArea;

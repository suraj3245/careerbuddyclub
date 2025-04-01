"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { IcourseType } from "@/types/course-details";
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

const CoursesDetailsArea = ({ details }: { details: IcourseType }) => {
  const { sticky } = useSticky();
  const [headerTop, setHeaderTop] = useState<string>("275px");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      console.log("isMobile:", isMobile); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHeaderTop(currentScrollPos > 50 ? "0px" : "275px"); 
    };

    window.addEventListener("scroll", handleScroll);

    


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // const handleResize = () => {
    //   if (typeof window !== "undefined") {
    //     setHeaderTop(window.innerWidth < 1200 ? "225px" : "275px");
    //   }
    // };

    // // Add event listeners for resize and initial check
    // if (typeof window !== "undefined") {
    //   window.addEventListener("resize", handleResize);
    //   handleResize(); // Initial check

    //   const navLinks = document.querySelectorAll(".theme-main-menu .nav-link");
    // }

    // // Clean up event listeners on component unmount
    // return () => {
    //   if (typeof window !== "undefined") {
    //     window.removeEventListener("resize", handleResize);
    //   }
    // };
  }, []);

  

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
        style={{ top: headerTop }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center">

            </div>
          </div>
        </div>
      </header>
           
            <section className="company-details  lg-pt-80 pb-30 xl-pb-150 lg-pb-80">
            <div className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#overview" role="button">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#discription" role="button">
                    Description
                  </a>
                </li>
 
                <li className="nav-item">
                <a className="nav-link" href="#career" role="button">
                Careers
                </a>
              </li>

                <li className="nav-item">
                  <a className="nav-link" href="#entrance" role="button">
                    Entrance Exams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#alumini" role="button">
                  Alumini Reviews
                  </a>
                </li>
             
              {/* menus end */}
              </ul>
            </div>
          </div>
          

     
     
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 order-xl-first pt-30">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <h3 id="overview">Overview</h3>
                <p>{details.courseoverview}</p>

                <div className="ms-xl-5 ms-xxl-0 lg-mb-50 mb-4">
                  {!isMobile && (
                    <Image
                      src={details.image}
                      alt="image"
                      className="lazy-img m-auto"
                      width={800}
                      height={500}
                    />
                  )}
                </div>
      

                <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Courses and Fees Table">
                    <TableHeader>
                      <TableColumn>Particulars</TableColumn>
                      <TableColumn>Course Details</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.coursesoverviewtable.map((course, index) => (
                        <TableRow key={index}>
                          <TableCell>{course.particulars}</TableCell>
                          <TableCell>{course.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>



                <div className="position-relative">
                  <h3 className="pt-50" id="discription">
                    Why Choose {details.coursename} Degree?
                  </h3>
                  <p>{details.whychoose}</p>

                  {details.whychoosepoints.map((point, index) => (
                    <ul>
                      <li key={index}> {point}</li>
                    </ul>
                  ))}



                  <h3 id="career">Career</h3>
                
                  <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Top career">
                    <TableHeader>
                      <TableColumn>Career</TableColumn>
                    
                    </TableHeader>
                    <TableBody>
                      {details.careertable.map((course, index) => (
                        <TableRow key={index}>
                          <TableCell>{course.career}</TableCell>
                      
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>



                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4">
                  <h3 id="entrance">{details.coursename} Entrance Examination</h3>
                  <p>{details.courseexam}</p>
                  <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Courses and Fees Table">
                      <TableHeader>
                        <TableColumn>Exams</TableColumn>
                        <TableColumn>What is the exam is for?</TableColumn>
                        <TableColumn>Type of Exam</TableColumn>
                        <TableColumn>Mode of Exam</TableColumn>

                      </TableHeader>
                      <TableBody>
                        {details.coursesEntrance.map((course, index) => (
                          <TableRow key={index}>
                           
                          <TableCell>{course.Exams}</TableCell>
                          <TableCell>{course.Entrance}</TableCell>
                          <TableCell>{course.TExams}</TableCell>
                          <TableCell>{course.MExams}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  </div>

                  <h3 className="pt-50" id="alumini">
                    Alumini Reviews
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
    </>
  );
};

export default CoursesDetailsArea;
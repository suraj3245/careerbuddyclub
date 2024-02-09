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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHeaderTop(currentScrollPos > 50 ? "0px" : "275px"); // Change '50' to the scroll position you desire
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
              <nav className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
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
                      <a className="nav-link" href="#admission" role="button">
                        Admission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#placement" role="button">
                        Placement
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#opportunities"
                        role="button"
                      >
                        Opportunities
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#hostel" role="button">
                        Hostel
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
                      <a className="nav-link" href="#alumini" role="button">
                        Alumini Reviews
                      </a>
                    </li>
                    {/* menus end */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="company-details pt-110 lg-pt-80 pb-160 xl-pb-150 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 order-xl-first pt-100">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <h3 id="overview">Overview</h3>
                <p>{details.courseoverview}</p>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
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
                  <h3 className="pt-50">
                    Why Choose {details.coursename} Degree?
                  </h3>
                  <p>{details.whychoose}</p>

                  {details.whychoosepoints.map((point, index) => (
                    <ul>
                      <li key={index}> {point}</li>
                    </ul>
                  ))}

                  <h3 id="courses" className="pt-20">
                    Types of {details.coursename} Degree
                  </h3>
                  <p>{details.typesofcoursedegreeContent}</p>
                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Courses and Fees Table">
                      <TableHeader>
                        <TableColumn>Types of {details.coursename}</TableColumn>
                        <TableColumn>Annual Fee</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.typesofcourses.map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>{course.typesofcourse}</TableCell>
                            <TableCell>{course.avgfee}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h3 className="pt-50">
                    {details.coursename} Lateral Entry Procedure
                  </h3>
                  <p>{details.lateralentryprocedure}</p>
                  <h3 className="pt-20">
                    {details.coursename} integrated course
                  </h3>
                  <p>{details.integratedcourse}</p>

                  <h3 className="pt-20">
                    {details.coursename} Eligibility Criteria
                  </h3>
                  <p>{details.eligibility}</p>
                  {details.eligibilitypoint.map((point, index) => (
                    <ul>
                      <li key={index}> {point}</li>
                    </ul>
                  ))}

                  <h3 className="pt-20">
                    {details.coursename} Required Skill-sets
                  </h3>
                  <p>{details.requiredskillset}</p>
                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Courses and Fees Table">
                      <TableHeader>
                        <TableColumn>
                          Skill Set for {details.coursename}
                        </TableColumn>
                        <TableColumn>Description</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.skillset.map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>{course.skill}</TableCell>
                            <TableCell>{course.details}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h3 className="pt-20">{details.coursename} Entrance</h3>
                  <p>{details.entrance}</p>
                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Courses and Fees Table">
                      <TableHeader>
                        <TableColumn>Exams in India</TableColumn>
                        <TableColumn>Application Process Starts</TableColumn>
                        <TableColumn>Application Process Ends</TableColumn>
                        <TableColumn>Admit Card</TableColumn>
                        <TableColumn>Exam Dates</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.EntranceExamination.map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>{course.examination}</TableCell>
                            <TableCell>{course.applicationstart}</TableCell>
                            <TableCell>{course.applicationend}</TableCell>
                            <TableCell>{course.admitcard}</TableCell>
                            <TableCell>{course.examdate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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

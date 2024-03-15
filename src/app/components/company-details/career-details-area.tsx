"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { IcareerType } from "@/types/career-details";
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


  const CareerDetailsArea = ({ details }: { details: IcareerType }) => {
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
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
    
          <section className="company-details  lg-pt-80 pb-30 xl-pb-150 lg-pb-80 ">
          <div className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* menus start */}
              <li className="nav-item">
                <a className="nav-link" href="#introduction" role="button">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#course" role="button">
                  Courses 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#college" role="button">
                  Colleges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#company" role="button">
                 Company
                </a>
              </li>    
              <li className="nav-item">
              <a className="nav-link" href="#summary" role="button">
               Summary
              </a>
            </li>      
              {/* menus end */}
            </ul>
          </div>
        </div>



          <div className="container">
            <div className="row">

            <div className="col-xxl-5 col-xl-6 order-xl-last">  
            <h3 id="summary">Summary</h3>
            <div className="details-post-data job-company-info  me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
              <Table aria-label="Summary">
                <TableHeader>
                  <TableColumn>Section</TableColumn>
                  <TableColumn>Detailing</TableColumn>
                </TableHeader>
                <TableBody>
                  {details.Summary.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.Section}</TableCell>
                      <TableCell>{event.Detailing}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            </div>

              <div className="col-xxl-7 col-xl-6 order-xl-first pt-100px">
                <div className="details-post-data me-xxl-5 pe-xxl-4 ">
                  <h3 id="introduction">Introduction</h3>
                  <p>{details.careersection}</p>

                  <div className=" ms-xl-5 ms-xxl-0 lg-mb-50 mb-4">
                  <Image
                    src={details.image}
                    alt="image"
                    className="lazy-img m-auto"
                    width={800}
                    height={500}
                  />
                  </div>
                  <h3 id="description">Job Description</h3>
                  <p>{details.careersection1}</p>

                  <h4 id="Technology">Technology Skills</h4>
                 <ul>
                  <li>{details.t1}</li>
                  <li>{details.t2}</li>
                  <li>{details.t3}</li>
                  <li>{details.t4}</li>
                  <li>{details.t5}</li>
                </ul>
                  <h4 id="Work">Tools Used</h4>
                  <ul>
                  <li>{details.X1}</li>
                  <li>{details.X2}</li>
                  <li>{details.X3}</li>
                  <li>{details.X4}</li>
                  <li>{details.X5}</li>
                </ul>

                  <h4 id="Skills">Skills</h4>
                  <ul>
                  <li>{details.S1}</li>
                  <li>{details.S2}</li>
                  <li>{details.S3}</li>
                  <li>{details.S4}</li>
                  <li>{details.S5}</li>
                </ul>

                
                <h4 id="package">Average Package</h4>
                <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                <Table aria-label="Package">
                  <TableHeader>
                    <TableColumn>Student Type</TableColumn>
                    <TableColumn>Package</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {details.Package.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.Student}</TableCell>
                        <TableCell>{event.Package}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>


                  <h3 id="course">Top Courses</h3>                 
                  <p>{details.courses}</p>

                  <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto">
                  <Table aria-label="Top Courses">
                    <TableHeader>
                      <TableColumn>Courses</TableColumn>
                      <TableColumn> College</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.Topcourse.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell>{event.Courses}</TableCell>
                          <TableCell>{event.College}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>


                  <h3 id="college">Top College offering a Bright Career as a {details.career}</h3>
                  <p>{details.college}</p>
         
                  <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Top Colleges">
                    <TableHeader>
                      <TableColumn>University</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.Topcollege.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell>{event.University}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                                 
                  <h3 id="company">Top Recruting Company</h3>
                  <p>{details.company}</p>
                  <div className="details-post-data job-company-info me-xxl-5 pe-xxl-4 mt-4 mb-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Top Company">
                    <TableHeader>
                      <TableColumn>Companies</TableColumn>
                    
                    </TableHeader>
                    <TableBody>
                      {details.Topcompany.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell>{event.Company}</TableCell>
                      
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>


                   </div>
                 </div>
                </div>
          </div>
        </section>
      </>
    );
  };
  
  export default CareerDetailsArea;
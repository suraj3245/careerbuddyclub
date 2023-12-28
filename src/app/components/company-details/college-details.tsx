"use client";
import React, { useState } from "react";
import Image from "next/image";
import VideoPopup from "../common/video-popup";
import { IcollegeType } from "@/types/college-details";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import CollegeReviews from "./college-review";

const CollegeDetailsArea = ({ details }: { details: IcollegeType }) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

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

                <h3 className="pb-50">Courses and Fees 2023</h3>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Courses and Fees Table">
                    <TableHeader>
                      <TableColumn>Specialization</TableColumn>
                      <TableColumn>Annual Fee</TableColumn>
                      <TableColumn>Eligibility Criteria</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.coursesAndFees.map((course, index) => (
                        <TableRow key={index}>
                          <TableCell>{course.specialization}</TableCell>
                          <TableCell>{course.annualFee}</TableCell>
                          <TableCell>{course.eligibility}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <h3 className="pt-50">Admission Dates 2023</h3>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Admission Dates Table">
                    <TableHeader>
                      <TableColumn>Event</TableColumn>
                      <TableColumn>Date</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {details.admissionDates.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell>{event.name}</TableCell>
                          <TableCell>{event.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="position-relative pt-50">
                  <h3 className="pt-50">Placements 2023</h3>
                  <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                    <Table aria-label="Admission Dates Table">
                      <TableHeader>
                        <TableColumn>Event</TableColumn>
                        <TableColumn>Date</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {details.admissionDates.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h3>College Reviews</h3>

                  {/* CompanyReviews */}
                  <CollegeReviews />
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
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={details.videoid}
      />
      {/* video modal end */}
    </>
  );
};

export default CollegeDetailsArea;

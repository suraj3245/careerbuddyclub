"use client";
import React, { useState } from "react";
import Image from "next/image";
import CompanyReviews from "./company-reviews";
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

                <h3>Intro</h3>
                <div className="video-post d-flex align-items-center justify-content-center mb-50">
                  <a
                    className="fancybox rounded-circle video-icon tran3s text-center"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-play-fill"></i>
                  </a>
                </div>

                <h3 className="pb-50">Courses and Fees 2023</h3>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Example static collection table">
                    <TableHeader>
                      <TableColumn>Specialization</TableColumn>
                      <TableColumn>Annual Fee</TableColumn>
                      <TableColumn>Eligibilty Criteria</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>Diploma</TableCell>
                        <TableCell>Rs 45,000</TableCell>
                        <TableCell>
                          Class 10th with minimum 35% marks in aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Diploma in Pharmacy (D.Pharm.)</TableCell>
                        <TableCell>Rs 1,00,000</TableCell>
                        <TableCell>As per PCI norms.</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>B.Tech</TableCell>
                        <TableCell>Rs 1,15,000 - Rs 1,30,000</TableCell>
                        <TableCell>
                          Passed 10+2 examination with Physics and Mathematics
                          as compulsory subjects
                        </TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>BCA</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          10+2 with Mathematics/Computer Science/Information
                          Practices etc. with minimum 50% marks
                        </TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>B.Sc.</TableCell>
                        <TableCell>Rs 45,000 - Rs 1,25,000</TableCell>
                        <TableCell>10+2 or equivalent</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>B.Ed.</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          Graduation in any stream with minimum 50% marks in
                          aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>B.Com.</TableCell>
                        <TableCell>Rs 40000</TableCell>
                        <TableCell>
                          10+2 with minimum 50% marks in best four relevant
                          Subjects.
                        </TableCell>
                      </TableRow>
                      <TableRow key="8">
                        <TableCell>B.Sc.</TableCell>
                        <TableCell>Rs 45,000 - Rs 1,25,000</TableCell>
                        <TableCell>10+2 or equivalent</TableCell>
                      </TableRow>
                      <TableRow key="9">
                        <TableCell>B.Ed.</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          Graduation in any stream with minimum 50% marks in
                          aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="10">
                        <TableCell>B.Com.</TableCell>
                        <TableCell>Rs 40000</TableCell>
                        <TableCell>
                          10+2 with minimum 50% marks in best four relevant
                          Subjects.
                        </TableCell>
                      </TableRow>
                      <TableRow key="11">
                        <TableCell>B.Com. (Hons.)</TableCell>
                        <TableCell>Rs 50,000</TableCell>
                        <TableCell>10+2 with minimum 50% marks.</TableCell>
                      </TableRow>
                      <TableRow key="12">
                        <TableCell>BBA</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          10+2 with minimum 50% marks in best four relevant
                          Subjects.
                        </TableCell>
                      </TableRow>
                      <TableRow key="13">
                        <TableCell>B.Sc. in Nursing</TableCell>
                        <TableCell>Rs 2,00,000</TableCell>
                        <TableCell>
                          Candidate must pass the 12th or equivalent exam with
                          PCB and English from a recognised board.
                        </TableCell>
                      </TableRow>
                      <TableRow key="14">
                        <TableCell>Integrated B. Com LLB (Hons)</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          10 +2 with minimum 45% marks in aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="14">
                        <TableCell>Integrated B. Com LLB (Hons)</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          10 +2 with minimum 45% marks in aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="15">
                        <TableCell>Integrated BA LLB (Hons)</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          Passed 10 +2 with minimum 45% marks in aggregate
                        </TableCell>
                      </TableRow>
                      <TableRow key="16">
                        <TableCell>M.Tech.</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          B.Tech. with Minimum 55% marks in the relevant branch
                          or 60% in MCA for Computer Science & Engineering.
                        </TableCell>
                      </TableRow>
                      <TableRow key="17">
                        <TableCell>MCA</TableCell>
                        <TableCell>Rs 60000</TableCell>
                        <TableCell>
                          Passed BCA/ Bachelor Degree in Computer Science
                          Engineering or equivalent Degree.
                        </TableCell>
                      </TableRow>
                      <TableRow key="18">
                        <TableCell>M. Sc.</TableCell>
                        <TableCell>Rs 30000 - Rs 70,000</TableCell>
                        <TableCell>
                          Graduate in science with minimum 50% marks in
                          aggregate with relevant subject.
                        </TableCell>
                      </TableRow>
                      <TableRow key="19">
                        <TableCell>M.B.A.</TableCell>
                        <TableCell>Rs 1,15,000</TableCell>
                        <TableCell>
                          Bachelor's degree (any discipline) with 50% marks in
                          aggregate.
                        </TableCell>
                      </TableRow>
                      <TableRow key="20">
                        <TableCell>M.Pharma</TableCell>
                        <TableCell>Rs 1,00,000</TableCell>
                        <TableCell>
                          B.Pharm degree with a minimum of 50% marks from a
                          recognised institute.
                        </TableCell>
                      </TableRow>
                      <TableRow key="21">
                        <TableCell>LLM</TableCell>
                        <TableCell>Rs 40000</TableCell>
                        <TableCell>
                          The candidate must have completed an LLB degree
                          (3-year LLB or 5-year LLB) from a recognised
                          university.
                        </TableCell>
                      </TableRow>
                      <TableRow key="22">
                        <TableCell>M.Sec.</TableCell>
                        <TableCell>Rs 50000</TableCell>
                        <TableCell>
                          Graduate in Science with minimum 50% marks in
                          aggregate with relevant subjects.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h3 className="pt-50">Admission Dates 2023</h3>
                <div className="details-post-data me-xxl-5 pe-xxl-4 mt-4 border border-gray-300 rounded-lg overflow-auto ">
                  <Table aria-label="Example static collection table">
                    <TableHeader>
                      <TableColumn>Event</TableColumn>
                      <TableColumn>Date</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>Registration Dates</TableCell>
                        <TableCell>February 8 to September 15, 2023</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Date of Entrance Test & Interview</TableCell>
                        <TableCell>September 17, 2023</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>Date of Result Declaration</TableCell>
                        <TableCell>September 18, 2023</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>Last Date of Submission of Fee</TableCell>
                        <TableCell>September 28, 2023</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>Commencement of the Coursework</TableCell>
                        <TableCell>October 3, 2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="position-relative pt-50">
                  <h3>College Reviews</h3>

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

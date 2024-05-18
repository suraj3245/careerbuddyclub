"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./dashboard-header";
import NiceSelect from "@/ui/nice-select-two";
import { OnChangeArgument } from "@/ui/nice-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import company_data from "@/data/company-data";
import CompanyDashboardArea from "../../company/company-dashboard-area";

// props type

type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  courses: Array<{
    id: number;
    courseName: string;
    stream: string;
    fees: number;
  }>;
};
const PowerDegree = ({ setIsOpenSidebar, courses }: IProps) => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        <h1 className="main-title">Power Degree</h1>
        {/* header end */}
        <section>
          <div className="row align-content-center pb-50">
            <div className="col-lg-7">
              <iframe
                className="mt-10"
                width="100%"
                height="110%"
                src="https://www.youtube.com/embed/geIfC-DZjKY?si=SMbT5wBV1DcnCUem"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-5 md-pt-30 sm-pt-40">
              <h4>
                <span style={{ color: "#13ADBD" }}>
                  POWER DEGREE-100 %<br />
                </span>
                <span style={{ color: "#eee30d" }}>JOB GUARANTEED DEGREE </span>
              </h4>
              <p style={{ fontSize: "15px" }}>
                In this world of globalization where the job market is rapidly
                evolving , securing a stable and satisfying job can be
                challenging. To provide an elucidation Career Buddy Club is
                providing Power Degree Program to students. Power Degree Program
                is a comprehensive educational experience designed to enhance
                the students with skills, knowledge and connections that will
                land the students to their dream job with 100% guaranteed
                success rate. Power Degree by CBC Campus Partner in association
                with an Industry Partner is a job guarantee program that can be
                associated with any degree.
              </p>
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-lg-6">
              <h3>Power Degree Ensures 100% Job Guarantee:</h3>
              <p style={{ fontSize: "15px" }}>
                The Power Degree isn't just about acquiring skills – it's also
                about building connections.What sets the Power Degree apart is
                our unwavering commitment to your success. We don't just promise
                results – we guarantee them. With our 100% job guarantee, you
                can rest assured that upon completion of the program, you'll
                secure a job in your desired fieldWith our 100% job guarantee,
                personalized support, and industry connections, there's no limit
                to what you can achieve.
              </p>
              <h3>Our Best Practices</h3>
              <ul style={{ fontSize: "15px", lineHeight: "2em" }}>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    60 Hours of specialized training:
                  </span>{" "}
                  Focused and intensive learning for specialized skills Ensuring
                  that training materials can easily transition between offline
                  and online formats to accommodate various learning
                  environments.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    10 + real life projects:
                  </span>{" "}
                  Engage with real life projects for hands on experience and
                  expertise.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    200+ skill assessment tests:
                  </span>{" "}
                  Improves proficiency and efficiency in students.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>50+ job interviews:</span>
                  Gain valuable experience through sustained and continual
                  interviews.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    4-6 months of job training:
                  </span>{" "}
                  Inclusive job training to provide experience about the
                  industry.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    4 industry integrated certifications:
                  </span>
                  Get verified and industry worthy integrated certifications.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    Fresher focused job portal:
                  </span>{" "}
                  Great Job opportunities for fresh graduates.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3>Student Learn to:</h3>
              <ul style={{ fontSize: "15px", lineHeight: "2em" }}>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    Resume and Cover Letter Writing:
                  </span>{" "}
                  Techniques for creating impactful resumes and cover letters.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Interview Skills:</span>{" "}
                  Strategies for successful job interviews, including practice
                  sessions.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    Job Search Strategies:
                  </span>{" "}
                  Effective methods for finding and applying to jobs.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Career Guidance:</span>
                  Advice on career paths and understanding different industries.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Networking Skills:</span>{" "}
                  How to build and utilize professional networks.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Workplace Etiquette:</span>
                  Learning professional behavior and communication.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    Access to Opportunities:
                  </span>{" "}
                  Information on internships and job openings.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Industry Insights:</span>{" "}
                  Knowledge about current trends and employer expectations.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>
                    Soft Skills Development:
                  </span>{" "}
                  Enhancing teamwork, leadership, and problem-solving skills.
                </li>
                <li>
                  <span style={{ color: "#13adbd" }}>Personal Branding:</span>{" "}
                  Creating a professional online presence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <h2 className="main-title pt-50/-">Job Fees</h2>
        <h3 className="sub-title">UG Courses</h3>
        <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>COURSES</th>
              <th>STREAM</th>
              <th>FEES</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.courseName}</td>
                <td>{course.stream}</td>
                <td>{course.fees.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <h2 className="main-title pt-20">Our Partner Companies</h2>
        <CompanyDashboardArea />

        <div className="button-group d-inline-flex align-items-center mt-30">
          <Link type="submit" className="dash-btn-two tran3s me-3" href="/">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PowerDegree;

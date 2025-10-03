"use client";
import React, { useEffect, useState } from "react";

const Menus = () => {
  const [colleges, setColleges] = useState<any[]>([]);
  return (
    <>
      {/* Home */}
      <li className="nav-item me-3">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Admission
          <i
            className="bi bi-chevron-down ms-1 mt-1"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          ></i>
        </a>

        <ul
          className="dropdown-menu p-3 shadow-lg border-0"
          style={{
            width: "1020px",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              {/* Column 1 - Local Colleges */}
              <div className="col-12 col-md-4 mb-3">
                <h6
                  className="mega-menu-title mb-2"
                  style={{
                    color: "#eed30d",
                    fontWeight: "bold",
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                  }}
                >
                  For College/University
                </h6>
                <ul className="list-unstyled p-0">
                  <li>
                    <a
                      href={`/college-details/GNC`}
                      className="dropdown-item py-1"
                    >
                      Guru Nanak College
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/college-details/RBS`}
                      className="dropdown-item py-1"
                    >
                      Rajagiri Business School
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/college-details/IIMB`}
                      className="dropdown-item py-1"
                    >
                      IIM Bangalore
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/college-details/IIMK`}
                      className="dropdown-item py-1"
                    >
                      IIM Kozhikode
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/college-details/BFIT`}
                      className="dropdown-item py-1"
                    >
                      BFIT Group of Institutions
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/college-details/UPES`}
                      className="dropdown-item py-1"
                    >
                      University of Petroleum And Energy Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/colleges"
                      className="dropdown-item py-1 fw-bold text-primary"
                      style={{ color: "#13ADBD" }}
                    >
                      View All
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 - International University */}
              <div className="col-12 col-md-4 mb-3">
                <h6
                  className="mega-menu-title mb-2"
                  style={{
                    color: "#eed30d",
                    fontWeight: "bold",
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                  }}
                >
                  International University
                </h6>
                <ul className="list-unstyled p-0">
                  <li>
                    <a
                      href="/university-details/1"
                      className="dropdown-item py-1"
                    >
                      OSMU
                    </a>
                  </li>
                  <li>
                    <a
                      href="/university-details/2"
                      className="dropdown-item py-1"
                    >
                      Mari State University
                    </a>
                  </li>
                  <li>
                    <a
                      href="/university-details/3"
                      className="dropdown-item py-1"
                    >
                      Perm State Medical University
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Dubai University */}
              <div className="col-12 col-md-4 mb-3">
                <h6
                  className="mega-menu-title mb-2"
                  style={{
                    color: "#eed30d",
                    fontWeight: "bold",
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                  }}
                >
                  Dubai University
                </h6>
                <ul className="list-unstyled p-0">
                  <li>
                    <a href="/dubai-colleges/1" className="dropdown-item py-1">
                      De Montfort University
                    </a>
                  </li>
                  <li>
                    <a href="/dubai-colleges/2" className="dropdown-item py-1">
                      University of Europe
                    </a>
                  </li>
                  <li>
                    <a href="/dubai-colleges/3" className="dropdown-item py-1">
                      Manipal Academy of Higher Education Dubai
                    </a>
                  </li>
                  <li>
                    <a href="/dubai-colleges/4" className="dropdown-item py-1">
                      Rochester Institute of Technology Dubai
                    </a>
                  </li>
                  <li>
                    <a href="/dubai-colleges/5" className="dropdown-item py-1">
                      University of Debrecen Dubai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Placement
          <i
            className="bi bi-chevron-down ms-1 mt-1"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          ></i>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="https://jobs.careerbuddyclub.com"
              className="dropdown-item"
            >
              See Jobs Live Now
            </a>
          </li>
          <li>
            <a href="/company-v1" className="dropdown-item">
              Partner Companies
            </a>
          </li>
        </ul>
      </li>

      {/* Best Career */}
      <li className="nav-item">
        <a className="nav-link" href="/career-aptitude">
          Best Career For You
        </a>
      </li>

      {/* Services */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
          <i
            className="bi bi-chevron-down ms-1 mt-1"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          ></i>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="/campus" className="dropdown-item">
              For College/University
            </a>
          </li>
          <li>
            <a href="/schools" className="dropdown-item">
              For Schools
            </a>
          </li>
          <li>
            <a href="/corporate" className="dropdown-item">
              For Corporate
            </a>
          </li>
        </ul>
      </li>

      {/* About Us */}
      <li className="nav-item">
        <a className="nav-link" href="/about-us">
          About Us
        </a>
      </li>

      {/* Contact */}
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact Us
        </a>
      </li>
    </>
  );
};

export default Menus;

"use client";
import React from "react";
import { colleges } from "@/data/college-data";

const Menus = () => {
  const collegeList = colleges;

  return (
    <>
      {/* Home */}
      <li className="nav-item me-3">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>

      {/* Admission Dropdown */}
      <li className="nav-item dropdown position-static">
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
          className="dropdown-menu w-auto py-4"
          style={{
            marginLeft: "0px",
            paddingRight: "18px",
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              ul.dropdown-menu {
                margin-left: 300px !important;
              }
            }
          `}</style>

          <div className="container-fluid" style={{width: "1040px"}}>
            <div className="row g-4">
              {/* Column 1 - Indian Colleges */}
              <div className="col-12 col-md-4 mb-3">
                <h6
                  className="mb-3 text-[#eed30d] font-bold"
                  style={{
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                    letterSpacing: "0.3px",
                  }}
                >
                  Indian Colleges / Universities
                </h6>
                <ul className="list-unstyled p-0">
                  {collegeList.slice(0, 8).map((college, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={`/college-details/${college.code}`}
                        className="dropdown-item py-1 px-2 text-gray-700 hover:bg-gray-100 hover:scale-105 rounded-md transition-all duration-200 text-wrap"
                      >
                        {college.name}
                      </a>
                    </li>
                  ))}

                  {/* View All Link */}
                  <li className="mt-3">
                    <a
                      href="/colleges"
                      className="dropdown-item py-1 fw-bold text-[#13ADBD] hover:text-[#0e8792] border-t border-gray-200 pt-2 text-wrap"
                    >
                      View All →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 - International Universities */}
              <div className="col-12 col-md-4 mb-3">
                <h6
                  className="mb-3 text-[#eed30d] font-bold"
                  style={{
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                    letterSpacing: "0.3px",
                  }}
                >
                  International Universities
                </h6>
                <ul className="list-unstyled p-0">
                  {[
                    {
                      href: "/university-details/1",
                      name: "Orenburg State Medical University (OSMU)",
                    },
                    {
                      href: "/university-details/2",
                      name: "Mari State University",
                    },
                    {
                      href: "/university-details/3",
                      name: "Perm State Medical University",
                    },
                  ].map((u, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={u.href}
                        className="dropdown-item py-1 px-2 text-gray-700 hover:bg-gray-100 hover:scale-105 rounded-md transition-all duration-200"
                      >
                        {u.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Dubai Universities */}
              <div className="col-12 col-md-4 mb-3 text-right">
                <h6
                  className="inline-block mb-3 text-[#eed30d] font-bold border-b-2 border-[#eed30d] pb-[5px]"
                  style={{
                    letterSpacing: "0.3px",
                    borderBottom: "2px solid #eed30d",
                    paddingBottom: "5px",
                  }}
                >
                  Dubai Universities
                </h6>

                <ul className="list-unstyled mt-3 inline-block text-right">
                  {[
                    {
                      href: "/dubai-colleges/1",
                      name: "De Montfort University",
                    },
                    {
                      href: "/dubai-colleges/2",
                      name: "University of Europe",
                    },
                    {
                      href: "/dubai-colleges/3",
                      name: "Manipal Academy of Higher Education Dubai",
                    },
                    {
                      href: "/dubai-colleges/4",
                      name: "Rochester Institute of Technology Dubai",
                    },
                    {
                      href: "/dubai-colleges/5",
                      name: "University of Debrecen Dubai",
                    },
                  ].map((d, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={d.href}
                        className="dropdown-item py-1 px-2 text-gray-700 hover:bg-gray-100 hover:scale-105 rounded-md transition-all duration-200 text-right"
                      >
                        {d.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </li>

      {/* Placement */}
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
              className="dropdown-item text-wrap"
            >
              See Jobs Live Now
            </a>
          </li>
          <li>
            <a href="/company-v1" className="dropdown-item text-wrap">
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

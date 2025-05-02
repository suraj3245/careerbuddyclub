"use client";
import React from "react";
import Head from "next/head";
import Wrapper from "@/layouts/wrapper";
// import JobPortalIntro from "@/app/components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "@/app/components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";
import { IcollegeType } from "@/types/college-details";

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

  useEffect(() => {
    // Set the width only when on the client-side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth !== undefined && windowWidth < 768;

  const videoWrapperStyle: React.CSSProperties = isSmallScreen
    ? {
        position: "relative",
        paddingTop: "56.25%", // 16:9 aspect ratio for smaller screens
        paddingLeft: "10px",
      }
    : {
        position: "relative",
        width: "806px", // Fixed width for larger screens
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
const CollegeDetailsPage = ({ params }: { params: { id: string } }) => {
  const [details, setDetails] = useState<any>(null);
  useEffect(() => {
    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails"
      )
      .then((res) => {
        const colleges = res?.data?.colleges || [];
        const matchedCollege = colleges.find(
          (college: any) => college.college_short_name == params.id
        );
        setDetails(matchedCollege);
        console.log("params.id:", matchedCollege);
      })
      .catch((error) => {
        console.error("Error fetching college data:", error);
      });
  }, [params.id]);
  return (
    <Wrapper>
      {details ? (
        <div className="main-page-wrapper">
          <CompanyBreadcrumbjob
            title={details ? details.college_full_name : ""}
            subtitle={details ? details.address : ""}
          />
          <div className="container">
            <div className="p0 me-lg-auto ms-3 ms-lg-5 order-lg-1"></div>
            <div className="container">
              <div className="row">
                <div className="row">
                  <div
                    className="w-100 mt-3 mb-3 d-none d-sm-block"
                    style={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      padding: "0.5rem 1rem",
                      borderBottom: "2px solidrgb(88, 214, 240)",
                      borderRadius: "10px",
                    }}
                  >
                    <ul
                      className="nav"
                      style={{
                        flexWrap: "wrap",
                        display: "flex",
                        gap: "1rem",
                        marginBottom: 0,
                      }}
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#overview"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#courses"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Courses & Fees
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#placement"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Placement
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#awards"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Awards
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#ranking"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Ranking
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-black fw-semibold"
                          href="#alumni"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Alumni Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-8">
                    <h3 id="overview">
                      <b>Overview</b>
                    </h3>
                    <p>{details.about}</p>
                    <div className="col-lg-7 pb-80">
                      <VideoCard videoId={details.video_id} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="job-company-info">
                      <Image
                        src={`https://test.careerbuddyclub.com:8080/storage/${details.logo}`}
                        alt={`${details?.college_short_name} logo`}
                        width={340}
                        height={170}
                        className="m-auto"
                      />
                      <div className="text-md text-dark text-center mt-15 mb-20 lg-mb-10">
                        {details.college_full_name}
                      </div>
                      <div className="text-center">
                        <a
                          href={details.website}
                          className="website-btn-two tran3s cursor-pointer"
                          target="_blank"
                        >
                          Visit our website
                        </a>
                      </div>
                      <div className="border-top mt-35 lg-mt-20 pt-25">
                        <ul className="job-meta-data row style-none" style={{'overflowX': 'scroll', 'scrollbarWidth': 'none'}}>
                          <li className="col-12">
                            <span>Location: </span>
                            <div>{details.address} </div>
                          </li>

                          <li className="col-md-6">
                            <span>Email: </span>
                            <div>
                              <a href={details.email}>{details.email}</a>
                            </div>
                          </li>
                          <li className="col-12">
                            <span>For admission related enquiry: </span>
                            <div>+91{details.phone}</div>
                          </li>
                          <li className="col-12">
                            <span>Social: </span>
                            <div>
                              <a
                                href={details.facebook}
                                className="me-3"
                                target="_blank"
                              >
                                <i className="bi bi-facebook"></i>
                              </a>
                              <a
                                href={details.instagram}
                                className="me-3"
                                target="_blank"
                              >
                                <i className="bi bi-instagram"></i>
                              </a>
                              <a
                                href={details.twitter}
                                className="me-3"
                                target="_blank"
                              >
                                <i className="bi bi-twitter"></i>
                              </a>
                              <a href={details.linkedin} target="_blank">
                                <i className="bi bi-linkedin"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    {/* Responsive scroll wrapper */}
                    <div style={{ overflowX: "auto" }}>
                      <table
                        className="table table-bordered"
                        style={{ minWidth: "600px" }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">Institute Name</th>
                            <th scope="col">
                             {details.college_full_name}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Short Name</td>
                            <td>{details.college_short_name}</td>
                          </tr>
                          <tr>
                            <td>Institute Type - Public/Private/Govt</td>
                            <td>{details.type}</td>
                          </tr>
                          <tr>
                            <td>State</td>
                            <td>{details.state}</td>
                          </tr>
                          <tr>
                            <td>City</td>
                            <td>{details.city}</td>
                          </tr>
                          <tr>
                            <td>Location/Address</td>
                            <td>{details.address}</td>
                          </tr>
                          <tr>
                            <td>Phone Number</td>
                            <td>{details.phone}</td>
                          </tr>
                          <tr>
                            <td>Website</td>
                            <td>
                              <a
                                href={details.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {details.website}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Email Address</td>
                            <td>{details.email}</td>
                          </tr>
                          <tr>
                            <td>University Affiliation</td>
                            <td>{details.recognised_by}</td>
                          </tr>
                          <tr>
                            <td>Approval</td>
                            <td>{details.approved_by}</td>
                          </tr>
                          <tr>
                            <td>Area</td>
                            <td>Education</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <h3 id="courses">
                      <b>Courses and Fees</b>
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <p>{details.courses_text}</p>
                  </div>
                  <div className="col-lg-12" style={{overflowX: "auto"}}>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Courses</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Annual Fees (Rs.)</th>
                            <th scope="col">Selection Criteria</th>
                            <th scope="col">Eligibility Criteria</th>
                          </tr>
                        </thead>
                        <tbody>
                          {details.courses.map((course: any) => (
                            <tr key={course.name}>
                              <td>{course.name}</td>
                              <td>{course.duration}</td>
                              <td>{course.pivot.fee}</td>
                              <td>{course.pivot.selection_criteria}</td>
                              <td>{course.pivot.eligibility_criteria}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <h3 id="placement">
                      <b>Placements</b>
                    </h3>
                    <p>{details.placement_text}</p>
                  </div>
                  <div className="col-lg-12" style={{'overflowX': 'auto'}}>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Placement Information</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details.placement_infos.map((p: any) => (
                          <tr key={p.label}>
                            <td>{p.label}</td>
                            <td>{p.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12"  style={{'overflowX': 'auto'}}>
                    <h3>
                      <b>About Campus</b>
                    </h3>
                    <p>{details.campus_text}</p>
                  </div>
                  <div className="col-lg-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Campus</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details.campus_infos.map((c: any) => (
                          <tr key={c.label}>
                            <td>{c.label}</td>
                            <td>{c.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <h3 id="awards">
                      <b>Awards</b>
                    </h3>
                    <p>{details.awards_text}</p>
                  </div>
                  <div className="col-lg-12">
                    {details.awards.map((a: any) => (
                      <ul className="table-body-cell">
                        <li key={a.id}> {a.award}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <h3 id="ranking">
                      <b>Ranking</b>
                    </h3>
                    <p>{details.ranking_text}</p>
                  </div>
                  <div className="col-lg-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Ranking</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details.rankings.map((c: any) => (
                          <tr key={c.label}>
                            <td>{c.label}</td>
                            <td>{c.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="pt-50" id="alumni">
                        Alumni Reviews
                      </h3>
                    </div>
                    <div className="col-lg-12">
                      <Slider
                        {...slider_setting}
                        className="company-review-slider"
                      >
                        {details.reviews.map((item: any) => (
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
                              <blockquote>{item.description}</blockquote>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <div className="name fw-500 text-dark">
                                    {item.user_name}
                                  </div>
                                  <span className="opacity-50">
                                    {item.user_location}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterOne />
        </div>
      ) : (
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <iframe
            src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
            style={{ width: "300px", height: "300px" }} // Adjust size as needed
          ></iframe>
        </div>
      )}
    </Wrapper>
  );
};

export default CollegeDetailsPage;

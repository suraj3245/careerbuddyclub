import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import ApplyForm from "../../forms/apply-now";
import ApplyForm1 from "../../forms/apply-now1";

const ApplyModal = () => {
  const [loginType, setLoginType] = useState<"student" | "school">("student");
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="ApplyModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <div className="container">
              <div className="">
                <div>
                <h3 className="text-center"><b>
                          Take Control Of Your Career!
                          </b></h3>
                  <div
                    className="nav nav-tabs mt-3"
                    id="nav-tab"
                    role="tablist"
                    style={{ border: "none" }}
                  >
                   
                    <button
                      className={`nav-link flex-grow-1 text-center ${
                        loginType === "student" ? "active" : ""
                      }`}
                      id="nav-student-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-student"
                      type="button"
                      role="tab"
                      aria-controls="nav-student"
                      aria-selected={loginType === "student"}
                      onClick={() => setLoginType("student")}
                      style={{
                        backgroundColor:
                          loginType === "student" ? "rgb(20, 173, 189)" : "",
                        color:
                          loginType === "student" ? "rgb(255, 255, 255)" : "",
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        border: "none",
                        padding: "20px 18px",
                        cursor: "pointer",
                      }}
                    >
                      Student
                    </button>
                    <button
                      className={`nav-link flex-grow-1 text-center ${
                        loginType === "school" ? "active" : ""
                      }`}
                      id="nav-school-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-school"
                      type="button"
                      role="tab"
                      aria-controls="nav-school"
                      aria-selected={loginType === "school"}
                      onClick={() => setLoginType("school")}
                      style={{
                        backgroundColor:
                          loginType === "school" ? "rgb(20, 173, 189)" : "",
                        color:
                          loginType === "school" ? "rgb(255, 255, 255)" : "",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        border: "none",
                        padding: "20px 18px",
                        cursor: "pointer",
                      }}
                    >
                      School
                    </button>
                  </div>
                  <div className="tab-content mt-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-student"
                      role="tabpanel"
                      aria-labelledby="nav-student-tab"
                      tabIndex={0}
                    >
                       
                        <div className="container">
                          <div className="row align-items-start">
                            <div
                              className="col-lg-6 mt-2 d-none d-sm-block"
                              style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
                                backgroundColor: "rgb(247, 247, 247)",
                              }}
                            >
                              <h4 className="mt-4">
                                <b>Why Register With Us?</b>
                              </h4>
                              <ul>
                                <li>
                                  Get admission in 50+ Shortlisted Colleges.
                                </li>
                                <li>
                                  Take admission with CBC 100% Job Guarantee to
                                  land a job after your degree.
                                </li>
                                <li>
                                  Exclusive Job portal for CBC Students from
                                  100+ Corporates with Average 6+ LPA package.
                                </li>
                                <li>
                                  300+ Buddies to Mentor, Upskill and Train you
                                  to become Successful.
                                </li>
                              </ul>
                            </div>
                            <div
                              style={{
                                flex: 1,
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              <div className="form-wrapper m-auto">
                                <ApplyForm />
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-school"
                      role="tabpanel"
                      aria-labelledby="nav-school-tab"
                      tabIndex={0}
                    >
                        <div className="container">
                          <div className="row align-items-start">
                            <div
                              className="col-lg-6 mt-2 d-none d-sm-block"
                              style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
                                backgroundColor: "rgb(247, 247, 247)",
                              }}
                            >
                              <h4 className="mt-4">
                                <b>Why Register With Us?</b>
                              </h4>
                              <ul>
                                <li>
                                  Get admission in 50+ Shortlisted Colleges.
                                </li>
                                <li>
                                  Take admission with CBC 100% Job Guarantee to
                                  land a job after your degree.
                                </li>
                                <li>
                                  Exclusive Job portal for CBC Students from
                                  100+ Corporates with Average 6+ LPA package.
                                </li>
                                <li>
                                  300+ Buddies to Mentor, Upskill and Train you
                                  to become Successful.
                                </li>
                              </ul>
                            </div>
                               <div
                              style={{
                                flex: 1,
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              <div className="form-wrapper m-auto">
                                <ApplyForm1/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;

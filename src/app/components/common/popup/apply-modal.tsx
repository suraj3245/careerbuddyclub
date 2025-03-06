import React, { useState, useEffect } from "react";
import ApplyForm from "../../forms/apply-now";
import ApplyForm1 from "../../forms/apply-now1";
const ApplyModal = () => {
  // State to track the window width
  const [loginType, setLoginType] = useState<"student" | "school">("student");
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
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
          <div> <h3 className="text-center mt-3">
                          Take Control Of Your Career!
                          </h3>
                  <div className="tab-content" id="nav-tabContent">
                        <div className="container">
                          <div className="row p-3">
                            <div
                              className="col-lg-6 mt-2 d-sm-block"
                              style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
                                backgroundColor: "rgb(247, 247, 247)",
                              }}
                            >
                              <h4 className="">
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
                              <div className=" col-lg-6 form-wrapper m-auto mt-2">
                                <ApplyForm />
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
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ApplyModal;

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
          <div> <h3 className="text-center"><b>
                          Take Control Of Your Career!
                          </b></h3>
                  <div
                    className="cont d-flex mt-3"
                    id="nav-tab"
                    role="tablist"
                    style={{ border: "none", backgroundColor: "rgb(240, 240, 240)",  borderRadius: '50px'
                    }}
                  >
                  </div>
                  
                  <div className="tab-content mt-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-student"
                      role="tabpanel"
                      aria-labelledby="nav-student-tab"
                    >
                       
                        <div className="container">
                          <div className="row align-items-start" style={{marginLeft: '5px'}}>
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
                                marginBottom: '-24px'
                              }}
                            >
                              <div className="form-wrapper m-auto mt-2">
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
                        {/* <div className="container">
                          <div className="row align-items-start" style={{marginLeft: '5px'}}>
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
                              <div className="form-wrapper m-auto mt-2">
                                <ApplyForm1/>
                              </div>
                            </div>
                          </div>
                  </div> */}
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
};

export default ApplyModal;

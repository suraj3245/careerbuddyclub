import React, { useState, useEffect } from "react";
import ApplyForm1 from "../../forms/apply-now1";
const ApplyModalSchool = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <div
      className="modal fade"
      id="ApplyModalSchool"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="text-center p-2">
              <h2 style={{ color: "rgb(20, 173, 189)" }}>
                Register Your School!
              </h2>
            </div>
            <div className="form-wrapper m-auto">
              {isSuccess ? (
                // Show success message after submission
                <div className="text-center">
                  <h3>School registered successfully!</h3>
                  <p>Your request will be processed within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{
                      backgroundColor: "#14ADBD",
                      color: "#ffffff",
                      border: "none",
                      padding: "7px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
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
                                <ApplyForm1/>
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
                }}
              ></div>
                    OK
                  </button>
                </div>
              ) : (
                // Show form before submission
                <ApplyForm1 onSuccess={handleSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModalSchool;

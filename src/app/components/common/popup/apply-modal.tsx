import React, { useState, useEffect } from "react";
import ApplyForm from "../../forms/apply-now";

const ApplyModal = () => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0; // Return a default width if window is not defined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="text-center">
              <h3>Secure Your Career Now !</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {windowWidth > 768 && (
                <div
                  style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}
                >
                  {/* Why Register With Us section */}
                  <div>
                    <div
                      style={{
                        backgroundColor: "#f7f7f7",
                        padding: "20px",
                        borderRadius: "5px",
                        margin: "20px 0",
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        style={{
                          marginBottom: "15px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Why Register With Us?
                      </div>
                      <ul
                        style={{ listStyleType: "none", padding: 0, margin: 0 }}
                      >
                        <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                          * With totally online Admission Process
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                          * Upto 50% discount on application forms
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                          * Upload your admission documents and get paytm
                          rewards
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                          * You won't get unwanted calls from third parties
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}>
                <div className="form-wrapper m-auto">
                  <ApplyForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;

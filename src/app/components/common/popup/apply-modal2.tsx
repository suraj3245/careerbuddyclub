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
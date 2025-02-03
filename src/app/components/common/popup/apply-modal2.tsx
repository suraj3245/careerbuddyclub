import React, { useState, useEffect } from "react";
import ApplyForm1 from "../../forms/apply-now1";
const ApplyModalSchool = () => {
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
              <ApplyForm1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModalSchool;

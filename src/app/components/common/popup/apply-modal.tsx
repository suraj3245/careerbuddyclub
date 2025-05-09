import React, { useState, useEffect } from "react";
import ApplyForm from "../../forms/apply-now";
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
        <div className="row">
          <div
            className="col-lg-6 mt-2 d-sm-block d-none"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
              backgroundColor: "rgb(247, 247, 247)",
            }}
          >
            <h4 className="">
              <b>Why Register With Us?</b>
            </h4>
            <ul>
              <li>Get admission in 50+ Shortlisted Colleges.</li>
              <li>
                Take admission with CBC 100% Job Guarantee to land a job after
                your degree.
              </li>
              <li>
                Exclusive Job portal for CBC Students from 100+ Corporates with
                Average 6+ LPA package.
              </li>
              <li>
                300+ Buddies to Mentor, Upskill and Train you to become
                Successful.
              </li>
            </ul>
          </div>
          <div className=" col-lg-6 form-wrapper m-auto mt-2">
            <ApplyForm />
          </div>
        </div>
  );
};

export default ApplyModal;

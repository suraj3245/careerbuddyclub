"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneModal from "../common/popup/phone-modal";
import PhoneForm from "./phone-form";
import SchoolPhoneForm from "./schoolphoneform";
const LoginForm = () => {
const [loginType, setLoginType] = useState<"student" | "school">("student");

  return (
    <div className="row">
      <div className="col-12">
        <div className="tab-content mt-3">
          <div
            className={`tab-pane fade ${loginType === "student" ? "show active" : ""}`}
            id="nav-student"
            role="tabpanel"
            aria-labelledby="nav-student-tab"
            tabIndex={0}
          >
            {loginType === "student" && (
              <div className="form-wrapper m-auto mt-2">
               <PhoneForm/>
              </div>
            )}
          </div>
          {/* <div
            className={`tab-pane fade ${loginType === "school" ? "show active" : ""}`}
            id="nav-school"
            role="tabpanel"
            aria-labelledby="nav-school-tab"
            tabIndex={0}
          >
            {loginType === "school" && (
              <div className="form-wrapper m-auto mt-2">
                <SchoolPhoneForm />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

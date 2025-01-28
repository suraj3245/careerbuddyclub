"use client";
import React, { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SchoolFormModal from "../common/popup/schoolphone-modal";

// form data type
type IFormData = {
  School_mobile: string;
  verificationCode: string;
};

const   SchoolPhoneForm = () => {
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(30);
  const [showResend, setShowResend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IFormData>({});

  const requestOTP = (data: {
    country_code: string;
    School_mobile: string;
  }) => {
    setIsVerificationSent(true);
    axios
      .post(
       "https://test.careerbuddyclub.com:8080/api/students/loginwithphonewpotpschool",
        data
      )
      .then((response) => {
        toast.info("Otp sent 🚀", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error("Error sending OTP !😵‍💫", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isVerificationSent && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((currentCountdown) => currentCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowResend(true);
    }
    return () => clearInterval(interval);
  }, [isVerificationSent, countdown]);
  const onSubmit = (data: IFormData) => {
    // Destructure the required fields from data
    const country_code = "91";
    const { School_mobile, verificationCode: otp } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      url:  "https://test.careerbuddyclub.com:8080/api/students/loginwithphoneschool", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { School_mobile, otp, country_code }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {        
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("schoolName", response.data.details.School_name);
        localStorage.setItem("School_id", response.data.school.School_id);
        localStorage.setItem("School_email", response.data.details.School_email);
        toast.success("Login successful 🚀", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          window.location.href = "/dashboard/school-dashboard/dashboard";
        }, 1000);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Unsucessful Login 😵‍💫", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <div className="input-group-meta position-relative mb-25 mt-30">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="tel"
              placeholder="Mobile Number school"
              {...register("School_mobile", {
                required: `Phone Number is required!`,
              })}
              name="School_mobile"
              style={{ flex: "1", marginRight: "10px" }}
            />
            <button
              type="button"
              onClick={() => {
                if (!isVerificationSent || showResend) {
                  const formData = getValues();
                  requestOTP({
                    country_code: "91",
                    School_mobile: formData.School_mobile,
                  });
                }
              }}
              disabled={isVerificationSent && !showResend}
              style={{
                backgroundColor: "#14ADBD",
                color: "#ffffff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {!isVerificationSent
                ? "Whatsapp OTP"
                : showResend
                ? "Resend"
                : `Wait for ${countdown} sec`}
            </button>
          </div>
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.School_mobile?.message!} />
          </div>
        </div>
      </div>

      {isVerificationSent && (
        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="text"
              placeholder="Whatsapp OTP"
              {...register("verificationCode", {
                required: `Verification Code is required!`,
              })}
              name="verificationCode"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.verificationCode?.message!} />
            </div>
          </div>
        </div>
      )}

      <div className="col-12">
        <div className="agreement-checkbox d-flex justify-content-between align-items-center pb-30">
          <a
            href="#"
            className="fw-500"
            data-bs-toggle="modal"
            data-bs-target="#SchoolPhoneFormModal"
          >
            Login using Email!
          </a>
        </div>
      </div>

      <div className="col-12">
        <div className="agreement-checkbox d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="fw-500"
            data-bs-toggle="modal"
            data-bs-target="#ApplyModalSchool"
          >
            Not a User? Apply
          </a>
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn-eleven fw-500 tran3s d-block mt-20 "
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SchoolPhoneForm;

"use client";
import React, { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// form data type
type IFormData = {
  mobile: string;
  verificationCode: string;
};

const PhoneForm = () => {
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

  const requestOTP = (data: { country_code: string; mobile: string }) => {
    setIsVerificationSent(true);
    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/loginwithphonewpotpsend",
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
    const { mobile, verificationCode: otp } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/loginwithphone", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { mobile, otp, country_code }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("School_email", response.data.School_email);
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
          window.location.href =
            "/dashboard/candidate-dashboard/career-aptitude";
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
      <div className="row">
        <div className="col-lg-12 col-12 gap-2">
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile Number"
            {...register("mobile", {
              required: `Phone Number is required!`,
            })}
            name="mobile"
            style={{ flex: "1", marginRight: "10px" }}
          />&nbsp;
          <button
            type="button"
            className="col-lg-6 col-8"
            onClick={() => {
              if (!isVerificationSent || showResend) {
                const formData = getValues();
                requestOTP({
                  country_code: "91",
                  mobile: formData.mobile,
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
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.mobile?.message!} />
          </div>
        </div>

        {isVerificationSent && (
          <div className="col-lg-12 col-12 mt-3">
            <input
              type="text"
              className="form-control"
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
        )}
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

export default PhoneForm;

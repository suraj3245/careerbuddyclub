"use client";
import React, { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// form data type
type IFormData = {
  mobile: number;
  verificationCode: string;
};

const PhoneForm = () => {
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(60);
  const [showResend, setShowResend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IFormData>({});

  const requestOTP = (data: { country_code: string; mobile: number }) => {
    axios
      .post("http://54.224.161.134:8080/api/students/getwhatsappotp", data)
      .then((response) => {
        console.log(response.data);
        // Notify user that OTP is sent

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
        setIsVerificationSent(true); // To show OTP input field
      })
      .catch((error) => {
        toast.error("Error sending OTP or Number is already registered 😵‍💫", {
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
    const { mobile, verificationCode: otp } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      // url: '${process.env.REACT_APP_API_URL}students/register', // Replace with your API's URL
      url: "http://54.224.161.134:8080/api/students/loginNumber", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { mobile, otp }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        localStorage.setItem("token", response.data.access_token);

        console.log("Registration successful", response.data);
        toast.success("Your Account is created 🚀", {
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
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Unsucessful Registration Already a User 😵‍💫", {
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="col-12">
        <div className="input-group-meta position-relative mb-25 mt-30">
          <label style={{ color: "black" }}>Phone Number</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="tel"
              placeholder="+91"
              {...register("mobile", {
                required: `Phone Number is required!`,
              })}
              name="mobile"
              style={{ flex: "1", marginRight: "10px" }}
            />
            <button
              type="button"
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
                ? "Send OTP"
                : showResend
                ? "Resend"
                : `Wait for ${countdown} sec`}
            </button>
          </div>
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.mobile?.message!} />
          </div>
        </div>
      </div>

      {isVerificationSent && (
        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <label style={{ color: "black" }}>Verification Code*</label>
            <input
              type="text"
              placeholder="Enter the code sent to your mobile"
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
            data-bs-target="#loginModal"
          >
            Login using Email !
          </a>
        </div>
      </div>

      <div className="col-12">
        <div className="agreement-checkbox d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="fw-500"
            data-bs-toggle="modal"
            data-bs-target="#ApplyModal"
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

export default PhoneForm;

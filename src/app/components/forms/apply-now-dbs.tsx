"use client";

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";



type UTMParams = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_id: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

// form data type
type IFormData = {
  name: string;
  email: string;
  mobile: number;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_id?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};

// schema
const ApplyFormDbs = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(30);
  const [showResend, setShowResend] = useState(false);
  
  const router = useRouter();
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_id: null,
    utm_term: null,
    utm_content: null,
  });
  
  useEffect(() => {
    // Parse UTM parameters from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const newUtmParams: UTMParams = {
      utm_source: searchParams.get("utm_source"),
      utm_medium: searchParams.get("utm_medium"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_id: searchParams.get("utm_id"),
      utm_term: searchParams.get("utm_term"),
      utm_content: searchParams.get("utm_content"),
    };
    setUtmParams(newUtmParams);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IFormData>({
    defaultValues: {
      ...utmParams,
    },
  });

  const requestOTP = (data: {
    name: string;
    country_code: string;
    mobile: number;
  }) => {
    setIsVerificationSent(true);
    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/getwhatsappotp",
        data
      )
      .then((response) => {
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
        // To show OTP input field
      })
      .catch((error) => {
        toast.error("Error sending OTP 😵‍💫", {
          position: "top-left",
          autoClose: 3000,
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
    const from = localStorage.getItem("location") || "";
    // const Center = localStorage.getItem("location") || "";
    const {
      name,
      email,
      mobile,
    } = data;
    const payload = {
      name,
      email,
      mobile,
      // Center,
      LeadCampaign: utmParams.utm_campaign,
    };

    console.log("Form Data:", payload);

    // Set up the request options for axios
    const options = {
      method: "POST",
      // url: '${process.env.REACT_APP_API_URL}students/register', // Replace with your API's URL
      url: "https://test.careerbuddyclub.com:8080/api/students/registerdbs", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: payload, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("username", name);
        localStorage.setItem("School_email", email);
        console.log("Registration successful", response.data);
        console.log("Form Data:", payload);
        toast.success("Your Account is created ! please check your email. 🚀", {
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
        // Handle any errors here, e.g., notify the user of the failure
        let errorMessage = "Registration Failed 😵‍💫";

        // Check if the error response contains a specific message for mobile or email
        if (error.response && error.response.data) {
          if (error.response.data.mobile && error.response.data.email) {
            errorMessage = "Email and mobile number is already taken";
          } else if (error.response.data.email) {
            errorMessage = error.response.data.email[0];
          } else if (error.response.data.mobile) {
            errorMessage = error.response.data.mobile[0];
          }
        }

        toast.error(errorMessage, {
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
        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="text"
              placeholder="Enter Student Name"
              {...register("name", { required: `Name is required!` })}
              name="name"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: `Email is required!` })}
              name="email"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("mobile", {
                  required: `Phone Number is required!`,
                })}
                name="mobile"
                style={{
                  flex: "1",
                  marginRight: "10px",
                  backgroundColor: "white",
                  padding: "8px 12px",
                  fontSize: "14px",
                  height: "40px",
                }}
              />
             
            </div>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.mobile?.message!} />
            </div>
          </div>
        </div>

        <div
          className="agreement-checkbox d-flex justify-content-between align-items-center"
          style={{ justifyContent: "center" }}
        >
          <a
            href="#"
            className="fw-500"
            data-bs-toggle="modal"
            data-bs-target="#loginModalstudent"
          >
            Already a User? login
          </a>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn-eleven fw-500 tran3s d-block mt-10"
          >
            Apply Now!
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyFormDbs;

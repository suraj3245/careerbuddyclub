"use client";

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_60.svg";
interface IOption {
  value: string;
  label: string;
}

// form data type
type IFormData = {
  name: string;
  email: string;
  mobile: number;
  verificationCode: string;
  password: string;
  level: string;
  stream: string;
};

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.number().required().label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  verificationCode: Yup.string().required().label("Verification Code"),
});

const ApplyForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [levelOptions, setLevelOptions] = useState<IOption[]>([]);
  const [streamOptions, setStreamOptions] = useState<IOption[]>([]);
  const router = useRouter();

  const fetchLevelOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getalllevels",
        headers: {
          Accept: "*/*",
        },
      });
      const streamData = response.data.map((level: { title: any }) => ({
        value: level.title,
        label: level.title,
      }));
      setLevelOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  const fetchStreamOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getallstreams",
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
      });
      const streamData = response.data.map((stream: { title: any }) => ({
        value: stream.title,
        label: stream.title,
      }));

      setStreamOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  useEffect(() => {
    fetchStreamOptions(); // Fetch stream options when the component mounts
  }, []);
  useEffect(() => {
    fetchLevelOptions();
    // Fetch stream options when the component mounts
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IFormData>({});

  const requestOTP = (data: {
    name: string;
    country_code: string;
    mobile: number;
  }) => {
    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/getwhatsappotp",
        data
      )
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
    const {
      name,
      email,
      mobile,
      verificationCode: otp,
      password,
      level,
      stream,
    } = data;

    console.log("Form Data:", data);

    // Set up the request options for axios
    const options = {
      method: "POST",
      // url: '${process.env.REACT_APP_API_URL}students/register', // Replace with your API's URL
      url: "https://test.careerbuddyclub.com:8080/api/students/register", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { name, email, mobile, otp, password, level, stream }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        localStorage.setItem("token", response.data.access_token);

        console.log("Registration successful", response.data);
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
          window.location.href = "/dashboard/candidate-dashboard/profile";
        }, 1000);
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        console.error("Registration error:", error);
        toast.error("Registration Failed 😵‍💫", {
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
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="text"
              placeholder="Name"
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
              placeholder="Email"
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
              <button
                type="button"
                onClick={() => {
                  if (!isVerificationSent || showResend) {
                    const formData = getValues();
                    requestOTP({
                      name: formData.name,
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
                  padding: "7px 8px",
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
              <ErrorMsg msg={errors.mobile?.message!} />
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
                style={{
                  backgroundColor: "white",
                  padding: "8px 12px",
                  fontSize: "14px",
                  height: "40px",
                }}
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.verificationCode?.message!} />
              </div>
            </div>
          </div>
        )}

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <select
              {...register("stream", { required: `Stream is required!` })}
              name="stream"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
                width: "100%",
                border: "1px solid #e3e3e3",
                borderRadius: "4px",
              }}
            >
              <option value="">Stream</option>
              {streamOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.stream?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <select
              {...register("level", { required: `Level is required!` })}
              name="level"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
                width: "100%",
                border: "1px solid #e3e3e3",
                borderRadius: "4px",
              }}
            >
              <option value="">Level</option>
              {levelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.level?.message!} />
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
            data-bs-target="#loginModal"
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

export default ApplyForm;

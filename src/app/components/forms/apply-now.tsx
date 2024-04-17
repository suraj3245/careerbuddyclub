"use client";

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface IOption {
  value: string;
  label: string;
}

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
  verificationCode: string;
  password: string;
  level: string;
  stream: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_id?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
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
  const [countdown, setCountdown] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const [streamOptions, setStreamOptions] = useState<IOption[]>([
    { value: "1", label: "Arts & Humanities" },
    { value: "2", label: "Business & Management" },
    { value: "3", label: "Engineering & Technology" },
    { value: "4", label: "Life Sciences & Medicine" },
    { value: "5", label: "Natural Sciences" },
    { value: "6", label: "Social Sciences & Management" },
    { value: "7", label: "Computer Science & IT" },
    { value: "8", label: "Law" },
    { value: "9", label: "Education & Training" },
    { value: "10", label: "Creative Arts & Design" },
    { value: "11", label: "Applied Sciences & Professions" },
    { value: "12", label: "Agriculture & Forestry" },
    { value: "13", label: "Environmental Studies & Earth Sciences" },
    { value: "14", label: "Hospitality, Leisure & Sports" },
    { value: "15", label: "Journalism & Media" },
    { value: "16", label: "General Studies & Classics" },
    { value: "17", label: "Health & Medicine" },
    { value: "18", label: "Performing Arts" },
    { value: "19", label: "Physical Sciences & Mathematics" },
    { value: "20", label: "Psychology & Counseling" },
    { value: "21", label: "Fashion & Beauty" },
    { value: "22", label: "Veterinary Medicine" },
    { value: "23", label: "Religious Studies & Theology" },
    { value: "24", label: "Philosophy & Ethics" },
    { value: "25", label: "Languages & Literature" },
    { value: "26", label: "Culinary Arts" },
    { value: "27", label: "Anthropology" },
    { value: "28", label: "Archaeology" },
    { value: "29", label: "History" },
    { value: "30", label: "Political Science & International Relations" },
    { value: "31", label: "Sociology" },
    { value: "32", label: "Economics" },
    { value: "33", label: "Urban Planning & Architecture" },
    { value: "34", label: "Music" },
    { value: "35", label: "Film, Television & Theater" },
    { value: "36", label: "Graphic Design & Visual Arts" },
  ]);
  const router = useRouter();
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_id: null,
    utm_term: null,
    utm_content: null,
  });
  const [levelOptions, setLevelOptions] = useState<IOption[]>([
    { value: "1", label: "Not Known" },
    { value: "9", label: "Undergraduate (UG)" },
    { value: "10", label: "Postgraduate (PG)" },
    { value: "8", label: "Diploma" },
    { value: "235", label: "Doctorate (PhD)" },
  ]);

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
      verificationCode: otp,
      password,
      level,
      stream,
    } = data;
    const payload = {
      name,
      email,
      mobile,
      otp,
      password,
      level,
      stream,
      from,
      // Center,
      LeadCampaign: utmParams.utm_campaign,
    };

    console.log("Form Data:", payload);

    // Set up the request options for axios
    const options = {
      method: "POST",
      // url: '${process.env.REACT_APP_API_URL}students/register', // Replace with your API's URL
      url: "https://test.careerbuddyclub.com:8080/api/students/register", // Replace with your API's URL
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

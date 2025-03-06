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
  from: string;
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
  from: Yup.string().required().label("from"),
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
    { value: "Arts & Humanities", label: "Arts & Humanities" },
    { value: "Business & Management", label: "Business & Management" },
    { value: "Engineering & Technology", label: "Engineering & Technology" },
    { value: "Life Sciences & Medicine", label: "Life Sciences & Medicine" },
    { value: "Natural Sciences", label: "Natural Sciences" },
    { value: "Social Sciences & Management", label: "Social Sciences & Management" },
    { value: "Computer Science & IT", label: "Computer Science & IT" },
    { value: "Law", label: "Law" },
    { value: "Education & Training", label: "Education & Training" },
    { value: "Creative Arts & Design", label: "Creative Arts & Design" },
    { value: "Applied Sciences & Professions", label: "Applied Sciences & Professions" },
    { value: "Agriculture & Forestry", label: "Agriculture & Forestry" },
    { value: "Environmental Studies & Earth Sciences", label: "Environmental Studies & Earth Sciences" },
    { value: "Hospitality, Leisure & Sports", label: "Hospitality, Leisure & Sports" },
    { value: "Journalism & Media", label: "Journalism & Media" },
    { value: "General Studies & Classics", label: "General Studies & Classics" },
    { value: "Health & Medicine", label: "Health & Medicine" },
    { value: "Performing Arts", label: "Performing Arts" },
    { value: "Physical Sciences & Mathematics", label: "Physical Sciences & Mathematics" },
    { value: "Psychology & Counseling", label: "Psychology & Counseling" },
    { value: "Fashion & Beauty", label: "Fashion & Beauty" },
    { value: "Veterinary Medicine", label: "Veterinary Medicine" },
    { value: "Religious Studies & Theology", label: "Religious Studies & Theology" },
    { value: "Philosophy & Ethics", label: "Philosophy & Ethics" },
    { value: "Languages & Literature", label: "Languages & Literature" },
    { value: "Culinary Arts", label: "Culinary Arts" },
    { value: "Anthropology", label: "Anthropology" },
    { value: "Archaeology", label: "Archaeology" },
    { value: "History", label: "History" },
    { value: "Political Science & International Relations", label: "Political Science & International Relations" },
    { value: "Sociology", label: "Sociology" },
    { value: "Economics", label: "Economics" },
    { value: "Urban Planning & Architecture", label: "Urban Planning & Architecture" },
    { value: "Music", label: "Music" },
    { value: "Film, Television & Theater", label: "Film, Television & Theater" },
    { value: "Graphic Design & Visual Arts", label: "Graphic Design & Visual Arts" },
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
    { value: "Not known", label: "Not Known" },
    { value: "UG", label: "Undergraduate (UG)" },
    { value: "PG", label: "Postgraduate (PG)" },
    { value: "Diploma", label: "Diploma" },
    { value: "Doctorate (PhD)", label: "Doctorate (PhD)" },
    { value: "9", label: "IX" },
    { value: "10", label: "X" },
    { value: "11", label: "XI" },
    { value: "12", label: "XII" },
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
    const {
      name,
      from,
      email,
      mobile,
      verificationCode: otp,
      password,
      level,
      stream,
    } = data;
    const payload = {
      name,
      from,
      email,
      mobile,
      otp,
      password,
      level,
      stream,
      LeadCampaign: utmParams.utm_campaign,
    };
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
        localStorage.setItem("School_email", email);
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
            <input
              type="text"
               className="form-control"
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

        <div className="col-12">
            <input
              type="email"
              className="form-control mt-2"
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
        <div className="col-12">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter School/College"
              {...register("from", { required: `schoolName is required!` })}
              name="from"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.from?.message!} />
            </div>
        </div>

        <div className="col-12">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="tel"
                className="form-control mt-2"
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

        {isVerificationSent && (
          <div className="col-12">
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
        )}

        <div className="col-12">
            <select
              {...register("stream", { required: `Stream is required!` })}
              name="stream"
              className="form-select mt-2"
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

        <div className="col-12">
            <select
              {...register("level", { required: `Level is required!` })}
              name="level"
               className="form-select mt-2"
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

        <div
          className="agreement-checkbox d-flex justify-content-between align-items-center mt-2"
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

export default ApplyForm;

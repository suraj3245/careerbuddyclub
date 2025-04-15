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
// form data type4

type IFormData = {
  School_name: string;
  School_email: string;
  School_mobile: number;
  verificationCode: string;
  level: string;
  board: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_id?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};
// schema
const schema = Yup.object().shape({
  School_name: Yup.string().required().label("Name"),
  School_email: Yup.string().required().email().label("Email"),
  board: Yup.string().required().label("board"),
  School_mobile: Yup.number().required().label("Phone Number"),
  verificationCode: Yup.string().required().label("Verification Code"),
});
const ApplyForm1 = ({ onSuccess }: { onSuccess: () => void }) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_id: null,
    utm_term: null,
    utm_content: null,
  });
  const [levelOptions, setLevelOptions] = useState<IOption[]>([
    { value: "11", label: "XI" },
    { value: "High School", label: "High School" },
    { value: "Intermediate", label: "Intermediate" },
  ]);

  const [boardOption, setBoardoption] = useState<IOption[]>([
    { value: "CBSE", label: "CBSE" },
    { value: "ICSE", label: "ICSE" },
    { value: "UK", label: "UK" },
    { value: "UP", label: "UP" },
    { value: "IB", label: "IB" },
    { value: "NIOS", label: "NIOS" },
    { value: "CAIE", label: "CAIE" },
    { value: "CISCE", label: "CISCE" },
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
      .post("https://test.careerbuddyclub.com:8080/api/students/getwhatsappotp", data)
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
    setLoading(true);
    const {
      School_name,
      School_email,
      School_mobile,
      verificationCode: otp,
      level,
      board,
    } = data;
    const payload = {
      School_name,
      School_email,
      School_mobile,
      board,
      otp,
      level,
      LeadCampaign: utmParams.utm_campaign,
    };
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/registerschool",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };
    axios
      .request(options)
      .then((response: any) => {
        onSuccess();
        toast.success(
          "Registration Successfull, Your request will be processed within 24 hours",
          {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      })
      .catch((error) => {
        let errorMessage = "Registration Failed 😵‍💫";
        if (error.response && error.response.data) {
          // Customize error message based on server response
          errorMessage = error.response.data.message || errorMessage;
        }
        toast.error(errorMessage, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }).finally(()=>{
        reset();
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="text"
              placeholder="Enter School Name"
              {...register("School_name", { required: `Name is required!` })}
              name="School_name"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.School_name?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("School_email", { required: `Email is required!` })}
              name="School_email"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.School_email?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("School_mobile", {
                  required: `Phone Number is required!`,
                })}
                name="School_mobile"
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
                      name: formData.School_name,
                      country_code: "91",
                      mobile: formData.School_mobile,
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

        {/* <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <input
              type="text"
              placeholder="Enter your Place"
              {...register("Place", { required: `Place is required!` })}
              name="Place"
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                fontSize: "14px",
                height: "40px",
              }}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.Place?.message!} />
            </div>
          </div>
        </div> */}

        <div className="col-12">
          <div className="input-group-meta position-relative mb-15">
            <select
              {...register("board", { required: `board is required!` })}
              name="board"
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
              <option value="">Board</option>
              {boardOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.board?.message!} />
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
            data-bs-target="#SchoolLoginFormModales"
          >
            Already a User? login
          </a>
        </div>

        <div className="col-12">
         <button
              type="submit"
              className="btn-eleven fw-500 tran3s d-block mt-10"
              disabled={loading}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                ></span>
              )}
              {loading ? "" : "Apply Now!"}
            </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm1;

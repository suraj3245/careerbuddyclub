"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FormData = {
  name: string;
  from: string;
  email: string;
  mobile: string;
  verificationCode?: string;
};
const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";
const ApplyForm = () => {
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [stuName, setStuName] = useState("");
  const [stuEmail, setStuEmail] = useState("");
  const [stuToken, setStuToken] = useState("");
  const { register, handleSubmit, getValues } = useForm<FormData>();
  const sendOTP = async (name: string, mobile: string) => {
    await axios.post(`${API_BASE}/getwhatsappotp`, {
      name,
      mobile,
      country_code: "91",
    });
  };
  const verifyOTP = async () => {
    const { mobile, verificationCode } = getValues();

    const res = await axios.post(`${API_BASE}/verifywhatsappotp`, {
      mobile,
      verificationCode,
    });

    return res.data.success === true;
  };
  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      toast.error("Please verify captcha");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/register`, {
        name: data.name,
        email: data.email,
        mobile: data.mobile.trim(),
        from: data.from,
        recaptcha_token: captchaToken,
      });
      setStuToken(response.data.access_token);
      setStuName(data.name);
      setStuEmail(data.email);
      await sendOTP(data.name, data.mobile);
      toast.success("OTP sent 📲");
      setOtpStep(true);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Registration failed or user already exists❌"
      );
    } finally {
      setLoading(false);
    }
  };
  const submitOTP = async () => {
    setOtpLoading(true);
    try {
      const ok = await verifyOTP();
      if (!ok) {
        toast.error("Invalid OTP ❌");
        return;
      }
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
      localStorage.setItem("token", stuToken);
      localStorage.setItem("username", stuName);
      localStorage.setItem("School_email", stuEmail);
      setTimeout(() => {
        window.location.href = "/dashboard/candidate-dashboard/career-aptitude";
      }, 1000);
    } catch {
      toast.error("OTP verification failed ❌");
    } finally {
      setOtpLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control"
        placeholder="Name"
        {...register("name", { required: true })}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      <input
        className="form-control mt-2"
        placeholder="School / College Name"
        {...register("from")}
      />

      <input
        className="form-control mt-2"
        placeholder="Mobile"
        maxLength={10}
        {...register("mobile", { required: true })}
      />
      {!otpStep && (
        <div className="mt-3 text-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptchaToken(token)}
          />
        </div>
      )}
      {otpStep ? (
        <>
          <input
            className="form-control mt-3"
            placeholder="Enter OTP"
            {...register("verificationCode", { required: true })}
          />

          <button
            type="button"
            className="btn btn-success w-100 mt-2"
            onClick={submitOTP}
            disabled={otpLoading}
          >
            {otpLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </>
      ) : (
        <button
          type="submit"
          className="w-100 mt-3 p-1"
          style={{
            backgroundColor: "rgb(20, 173, 189)",
            color: "white",
            borderRadius: "20px",
          }}
          disabled={loading || !captchaToken}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" />
            </>
          ) : (
            "Apply Now"
          )}
        </button>
      )}
    </form>
  );
};

export default ApplyForm;

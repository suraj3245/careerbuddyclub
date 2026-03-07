"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  from: string;
  email: string;
  mobile: string;
};

const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";

const ApplyForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = async (data: FormData) => {
    try {
      const cleanMobile = data.mobile.trim();

      if (cleanMobile.length !== 10) {
        toast.error("Enter valid 10 digit mobile number");
        return;
      }
      setLoading(true);
      const response = await axios.post(`${API_BASE}/register`, {
        name: data.name,
        email: data.email,
        mobile: data.mobile.trim(),
        from: data.from,
      });
      setToken(response.data.access_token);
      setName(data.name);
      setEmail(data.email);
      const otpResponse = await axios.post(`${API_BASE}/getwhatsappotp`, {
        mobile: cleanMobile,
        country_code: "91",
        name: data.name,
      });
      console.log("OTP API Response:", otpResponse.data);
      setMobile(cleanMobile);
      toast.success("OTP sent to your WhatsApp 📲");
      setOtpStep(true);
    } catch (err: any) {
      console.log("API ERROR:", err.response);

      toast.error(
        err?.response?.data?.message || "Failed to send OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  const verifyOtp = async () => {
    try {
      if (!otp) {
        toast.error("Please enter OTP");
        return;
      }

      setOtpLoading(true);

      const response = await axios.post(`${API_BASE}/verifywhatsappotp`, {
        mobile: mobile,
        verificationCode: otp,
      });

      console.log("VERIFY RESPONSE:", response.data);

      if (!response.data.success) {
        toast.error(response.data.message || "Invalid OTP ❌");
        return;
      }
      toast.success("OTP verified successfully 🚀");
      reset();
      localStorage.setItem("token", token);
      localStorage.setItem("username", name);
      localStorage.setItem("School_email", email);
      setTimeout(() => {
        window.location.href = "/dashboard/candidate-dashboard/career-aptitude";
      }, 1000);
    } catch (err: any) {
      console.log("VERIFY ERROR:", err.response);
      toast.error(err?.response?.data?.message || "Verification failed ❌");
    } finally {
      setOtpLoading(false);
    }
  };
  return (
    <div>
      {/* FORM STEP */}

      {!otpStep && (
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

          <button
            type="submit"
            className="w-100 mt-3 p-2"
            disabled={loading}
            style={{
              backgroundColor: "rgb(20, 173, 189)",
              color: "white",
              borderRadius: "20px",
              border: "none",
            }}
          >
            {loading ? "Sending OTP..." : "Apply Now"}
          </button>
        </form>
      )}

      {/* OTP STEP */}

      {otpStep && (
        <div className="mt-3">
          <h5>Enter OTP</h5>

          <input
            className="form-control mt-2"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            className="btn btn-success mt-3 w-100"
            onClick={verifyOtp}
            disabled={otpLoading}
          >
            {otpLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;

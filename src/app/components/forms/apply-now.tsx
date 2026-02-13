"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  from: string;
  email: string;
  mobile: string;
};
const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";
const ApplyForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE}/register`, {
        name: data.name,
        email: data.email,
        mobile: data.mobile.trim(),
        from: data.from,
      });
      const token = response.data.access_token;
      toast.success("Application submitted successfully 🚀");
      localStorage.setItem("token", token);
      localStorage.setItem("username", data.name);
      localStorage.setItem("School_email", data.email);
      setTimeout(() => {
        window.location.href = "/dashboard/candidate-dashboard/career-aptitude";
      }, 1000);
      reset();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
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

      <button
        type="submit"
        className="w-100 mt-3 p-2"
        style={{
          backgroundColor: "rgb(20, 173, 189)",
          color: "white",
          borderRadius: "20px",
          border: "none",
        }}
        disabled={loading}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm me-2" />
        ) : (
          "Apply Now"
        )}
      </button>
    </form>
  );
};

export default ApplyForm;

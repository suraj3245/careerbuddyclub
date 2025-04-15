"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import icon from "@/assets/images/icon/icon_60.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// form data type
type IFormData = {
  email: string;
  password: string;
};

const resolver: Resolver<IFormData> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email is required.",
          },
          password: {
            type: "required",
            message: "Password is required.",
          },
        }
      : {},
  };
};

const StudentLoginForm2 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loginType, setLoginType] = useState<"student" | "school">("student");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({});
  // on submit
  const onSubmit = (data: IFormData) => {
    setLoading(true);
    const { email, password } = data;
    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/login", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        // res.setHeader(
        //   "Set-Cookie",
        //   cookie.serialize("token", respon.data.access_token, {
        //     httpOnly: true,
        //     path: "/",
        //     // other cookie options as needed
        //   })
        // );
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("School_email", email);

        // console.log("Login successful", response.data.access_token);
        toast.success("Successfully logged in 🎉", {
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
        console.error("Login error:", error);
        toast.error("Invalid Credentials! 😵‍💫", {
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
      .finally(() => {
        reset();
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="row">
        <div className="col-lg-12">
          <div className="input-group-meta position-relative mb-25">
            <label style={{ color: "black" }}>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter E-mail"
              {...register("email", { required: `Email is required!` })}
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-10">
          <div className="input-group-meta">
            <label style={{ color: "black" }}>Password*</label>
            <input
              type={`${showPass ? "text" : "password"}`}
              placeholder="Enter Password"
              className="pass_log_id form-control"
              {...register("password", { required: `Password is required!` })}
              name="password"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.password?.message!} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-2" style={{ marginTop: "36px" }}>
          <span className="" onClick={() => setShowPass(!showPass)}>
            <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
              <Image src={icon} alt="icon" />
            </span>
          </span>
        </div>
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
          {loading ? "" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default StudentLoginForm2;

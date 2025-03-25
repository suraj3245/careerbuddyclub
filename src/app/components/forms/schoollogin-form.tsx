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
  School_email: string;
  School_password: string;
};

const resolver: Resolver<IFormData> = async (values) => {
  return {
    values: values.School_email ? values : {},
    errors: !values.School_email
      ? {
          School_email: {
            type: "required",
            message: "Email is required.",
          },
          School_password: {
            type: "required",
            message: "Password is required.",
          },
        }
      : {},
  };
};

const SchoolLoginForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loginType, setLoginType] = useState<"student" | "school">("student");
  const [showPass, setShowPass] = useState<boolean>(false);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({});
  // on submit
  const onSubmit = (data: IFormData) => {
    const { School_email, School_password } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/loginschool", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { School_email, School_password }, // Send only the required data
    };

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
        localStorage.setItem("School_email", School_email);
        localStorage.setItem("schoolName", response.data.school.School_name);
        localStorage.setItem("School_id", response.data.school.School_id);

        console.log("Login successful", response.data.access_token);
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
          window.location.href = "/dashboard/school-dashboard/dashboard";
        }, 1000);
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        if (error?.response) {
          // Show the message returned from the backend
          toast.error(error?.response?.data?.message, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          // Handle network or other errors
          toast.error("Something went wrong! Please try again.", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label style={{ color: "black" }}>Email*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your E-mail"
                {...register("School_email", {
                  required: `Email is required!`,
                })}
                name="School_email"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.School_email?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-20">
              <label style={{ color: "black" }}>Password*</label>
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Enter Password"
                className="pass_log_id form-control"
                {...register("School_password", {
                  required: `Password is required!`,
                })}
                name="School_password"
              />
              <span
                className="placeholder_icon"
                onClick={() => setShowPass(!showPass)}
              >
                <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                  <Image src={icon} alt="icon" />
                </span>
              </span>
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.School_password?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center mb-20">
              <a
                href="#"
                className="fw-500"
                data-bs-toggle="modal"
                data-bs-target="#SchoolLoginFormModales"
              >
                Login using Phone Number!
              </a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <a
               href="#"
               className="fw-500"
               data-bs-toggle="modal"
               data-bs-target="#ApplyModalSchool"
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
    </>
  );
};

export default SchoolLoginForm;

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
import { useRouter } from "next/navigation";

// form data type
type IFormData = {
  magiclink: string;
};

// schema

const MagicForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
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
    const { magiclink } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/login", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { magiclink }, // Send only the required data
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
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        console.error("Login error:", error);
        toast.error("Invalid MagicLink Contact Provider and Try again! 😵‍💫", {
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label style={{ color: "black" }}>Magic Link*</label>
            <input
              type="magiclink"
              placeholder="Enter Magic Link"
              {...register("magiclink", {
                required: `magic link is required!`,
              })}
              name="magiclink"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.magiclink?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center mb-20">
            <a
              href="#"
              className="fw-500"
              data-bs-toggle="modal"
              data-bs-target="#PhoneModal"
            >
              Login using Phone Number !
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center mb-20">
            <a
              href="#"
              className="fw-500"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login using Email !
            </a>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <a
              href="#"
              className="fw-500"
              data-bs-toggle="modal"
              data-bs-target="#ApplyModal"
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
      </div>
    </form>
  );
};

export default MagicForm;

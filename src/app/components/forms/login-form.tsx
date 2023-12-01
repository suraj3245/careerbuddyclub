"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import icon from "@/assets/images/icon/icon_60.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import cookie from "cookie";
// form data type
type IFormData = {
  email: string;
  password: string;
};

// schema
const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

// resolver
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

const LoginForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [token, setToken] = useState("");
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({ resolver });
  // on submit
  const onSubmit = (data: IFormData) => {
    const { email, password } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://192.168.0.228:8000/api/students/login", // Replace with your API's URL
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
        //   cookie.serialize("token", response.data.access_token, {
        //     httpOnly: true,
        //     path: "/",
        //     // other cookie options as needed
        //   })
        // );
        localStorage.setItem("token", response.data.access_token);
        const token = localStorage.getItem("token");

        // console.log("Login successful", response.data.access_token);
        toast.success("Successfully logged in 🎉", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push("/schools");
        }, 1000);
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        console.error("Login error:", error);
        toast.error("Invalid Credentials! 😵‍💫", {
          position: "top-left",
          autoClose: 5000,
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
            <label>Email*</label>
            <input
              type="email"
              placeholder="james@example.com"
              {...register("email", { required: `Email is required!` })}
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Password*</label>
            <input
              type={`${showPass ? "text" : "password"}`}
              placeholder="Enter Password"
              className="pass_log_id"
              {...register("password", { required: `Password is required!` })}
              name="password"
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
              <ErrorMsg msg={errors.password?.message!} />
            </div>
          </div>
        </div>
        {/* <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
              <a href="#">Forget Password?</a>
            </div>
          </div> */}
        <div className="col-12">
          <button
            type="submit"
            className="btn-eleven fw-500 tran3s d-block mt-20 "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

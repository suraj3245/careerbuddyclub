"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import icon from "@/assets/images/icon/icon_60.svg";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// form data type
type IFormData = {
  name: string;
  email: string;
  mobile: number;
  password: string;
  verificationCode: string;
};

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.number().required().label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  verificationCode: Yup.string().required().label("Verification Code"),
});

// const resolver: Resolver<IFormData> = async (values) => {
//   try {
//     const validatedValues = await schema.validate(values, {
//       abortEarly: false,
//     });
//     return { values: validatedValues, errors: {} };
//   } catch (err) {
//     return {
//       values: {},
//       errors: err.inner.reduce(
//         (allErrors: any, currentError: { path: any }) => {
//           return { ...allErrors, [currentError.path]: currentError };
//         },
//         {}
//       ),
//     };
//   }
// };

const RegisterForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({});

  const sendVerificationCode = (mobile: number) => {
    console.log(`Sending verification code to ${mobile}`);
    setIsVerificationSent(true);
  };

  // const onSubmit = (data: IFormData) => {
  //   if (data) {
  //     alert(data.name);
  //   }
  //   reset();
  // };

  const onSubmit = (data: IFormData) => {
    // Destructure the required fields from data
    const { name, email, password, mobile } = data;

    // Set up the request options for axios
    const options = {
      method: "POST",
      // url: '${process.env.REACT_APP_API_URL}students/register', // Replace with your API's URL
      url: "http://192.168.0.228:8000/api/students/register", // Replace with your API's URL
      headers: {
        "Content-Type": "application/json",
      },
      data: { name, email, password, mobile }, // Send only the required data
    };

    // Make the POST request using axios
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        console.log("Registration successful", response.data);
        toast.success("Your Account is created 🚀", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        console.error("Registration error:", error);
        toast.error("Unsucessful Registration Already a User 😵‍💫", {
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

    reset(); // Reset the form fields after submission attempt
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <label>Name*</label>
            <input
              type="text"
              placeholder="James Brower"
              {...register("name", { required: `Name is required!` })}
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>

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
          <div className="input-group-meta position-relative mb-25">
            <label>Phone Number*</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="tel"
                placeholder="+91-"
                {...register("mobile", {
                  required: `Phone Number is required!`,
                })}
                name="mobile"
                style={{ flex: "1", marginRight: "10px" }}
              />
              <button
                type="button"
                // onClick={() => sendVerificationCode()}
                style={{
                  backgroundColor: "#14ADBD",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send OTP
              </button>
            </div>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.mobile?.message!} />
            </div>
          </div>
        </div>

        {isVerificationSent && (
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Verification Code*</label>
              <input
                type="text"
                placeholder="Enter the code sent to your mobile"
                {...register("verificationCode", {
                  required: `Verification Code is required!`,
                })}
                name="verificationCode"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.verificationCode?.message!} />
              </div>
            </div>
          </div>
        )}

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
                <Image src={icon} alt="pass-icon" />
              </span>
            </span>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.password?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn-eleven fw-500 tran3s d-block mt-20"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import axios from "axios";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string(),
  message: Yup.string().required("Message is required"),
}).required();

// form data type
interface IFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({});

  const onSubmit = (data: IFormData) => {
    console.log(data);
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/contactusformsubmit",
      headers: {
        Accept: "*/*",
        // Update as needed
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        notifySuccess("Thank you for contacting us");
      })
      .catch(function (error) {
        console.error(error);
        notifyError("An error occurred while submitting the form");
      })
      .finally(() => {
        reset(); // Reset the form
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-sm-6">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Name*</label>
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name", { required: `Name is required!` })}
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              placeholder="Email Address*"
              {...register("email", { required: `Email is required!` })}
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Phone Number*</label>
            <input
              type="phone"
              placeholder="Phone Number*"
              {...register("phone", { required: `Phone Number is required!` })}
              name="phone"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.phone?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label htmlFor="">Subject (optional)</label>
            <input
              {...register("subject", { required: false })}
              type="text"
              placeholder="Write about the subject here.."
              name="subject"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea
              placeholder="Your message*"
              {...register("message", { required: `Message is required!` })}
              name="message"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn-eleven fw-500 tran3s d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

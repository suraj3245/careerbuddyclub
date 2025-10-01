"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";

// Form data type
type IFormData = {
  collegeName: string;
  contactPersonName: string;
  email: string;
  phone: string;
  address: string;
  hearAboutUs: string;
  additionalRequests: string;
};

const ContactCollegeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/collegecontactformsubmit",
        data
      )
      .then((response) => {
        console.log(response.data);
        notifySuccess("Your message sent successfully");
        reset(); // reset form
      })
      .catch((error) => {
        console.error("Error response:", error.response);
        notifyError(
          "An error occurred while submitting the form: " + error.message
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">

      {/* College Name */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="collegeName">University / College Name*</label>
        <input
          id="collegeName"
          type="text"
          placeholder="College Name*"
          autoComplete="organization"
          {...register("collegeName", { required: "College name is required" })}
        />
        {errors.collegeName && (
          <ErrorMsg msg={errors.collegeName?.message ?? ""} />
        )}
      </div>

      {/* Contact Person Name */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="contactPersonName">Your Name*</label>
        <input
          id="contactPersonName"
          type="text"
          placeholder="Contact Person Name*"
          autoComplete="name"
          {...register("contactPersonName", { required: "Your name is required" })}
        />
        {errors.contactPersonName && (
          <ErrorMsg msg={errors.contactPersonName?.message ?? ""} />
        )}
      </div>

      {/* Email */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="email">Email Address For Communication*</label>
        <input
          id="email"
          type="email"
          placeholder="Email*"
          autoComplete="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <ErrorMsg msg={errors.email?.message ?? ""} />}
      </div>

      {/* Phone Number */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="phone">Contact Phone Number*</label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone*"
          autoComplete="tel"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <ErrorMsg msg={errors.phone?.message ?? ""} />}
      </div>

      {/* College Address */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="address">University / College Address*</label>
        <input
          id="address"
          type="text"
          placeholder="Address*"
          autoComplete="street-address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <ErrorMsg msg={errors.address?.message ?? ""} />}
      </div>

      {/* How did you hear about us */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="hearAboutUs">How did you hear about us?*</label>
        <select
          id="hearAboutUs"
          className="form-control"
          autoComplete="off"
          {...register("hearAboutUs", { required: "This field is required" })}
        >
          <option value="">Select an option</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
          <option value="email">Email</option>
          <option value="other">Other</option>
        </select>
        {errors.hearAboutUs && (
          <ErrorMsg msg={errors.hearAboutUs?.message ?? ""} />
        )}
      </div>

      {/* Additional Requests */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="additionalRequests">
          Any additional requests or comments
        </label>
        <textarea
          id="additionalRequests"
          placeholder="Your requests or comments"
          autoComplete="off"
          {...register("additionalRequests")}
        />
      </div>

      {/* Submit Button */}
      <div className="col-12">
        <button type="submit" className="btn-eleven fw-500 tran3s d-block">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactCollegeForm;

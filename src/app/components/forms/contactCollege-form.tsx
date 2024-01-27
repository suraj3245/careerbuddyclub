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
  } = useForm<IFormData>({});

  const onSubmit = (data: IFormData) => {
    // Optional: Validate data here

    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/collegecontactformsubmit",
        data
      )
      .then((response) => {
        console.log(response.data);
        notifySuccess("Your message sent successfully");
        reset(); // Resetting form on successful submission
      })
      .catch((error) => {
        console.error("Error response:", error.response); // More detailed error logging
        notifyError(
          "An error occurred while submitting the form: " + error.message
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* School Name */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="collegeName">University / College Name*</label>
        <input
          type="text"
          placeholder="College Name*"
          {...register("collegeName")}
        />
        {/* {errors.schoolName && <ErrorMsg msg={errors.schoolName.message} />} */}
      </div>

      {/* Contact Person Name */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="contactPersonName">Your Name*</label>
        <input
          type="text"
          placeholder="Contact Person Name*"
          {...register("contactPersonName")}
        />
        {/* {errors.contactPersonName && (
          <ErrorMsg msg={errors.contactPersonName.message} />
        )} */}
      </div>

      {/* ... other inputs ... */}

      {/* Email */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="email">Email Address For Communication*</label>
        <input type="email" placeholder="Email*" {...register("email")} />
        {errors.email && <ErrorMsg msg={errors.email?.message!} />}
      </div>

      {/* Phone Number */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="phone">Contact Phone Number*</label>
        <input type="tel" placeholder="Phone*" {...register("phone")} />
        {errors.phone && <ErrorMsg msg={errors.phone?.message!} />}
      </div>

      {/* College Address */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="address">University / College Address*</label>
        <input type="text" placeholder="Address*" {...register("address")} />
        {errors.address && <ErrorMsg msg={errors.address?.message!} />}
      </div>

      {/* How did you hear about us */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="hearAboutUs">How did you hear about us?*</label>
        <select
          name="hearAboutUs"
          // {...register("hearAboutUs", { required: "This field is required" })}
          className="form-control"
        >
          <option value="">Select an option</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
          <option value="email">Email</option>
          <option value="other">Other</option>
        </select>
        {errors.hearAboutUs && <ErrorMsg msg={errors.hearAboutUs?.message!} />}
      </div>

      {/* Additional Contact Information */}

      {/* Additional Requests/Comments */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="additionalRequests">
          Any additional requests or comments
        </label>
        <textarea
          placeholder="Your requests or comments"
          {...register("additionalRequests")}
        />
        {/* No error message since it's not required */}
      </div>
      <div className="col-12">
        <button className="btn-eleven fw-500 tran3s d-block">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactCollegeForm;

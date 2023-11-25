"use client";

import React from "react";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";

// Form data type
type IFormData = {
  schoolName: string;
  contactPersonName: string;
  email: string;
  phone: string;
  address: string;
  hearAboutUs: string;
  additionalContactInfo: string;
  additionalRequests: string;
};

// Schema
const schema = Yup.object().shape({
  schoolName: Yup.string().required().label("School Name"),
  contactPersonName: Yup.string().required().label("Contact Person Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  address: Yup.string().required().label("Address"),
  interest: Yup.string().required().label("interests"),
  hearAboutUs: Yup.string().required().label("How did you hear about us"),
  additionalContactInfo: Yup.string().label("Additional Contact Info"),
  additionalRequests: Yup.string().label("Additional Requests/Comments"),
});

// Resolver
const resolver: Resolver<IFormData> = async (values) => {
  return {
    values: values.schoolName ? values : {},
    errors: !values.schoolName
      ? {
          name: {
            type: "required",
            message: "Name is required.",
          },
          email: {
            type: "required",
            message: "Email is required.",
          },
          message: {
            type: "required",
            message: "Message is required.",
          },
        }
      : {},
  };
};

// Rest of the code...

const ContactSchoolForm = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({ resolver });
  // on submit
  // const onSubmit = (data: IFormData) => {
  //   const templateParams = {
  //     name: data.name,
  //     email: data.email,
  //     subject: data.subject,
  //     message: data.message,
  //   };
  //   if (data) {
  //     emailjs
  //       .send(
  //         'service_gnu2rla',
  //         'template_ilrquco',
  //         templateParams,
  //         'tDbxqotWh8Z0dv0h6'
  //       )
  //       .then(
  //         (response) => {
  //           // console.log("SUCCESS!", response.status, response.text);
  //           notifySuccess('Your message sent successfully');
  //         },
  //         (err) => {
  //           // console.log("FAILED...", err);
  //           notifyError(err?.text);
  //         }
  //       );
  //   }

  //   reset();
  // };

  const onSubmit = (data: IFormData) => {
    // Send the data to the Express.js server
    fetch("http://localhost:5000/addContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // If response from the server is successful
          return response.text();
        } else {
          // If server returns an error response
          throw new Error("Server responded with an error");
        }
      })
      .then((result) => {
        console.log(result);
        notifySuccess("Your message sent successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        notifyError(error?.message);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* School Name */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="schoolName">School Name*</label>
        <input
          type="text"
          placeholder="School Name*"
          {...register("schoolName")}
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

      {/* School Address */}
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="address">School Address*</label>
        <input type="text" placeholder="Address*" {...register("address")} />
        {errors.address && <ErrorMsg msg={errors.address?.message!} />}
      </div>
      <div className="input-group-meta form-group mb-30">
        <label htmlFor="interests">What are you interested in*</label>
        <div
          className="form-control checkboxes-group"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label style={{ fontSize: "0.8rem" }}>
            <input
              type="checkbox"
              name="interests"
              value="Conducting career aptitude"
              // {...register("interests.careerAptitude", {
              //   required: "At least one option must be selected",
              // })}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Conducting Career Aptitude Test
          </label>
          <label style={{ fontSize: "0.8rem" }}>
            <input
              type="checkbox"
              name="interests"
              value="Organizing career town"
              // {...register("interests.careerTown", {
              //   required: "At least one option must be selected",
              // })}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Organizing Career Town
          </label>
          <label style={{ fontSize: "0.8rem" }}>
            <input
              type="checkbox"
              name="interests"
              value="participating in career"
              // {...register("interests.careerCompetition", {
              //   required: "At least one option must be selected",
              // })}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Participating in Career Town competition
          </label>
        </div>
        {/* {errors.interests && (
          <ErrorMsg msg="At least one option must be selected" />
        )} */}
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

export default ContactSchoolForm;

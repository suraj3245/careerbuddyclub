"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
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
  interests: string[]; // This will be a string array
};

const ContactSchoolForm = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({});

  const handleInterestChange = (event: {
    target: { value: any; checked: any };
  }) => {
    const { value, checked } = event.target;
    setSelectedInterests((prevInterests) =>
      checked
        ? [...prevInterests, value]
        : prevInterests.filter((interest) => interest !== value)
    );
  };

  const onSubmit = (data: IFormData) => {
    const postData = {
      ...data,
      interests: selectedInterests.join(", "),
    };

    axios
      .post(
        "https://test.careerbuddyclub.com:8080/api/students/schoolcontactformsubmit",
        postData
      )
      .then((response) => {
        console.log(response.data);
        notifySuccess("Your message sent successfully");
      })
      .catch((error) => {
        notifyError("An error occurred while submitting the form");
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
              value="Conducting career aptitude"
              onChange={handleInterestChange}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Conducting Career Aptitude Test
          </label>
          <label style={{ fontSize: "0.8rem" }}>
            <input
              type="checkbox"
              value="Organizing career town"
              onChange={handleInterestChange}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Organizing Career Town
          </label>
          <label style={{ fontSize: "0.8rem" }}>
            <input
              type="checkbox"
              value="Participating in career competition"
              onChange={handleInterestChange}
              style={{ width: "1rem", height: "1rem", marginRight: "5px" }}
            />
            Participating in Career Town competition
          </label>
        </div>
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

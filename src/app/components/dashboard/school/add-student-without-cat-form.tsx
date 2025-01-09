"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentWithOutCatForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      from: "",
      class: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("School Name is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
        .required("Mobile Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      from: Yup.string().required("Place is required"),
      class: Yup.string().required("Class is required"),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="container mt-5 mb-40">
        <h1
          className="display-4 mt-40 text-center text-decoration-underline heading-1"
          style={{ color: "#14adbd", letterSpacing: "0.0375em" }}
        >
          Add Student Details without CAT Result
        </h1>
        <div
          className="bg-white card border-10 p-4 form-container neumorphism mt-15"
          style={{ width: "100%", border: "1px solid white" }}
        >
          <h4
            className="dash-title-three"
            style={{ color: "#eed30d", letterSpacing: "0.0987em" }}
          >
            Student Details
          </h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="name">
                    Student Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="form-control"
                    placeholder="Enter student's name"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="class">
                    Class <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    name="class"
                    value={formik.values.class}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  >
                    <option disabled value="">
                      Select Class
                    </option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                  {formik.errors.class ? (
                    <div className="text-danger">{formik.errors.class}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <h4
              className="dash-title-three mt-4"
              style={{ color: "#eed30d", letterSpacing: "0.0987em" }}
            >
              Contact Details
            </h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="email">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="mobile">
                    Mobile Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Enter student's mobile number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.mobile ? (
                    <div className="text-danger">{formik.errors.mobile}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="from">
                    Place <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="from"
                    placeholder="Place"
                    value={formik.values.from}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.from ? (
                    <div className="text-danger">{formik.errors.from}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg mt-4 buttn-save"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .buttn-save {
          background-color: #14adbd;
          border-color: #14adbd;
          color: white;
          float: right;
        }
        .custom-btn:hover {
          background-color: #eed30d;
          border-color: #eed30d;
          color: white;
        }

        .neumorphism {
          background: #f0f0f0;
          box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
        }

        .dash-title-three {
          font-size: 16px;
          text-transform: uppercase;
        }

        .heading-1 {
          font-size: 36px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default StudentWithOutCatForm;

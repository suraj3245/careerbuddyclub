"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

type IFormData = {
  name: string;
  mobile: string;
  email: string;
  from: string;
  realistic_score: string;
  social_score: string;
  investigative_score: string;
  artistic_score: string;
  enterprising_score: string;
  conventional_score: string;
  class: string;
};

const StudentWithCatForm: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = localStorage.getItem("token");
      if (fetchedToken) {
        setToken(fetchedToken);
      }
      const School_id = localStorage.getItem("School_id");
      if (School_id) {
        setSchool_id(School_id);
      }
    };

    fetchToken();
  }, []);

  const addStudent = async (token: string, values: IFormData) => {
    if (!token) {
      return;
    }

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/addstudentwithcat",
      headers: {
        Accept: "*/*",

        Authorization: `Bearer ${token}`,
      },
      data: {
        name: values.name,
        mobile: values.mobile,
        email: values.email,
        from: values.from,
        realistic_score: values.realistic_score,
        social_score: values.social_score,
        investigative_score: values.investigative_score,
        artistic_score: values.artistic_score,
        enterprising_score: values.enterprising_score,
        conventional_score: values.conventional_score,
        class: values.class,
        School_id: School_id,
      },
    };

    axios
      .request(options)
      .then((response) => {
        toast.success("Student Added Successfully", {
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
        console.error("Error:", error);
        toast.error("Something went wrong", {
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
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      from: "",
      realistic_score: "",
      social_score: "",
      investigative_score: "",
      artistic_score: "",
      enterprising_score: "",
      conventional_score: "",
      class: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("School Name is required"),
      mobile: Yup.string().matches(
        /^[0-9]{10}$/,
        "Mobile Number must be 10 digits"
      ),
      email: Yup.string().email("Invalid email address"),
      from: Yup.string().required("Place is required"),
      realistic_score: Yup.number().required("Realistic Score is required"),
      social_score: Yup.number().required("Social Score is required"),
      investigative_score: Yup.number().required(
        "Investigative Score is required"
      ),
      artistic_score: Yup.number().required("Artistic Score is required"),
      enterprising_score: Yup.number().required(
        "Enterprising Score is required"
      ),
      conventional_score: Yup.number().required(
        "Conventional Score is required"
      ),
      class: Yup.string().required("Class is required"),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      addStudent(token!, values);
    },
  });

  return (
    <>
      <div className="container mt-5 mb-40">
        <h1
          className="display-4 mt-40 text-center text-decoration-underline heading-1"
          style={{ color: "#14adbd", letterSpacing: "0.0375em" }}
        >
          Add Student Details with CAT Result
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
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

            <h4
              className="dash-title-three"
              style={{ color: "#eed30d", letterSpacing: "0.0987em" }}
            >
              Test Result
            </h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="realistic_score">
                    Realistic Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="realistic_score"
                    placeholder="Enter realistic score"
                    value={formik.values.realistic_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.realistic_score ? (
                    <div className="text-danger">
                      {formik.errors.realistic_score}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="social_score">
                    Social Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="social_score"
                    placeholder="Enter social score"
                    value={formik.values.social_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.social_score ? (
                    <div className="text-danger">
                      {formik.errors.social_score}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="investigative_score">
                    Investigative Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="investigative_score"
                    placeholder="Enter investigative score"
                    value={formik.values.investigative_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.investigative_score ? (
                    <div className="text-danger">
                      {formik.errors.investigative_score}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="artistic_score">
                    Artistic Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="artistic_score"
                    placeholder="Enter artistic score"
                    value={formik.values.artistic_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.artistic_score ? (
                    <div className="text-danger">
                      {formik.errors.artistic_score}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="enterprising_score">
                    Enterprising Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="enterprising_score"
                    placeholder="Enter enterprising score"
                    value={formik.values.enterprising_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.enterprising_score ? (
                    <div className="text-danger">
                      {formik.errors.enterprising_score}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="conventional_score">
                    Conventional Score <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="conventional_score"
                    placeholder="Enter conventional score"
                    value={formik.values.conventional_score}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.conventional_score ? (
                    <div className="text-danger">
                      {formik.errors.conventional_score}
                    </div>
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

export default StudentWithCatForm;

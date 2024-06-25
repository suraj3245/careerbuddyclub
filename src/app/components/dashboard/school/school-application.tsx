import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DashboardHeader from "./dashboard-header";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchoolProfileArea = ({ setIsOpenSidebar }: IProps) => {
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      mobileNumber: "",
      email: "",
      address: "",
      state: "",
      city: "",
      zipCode: "",
      board: "CBSE",
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required("School Name is required"),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
        .required("Mobile Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zip Code is required"),
      board: Yup.string().required("Board is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
      <div className="container mt-5">
        <h3 className="dash-title-three mt-40 text-center" style={{ color: "#14adbd" }}>
          School Application Form
        </h3>
        <div
          className="bg-white card border-20 p-2 form-container neumorphism mt-15"
          style={{ width: "100%", border: "1px solid white" }}
        >
          <h4 className="dash-title-three" style={{ color: "#eed30d" }}>
            School Details
          </h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="schoolName">School Name*</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formik.values.schoolName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    placeholder="Enter Full School Name"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.schoolName && formik.errors.schoolName ? (
                    <div className="text-danger">{formik.errors.schoolName}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="board">Board*</label>
                  <select
                    name="board"
                    value={formik.values.board}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  >
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="UK">UK</option>
                  </select>
                  {formik.touched.board && formik.errors.board ? (
                    <div className="text-danger">{formik.errors.board}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <h4 className="dash-title-three mt-4" style={{ color: "#eed30d" }}>
              Contact Details
            </h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="mobileNumber">Mobile Number*</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                    <div className="text-danger">
                      {formik.errors.mobileNumber}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <h4 className="dash-title-three" style={{ color: "#eed30d" }}>
              Address & Location
            </h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="address">Address*</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="state">State*</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.state && formik.errors.state ? (
                    <div className="text-danger">{formik.errors.state}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div className="text-danger">{formik.errors.city}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="zipCode">Zip Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Enter your zip code"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                   
                    onBlur={formik.handleBlur}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.touched.zipCode && formik.errors.zipCode ? (
                    <div className="text-danger">{formik.errors.zipCode}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary custom-btn mt-4"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .custom-btn {
          background-color: #14adbd;
          border-color: #14adbd;
          color: white;
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
          margin-top: 20px;
        }

        @media only screen and (max-width: 768px) {
          /* Mobile styles */
          .form-container {
            padding: 10px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          /* Tablet styles */
          .form-container {
            padding: 20px;
          }
        }

        @media only screen and (min-width: 1024px) {
          /* Desktop styles */
          .form-container {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default SchoolProfileArea;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DashboardHeader from "./dashboard-header";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchoolApplicationForm: React.FC<IProps> = ({ setIsOpenSidebar }) => {
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
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
      <div className="container mt-5">
        <h1
          className="display-4 mt-40 text-center text-decoration-underline heading-1"
          style={{ color: "#14adbd", letterSpacing: "0.0375em" }}
        >
          School Application Form
        </h1>
        <div
          className="bg-white card border-10 p-4 form-container neumorphism mt-15"
          style={{ width: "100%", border: "1px solid white" }}
        >
          <h4
            className="dash-title-three"
            style={{ color: "#eed30d", letterSpacing: "0.0987em" }}
          >
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
                    className="form-control"
                    placeholder="Enter Full School Name"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.schoolName ? (
                    <div className="text-danger">
                      {formik.errors.schoolName}
                    </div>
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  >
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="UK">UK</option>
                  </select>
                  {formik.errors.board ? (
                    <div className="text-danger">{formik.errors.board}</div>
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
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="mobileNumber">Mobile Number*</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.mobileNumber ? (
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <h4
              className="dash-title-three"
              style={{ color: "#eed30d", letterSpacing: "0.0987em" }}
            >
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.address ? (
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.state ? (
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.city ? (
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
                    className="form-control"
                    style={{ padding: "12px" }}
                  />
                  {formik.errors.zipCode ? (
                    <div className="text-danger">{formik.errors.zipCode}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg mt-4 buttn-save">
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
          float:right;
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

export default SchoolApplicationForm;

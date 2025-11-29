"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StudentWithCatForm: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [School_id, setSchool_id] = useState<string | null>(null);
  const [schoolName, setSchoolName] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    realistic_score: "",
    social_score: "",
    investigative_score: "",
    artistic_score: "",
    enterprising_score: "",
    conventional_score: "",
    class: "",
  });

  useEffect(() => {
    const fetchedToken = localStorage.getItem("token");
    const SchoolId = localStorage.getItem("School_id");
    const SchoolName = localStorage.getItem("schoolName");

    if (fetchedToken) setToken(fetchedToken);
    if (SchoolId) setSchool_id(SchoolId);
    if (SchoolName) setSchoolName(SchoolName);
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Student name is required");
      return false;
    }
    if (!formData.class) {
      toast.error("Please select class");
      return false;
    }
    const requiredScores = [
      "realistic_score",
      "social_score",
      "investigative_score",
      "artistic_score",
      "enterprising_score",
      "conventional_score",
    ];
    for (let key of requiredScores) {
      if (!(formData as any)[key]) {
        toast.error(`${key.replace("_", " ")} is required`);
        return false;
      }
    }
    return true;
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      toast.error("Token is missing. Please log in again.");
      return;
    }

    if (!validateForm()) return;

    const dataToSend = {
      ...formData,
      from: schoolName,
      School_id: School_id,
    };

    try {
      await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/addstudentwithcat",
        dataToSend,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Student Added Successfully", {
        position: "top-left",
        autoClose: 1000,
      });

      setTimeout(() => {
        window.location.href = "/dashboard/school-dashboard/dashboard";
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", { position: "top-left" });
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label>
                    Student Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter student's name"
                    style={{ padding: "12px" }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label>
                    Class <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="form-control"
                    style={{ padding: "12px" }}
                  >
                    <option value="">Select Class</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
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
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter student's email"
                    style={{ padding: "12px" }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter student's mobile number"
                    style={{ padding: "12px" }}
                    maxLength={10}
                  />
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
              {[
                "realistic_score",
                "social_score",
                "investigative_score",
                "artistic_score",
                "enterprising_score",
                "conventional_score",
              ].map((score) => (
                <div className="col-md-6" key={score}>
                  <div className="form-group mb-3">
                    <label>
                      {score.replace("_", " ").replace(/\b\w/g, (c) =>
                        c.toUpperCase()
                      )}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      name={score}
                      value={(formData as any)[score]}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={`Enter ${score.replace("_", " ")}`}
                      style={{ padding: "12px" }}
                    />
                  </div>
                </div>
              ))}
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

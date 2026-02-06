"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import axios from "axios";
import { toast } from "react-toastify";

const Careerjobfest = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      college_name: String(formData.get("college_name")),
      course_name: String(formData.get("course_name")),
    };
    try {
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getcareerFestData",
        payload,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      if (response.data.status) {
        form.reset();
        toast.success("Career Fest Registration Successful!", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <div className="container" style={{ marginTop: "7rem" }}>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div
                className="card border-0 rounded-4"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                }}
              >
                <div className="row g-0">
                  {/* LEFT CONTENT */}
                  <div className="col-md-6">
                    <div
                      className="h-100 p-4 p-lg-5"
                      style={{
                        backgroundColor: "#f2fbfc",
                        borderRight: "1px solid #e1f2f4",
                      }}
                    >
                      <h2 className="fw-bold mb-2">
                        JOB FEST <span style={{ color: "#14adbd" }}>2026</span>
                      </h2>

                      <p className="fw-semibold text-dark mb-2">
                        Connecting Talent To Opportunity
                      </p>

                      <p className="small text-muted mb-3">
                        30+ Companies &nbsp;|&nbsp; One Destination
                        &nbsp;|&nbsp; Infinite Possibilities
                      </p>

                      <p className="fw-semibold mb-4">
                        Dehradun’s Biggest Career Confluence
                      </p>

                      {/* Benefits */}
                      <div className="row mb-4">
                        <div className="col-6">
                          <ul className="list-unstyled small mb-0">
                            <li className="mb-2">✔ On-the-Spot Placements</li>
                            <li className="mb-2">✔ Premium Internships</li>
                            <li className="mb-2">
                              ✔ Industry Leaders & Influencers
                            </li>
                            <li className="mb-2">✔ Instant CV Building</li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <p
                            className="fw-semibold mb-1"
                            style={{ color: "#14adbd" }}
                          >
                            Your Complete Career Journey
                          </p>
                          <p className="small text-muted mb-2">
                            From Resume to Your First Paycheck
                          </p>
                          <h3 className="fw-bold" style={{ color: "#14adbd" }}>
                            600+ Job Offers
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT FORM */}
                  <div className="col-md-6">
                    <div className="p-4 p-lg-5">
                      <h3 className="fw-semibold mb-1">
                        Register for Job Fest 2026
                      </h3>
                      <p className="text-muted small mb-4">
                        Fill in your details to participate
                      </p>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="name"
                            className="form-control rounded-3"
                            placeholder="Full Name"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control rounded-3"
                            placeholder="Email Address"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            type="tel"
                            name="phone"
                            className="form-control rounded-3"
                            placeholder="Mobile Number"
                            maxLength={10}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="college_name"
                            className="form-control rounded-3"
                            placeholder="Enter Your College Name"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="course_name"
                            className="form-control rounded-3"
                            placeholder="Course / Qualification"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn w-100 rounded-pill py-2 fw-semibold d-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: "#14adbd",
                            color: "#ffffff",
                            opacity: loading ? 0.8 : 1,
                          }}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Processing...
                            </>
                          ) : (
                            "Register Now"
                          )}
                        </button>
                      </form>

                      <p className="text-center text-muted small mt-3 mb-0">
                        Limited seats • Early registration recommended
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default Careerjobfest;

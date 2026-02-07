"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";
import axios from "axios";
import { toast } from "react-toastify";
import Careerfestimg from "@/assets/images/jobfestimg2026.jpeg";
import { useRouter } from "next/navigation";

const Careerjobfest = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      cv: formData.get("cv"),
    };
    try {
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getcareerFestData",
        payload,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data.status) {
        form.reset();

        toast.success("Career Fest Registration Successful!", {
          position: "top-left",
          autoClose: 1000,
          theme: "light",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
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
        <div
          className="container-fluid py-5"
          style={{
            marginTop: "6rem",
            backgroundColor: "#f4f7fa",
            minHeight: "100vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-start g-5">
              <div className="col-lg-6">
                <div className="rounded-4 overflow-hidden shadow-sm bg-white">
                  {/* IMAGE SECTION */}
                  <div className="position-relative">
                    <img
                      src={Careerfestimg.src}
                      alt="Job Fest"
                      className="img-fluid w-100"
                      style={{
                        height: "320px",
                        objectFit: "cover",
                      }}
                    />

                    {/* CENTER WHITE BADGE */}
                    <div
                      className="position-absolute start-50 translate-middle-x"
                      style={{ top: "20px" }}
                    >
                      <div
                        className="px-8 py-3 rounded-4 text-center"
                        style={{
                          backgroundColor: "#ffffff",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                          minWidth: "280px",
                          padding: "12px 20px",
                        }}
                      >
                        <h4
                          className="fw-bold mb-1"
                          style={{ color: "#14adbd" }}
                        >
                          Job Fest 2026
                        </h4>
                        <small className="text-muted fw-semibold">
                          30+ Companies • 600+ Opportunities
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="p-lg-4">
                    <h3 className="fw-bold text-center">
                      Build Your Career With Confidence
                    </h3>

                    <p className="text-muted mb-4">
                      Join Dehradun’s largest hiring event and connect directly
                      with top recruiters offering jobs and internships.
                    </p>

                    <div className="row">
                      <div className="col-6">
                        <ul className="list-unstyled text-muted">
                          <li className="mb-3">✔ On-the-Spot Hiring</li>
                          <li className="mb-3">✔ Resume Guidance</li>
                        </ul>
                      </div>

                      <div className="col-6">
                        <ul className="list-unstyled text-muted">
                          <li className="mb-3">✔ Internship Offers</li>
                          <li className="mb-3">✔ Career Mentorship</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE – FORM CARD */}
              <div className="col-lg-6">
                <div
                  className="card border-0 rounded-4 p-4 p-lg-5"
                  style={{
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <h4 className="fw-bold mb-2">Register for Job Fest 2026</h4>

                  <p className="text-muted small mb-4">
                    Fill your details to confirm participation
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

                    <div className="mb-3">
                      <input
                        type="text"
                        name="college_name"
                        className="form-control rounded-3"
                        placeholder="College Name"
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
                    <div className="mb-4">
                      <input
                        type="file"
                        name="cv"
                        className="form-control rounded-3"
                        accept=".pdf,.doc,.docx"
                      />
                      <small className="text-muted">
                        Upload CV (PDF, DOC, DOCX), max size 50MB
                      </small>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn w-100 rounded-3 py-2 fw-semibold"
                      style={{
                        backgroundColor: "#14adbd",
                        color: "#fff",
                        transition: "0.3s",
                      }}
                    >
                      {loading ? "Processing..." : "Register Now"}
                    </button>
                  </form>

                  <p className="text-center text-muted small mt-3 mb-0">
                    Limited seats • Early registration recommended
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .form-control {
              padding: 10px 14px;
              border: 1px solid #e2e6ea;
            }

            .form-control:focus {
              border-color: #14adbd;
              box-shadow: 0 0 0 0.15rem rgba(20, 173, 189, 0.2);
            }

            .btn:hover {
              background-color: #0f7f8c;
              transform: translateY(-2px);
            }
          `}</style>
        </div>

        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default Careerjobfest;

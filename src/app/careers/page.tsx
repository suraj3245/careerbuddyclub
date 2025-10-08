"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Careerlist from "../components/careers/page";
const Career = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <div
          className="container-fluid position-relative text-center shadow-lg"
          style={{
            background: "linear-gradient(90deg, #ffeaf1 0%, #74c0fc 100%)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <div className="col-lg-8 px-3" style={{ marginTop: "8rem" }}>
              <h4
                className="fw-bold display-5 mb-3 text-dark"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                }}
              >
                🌟 List of Careers in India
              </h4>
              <p
                className="lead mb-4 text-dark animate__animated animate__fadeInUp"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                }}
              >
                Discover diverse career opportunities across industries and
                domains. <br /> Find the right path that aligns with your
                passion and future
                <span className="fw-semibold text-warning"> career goals</span>.
              </p>
              <button className="btn btn-dark px-4 py-2 rounded-pill fs-5 animate__animated animate__fadeInUp">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <Careerlist />
        </div>
      </div>
    </Wrapper>
  );
};

export default Career;

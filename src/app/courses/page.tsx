import React from "react";
import Wrapper from "@/layouts/wrapper";
import Careerlist from "../components/careers/page";
import Coursesmodule from "../components/coursesmodule/page";
const Career = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* ✅ Hero Section */}
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
              <h1
                className="fw-bold display-5 mb-3 text-dark"
                style={{
                  fontFamily: "'Georgia', serif",
                }}
              >
                🌟 Explore the Best Courses in India
              </h1>
              <p
                className="lead mb-4 text-dark animate__animated animate__fadeInUp"
                style={{
                  fontFamily: "'Georgia', serif",
                }}
              >
                Discover top{" "}
                <strong>courses in India</strong> across industries
                and domains. <br />
                Find the right path that aligns with your passion, skills, and
                future{" "}
                <span className="fw-semibold text-warning">career goals</span>.
                Get complete{" "}
                <strong>career and course guidance</strong> at CareerBuddyClub.
              </p>
              <button className="btn btn-dark px-4 py-2 rounded-pill fs-5 animate__animated animate__fadeInUp">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Career List Section */}
        <div className="container my-5">
          <Coursesmodule />
          {/* ✅ Internal SEO Links */}
          <div className="mt-4 text-center">
            <p>
              Learn more about{" "}
              <a href="/courses" className="text-primary">
                top courses after 12th
              </a>{" "}
              and{" "}
              <a href="/careers" className="text-primary">
                explore the best career options
              </a>{" "}
              with{" "}
              <a
                href="https://careerbuddyclub.com"
                className="fw-semibold text-dark"
              >
                CareerBuddyClub
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Career;

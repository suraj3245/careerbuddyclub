import React from "react";
import Wrapper from "@/layouts/wrapper";
import Careerlist from "../components/careers/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Career Options in India 2026 (After 10th & 12th) | CareerBuddyClub",
  description:
    "Discover the best career options in India after 10th & 12th. Explore high-paying jobs, trending careers, and expert career guidance to choose the right path for your future.",
  keywords: [
    "best career options in India",
    "career options after 10th",
    "career options after 12th",
    "high paying jobs in India",
    "top careers in India 2026",
    "career guidance India",
    "future career options",
    "highest salary jobs in India",
    "career after graduation India",
    "best jobs for students India",
    "trending careers in India",
    "government jobs vs private jobs India",
    "career planning for students",
    "which career is best for me",
    "CareerBuddyClub careers",
  ],

  alternates: {
    canonical: "https://careerbuddyclub.com/careers",
  },

  openGraph: {
    title: "Best Career Options in India 2026 | CareerBuddyClub",
    description:
      "Find the best career options in India with salary insights, skills required, and future scope. Perfect guide for students after 10th & 12th.",
    url: "https://careerbuddyclub.com/careers",
    siteName: "CareerBuddyClub",
    images: [
      {
        url: "https://careerbuddyclub.com/careers", // 👉 Use real image (IMPORTANT)
        width: 1200,
        height: 630,
        alt: "Best Careers in India Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
                  fontStyle: "italic",
                }}
              >
                🌟 Explore the Best Careers in India
              </h1>
              <p
                className="lead mb-4 text-dark animate__animated animate__fadeInUp"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                }}
              >
                Discover diverse career opportunities across industries and
                domains. <br /> Find the right path that aligns with your
                passion, skills, and future{" "}
                <span className="fw-semibold text-warning">career goals</span>.
              </p>
              <button className="btn btn-dark px-4 py-2 rounded-pill fs-5 animate__animated animate__fadeInUp">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Career List Section */}
        <div className="container my-5">
          <Careerlist />

          {/* ✅ Internal SEO Links */}
          <div className="mt-4 text-center">
            <p>
              Learn more about{" "}
              <a href="/careers" className="text-primary">
                get personalized career guidance
              </a>{" "}
              from experts at{" "}
              <a
                href="https://careerbuddyclub.com"
                className="fw-semibold text-dark"
              >
                CareerBuddyClub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Career;

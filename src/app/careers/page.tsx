import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Careerlist from "../components/careers/page";

// ✅ Best SEO Metadata for Google & Social Media
export const metadata: Metadata = {
  title: "Explore the Best Careers in India | CareerBuddyClub",
  description:
    "Explore the best careers in India across industries and domains. Find top career options after 10th & 12th that align with your passion, skills, and future goals — only on CareerBuddyClub.",
  keywords: [
    "best careers in India",
    "career options after 12th",
    "career guidance",
    "top jobs in India",
    "career opportunities",
    "career paths",
    "careerbuddyclub",
    "high paying careers in India",
    "career list in India",
  ],
  openGraph: {
    title: "Explore the Best Careers in India | CareerBuddyClub",
    description:
      "Discover top careers in India and find the right path for your future success. Get complete career guidance and insights at CareerBuddyClub.",
    url: "https://careerbuddyclub.com/careers",
    siteName: "CareerBuddyClub",
    images: [
      {
        url: "https://careerbuddyclub.com/careers",
        width: 1200,
        height: 630,
        alt: "Explore Best Careers in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore the Best Careers in India | CareerBuddyClub",
    description:
      "Explore the best careers in India across industries and discover opportunities that match your passion and skills.",
    images: ["https://careerbuddyclub.com/careers"],
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
              <a href="https://careerbuddyclub.com" className="fw-semibold text-dark">
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

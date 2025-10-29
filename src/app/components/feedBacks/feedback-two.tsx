"use client";
import React from "react";
import Image from "next/image";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_57.jpeg";

const FeedbackTwo = () => {
  return (
    <>
      <style>
        {`
        /* Tablets (below 1024px) */
        @media (max-width: 1024px) {
          section.feedback-two {
            padding: 4rem 6%;
            flex-direction: column;
            align-items: flex-start;
          }
          .feedback-left {
            flex: 1 0 100%;
            margin-bottom: 2rem;
          }
          .feedback-right {
            flex: 1 0 100%;
            top: 0;
            gap: 1.2rem;
          }
          .feedback-card {
            padding: 1rem 1.2rem;
          }
          .feedback-card p {
            font-size: 0.85rem !important;
          }
          .feedback-card h4 {
            font-size: 1rem !important;
          }
          .feedback-left h2 {
            font-size: 2.4rem !important;
          }
          .feedback-left p {
            font-size: 2.4rem !important;
          }
        }

        /* Mobile devices (below 768px) */
        @media (max-width: 768px) {
          section.feedback-two {
            padding: 3rem 5%;
          }
          .feedback-left h2 {
            font-size: 2rem !important;
          }
          .feedback-left p {
            font-size: 1.8rem !important;
          }
          .feedback-left h5 {
            font-size: 0.9rem !important;
          }
          .feedback-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.9rem 1rem !important;
            gap: 0.8rem;
          }
          .feedback-card img {
            width: 55px !important;
            height: 55px !important;
            margin-right: 0 !important;
          }
          .feedback-card p {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          .feedback-card span {
            display: none;
          }
        }

        /* Extra small screens (below 425px) */
        @media (max-width: 425px) {
          section.feedback-two {
            padding: 2.5rem 5%;
          }
          .feedback-left h2 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          .feedback-left p {
            font-size: 1.5rem !important;
          }
          .feedback-left h5 {
            font-size: 0.85rem !important;
          }
          .feedback-card {
            padding: 0.8rem !important;
            gap: 0.6rem;
          }
          .feedback-card h4 {
            font-size: 0.95rem !important;
          }
          .feedback-card p {
            font-size: 0.75rem !important;
          }
          .feedback-card img {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}
      </style>

      <section
        className="feedback-two"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6rem 8%",
          background: "#fff",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* LEFT SIDE */}
        <div
          className="feedback-left"
          style={{
            flex: "0 0 40%",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 600,
              color: "#000",
              lineHeight: 1.3,
              marginBottom: "1.2rem",
            }}
          >
            Success Stories made by <br /> Career Buddy
          </h2>
          <p
            style={{
              fontSize: "3rem",
              color: "#14adbd",
              fontWeight: 700,
            }}
          >
            JOIN US
          </p>
          <h5
            style={{
              color: "#6b7280",
            }}
          >
            You might be Next.
          </h5>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="feedback-right"
          style={{
            flex: "0 0 55%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            position: "relative",
            top: "1rem",
          }}
        >
          {/* Card 1 */}
          <div
            className="feedback-card"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "1rem 1.5rem",
              border: "1px solid grey",
              borderLeft: "6px solid #4d4d4eff",
              transform: "translateY(0px) scale(0.96)",
              opacity: 0.9,
            }}
          >
            <Image
              src={user_1}
              alt="Tabish Jamal"
              width={70}
              height={70}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                marginRight: "1rem",
              }}
            />
            <div>
              <h4 style={{ fontWeight: 600, color: "#000" }}>Tabish Jamal</h4>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.9rem",
                  margin: "0.2rem 0",
                  lineHeight: 1.5,
                }}
              >
                The team at this job portal truly cares about their clients.
                From the initial consultation to the final job offer, they
                provided me with invaluable support and guidance. I couldn't
                have done it without them!
              </p>
            </div>
            <span
              style={{
                marginLeft: "auto",
                color: "#9ca3af",
                fontSize: "3.8rem",
                fontFamily: "serif",
                opacity: 0.7,
              }}
            >
              ”
            </span>
          </div>

          {/* Card 2 */}
          <div
            className="feedback-card"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "5px",
              boxShadow:
                "0 20px 40px rgba(99,102,241,0.35), 0 0 15px rgba(236,72,153,0.15)",
              padding: "1.4rem 1.6rem",
              borderLeft: "6px solid #facc15",
              zIndex: 10,
              marginRight: "3rem",
              transform: "scale(1.04)",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
              filter: "brightness(1.05)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.filter = "brightness(1.08)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(99,102,241,0.45), 0 0 20px rgba(236,72,153,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.filter = "brightness(1.05)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(99,102,241,0.35), 0 0 15px rgba(236,72,153,0.15)";
            }}
          >
            <Image
              src={user_2}
              alt="Akhil Bharghav"
              width={70}
              height={70}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                marginRight: "1rem",
              }}
            />
            <div>
              <h4 style={{ fontWeight: 700, color: "#000" }}>Akhil Bharghav</h4>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "0.9rem",
                  margin: "0.2rem 0",
                  lineHeight: 1.5,
                }}
              >
                I landed my dream job! The mentorship and upskilling programs
                were extremely helpful in preparing me for the interview and
                giving me the confidence to pursue my dream.
              </p>
            </div>
            <span
              style={{
                marginLeft: "auto",
                color: "#facc15",
                fontSize: "3.8rem",
                fontFamily: "serif",
              }}
            >
              ”
            </span>
          </div>

          {/* Card 3 */}
          <div
            className="feedback-card"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "1rem 1.5rem",
              border: "1px solid grey",
              borderLeft: "6px solid #4d4d4eff",
              transform: "translateY(-5px) scale(0.96)",
              opacity: 0.9,
            }}
          >
            <Image
              src={user_3}
              alt="Mohit"
              width={70}
              height={70}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                marginRight: "1rem",
              }}
            />
            <div>
              <h4 style={{ fontWeight: 600, color: "#000" }}>Mohit</h4>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.9rem",
                  margin: "0.2rem 0",
                  lineHeight: 1.5,
                }}
              >
                The mentorship and upskilling programs were tailored to my
                specific needs, and the job opportunities presented to me were
                top-notch. Thanks to their help, I'm now in a job I love and
                can't imagine being happier.
              </p>
            </div>
            <span
              style={{
                marginLeft: "auto",
                color: "#9ca3af",
                fontSize: "3.8rem",
                fontFamily: "serif",
                opacity: 0.7,
              }}
            >
              ”
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackTwo;

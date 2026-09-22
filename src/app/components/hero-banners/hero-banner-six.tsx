"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Hire_img from "@/assets/images/assets/corporate.webp";

const HeroBannerSix = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleAdmissionClick = (event: { preventDefault: () => void }) => {
    if (isLoggedIn) {
      event.preventDefault();
      router.push("/dashboard/candidate-dashboard/profile");
    }
  };

  return (
    <section
      style={{
        background: "transparent",
        paddingTop: "9rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* ── Left: Text content ── */}
          <div className="col-lg-6 col-12">
            <h1
              style={{
                fontFamily: "var(--eb_garamond-font)",
                fontSize: "clamp(48px, 6vw, 85px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#122036",
                marginBottom: "30px",
              }}
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Find & Hire <br />
              <span style={{ color: "#eed30d" }}>Experts for any</span> <br />
              <span style={{ color: "#eed30d" }}>Job.</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--eb_garamond-font)",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#000",
                maxWidth: "600px",
                marginBottom: "32px",
              }}
              className="wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Welcome to Career Buddy Club, Your source for top talent!!
            </p>
            
          </div>

          {/* ── Right: Image ── */}
          <div
            className="col-lg-6 col-12 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                maxWidth: "600px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={Hire_img}
                alt="Corporate Hiring"
                width={600}
                height={550}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "550px",
                  objectFit: "contain",
                }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBannerSix;

"use client";

import React, { useState } from "react";
import Wrapper from "@/layouts/wrapper";
import FooterOne from "@/layouts/footers/footer-one";

const CatTutorial = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("hindi");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <Wrapper>
      <div className="main-page-wrapper" style={{ backgroundColor: "#f9f9f9" }}>
        <div
          className="container text-center"
          style={{
            padding: "80px 20px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <h3
            className="text-center mb-5"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginTop:"2rem",
            }}
          >
            Career Aptitude Test Tutorial
          </h3>

          <div
            className="video-container mb-4"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {selectedLanguage === "english" && (
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/cQUDth-gjQ0?si=ju5uwXEZ6ZOz9jXc"
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {selectedLanguage === "hindi" && (
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/AZ1wfIRYWlc?si=XcjCk-3EnBTLjsN0"
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div
            className="language-buttons d-flex justify-content-center gap-3"
            style={{
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => handleLanguageChange("english")}
              style={{
                padding: "12px 30px",
                backgroundColor:
                  selectedLanguage === "english" ? "#007bff" : "#e0e0e0",
                color: selectedLanguage === "english" ? "#fff" : "#000",
                border: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("hindi")}
              style={{
                padding: "12px 30px",
                backgroundColor:
                  selectedLanguage === "hindi" ? "#007bff" : "#e0e0e0",
                color: selectedLanguage === "hindi" ? "#fff" : "#000",
                border: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Hindi
            </button>
          </div>
        </div>

        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CatTutorial;

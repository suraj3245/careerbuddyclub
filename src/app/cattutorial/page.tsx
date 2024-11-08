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
      <div className="main-page-wrapper">
        <div className="container text-center" style={{ marginTop: "128px" }}>
          <h3 className="text-center">Career Aptitude Test Tutorial</h3>

          {selectedLanguage === "english" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cQUDth-gjQ0?si=ju5uwXEZ6ZOz9jXc"
              title="YouTube video player"
              frameBorder="0" // Corrected to frameBorder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {selectedLanguage === "hindi" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AZ1wfIRYWlc?si=XcjCk-3EnBTLjsN0"
              title="YouTube video player"
              frameBorder="0" // Corrected to frameBorder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          <div className="language-buttons">
            <button
              className="col-lg-8 col-sm-8"
              onClick={() => handleLanguageChange("english")}
              style={{
                padding: "10px 20px",
                margin: "auto",
                backgroundColor:
                  selectedLanguage === "english" ? "#007bff" : "#e0e0e0",
                color: selectedLanguage === "english" ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
              }}
            >
              English
            </button>
            <button
              className="col-lg-8 col-sm-8 mt-2 mb-2"
              onClick={() => handleLanguageChange("hindi")}
              style={{
                padding: "10px 20px",
                margin: "auto",
                backgroundColor:
                  selectedLanguage === "hindi" ? "#007bff" : "#e0e0e0",
                color: selectedLanguage === "hindi" ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
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
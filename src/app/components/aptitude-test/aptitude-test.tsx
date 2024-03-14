"use client";
import React, { useState, useEffect } from "react";
import QuizForm from "../aptitudeSurvey/aptitudeform";

const AptitudeTestcomp = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          display: showForm ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "absolute",
          width: "100%",
          zIndex: 1,
        }}
      >
        <iframe
          src="https://lottie.host/embed/5d1da8c4-0b46-4e09-ad26-2e9b801c9029/RviFNybeeu.json"
          style={{ width: "300px", height: "300px" }}
          title="Loading Animation"
        ></iframe>
      </div>
      <div style={{ visibility: showForm ? "visible" : "hidden" }}>
        <QuizForm />
      </div>
    </div>
  );
};

export default AptitudeTestcomp;

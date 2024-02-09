"use client";

import React, { useState, useEffect } from "react";

import DashboardHeader from "./dashboard-header";
import axios from "axios";
import TopCard from "../../top-company/top-card";

type IUser = {
  username: string;
  avatarUrl: string;
}; // props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
};
const DashboardprofileArea = ({ setIsOpenSidebar, currentStep }: IProps) => {
  const [userName, setUserName] = useState("");

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Handle the case where the token is not available
      console.log("Token not found.");
      return;
    }
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
      return;
    }

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/getstudentsprofile",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {},
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      if (data.student && data.student.name) {
        localStorage.setItem("username", data.student.name); // Store username in localStorage
        setUserName(data.student.name);
      } else {
        setUserName("No Name Available");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserName("No Name Available");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const steps = [
    { number: 1, name: "Career Aptitude Test" },
    { number: 2, name: "Fill your College Application" },
    { number: 3, name: "Education Details" },
    { number: 4, name: "Expert Counsellor is Assigned" },
    { number: 5, name: "Upload your Documents" },
    { number: 6, name: "College Fee Submission" },
    { number: 7, name: "Admission Confirmation" },
  ];

  const getInitials = (userName: string) =>
    userName && userName.length > 0 ? userName[0].toUpperCase() : "?";
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <h2 className="main-title">Dashboard</h2>

        <div className="bg-white card-box border-20 mt-20">
          <div className="user-profile d-flex align-items-center">
            <div
              className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "20px",
              }}
            >
              {getInitials(userName)}
            </div>
            <h3 className="ml-10" style={{ marginLeft: "20px" }}>
              Welcome, {userName}{" "}
            </h3>
          </div>
          <div className="progress-bar-container">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`progress-step ${
                  currentStep >= step.number ? "active" : ""
                }`}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-name">{step.name}</div>
              </div>
            ))}
          </div>
        </div>
        <TopCard />
      </div>
    </div>
  );
};

export default DashboardprofileArea;

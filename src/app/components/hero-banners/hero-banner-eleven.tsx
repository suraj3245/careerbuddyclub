"use client";
import React, { useState } from "react";
import axios from "axios";

// Define the form data type
type IFormData = {
  rollNumber: string;
  dateOfBirth: string;
  mobileNumber: string;
  selectedBoard: string;
};

const HeroBannerEleven = () => {
  // Initialize state variables
  const [rollNumber, setRollNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [result, setResult] = useState<any>(null); // Adjust type as per your result data

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create form data object
    const formData: IFormData = {
      rollNumber,
      dateOfBirth,
      mobileNumber,
      selectedBoard,
    };

    // Make a POST request
    axios
      .post("YOUR_ENDPOINT_URL", formData)
      .then((response) => {
        // Update state with the result
        setResult(response.data);
        // Handle success, e.g., show success message
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        // Handle error, e.g., show error message
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="hero-banner-eleven position-relative">
      <div className="container">
        <div className="position-relative text-black mt-100 pt-50 md-pt-100 xl-pb-120 md-pb-80">
          <div className="mb-50">
            <h2>"Embrace Your Success: 12th Results Revealed"</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <iframe
                  src="https://lottie.host/embed/6a31283a-c51d-4da0-9c75-7f89fc57e365/pDDQNYUYoK.json"
                  style={{ height: "600px", width: "600px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 ">
              <p>Board exam results displayed with clarity and accuracy.</p>
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number:</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="form-input"
                  />
                </div>
                {/* Select Board Dropdown */}
                <div className="form-group">
                  <label htmlFor="selectBoard">Enter Board Name:</label>
                  <input
                    type="text"
                    id="selectBoard"
                    name="selectBoard"
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                    className="form-input"
                  />
                  {/* Add more options as needed */}
                </div>
                <button type="submit" className="btn-five wow fadeInUp mx-2 mb-2">
                  Submit
                </button>
              </form>
              {/* Display results if available */}
              {result && (
                <div className="result">
                  {/* Render result data here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerEleven;

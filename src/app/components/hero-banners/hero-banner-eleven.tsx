"use client";
import React, { useState } from "react";


// internal

const HeroBannerEleven = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedBoard, setSelectedBoard] = useState(""); // State for selected board
  const [result, setResult] = useState(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    // You may want to send a request to the server to get results based on form inputs
    // Example: fetchResults(rollNumber, dateOfBirth, mobileNumber, selectedBoard)
    // Upon receiving results, update the state with setResult
  };

  return (
    <div className="hero-banner-eleven position-relative">
      <div className="container">
        <div className="position-relative text-black mt-100 pt-50 md-pt-100  xl-pb-120 md-pb-80">
        <div className="mb-50 ">
        <h2> 
        "Unlocking Futures: Your Pathway to Success Revealed."</h2>
        </div>
          <div className="row">
            <div className="col-lg-6">
            
              <div className="left-content">
              <iframe src="https://lottie.host/embed/6a31283a-c51d-4da0-9c75-7f89fc57e365/pDDQNYUYoK.json "style={{height:"600px", width:"600px"}}></iframe> 
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
                  <label htmlFor="selectBoard">Select Board:</label>
                  <select
                    id="selectBoard"
                    name="selectBoard"
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="State Board">State Board</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <button className="btn-five wow fadeInUp mx-2 mb-2">Summit</button>
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

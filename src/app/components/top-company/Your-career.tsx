import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "@/assets/text/career_choices.json";

type CareerChoiceKeys = keyof typeof data;

interface YourCareerProps {
  code: CareerChoiceKeys; // Now expecting the code directly
}

const YourCareer: React.FC<YourCareerProps> = ({ code }) => {
  const [companyData, setCompanyData] = useState([]);
  const [careerChoices, setCareerChoices] = useState<
    (typeof data)[CareerChoiceKeys] | null
  >(null);

  useEffect(() => {
    if (code && data[code]) {
      setCareerChoices(data[code]); // Fetch data directly using the code
    } else {
      setCareerChoices(null); // Reset if no valid code is provided
    }
  }, [code]);

  useEffect(() => {
    // Make a request to get the career choices from Thunder Client
    const temptoken = localStorage.getItem("token");
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/careerresultskills",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${temptoken}`,
      },
      data: { result_letters: "RCE" },
    };

    axios
      .request(options)
      .then((response) => {
        // Update the state with the received data
        // console.log(response.data);
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const headingStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    marginTop: "-35px",
    backgroundColor: "#eed30d",
    borderRadius: "20px",
    padding: "6px",
  };

  const textStyle = {
    fontSize: "16px",
    borderBottom: "1px solid grey",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div
      className="rounded-5 bg-transparent"
      style={{ border: "1px solid black" }}
    >
      <div className="container-fluid">
          <div
            className="text-sm fm-600 text-uppercase p-3"
            data-wow-delay="0.3s"
            style={headingStyle}
          >
            Popular Career Choices According To Your Score
          </div>
      </div>
      <div className="container-fluid">
        {careerChoices?.map((item, index) => (
          <div key={index}>
            <div
              className="text-center tran3s mt-10 wow fadeInUp rounded-4 p-3"
              style={{
                backgroundColor: index % 2 === 0 ? "#13adbd" : "#eed30d",
                color: index % 2 === 0 ? "white" : "black",
                width: "100%",
              }}
            >
              <div className="text-sm fw-600" style={{ fontSize: "16px" }}>
                {item?.Career}
              </div>
            </div>
            <div
              className="card-style-nine tran3s mt-10 rounded-5 bg-transparent"
              style={{ border: "1px solid black", textAlign: "left" }}
            >
              <div style={textStyle}>
                <div className="fw-100 text-dark" style={{ flex: 1, fontSize: '18px'}}>
                  Specific Domain:
                </div>
                <div
                  className="fw-500 text-dark"
                  style={{ flex: 2, fontSize: "15px" }}
                >
                  {item?.Domain}
                </div>
              </div>
              <div style={textStyle}>
                <div className="fw-100 text-dark" style={{ flex: 1, fontSize: '18px' }}>
                  Average Package:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{ flex: 2, fontSize: "17px" }}
                >
                  <div style={{fontSize: "15px"}}>1. Freshers: {item?.Package?.Freshers || "N/A"}</div>
                  <div style={{fontSize: "15px"}}>
                    2. Experienced Professionals:{" "}
                    {"Experienced Professionals" in item?.Package
                      ? item.Package["Experienced Professionals"]
                      : "N/A"}
                  </div>
                </div>
              </div>
              <div style={textStyle}>
                <div
                  className="fw-100 text-dark"
                  style={{ flex: 1, fontSize: "18px" }}
                >
                  Top 3 Hiring Companies:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{ flex: 2, fontSize: '15px' }}
                >
                  {item?.Companies?.map((company, idx) => (
                    <div key={idx}>
                      {idx + 1}. {company}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ ...textStyle, borderBottom: "none"}}>
                <div className="fw-100 text-dark" style={{ flex: 1, fontSize: '18px' }}>
                  Skills to Acquire:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{ flex: 2, fontSize: "15px" }}
                >
                  {item?.Skills?.map((skill, idx) => (
                    <div key={idx}>
                      {idx + 1}. {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCareer;

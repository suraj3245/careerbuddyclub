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
        console.log(response.data);
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const headingStyle = {
    fontSize: "26px", // Adjust this value as needed
    fontWeight: "bold",
    marginTop: "-35px",
    backgroundColor: "#eed30d",
    borderRadius: "20px",
    padding: "8px",
  };

  const textStyle = {
    fontSize: "16px",
    borderBottom: "1px solid grey",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <section
      className="top-company-section pt-10 lg-pt-10 pb-10 lg-pb-10 mt-35 xl-mt-35 rounded-5 bg-transparent"
      style={{ border: "1px solid black" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center pb-10 lg-pb-10">
          <div className="col-sm-8">
            <div className="title-one">
              <h2
                className="main-font wow fadeInUp text-uppercase"
                data-wow-delay="0.3s"
                style={headingStyle}
              >
                Popular Career Choices According To Your Score
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center m-5">
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
                <div className="text-lg fw-500" style={{ fontSize: "24px" }}>
                  {item?.Career}
                </div>
              </div>
              <div
                className="card-style-nine tran3s mt-10 rounded-5 bg-transparent"
                style={{ border: "1px solid black", textAlign: "left" }}
              >
                <div style={textStyle}>
                  <div className="text-lg fw-100 text-dark" style={{ flex: 1 }}>
                    Specific Domain:
                  </div>
                  <div
                    className="text-lg fw-500 text-dark"
                    style={{ flex: 2, fontSize: "17px" }}
                  >
                    {item?.Domain}
                  </div>
                </div>
                <div style={textStyle}>
                  <div className="text-lg fw-100 text-dark" style={{ flex: 1 }}>
                    Average Package:
                  </div>
                  <div
                    className="text-lg fw-500 text-dark"
                    style={{ flex: 2, fontSize: "17px" }}
                  >
                    <div>1. Freshers: {item?.Package?.Freshers || "N/A"}</div>
                    <div>
                      2. Experienced Professionals:{" "}
                      {"Experienced Professionals" in item?.Package
                        ? item.Package["Experienced Professionals"]
                        : "N/A"}
                    </div>
                  </div>
                </div>
                <div style={textStyle}>
                  <div
                    className="text-lg fw-100 text-dark"
                    style={{ flex: 1, fontSize: "17px" }}
                  >
                    Top 3 Hiring Companies:
                  </div>
                  <div
                    className="text-lg fw-500 text-dark"
                    style={{ flex: 2, fontSize: "17px" }}
                  >
                    {item?.Companies?.map((company, idx) => (
                      <div key={idx}>
                        {idx + 1}. {company}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ ...textStyle, borderBottom: "none" }}>
                  <div className="text-lg fw-100 text-dark" style={{ flex: 1 }}>
                    Skills to Acquire:
                  </div>
                  <div
                    className="text-lg fw-500 text-dark"
                    style={{ flex: 2, fontSize: "17px" }}
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
    </section>
  );
};

export default YourCareer;

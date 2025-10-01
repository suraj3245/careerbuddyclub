import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "@/assets/text/career_choices.json";
import { PackageX } from "lucide-react";

type CareerChoiceKeys = keyof typeof data;

interface YourCareerProps {
  code: ResultItem | ResultItem[];
}

interface Career {
  // Define fields of each career object
  title: string;
  careers: string;
  Domain: string;
  companies?: string[];
  skills: string[];
  streams: string[];
  courses: string[];
  average_package: string;
}

interface Company {
  name: string;
  location: string;
}

interface ResultItem {
  id: number;
  letter_id: string;
  similar_letter_id: string;
  created_at: string;
  updated_at: string;
  careers: Career[]; // Array of Career objects
}

const YourCareer: React.FC<YourCareerProps> = ({ code }) => {
  const [result, setResult] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (code) {
      const normalized = Array.isArray(code) ? code : [code]; // Convert to array if it's a single object
      setResult(normalized);
    } else {
      setResult([]);
    }
  }, [code]);

  const headingStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    marginTop: "-19px",
    backgroundColor: "yellow",
    borderRadius: "20px",
    color: "grey",
    border: "1px solid yellow",
  };

  const textStyle = {
    fontSize: "16px",
    borderBottom: "1px solid grey",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
  };
  return (
    <div
      className="rounded-5 bg-transparent"
      style={{ border: "1px solid black" }}
    >
      <div className="container-fluid">
        <div
          className="text-sm fm-500 text-uppercase p-2"
          data-wow-delay="0.3s"
          style={headingStyle}
        >
          Popular Career Choices According To Your Score
        </div>
      </div>
      <div className="container-fluid">
        {result.map((item, index) => (
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
              <div style={textStyle} className="p-2">
                <div className="fw-100 text-dark mt-3" style={{ flex: 1, fontSize: '18px'}}>
                  Specific Domain:
                </div>
                <div
                  className="fw-500 text-dark"
                  style={{ flex: 2, fontSize: "15px" }}
                >
                  {item?.Domain}
                </div> 
              </div>
              <div style={textStyle} className="p-2" >
                <div className="fw-100 text-dark" style={{ flex: 1, fontSize: '18px' }}>
                  Average Package:
                </div>
                <div
                  className="text-center tran3s mt-2 wow fadeInUp rounded-5"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#13adbd" : "eed30d",
                    color: index % 2 === 0 ? "white" : "black",
                    width: "100%",
                  }}
                >
                  <div
                    className="text-sm fw-500 p-2"
                    style={{ fontSize: "17px" }}
                  >
                    {career.title}
                  </div>
                </div>

              </div>
              <div style={textStyle} className="p-2">
                <div
                  className="fw-100 text-dark"
                  style={{ flex: 1, fontSize: "18px" }}
                >
                  Top 3 Hiring Companies:
                </div>
                <div
                  className="card-style-nine tran3s mt-10 rounded-5 mb-2"
                  style={{ border: "1px solid black", textAlign: "left" }}
                >
                  <div style={textStyle}>
                    <div
                      className="fw-100 text-dark"
                      style={{ flex: 1, fontSize: "17px" }}
                    >
                      Courses:  
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ ...textStyle, borderBottom: "none"}} className="p-2">
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
                    <div
                      className="text-lg fw-500 text-dark"
                      style={{ flex: 2, fontSize: "15px" }}
                    >
                      {career.average_package
                        .split(/(?=\d+\.\s)/g) // Split where a number followed by a dot and space starts
                        .map((item, index) => (
                          <div key={index}>{item.trim()}</div>
                        ))}
                    </div>
                  </div>

                  <div style={textStyle}>
                    <div
                      className="fw-100 text-dark"
                      style={{ flex: 1, fontSize: "17px" }}
                    >
                      Top 3 Hiring Companies:
                    </div>
                    <div
                      className="text-lg fw-500 text-dark"
                      style={{ flex: 2, fontSize: "15px" }}
                    >
                      {Array.isArray(career.companies) &&
                      career.companies.length > 0
                        ? career.companies.map((company: any, cidx) => (
                            <div key={cidx}>
                              {cidx + 1}.&nbsp;
                              {company.name}
                            </div>
                          ))
                        : "N/A"}
                    </div>
                  </div>
                  <div className="d-flex justify-content-betweeen p-2">
                    <div
                      className="fw-100 text-dark"
                      style={{ flex: 1, fontSize: "17px" }}
                    >
                      Skills to Acquire:
                    </div>
                    <div
                      className="text-lg fw-500 text-dark"
                      style={{ flex: 2, fontSize: "15px" }}
                    >
                      {Array.isArray(career.skills) && career.skills.length > 0
                        ? career.skills.map((skill: any, cidx) => (
                            <div key={cidx}>
                              {cidx + 1}.&nbsp;
                              {skill.title}
                            </div>
                          ))
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCareer;

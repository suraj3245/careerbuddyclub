import React, { useEffect, useState } from "react";
import axios from "axios";
import { fontStyle } from "html2canvas/dist/types/css/property-descriptors/font-style";

// type CareerChoiceKeys = keyof typeof data;

interface YourCareerProps {
  code: ResultItem | ResultItem[];
}

interface Company {
  name: string;
  location: string;
}

interface ResultItem {
  Career?: string;
  Domain?: string;
  companies?: { name: string }[];
  streams?: { title: string }[];
  skills?: { title: string }[];
  title?: string;
  courses?: { name: string }[];
  average_package?: string;
}

const YourCareer: React.FC<YourCareerProps> = ({ code }) => {
  const [result, setResult] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (code) {
      // If code is an array of objects with careers inside
      const normalized = Array.isArray(code)
        ? code.flatMap((c: any) => c.careers ?? [])
        : code.Career
        ? [code.Career]
        : [];
      setResult(normalized);
    } else {
      setResult([]);
    }
  }, [code]);

  const headingStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
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
      style={{ border: "1px solid black", marginTop: '-10px' }}
    >
      <div className="container-fluid">
        <div
          className="text-sm fm-500 text-uppercase text-center p-2 mb-1"
          data-wow-delay="0.3s"
          style={headingStyle}
        >
          Popular Career Choices According To Your Score
        </div>
      </div>
      <div className="container-fluid mb-2">
        {result.map((item, index) => (
          <div key={index}>
            <div
              className="text-center tran3s mt-10 wow fadeInUp rounded-3 p-2"
              style={{
                backgroundColor: "#13adbd",
                color: "white",
                width: "100%",
              }}
            >
              <div
                className="fw-600 mb-1"
                style={{ fontSize: "16px", fontFamily: "'Georgia', serif" }}
              >
                {item?.title || "N/A"}
              </div>
            </div>
            <div
              className="card-style-nine tran3s mt-10 rounded-5 bg-transparent"
              style={{ border: "1px solid black", textAlign: "left" }}
            >
              <div style={textStyle} className="p-2">
                <div
                  className="fw-100 text-dark mt-3"
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Courses:
                </div>
                <div
                  className="text-dark fw-500"
                  style={{
                    flex: 2,
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#333",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {item?.courses?.map((itm) => itm.name).join(", ") || "N/A"}
                </div>
              </div>

              <div style={textStyle} className="p-2">
                <div
                  className="fw-100 text-dark"
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Stream:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{
                    flex: 2,
                    fontSize: "15px",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {Array.isArray(item?.streams) && item.streams.length > 0
                    ? item.streams.map((strm, idx) => (
                        <div key={idx}>{strm.title}</div>
                      ))
                    : "N/A"}
                </div>
              </div>

              <div style={textStyle} className="p-2">
                <div
                  className="fw-100 text-dark mt-3"
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Average Package:
                </div>
                <div
                  className="fw-500 text-dark"
                  style={{
                    flex: 2,
                    fontSize: "15px",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {item?.average_package
                    ? item.average_package
                        .split(/(?=\d\.)/)
                        .map((line, idx) => <div key={idx}>{line.trim()}</div>)
                    : "N/A"}
                </div>
              </div>

              {/* Top 3 Hiring Companies */}
              <div style={textStyle} className="p-2">
                <div
                  className="fw-100 text-dark"
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Top 3 Hiring Companies:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{
                    flex: 2,
                    fontSize: "15px",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {Array.isArray(item?.companies) && item.companies.length > 0
                    ? item.companies.slice(0, 3).map((company, cidx) => (
                        <div key={cidx}>
                          {cidx + 1}. {company.name}
                        </div>
                      ))
                    : "N/A"}
                </div>
              </div>

              {/* Skills */}
              <div
                style={{ ...textStyle, borderBottom: "none" }}
                className="p-2"
              >
                <div
                  className="fw-100 text-dark"
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Skills to Acquire:
                </div>
                <div
                  className="text-lg fw-500 text-dark"
                  style={{
                    flex: 2,
                    fontSize: "15px",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {Array.isArray(item?.skills) && item.skills.length > 0
                    ? item.skills.map((skill, idx) => (
                        <div key={idx}>
                          {idx + 1}. {skill.title}
                        </div>
                      ))
                    : "N/A"}
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

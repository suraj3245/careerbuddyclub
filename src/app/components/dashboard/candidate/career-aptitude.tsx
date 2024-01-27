"use client";

import DashboardHeader from "./dashboard-header";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";

import "react-toastify/dist/ReactToastify.css";
import TopCareer from "../../top-company/top-career";
import YourCareer from "../../top-company/Your-career";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

type Question = {
  id: number;
  question: string;
  type: string;
};

const defaultOptions = ["Dislike", "Neutral", "Enjoy"];

const DashboardResult = ({ setIsOpenSidebar }: IProps) => {
  const [results, setResults] = useState<any | null>(null);
  const [testStatus, setTestStatus] = useState("");

  const fetchCatResult = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Handle the case where the token is not available
      return;
    }

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/getcatresult",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(options);
      const resultData = response.data;

      // Update the results state with the fetched data
      setResults(resultData);
    } catch (error) {
      console.error("Error fetching cat result:", error);
    }
  };

  useEffect(() => {
    fetchCatResult();
  }, []);

  const checkTestStatus = () => {
    const token = localStorage.getItem("token"); // or however you get your token
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/checkcareerteststatus",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setTestStatus(response.data.message);
        // Store the result for the user
        // You can use localStorage or a state management solution
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  useEffect(() => {
    checkTestStatus();
  }, []);

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (results && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const chartLabels = Object.keys(results).map((key) => {
          switch (key) {
            case "R":
              return "Realistic";
            case "I":
              return "Investigative";
            case "A":
              return "Artistic";
            case "S":
              return "Social";
            case "E":
              return "Enterprising";
            case "C":
              return "Conventional";
            default:
              return key;
          }
        });

        const chart = new ChartJS(ctx, {
          type: "bar",
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: "Score",
                data: Object.values(results),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)", // Red
                  "rgba(54, 162, 235, 0.2)", // Blue
                  "rgba(255, 206, 86, 0.2)", // Yellow
                  "rgba(75, 192, 192, 0.2)", // Green
                  "rgba(153, 102, 255, 0.2)", // Purple
                  "rgba(255, 159, 64, 0.2)", // Orange
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)", // Red
                  "rgba(54, 162, 235, 1)", // Blue
                  "rgba(255, 206, 86, 1)", // Yellow
                  "rgba(75, 192, 192, 1)", // Green
                  "rgba(153, 102, 255, 1)", // Purple
                  "rgba(255, 159, 64, 1)", // Orange
                ],
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        return () => {
          chart.destroy();
        };
      }
    }
  }, [results]);

  return (
    <>
      <div className="dashboard-body">
        <div className="position-relative">
          {/* header start */}
          <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
          {/* header end */}
          <div
            style={{
              backgroundColor: "#125125125",
              position: "relative",
              zIndex: 0,
            }}
          >
            {testStatus !== "Test completed" ? (
              <>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="text-center" style={{ flex: 1 }}>
                    <h2
                      className="mb-6 pb-10 pt-80"
                      style={{ color: "#13ADBD" }}
                    >
                      Career Aptitude Test
                    </h2>
                    {/* Centered Header */}
                    <div className="text-center">
                      <h2 className="mb-6 pb-25" style={{ color: "#13ADBD" }}>
                        Please Give The Test
                      </h2>
                      <Link href="/careerapt">
                        <button className="btn-apti pt-50">
                          Take Your Test Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="text-center" style={{ flex: 1 }}>
                    <h2 className="mb-6 pb-10" style={{ color: "#13ADBD" }}>
                      Career Aptitude Test
                    </h2>
                    {/* Centered Header */}
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="mb-6 pb-25" style={{ color: "#13ADBD" }}>
                    Quiz Results
                  </h2>
                  {/* Display the results here using the `results` state */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <canvas
                        ref={chartRef}
                        style={{ height: "370px", width: "370px" }}
                      />
                    </div>
                  </div>

                  <TopCareer />
                  <YourCareer />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "30px",
                    }}
                  >
                    <Link href="/dashboard/candidate-dashboard/profile">
                      <button className="btn-apti pt-50">Next Steps</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardResult;

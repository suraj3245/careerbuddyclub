"use client";

import DashboardHeader from "./dashboard-header";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import TopCareer from "../../top-company/top-career";
import YourCareer from "../../top-company/Your-career";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardResult = ({ setIsOpenSidebar }: IProps) => {
  const [results, setResults] = useState<any | null>(null);
  const [testStatus, setTestStatus] = useState("");
  const barColors = [
    "#FF4560",
    "#00E396",
    "#008FFB",
    "#775DD0",
    "#FEB019",
    "#FF4560",
    "#00E396",
    "#008FFB",
    "#775DD0",
    "#FEB019",
  ];
  const downloadResultsAsPDF = async () => {
    const input = document.getElementById("resultsContainer");
    if (!(input instanceof HTMLElement)) return; // Type check

    const canvas = await html2canvas(input, {
      scale: 1, // Adjust scale as needed
      scrollY: -window.scrollY, // Adjust for page scrolling
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("Career-Aptitude-test.pdf");
  };

  const fetchCatResult = async () => {
    const token = localStorage.getItem("token");
    const storedResults = localStorage.getItem("catResults");

    // Use stored results if available
    if (storedResults) {
      setResults(JSON.parse(storedResults));
      return;
    }

    if (!token) {
      console.error("Token not found.");
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
      localStorage.setItem("catResults", JSON.stringify(resultData)); // Store the results
      setResults(resultData);
    } catch (error) {
      console.error("Error fetching cat result:", error);
    }
  };
  useEffect(() => {
    fetchCatResult();
  }, []);

  const checkTestStatus = () => {
    const token = localStorage.getItem("token");
    const storedTestStatus = localStorage.getItem("testStatus");

    // Use stored status if available
    if (storedTestStatus) {
      setTestStatus(storedTestStatus);
      return;
    }

    if (!token) {
      console.error("Token not found.");
      return;
    }

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
        localStorage.setItem("testStatus", response.data.message); // Store the test status
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    checkTestStatus();
  }, []);
  type TransformedResultType = {
    category: string;
    score: number;
  };

  const getTopThreeScores = () => {
    if (!results) return [];

    // Transform the results
    const transformedResults: TransformedResultType[] = Object.entries(
      results
    ).map(([key, value]) => {
      return {
        category:
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", ""),
        score: typeof value === "number" ? value : 0, // Ensure that the value is a number
      };
    });

    // Sort and get the top three scores
    return transformedResults.sort((a, b) => b.score - a.score).slice(0, 3);
  };
  type ResultType = {
    [key: string]: number;
  };
  const transformResultsToChartData = (): {
    series: ApexAxisChartSeries | [];
    options: ApexOptions | {};
  } => {
    if (!results || Object.keys(results).length === 0)
      return { series: [], options: {} };

    // Ensure that all necessary data points are numbers and defined
    const categories = Object.keys(results).map(
      (key) => key.charAt(0).toUpperCase() + key.slice(1).replace("_score", "")
    );
    const dataPoints = categories.map((category, index) => {
      const key = category.toLowerCase() + "_score";
      const value = results[key];
      return {
        x: category,
        y: Number(value),
        fillColor: barColors[index % barColors.length],
      };
    });

    return {
      series: [{ name: "Score", data: dataPoints }],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: categories,
        },
        colors: barColors,
      },
    };
  };

  const chartData = transformResultsToChartData();
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
                      className="mb-6 pb-10"
                      style={{ color: "#13ADBD", fontSize: "50px" }}
                    >
                      Career Aptitude Test
                    </h2>
                    {/* Centered Header */}
                    <div className="text-center">
                      <h2
                        className="mb-6 pb-25"
                        style={{ color: "#13ADBD", fontSize: "40px" }}
                      >
                        Please Give The Test
                      </h2>
                      <Link href="/career-aptitude">
                        <button className="dash-btn-two tran3s me-3">
                          Take Your Test Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  id="resultsContainer"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-center" style={{ flex: 1 }}>
                      <h2 className="mb-6 pb-10" style={{ fontSize: "50px" }}>
                        Career Aptitude Test
                      </h2>
                      {/* Centered Header */}
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="mb-6 pb-25" style={{ fontSize: "40px" }}>
                      Quiz Results
                    </h2>
                    {/* Display the results here using the `results` state */}

                    <div className="row">
                      <div className="chart-container  col-12 col-md-8">
                        {results && (
                          <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="bar"
                            width={"100%"}
                            height={350}
                          />
                        )}
                      </div>
                      <div className="top-scores col-12 col-md-4">
                        <h3>Top Scores</h3>
                        {getTopThreeScores().map((result, index) => (
                          <p
                            key={index}
                          >{`${result.category}: ${result.score}`}</p>
                        ))}
                      </div>
                    </div>

                    <TopCareer />
                    <YourCareer />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <button
                    className="dash-btn-two tran3s me-3"
                    onClick={downloadResultsAsPDF}
                  >
                    Download Results
                  </button>
                  <Link href="/dashboard/candidate-dashboard/profile">
                    <button className="dash-btn-two tran3s me-3">
                      Next Steps
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardResult;

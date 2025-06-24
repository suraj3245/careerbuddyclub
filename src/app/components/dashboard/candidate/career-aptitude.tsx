"use client";
import DashboardHeader from "./dashboard-header";
import React, { useState, useEffect } from "react";
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

type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
type ResultType = { [key: string]: number };
const DashboardResult = ({ setIsOpenSidebar }: IProps) => {
  const [results, setResults] = useState<any | null>(null);
  const [testStatus, setTestStatus] = useState<string>("");
  const [careerResult, setCareerResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loader flag
  const [showLoader, setShowLoader] = useState(false); // Optional loader control

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

  const fetchCatResult = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found.");
      return;
    }

    try {
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getcatresult",
        {},
        {
          headers: { Accept: "*/*", Authorization: `Bearer ${token}` },
        }
      );
      const data = response.data || {};
      setResults(data);
    } catch (err) {
      console.error("Error fetching CAT result:", err);
    }
  };

  const checkTestStatus = async (): Promise<string> => {
    const token = localStorage.getItem("token");
    const storedStatus = localStorage.getItem("testStatus");

    if (storedStatus) {
      setTestStatus(storedStatus);
      return storedStatus;
    }

    if (!token) {
      console.error("Token not found.");
      return "Token missing";
    }

    try {
      const res = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/checkcareerteststatus",
        {},
        {
          headers: { Accept: "*/*", Authorization: `Bearer ${token}` },
        }
      );
      const message = res.data?.message || "Unknown";
      setTestStatus(message);
      localStorage.setItem("testStatus", message);
      return message;
    } catch (err) {
      return "Error";
    }
  };

  useEffect(() => {
    const checkAndFetch = async () => {
      try {
        setShowLoader(true); // Start loader
        const status = await checkTestStatus();
        if (status === "Test completed") {
          await fetchCatResult();
        }
      } catch (error) {
        console.error("Error during check and fetch:", error);
      } finally {
        setShowLoader(false);
        setIsLoading(false);
      }
    };
    checkAndFetch();
  }, []);

  const transformResultsToChartData = (): {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } => {
    if (!results || Object.keys(results).length === 0) {
      return {
        series: [{ name: "Score", data: [] }],
        options: { chart: { type: "bar" } },
      };
    }

    const categories = Object.keys(results)
      .filter(
        (key) =>
          key.toLowerCase() !== "letters" && key.toLowerCase() !== "resultdata"
      )
      .map(
        (key) =>
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", "")
      );

    const dataPoints = categories.map((category, index) => {
      const key = category.toLowerCase() + "_score";
      const value = Number(results[key]);
      return {
        x: category,
        y: isNaN(value) ? 0 : value,
        fillColor: barColors[index % barColors.length],
      };
    });

    return {
      series: [{ name: "Score", data: dataPoints }],
      options: {
        chart: { type: "bar", height: 350 },
        plotOptions: { bar: { borderRadius: 4, horizontal: true } },
        dataLabels: { enabled: false },
        xaxis: { categories },
        colors: barColors,
      },
    };
  };

  const getTopThree = () => {
    if (!results) return [];
    return Object.entries(results)
      .filter(([k]) => k.toLowerCase() !== "letters")
      .map(([k, v]) => ({
        category: k.replace("_score", ""),
        score: Number(v) || 0,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const downloadResultsAsPDF = async () => {
    const input = document.getElementById("resultsContainer");
    if (!input) return;

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        scrollY: -window.scrollY,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("Career-Aptitude-Test.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  const chartData = transformResultsToChartData();
  const topThree = getTopThree();
  return (
    <div>
      {showLoader || isLoading ? (
        <div
          className="dashboard-body"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <iframe
            src="https://lottie.host/embed/2478cb97-84dc-485a-bb0d-bfd5b7566b46/jOw87Lncdm.json"
            style={{ width: "300px", height: "300px" }}
          ></iframe>
        </div>
      ) : (
        <div className="dashboard-body">
          <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
          <div
            style={{
              backgroundColor: "#125125125",
              position: "relative",
              zIndex: 0,
            }}
          >
            {testStatus !== "Test completed" ? (
              <div className="text-center">
                <h2 style={{ color: "#13ADBD", fontSize: "50px" }}>
                  Career Aptitude Test
                </h2>
                <h2 style={{ color: "#13ADBD", fontSize: "40px" }}>
                  Please Give The Test
                </h2>
                <Link href="/aptitudetest">
                  <button className="dash-btn-two tran3s me-3">
                    Take Your Test Now
                  </button>
                </Link>
              </div>
            ) : (
              <div
                id="resultsContainer"
                style={{ position: "relative", zIndex: 1, textAlign: "center" }}
              >
                <h2
                  className="mt-2"
                  style={{
                    fontSize: "50px",
                    fontWeight: "500",
                    color: "rgb(0, 123, 255)", // Primary blue
                  }}
                >
                  Career Aptitude Test
                </h2>
                <h2
                  className="mt-2"
                  style={{
                    fontSize: "40px",
                    fontWeight: "500",
                    color: "rgb(0, 150, 136)", // Teal accent for sophistication
                  }}
                >
                  Quiz Result
                </h2>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <p className="text-start">
                      This is a self-report inventory that assesses the
                      student’s traits, interests and suggests suitable
                      occupations. This CAT is based on the Typological Theory,
                      which posits that most people can be loosely categorized
                      into six types - Realistic, Investigative, Artistic ,
                      Social, Enterprising, and Conventional. It further states
                      that occupations and work environments also can be
                      classified by these categories. When people choose careers
                      that match their own types, they are most likely to be
                      both satisfied and successful. The purpose of this test is
                      to help you identify your occupational personality,
                      education options, and inform your decision making
                      process.
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-8">
                    <div
                      className="row rounded-5 d-flex flex-row justify-content-center align-items-center"
                      style={{ border: "1px solid grey" }}
                    >
                      <div
                        className="chart-container"
                        style={{ flex: 2, minWidth: "250px" }}
                      >
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
                      <div
                        className="top-scores rounded-5 fw-500 m-5"
                        style={{
                          flex: 1,
                          minWidth: "200px",
                          border: "1px solid grey",
                          fontSize: "24px",
                        }}
                      >
                        <h3
                          className="mt-1 p-3"
                          style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "rgb(0, 123, 655)",
                            borderBottom: '1px solid grey'
                          }}
                        >
                          Top Scores
                        </h3>
                        {topThree.map((t, i) => (
                          <p key={i} style={{ fontSize: "18px", color: 'green' }}>{`${
                            t.category.charAt(0).toUpperCase() +
                            t.category.slice(1).toLowerCase()
                          }: ${t.score}`}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <TopCareer topCategories={topThree.map((t) => t.category)} />
                <YourCareer code={results?.resultData} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardResult;

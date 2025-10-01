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
  const downloadResultsAsPDF = async () => {
    const input = document.getElementById("resultsContainer");
    if (!(input instanceof HTMLElement)) return;

    // ✅ Use smaller scale for speed but still good quality
    const canvas = await html2canvas(input, {
      scale: 1.5, // lower = faster, 2 = sharper but slower
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgWidth = 595.28; // A4 width in pt
    const pageHeight = 841.89; // A4 height in pt
    const marginTop = 15;
    const marginBottom = 40;
    const usablePageHeight = pageHeight - marginTop - marginBottom;

    const pdf = new jsPDF("p", "pt", "a4");

    let yPosition = 0;
    let pageIndex = 0;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context from canvas.");
      return;
    }

    // ✅ Create one reusable canvas instead of new every loop
    const pageCanvas = document.createElement("canvas");
    const pageContext = pageCanvas.getContext("2d");

    while (yPosition < canvas.height) {
      let sliceHeight = (usablePageHeight * canvas.width) / imgWidth;

      if (yPosition + sliceHeight > canvas.height) {
        sliceHeight = canvas.height - yPosition;
      }

      let cutLine = yPosition + sliceHeight;
      const scanStep = 5; // ✅ scan fewer rows for speed
      const threshold = 250; // white tolerance

      // 🔎 Scan upwards from cutLine to find a white gap
      for (let y = cutLine; y > yPosition + 20; y -= scanStep) {
        const row = ctx.getImageData(0, y, canvas.width, 1).data;

        let whitePixels = 0;
        for (let i = 0; i < row.length; i += 4) {
          const r = row[i],
            g = row[i + 1],
            b = row[i + 2];
          if (r > threshold && g > threshold && b > threshold) {
            whitePixels++;
          }
        }

        if (whitePixels > canvas.width * 0.98) {
          cutLine = y;
          break;
        }
      }

      const actualSliceHeight = cutLine - yPosition;

      // 🚫 Skip tiny slices to avoid blank last page
      if (actualSliceHeight < 20) break;

      // ✅ Reuse canvas
      pageCanvas.width = canvas.width;
      pageCanvas.height = actualSliceHeight;
      if (pageContext) {
        pageContext.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
      } else {
        console.error("Failed to get 2D context from pageCanvas.");
        return;
      }

      pageContext.drawImage(
        canvas,
        0,
        yPosition,
        canvas.width,
        actualSliceHeight,
        0,
        0,
        canvas.width,
        actualSliceHeight
      );

      // ✅ JPEG is faster + smaller, quality = 0.8
      const imgData = pageCanvas.toDataURL("image/jpeg", 0.8);

      if (pageIndex > 0) pdf.addPage();

      const imgHeight = (actualSliceHeight * imgWidth) / canvas.width;
      pdf.addImage(imgData, "JPEG", 0, marginTop, imgWidth, imgHeight);

      yPosition += actualSliceHeight;
      pageIndex++;
    }

    pdf.save("Career-Aptitude-Test.pdf");
  };

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
    if (!results || Object.keys(results).length === 0)
      return { series: [], options: {} };
    const categories = Object.keys(results)
      .filter(
        (key) =>
          key.toLowerCase() !== "letters" && key.toLowerCase() !== "resultdata"
      )
      .map(
        (key) =>
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", "")
      );
  
    const dataPoints = categories
      .filter((category) => category.toLowerCase() !== "letters")
      .map((category, index) => {
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
          height: 400,
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
          labels: {
            style: {
              fontSize: "15px", // bigger numbers on x-axis
              fontWeight: 600,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "17px", // bigger category names on y-axis
              fontWeight: 600,
            },
          },
        },
        colors: barColors,
      },
    };
  };

  useEffect(() => {
    setIsLoading(true); // Ensure loading state is set before starting async operations
    Promise.all([fetchCatResult(), checkTestStatus()])
      .then(() => {
        setIsLoading(false); // Set loading to false when both functions have completed
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setIsLoading(false); // Ensure loading state is updated even if there's an error
      });
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3000);
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
                  <div className="container my-5">
                    <div className="row align-items-center text-center justify-between">
                      {/* Left Side - Title */}
                      <div className="col-12 col-md-8 mb-4 mb-md-0">
                        <h2 className="fw-bold display-5">
                          Career Aptitude Test
                        </h2>
                        <h2 className="mb-6 pb-25" style={{ fontSize: "40px" }}>
                      Quiz Result
                    </h2>
                      </div>
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

                      {/* Right Side - Contact Info */}
                      <div className="col-12 col-md-4">
                        <div className="p-2 rounded-4 shadow-sm bg-light">
                          <h5 className="mb-3">For Counseling:</h5>
                          <p className="mb-0 fs-5 fw-semibold">📞 7456000100</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                  
                    {/* Display the results here using the `results` state */}

                    <div className="row container justify-content-around">
                      <div className="chart-container col-12 col-md-6 col-lg-6">
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

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
    const button = document.getElementById("downloadBtn");
  
    if (!input) return;
  
    // 🔹 Hide button temporarily
    let buttonParent: Node | null = null;
    let buttonNextSibling: ChildNode | null = null;
    if (button) {
      buttonParent = button.parentNode;
      buttonNextSibling = button.nextSibling;
      if (buttonParent) buttonParent.removeChild(button);
    }
  
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff",
    });
    if (button && buttonParent) {
      if (buttonNextSibling) {
        buttonParent.insertBefore(button, buttonNextSibling);
      } else {
        buttonParent.appendChild(button);
      }
    }
    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const marginTop = 20,
      marginBottom = 20,
      marginLeft = 25,
      marginRight = 25;
    const usablePageWidth = pageWidth - marginLeft - marginRight;
    const usablePageHeight = pageHeight - marginTop - marginBottom;
  
    const pdf = new jsPDF("p", "pt", "a4");
    let yPosition = 0;
    let pageIndex = 0;
  
    // 🔹 Safe context
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;
  
    const pageCanvas = document.createElement("canvas");
    const pageContext = pageCanvas.getContext("2d");
  
    while (yPosition < canvas.height) {
      let sliceHeight = (usablePageHeight * canvas.width) / usablePageWidth;
      if (yPosition + sliceHeight > canvas.height) {
        sliceHeight = canvas.height - yPosition;
      }
  
      // --- Smart check: avoid cutting black text/images
      const buffer = 15; // adjust 15px area
      let adjustedSliceHeight = sliceHeight;
      if (yPosition + sliceHeight < canvas.height) {
        const imageData = ctx.getImageData(
          0,
          yPosition + sliceHeight - buffer,
          canvas.width,
          buffer
        );
  
        let hasDarkPixels = false;
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          if (r < 240 || g < 240 || b < 240) {
            hasDarkPixels = true;
            break;
          }
        }
  
        if (hasDarkPixels) {
          adjustedSliceHeight -= buffer; // move cut a bit up
        }
      }
  
      if (!pageContext) return;
      pageCanvas.width = canvas.width;
      pageCanvas.height = adjustedSliceHeight;
      pageContext.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
      pageContext.drawImage(
        canvas,
        0,
        yPosition,
        canvas.width,
        adjustedSliceHeight,
        0,
        0,
        canvas.width,
        adjustedSliceHeight
      );
  
      const imgData = pageCanvas.toDataURL("image/jpeg", 0.7);
  
      if (pageIndex > 0) pdf.addPage();
      const imgHeight =
        (adjustedSliceHeight * usablePageWidth) / canvas.width;
      pdf.addImage(
        imgData,
        "JPEG",
        marginLeft,
        marginTop,
        usablePageWidth,
        imgHeight,
        undefined,
        "FAST"
      );
  
      yPosition += adjustedSliceHeight;
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

    return () => clearTimeout(timer); // ✅ Cleanup the timer on unmount
  }, []);

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
              backgroundColor: "#f5f5f5", // ✅ fixed invalid "#125125125"
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
                <div className="container my-5">
                  <div className="row align-items-center text-center justify-between">
                    <div className="col-12 col-md-8">
                      <h1
                        className="fw-bold display-4"
                        style={{
                          color: "#13ADBD",
                          fontSize: "45px",
                          lineHeight: "1.4",
                          fontFamily: "'Georgia', serif",
                          fontStyle: "italic",
                        }}
                      >
                        Career Aptitude Test
                      </h1>
                      <h2
                        className="mb-3 pb-20 text-green"
                        style={{
                          fontSize: "28px",
                          lineHeight: "1.4",
                          color: "#0AAA40",
                          fontWeight: 600,
                          fontFamily: "'Georgia', serif",
                          fontStyle: "italic",
                        }}
                      >
                        Quiz Result
                      </h2>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="p-4 rounded-4 shadow-sm bg-light">
                        <h5
                          className="mb-3"
                          style={{
                            color: "#13ADBD",
                            fontSize: "20px",
                            lineHeight: "1.4",
                            fontWeight: 600,
                            fontFamily: "'Georgia', serif",
                            fontStyle: "italic",
                          }}
                        >
                          For Counseling:
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "20px",
                            lineHeight: "1",
                            color: "#0AAA40",
                            fontWeight: 600,
                            fontFamily: "'Georgia', serif",
                          }}
                        >
                          📞 7456000100
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 text-start">
                      <p
                        className="fw-500"
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.7",
                          color: "#333",
                          fontFamily: "'Georgia', serif",
                          fontStyle: "italic",
                        }}
                      >
                        This is a self-report inventory that assesses the
                        student’s traits, interests and suggests suitable
                        occupations. This CAT is based on Typological Theory,
                        which posits that most people can be loosely categorized
                        into six types - Realistic, Investigative, Artistic,
                        Social, Enterprising, and Conventional. It further
                        states that occupations and work environments also can
                        be classified by these categories. When people choose
                        careers that match their own types, they are most likely
                        to be both satisfied and successful. The purpose of this
                        test is to help you identify your occupational
                        personality, education options, and inform your decision
                        making process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center" style={{ marginTop: "-40px" }}>
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
                          color: "#13ADBD",
                          borderBottom: "1px solid grey",
                        }}
                      >
                        Top Scores
                      </h3>

                      {topThree.map((t, i) => (
                        <p
                          key={i}
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            fontFamily: "'Georgia', serif",
                            fontStyle: "italic",
                            color: "#0AAA40",
                          }}
                        >{`${
                          t.category.charAt(0).toUpperCase() +
                          t.category.slice(1).toLowerCase()
                        }: ${t.score}`}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Careers section */}
                <TopCareer topCategories={topThree.map((t) => t.category)} />
                <YourCareer code={results?.resultData} />

             
              </div>
              
            )}
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
        </div>
      )}
    </div>
  );
};
export default DashboardResult;

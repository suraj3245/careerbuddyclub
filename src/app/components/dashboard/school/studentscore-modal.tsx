import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./studentscore-modal.css";
import { ApexOptions } from "apexcharts";
import TopCareer from "../../top-company/top-career";
import YourCareer from "../../top-company/Your-career";
interface StudentScore {
  name: string;
  score: number;
}

interface Student {
  id: number;
  name: string;
  realistic_score: number | "N/A";
  investigative_score: number;
  artistic_score: number;
  social_score: number;
  enterprising_score: number;
  conventional_score: number;
  topThreeScores?: StudentScore[];
}

interface StudentScoreModalProps {
  show: boolean;
  student: Student | null;
  onClose: () => void;
}

const StudentScoreModal: React.FC<StudentScoreModalProps> = ({
  show,
  student,
  onClose,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

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

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/getcatresultbyid",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
      data: { studentId: student?.id },
    };
    try {
      const response = await axios.request(options);
      const resultData = response.data;
      setResults(resultData);
    } catch (error) {
      console.error("Error fetching cat result:", error);
    }
  };
  type TransformedResultType = {
    category: string;
    score: number;
  };
  const getTopThreeCategoryNames = () => {
    if (!results) return [];
    const transformedResults = Object.entries(results).map(([key, value]) => ({
      category:
        key.charAt(0).toUpperCase() + key.slice(1).replace("_score", ""),
      score: typeof value === "number" ? value : 0,
    }));
    return transformedResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((result) => result.category);
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
    return transformedResults.sort((a, b) => b.score - a.score).slice(0, 3);
  };
  const transformResultsToChartData = (): {
    series: ApexAxisChartSeries | [];
    options: ApexOptions | {};
  } => {
    if (!results || Object.keys(results).length === 0)
      return { series: [], options: {} };
    // Ensure that all necessary data points are numbers and defined
    const categories = Object.keys(results)
      .filter((key) => key.toLowerCase() !== "letters" && key.toLowerCase() !== "resultdata") // Exclude 'letters'
      .map(
        (key) =>
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", "")
      );
    const dataPoints = categories
      .filter(
        (key) =>
          ( key.toLowerCase() !== "resultdata" && key.toLowerCase() !== "resultdata")
      )
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
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
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
    Promise.all([fetchCatResult()])
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

    // Cleanup timeout if component unmounts before timeout completes
    return () => clearTimeout(timer);
  }, []);
  const chartData = transformResultsToChartData();
  if (showLoader || isLoading) {
    return (
      <>
      </>
    );
  }

  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div ref={modalContentRef}>
          {student ? (
            student.realistic_score !== "N/A" ? (
              <>
                <div
                  id="resultsContainer"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="container my-5">
                      <div className="row align-items-center text-center justify-between">
                        {/* Left Side - Title */}
                        <div className="col-12 col-md-8 mb-4">
                          <h1
                            className="fw-bold display-5"
                            style={{ color: "#13ADBD" }}
                          >
                            Career Aptitude Test
                          </h1>
                          <h2
                            className="mb-6 pb-20"
                            style={{ fontSize: "23px" }}
                          >
                            Quiz Results of {student?.name}
                          </h2>
                        </div>
                        
                        {/* Right Side - Contact Info */}
                        <div className="col-12 col-md-4">
                          <div className="p-2 rounded-4 shadow-sm bg-light">
                            <h5 className="mb-3">For Counseling:</h5>
                            <p className="mb-0 fs-5 fw-semibold">
                              📞 7456000100
                            </p>
                          </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* Display the results here using the `results` state */}

                    <div className="row d-flex justify-content-center">
                      <div className="chart-container col-md-6 col-lg-6">
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
                      <div className="top-scores col-lg-4 col-md-6">
                        <h3>Top Scores</h3>
                        {getTopThreeScores().map((result, index) => (
                          <p
                            key={index}
                          >{`${result.category}: ${result.score}`}</p>
                        ))}
                      </div>
                    </div>

                    <TopCareer topCategories={getTopThreeCategoryNames()} />
                    {/* <YourCareer /> */}
                    <YourCareer code={results?.letters} />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h2
                  className="mt-2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "rgb(0, 150, 136)", // Teal accent for sophistication
                  }}
                >
                  Quiz Result of {student?.name}
                </h2>
                <p className="text-start">
                  This is a self-report inventory that assesses the student’s
                  traits, interests and suggests suitable occupations. This CAT
                  is based on the Typological Theory, which posits that most
                  people can be loosely categorized into six types - Realistic,
                  Investigative, Artistic , Social, Enterprising, and
                  Conventional. It further states that occupations and work
                  environments also can be classified by these categories. When
                  people choose careers that match their own types, they are
                  most likely to be both satisfied and successful. The purpose
                  of this test is to help you identify your occupational
                  personality, education options, and inform your decision
                  making process.
                </p>
                {/* Display the results here using the `results` state */}
                <div
                className="row rounded-5 d-flex flex-row justify-content-center align-items-center mt-3"
                style={{ border: "1px solid black" }}
              >
                <div
                  className="chart-container"
                  style={{ flex: 2, minWidth: "300px" }}
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
                      borderBottom: "1px solid grey",
                    }}
                  >
                    Top Scores
                  </h3>
                  {getTopThreeScores().map((t, i) => (
                    <p key={i} style={{ fontSize: "18px", color: "green" }}>{`${
                      t.category.charAt(0).toUpperCase() +
                      t.category.slice(1).toLowerCase()
                    }: ${t.score}`}</p>
                  ))}
                </div>
              </div>

                <TopCareer topCategories={getTopThreeCategoryNames()} />
                {/* <YourCareer /> */}
                <YourCareer code={results?.resultData} />
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
                className="download-btn tran3s me-3"
                onClick={downloadResultsAsPDF}
              >
                Download Results
              </button>
            </div>
          </>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StudentScoreModal;

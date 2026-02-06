import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TopCareer from "../../top-company/top-career";
import YourCareer from "../../top-company/Your-career";
import { ApexOptions } from "apexcharts";

interface Student {
  id: number;
  name: string;
  realistic_score: number | "N/A";
  investigative_score: number;
  artistic_score: number;
  social_score: number;
  enterprising_score: number;
  conventional_score: number;
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

  const barColors = ["#FF4560", "#00E396", "#008FFB", "#775DD0", "#FEB019"];

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
  pdf.save(`${student?.name || "Student"}_CAT_Result.pdf`);
};

  
  // Fetch student CAT results
  const fetchCatResult = async () => {
    const token = localStorage.getItem("token");
    if (!token || !student) return;

    try {
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getcatresultbyid",
        { studentId: student.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResults(response.data);
    } catch (err) {
      console.error("Error fetching CAT result:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const getTopThreeScores = () => {
    if (!results) return [];
    return Object.entries(results)
      .map(([key, value]) => ({
        category:
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", ""),
        score: typeof value === "number" ? value : 0,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const getTopThreeCategoryNames = () =>
    getTopThreeScores().map((item) => item.category);

  const transformResultsToChartData = (): {
    series: any;
    options: ApexOptions;
  } => {
    if (!results) return { series: [], options: {} };

    const categories = Object.keys(results)
      .filter((key) => !["letters", "resultdata"].includes(key.toLowerCase()))
      .map(
        (key) =>
          key.charAt(0).toUpperCase() + key.slice(1).replace("_score", "")
      );

    const dataPoints = categories.map((category, index) => {
      const key = category.toLowerCase() + "_score";
      const value = results[key] ?? 0;
      return {
        x: category,
        y: Number(value),
        fillColor: barColors[index % barColors.length],
      };
    });

    return {
      series: [{ name: "Score", data: dataPoints }],
      options: {
        chart: { type: "bar", height: 350 },
        plotOptions: { bar: { borderRadius: 4, horizontal: true } },
        dataLabels: { enabled: false },
        xaxis: {
          categories,
          labels: { style: { fontSize: "15px", fontWeight: 600 } },
        },
        yaxis: { labels: { style: { fontSize: "17px", fontWeight: 600 } } },
        colors: barColors,
      },
    };
  };

  useEffect(() => {
    if (show && student) fetchCatResult();
  }, [show, student]);

  const chartData = transformResultsToChartData();

  // Don't render modal until data is loaded
  if (isLoading || !results) return null;

  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton />
      <Modal.Body ref={modalContentRef}>
        <>
          {student && student.realistic_score !== "N/A" && (
            <div
              id="resultsContainer"
              style={{ position: "relative", zIndex: 1 }}
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
                      Result of {student.name}
                    </h2>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="p-2 rounded-4 shadow-sm bg-light">
                      <h5
                        className="mb-3"
                        style={{
                          color: "#13ADBD",
                          fontSize: "20px",
                          lineHeight: "1.7",
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
                          lineHeight: "1.7",
                          color: "#0AAA40",
                          fontWeight: 600,
                          fontFamily: "'Georgia', serif",
                        }}
                      >
                        📞 7456000100
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 text-start container">
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

              <div
                className="row d-flex justify-content-center gap-3 align-items-center text-center"
                style={{ marginTop: "-40px" }}
              >
                <div className="chart-container col-md-7 col-lg-7">
                  {results && (
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="bar"
                      width="100%"
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
                  {getTopThreeScores().map((result, i) => (
                    <p
                      key={i}
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontFamily: "'Georgia', serif",
                        fontStyle: "italic",
                        color: "#0AAA40",
                      }}
                    >{`${result.category}: ${result.score}`}</p>
                  ))}
                </div>
              </div>

              <TopCareer topCategories={getTopThreeCategoryNames()} />
              <YourCareer code={results?.resultData} />
            </div>
          )}
          <div className="text-center mt-4">
            <button
              className="download-btn m-auto rounded-5"
              onClick={downloadResultsAsPDF}
              style={{
                backgroundColor: "#13ADBD",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Download Result
            </button>
          </div>
        </>
      </Modal.Body>
    </Modal>
  );
};

export default StudentScoreModal;

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
    pdf.save(`CAT_Results_${student?.name}.pdf`);
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
          <>
            <div
              id="resultsContainer"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="text-center" style={{ flex: 1 }}>
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
                  {/* Centered Header */}
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

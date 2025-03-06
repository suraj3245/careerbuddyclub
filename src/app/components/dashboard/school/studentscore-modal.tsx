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

    // Sort and get the top three scores
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
      .filter((key) => key.toLowerCase() !== "letters") // Exclude 'letters'
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
          style={{ width: "300px", height: "300px" }} // Adjust size as needed
        ></iframe>
      </div>
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
                    <div className="text-center" style={{ flex: 1 }}>
                      <h2 className="mb-4 pb-6" style={{ fontSize: "28px" }}>
                        Career Aptitude Test
                      </h2>
                      {/* Centered Header */}
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="mb-6 pb-20" style={{ fontSize: "23px" }}>
                      Quiz Results of {student?.name}
                    </h2>
                    {/* Display the results here using the `results` state */}

                    <div className="row d-flex justify-content-center">
                      <div className="chart-container col-lg-8 col-md-12">
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
            ) : (
              <div
                id="resultsContainer"
                style={{ position: "relative", zIndex: 1 }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="text-center" style={{ flex: 1 }}>
                    <h2 className="mb-4 pb-6" style={{ fontSize: "40px" }}>
                      Career Aptitude Test
                    </h2>
                    {/* Centered Header */}
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="mb-6 pb-20" style={{ fontSize: "30px" }}>
                    Quiz Results of {student?.name}
                  </h2>
                </div>
                <div
                  className="text-center text-primary"
                  style={{ fontSize: "20px" }}
                >
                  Career aptitude test data is unavailable. Please ensure the
                  student completes the test. Thank you.
                </div>
              </div>
            )
          ) : (
            <div className="text-center text-primary">
              No student data available
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StudentScoreModal;

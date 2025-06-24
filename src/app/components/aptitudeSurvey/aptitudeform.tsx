"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopCareer from "../top-company/top-career";
import YourCareer from "../top-company/Your-career";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { isUserLoggedIn } from "@/utils/auth";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
type Question = {
  id: number;
  question: string;
  type: string;
};

const defaultOptions = ["Dislike", "Neutral", "Enjoy"];

const QuizForm: React.FC = () => {
  isUserLoggedIn();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [testStatus, setTestStatus] = useState("");
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    // Assuming you need the token to fetch the results
    const fetchToken = async () => {
      const fetchedToken = localStorage.getItem("token");
      if (fetchedToken) {
        setToken(fetchedToken);
        await fetchCatResult(fetchedToken);
      }
    };

    fetchToken();
  }, [isSubmitted]);
  const fetchCatResult = async (token: string) => {
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
      setResults(resultData);
    } catch (error) {
      console.error("Error fetching cat result:", error);
    }
  };

  const checkTestStatus = async () => {
    const token = localStorage.getItem("token"); // Retrieve the stored token
    if (!token) {
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

    try {
      const response = await axios.request(options);
      if (response.data.message === "Test not completed") {
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error checking test status:", error);
    }
  };
  useEffect(() => {
    checkTestStatus();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const temptoken = localStorage.getItem("token");

      setToken(temptoken);

      const options = {
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getallcatquestions",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${temptoken}`,
          "Content-Type": "application/json",
        },
        data: {},
      };

      try {
        const response = await axios.request(options);
        setQuestions(
          response.data.map((item: any) => ({
            id: item.id,
            question: item.question,
            type: item.type,
          }))
        );
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const progress = ((currentPage + 1) / totalPages) * 100;

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: number
  ) => {
    setAnswers({
      ...answers,
      [questionId]: event.target.value,
    });
  };
  const areAllQuestionsAnsweredOnPage = () => {
    return questions
      .slice(
        currentPage * questionsPerPage,
        (currentPage + 1) * questionsPerPage
      )
      .every((question) => answers.hasOwnProperty(question.id));
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!areAllQuestionsAnsweredOnPage()) {
      toast.error("answer all question to go to next page", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!areAllQuestionsAnsweredOnPage()) {
      return;
    }

    try {
      const defaultOptions = ["Dislike", "Neutral", "Enjoy"];

      const formattedAnswers = Object.entries(answers).map(
        ([questionId, answer]) => ({
          questionId: parseInt(questionId, 10),
          score: defaultOptions.indexOf(answer),
          type:
            questions.find(
              (question) => question.id === parseInt(questionId, 10)
            )?.type || "R",
        })
      );

      const submitOptions = {
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/submitcatanswers",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          answers: formattedAnswers,
        },
      };

      const response = await axios.request(submitOptions);
      setIsSubmitted(true);
      localStorage.setItem("testStatus", "Test completed");
      localStorage.setItem("quizSubmitted", "true");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  const isLastPage = currentPage === totalPages - 1;

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
    const categories = Object.keys(results)
      .filter(
        (key) =>
          key.toLowerCase() !== "letters" && key.toLowerCase() !== "resultdata"
      ) // Exclude 'letters'
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
  const chartData = transformResultsToChartData();

  return (
    <div style={{ backgroundColor: "white", position: "relative", zIndex: 0 }}>
      {isSubmitted && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      {!isSubmitted && testStatus !== "Test completed" ? (
        <form onSubmit={handleSubmit} className="flex flex-col p-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-center" style={{ flex: 1 }}>
              <h2
                className="mt-2"
                style={{
                  fontSize: "50px",
                  background:
                    "linear-gradient(270deg, #ff416c, #ff4b2b, #1e90ff, #32cd32, #ffcc00, #ff416c)",
                  backgroundSize: "1200% 1200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 10s linear infinite", // Slow down the animation here
                }}
              >
                Career Aptitude Test
              </h2>
              <style jsx>{`
                @keyframes gradientMove {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
              `}</style>
              {/* Centered Header */}
            </div>
          </div>

          <div>
            {Array.isArray(questions) &&
              questions
                .slice(
                  currentPage * questionsPerPage,
                  (currentPage + 1) * questionsPerPage
                )
                .map((question) => (
                  <div
                    key={question.id}
                    className="mb-10 p-2 border border-#EEE30D rounded  bg-gray-100"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <p
                      className="font-small mb-1 pb-10"
                      style={{ color: "#13ADBD" }}
                    >
                      {question.id}. {question.question}
                    </p>
                    <div
                      className="flex flex-col "
                      style={{ paddingLeft: "20px" }}
                    >
                      {defaultOptions.map((option) => (
                        <label
                          key={option}
                          className="inline-flex items-center mb-1 "
                          style={{ paddingRight: 20 }}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            onChange={(e) => handleOptionChange(e, question.id)}
                            checked={answers[question.id] === option}
                            className="form-radio text-blue-600"
                            style={{ paddingRight: 20 }}
                          />
                          <span className="ml-2" style={{ marginLeft: "10px" }}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "inline-block",
              width: "100%",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            {currentPage > 0 && (
              <button
                type="button"
                onClick={goToPreviousPage}
                className="text-uppercase btn-five border6"
                style={{ marginRight: "10px" }}
              >
                Previous
              </button>
            )}
            {!isLastPage && (
              <button
                type="button"
                onClick={goToNextPage}
                className="text-uppercase btn-five border6"
              >
                Next
              </button>
            )}
            {isLastPage && (
              <>
                <button
                  type="submit"
                  className="text-uppercase btn-five border6"
                  disabled={loading}
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    ></span>
                  )}
                  {loading ? "" : "SUBMIT"}
                </button>
              </>
            )}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "10px", // Center horizontally
            }}
          >
            <div
              style={{
                width: "300px", // Set the width of the progress bar
                height: "8px", // Set the height of the progress bar
                backgroundColor: "#13ADBD", // Set the color of the progress bar
                borderRadius: "4px", // Set border radius for rounded corners
                position: "relative",
              }}
            >
              <div
                style={{
                  width: `${progress}%`, // Set the width based on the progress
                  height: "100%",
                  backgroundColor: "#00A86B", // Set the color of the filled progress
                  borderRadius: "4px", // Set border radius for rounded corners
                }}
              ></div>
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Progress: {currentPage + 1}/{totalPages}
            </div>
          </div>
        </form>
      ) : (
        <div
          id="resultsContainer"
          style={{ position: "relative", zIndex: 1 }}
          className="container mx-auto"
        >
          <div className="d-flex align-items-center justify-content-between mt-4">
            <div className="text-center mt-3" style={{ flex: 1 }}>
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
              <div className="col-md-12 mt-2">
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
              </div>
              {/* Display the results here using the `results` state */}
              <div
                className="row rounded-5 d-flex flex-row justify-content-center align-items-center"
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

              <YourCareer code={results?.resultData} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <button
                  className="dash-btn-two tran3s me-3 fw-bold"
                  onClick={downloadResultsAsPDF}
                >
                  Download Your Result
                </button>
                <Link href="/dashboard/candidate-dashboard/profile">
                  <button className="btn-five tran3s me-3">Next Steps</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizForm;

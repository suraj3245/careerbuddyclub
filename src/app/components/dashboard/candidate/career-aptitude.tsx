"use client";

import DashboardHeader from "./dashboard-header";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
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
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
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
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
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
        console.log(response.data);
        // Update this according to the actual response structure
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

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

      // Handle the response from the server as needed
      console.log("Submit Response:", response.data);
      setResults(response.data);
      setIsSubmitted(true);
      // localStorage.setItem("quizSubmitted", "true");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  const isLastPage = currentPage === totalPages - 1;
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
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
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                />
              </div>
            )}
            {!isSubmitted && testStatus !== "Test completed" ? (
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
                    <h2
                      className="mb-6 pb-10 pt-80"
                      style={{ color: "#13ADBD" }}
                    >
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

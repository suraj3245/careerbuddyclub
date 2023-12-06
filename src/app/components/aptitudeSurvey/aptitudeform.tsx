"use client";

import React, { useRef, useState, useEffect } from "react";
import logo from "@/assets/images/logo/logo4.png";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Question = {
  id: number;
  question: string;
  type: string;
};

const defaultOptions = ["Dislike", "Neutral", "Enjoy"];

const QuizForm: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // const [results, setResults] = useState<any | null>({
  //   R: 17,
  //   A: 15,
  //   S: 15,
  //   E: 15,
  //   C: 15,
  //   I: 13,
  // });
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const temptoken = localStorage.getItem("token");

      setToken(temptoken);

      const options = {
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getallcatquestions",
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

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //      event.preventDefault();
  //  const allAnswered = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)
  //                                   .every(question => answers.hasOwnProperty(question.id));
  //     if (!allAnswered) {
  //       alert('Please answer all questions before submitting.');
  //       return;
  //     }
  //     console.log('Collected Answers:', answers);
  //     // Process the answers here (e.g., send to an API or store them)
  //   };
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!areAllQuestionsAnsweredOnPage()) {
      toast.error("answer all question to go to next page", {
        position: "top-left",
        autoClose: 5000,
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
        url: "http://54.224.161.134:8080/api/students/submitcatanswers",
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
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div
      style={{ backgroundColor: "#cfeef1", position: "relative", zIndex: 0 }}
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
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4  items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-center" style={{ flex: 1 }}>
              <h2 className="mb-6 pb-10 pt-60 " style={{ color: "#13ADBD" }}>
                Career Aptitude Test
              </h2>
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
                onClick={goToPreviousPage}
                className="text-uppercase btn-five border6"
                style={{ marginRight: "10px" }}
              >
                Previous
              </button>
            )}
            {!isLastPage && (
              <button
                onClick={goToNextPage}
                className="text-uppercase btn-five border6"
              >
                Next
              </button>
            )}
            {isLastPage && (
              <button type="submit" className="text-uppercase btn-five border6">
                Submit
              </button>
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
                marginLeft: "10px", // Add margin for spacing
              }}
            >
              Progress: {currentPage + 1}/{totalPages}
            </div>
          </div>
        </form>
      ) : (
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-center" style={{ flex: 1 }}>
              <h2 className="mb-6 pb-10 pt-80" style={{ color: "#13ADBD" }}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Link href="/">
                <button className="btn-apti pt-50">Next Steps</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizForm;

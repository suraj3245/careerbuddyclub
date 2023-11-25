"use client";

import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo/logo4.png";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

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

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        url: "http://172.33.0.54:8000/api/students/getallcatquestions",
        headers: {
          Accept: "*/*",
          Authorization:
            "Bearer 46|uyFbB1AqVL1eBWFhXYuEKFOzrMe7sy1K45okI9Sueaf54ec3",
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
      alert("Please answer all questions on this page.");
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!areAllQuestionsAnsweredOnPage()) {
      alert("Please answer all questions on this page before submitting.");
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
        url: "http://172.33.0.54:8000/api/students/submitcatanswers",
        headers: {
          Accept: "*/*",
          Authorization:
            "Bearer 46|uyFbB1AqVL1eBWFhXYuEKFOzrMe7sy1K45okI9Sueaf54ec3",
          "Content-Type": "application/json",
        },
        data: {
          answers: formattedAnswers,
        },
      };

      const response = await axios.request(submitOptions);

      // Handle the response from the server as needed
      console.log("Submit Response:", response.data);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  const isLastPage = currentPage === totalPages - 1;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4  items-center"
      style={{ backgroundColor: "#cfeef1" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo order-lg-0">
          <Link href="/" className="d-flex align-items-center">
            <Image src={logo} alt="logo" width="125" height="75" priority />
          </Link>
        </div>
        <div className="text-center" style={{ flex: 1 }}>
          <h2 className="mb-6 pb-10" style={{ color: "#13ADBD" }}>
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
                <div className="flex flex-col " style={{ paddingLeft: "20px" }}>
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
  );
};

export default QuizForm;

"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import TopCareer from "../components/top-company/top-career";
import YourCareer from "../components/top-company/Your-career";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://test.careerbuddyclub.com:8080/api"
).replace(/\/+$/, "");

const API = {
  status: `${API_BASE_URL}/students/checkcareerteststatus`,
  questions: `${API_BASE_URL}/students/getallcatquestions`,
  result: `${API_BASE_URL}/students/getcatresult`,
  submit:
    process.env.NEXT_PUBLIC_SUBMIT_CAT_ANSWERS_URL ||
    `${API_BASE_URL}/students/submitcatanswers`,
};

const OPTIONS = ["Dislike", "Neutral", "Enjoy"] as const;
const QUESTIONS_PER_PAGE = 5;

const BAR_COLORS = [
  "#FF4560",
  "#00E396",
  "#008FFB",
  "#775DD0",
  "#FEB019",
  "#26A69A",
];

type Question = {
  id: number;
  question: string;
  type: string;
};

type Score = {
  category: string;
  score: number;
};

type ResultPayload = Record<string, unknown> & {
  resultData?: unknown;
};

function getErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: unknown } | undefined;

    if (typeof data?.message === "string" && data.message.trim()) {
      return data.message;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

function normalizeQuestions(data: unknown): Question[] {
  let items: unknown[] | null = null;

  if (Array.isArray(data)) {
    items = data;
  } else if (
    data &&
    typeof data === "object" &&
    "questions" in data &&
    Array.isArray((data as { questions: unknown[] }).questions)
  ) {
    items = (data as { questions: unknown[] }).questions;
  }

  if (!items) {
    throw new Error("The questions API returned an unexpected response.");
  }

  const questions = items
    .filter(
      (item): item is Record<string, unknown> =>
        !!item &&
        typeof item === "object" &&
        Number.isFinite(Number((item as Record<string, unknown>).id)) &&
        typeof (item as Record<string, unknown>).question === "string",
    )
    .map((item) => ({
      id: Number(item.id),
      question: String(item.question),
      type: String(item.type || "R"),
    }));

  if (questions.length === 0) {
    throw new Error("No questions are available right now.");
  }

  return questions;
}

function normalizeResults(data: unknown): ResultPayload {
  let payload = data;

  if (
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    (payload as { data?: unknown }).data &&
    typeof (payload as { data?: unknown }).data === "object"
  ) {
    payload = (payload as { data: unknown }).data;
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("The results API returned an unexpected response.");
  }

  return payload as ResultPayload;
}

const QuizForm: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentPage, setCurrentPage] = useState(0);

  const [token, setToken] = useState<string | null>(null);
  const [testStatus, setTestStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [results, setResults] = useState<ResultPayload | null>(null);

  const [pageLoading, setPageLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const isLastPage = totalPages > 0 && currentPage === totalPages - 1;
  const currentQuestions = useMemo(
    () =>
      questions.slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE,
      ),
    [questions, currentPage],
  );

  const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  const requestConfig = useCallback((authToken: string) => {
    return {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    };
  }, []);

  const fetchQuestions = useCallback(
    async (authToken: string) => {
      const response = await axios.post(
        API.questions,
        {},
        requestConfig(authToken),
      );

      const normalizedQuestions = normalizeQuestions(response.data);

      setQuestions(normalizedQuestions);
      setCurrentPage(0);
    },
    [requestConfig],
  );

  const fetchResults = useCallback(
    async (authToken: string) => {
      setResultsLoading(true);

      try {
        const response = await axios.post(
          API.result,
          {},
          requestConfig(authToken),
        );

        const normalizedResults = normalizeResults(response.data);

        setResults(normalizedResults);
        setErrorMessage("");
      } finally {
        setResultsLoading(false);
      }
    },
    [requestConfig],
  );

  const initialize = useCallback(async () => {
    setPageLoading(true);
    setErrorMessage("");

    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        throw new Error("Your session has expired. Please log in again.");
      }

      setToken(storedToken);

      const statusResponse = await axios.post(
        API.status,
        {},
        requestConfig(storedToken),
      );

      const completed = statusResponse.data?.message !== "Test not completed";

      if (completed) {
        setTestStatus("Test completed");
        setIsSubmitted(true);
        setPageLoading(false);

        try {
          await fetchResults(storedToken);
        } catch (error) {
          setErrorMessage(
            getErrorMessage(
              error,
              "Your test is complete, but the results could not be loaded.",
            ),
          );
        }
      } else {
        setTestStatus("Test not completed");
        setIsSubmitted(false);

        await fetchQuestions(storedToken);
      }
    } catch (error) {
      setErrorMessage(
        getErrorMessage(
          error,
          "Unable to load the assessment. Please try again.",
        ),
      );
    } finally {
      setPageLoading(false);
    }
  }, [fetchQuestions, fetchResults, requestConfig]);

  useEffect(() => {
    let active = true;

    const run = async () => {
      setPageLoading(true);
      setErrorMessage("");

      try {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
          throw new Error("Your session has expired. Please log in again.");
        }

        if (!active) return;

        setToken(storedToken);

        const statusResponse = await axios.post(
          API.status,
          {},
          requestConfig(storedToken),
        );

        if (!active) return;

        const completed = statusResponse.data?.message !== "Test not completed";

        if (completed) {
          setTestStatus("Test completed");
          setIsSubmitted(true);
          setPageLoading(false);
          setResultsLoading(true);

          try {
            const resultResponse = await axios.post(
              API.result,
              {},
              requestConfig(storedToken),
            );

            if (!active) return;

            setResults(normalizeResults(resultResponse.data));
          } catch (error) {
            if (active) {
              setErrorMessage(
                getErrorMessage(
                  error,
                  "Your test is complete, but the results could not be loaded.",
                ),
              );
            }
          } finally {
            if (active) setResultsLoading(false);
          }
        } else {
          setTestStatus("Test not completed");
          setIsSubmitted(false);

          const questionResponse = await axios.post(
            API.questions,
            {},
            requestConfig(storedToken),
          );

          if (!active) return;

          setQuestions(normalizeQuestions(questionResponse.data));
        }
      } catch (error) {
        if (active) {
          setErrorMessage(
            getErrorMessage(
              error,
              "Unable to load the assessment. Please try again.",
            ),
          );
        }
      } finally {
        if (active) setPageLoading(false);
      }
    };

    void run();

    return () => {
      active = false;
    };
  }, [requestConfig]);

  const handleOptionChange = (questionId: number, value: string) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: value,
    }));
  };

  const areCurrentQuestionsAnswered = () =>
    currentQuestions.every((question) => Boolean(answers[question.id]));

  const goToNextPage = () => {
    if (!areCurrentQuestionsAnswered()) {
      toast.error(
        "Please answer every question on this page before continuing.",
      );
      return;
    }

    setCurrentPage((page) => Math.min(page + 1, Math.max(totalPages - 1, 0)));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) return;

    if (!token) {
      toast.error("Your session has expired. Please log in again.");
      return;
    }

    const firstUnansweredIndex = questions.findIndex(
      (question) => !answers[question.id],
    );

    if (firstUnansweredIndex !== -1) {
      setCurrentPage(Math.floor(firstUnansweredIndex / QUESTIONS_PER_PAGE));

      toast.error("Please answer all questions before submitting.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      const formattedAnswers = questions.map((question) => ({
        questionId: question.id,
        score: OPTIONS.indexOf(
          answers[question.id] as (typeof OPTIONS)[number],
        ),
        type: question.type || "R",
      }));

      await axios.post(
        API.submit,
        { answers: formattedAnswers },
        requestConfig(token),
      );

      localStorage.setItem("testStatus", "Test completed");
      localStorage.setItem("quizSubmitted", "true");

      setTestStatus("Test completed");
      setIsSubmitted(true);
      setResults(null);

      try {
        await fetchResults(token);
      } catch (error) {
        setErrorMessage(
          getErrorMessage(
            error,
            "Your answers were submitted, but we couldn't load your results.",
          ),
        );
      }
    } catch (error) {
      console.error("Error submitting career aptitude test:", error);

      toast.error(
        getErrorMessage(
          error,
          "Could not submit your answers. Please try again.",
        ),
      );
    } finally {
      setSubmitting(false);
    }
  };

  const scoreItems: Score[] = useMemo(() => {
    if (!results) return [];

    return Object.entries(results)
      .filter(
        ([key, value]) =>
          /_score$/i.test(key) &&
          (typeof value === "number" ||
            (typeof value === "string" &&
              value.trim() !== "" &&
              Number.isFinite(Number(value)))),
      )
      .map(([key, value]) => ({
        category: key
          .replace(/_score$/i, "")
          .replace(/^./, (letter) => letter.toUpperCase()),
        score: Number(value),
      }))
      .filter((item) => Number.isFinite(item.score))
      .sort((a, b) => b.score - a.score);
  }, [results]);

  const chartSeries: ApexAxisChartSeries = useMemo(
    () => [
      {
        name: "Score",
        data: scoreItems.map((item, index) => ({
          x: item.category,
          y: item.score,
          fillColor: BAR_COLORS[index % BAR_COLORS.length],
        })),
      },
    ],
    [scoreItems],
  );

  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        toolbar: { show: false },
        fontFamily: "inherit",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: "13px",
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
            fontWeight: 600,
          },
        },
      },
      colors: BAR_COLORS,
      noData: {
        text: "No score data available",
      },
    }),
    [],
  );

  const downloadResultsAsPDF = async () => {
    const element = document.getElementById("resultsContainer");

    if (!element || downloadingPdf) return;

    setDownloadingPdf(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        ignoreElements: (node) =>
          node.id === "downloadBtn" || node.id === "resultActions",
      });

      const pdf = new jsPDF("p", "pt", "a4");
      const margin = 24;

      const pageWidth = pdf.internal.pageSize.getWidth() - margin * 2;

      const pageHeight = pdf.internal.pageSize.getHeight() - margin * 2;

      const sourceSliceHeight = (pageHeight * canvas.width) / pageWidth;

      let sourceY = 0;
      let page = 0;

      while (sourceY < canvas.height) {
        const sliceHeight = Math.min(
          sourceSliceHeight,
          canvas.height - sourceY,
        );

        const sliceCanvas = document.createElement("canvas");

        sliceCanvas.width = canvas.width;
        sliceCanvas.height = Math.max(1, Math.floor(sliceHeight));

        const context = sliceCanvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to create the PDF canvas.");
        }

        context.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sliceCanvas.height,
          0,
          0,
          canvas.width,
          sliceCanvas.height,
        );

        const image = sliceCanvas.toDataURL("image/jpeg", 0.88);

        const imageHeight = (sliceCanvas.height * pageWidth) / canvas.width;

        if (page > 0) pdf.addPage();

        pdf.addImage(
          image,
          "JPEG",
          margin,
          margin,
          pageWidth,
          Math.min(imageHeight, pageHeight),
          undefined,
          "FAST",
        );

        sourceY += sliceCanvas.height;
        page += 1;
      }

      pdf.save("Career-Aptitude-Test.pdf");
    } catch (error) {
      console.error("PDF export failed:", error);
      toast.error("Could not create the PDF. Please try again.");
    } finally {
      setDownloadingPdf(false);
    }
  };

  const showLoader = pageLoading || submitting || resultsLoading;

  const loaderText = pageLoading
    ? "Loading assessment..."
    : submitting
      ? "Submitting your answers..."
      : "Preparing your results...";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <style jsx>{`
        .simple-loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.88);
          color: #13adbd;
          font-size: 23px;
          font-weight: 600;
        }

        .simple-loader-spinner {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border: 3px solid #d9f2f4;
          border-top-color: #13adbd;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .answer-options {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 16px;
          padding: 2px 0 2px 8px;
          overflow-x: auto;
        }

        .answer-option {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          cursor: pointer;
          margin: 0;
        }

        .answer-option input {
          margin: 0;
          flex-shrink: 0;
          cursor: pointer;
        }

        .question-card {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #fff;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 480px) {
          .answer-options {
            gap: 16px;
            padding-left: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .simple-loader-spinner {
            animation-duration: 1.5s;
          }
        }
      `}</style>

      {showLoader && (
        <div className="simple-loader-overlay" role="status" aria-live="polite">
          {/* Student-friendly loader */}
          <div
            role="status"
            aria-live="polite"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {/* Animated student mascot */}
            <div
              style={{
                fontSize: "76px",
                lineHeight: 1,
                animation: "studentBounce 1s ease-in-out infinite",
              }}
            >
              🧑‍🎓
            </div>

            {/* Books */}
            <div
              style={{
                fontSize: "32px",
                marginTop: "12px",
                animation: "bookFloat 1.5s ease-in-out infinite",
              }}
            >
              📚
            </div>

            <h3
              style={{
                color: "#13ADBD",
                fontSize: "23px",
                fontWeight: 700,
                marginTop: "22px",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {loaderText || "Getting things ready..."}
            </h3>

            <p
              style={{
                color: "#667085",
                fontSize: "15px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Just a moment! Your career journey is loading.
            </p>

            {/* Animated progress indicator */}
            <div
              style={{
                width: "220px",
                maxWidth: "80%",
                height: "6px",
                backgroundColor: "#E5F4F5",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "24px",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "100%",
                  borderRadius: "20px",
                  backgroundColor: "#13ADBD",
                  animation: "loadingSlide 1.2s ease-in-out infinite alternate",
                }}
              />
            </div>

            {/* Inline keyframes */}
            <style>
              {`
      @keyframes studentBounce {
        0%, 100% {
          transform: translateY(0) rotate(-3deg);
        }
        50% {
          transform: translateY(-12px) rotate(3deg);
        }
      }

      @keyframes bookFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes loadingSlide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(150%);
        }
      }
    `}
            </style>
          </div>
          <span>{loaderText}</span>
        </div>
      )}

      {isSubmitted && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Confetti recycle={false} numberOfPieces={180} />
        </div>
      )}

      {!pageLoading && errorMessage && (
        <div
          role="alert"
          style={{
            maxWidth: "100vw",
            margin: "40px auto",
            padding: 24,
            textAlign: "center",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <p style={{ color: "#b42318", marginBottom: 16 }}>{errorMessage}</p>

          <button
            type="button"
            className="text-uppercase btn-five border6"
            onClick={() => void initialize()}
          >
            Try again
          </button>
        </div>
      )}

      {!pageLoading &&
        !isSubmitted &&
        testStatus !== "Test completed" &&
        !errorMessage && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-4"
            style={{ maxWidth: "100vw", margin: "0 auto" }}
          >
            <h1
              className="mt-2"
              style={{
                textAlign: "center",
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 700,
                color: "#075985",
                letterSpacing: "-0.8px",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Career Aptitude Test
            </h1>
            {currentQuestions.map((question) => (
              <section key={question.id} className="question-card">
                <p
                  style={{
                    color: "#13adbd",
                    fontWeight: 600,
                    fontSize: 18,
                    marginBottom: 18,
                  }}
                >
                  {question.id}. {question.question}
                </p>

                <div
                  className="answer-options"
                  role="radiogroup"
                  aria-label={`Answers for question ${question.id}`}
                >
                  {OPTIONS.map((option) => (
                    <label key={option} className="answer-option">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </section>
            ))}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-start",
                alignItems: "center",
                gap: 12,
                marginTop: 8,
              }}
            >
              {/* Previous button */}
              {currentPage > 0 && (
                <button
                  type="button"
                  onClick={goToPreviousPage}
                  className="text-uppercase btn-five border6"
                  disabled={submitting}
                >
                  Previous
                </button>
              )}

              {/* Next button: only before the last page */}
              {!isLastPage && (
                <button
                  type="button"
                  onClick={goToNextPage}
                  className="text-uppercase btn-five border6"
                  disabled={submitting}
                >
                  Next
                </button>
              )}

              {/* Submit button: only on the last page */}
              {isLastPage && (
                <button
                  type="submit"
                  className="text-uppercase btn-five border6"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              )}

              <div
                style={{
                  width: 300,
                  maxWidth: "100%",
                  height: 8,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "#00a86b",
                    transition: "width .25s ease",
                  }}
                />
              </div>
              <strong
                className="notranslate"
                translate="no"
                style={{ fontSize: 14, marginTop: 8 }}
              >
                Page {Math.min(currentPage + 1, Math.max(totalPages, 1))} of{" "}
                {totalPages}
              </strong>
            </div>
          </form>
        )}

      {!pageLoading && isSubmitted && (
        <div
          id="resultsContainer"
          className="container mx-auto"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 24,
          }}
        >
          <div className="container my-4">
            <div className="row align-items-center text-center justify-content-between">
              <div className="col-12 col-md-8">
                <h1
                  className="fw-bold display-4"
                  style={{
                    color: "#13adbd",
                    fontSize: "clamp(32px, 5vw, 45px)",
                    lineHeight: 1.4,
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  Career Aptitude Test
                </h1>

                <h2
                  className="mb-3"
                  style={{
                    fontSize: 28,
                    lineHeight: 1.4,
                    color: "#0aaa40",
                    fontWeight: 600,
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  Quiz Result
                </h2>
              </div>

              <div className="col-12 col-md-4">
                <div className="p-4 rounded-4 shadow-sm bg-light">
                  <h5
                    style={{
                      color: "#13adbd",
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    For Counseling:
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: 20,
                      color: "#0aaa40",
                      fontWeight: 600,
                    }}
                  >
                    📞 7456000100
                  </p>
                </div>
              </div>

              <div className="col-12 text-start mt-3">
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  This is a self-report inventory that assesses the student’s
                  traits, interests and suggests suitable occupations. This CAT
                  is based on Typological Theory, which posits that most people
                  can be loosely categorized into six types - Realistic,
                  Investigative, Artistic, Social, Enterprising, and
                  Conventional. It further states that occupations and work
                  environments also can be classified by these categories. When
                  people choose careers that match their own types, they are
                  most likely to be both satisfied and successful. The purpose
                  of this test is to help you identify your occupational
                  personality, education options, and inform your decision
                  making process.
                </p>
              </div>
            </div>
          </div>

          {resultsLoading && (
            <p style={{ textAlign: "center", color: "#667085" }}>
              Preparing your results...
            </p>
          )}

          {results && (
            <>
              <div className="row justify-content-around border rounded">
                <div className="col-12 col-md-7 p-3" style={{ minWidth: 0 }}>
                  {scoreItems.length > 0 && (
                    <ReactApexChart
                      options={chartOptions}
                      series={chartSeries}
                      type="bar"
                      width="100%"
                      height={350}
                    />
                  )}
                </div>

                <div
                  className="top-scores rounded-5 fw-500 m-5 text-center"
                  style={{
                    flex: 1,
                    border: "1px solid grey",
                    fontSize: "24px",
                  }}
                >
                  <h3
                    className="mt-1 p-4"
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      color: "#13ADBD",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    Top Scores
                  </h3>

                  {scoreItems.slice(0, 3).map((item) => (
                    <p
                      key={item.category}
                      className="p-2"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontFamily: "'Georgia', serif",
                        fontStyle: "italic",
                        color: "#0AAA40",
                      }}
                    >
                      {item.category}: {item.score}
                    </p>
                  ))}
                  {scoreItems.length === 0 && (
                    <p>No numeric category scores were returned by the API.</p>
                  )}
                </div>
              </div>

              <TopCareer
                topCategories={scoreItems
                  .slice(0, 3)
                  .map((item) => item.category)}
              />

              <YourCareer code={results.resultData as any} />
            </>
          )}

          <div
            id="resultActions"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
              padding: "30px 0",
            }}
          >
            <button
              id="downloadBtn"
              type="button"
              className="dash-btn-two tran3s me-3 fw-bold"
              onClick={downloadResultsAsPDF}
              disabled={downloadingPdf}
            >
              {downloadingPdf ? "Creating PDF..." : "Download Your Result"}
            </button>

            <Link
              href="/dashboard/candidate-dashboard/profile"
              className="btn-five tran3s me-3"
            >
              Next Steps
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizForm;

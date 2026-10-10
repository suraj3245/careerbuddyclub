"use client";
// The admin CAT report: the SAME layout as the website's per-student result download
// (copied from dashboard/school/studentscore-modal.tsx and using the same TopCareer /
// YourCareer components), so ZIP reports look exactly like the single-student PDFs.
//
// This module touches `window` (ApexCharts), so it is only ever loaded with a dynamic
// import() from the browser — never imported at the top of a server-rendered file.
import React from "react";
import { createRoot } from "react-dom/client";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import TopCareer from "../../top-company/top-career";
import YourCareer from "../../top-company/Your-career";
import { AdminCatRow, RIASEC_ORDER } from "@/lib/admin/cat-types";
import { canvasToPdf } from "./catReportPdf";

const barColors = ["#FF4560", "#00E396", "#008FFB", "#775DD0", "#FEB019"];

/**
 * Rebuilds the object the website gets from getcatresult / getcatresultbyid:
 * scores in the backend's order (high to low, ties keep R-I-A-S-E-C), then letters and resultData.
 */
function buildResults(row: AdminCatRow, resultData: unknown[]): Record<string, any> {
  const results: Record<string, any> = {};
  if (row.scores) {
    RIASEC_ORDER.map((r, index) => ({ field: r.field, score: row.scores![r.key], index }))
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .forEach((e) => {
        results[e.field] = e.score;
      });
  }
  results.letters = row.code;
  results.resultData = resultData;
  return results;
}

// ---- Same helpers as studentscore-modal.tsx ----
function getTopThreeScores(results: Record<string, any>) {
  return Object.entries(results)
    .map(([key, value]) => ({
      category: key.charAt(0).toUpperCase() + key.slice(1).replace("_score", ""),
      score: typeof value === "number" ? value : 0,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function transformResultsToChartData(results: Record<string, any>): { series: any; options: ApexOptions } {
  const categories = Object.keys(results)
    .filter((key) => !["letters", "resultdata"].includes(key.toLowerCase()))
    .map((key) => key.charAt(0).toUpperCase() + key.slice(1).replace("_score", ""));

  const dataPoints = categories.map((category, index) => {
    const key = category.toLowerCase() + "_score";
    const value = results[key] ?? 0;
    return { x: category, y: Number(value), fillColor: barColors[index % barColors.length] };
  });

  return {
    series: [{ name: "Score", data: dataPoints }],
    options: {
      // Animations off so the finished chart is captured straight away (looks identical).
      chart: { type: "bar", height: 350, animations: { enabled: false }, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 4, horizontal: true } },
      dataLabels: { enabled: false },
      xaxis: { categories, labels: { style: { fontSize: "15px", fontWeight: 600 } } },
      yaxis: { labels: { style: { fontSize: "17px", fontWeight: 600 } } },
      colors: barColors,
    },
  };
}

interface ReportProps {
  row: AdminCatRow;
  resultData: unknown[];
  /** "top" leaves out the code/career sections (they are identical for everyone with the same code). */
  part?: "full" | "top";
}

export function CatResultReport({ row, resultData, part = "full" }: ReportProps) {
  const results = buildResults(row, resultData);
  const chartData = transformResultsToChartData(results);
  const studentName = row.name;
  const getTopThreeCategoryNames = () => getTopThreeScores(results).map((item) => item.category);
  return (
        <div
          data-cat-report="1"
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
                  Result of {studentName}
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
              {getTopThreeScores(results).map((result, i) => (
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
    
          {part === "full" && <TopCareer topCategories={getTopThreeCategoryNames()} />}
          {part === "full" && <YourCareer code={results?.resultData} />}
        </div>
  );
}

// ---------------- Off-screen rendering + capture ----------------
const STAGE_WIDTH = 1140; // same width as the website's result modal (modal-xl)

let stage: HTMLDivElement | null = null;
function getStage(): HTMLDivElement {
  if (stage && document.body.contains(stage)) return stage;
  stage = document.createElement("div");
  stage.setAttribute("aria-hidden", "true");
  // Fixed behind the dashboard (which has its own background), so it is never seen and
  // does not make the page scrollable.
  Object.assign(stage.style, {
    position: "fixed",
    left: "0",
    top: "0",
    width: `${STAGE_WIDTH}px`,
    zIndex: "-1000",
    pointerEvents: "none",
    background: "#fff",
  });
  document.body.appendChild(stage);
  return stage;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r(null)));
const SCALE = 2; // same as the website's download button

/** Renders the report off-screen and captures it (same html2canvas options as the website). */
async function capture(
  row: AdminCatRow,
  resultData: unknown[],
  part: "full" | "top"
): Promise<{ canvas: HTMLCanvasElement; splitY: number | null }> {
  const host = document.createElement("div");
  // Same box as the website's result modal body (Bootstrap .modal-body, 1rem padding).
  host.className = "modal-body";
  host.style.padding = "1rem";
  getStage().appendChild(host);
  const root = createRoot(host);
  try {
    root.render(<CatResultReport row={row} resultData={resultData} part={part} />);
    // Wait for React, YourCareer's effect and the ApexCharts SVG.
    const deadline = Date.now() + 5000;
    while (Date.now() < deadline) {
      await nextFrame();
      if (host.querySelector(".apexcharts-bar-area, .apexcharts-series")) break;
    }
    await sleep(part === "full" ? 120 : 60);
    if ((document as any).fonts?.ready) await (document as any).fonts.ready;

    if (!host.querySelector('[data-cat-report="1"]')) throw new Error("Report did not render");
    // Where the code/career sections start (used to reuse them for students with the same code).
    let splitY: number | null = null;
    const traits = host.querySelector(".top-company-section");
    if (part === "full" && traits) {
      splitY = traits.getBoundingClientRect().top - host.getBoundingClientRect().top;
    }
    const html2canvas = (await import("html2canvas")).default;
    // Capture the padded box around the report: the site theme gives the report's rows a
    // -12px margin, so capturing the report itself would cut off the first letters of the
    // introduction paragraph.
    const canvas = await html2canvas(host, {
      scale: SCALE,
      useCORS: true,
      backgroundColor: "#fff",
      logging: false,
    });
    return { canvas, splitY };
  } finally {
    root.unmount();
    host.remove();
  }
}

/** One student's report as PDF bytes, in the same format as the website's download. */
export async function renderCatReportPdf(row: AdminCatRow, resultData: unknown[]): Promise<ArrayBuffer> {
  const { canvas } = await capture(row, resultData, "full");
  return canvasToPdf(canvas);
}

/**
 * Faster renderer for many reports. The personality-traits and career sections are the same
 * for every student with the same 3-letter code, so they are captured once per code and
 * re-used; only the student's own part (name, chart, top scores) is captured per student.
 * The page is pixel-for-pixel the same as a full capture. Process students grouped by code.
 */
export function createBulkReportRenderer() {
  let shared: { code: string; splitPx: number; bottom: HTMLCanvasElement } | null = null;

  return async function render(row: AdminCatRow, resultData: unknown[]): Promise<ArrayBuffer> {
    if (!shared || shared.code !== row.code) {
      const { canvas, splitY } = await capture(row, resultData, "full");
      shared = null;
      if (splitY !== null && splitY > 0) {
        const splitPx = Math.round(splitY * SCALE);
        const bottom = document.createElement("canvas");
        bottom.width = canvas.width;
        bottom.height = Math.max(1, canvas.height - splitPx);
        bottom.getContext("2d")!.drawImage(canvas, 0, splitPx, canvas.width, bottom.height, 0, 0, canvas.width, bottom.height);
        shared = { code: row.code, splitPx, bottom };
      }
      return canvasToPdf(canvas);
    }

    const { canvas: top } = await capture(row, resultData, "top");
    if (top.width !== shared.bottom.width) {
      // Layout changed (e.g. window resized) - fall back to a full capture.
      shared = null;
      return render(row, resultData);
    }
    const full = document.createElement("canvas");
    full.width = shared.bottom.width;
    full.height = shared.splitPx + shared.bottom.height;
    const ctx = full.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, full.width, full.height);
    const topH = Math.min(top.height, shared.splitPx);
    ctx.drawImage(top, 0, 0, top.width, topH, 0, 0, top.width, topH);
    ctx.drawImage(shared.bottom, 0, shared.splitPx);
    return canvasToPdf(full);
  };
}

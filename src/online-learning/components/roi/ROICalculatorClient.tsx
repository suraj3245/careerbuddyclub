"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { RotateCcw, ArrowRight, Sparkles } from "lucide-react";
import { CollegeDetail } from "../../data/api";

/* ── Types ─────────────────────────────────────────────────────────────── */

interface Course {
  label: string;
  short: string;
  duration: number;
  fees: number;       // ₹ total programme fee
  salary: number;     // ₹ expected annual salary after the course
  stream?: string;    // stream/category name for grouping
}

interface CollegeData {
  label: string;
  courses: Record<string, Course>;
}

/* ── Fee & Duration Parsing ────────────────────────────────────────────── */

/**
 * Parse fee strings from the API.
 *   "2.40L"  → 2,40,000   (L = Lakh = ×100,000)
 *   "80K"    → 80,000     (K = Thousand = ×1,000)
 *   "1L"     → 1,00,000
 *   "2L"     → 2,00,000
 *   "1.20L"  → 1,20,000
 *   "90K"    → 90,000
 *   "2.5L"   → 2,50,000
 */
const parseFee = (feeStr: string | undefined): number => {
  if (!feeStr || feeStr === "-") return 0;

  const str = feeStr.trim().toLowerCase().replace(/,/g, "");

  // Match patterns like "2.40L", "80K", "1.20L", "2L", "90K"
  const lakhMatch = str.match(/([\d.]+)\s*l(?:akh|akhs)?/i);
  if (lakhMatch) {
    return Math.round(parseFloat(lakhMatch[1]) * 100000);
  }

  const thousandMatch = str.match(/([\d.]+)\s*k/i);
  if (thousandMatch) {
    return Math.round(parseFloat(thousandMatch[1]) * 1000);
  }

  // Try plain number (e.g. "120000")
  const plain = parseFloat(str.replace(/[^\d.]/g, ""));
  if (!isNaN(plain) && plain > 0) {
    return Math.round(plain);
  }

  return 0;
};

/**
 * Parse duration string from the API.
 *   "2 Years" → 2
 *   "1 Year"  → 1
 *   "3 Years" → 3
 *   "4 Years" → 4
 */
const parseDuration = (durationStr: string | undefined): number => {
  if (!durationStr) return 2; // default to 2 years
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 2;
};

/* ── Salary Estimates (NIRF-based) ─────────────────────────────────────── */

/** Indicative annual salaries by course type */
const SALARY_BY_COURSE: Record<string, number> = {
  mba: 700000,
  mca: 550000,
  msc: 450000,
  ma: 400000,
  "m.com": 420000,
  mcom: 420000,
  med: 380000,
  "m.ed": 380000,
  phd: 800000,
  "ph.d": 800000,
  executive: 900000,
  senior: 1000000,
  dual: 650000,
  "1 year": 600000,
  ai: 750000,
  "data science": 700000,
  doctorate: 800000,
};

function getIndicativeSalary(courseName: string): number {
  const lower = courseName.toLowerCase();
  for (const [key, salary] of Object.entries(SALARY_BY_COURSE)) {
    if (lower.includes(key)) return salary;
  }
  return 500000; // fallback
}

/* ── Build college data from API ───────────────────────────────────────── */

/**
 * Build college/course data directly from the `getallcollegesdetails` API.
 * Each college → its courses with real name, duration, and fee from the API.
 * Only includes online colleges (those with "Online" in the name or id 64-69).
 */
const buildCollegeData = (
  collegeDetails: CollegeDetail[]
): Record<string, CollegeData> => {
  const colleges: Record<string, CollegeData> = {};

  if (!collegeDetails || collegeDetails.length === 0) return colleges;

  // Online college IDs from the API
  const ONLINE_IDS = new Set([64, 65, 66, 67, 68, 69]);

  collegeDetails.forEach((college) => {
    // Only include online universities
    const isOnline =
      ONLINE_IDS.has(college.id) ||
      (college.college_full_name || "").toLowerCase().includes("online");

    if (!isOnline) return;

    const key = college.id.toString();
    const collegeName = college.college_full_name || "Unknown College";

    colleges[key] = {
      label: collegeName,
      courses: {},
    };

    (college.courses || []).forEach((course) => {
      const courseKey = course.id.toString();
      const courseName = course.name || "Unknown Course";
      const duration = parseDuration(course.duration);
      const fees = parseFee(course.pivot?.fee);

      if (fees === 0) return; // skip courses with no fee data

      colleges[key].courses[courseKey] = {
        label: courseName,
        short: courseName,
        duration,
        fees,
        salary: getIndicativeSalary(courseName),
      };
    });
  });

  // Remove colleges with zero courses
  Object.keys(colleges).forEach((k) => {
    if (Object.keys(colleges[k].courses).length === 0) {
      delete colleges[k];
    }
  });

  return colleges;
};

/* ── Helpers ───────────────────────────────────────────────────────────── */

/**
 * Indian digit grouping (1,82,000) done by hand rather than via
 * Number.toLocaleString("en-IN").
 *
 * Intl output depends on the ICU data the runtime was built with, so Node and
 * the browser can disagree — Node returning "182,000" where Chrome returns
 * "1,82,000". That difference is a React hydration mismatch. This is
 * deterministic everywhere.
 */
const inr = (value: number) => {
  const digits = String(Math.round(Math.abs(value)));
  if (digits.length <= 3) return `₹${digits}`;
  const lastThree = digits.slice(-3);
  const rest = digits.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${rest},${lastThree}`;
};

/**
 * Truncated to two decimals rather than rounded, so the headline figure never
 * overstates the return: 92.307692…% reads as 92.30%.
 */
const toFixedDown = (value: number, digits = 2) => {
  const factor = 10 ** digits;
  return (Math.trunc(value * factor) / factor).toFixed(digits);
};

/**
 * The one place the maths lives.
 * ROI = ((Expected Return − Total Investment) / Total Investment) × 100
 */
function calculateROI(totalInvestment: number, expectedReturn: number) {
  const netReturn = expectedReturn - totalInvestment;
  const roi = totalInvestment > 0 ? (netReturn / totalInvestment) * 100 : 0;
  const monthsToBreakEven = expectedReturn > 0 ? totalInvestment / (expectedReturn / 12) : 0;
  return { netReturn, roi, monthsToBreakEven };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Counts a number up to its target. The animation is decorative only — a timer
 * safety net and a visibility listener guarantee the value always lands on
 * `target`, even where requestAnimationFrame is throttled or never fires.
 */
function useCountUp(target: number, active: boolean, duration = 750) {
  const [display, setDisplay] = useState(target);
  const currentRef = useRef(target);

  useEffect(() => {
    if (!active) {
      currentRef.current = target;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(target);
      return;
    }
    if (currentRef.current === target) return;

    const snapToTarget = () => {
      currentRef.current = target;
      setDisplay(target);
    };

    if (prefersReducedMotion() || document.hidden) {
      snapToTarget();
      return;
    }

    const start = currentRef.current;
    const delta = target - start;
    const startedAt = performance.now();
    let frame = 0;
    let safetyNet = 0;
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(safetyNet);
      snapToTarget();
    };

    safetyNet = window.setTimeout(finish, duration + 300);

    const step = (now: number) => {
      if (settled) return;
      const progress = Math.min(1, (now - startedAt) / duration);
      if (progress >= 1) {
        finish();
        return;
      }
      const eased = 1 - Math.pow(1 - progress, 3);
      currentRef.current = start + delta * eased;
      setDisplay(currentRef.current);
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    document.addEventListener("visibilitychange", finish);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(safetyNet);
      document.removeEventListener("visibilitychange", finish);
    };
  }, [target, active, duration]);

  return display;
}

/* ── Small pieces ──────────────────────────────────────────────────────── */

function ScribbleArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`roiNote__arrow${flip ? " is-flipped" : ""}`}
      viewBox="0 0 44 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2c1.5 12 8 22 20 27"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      <path
        d="M15 29.5l7.5 0.5-2-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Component ─────────────────────────────────────────────────────────── */

export default function ROICalculatorClient({
  streams = [],
  collegeDetails = [],
}: {
  streams?: any[];
  collegeDetails?: CollegeDetail[];
}) {
  const COLLEGES = useMemo(() => buildCollegeData(collegeDetails), [collegeDetails]);
  const collegeKeys = useMemo(() => Object.keys(COLLEGES), [COLLEGES]);
  const defaultUnivKey = collegeKeys.length > 0 ? collegeKeys[0] : "";

  const [univKey, setUnivKey] = useState<string>(defaultUnivKey);
  const [courseKey, setCourseKey] = useState<string>("");
  const [flipped, setFlipped] = useState(false);

  // Sync default if empty or invalid
  const activeUnivKey = univKey in COLLEGES ? univKey : defaultUnivKey;
  const currentCollege = COLLEGES[activeUnivKey];

  const courseEntries = useMemo(() => {
    if (!currentCollege) return [];
    return Object.entries(currentCollege.courses);
  }, [currentCollege]);

  const activeCourseKey =
    courseKey && currentCollege?.courses[courseKey]
      ? courseKey
      : courseEntries.length > 0
      ? courseEntries[0][0]
      : "";

  const course = currentCollege?.courses[activeCourseKey];

  // If no colleges loaded yet, return null
  if (!currentCollege || !course) return null;

  const totalInvestment = course.fees;
  const expectedReturn = course.salary;

  const { netReturn, roi, monthsToBreakEven } = calculateROI(totalInvestment, expectedReturn);

  const animatedRoi = useCountUp(roi, flipped);
  const isPositive = roi >= 0;

  /* Bar heights, scaled to whichever figure is larger. */
  const scaleMax = Math.max(totalInvestment, expectedReturn, 1);
  const investmentHeight = Math.max(8, (totalInvestment / scaleMax) * 100);
  const returnHeight = Math.max(8, (expectedReturn / scaleMax) * 100);

  /* ── Flip stage sizing ───────────────────────────────────────────────── */

  const stageRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [stageHeight, setStageHeight] = useState<number | null>(null);

  const measure = useCallback(() => {
    const face = flipped ? backRef.current : frontRef.current;
    if (face) setStageHeight(face.offsetHeight);
  }, [flipped]);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (frontRef.current) observer.observe(frontRef.current);
    if (backRef.current) observer.observe(backRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (frontRef.current) frontRef.current.inert = flipped;
    if (backRef.current) backRef.current.inert = !flipped;
  }, [flipped]);

  /* ── Handlers ────────────────────────────────────────────────────────── */

  const handleUniversityChange = (value: string) => {
    setUnivKey(value);
    const nextCol = COLLEGES[value];
    if (nextCol) {
      const nextCourses = Object.keys(nextCol.courses);
      if (nextCourses.length > 0) {
        setCourseKey(nextCourses[0]);
      }
    }
    setFlipped(false);
  };

  const handleCourseChange = (value: string) => {
    setCourseKey(value);
    setFlipped(false);
  };

  const verdict = isPositive
    ? roi >= 100
      ? "Your first year out earns back more than the whole degree cost."
      : "You clear the full course fee inside your first year of work."
    : "Year one alone does not cover the fee — this one needs a longer runway.";

  const roiText = `${toFixedDown(animatedRoi)}%`;
  const finalRoiText = `${toFixedDown(roi)}%`;

  return (
    <section className="roiDeck" id="roi-calculator" aria-labelledby="roiDeck-heading">
      <div className="roiDeck__inner">
        <div className="roiDeck__split">
          {/* ── Left Column: Form / Result ──────────────────────────────── */}
          <div className="roiDeck__left">
            <header className="roiDeck__head">
              <p className="roiNote roiNote--top">
                <ScribbleArrow />
                <span>Good instinct.</span>
              </p>
              <h2 id="roiDeck-heading" className="roiDeck__title">
                A smart choice today<br />
                <span style={{ color: "#079db4" }}>shapes your tomorrow.</span>
              </h2>
              <p className="roiDeck__subtitle">
                Select your university and degree programme to<br />
                discover your verified return on investment.
              </p>
            </header>

            <div
              className="roiDeck__stage"
              ref={stageRef}
              style={stageHeight ? { height: stageHeight } : undefined}
            >
              <div className={`roiDeck__card${flipped ? " is-flipped" : ""}`}>
                {/* ── Front: the question ──────────────────────────────── */}
                <div
                  className="roiFace roiFace--front"
                  ref={frontRef}
                  aria-hidden={flipped}
                >
                  <div className="roiSentence">
                    <span className="roiSentence__text">I&apos;m looking at</span>
                    <span className="roiPick">
                      <label className="roiPick__label" htmlFor="roi-university">
                        University
                      </label>
                      <select
                        id="roi-university"
                        className="roiPick__select"
                        value={activeUnivKey}
                        onChange={(event) => handleUniversityChange(event.target.value)}
                      >
                        {Object.entries(COLLEGES).map(([key, item]) => (
                          <option key={key} value={key}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>

                  <div className="roiSentence">
                    <span className="roiSentence__text">for an online</span>
                    <span className="roiPick">
                      <label className="roiPick__label" htmlFor="roi-course">
                        Course
                      </label>
                      <select
                        id="roi-course"
                        className="roiPick__select"
                        value={activeCourseKey}
                        onChange={(event) => handleCourseChange(event.target.value)}
                      >
                        {courseEntries.map(([key, item]) => (
                          <option key={key} value={key}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </span>
                    <span className="roiSentence__text">programme</span>
                  </div>

                  <p className="roiNote roiNote--inline">
                    <ScribbleArrow flip />
                    <span>
                      {course.duration} {course.duration === 1 ? "year" : "years"} duration
                    </span>
                  </p>

                  <p className="roiFee">
                    Full programme fee comes to <strong>{inr(totalInvestment)}</strong>
                  </p>

                  <div className="roiFace__divider" />

                  <p className="roiPrompt">Smart money, or an expensive detour?</p>

                  <button type="button" className="roiGo" onClick={() => setFlipped(true)}>
                    Get Your Result
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <p className="roiGo__hint">Your answer is on the other side</p>
                </div>

                {/* ── Back: the answer ─────────────────────────────────── */}
                <div
                  className="roiFace roiFace--back"
                  ref={backRef}
                  aria-hidden={!flipped}
                >
                  <div className="roiAnswer">
                    <div className="roiPlot">
                      <div className="roiPlot__grid" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="roiPlot__bars">
                        <div className="roiPlot__col">
                          <span className="roiPlot__value">{inr(totalInvestment)}</span>
                          <div className="roiPlot__track">
                            <div
                              className="roiPlot__bar roiPlot__bar--cost"
                              style={{ height: flipped ? `${investmentHeight}%` : "0%" }}
                            />
                          </div>
                          <span className="roiPlot__label">What you pay</span>
                        </div>
                        <div className="roiPlot__col">
                          <span className="roiPlot__value">{inr(expectedReturn)}</span>
                          <div className="roiPlot__track">
                            <div
                              className="roiPlot__bar roiPlot__bar--earn"
                              style={{ height: flipped ? `${returnHeight}%` : "0%" }}
                            />
                          </div>
                          <span className="roiPlot__label">Year-one salary</span>
                        </div>
                      </div>
                    </div>

                    <div className="roiVerdict" role="status" aria-live="polite" aria-atomic="true">
                      <span className="roiVerdict__sr">
                        {`${course.short} at ${currentCollege.label}: return on investment ${finalRoiText}.`}
                      </span>
                      <p className="roiNote roiNote--verdict">
                        <ScribbleArrow />
                        <span>Better than expected?</span>
                      </p>
                      <p
                        className={`roiVerdict__figure${isPositive ? "" : " is-negative"}`}
                        aria-hidden="true"
                      >
                        {roiText}
                      </p>
                      <p className="roiVerdict__caption">Return on investment</p>
                      <p className="roiVerdict__line">{verdict}</p>
                      <button type="button" className="roiBack" onClick={() => setFlipped(false)}>
                        <RotateCcw size={15} aria-hidden="true" />
                        Change my answers
                      </button>
                    </div>
                  </div>

                  <dl className="roiTally">
                    <div className="roiTally__item">
                      <dt>Net gain in year one</dt>
                      <dd className={isPositive ? "is-positive" : "is-negative"}>
                        {netReturn < 0 ? "−" : "+"}
                        {inr(netReturn)}
                      </dd>
                    </div>
                    <div className="roiTally__item">
                      <dt>Fee earned back in</dt>
                      <dd>{monthsToBreakEven > 0 ? `${monthsToBreakEven.toFixed(1)} months` : "—"}</dd>
                    </div>
                    <div className="roiTally__item roiTally__item--wide">
                      <dt>The maths</dt>
                      <dd className="roiTally__formula">
                        ({inr(expectedReturn)} − {inr(totalInvestment)}) ÷ {inr(totalInvestment)} × 100
                      </dd>
                    </div>
                  </dl>

                  <div className="roiFace__divider" />

                  <p className="roiPrompt">Want a second opinion on this?</p>
                  <div className="roiActions">
                    <Link href="#counselling" className="roiGo roiGo--solid">
                      Talk to a counsellor
                    </Link>
                    <Link href="/roi-calculator" className="roiGo roiGo--ghost">
                      Run the detailed numbers
                    </Link>
                  </div>

                  <p className="roiSmallPrint">
                    <strong>Please note:</strong> fees are drawn directly from approved university
                    course structures. Salaries are indicative averages drawn from NIRF placement data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Image ──────────────────────────────── */}
          <div className="roiDeck__right">
            <div className="roiImageWrapper">
              <div className="roiDotPattern roiDotPattern--top" />
              <div className="roiDotPattern roiDotPattern--bottom" />

              <img
                src="/assets/images/girl.png"
                alt="Student pointing"
                className="roiGirlImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

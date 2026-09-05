"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { RotateCcw, ArrowRight, Sparkles } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────────── */

interface Course {
  label: string;
  short: string;
  duration: number; 
  fees: number; // ₹ total programme fee
  salary: number; // ₹ expected annual salary after the course
}

interface DegreeLevel {
  courses: Record<string, Course>;
}

interface University {
  label: string;
  ug: DegreeLevel;
  pg: DegreeLevel;
}

type DegreeKey = "ug" | "pg";

/* ── Data ──────────────────────────────────────────────────────────────── */

const UNIVERSITIES: Record<string, University> = {
  manipal: {
    label: "Manipal Online",
    ug: {
      courses: {
        bca: { label: "Online BCA", short: "BCA", duration: 3, fees: 182000, salary: 350000 },
        bba: { label: "Online BBA", short: "BBA", duration: 3, fees: 168000, salary: 330000 },
        bcom: { label: "Online B.Com", short: "B.Com", duration: 3, fees: 150000, salary: 290000 },
      },
    },
    pg: {
      courses: {
        mba: { label: "Online MBA", short: "MBA", duration: 2, fees: 310000, salary: 650000 },
        mca: { label: "Online MCA", short: "MCA", duration: 2, fees: 280000, salary: 600000 },
        mcom: { label: "Online M.Com", short: "M.Com", duration: 2, fees: 220000, salary: 430000 },
      },
    },
  },
  amity: {
    label: "Amity Online",
    ug: {
      courses: {
        bca: { label: "Online BCA", short: "BCA", duration: 3, fees: 210000, salary: 330000 },
        bba: { label: "Online BBA", short: "BBA", duration: 3, fees: 195000, salary: 315000 },
        bcom: { label: "Online B.Com", short: "B.Com", duration: 3, fees: 175000, salary: 275000 },
      },
    },
    pg: {
      courses: {
        mba: { label: "Online MBA", short: "MBA", duration: 2, fees: 380000, salary: 600000 },
        mca: { label: "Online MCA", short: "MCA", duration: 2, fees: 320000, salary: 555000 },
        mcom: { label: "Online M.Com", short: "M.Com", duration: 2, fees: 260000, salary: 405000 },
      },
    },
  },
  jain: {
    label: "Jain Online",
    ug: {
      courses: {
        bca: { label: "Online BCA", short: "BCA", duration: 3, fees: 190000, salary: 320000 },
        bba: { label: "Online BBA", short: "BBA", duration: 3, fees: 178000, salary: 305000 },
        bcom: { label: "Online B.Com", short: "B.Com", duration: 3, fees: 160000, salary: 265000 },
      },
    },
    pg: {
      courses: {
        mba: { label: "Online MBA", short: "MBA", duration: 2, fees: 350000, salary: 575000 },
        mca: { label: "Online MCA", short: "MCA", duration: 2, fees: 300000, salary: 535000 },
        mcom: { label: "Online M.Com", short: "M.Com", duration: 2, fees: 240000, salary: 390000 },
      },
    },
  },
  lpu: {
    label: "LPU Online",
    ug: {
      courses: {
        bca: { label: "Online BCA", short: "BCA", duration: 3, fees: 175000, salary: 315000 },
        bba: { label: "Online BBA", short: "BBA", duration: 3, fees: 162000, salary: 300000 },
        bcom: { label: "Online B.Com", short: "B.Com", duration: 3, fees: 145000, salary: 260000 },
      },
    },
    pg: {
      courses: {
        mba: { label: "Online MBA", short: "MBA", duration: 2, fees: 295000, salary: 560000 },
        mca: { label: "Online MCA", short: "MCA", duration: 2, fees: 265000, salary: 520000 },
        mcom: { label: "Online M.Com", short: "M.Com", duration: 2, fees: 210000, salary: 380000 },
      },
    },
  },
  chandigarh: {
    label: "Chandigarh University Online",
    ug: {
      courses: {
        bca: { label: "Online BCA", short: "BCA", duration: 3, fees: 168000, salary: 310000 },
        bba: { label: "Online BBA", short: "BBA", duration: 3, fees: 155000, salary: 295000 },
        bcom: { label: "Online B.Com", short: "B.Com", duration: 3, fees: 138000, salary: 255000 },
      },
    },
    pg: {
      courses: {
        mba: { label: "Online MBA", short: "MBA", duration: 2, fees: 285000, salary: 545000 },
        mca: { label: "Online MCA", short: "MCA", duration: 2, fees: 255000, salary: 505000 },
        mcom: { label: "Online M.Com", short: "M.Com", duration: 2, fees: 205000, salary: 375000 },
      },
    },
  },
};

const DEGREE_LABEL: Record<DegreeKey, string> = {
  ug: "Bachelor's",
  pg: "Master's",
};

const DEFAULTS = { univ: "manipal", degree: "ug" as DegreeKey, course: "bca" };

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

export default function ROICalculatorSection() {
  const [univKey, setUnivKey] = useState<string>(DEFAULTS.univ);
  const [degreeKey, setDegreeKey] = useState<DegreeKey>(DEFAULTS.degree);
  const [courseKey, setCourseKey] = useState<string>(DEFAULTS.course);
  const [flipped, setFlipped] = useState(false);

  const university = UNIVERSITIES[univKey] ?? UNIVERSITIES[DEFAULTS.univ];
  const degree = university[degreeKey];
  const courseEntries = useMemo(() => Object.entries(degree.courses), [degree]);
  const resolvedCourseKey = courseKey in degree.courses ? courseKey : courseEntries[0][0];
  const course = degree.courses[resolvedCourseKey];

  const totalInvestment = course.fees;
  const expectedReturn = course.salary;

  const { netReturn, roi, monthsToBreakEven } = useMemo(
    () => calculateROI(totalInvestment, expectedReturn),
    [totalInvestment, expectedReturn]
  );

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

  // React 18's JSX `inert` attribute isn't recognised as a boolean HTML
  // attribute by react-dom yet (that lands in React 19), so it's set here
  // as a real DOM property instead of via JSX to avoid a console warning
  // and the string "false" being treated as truthy by the browser.
  useEffect(() => {
    if (frontRef.current) frontRef.current.inert = flipped;
    if (backRef.current) backRef.current.inert = !flipped;
  }, [flipped]);

  /* ── Handlers ────────────────────────────────────────────────────────── */

  const handleUniversityChange = (value: string) => {
    setUnivKey(value);
    const next = UNIVERSITIES[value];
    if (next && !next[degreeKey].courses[courseKey]) {
      setCourseKey(Object.keys(next[degreeKey].courses)[0]);
    }
  };

  const handleDegreeChange = (value: string) => {
    const nextDegree = value as DegreeKey;
    setDegreeKey(nextDegree);
    // Keep the choice where it still exists, otherwise fall back to the first
    // course — the calculator is never left in an empty state.
    if (!university[nextDegree].courses[courseKey]) {
      setCourseKey(Object.keys(university[nextDegree].courses)[0]);
    }
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
                <span style={{ color: '#079db4' }}>shapes your tomorrow.</span>
              </h2>
              <p className="roiDeck__subtitle">
                Tell us a bit about your goal and we'll help<br />
                you discover your potential ROI.
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
                    value={univKey}
                    onChange={(event) => handleUniversityChange(event.target.value)}
                  >
                    {Object.entries(UNIVERSITIES).map(([key, item]) => (
                      <option key={key} value={key}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </span>
              </div>

              <div className="roiSentence">
                <span className="roiSentence__text">for a</span>
                <span className="roiPick">
                  <label className="roiPick__label" htmlFor="roi-degree">
                    Degree level
                  </label>
                  <select
                    id="roi-degree"
                    className="roiPick__select"
                    value={degreeKey}
                    onChange={(event) => handleDegreeChange(event.target.value)}
                  >
                    <option value="ug">{DEGREE_LABEL.ug}</option>
                    <option value="pg">{DEGREE_LABEL.pg}</option>
                  </select>
                </span>
                <span className="roiSentence__text">degree</span>
              </div>

              <p className="roiNote roiNote--inline">
                <ScribbleArrow flip />
                <span>
                  {course.duration} {course.duration === 1 ? "year" : "years"} of study
                </span>
              </p>

              <div className="roiSentence">
                <span className="roiSentence__text">studying</span>
                <span className="roiPick">
                  <label className="roiPick__label" htmlFor="roi-course">
                    Course
                  </label>
                  <select
                    id="roi-course"
                    className="roiPick__select"
                    value={resolvedCourseKey}
                    onChange={(event) => setCourseKey(event.target.value)}
                  >
                    {courseEntries.map(([key, item]) => (
                      <option key={key} value={key}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </span>
              </div>

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
                    {`${course.short} at ${university.label}: return on investment ${finalRoiText}.`}
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
                <strong>Please note:</strong> fees and salary figures are indicative averages drawn
                from NIRF data for regular degrees. Universities run one placement cell for online
                and on-campus students alike, but your own outcome will vary.
              </p>
            </div>
          </div>
        </div>
      </div>
          
      {/* ── Right Column: Image ──────────────────────────────── */}
          <div className="roiDeck__right">
            <div className="roiImageWrapper">
              {/* Background dot pattern can be CSS or SVG */}
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

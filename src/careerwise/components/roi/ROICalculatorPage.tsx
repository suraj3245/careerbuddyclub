"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart2, Building, ShieldCheck, Lightbulb,
  Calculator, TrendingUp, Wallet, ArrowRight,
  ExternalLink, Download, ArrowUpRight, Star, Target,
  HeadphonesIcon, MessageSquare, GraduationCap, TrendingDown,
} from "lucide-react";
import Link from "next/link";

const styles = {
  roiContainer: "roiContainer",
  breadcrumbs: "breadcrumbs",
  roiHeader: "roiHeader",
  badge: "badge",
  featuresList: "featuresList",
  featureItem: "featureItem",
  infoBanner: "infoBanner",
  infoContent: "infoContent",
  iconWrapper: "iconWrapper",
  formulaBox: "formulaBox",
  formulaLabel: "formulaLabel",
  calculatorSection: "calculatorSection",
  card: "card",
  formHeader: "formHeader",
  formSubtitle: "formSubtitle",
  formGroup: "formGroup",
  toggleGroup: "toggleGroup",
  toggleBtn: "toggleBtn",
  toggleActive: "toggleActive",
  inputRow: "inputRow",
  infoField: "infoField",
  calculateBtn: "calculateBtn",
  resultContent: "resultContent",
  resultHeader: "resultHeader",
  emptyResult: "emptyResult",
  roiCircle: "roiCircle",
  positive: "positive",
  negative: "negative",
  percentage: "percentage",
  roiStatus: "roiStatus",
  resultMessage: "resultMessage",
  positiveMsg: "positiveMsg",
  negativeMsg: "negativeMsg",
  resultStats: "resultStats",
  statBox: "statBox",
  statInfo: "statInfo",
  profit: "profit",
  loss: "loss",
  breakevenBox: "breakevenBox",
  downloadBtn: "downloadBtn",
  conversionSection: "conversionSection",
  conversionFlow: "conversionFlow",
  flowItem: "flowItem",
  flowIcon: "flowIcon",
  flowInfo: "flowInfo",
  operator: "operator",
  comparisonSection: "comparisonSection",
  comparisonGrid: "comparisonGrid",
  highlighted: "highlighted",
  youBadge: "youBadge",
  roiPositive: "roiPositive",
  roiNegative: "roiNegative",
  compareBtn: "compareBtn",
  didYouKnow: "didYouKnow",
  dykTitle: "dykTitle",
  trophyWrap: "trophyWrap",
  benefitsCards: "benefitsCards",
  benefitCard: "benefitCard",
  green: "green",
  amber: "amber",
  indigo: "indigo",
  benefitIcon: "benefitIcon",
  ctaBanner: "ctaBanner",
  ctaLeft: "ctaLeft",
} as const;

// ─── Data ────────────────────────────────────────────────────────────────────

interface Course {
  label: string;
  duration: number; // years
  fees: number;     // ₹ total
}

interface University {
  label: string;
  ug: { avgSalary: number; courses: Course[] };
  pg: { avgSalary: number; courses: Course[] };
}

const UNIVERSITIES: Record<string, University> = {
  manipal: {
    label: "Manipal University",
    ug: {
      avgSalary: 1168000,
      courses: [
        { label: "BCA (Bachelor of Computer Applications)", duration: 3, fees: 182000 },
        { label: "BBA (Bachelor of Business Administration)", duration: 3, fees: 168000 },
        { label: "B.Com (Bachelor of Commerce)", duration: 3, fees: 150000 },
      ],
    },
    pg: {
      avgSalary: 1168000,
      courses: [
        { label: "MBA (Master of Business Administration)", duration: 2, fees: 310000 },
        { label: "MCA (Master of Computer Applications)", duration: 2, fees: 280000 },
        { label: "M.Com (Master of Commerce)", duration: 2, fees: 220000 },
      ],
    },
  },
  amity: {
    label: "Amity University",
    ug: {
      avgSalary: 550000,
      courses: [
        { label: "BCA (Bachelor of Computer Applications)", duration: 3, fees: 210000 },
        { label: "BBA (Bachelor of Business Administration)", duration: 3, fees: 195000 },
        { label: "B.Com (Bachelor of Commerce)", duration: 3, fees: 175000 },
      ],
    },
    pg: {
      avgSalary: 550000,
      courses: [
        { label: "MBA (Master of Business Administration)", duration: 2, fees: 380000 },
        { label: "MCA (Master of Computer Applications)", duration: 2, fees: 320000 },
        { label: "M.Com (Master of Commerce)", duration: 2, fees: 260000 },
      ],
    },
  },
  jain: {
    label: "Jain University",
    ug: {
      avgSalary: 726000,
      courses: [
        { label: "BCA (Bachelor of Computer Applications)", duration: 3, fees: 190000 },
        { label: "BBA (Bachelor of Business Administration)", duration: 3, fees: 178000 },
        { label: "B.Com (Bachelor of Commerce)", duration: 3, fees: 160000 },
      ],
    },
    pg: {
      avgSalary: 726000,
      courses: [
        { label: "MBA (Master of Business Administration)", duration: 2, fees: 350000 },
        { label: "MCA (Master of Computer Applications)", duration: 2, fees: 300000 },
        { label: "M.Com (Master of Commerce)", duration: 2, fees: 240000 },
      ],
    },
  },
  lpu: {
    label: "LPU (Lovely Professional University)",
    ug: {
      avgSalary: 675000,
      courses: [
        { label: "BCA (Bachelor of Computer Applications)", duration: 3, fees: 175000 },
        { label: "BBA (Bachelor of Business Administration)", duration: 3, fees: 162000 },
        { label: "B.Com (Bachelor of Commerce)", duration: 3, fees: 145000 },
      ],
    },
    pg: {
      avgSalary: 675000,
      courses: [
        { label: "MBA (Master of Business Administration)", duration: 2, fees: 295000 },
        { label: "MCA (Master of Computer Applications)", duration: 2, fees: 265000 },
        { label: "M.Com (Master of Commerce)", duration: 2, fees: 210000 },
      ],
    },
  },
  chandigarh: {
    label: "Chandigarh University",
    ug: {
      avgSalary: 635000,
      courses: [
        { label: "BCA (Bachelor of Computer Applications)", duration: 3, fees: 168000 },
        { label: "BBA (Bachelor of Business Administration)", duration: 3, fees: 155000 },
        { label: "B.Com (Bachelor of Commerce)", duration: 3, fees: 138000 },
      ],
    },
    pg: {
      avgSalary: 635000,
      courses: [
        { label: "MBA (Master of Business Administration)", duration: 2, fees: 285000 },
        { label: "MCA (Master of Computer Applications)", duration: 2, fees: 255000 },
        { label: "M.Com (Master of Commerce)", duration: 2, fees: 205000 },
      ],
    },
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Indian digit grouping (1,82,000) done by hand rather than via
 * Number.toLocaleString("en-IN").
 *
 * Intl output depends on the ICU data the runtime was built with, so Node and
 * the browser can disagree — Node returning "182,000" where Chrome returns
 * "1,82,000". That difference is a React hydration mismatch. This is
 * deterministic everywhere.
 */
const formatINR = (val: number) => {
  const digits = String(Math.round(Math.abs(val)));
  if (digits.length <= 3) return `₹ ${digits}`;
  const lastThree = digits.slice(-3);
  const rest = digits.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹ ${rest},${lastThree}`;
};

/**
 * CORRECT ROI FORMULA
 *
 * Total Return     = Annual Salary × Course Duration (years)
 * Net Return       = Total Return − Total Investment (fees)
 * ROI (%)          = (Net Return / Total Investment) × 100
 * Breakeven Period = Total Investment / Annual Salary (in years, decimal)
 *
 * This correctly measures how much you gain relative to what you spent,
 * accounting for the full earning window of the degree duration.
 */
function calcROI(investment: number, annualSalary: number, duration: number) {
  const totalReturn = annualSalary * duration;
  const netReturn = totalReturn - investment;
  const roi = investment > 0 ? (netReturn / investment) * 100 : 0;
  const breakeven = annualSalary > 0 ? investment / annualSalary : 0; // in years
  return { totalReturn, netReturn, roi, breakeven };
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ROICalculator() {
  const [univKey, setUnivKey] = useState<string>("manipal");
  const [degreeType, setDegreeType] = useState<"ug" | "pg">("ug");
  const [courseIdx, setCourseIdx] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  const univ = UNIVERSITIES[univKey];
  const degreeData = univ[degreeType];
  const course = degreeData.courses[courseIdx];

  // Re-derive when university or degree type changes
  const handleUnivChange = (key: string) => {
    setUnivKey(key);
    setCourseIdx(0);
    setCalculated(false);
  };

  const handleDegreeChange = (type: "ug" | "pg") => {
    setDegreeType(type);
    setCourseIdx(0);
    setCalculated(false);
  };

  const { totalReturn, netReturn, roi, breakeven } = useMemo(
    () => calcROI(course.fees, degreeData.avgSalary, course.duration),
    [course, degreeData.avgSalary]
  );

  const isPositive = roi >= 0;

  // Comparison rows (all universities, same degree type, same course index clamped)
  const comparisonRows = Object.entries(UNIVERSITIES).map(([key, u]) => {
    const d = u[degreeType];
    const c = d.courses[Math.min(courseIdx, d.courses.length - 1)];
    const { roi: r } = calcROI(c.fees, d.avgSalary, c.duration);
    return { key, label: u.label, fees: c.fees, salary: d.avgSalary, roi: r };
  });

  return (
    <main className={styles.roiContainer}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbs}>Home &gt; ROI Calculator</div>

      {/* ── Header ── */}
      <div className={styles.roiHeader}>
        <div className={styles.badge}>
          <TrendingUp size={16} />
          Smart Investment, Better Future.
        </div>
        <h1>University ROI Calculator</h1>
        <p>
          Discover the real return on your education investment.<br />
          Calculate how much value your degree can bring and make smarter decisions.
        </p>
        <div className={styles.featuresList}>
          <div className={styles.featureItem}><BarChart2 size={20} />Earning Potential</div>
          <div className={styles.featureItem}><Building size={20} />Compare Universities</div>
          <div className={styles.featureItem}><ShieldCheck size={20} />Data-Backed Decisions</div>
        </div>
      </div>

      {/* ── Info Banner ── */}
      <div className={styles.infoBanner}>
        <div className={styles.infoContent}>
          <div className={styles.iconWrapper}><Lightbulb size={24} /></div>
          <div>
            <h3>What is ROI in Education?</h3>
            <p>
              ROI (Return on Investment) shows how much financial value you can expect
              from your degree relative to its cost. It accounts for your full earning
              window during the course duration versus what you paid.
            </p>
          </div>
        </div>
        <div className={styles.formulaBox}>
          <span className={styles.formulaLabel}>Formula</span>
          <code>ROI = (Total Return − Investment) ÷ Investment × 100</code>
          <small>Total Return = Annual Salary × Course Duration</small>
        </div>
      </div>

      {/* ── Calculator + Result ── */}
      <div className={styles.calculatorSection}>
        {/* Left: Form */}
        <div className={styles.card}>
          <div className={styles.formHeader}>
            <Calculator size={24} />
            <h2>Calculate Your ROI</h2>
          </div>
          <p className={styles.formSubtitle}>
            Select your university, degree, and course to see the ROI instantly.
          </p>

          {/* University */}
          <div className={styles.formGroup}>
            <label>University</label>
            <select value={univKey} onChange={(e) => handleUnivChange(e.target.value)}>
              {Object.entries(UNIVERSITIES).map(([key, u]) => (
                <option key={key} value={key}>{u.label}</option>
              ))}
            </select>
          </div>

          {/* Degree Type */}
          <div className={styles.formGroup}>
            <label>Degree Level</label>
            <div className={styles.toggleGroup}>
              <button
                className={degreeType === "ug" ? styles.toggleActive : styles.toggleBtn}
                onClick={() => handleDegreeChange("ug")}
              >
                UG (Under Graduate)
              </button>
              <button
                className={degreeType === "pg" ? styles.toggleActive : styles.toggleBtn}
                onClick={() => handleDegreeChange("pg")}
              >
                PG (Post Graduate)
              </button>
            </div>
          </div>

          {/* Course */}
          <div className={styles.formGroup}>
            <label>Course / Program</label>
            <select
              value={courseIdx}
              onChange={(e) => { setCourseIdx(Number(e.target.value)); setCalculated(false); }}
            >
              {degreeData.courses.map((c, i) => (
                <option key={i} value={i}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Read-only derived fields */}
          <div className={styles.inputRow}>
            <div className={styles.infoField}>
              <span>Course Duration</span>
              <strong>{course.duration} Years</strong>
            </div>
            <div className={styles.infoField}>
              <span>Total Fees (Investment)</span>
              <strong>{formatINR(course.fees)}</strong>
            </div>
          </div>

          <div className={styles.infoField} style={{ marginBottom: "24px" }}>
            <span>Avg. Annual Salary (NIRF Data)</span>
            <strong>{formatINR(degreeData.avgSalary)}/year</strong>
          </div>

          <button className={styles.calculateBtn} onClick={() => setCalculated(true)}>
            Calculate ROI <Calculator size={18} />
          </button>
        </div>

        {/* Right: Result */}
        <div className={`${styles.card} ${styles.resultContent}`}>
          <div className={styles.resultHeader}>
            {isPositive ? <ArrowUpRight size={24} /> : <TrendingDown size={24} />}
            <h2>Your ROI Result</h2>
          </div>

          {!calculated ? (
            <div className={styles.emptyResult}>
              <Calculator size={48} opacity={0.15} />
              <p>Fill in the details and click <strong>Calculate ROI</strong> to see your results.</p>
            </div>
          ) : (
            <>
              <div className={`${styles.roiCircle} ${isPositive ? styles.positive : styles.negative}`}>
                <div className={styles.percentage}>{roi.toFixed(1)}%</div>
                <div className={styles.roiStatus}>
                  {isPositive ? "Positive ROI" : "Negative ROI"}
                  {isPositive ? <ArrowUpRight size={14} /> : <TrendingDown size={14} />}
                </div>
              </div>

              <div className={`${styles.resultMessage} ${isPositive ? styles.positiveMsg : styles.negativeMsg}`}>
                {isPositive
                  ? <>Your investment is expected to return <strong>{roi.toFixed(1)}% positive ROI</strong> over {course.duration} years. 🎉</>
                  : <>This program results in a <strong>{Math.abs(roi).toFixed(1)}% negative ROI</strong> — consider other options.</>
                }
              </div>

              <div className={styles.resultStats}>
                <div className={styles.statBox}>
                  <TrendingUp size={24} />
                  <div className={styles.statInfo}>
                    <span>Total Return<br />(over {course.duration} yrs)</span>
                    <strong>{formatINR(totalReturn)}</strong>
                  </div>
                </div>
                <div className={styles.statBox}>
                  <Wallet size={24} />
                  <div className={styles.statInfo}>
                    <span>Net Return<br />(Profit)</span>
                    <strong className={isPositive ? styles.profit : styles.loss}>
                      {isPositive ? "+" : "-"}{formatINR(netReturn)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className={styles.breakevenBox}>
                <span>⏱ Breakeven Period</span>
                <strong>
                  {breakeven < 1
                    ? `${(breakeven * 12).toFixed(1)} months`
                    : `${breakeven.toFixed(1)} years`}
                </strong>
                <small>Time to recover your investment from salary alone</small>
              </div>

              <button className={styles.downloadBtn}>
                Download Report <Download size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── Conversion Flow ── */}
      {calculated && (
        <div className={styles.conversionSection}>
          <h3>See How Your Investment Converts</h3>
          <p>Visual breakdown of how your tuition turns into future returns.</p>
          <div className={styles.conversionFlow}>
            <div className={styles.flowItem}>
              <div className={styles.flowIcon}>₹</div>
              <div className={styles.flowInfo}>
                <span>Total Investment</span>
                <strong>{formatINR(course.fees)}</strong>
                <small>Your total course cost</small>
              </div>
            </div>
            <div className={styles.operator}>×</div>
            <div className={styles.flowItem}>
              <div className={styles.flowIcon}><TrendingUp size={18} /></div>
              <div className={styles.flowInfo}>
                <span>Annual Salary × {course.duration} yrs</span>
                <strong>{formatINR(degreeData.avgSalary)} × {course.duration}</strong>
                <small>Total expected earnings</small>
              </div>
            </div>
            <div className={styles.operator}>=</div>
            <div className={styles.flowItem}>
              <div className={styles.flowIcon}><Wallet size={18} /></div>
              <div className={styles.flowInfo}>
                <span>Net Return</span>
                <strong className={isPositive ? styles.profit : styles.loss}>
                  {isPositive ? "+" : "-"}{formatINR(netReturn)}
                </strong>
                <small>What you gain after fees</small>
              </div>
            </div>
            <div className={styles.operator}><ArrowRight size={18} /></div>
            <div className={styles.flowItem}>
              <div className={styles.flowIcon}><BarChart2 size={18} /></div>
              <div className={styles.flowInfo}>
                <span>ROI</span>
                <strong className={isPositive ? styles.profit : styles.loss}>
                  {roi.toFixed(1)}%
                </strong>
                <small>Return on Investment</small>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Comparison Table ── */}
      <div className={styles.comparisonSection}>
        <h3>Compare ROI Across Universities</h3>
        <p>
          How does <strong>{univ.label}</strong> stack up for {degreeType.toUpperCase()} programs?
        </p>
        <div className={styles.comparisonGrid}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>University</th>
                  <th>Total Fees (₹)</th>
                  <th>Avg. Annual Salary (₹)</th>
                  <th>ROI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows
                  .sort((a, b) => b.roi - a.roi)
                  .map((row) => (
                    <tr key={row.key} className={row.key === univKey ? styles.highlighted : ""}>
                      <td>
                        {row.label}
                        {row.key === univKey && <span className={styles.youBadge}>You</span>}
                      </td>
                      <td>{formatINR(row.fees)}</td>
                      <td>{formatINR(row.salary)}</td>
                      <td className={row.roi >= 0 ? styles.roiPositive : styles.roiNegative}>
                        {row.roi.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className={styles.compareBtn}>
              Compare More Universities <ExternalLink size={14} />
            </button>
          </div>

          <div className={styles.didYouKnow}>
            <div className={styles.dykTitle}>
              <Star size={20} /> Did You Know?
            </div>
            <p>
              ROI is calculated over the full course duration. A 3-year BCA at ₹1.82L with
              ₹11.68L/yr salary gives <strong>~1825% ROI</strong> — one of the highest in India.
            </p>
            <Link href="#">Explore Top ROI Courses &rarr;</Link>
            <div className={styles.trophyWrap}>
              <span style={{ fontSize: "32px" }}>🏆</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className={styles.benefitsCards}>
        <div className={`${styles.benefitCard} ${styles.green}`}>
          <div className={styles.benefitIcon}><TrendingUp size={24} color="#166534" /></div>
          <div>
            <h4>High ROI Benefits</h4>
            <ul>
              <li>Better career opportunities</li>
              <li>Higher earning potential</li>
              <li>Faster return on investment</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.benefitCard} ${styles.amber}`}>
          <div className={styles.benefitIcon}><Target size={24} color="#b45309" /></div>
          <div>
            <h4>Make Smarter Choices</h4>
            <ul>
              <li>Use data, not guesswork</li>
              <li>Compare and choose wisely</li>
              <li>Invest in your future</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.benefitCard} ${styles.indigo}`}>
          <div className={styles.benefitIcon}><HeadphonesIcon size={24} color="#4338ca" /></div>
          <div>
            <h4>We&apos;re Here to Help</h4>
            <p>Not sure which course gives you the best ROI? Talk to our experts.</p>
            <Link href="#">Talk to an Expert &rarr;</Link>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaLeft}>
          <GraduationCap size={48} opacity={0.4} />
          <div>
            <h2>Still unsure about your choice?</h2>
            <p>Get free expert counseling and find the best course that gives you the highest return.</p>
          </div>
        </div>
        <button>
          Talk to an Expert <MessageSquare size={18} />
        </button>
      </div>
    </main>
  );
}
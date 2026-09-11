"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart2, Building, ShieldCheck, Lightbulb,
  Calculator, TrendingUp, Wallet, ArrowRight,
  ExternalLink, Download, ArrowUpRight, Star, Target,
  HeadphonesIcon, MessageSquare, GraduationCap, TrendingDown,
} from "lucide-react";
import Link from "next/link";
import { CollegeDetail, Stream } from "../../data/api";

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

// ─── Data & Helpers ──────────────────────────────────────────────────────────

export interface CalculatedCourse {
  id: string | number;
  label: string;
  duration: number; // years
  fees: number;     // ₹ total
  salary: number;   // ₹ annual
  streamTitle?: string;
}

export interface UniversityROI {
  id: string;
  label: string;
  courses: CalculatedCourse[];
}

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
export const parseFee = (feeStr: string | undefined): number => {
  if (!feeStr || feeStr === "-") return 0;

  const str = feeStr.trim().toLowerCase().replace(/,/g, "");

  const lakhMatch = str.match(/([\d.]+)\s*l(?:akh|akhs)?/i);
  if (lakhMatch) {
    return Math.round(parseFloat(lakhMatch[1]) * 100000);
  }

  const thousandMatch = str.match(/([\d.]+)\s*k/i);
  if (thousandMatch) {
    return Math.round(parseFloat(thousandMatch[1]) * 1000);
  }

  const plain = parseFloat(str.replace(/[^\d.]/g, ""));
  if (!isNaN(plain) && plain > 0) {
    return Math.round(plain);
  }

  return 0;
};

export const parseDuration = (durationStr: string | undefined): number => {
  if (!durationStr) return 2;
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 2;
};

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

export function getIndicativeSalary(courseName: string): number {
  const lower = courseName.toLowerCase();
  for (const [key, salary] of Object.entries(SALARY_BY_COURSE)) {
    if (lower.includes(key)) return salary;
  }
  return 500000;
}

const formatINR = (val: number) => {
  const digits = String(Math.round(Math.abs(val)));
  if (digits.length <= 3) return `₹ ${digits}`;
  const lastThree = digits.slice(-3);
  const rest = digits.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹ ${rest},${lastThree}`;
};

function calcROI(investment: number, annualSalary: number, duration: number) {
  const totalReturn = annualSalary * duration;
  const netReturn = totalReturn - investment;
  const roi = investment > 0 ? (netReturn / investment) * 100 : 0;
  const breakeven = annualSalary > 0 ? investment / annualSalary : 0; // in years
  return { totalReturn, netReturn, roi, breakeven };
}

// Fallback initial universities in case props are empty
const FALLBACK_UNIVERSITIES: Record<string, UniversityROI> = {
  "65": {
    id: "65",
    label: "Manipal University Online",
    courses: [
      { id: "5954", label: "Online MBA", duration: 2, fees: 145000, salary: 700000 },
      { id: "5955", label: "Online MCA", duration: 2, fees: 110000, salary: 550000 },
      { id: "5958", label: "Online M.Com", duration: 2, fees: 90000, salary: 420000 },
      { id: "5959", label: "Online MEd.", duration: 2, fees: 85000, salary: 380000 },
      { id: "5962", label: "Executive MBA", duration: 2, fees: 240000, salary: 900000 },
      { id: "5963", label: "Exec PG Management", duration: 1, fees: 190000, salary: 900000 },
      { id: "5965", label: "Ph.D. in Management", duration: 3, fees: 170000, salary: 800000 },
      { id: "5969", label: "M.Ed & Ed.D Combo", duration: 4, fees: 220000, salary: 800000 },
    ],
  },
  "64": {
    id: "64",
    label: "Amity University Online",
    courses: [
      { id: "5954", label: "Online MBA", duration: 2, fees: 120000, salary: 700000 },
      { id: "5955", label: "Online MCA", duration: 2, fees: 80000, salary: 550000 },
      { id: "5956", label: "Online Msc", duration: 2, fees: 75000, salary: 450000 },
      { id: "5957", label: "Online MA", duration: 2, fees: 60000, salary: 400000 },
      { id: "5958", label: "Online M.Com", duration: 2, fees: 65000, salary: 420000 },
      { id: "5962", label: "Executive MBA", duration: 2, fees: 200000, salary: 900000 },
      { id: "5965", label: "Ph.D. in Management", duration: 3, fees: 180000, salary: 800000 },
      { id: "5966", label: "Ph.D. in Education", duration: 3, fees: 150000, salary: 800000 },
    ],
  },
  "68": {
    id: "68",
    label: "Jain University Online",
    courses: [
      { id: "5954", label: "Online MBA", duration: 2, fees: 125000, salary: 700000 },
      { id: "5955", label: "Online MCA", duration: 2, fees: 90000, salary: 550000 },
      { id: "5968", label: "MBA & Doctorate Combo", duration: 4, fees: 250000, salary: 800000 },
    ],
  },
  "66": {
    id: "66",
    label: "Lovely Professional University Online",
    courses: [
      { id: "5954", label: "Online MBA", duration: 2, fees: 120000, salary: 700000 },
      { id: "5955", label: "Online MCA", duration: 2, fees: 100000, salary: 550000 },
      { id: "5960", label: "1 Year MBA Online", duration: 1, fees: 90000, salary: 600000 },
      { id: "5961", label: "DUAL MBA Online", duration: 2, fees: 130000, salary: 650000 },
      { id: "5962", label: "Executive MBA", duration: 2, fees: 180000, salary: 900000 },
      { id: "5964", label: "Senior Mgmt Programme", duration: 1, fees: 220000, salary: 1000000 },
      { id: "5965", label: "Ph.D. in Management", duration: 3, fees: 170000, salary: 800000 },
      { id: "5967", label: "Ph.D. in CS", duration: 3, fees: 190000, salary: 800000 },
    ],
  },
  "67": {
    id: "67",
    label: "Chandigarh University Online",
    courses: [
      { id: "22", label: "Online MBA", duration: 2, fees: 115000, salary: 700000 },
      { id: "5955", label: "Online MCA", duration: 2, fees: 90000, salary: 550000 },
      { id: "5958", label: "Online M.Com", duration: 2, fees: 70000, salary: 420000 },
    ],
  },
  "69": {
    id: "69",
    label: "Shoolini University",
    courses: [
      { id: "5965", label: "Ph.D. in Management", duration: 3, fees: 160000, salary: 800000 },
    ],
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

interface ROICalculatorProps {
  collegesData?: CollegeDetail[];
  streamsData?: Stream[];
}

export default function ROICalculator({
  collegesData = [],
  streamsData = [],
}: ROICalculatorProps) {
  // Map courses to streams if streamsData is provided
  const courseStreamMap = useMemo(() => {
    const map = new Map<number | string, string>();
    (streamsData || []).forEach((stream) => {
      (stream.courses || []).forEach((c) => {
        map.set(c.id, stream.title || "");
      });
    });
    return map;
  }, [streamsData]);

  // Build universities map from collegesData API response
  const universities = useMemo(() => {
    if (!collegesData || collegesData.length === 0) {
      return FALLBACK_UNIVERSITIES;
    }

    const ONLINE_IDS = new Set([64, 65, 66, 67, 68, 69]);
    const result: Record<string, UniversityROI> = {};

    collegesData.forEach((college) => {
      const isOnline =
        ONLINE_IDS.has(college.id) ||
        (college.college_full_name || "").toLowerCase().includes("online");

      if (!isOnline) return;

      const key = college.id.toString();
      const collegeName = college.college_full_name || "Unknown College";

      const courses: CalculatedCourse[] = [];

      (college.courses || []).forEach((c) => {
        const fees = parseFee(c.pivot?.fee);
        if (fees === 0) return;

        const duration = parseDuration(c.duration);
        const streamTitle = courseStreamMap.get(c.id) || "Post Graduate";

        courses.push({
          id: c.id,
          label: c.name || "Unknown Course",
          duration,
          fees,
          salary: getIndicativeSalary(c.name || ""),
          streamTitle,
        });
      });

      if (courses.length > 0) {
        result[key] = {
          id: key,
          label: collegeName,
          courses,
        };
      }
    });

    return Object.keys(result).length > 0 ? result : FALLBACK_UNIVERSITIES;
  }, [collegesData, courseStreamMap]);

  const univKeys = useMemo(() => Object.keys(universities), [universities]);
  const defaultUnivKey = univKeys.length > 0 ? univKeys[0] : "65";

  const [univKey, setUnivKey] = useState<string>(defaultUnivKey);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [courseIdx, setCourseIdx] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  // Active university
  const activeUnivKey = universities[univKey] ? univKey : defaultUnivKey;
  const univ = universities[activeUnivKey] || FALLBACK_UNIVERSITIES["65"];

  // Available categories for this university
  const courseCategories = useMemo(() => {
    const cats = new Set<string>();
    (univ.courses || []).forEach((c) => {
      if (c.streamTitle) cats.add(c.streamTitle);
    });
    return ["All", ...Array.from(cats)];
  }, [univ]);

  // Filtered courses based on selected category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return univ.courses || [];
    const filtered = (univ.courses || []).filter((c) => c.streamTitle === selectedCategory);
    return filtered.length > 0 ? filtered : univ.courses || [];
  }, [univ, selectedCategory]);

  const activeCourseIdx = Math.min(courseIdx, Math.max(0, filteredCourses.length - 1));
  const course = filteredCourses[activeCourseIdx] || univ.courses[0];

  const handleUnivChange = (key: string) => {
    setUnivKey(key);
    setSelectedCategory("All");
    setCourseIdx(0);
    setCalculated(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCourseIdx(0);
    setCalculated(false);
  };

  const { totalReturn, netReturn, roi, breakeven } = useMemo(
    () => (course ? calcROI(course.fees, course.salary, course.duration) : { totalReturn: 0, netReturn: 0, roi: 0, breakeven: 0 }),
    [course]
  );

  const isPositive = roi >= 0;

  // Comparison rows across universities
  const comparisonRows = useMemo(() => {
    if (!course) return [];
    return Object.entries(universities).map(([key, u]) => {
      const matchingCourse =
        u.courses.find((c) => c.label.toLowerCase() === course.label.toLowerCase()) ||
        u.courses[0];
      const { roi: r } = calcROI(matchingCourse.fees, matchingCourse.salary, matchingCourse.duration);
      return {
        key,
        label: u.label,
        courseLabel: matchingCourse.label,
        fees: matchingCourse.fees,
        salary: matchingCourse.salary,
        roi: r,
      };
    });
  }, [universities, course]);

  if (!course) return null;

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
            Select your university and degree programme to see the ROI instantly.
          </p>

          {/* University */}
          <div className={styles.formGroup}>
            <label>University</label>
            <select value={activeUnivKey} onChange={(e) => handleUnivChange(e.target.value)}>
              {Object.entries(universities).map(([key, u]) => (
                <option key={key} value={key}>{u.label}</option>
              ))}
            </select>
          </div>

          {/* Program Category (if multiple) */}
          {courseCategories.length > 2 && (
            <div className={styles.formGroup}>
              <label>Program Category</label>
              <div className={styles.toggleGroup}>
                {courseCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={selectedCategory === cat ? styles.toggleActive : styles.toggleBtn}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Course */}
          <div className={styles.formGroup}>
            <label>Course / Program</label>
            <select
              value={activeCourseIdx}
              onChange={(e) => { setCourseIdx(Number(e.target.value)); setCalculated(false); }}
            >
              {filteredCourses.map((c, i) => (
                <option key={c.id || i} value={i}>
                  {c.label} ({c.duration} {c.duration === 1 ? "Year" : "Years"})
                </option>
              ))}
            </select>
          </div>

          {/* Read-only derived fields */}
          <div className={styles.inputRow}>
            <div className={styles.infoField}>
              <span>Course Duration</span>
              <strong>{course.duration} {course.duration === 1 ? "Year" : "Years"}</strong>
            </div>
            <div className={styles.infoField}>
              <span>Total Fees (Investment)</span>
              <strong>{formatINR(course.fees)}</strong>
            </div>
          </div>

          <div className={styles.infoField} style={{ marginBottom: "24px" }}>
            <span>Avg. Annual Salary (Indicative NIRF Data)</span>
            <strong>{formatINR(course.salary)}/year</strong>
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
                  ? <>Your investment is expected to return <strong>{roi.toFixed(1)}% positive ROI</strong> over {course.duration} {course.duration === 1 ? "year" : "years"}. 🎉</>
                  : <>This program results in a <strong>{Math.abs(roi).toFixed(1)}% negative ROI</strong> — consider other options.</>
                }
              </div>

              <div className={styles.resultStats}>
                <div className={styles.statBox}>
                  <TrendingUp size={24} />
                  <div className={styles.statInfo}>
                    <span>Total Return<br />(over {course.duration} {course.duration === 1 ? "yr" : "yrs"})</span>
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
                <span>Annual Salary × {course.duration} {course.duration === 1 ? "yr" : "yrs"}</span>
                <strong>{formatINR(course.salary)} × {course.duration}</strong>
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
          How does <strong>{univ.label}</strong> stack up for online degree programs?
        </p>
        <div className={styles.comparisonGrid}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>University</th>
                  <th>Course</th>
                  <th>Total Fees (₹)</th>
                  <th>Avg. Annual Salary (₹)</th>
                  <th>ROI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows
                  .sort((a, b) => b.roi - a.roi)
                  .map((row) => (
                    <tr key={row.key} className={row.key === activeUnivKey ? styles.highlighted : ""}>
                      <td>
                        {row.label}
                        {row.key === activeUnivKey && <span className={styles.youBadge}>You</span>}
                      </td>
                      <td>{row.courseLabel}</td>
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
              ROI is calculated over the full course duration. A 2-year Online MBA at ₹1.20L with
              ₹7.00L/yr salary gives <strong>~1066% ROI</strong> — offering exceptional returns for
              working professionals.
            </p>
            <Link href="/universities">Explore Top Online Universities &rarr;</Link>
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
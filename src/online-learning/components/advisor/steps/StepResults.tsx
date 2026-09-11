"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Star, Clock, Banknote, ShieldCheck } from "lucide-react";
import { CollegeDetail } from "../../../data/api";
import { matchUniversities, type MatchedUniversity } from "../advisorData";

interface StepResultsProps {
  courseId: string;
  answers: {
    specialization: string | null;
    budgetRange: string | null;
    experience: string | null;
    learningMode: string | null;
  };
  collegeDetails?: CollegeDetail[];
}

const parseFee = (feeStr: string | undefined): number => {
  if (!feeStr || feeStr === "-") return 0;
  const str = feeStr.trim().toLowerCase().replace(/,/g, "");
  const lakhMatch = str.match(/([\d.]+)\s*l(?:akh|akhs)?/i);
  if (lakhMatch) return Math.round(parseFloat(lakhMatch[1]) * 100000);
  const thousandMatch = str.match(/([\d.]+)\s*k/i);
  if (thousandMatch) return Math.round(parseFloat(thousandMatch[1]) * 1000);
  const plain = parseFloat(str.replace(/[^\d.]/g, ""));
  if (!isNaN(plain) && plain > 0) return Math.round(plain);
  return 0;
};

const formatINR = (val: number) => {
  const digits = String(Math.round(Math.abs(val)));
  if (digits.length <= 3) return `₹${digits}`;
  const lastThree = digits.slice(-3);
  const rest = digits.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${rest},${lastThree}`;
};

const COLLEGE_META: Record<
  string | number,
  { location: string; rating: number; reviews: number; logo: string; accreditations: string[] }
> = {
  64: {
    location: "Noida, Uttar Pradesh",
    rating: 4.8,
    reviews: 1420,
    logo: "/assets/images/college/amity.logo.jpg",
    accreditations: ["NAAC A+", "UGC Entitled", "AICTE Approved"],
  },
  65: {
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    reviews: 2150,
    logo: "/assets/images/college/manipal.logo.jpg",
    accreditations: ["NAAC A+", "WES Recognized", "UGC Entitled"],
  },
  66: {
    location: "Phagwara, Punjab",
    rating: 4.7,
    reviews: 1980,
    logo: "/assets/images/college/lpu.logo.jpg",
    accreditations: ["NAAC A++", "UGC Entitled", "NIRF Ranked"],
  },
  67: {
    location: "Mohali, Punjab",
    rating: 4.7,
    reviews: 1320,
    logo: "/assets/images/college/chandigarh.logo.png",
    accreditations: ["NAAC A+", "UGC Entitled", "AICTE Approved"],
  },
  68: {
    location: "Bangalore, Karnataka",
    rating: 4.6,
    reviews: 1100,
    logo: "/assets/images/college/amity.logo.jpg",
    accreditations: ["NAAC A++", "UGC Entitled", "AICTE Approved"],
  },
  69: {
    location: "Solan, Himachal Pradesh",
    rating: 4.6,
    reviews: 860,
    logo: "/assets/images/college/shoolini.logo.jpg",
    accreditations: ["NAAC A+", "NIRF Top 100", "UGC Entitled"],
  },
};

export default function StepResults({ courseId, answers, collegeDetails = [] }: StepResultsProps) {
  // Find all colleges in collegeDetails that offer this course
  let results: MatchedUniversity[] = [];

  if (collegeDetails && collegeDetails.length > 0) {
    const matchedColleges = collegeDetails.filter((college) => {
      return (college.courses || []).some(
        (c) =>
          String(c.id) === String(courseId) ||
          c.name.toLowerCase().includes(courseId.toLowerCase())
      );
    });

    if (matchedColleges.length > 0) {
      results = matchedColleges.map((college) => {
        const matchingCourse = (college.courses || []).find(
          (c) =>
            String(c.id) === String(courseId) ||
            c.name.toLowerCase().includes(courseId.toLowerCase())
        );

        const feeNumeric = parseFee(matchingCourse?.pivot?.fee);
        const duration = matchingCourse?.duration || "2 Years";
        const meta = COLLEGE_META[college.id] || {
          location: "India",
          rating: 4.6,
          reviews: 950,
          logo: "/assets/images/college/amity.logo.jpg",
          accreditations: ["NAAC Accredited", "UGC Entitled"],
        };

        // Calculate score
        let score = 88;
        if (answers.budgetRange && feeNumeric > 0) {
          if (answers.budgetRange === "under-1l" && feeNumeric <= 100000) score += 8;
          if (answers.budgetRange === "1l-3l" && feeNumeric >= 100000 && feeNumeric <= 300000) score += 8;
          if (answers.budgetRange === "3l-6l" && feeNumeric >= 300000) score += 8;
        }

        const durationYears = parseInt(duration, 10) || 2;
        const emiNumeric = feeNumeric > 0 ? Math.round(feeNumeric / (durationYears * 12)) : 5000;

        return {
          id: String(college.id),
          name: college.college_full_name,
          logo: meta.logo,
          location: meta.location,
          rating: meta.rating,
          reviews: meta.reviews,
          fee: feeNumeric > 0 ? formatINR(feeNumeric) : (matchingCourse?.pivot?.fee || "Contact for Fees"),
          feeNumeric,
          duration,
          emi: `₹${emiNumeric.toLocaleString("en-IN")}/month`,
          accreditations: meta.accreditations,
          highlights: ["100% Placement Assistance", "Live Interactive LMS"],
          courses: [courseId],
          specializations: [],
          learningModes: ["self-paced", "weekend"],
          experienceLevel: ["fresher", "1-3-years", "3-5-years"],
          matchScore: Math.min(99, score),
        };
      });

      results.sort((a, b) => b.matchScore - a.matchScore);
    }
  }

  // Fallback to advisorUniversities if no colleges found from API for this specific ID
  if (results.length === 0) {
    results = matchUniversities(answers, courseId);
  }

  const getMatchLevel = (score: number) => {
    if (score >= 80) return "high";
    if (score >= 60) return "medium";
    return "low";
  };

  return (
    <div style={{ paddingRight: '12px' }}>
      <div className="advResultsHeader" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 className="advQuestion" style={{ marginBottom: '4px' }}>Your Top Matches</h2>
          <p className="advQuestionSub" style={{ margin: 0 }}>Universities offering your selected program based on your preferences</p>
        </div>
        <span className="advResultsCount" style={{ color: '#079db4', fontWeight: 600 }}>{results.length} universities found</span>
      </div>

      <div className="advResultsList" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {results.map((uni, i) => (
          <motion.div
            key={uni.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="advResultCard"
            style={{ 
              display: 'flex', 
              gap: '24px', 
              padding: '24px', 
              background: '#fff', 
              border: '1px solid #e3e9ec',
              borderRadius: '20px',
              alignItems: 'flex-start',
              boxShadow: '0 4px 12px rgba(18, 32, 54, 0.04)'
            }}
          >
            <div className="advResultLogo" style={{ 
              width: '72px', 
              height: '72px', 
              background: '#f4f7f8', 
              borderRadius: '16px', 
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Image
                src={uni.logo}
                alt={`${uni.name} logo`}
                width={56}
                height={56}
                style={{ objectFit: "contain", borderRadius: '8px' }}
              />
            </div>

            <div className="advResultInfo" style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: '12px' }}>
                <div>
                  <h4 className="advResultName" style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0', color: '#122036' }}>{uni.name}</h4>
                  <div className="advResultMeta" style={{ display: 'flex', gap: '16px', color: '#647085', fontSize: '13px' }}>
                    <span className="advResultMetaItem" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {uni.location}
                    </span>
                    <span className="advResultMetaItem" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} color="#ffb915" /> {uni.rating}/5 ({uni.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className={`advMatchBadge ${getMatchLevel(uni.matchScore)}`} style={{ 
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    backgroundColor: 'rgba(7, 157, 180, 0.1)',
                    color: '#079db4'
                  }}>
                    {uni.matchScore}% Match
                  </span>
                </div>
              </div>

              <div className="advResultMeta" style={{ display: 'flex', gap: '20px', marginBottom: '16px', color: '#122036', fontSize: '14px', fontWeight: 500 }}>
                <span className="advResultMetaItem" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Banknote size={16} color="#079db4" /> {uni.fee}
                </span>
                <span className="advResultMetaItem" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="#079db4" /> {uni.duration}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="advResultTags" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {uni.accreditations.map((acc) => (
                    <span key={acc} className="advResultTag" style={{ 
                      fontSize: '11px', 
                      padding: '4px 10px', 
                      background: '#f4f7f8', 
                      borderRadius: '6px',
                      color: '#647085',
                      fontWeight: 500
                    }}>
                      {acc}
                    </span>
                  ))}
                </div>
                
                <button className="advResultBtn" style={{ 
                  background: '#079db4', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '10px 20px', 
                  borderRadius: '10px', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#087d9b'}
                onMouseOut={(e) => e.currentTarget.style.background = '#079db4'}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


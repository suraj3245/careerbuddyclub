"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Star, Clock, Banknote } from "lucide-react";
import { useAuth } from "@/careerwise/context/AuthContext";
import { matchUniversities, type MatchedUniversity } from "../advisorData";
import LoginGate from "../LoginGate";

interface StepResultsProps {
  courseId: string;
  answers: {
    specialization: string | null;
    budgetRange: string | null;
    experience: string | null;
    learningMode: string | null;
  };
}

export default function StepResults({ courseId, answers }: StepResultsProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <LoginGate />
      </div>
    );
  }

  const results: MatchedUniversity[] = matchUniversities(answers, courseId);

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
          <p className="advQuestionSub" style={{ margin: 0 }}>Based on your preferences</p>
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
                  <h4 className="advResultName" style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0', color: '#122036' }}>{uni.name}</h4>
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
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { UniversityCourse } from "@/online-learning/data/api";

interface ProgramCatalogProps {
  courses: UniversityCourse[];
  universityName: string;
  onRequestDetails: (programName: string) => void;
}

export const ProgramCatalog: React.FC<ProgramCatalogProps> = ({
  courses,
  universityName,
  onRequestDetails,
}) => {
  const [showAll, setShowAll] = useState(false);

  const formatFee = (fee: string | undefined) => {
    if (!fee) return "Contact for details";
    
    // Check for "L" or "Lakh" abbreviation
    if (/[\d.]+\s*(L|Lakh)/i.test(fee)) {
       const val = parseFloat(fee.replace(/[^\d.]/g, ""));
       if (!isNaN(val)) return "₹" + val + " Lakh";
    }
    // Check for "K" or "Thousand" abbreviation
    if (/[\d.]+\s*(K|Thousand)/i.test(fee)) {
       const val = parseFloat(fee.replace(/[^\d.]/g, ""));
       if (!isNaN(val)) return "₹" + val + " Thousand";
    }

    // If it's a range or complex string, just return it
    if (fee.includes('-')) {
       return fee; 
    }

    const parsedFee = parseFloat(fee.replace(/[^0-9.]/g, ""));
    if (isNaN(parsedFee)) return fee;

    if (parsedFee >= 100000) {
      const lakhs = parsedFee / 100000;
      return "₹" + (Number.isInteger(lakhs) ? lakhs : lakhs.toFixed(2)) + " Lakh";
    } else if (parsedFee >= 1000) {
      const thousands = parsedFee / 1000;
      return "₹" + (Number.isInteger(thousands) ? thousands : thousands.toFixed(2)) + " Thousand";
    }
    return "₹" + new Intl.NumberFormat("en-IN").format(parsedFee);
  };

  const getBadgeClass = (level: string | undefined) => {
    const l = (level || "").toLowerCase();
    if (l === "ug") return "upDegreeBadge--ug";
    if (l === "pg") return "upDegreeBadge--pg";
    if (l === "phd") return "upDegreeBadge--phd";
    if (l === "diploma") return "upDegreeBadge--diploma";
    if (l === "certificate") return "upDegreeBadge--certificate";
    return "upDegreeBadge--other";
  };

  const displayedCourses = showAll ? courses : courses.slice(0, 9);

  return (
    <section id="programs" className="upPrograms">
      <h2>Online Programs Offered</h2>

      {courses.length === 0 ? (
        <div className="upEmptyState">
          No programs are currently listed for this university.
        </div>
      ) : (
        <div className="upProgramGrid">
          {displayedCourses.map((course) => (
            <div key={course.id} className="upProgramCard">
              <div className="upProgramCardImageWrapper">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Program Cover"
                  className="upProgramCardImage"
                />
                <div className="upProgramCardLogoWrapper">
                  {/* Using a placeholder logo or university name if logo is unavailable */}
                  <img src="/assets/images/logo/logo.png" alt="Logo" className="upProgramCardLogo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              </div>
              <div className="upProgramCardContent">
                <div className="upProgramCardUniName">{universityName.toUpperCase()}</div>
                <h3 className="upCardTitle">{course.name}</h3>
                
                <div className="upCardMeta">
                  <div className="upCardMetaItem">
                    <strong>Duration:</strong> {course.duration || "Contact for details"}
                  </div>
                  <div className="upCardMetaItem">
                    <strong>Fee:</strong> {formatFee(course.fee)}
                  </div>
                </div>

                <div className="upCardActions">
                  <button 
                    className="upCardReadMoreBtn"
                    onClick={() => onRequestDetails(course.name)}
                  >
                    Read more &gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {courses.length > 9 && (
        <button
          className="upViewAllBtn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Programs"}
        </button>
      )}
    </section>
  );
};

"use client";

import { useState } from "react";
import { GraduationCap, ArrowRight, ChevronUp } from "lucide-react";
import UniversityCard from "./UniversityCard";
import { universitiesData } from "./universityData";

export default function UniversitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleUniversities = showAll ? universitiesData : universitiesData.slice(0, 16);

  return (
    <section className="universitiesSection">
      <div className="uniContainer">
        <span className="uniEyebrow">
          <GraduationCap size={14} strokeWidth={2.5} />
          Universities
        </span>
        
        <h2 className="uniTitle">
          <span className="uniHighlight">UGC-approved</span> universities, verified by us &amp; reviewed by learners
        </h2>
        
        <p className="uniSubtitle">
          Every institution evaluated on 30+ factors — admissions, faculty, placement &amp; more.
        </p>
        
        <div className="uniGrid">
          {visibleUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
        
        <button className="uniViewAllBtn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less Universities" : `View All ${universitiesData.length} Universities`}
          {showAll ? <ChevronUp size={18} strokeWidth={2.5} /> : <ArrowRight size={18} strokeWidth={2.5} />}
        </button>
      </div>
    </section>
  );
}

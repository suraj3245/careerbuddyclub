import React from "react";
import { CheckCircle } from "lucide-react";

interface OverviewSectionProps {
  universityName: string;
  about?: string;
}

export function OverviewSection({ universityName, about }: OverviewSectionProps) {
  const fallback = `${universityName} is a premier institution dedicated to providing high-quality education. Explore our programs, faculty, and campus life to find the right fit for your career goals.`;

  return (
    <section id="overview" className="upSection">
      <div className="upOverviewHeader">
        <h2 className="upSectionTitle">About {universityName}</h2>
      </div>
      
      <div className="upOverviewContent">
        <div className="upOverviewText">
          <p>{about && about.trim() ? about : fallback}</p>
        </div>
      </div>

      <ul className="upOverviewList">
        <li className="upOverviewItem"><CheckCircle size={18} /> Flexible online learning environment</li>
        <li className="upOverviewItem"><CheckCircle size={18} /> Industry-aligned curriculum</li>
        <li className="upOverviewItem"><CheckCircle size={18} /> Expert faculty and dedicated mentors</li>
        <li className="upOverviewItem"><CheckCircle size={18} /> 24/7 access to digital library resources</li>
        <li className="upOverviewItem"><CheckCircle size={18} /> Comprehensive career support services</li>
        <li className="upOverviewItem"><CheckCircle size={18} /> Globally recognized certifications</li>
      </ul>
    </section>
  );
}

import React from "react";
import { CheckCircle } from "lucide-react";

interface OverviewSectionProps {
  universityName: string;
}

export function OverviewSection({ universityName }: OverviewSectionProps) {
  return (
    <section id="overview" className="upSection">
      <div className="upOverviewHeader">
        <h2 className="upSectionTitle">About {universityName}</h2>
      </div>
      
      <div className="upOverviewContent">
        <div className="upOverviewText">
          <p>
            {universityName} is a premier institution dedicated to providing high-quality online education. 
            Our comprehensive online programs are designed to meet the evolving needs of modern learners, 
            offering the flexibility to study from anywhere while maintaining rigorous academic standards.
          </p>
          <p>
            Our academic approach combines cutting-edge digital learning technologies with expert instruction. 
            Students have access to an extensive array of digital resources, interactive modules, and 
            real-world case studies that bridge the gap between theoretical knowledge and practical application.
          </p>


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

import React from "react";
import { UniversityCourse } from "@/online-learning/data/api";

interface FeaturedProgramProps {
  course: UniversityCourse;
  universityName: string;
}

export const FeaturedProgram: React.FC<FeaturedProgramProps> = ({
  course,
  universityName,
}) => {
  const formatFee = (fee: string | undefined) => {
    if (!fee) return "Contact for details";
    const parsedFee = parseFloat(fee.replace(/[^0-9.]/g, ""));
    if (isNaN(parsedFee)) return fee;
    return "₹" + new Intl.NumberFormat("en-IN").format(parsedFee);
  };

  return (
    <div className="upFeatured">
      <div className="upFeaturedCard">
        <span className="upFeaturedBadge">Featured Program</span>
        <h3 className="upFeaturedTitle">{course.name}</h3>
        <p className="upFeaturedDesc">
          A comprehensive online program offered by {universityName}. Enhance your skills and career prospects with this well-structured {course.degreeLevel} course.
        </p>
        
        <div className="upFeaturedMeta">
          <div>
            <strong>Degree Level:</strong> {course.degreeLevel || "Other"}
          </div>
          <div>
            <strong>Duration:</strong> {course.duration || "Contact for details"}
          </div>
          <div>
            <strong>Fee:</strong> {formatFee(course.fee)}
          </div>
          <div>
            <strong>Mode:</strong> Online
          </div>
        </div>

        <div className="upFeaturedCurriculum">
          <h4>Curriculum Overview</h4>
          <ul className="upFeaturedCurrList">
            <li>Introduction to Core Concepts</li>
            <li>Advanced Methodologies</li>
            <li>Industry Best Practices</li>
            <li>Practical Case Studies</li>
            <li>Elective Specialization</li>
            <li>Capstone Project</li>
          </ul>
        </div>

        <a href="#contact" className="upFeaturedCta">
          Talk to an Advisor
        </a>
      </div>
    </div>
  );
};
"use client";

import React, { useState } from "react";
import { UniversityCourse } from "@/online-learning/data/api";

import { Plus, Check } from "lucide-react";

interface ProgramComparisonProps {
  courses: UniversityCourse[];
}

export const ProgramComparison: React.FC<ProgramComparisonProps> = ({ courses }) => {
  const [selectedPrograms, setSelectedPrograms] = useState<number[]>([]);

  const toggleSelection = (index: number) => {
    setSelectedPrograms((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      if (prev.length >= 3) {
        alert("You can select up to 3 programs to compare.");
        return prev;
      }
      return [...prev, index];
    });
  };

  const formatFee = (fee: string | undefined) => {
    if (!fee) return "Contact for details";
    const parsedFee = parseFloat(fee.replace(/[^0-9.]/g, ""));
    if (isNaN(parsedFee)) return fee;
    return "₹" + new Intl.NumberFormat("en-IN").format(parsedFee);
  };

  const selectedCourses = selectedPrograms.map((index) => courses[index]);

  return (
    <section id="compare" className="upCompare">
      <h2>Compare Programs</h2>
      <p>Select up to 3 programs to compare side by side</p>

      <div className="upCompareSelector">
        {courses.map((course, index) => {
          const isSelected = selectedPrograms.includes(index);
          return (
            <button
              key={course.id || index}
              className={`upCompareSelectorChip ${
                isSelected ? "upCompareSelectorChipActive" : ""
              }`}
              onClick={() => toggleSelection(index)}
              title={isSelected ? "Remove from comparison" : "Add to comparison"}
            >
              {isSelected ? <Check size={14} className="mr-1" /> : <Plus size={14} className="mr-1" />}
              {course.name}
            </button>
          );
        })}
      </div>

      {selectedCourses.length >= 2 && (
        <div className="upCompareMobileScroll">
          <table className="upCompareTable">
            <thead className="upCompareTableHeader">
              <tr>
                <th>Feature</th>
                {selectedCourses.map((course) => (
                  <th key={course.id}>{course.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="upCompareTableRow">
                <td className="upCompareTableCell"><strong>Degree Level</strong></td>
                {selectedCourses.map((course) => (
                  <td key={course.id} className="upCompareTableCell">
                    {course.degreeLevel || "N/A"}
                  </td>
                ))}
              </tr>
              <tr className="upCompareTableRow">
                <td className="upCompareTableCell"><strong>Duration</strong></td>
                {selectedCourses.map((course) => (
                  <td key={course.id} className="upCompareTableCell">
                    {course.duration || "Contact for details"}
                  </td>
                ))}
              </tr>
              <tr className="upCompareTableRow">
                <td className="upCompareTableCell"><strong>Fee</strong></td>
                {selectedCourses.map((course) => (
                  <td key={course.id} className="upCompareTableCell">
                    {formatFee(course.fee)}
                  </td>
                ))}
              </tr>
              <tr className="upCompareTableRow">
                <td className="upCompareTableCell"><strong>Learning Mode</strong></td>
                {selectedCourses.map((course) => (
                  <td key={course.id} className="upCompareTableCell">Online</td>
                ))}
              </tr>
              <tr className="upCompareTableRow">
                <td className="upCompareTableCell"><strong>Stream Category</strong></td>
                {selectedCourses.map((course) => (
                  <td key={course.id} className="upCompareTableCell">
                    {course.streamCategory || "N/A"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

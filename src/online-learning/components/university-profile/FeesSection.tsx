import React from "react";
import { UniversityCourse } from "@/online-learning/data/api";

interface FeesSectionProps {
  courses: UniversityCourse[];
  universityName: string;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ courses, universityName }) => {
  const formatFee = (fee: string) => {
    let parsedFee = parseFloat(fee.replace(/[^0-9.]/g, ""));
    if (isNaN(parsedFee)) return fee;

    const lowerFee = fee.toLowerCase();
    if (lowerFee.includes("l")) {
      parsedFee = parsedFee * 100000;
    } else if (lowerFee.includes("k")) {
      parsedFee = parsedFee * 1000;
    } else {
      if (parsedFee < 10) {
        parsedFee = parsedFee * 100000;
      } else if (parsedFee >= 10 && parsedFee < 1000) {
        parsedFee = parsedFee * 1000;
      }
    }

    return "₹" + new Intl.NumberFormat("en-IN").format(parsedFee);
  };

  const coursesWithFees = courses.filter((course) => course.fee && course.fee.trim() !== "");

  return (
    <section id="fees" className="upFees">
      <h2 className="mb-4">Fees & Financial Information</h2>

      {coursesWithFees.length === 0 ? (
        <div className="upFeeEmpty">
          Fee details are currently not available. Contact us for the latest fee information.
        </div>
      ) : (
        <table className="upFeeTable">
          <thead className="upFeeTableHead">
            <tr>
              <th>Program Name</th>
              <th>Duration</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {coursesWithFees.map((course) => (
              <tr key={course.id} className="upFeeTableRow">
                <td className="upFeeTableCell">{course.name}</td>
                <td className="upFeeTableCell">{course.duration || "N/A"}</td>
                <td className="upFeeTableCell">{formatFee(course.fee as string)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
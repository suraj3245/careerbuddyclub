"use client";

import { motion } from "motion/react";
import { courseSpecializations } from "../advisorData";

interface StepSpecializationProps {
  courseId: string;
  selected: string | null;
  onSelect: (value: string) => void;
}

export default function StepSpecialization({ courseId, selected, onSelect }: StepSpecializationProps) {
  const options = courseSpecializations[courseId] || courseSpecializations["mba"];

  return (
    <div className="advSpecGrid">
      {options.map((opt, i) => (
        <motion.div
          key={opt.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className={`advSpecCard ${selected === opt.value ? "active" : ""}`}
          onClick={() => onSelect(opt.value)}
        >
          <div className="advSpecIconWrap">
             <span className="advSpecIcon">{opt.icon}</span>
          </div>
          <div className="advSpecLabelWrap">
             <span className="advSpecLabel">{opt.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

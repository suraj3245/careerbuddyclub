"use client";

import { motion } from "motion/react";
import { courseSpecializations } from "../advisorData";

interface StepSpecializationProps {
  courseId: string;
  selected: string | null;
  onSelect: (value: string) => void;
}

function getSpecializationKey(courseId: string): string {
  const s = (courseId || "").toLowerCase();
  if (courseSpecializations[s]) return s;
  if (s.includes("mba") || ["5954", "5960", "5961", "5962"].includes(s)) return "mba";
  if (s.includes("mca") || s === "5955") return "mca";
  if (s.includes("data") || s.includes("analytics") || s === "5971") return "ms-ds";
  if (s.includes("msc") || s === "5956") return "msc-it";
  if (s.includes("com") || s === "5958") return "mcom";
  if (s.includes("ma") || s === "5957") return "ma";
  if (s.includes("ai") || s === "5970") return "pg-ai";
  if (s.includes("phd") || s.includes("doctorate") || ["5965", "5966", "5967", "5968", "5969"].includes(s)) return "phd";
  if (s.includes("dip") || s.includes("exec") || ["5963", "5964"].includes(s)) return "pg-dip";
  return "mba";
}

export default function StepSpecialization({ courseId, selected, onSelect }: StepSpecializationProps) {
  const specKey = getSpecializationKey(courseId);
  const options = courseSpecializations[specKey] || courseSpecializations["mba"];

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

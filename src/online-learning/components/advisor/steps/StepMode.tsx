"use client";

import { motion } from "motion/react";
import { learningModeOptions } from "../advisorData";

interface StepModeProps {
  selected: string | null;
  onSelect: (value: string) => void;
}

export default function StepMode({ selected, onSelect }: StepModeProps) {
  return (
    <div className="advPillGrid">
      {learningModeOptions.map((opt, i) => (
        <motion.div
          key={opt.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className={`advDarkPill ${selected === opt.value ? "active" : ""}`}
          onClick={() => onSelect(opt.value)}
        >
          {opt.label}
        </motion.div>
      ))}
    </div>
  );
}

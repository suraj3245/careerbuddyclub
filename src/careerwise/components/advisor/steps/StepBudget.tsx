"use client";

import { motion } from "motion/react";
import { budgetOptions } from "../advisorData";

interface StepBudgetProps {
  selected: string | null;
  onSelect: (value: string) => void;
}

export default function StepBudget({ selected, onSelect }: StepBudgetProps) {
  return (
    <div className="advPillGrid">
      {budgetOptions.map((opt, i) => (
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

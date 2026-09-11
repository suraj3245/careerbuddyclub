"use client";

interface AdvisorProgressProps {
  currentStep: number;
}

const STEPS = [
  { id: 1, title: "Specialization", sub: "Your focus area" },
  { id: 2, title: "Budget", sub: "Annual fee range" },
  { id: 3, title: "Learning mode", sub: "How you study" },
  { id: 4, title: "Experience", sub: "Your background" },
];

export default function AdvisorProgress({ currentStep }: AdvisorProgressProps) {
  return (
    <div className="advProgressVertical">
      {STEPS.map((step) => {
        let className = "advStepItem";
        if (currentStep === step.id) className += " active";
        else if (currentStep > step.id) className += " completed";

        return (
          <div key={step.id} className={className}>
            <div className="advStepCircle">
              {currentStep > step.id ? "✓" : step.id}
            </div>
            <div className="advStepText">
              <strong>{step.title}</strong>
              <span>{step.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

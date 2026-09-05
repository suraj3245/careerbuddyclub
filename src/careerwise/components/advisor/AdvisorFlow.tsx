"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useAdvisorStore } from "@/careerwise/components/advisor/useAdvisorStore";
import AdvisorProgress from "@/careerwise/components/advisor/AdvisorProgress";
import StepSpecialization from "@/careerwise/components/advisor/steps/StepSpecialization";
import StepBudget from "@/careerwise/components/advisor/steps/StepBudget";
import StepExperience from "@/careerwise/components/advisor/steps/StepExperience";
import StepMode from "@/careerwise/components/advisor/steps/StepMode";
import StepResults from "@/careerwise/components/advisor/steps/StepResults";

const STEP_QUESTIONS: Record<number, { title: string; subtitle: string }> = {
  1: {
    title: "What do you want to specialise in?",
    subtitle: "Choose the area that excites you most.",
  },
  2: {
    title: "What is your budget for the program?",
    subtitle: "Select a range that fits your financial plan.",
  },
  3: {
    title: "What is your preferred learning mode?",
    subtitle: "How would you like to attend your classes?",
  },
  4: {
    title: "How much work experience do you have?",
    subtitle: "Your background helps us match the right curriculum.",
  },
  5: {
    title: "Your Matches",
    subtitle: "Here are the best universities for you.",
  },
};

const COURSE_TITLES: Record<string, string> = {
  mba: "Online MBA",
  mca: "Online MCA",
  "msc-it": "Online M.Sc (IT)",
  mcom: "Online M.Com",
  ma: "Online MA",
  "ms-ds": "MS (Data Science)",
  "pg-dip": "PG Diploma",
  "pg-ai": "PG in AI & ML"
};

export default function AdvisorFlow() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const courseTitle = COURSE_TITLES[courseId] || "Program";

  const { state, dispatch } = useAdvisorStore(courseId, courseTitle);
  const { currentStep, answers, direction } = state;

  useEffect(() => {
    // Reset state on mount just in case
    dispatch({ type: "RESET", courseId, courseTitle });
    
    // Prevent scrolling on body to ensure full page feels contained
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [courseId, courseTitle, dispatch]);

  const handleClose = () => {
    router.back();
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1:
        return answers.specialization !== null;
      case 2:
        return answers.budgetRange !== null;
      case 3:
        return answers.learningMode !== null; 
      case 4:
        return answers.experience !== null;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 5 && canProceed()) {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      dispatch({ type: "PREV_STEP" });
    }
  };

  const slideVariants = {
    enter: (dir: string) => ({
      x: dir === "forward" ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "forward" ? -40 : 40,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepSpecialization
            courseId={courseId}
            selected={answers.specialization}
            onSelect={(v) => dispatch({ type: "SET_ANSWER", field: "specialization", value: v })}
          />
        );
      case 2:
        return (
          <StepBudget
            selected={answers.budgetRange}
            onSelect={(v) => dispatch({ type: "SET_ANSWER", field: "budgetRange", value: v })}
          />
        );
      case 3:
        return (
          <StepMode
            selected={answers.learningMode}
            onSelect={(v) => dispatch({ type: "SET_ANSWER", field: "learningMode", value: v })}
          />
        );
      case 4:
        return (
          <StepExperience
            selected={answers.experience}
            onSelect={(v) => dispatch({ type: "SET_ANSWER", field: "experience", value: v })}
          />
        );
      case 5:
        return <StepResults courseId={courseId} answers={answers} />;
      default:
        return null;
    }
  };

  const questionInfo = STEP_QUESTIONS[currentStep];

  return (
    <div className="advContainer">
      <button className="advCloseFull" onClick={handleClose} aria-label="Close advisor">
        <X size={20} />
      </button>

      {/* Left Sidebar */}
      <div className="advSidebar">
        <div className="advSidebarContext">
          <p>FINDING MATCHES FOR</p>
          <h3>{courseTitle}</h3>
          <p>31 universities • ₹50k–₹12L/yr</p>
        </div>
        
        {currentStep < 5 && (
           <AdvisorProgress currentStep={currentStep} />
        )}
        
        <p className="advSidebarFooter">
          Your answers are used only to match you with the right programs.
        </p>
      </div>

      {/* Right Content */}
      <div className="advContent">
        {currentStep < 5 && (
          <div style={{ marginBottom: 32 }}>
            <span className="advStepIndicator">STEP {currentStep} OF 4</span>
            <h2 className="advQuestion">{questionInfo.title}</h2>
            <p className="advQuestionSub">{questionInfo.subtitle}</p>
          </div>
        )}

        <div className="advStepBody">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {currentStep < 5 && (
          <div className="advContentFooter">
            <span>Step {currentStep} of 4</span>
            <div className="advActions">
              {currentStep > 1 && (
                <button className="advBtnBack" onClick={handleBack}>
                  <ChevronLeft size={18} /> Back
                </button>
              )}
              <button
                className="advBtnNext"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

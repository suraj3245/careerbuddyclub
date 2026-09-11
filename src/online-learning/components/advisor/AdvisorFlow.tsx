"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useAdvisorStore } from "@/online-learning/components/advisor/useAdvisorStore";
import AdvisorProgress from "@/online-learning/components/advisor/AdvisorProgress";
import StepSpecialization from "@/online-learning/components/advisor/steps/StepSpecialization";
import StepBudget from "@/online-learning/components/advisor/steps/StepBudget";
import StepExperience from "@/online-learning/components/advisor/steps/StepExperience";
import StepMode from "@/online-learning/components/advisor/steps/StepMode";
import StepResults from "@/online-learning/components/advisor/steps/StepResults";
import { CollegeDetail, Stream } from "@/online-learning/data/api";
import LoginPopup from "@/online-learning/components/LoginPopup";

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
  "pg-dip": "Executive / PG Diploma",
  "pg-ai": "PG in AI & ML",
  phd: "Doctorate / Ph.D.",
};

function resolveCourseTitle(courseId: string | undefined, streams: Stream[] = [], collegeDetails: CollegeDetail[] = []): string {
  if (!courseId) return "Online Program";
  // Look in streams first
  for (const st of streams) {
    const found = st.courses?.find((c) => String(c.id) === String(courseId));
    if (found) return found.name;
  }
  // Look in collegeDetails next
  for (const col of collegeDetails) {
    const found = (col.courses || []).find((c) => String(c.id) === String(courseId));
    if (found) return found.name;
  }
  const s = courseId.toLowerCase();
  if (COURSE_TITLES[s]) return COURSE_TITLES[s];
  if (s.includes("mba") || s === "5954" || s === "5960" || s === "5961" || s === "5962") return "Online MBA";
  if (s.includes("mca") || s === "5955") return "Online MCA";
  if (s.includes("data") || s.includes("analytics") || s === "5971") return "MS (Data Science)";
  if (s.includes("msc") || s === "5956") return "Online M.Sc (IT)";
  if (s.includes("com") || s === "5958") return "Online M.Com";
  if (s.includes("ma") || s === "5957") return "Online MA";
  if (s.includes("ai") || s === "5970") return "PG in AI & ML";
  if (s.includes("phd") || s.includes("ph.d") || s.includes("doctorate") || ["5965", "5966", "5967", "5968", "5969"].includes(s)) return "Doctorate / Ph.D.";
  if (s.includes("dip") || s.includes("exec") || ["5963", "5964"].includes(s)) return "Executive / PG Diploma";
  return "Online Degree Program";
}

interface AdvisorFlowProps {
  collegeDetails?: CollegeDetail[];
  streams?: Stream[];
}

export default function AdvisorFlow({ collegeDetails = [], streams = [] }: AdvisorFlowProps) {
  const params = useParams();
  const router = useRouter();
  const courseId = (params.courseId as string) || "mba";
  const courseTitle = resolveCourseTitle(courseId, streams, collegeDetails);

  const { state, dispatch } = useAdvisorStore(courseId, courseTitle);
  const { currentStep, answers, direction } = state;

  const [loginOpen, setLoginOpen] = useState(false);
  const [pendingNext, setPendingNext] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    checkAuth();
    window.addEventListener("userLoggedIn", checkAuth);
    return () => window.removeEventListener("userLoggedIn", checkAuth);
  }, []);

  useEffect(() => {
    // Reset state on mount just in case
    dispatch({ type: "RESET", courseId, courseTitle });
    
    // Prevent scrolling on body to ensure full page feels contained
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [courseId, courseTitle, dispatch]);

  useEffect(() => {
    if (isLoggedIn && pendingNext) {
      setPendingNext(false);
      setLoginOpen(false);
      dispatch({ type: "NEXT_STEP" });
    }
  }, [isLoggedIn, pendingNext, dispatch]);

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
      if (currentStep === 4 && !isLoggedIn) {
        setLoginOpen(true);
        setPendingNext(true);
      } else {
        dispatch({ type: "NEXT_STEP" });
      }
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
        return <StepResults courseId={courseId} answers={answers} collegeDetails={collegeDetails} />;
      default:
        return null;
    }
  };

  const questionInfo = STEP_QUESTIONS[currentStep];

  const matchingCollegesCount = collegeDetails.filter((c) =>
    (c.courses || []).some(
      (co) =>
        String(co.id) === String(courseId) ||
        co.name.toLowerCase().includes(courseId.toLowerCase())
    )
  ).length;

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
          <p>
            {matchingCollegesCount > 0
              ? `${matchingCollegesCount} ${matchingCollegesCount === 1 ? "university" : "universities"} offering this course`
              : "Top accredited universities • UGC Approved"}
          </p>
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

      <LoginPopup 
        isOpen={loginOpen} 
        onClose={() => {
          setLoginOpen(false);
          setPendingNext(false);
        }} 
      />
    </div>
  );
}

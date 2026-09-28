import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online MA Economics — static content for /online-course/online-ma-economics
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMaEconomics: CourseContent = {
  slug: "online-ma-economics",
  shortName: "Online MA Economics",
  fullName: "Master of Arts in Economics (Online)",
  tagline: "Study micro- and macroeconomics, econometrics and public policy — a strong base for analytics, banking and policy roles.",
  bannerTitle: [
    "Online MA",
    "Economics"
  ],
  overview: [
    "An Online MA in Economics is a two-year postgraduate degree that covers economic theory, quantitative methods and applied fields such as development, public finance, international trade and monetary economics.",
    "It builds strong analytical and data skills, which are valued in banking, research, policy, analytics and competitive exams such as UPSC, RBI Grade B and the Indian Economic Service."
  ],
  benefits: [
    {
      title: "Analytical Skills",
      desc: "Learn to model, test and interpret economic data."
    },
    {
      title: "Exam Advantage",
      desc: "Directly useful for UPSC, IES, RBI and other economics-based exams."
    },
    {
      title: "Diverse Careers",
      desc: "Open doors in banking, research, policy, consulting and analytics."
    },
    {
      title: "Study While You Work",
      desc: "Weekend live classes and recorded lectures fit your schedule."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university (Economics or Mathematics at graduation preferred by some universities).",
    "Minimum 40–50% aggregate marks (varies by university)."
  ],
  specializations: [
    "Development Economics",
    "Public Finance",
    "International Economics",
    "Monetary Economics",
    "Econometrics",
    "Environmental Economics"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Microeconomic Theory",
        "Macroeconomic Theory",
        "Mathematical Methods for Economics",
        "Statistical Methods"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Advanced Microeconomics",
        "Advanced Macroeconomics",
        "Econometrics",
        "Indian Economy"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Public Economics",
        "International Trade & Finance",
        "Development Economics",
        "Elective I"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Monetary Economics",
        "Environmental Economics",
        "Elective II",
        "Dissertation"
      ]
    }
  ],
  careers: [
    {
      role: "Economic / Research Analyst",
      desc: "Studies economic data and trends for banks, firms and research houses.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "Data / Business Analyst",
      desc: "Applies statistical and economic thinking to business data.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "Policy Analyst",
      desc: "Evaluates government policies and programmes for think tanks and NGOs.",
      salary: "₹4 – 9 LPA"
    },
    {
      role: "Lecturer",
      desc: "Teaches economics at colleges (NET/SET required).",
      salary: "₹4 – 9 LPA"
    }
  ],
  faqs: [
    {
      q: "Is maths required for an MA in Economics?",
      a: "Some mathematics and statistics are part of the course. A maths background helps but is not always compulsory — check the university's criteria."
    },
    {
      q: "What jobs can I get after an MA in Economics?",
      a: "Research and data analyst roles, banking and financial services, policy and development roles, teaching, and government jobs through competitive exams."
    }
  ],
  related: [
    "online-ma",
    "online-ma-political-science",
    "online-mcom"
  ],
  image: IMG_MBA
};

export default onlineMaEconomics;

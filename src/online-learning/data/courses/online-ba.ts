import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online B.A. — static content for /online-course/online-ba
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineBa: CourseContent = {
  slug: "online-ba",
  shortName: "Online B.A.",
  fullName: "Bachelor of Arts (Online)",
  tagline: "A flexible three-year undergraduate degree in the humanities and social sciences — study from anywhere after 12th.",
  overview: [
    "An Online B.A. is a three-year undergraduate degree in the humanities and social sciences. You can study subjects such as English, Political Science, Economics, History, Sociology and Psychology.",
    "It suits students who want a recognised degree while working, preparing for competitive exams or managing other commitments, and it leads naturally to an MA, B.Ed., law or MBA."
  ],
  eligibility: [
    "Class 12 pass in any stream from a recognised board.",
    "Minimum 40–45% marks in Class 12 (varies by university)."
  ],
  specializations: [
    "English",
    "Political Science",
    "Economics",
    "History",
    "Sociology",
    "Psychology",
    "Journalism & Mass Communication"
  ],
  syllabus: [
    {
      term: "Year 1",
      subjects: [
        "English Communication",
        "Discipline Core I",
        "Discipline Core II",
        "Environmental Studies"
      ]
    },
    {
      term: "Year 2",
      subjects: [
        "Discipline Core III",
        "Discipline Core IV",
        "Skill Enhancement Course",
        "Generic Elective"
      ]
    },
    {
      term: "Year 3",
      subjects: [
        "Discipline Specific Elective I",
        "Discipline Specific Elective II",
        "Project / Dissertation"
      ]
    }
  ],
  careers: [
    {
      role: "Government Jobs",
      desc: "Eligible for SSC, banking, railway and state-level exams that need a graduate degree.",
      salary: "As per pay scale"
    },
    {
      role: "Content Writer",
      desc: "Writes for websites, blogs and brands.",
      salary: "₹2.5 – 5 LPA"
    },
    {
      role: "Customer Relationship Executive",
      desc: "Handles customer service and relationships.",
      salary: "₹2.5 – 4.5 LPA"
    },
    {
      role: "Further Studies",
      desc: "Continue to an MA, B.Ed., LLB or MBA.",
      salary: "—"
    }
  ],
  faqs: [
    {
      q: "Is an online B.A. valid for government jobs?",
      a: "Yes, if it is from a UGC-entitled university. It meets the graduation requirement for most government exams."
    },
    {
      q: "Can I do an online B.A. while preparing for competitive exams?",
      a: "Yes — the flexible schedule is one of the main reasons exam aspirants choose it."
    },
    {
      q: "What can I do after an online B.A.?",
      a: "You can take up a job or government exams, or continue to an MA, B.Ed., LLB or MBA."
    }
  ],
  related: [
    "online-ma",
    "online-bba",
    "online-bcom"
  ],
  image: IMG_MBA
};

export default onlineBa;

import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online MA — static content for /online-course/online-ma
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMa: CourseContent = {
  slug: "online-ma",
  shortName: "Online MA",
  fullName: "Master of Arts (Online)",
  tagline: "A two-year humanities master's in English, Economics, Political Science, Psychology and more.",
  overview: [
    "An Online MA is a two-year postgraduate degree in the humanities and social sciences. Popular subjects include English, Economics, Political Science, History, Sociology, Psychology and Journalism.",
    "It suits graduates preparing for teaching, civil services, content, media, research and policy careers — and working professionals who want a master's degree without leaving their job."
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university.",
    "Minimum 40–50% aggregate marks (varies by university).",
    "Some subjects may prefer the same subject at graduation level."
  ],
  specializations: [
    "English",
    "Economics",
    "Political Science",
    "History",
    "Sociology",
    "Psychology",
    "Public Administration",
    "Journalism & Mass Communication"
  ],
  syllabusIntro: "Subjects depend on your chosen specialisation. Every MA follows this broad structure:",
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Core Paper I",
        "Core Paper II",
        "Core Paper III",
        "Ability Enhancement Course"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Core Paper IV",
        "Core Paper V",
        "Core Paper VI",
        "Research Methodology"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Core Paper VII",
        "Discipline Elective I",
        "Discipline Elective II",
        "Generic Elective"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Core Paper VIII",
        "Discipline Elective III",
        "Dissertation / Project"
      ]
    }
  ],
  careers: [
    {
      role: "Teacher / Lecturer",
      desc: "Teaches in schools or colleges (B.Ed. or NET/SET may be required).",
      salary: "₹3 – 8 LPA"
    },
    {
      role: "Content Writer / Editor",
      desc: "Writes and edits content for media, brands and publishers.",
      salary: "₹3 – 7 LPA"
    },
    {
      role: "Civil Services / Government",
      desc: "An MA helps with UPSC, state PSC and other government exams.",
      salary: "As per pay scale"
    },
    {
      role: "Research / Policy Associate",
      desc: "Works on research, surveys and policy analysis for NGOs and think tanks.",
      salary: "₹4 – 8 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online MA valid for government jobs?",
      a: "Yes, if the university and programme are UGC-entitled for online mode. Check each recruitment notification for any specific conditions."
    },
    {
      q: "Can I do an online MA in a subject different from my graduation?",
      a: "Usually yes — most universities accept graduates from any discipline, though a few subjects prefer a background in the same subject."
    },
    {
      q: "Can I appear for UGC-NET after an online MA?",
      a: "Yes. A master's degree from a UGC-entitled university in online mode makes you eligible for UGC-NET, subject to the minimum marks."
    }
  ],
  related: [
    "online-ma-english",
    "online-ma-economics",
    "online-ma-political-science",
    "online-ba"
  ],
  image: IMG_MBA
};

export default onlineMa;

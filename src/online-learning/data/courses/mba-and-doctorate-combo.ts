import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * MBA & Doctorate Combo — static content for /online-course/mba-and-doctorate-combo
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const mbaAndDoctorateCombo: CourseContent = {
  slug: "mba-and-doctorate-combo",
  shortName: "MBA & Doctorate Combo",
  fullName: "MBA + Doctorate Combo Programme",
  level: "Doctorate",
  fallbackDuration: "3 – 4 Years",
  tagline: "A bundled pathway that combines an MBA with a professional doctorate such as a DBA.",
  bannerTitle: [
    "MBA +",
    "Doctorate"
  ],
  overview: [
    "An MBA & Doctorate combo bundles a master's-level management programme with a professional doctorate — commonly a Doctor of Business Administration (DBA) — into one pathway. You complete the MBA stage first and then move into applied doctoral research.",
    "These programmes are often offered by, or in partnership with, foreign universities through Indian learning partners. They are aimed at experienced professionals who want both advanced management skills and a doctoral title."
  ],
  notice: "Doctorates awarded by foreign universities, and professional doctorates such as a DBA, are not the same as a UGC-regulated Ph.D. They may not be accepted for teaching posts or government jobs in India. Check recognition and AIU equivalence before you enrol.",
  benefits: [
    {
      title: "Two Qualifications",
      desc: "Complete an MBA and a professional doctorate in one planned pathway."
    },
    {
      title: "Applied Research",
      desc: "A DBA focuses on solving real business problems rather than pure theory."
    },
    {
      title: "Global Exposure",
      desc: "Often delivered with international universities and faculty."
    },
    {
      title: "Leadership Profile",
      desc: "Adds credibility for senior leadership, consulting and speaking roles."
    }
  ],
  eligibility: [
    "Bachelor's degree from a recognised university (master's degree preferred for direct doctoral entry).",
    "Usually 5+ years of work experience, including managerial experience.",
    "English proficiency may be required by the foreign partner university."
  ],
  specializations: [
    "General Management",
    "Leadership",
    "Strategy",
    "Marketing",
    "Finance",
    "Human Resources"
  ],
  syllabus: [
    {
      term: "MBA Stage",
      subjects: [
        "Management Fundamentals",
        "Finance & Accounting",
        "Marketing Strategy",
        "Strategic Leadership",
        "Specialisation Electives"
      ]
    },
    {
      term: "Doctoral Coursework",
      subjects: [
        "Advanced Research Methods",
        "Academic Writing",
        "Research Proposal Development"
      ]
    },
    {
      term: "Doctoral Research",
      subjects: [
        "Applied Research Project",
        "Dissertation",
        "Final Defence"
      ]
    }
  ],
  careers: [
    {
      role: "Senior Executive / CXO Track",
      desc: "Leads organisations with research-backed strategy.",
      salary: "₹30 LPA+"
    },
    {
      role: "Management Consultant",
      desc: "Advises leadership on strategy and transformation.",
      salary: "₹15 – 35 LPA"
    },
    {
      role: "Corporate Trainer / Coach",
      desc: "Designs and delivers leadership development programmes.",
      salary: "₹10 – 25 LPA"
    }
  ],
  faqs: [
    {
      q: "Is a DBA the same as a Ph.D.?",
      a: "No. A DBA is a professional doctorate focused on applied business research, while a Ph.D. is an academic research degree. In India, only a UGC-compliant Ph.D. is accepted for most academic and government roles."
    },
    {
      q: "Who should consider this combo?",
      a: "Experienced professionals who want an MBA and a doctoral title mainly for leadership, consulting or personal growth, rather than an academic career in India."
    }
  ],
  related: [
    "phd-in-management",
    "executive-mba-online",
    "online-mba"
  ],
  image: IMG_MBA
};

export default mbaAndDoctorateCombo;

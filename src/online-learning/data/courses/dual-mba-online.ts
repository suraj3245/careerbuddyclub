import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Dual MBA Online — static content for /online-course/dual-mba-online
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const dualMbaOnline: CourseContent = {
  slug: "dual-mba-online",
  shortName: "Dual MBA Online",
  fullName: "Dual Specialisation MBA (Online)",
  level: "PG",
  fallbackDuration: "2 Years",
  tagline: "One MBA, two specialisations — build a broader skill set such as Marketing + Analytics or Finance + HR.",
  bannerTitle: [
    "Dual",
    "MBA"
  ],
  overview: [
    "A Dual MBA online lets you study two specialisations within one two-year MBA programme. You complete the same core management subjects as a regular MBA and then split your electives between two areas instead of one.",
    "It suits learners who want to keep their options open or whose roles already cut across functions — for example a marketer who works heavily with data, or a finance professional who manages people."
  ],
  benefits: [
    {
      title: "Two Skill Sets",
      desc: "Stand out with expertise in two complementary business areas."
    },
    {
      title: "Wider Career Options",
      desc: "Apply for roles in either specialisation, or hybrid roles that need both."
    },
    {
      title: "Single Degree Timeline",
      desc: "Get two specialisations in the same two years as a regular MBA."
    },
    {
      title: "Study While You Work",
      desc: "Weekend live classes and recorded sessions fit your work schedule."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university.",
    "Minimum 40–50% aggregate marks in graduation (varies by university).",
    "Work experience is usually optional."
  ],
  specializations: [
    "Marketing + Business Analytics",
    "Finance + Human Resources",
    "Marketing + Finance",
    "Operations + Supply Chain",
    "IT + Project Management",
    "HR + Business Analytics"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Management Process & Organisational Behaviour",
        "Accounting for Managers",
        "Managerial Economics",
        "Business Communication",
        "Quantitative Techniques",
        "Marketing Management"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Financial Management",
        "Human Resource Management",
        "Operations Management",
        "Business Research Methods",
        "Management Information Systems"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Strategic Management",
        "Specialisation A – Elective I",
        "Specialisation A – Elective II",
        "Specialisation B – Elective I",
        "Specialisation B – Elective II"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Business Ethics & Corporate Governance",
        "Specialisation A – Elective III",
        "Specialisation B – Elective III",
        "Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "Business Analyst",
      desc: "Uses data to spot problems and opportunities and recommends process or product changes.",
      salary: "₹6 – 12 LPA"
    },
    {
      role: "Marketing Manager",
      desc: "Plans campaigns, manages brands and budgets and tracks how marketing drives revenue.",
      salary: "₹8 – 18 LPA"
    },
    {
      role: "HR Manager",
      desc: "Leads hiring, performance management, employee engagement and HR policy.",
      salary: "₹7 – 15 LPA"
    },
    {
      role: "Financial Manager",
      desc: "Handles budgeting, financial planning, investments and reporting for a business unit.",
      salary: "₹9 – 20 LPA"
    },
    {
      role: "Operations Manager",
      desc: "Keeps day-to-day operations, supply chain and service delivery efficient.",
      salary: "₹7 – 16 LPA"
    },
    {
      role: "Project Manager",
      desc: "Plans and delivers projects on time and on budget while managing cross-functional teams.",
      salary: "₹10 – 22 LPA"
    }
  ],
  faqs: [
    {
      q: "Is a dual MBA better than a single-specialisation MBA?",
      a: "It is better if your career needs two skill sets. If you are sure of one field, a single specialisation lets you go deeper."
    },
    {
      q: "Does a dual MBA take longer?",
      a: "No, it usually takes the same two years. The electives are split between two specialisations."
    },
    {
      q: "Will my degree mention both specialisations?",
      a: "This varies by university. Most mention both on the mark sheet or degree — confirm with the university before you enrol."
    }
  ],
  related: [
    "online-mba",
    "executive-mba-online",
    "online-bba"
  ],
  image: IMG_MBA
};

export default dualMbaOnline;

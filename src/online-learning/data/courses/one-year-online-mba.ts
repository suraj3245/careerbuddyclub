import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * 1 Year Online MBA — static content for /online-course/one-year-online-mba
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const oneYearOnlineMba: CourseContent = {
  slug: "one-year-online-mba",
  shortName: "1 Year Online MBA",
  fullName: "One-Year MBA (Online)",
  level: "PG",
  fallbackDuration: "1 Year",
  tagline: "An accelerated management programme for experienced professionals who want an MBA-level qualification in 12 months.",
  bannerTitle: [
    "1 Year",
    "Online MBA"
  ],
  overview: [
    "A one-year online MBA compresses core management subjects and a specialisation into roughly 12 months. It suits professionals who already have several years of experience and want to move into management roles quickly.",
    "In India, UGC regulations set the duration of an MBA at two years, so most one-year MBAs are offered either by foreign universities (often through Indian learning partners) or as one-year PG programmes in management. Check exactly which certificate or degree you will receive, and who awards it, before you enrol."
  ],
  notice: "UGC regulations set a two-year duration for MBA degrees awarded by Indian universities. If a one-year MBA is awarded by a foreign university, check its recognition and whether you will need an AIU equivalence certificate for government jobs or further study in India.",
  benefits: [
    {
      title: "Fast-track Learning",
      desc: "Finish in about a year and apply your new skills at work straight away."
    },
    {
      title: "Built for Experience",
      desc: "Case discussions and projects draw on the real work experience of your batch."
    },
    {
      title: "Global Exposure",
      desc: "Many one-year programmes are run with international universities and faculty."
    },
    {
      title: "Flexible Schedule",
      desc: "Weekend live sessions and recorded content fit around a full-time job."
    }
  ],
  eligibility: [
    "Bachelor's degree from a recognised university (some programmes ask for 50% or more).",
    "Usually 2–5 years of full-time work experience.",
    "English proficiency may be required for programmes run with foreign universities."
  ],
  specializations: [
    "General Management",
    "Marketing",
    "Finance",
    "Human Resources",
    "Operations",
    "Business Analytics",
    "Digital Transformation"
  ],
  syllabus: [
    {
      term: "Term 1",
      subjects: [
        "Managerial Economics",
        "Financial & Management Accounting",
        "Organisational Behaviour",
        "Marketing Management"
      ]
    },
    {
      term: "Term 2",
      subjects: [
        "Corporate Finance",
        "Operations & Supply Chain",
        "Business Analytics",
        "Human Capital Management"
      ]
    },
    {
      term: "Term 3",
      subjects: [
        "Strategic Management",
        "Leadership & Change",
        "Specialisation Electives",
        "Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "Senior Manager",
      desc: "Leads a function or business unit and owns its targets and budget.",
      salary: "₹12 – 25 LPA"
    },
    {
      role: "Product Manager",
      desc: "Defines what gets built and why, balancing customers, business and technology.",
      salary: "₹12 – 28 LPA"
    },
    {
      role: "Business Development Manager",
      desc: "Finds new markets, partners and customers to grow revenue.",
      salary: "₹8 – 18 LPA"
    },
    {
      role: "Management Consultant",
      desc: "Solves strategy and operations problems for client organisations.",
      salary: "₹10 – 25 LPA"
    }
  ],
  faqs: [
    {
      q: "Is a 1-year online MBA valid in India?",
      a: "It depends on who awards it. Indian universities award MBAs of two years' duration under UGC rules. A one-year MBA from a recognised foreign university is valid in the private sector; for government jobs or further study in India you may need an AIU equivalence certificate."
    },
    {
      q: "Who should choose a 1-year MBA?",
      a: "Professionals with a few years of experience who already understand how businesses work and want to formalise their skills quickly."
    },
    {
      q: "Is a 1-year MBA harder than a 2-year MBA?",
      a: "The content is similar but packed into less time, so the weekly workload is higher — plan for 12–15 hours of study a week."
    }
  ],
  related: [
    "online-mba",
    "executive-mba-online",
    "executive-pg-management-online"
  ],
  image: IMG_MBA
};

export default oneYearOnlineMba;

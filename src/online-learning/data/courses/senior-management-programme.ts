import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Senior Management Programme — static content for /online-course/senior-management-programme
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const seniorManagementProgramme: CourseContent = {
  slug: "senior-management-programme",
  shortName: "Senior Management Programme",
  fullName: "Senior Management Programme (Online)",
  level: "Certificate",
  fallbackDuration: "6 – 12 Months",
  tagline: "An executive-education programme that prepares experienced managers for CXO and business-leadership roles.",
  bannerTitle: [
    "Senior",
    "Management"
  ],
  overview: [
    "A Senior Management Programme is an executive-education certificate for experienced managers — typically with 8–10+ years of experience — who are preparing for senior leadership. It covers strategy, finance for leaders, leading change and managing large teams.",
    "These programmes are usually delivered live online by leading business schools, sometimes with a short campus immersion. They award a certificate (and often alumni status), not a degree."
  ],
  notice: "This is a certificate programme, not a degree. It is valued for skills and network, not as an academic qualification.",
  benefits: [
    {
      title: "Leadership Readiness",
      desc: "Prepare for the scope and decisions of senior roles."
    },
    {
      title: "Top-tier Faculty",
      desc: "Learn from experienced business-school faculty and industry leaders."
    },
    {
      title: "Senior Peer Network",
      desc: "Your batch is made up of experienced managers and leaders."
    },
    {
      title: "Short Commitment",
      desc: "Finish in months rather than years, without leaving your job."
    }
  ],
  eligibility: [
    "Bachelor's degree (or equivalent) from a recognised university.",
    "Usually 8–10+ years of work experience, with some managerial experience.",
    "Selection is often based on a profile review or interview."
  ],
  specializations: [
    "Strategy & Leadership",
    "Finance for Senior Managers",
    "Digital Transformation",
    "Leading Change"
  ],
  syllabus: [
    {
      term: "Module 1",
      subjects: [
        "Strategic Thinking",
        "Competitive Strategy",
        "Business Model Innovation"
      ]
    },
    {
      term: "Module 2",
      subjects: [
        "Finance for Non-finance Leaders",
        "Data-driven Decisions",
        "Marketing Strategy"
      ]
    },
    {
      term: "Module 3",
      subjects: [
        "Leading People & Teams",
        "Negotiation",
        "Leading Change",
        "Capstone"
      ]
    }
  ],
  careers: [
    {
      role: "Business Head",
      desc: "Owns the P&L of a business line or region.",
      salary: "₹30 LPA+"
    },
    {
      role: "Functional Head / VP",
      desc: "Leads an entire function across the organisation.",
      salary: "₹30 LPA+"
    },
    {
      role: "CXO Track",
      desc: "Prepares for chief-level roles such as COO, CMO or CHRO.",
      salary: "Varies"
    }
  ],
  faqs: [
    {
      q: "Is the Senior Management Programme a degree?",
      a: "No, it is an executive certificate. It is meant for skills, leadership development and networking."
    },
    {
      q: "How much experience do I need?",
      a: "Most programmes look for 8–10 years or more, including some years in a managerial role."
    }
  ],
  related: [
    "executive-mba-online",
    "executive-pg-management-online",
    "phd-in-management"
  ],
  image: IMG_MBA
};

export default seniorManagementProgramme;

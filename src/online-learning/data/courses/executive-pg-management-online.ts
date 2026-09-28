import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Executive PG in Management — static content for /online-course/executive-pg-management-online
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const executivePgManagementOnline: CourseContent = {
  slug: "executive-pg-management-online",
  shortName: "Executive PG in Management",
  fullName: "Executive Post Graduate Programme in Management (Online)",
  level: "Executive",
  tagline: "A short, practical management programme for working professionals who want management skills fast.",
  bannerTitle: [
    "Executive PG",
    "Management"
  ],
  overview: [
    "An Executive Post Graduate Programme in Management is a shorter management qualification — usually around one year — aimed at working professionals. It covers the core of an MBA (finance, marketing, strategy, people management) with a strong focus on practical application.",
    "It is usually awarded as a PG certificate or diploma rather than a degree, so it suits people who want skills and a credential from a reputed institution without committing to a two-year MBA."
  ],
  notice: "An Executive PG programme is typically a certificate or diploma, not a degree. Check the exact award before enrolling if you need a degree for a job or further study.",
  benefits: [
    {
      title: "Shorter Duration",
      desc: "Complete the programme in about a year."
    },
    {
      title: "Practical Curriculum",
      desc: "Case studies and projects you can apply at work immediately."
    },
    {
      title: "Reputed Institutions",
      desc: "Often offered by well-known universities and business schools."
    },
    {
      title: "Work-friendly",
      desc: "Weekend and evening sessions fit a full-time job."
    }
  ],
  eligibility: [
    "Bachelor's degree from a recognised university.",
    "Usually 2+ years of work experience."
  ],
  specializations: [
    "General Management",
    "Marketing",
    "Finance",
    "Human Resources",
    "Operations",
    "Business Analytics"
  ],
  syllabus: [
    {
      term: "Term 1",
      subjects: [
        "Principles of Management",
        "Managerial Accounting",
        "Marketing Management",
        "Organisational Behaviour"
      ]
    },
    {
      term: "Term 2",
      subjects: [
        "Financial Management",
        "Operations Management",
        "Business Analytics",
        "Human Resource Management"
      ]
    },
    {
      term: "Term 3",
      subjects: [
        "Strategic Management",
        "Leadership",
        "Electives",
        "Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "Team Lead / Manager",
      desc: "Moves from an individual role into managing a team and its targets.",
      salary: "₹8 – 18 LPA"
    },
    {
      role: "Business Development Manager",
      desc: "Builds partnerships and brings in new business.",
      salary: "₹7 – 16 LPA"
    },
    {
      role: "Operations Manager",
      desc: "Improves processes and runs day-to-day delivery.",
      salary: "₹7 – 15 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an Executive PG in Management equal to an MBA?",
      a: "No. It is usually a PG certificate or diploma. It gives you management skills and a credential, but it is not a master's degree."
    },
    {
      q: "Who should choose an Executive PG programme?",
      a: "Working professionals who want management skills in a shorter time and don't specifically need a degree."
    }
  ],
  related: [
    "executive-mba-online",
    "online-mba",
    "senior-management-programme"
  ],
  image: IMG_MBA
};

export default executivePgManagementOnline;

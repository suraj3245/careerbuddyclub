import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Ph.D. in Management — static content for /online-course/phd-in-management
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const phdInManagement: CourseContent = {
  slug: "phd-in-management",
  shortName: "Ph.D. in Management",
  fullName: "Doctor of Philosophy in Management",
  tagline: "A research doctorate for professionals and academics who want to contribute original research in management.",
  bannerTitle: [
    "Ph.D. in",
    "Management"
  ],
  overview: [
    "A Ph.D. in Management is the highest academic qualification in business and management. You carry out original research in an area such as marketing, finance, HR, strategy or operations, and write and defend a thesis.",
    "Programmes for working professionals are usually run in a part-time or blended format — coursework on weekends or online, and research you carry out alongside your job under a supervisor."
  ],
  notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university before applying.",
  benefits: [
    {
      title: "Highest Qualification",
      desc: "Earn the title 'Dr.' and the top academic qualification in management."
    },
    {
      title: "Academic Careers",
      desc: "A Ph.D. is required for most assistant-professor and senior academic roles."
    },
    {
      title: "Research Expertise",
      desc: "Become a subject expert in a focused area of management."
    },
    {
      title: "Consulting Credibility",
      desc: "Strengthens your profile for consulting, research and policy roles."
    }
  ],
  eligibility: [
    "Master's degree (MBA/PGDM/M.Com or equivalent) with at least 55% marks (50% for reserved categories), or a 4-year bachelor's degree with 75% as per UGC Ph.D. regulations.",
    "Entrance test conducted by the university, or UGC-NET / JRF, followed by an interview.",
    "Working professionals may need a no-objection certificate from their employer."
  ],
  specializations: [
    "Marketing",
    "Finance",
    "Human Resource Management",
    "Strategy",
    "Operations",
    "Organisational Behaviour",
    "Business Analytics"
  ],
  syllabusIntro: "Ph.D. coursework is completed in the first two semesters; the rest of the programme is research under your supervisor.",
  syllabus: [
    {
      term: "Coursework",
      subjects: [
        "Research Methodology",
        "Research & Publication Ethics",
        "Quantitative & Qualitative Methods",
        "Review of Literature in Your Area"
      ]
    },
    {
      term: "Research Phase",
      subjects: [
        "Research Proposal",
        "Data Collection & Analysis",
        "Progress Seminars",
        "Research Publications"
      ]
    },
    {
      term: "Thesis",
      subjects: [
        "Thesis Writing",
        "Pre-submission Seminar",
        "Thesis Submission",
        "Viva-voce"
      ]
    }
  ],
  careers: [
    {
      role: "Assistant / Associate Professor",
      desc: "Teaches and researches at universities and business schools.",
      salary: "₹8 – 20 LPA"
    },
    {
      role: "Research Consultant",
      desc: "Leads research projects for consulting firms and think tanks.",
      salary: "₹10 – 25 LPA"
    },
    {
      role: "Senior Management / Strategy",
      desc: "Brings research-driven decision-making to leadership roles.",
      salary: "Varies"
    }
  ],
  faqs: [
    {
      q: "Can I do a Ph.D. in Management online?",
      a: "UGC does not allow Ph.D. degrees in online or distance mode. Working professionals can do a part-time Ph.D. that follows UGC rules, with some coursework and guidance delivered online. Confirm the mode with the university."
    },
    {
      q: "How long does a Ph.D. in Management take?",
      a: "Usually 3 to 5 years, depending on your research and the university's rules."
    },
    {
      q: "Is an entrance exam required?",
      a: "Yes. You usually need to pass the university's entrance test (or hold UGC-NET/JRF) and clear an interview."
    }
  ],
  related: [
    "mba-and-doctorate-combo",
    "executive-mba-online",
    "phd-in-education"
  ],
  image: IMG_MBA
};

export default phdInManagement;

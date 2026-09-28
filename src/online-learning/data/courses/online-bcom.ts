import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online B.Com — static content for /online-course/online-bcom
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineBcom: CourseContent = {
  slug: "online-bcom",
  shortName: "Online B.Com",
  fullName: "Bachelor of Commerce (Online)",
  tagline: "A three-year commerce degree in accounting, taxation, finance and business — study from anywhere after 12th.",
  overview: [
    "An Online B.Com is a three-year undergraduate degree covering accounting, business law, taxation, economics, finance and management.",
    "It suits students who want a commerce career, those preparing for CA/CMA/CS alongside their degree, and working learners who need a recognised graduation degree."
  ],
  benefits: [
    {
      title: "Pair with CA/CMA/CS",
      desc: "The flexible schedule leaves time to prepare for professional exams."
    },
    {
      title: "Job-ready Skills",
      desc: "Learn accounting, GST and Tally-style tools used at work."
    },
    {
      title: "Affordable",
      desc: "Lower fees than on-campus programmes, with EMI options."
    },
    {
      title: "Path to M.Com / MBA",
      desc: "A strong base for an M.Com, MBA or finance certifications."
    }
  ],
  eligibility: [
    "Class 12 pass from a recognised board (commerce stream preferred; many universities accept all streams).",
    "Minimum 40–50% marks in Class 12 (varies by university)."
  ],
  specializations: [
    "Accounting & Finance",
    "Banking & Insurance",
    "Taxation",
    "Financial Markets",
    "International Finance (ACCA-aligned)"
  ],
  syllabus: [
    {
      term: "Year 1",
      subjects: [
        "Financial Accounting",
        "Business Organisation & Management",
        "Business Economics",
        "Business Communication",
        "Business Mathematics"
      ]
    },
    {
      term: "Year 2",
      subjects: [
        "Corporate Accounting",
        "Income Tax Law & Practice",
        "Business Law",
        "Cost Accounting",
        "Business Statistics"
      ]
    },
    {
      term: "Year 3",
      subjects: [
        "Auditing",
        "GST & Indirect Taxes",
        "Financial Management",
        "Management Accounting",
        "Electives / Project"
      ]
    }
  ],
  careers: [
    {
      role: "Accounts Executive",
      desc: "Maintains books, handles billing and reconciliations.",
      salary: "₹2.5 – 5 LPA"
    },
    {
      role: "Tax Assistant",
      desc: "Supports GST and income-tax filings.",
      salary: "₹2.5 – 5 LPA"
    },
    {
      role: "Banking Associate",
      desc: "Works in branch banking, operations or sales.",
      salary: "₹3 – 5 LPA"
    },
    {
      role: "Financial Analyst (Junior)",
      desc: "Prepares financial reports and analysis.",
      salary: "₹3.5 – 6 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online B.Com valid?",
      a: "Yes. An online B.Com from a UGC-entitled university is equivalent to a regular B.Com for jobs and higher studies."
    },
    {
      q: "Can I do CA along with an online B.Com?",
      a: "Yes. Many students pursue CA, CMA or CS alongside an online B.Com because of its flexible schedule."
    },
    {
      q: "Can science or arts students do an online B.Com?",
      a: "Many universities accept Class 12 from any stream. Check the specific university's criteria."
    }
  ],
  related: [
    "online-mcom",
    "online-bba",
    "online-mba"
  ],
  image: IMG_MBA
};

export default onlineBcom;

import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online M.Com — static content for /online-course/online-mcom
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMcom: CourseContent = {
  slug: "online-mcom",
  shortName: "Online M.Com",
  fullName: "Master of Commerce (Online)",
  tagline: "Advance your knowledge of accounting, finance, taxation and business — ideal for commerce graduates.",
  overview: [
    "An Online M.Com is a two-year postgraduate degree in commerce that deepens your knowledge of accounting, finance, taxation, auditing, business law and economics.",
    "It suits B.Com graduates and finance professionals who want to grow in accounting, banking, taxation or teaching, and it is useful preparation for CA/CMA/CS and NET."
  ],
  benefits: [
    {
      title: "Finance Expertise",
      desc: "Go deeper into accounting, tax, audit and financial management."
    },
    {
      title: "Professional Exams",
      desc: "Strengthens preparation for CA, CMA, CS and UGC-NET Commerce."
    },
    {
      title: "Teaching Pathway",
      desc: "Leads to commerce lecturer roles after NET/SET."
    },
    {
      title: "Study While You Work",
      desc: "Keep your job while you earn a master's degree."
    }
  ],
  eligibility: [
    "B.Com, BBA or an equivalent bachelor's degree from a recognised university.",
    "Minimum 45–50% aggregate marks (varies by university).",
    "Some universities also accept other graduates with commerce subjects."
  ],
  specializations: [
    "Accounting & Finance",
    "Banking & Insurance",
    "Taxation",
    "International Business",
    "Financial Analytics",
    "E-commerce"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Management Concepts & Organisational Behaviour",
        "Advanced Financial Accounting",
        "Business Economics",
        "Statistical Analysis"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Corporate Financial Management",
        "Advanced Cost Accounting",
        "Business Environment",
        "Research Methodology"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Corporate Tax Planning",
        "Security Analysis & Portfolio Management",
        "Elective I",
        "Elective II"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Auditing & Assurance",
        "International Finance",
        "Elective III",
        "Project"
      ]
    }
  ],
  careers: [
    {
      role: "Accountant / Senior Accountant",
      desc: "Manages accounts, reporting and compliance.",
      salary: "₹3 – 7 LPA"
    },
    {
      role: "Tax Consultant",
      desc: "Handles GST, income-tax planning and filings.",
      salary: "₹3.5 – 8 LPA"
    },
    {
      role: "Financial Analyst",
      desc: "Analyses financial data to guide investment and business decisions.",
      salary: "₹4.5 – 10 LPA"
    },
    {
      role: "Banking Officer",
      desc: "Works in retail, credit or operations roles in banks.",
      salary: "₹4 – 8 LPA"
    },
    {
      role: "Commerce Lecturer",
      desc: "Teaches commerce at colleges (NET/SET required).",
      salary: "₹4 – 9 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online M.Com valid?",
      a: "Yes. An online M.Com from a UGC-entitled university is equivalent to a regular M.Com for jobs and higher studies."
    },
    {
      q: "M.Com or MBA Finance — which is better?",
      a: "An M.Com goes deeper into accounting, tax and theory and suits accounting, teaching and CA/CMA paths. An MBA Finance is broader and more management-focused. Pick based on your career goal."
    },
    {
      q: "Can I do an online M.Com after BBA?",
      a: "Most universities accept BBA graduates. Check the university's specific criteria."
    }
  ],
  related: [
    "online-bcom",
    "online-mba",
    "online-ma-economics"
  ],
  image: IMG_MBA
};

export default onlineMcom;

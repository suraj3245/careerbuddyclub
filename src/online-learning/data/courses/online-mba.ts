import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online MBA — static content for /online-course/online-mba
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMba: CourseContent = {
  slug: "online-mba",
  shortName: "Online MBA",
  fullName: "Master of Business Administration (Online)",
  tagline: "A UGC-entitled, two-year management degree you can earn while you work — with 15+ in-demand specialisations.",
  overview: [
    "An Online MBA is a two-year postgraduate management degree delivered through live and recorded classes on a digital learning platform. It covers the same core subjects as an on-campus MBA — finance, marketing, HR, operations and strategy — followed by a specialisation of your choice in the second year.",
    "It is built for working professionals, graduates who want to move into management and entrepreneurs who want structured business knowledge without leaving their job or city. Degrees awarded by UGC-entitled universities in online mode carry the same value as a regular MBA for jobs and higher education."
  ],
  benefits: [
    {
      title: "Affordability",
      desc: "Online MBA fees are a fraction of a full-time MBA, with no relocation, hostel or loss-of-salary costs."
    },
    {
      title: "Flexibility",
      desc: "Weekend live classes and on-demand recordings fit around a full-time job."
    },
    {
      title: "Networking",
      desc: "Learn alongside working professionals from many industries and cities, and join the university's alumni network."
    },
    {
      title: "Self-paced Learning",
      desc: "Revisit lectures, study at your own pace and apply concepts at work the very next day."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university.",
    "Minimum 40–50% aggregate marks in graduation (varies by university; relaxation for reserved categories).",
    "Work experience is not mandatory for most Online MBAs, though it helps you get more from the programme.",
    "No upper age limit."
  ],
  entranceNote: "Most universities admit you directly on the basis of graduation marks. A few may hold their own online aptitude test or interview; CAT / MAT / CMAT scores are generally not required.",
  specializations: [
    "Marketing Management",
    "Finance Management",
    "Human Resource Management",
    "Operations Management",
    "Business Analytics",
    "Information Technology",
    "International Business",
    "Digital Marketing",
    "Healthcare Management",
    "Supply Chain & Logistics",
    "Banking & Insurance",
    "Retail Management",
    "Project Management",
    "Data Science",
    "Entrepreneurship"
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
        "Legal & Business Environment",
        "Specialisation Elective I",
        "Specialisation Elective II",
        "Specialisation Elective III"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Entrepreneurship & Innovation",
        "Business Ethics & Corporate Governance",
        "Specialisation Elective IV",
        "Specialisation Elective V",
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
    },
    {
      role: "Management Consultant",
      desc: "Advises organisations on strategy, operations and growth problems.",
      salary: "₹10 – 25 LPA"
    },
    {
      role: "Entrepreneur",
      desc: "Starts and scales a business using the strategy, finance and marketing skills from the MBA.",
      salary: "Varies"
    }
  ],
  faqs: [
    {
      q: "Is an online MBA degree valid?",
      a: "Yes. An Online MBA from a university entitled by the UGC to offer online programmes is treated as equivalent to a regular MBA for private jobs, government jobs and higher studies."
    },
    {
      q: "Is an online MBA worth doing?",
      a: "For working professionals it usually is — you gain management skills and a recognised degree without giving up your salary. The return depends on the university you choose, the specialisation and how actively you apply what you learn at work."
    },
    {
      q: "Does an online MBA provide placements?",
      a: "Most universities offer placement assistance — resume building, interview preparation, job portals and virtual placement drives. Placements are not guaranteed, and outcomes depend on your profile and experience."
    },
    {
      q: "Is an online MBA tough?",
      a: "It is manageable if you plan your time. Expect about 10–15 hours of study a week, including live classes, assignments and exam preparation."
    },
    {
      q: "Who is eligible for an online MBA?",
      a: "Anyone with a bachelor's degree in any discipline with the minimum marks set by the university (usually 40–50%) can apply. Work experience is usually optional."
    },
    {
      q: "Is an online MBA valid for government jobs?",
      a: "Yes, if the university and programme are UGC-entitled for online mode. Always check the specific recruitment notification for any extra conditions."
    }
  ],
  related: [
    "executive-mba-online",
    "dual-mba-online",
    "one-year-online-mba",
    "online-bba"
  ],
  image: IMG_MBA
};

export default onlineMba;

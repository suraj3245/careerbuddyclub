import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * Ph.D. in Computer Science — static content for /online-course/phd-in-computer-science
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const phdInComputerScience: CourseContent = {
  slug: "phd-in-computer-science",
  shortName: "Ph.D. in Computer Science",
  fullName: "Doctor of Philosophy in Computer Science",
  level: "Doctorate",
  fallbackDuration: "3 – 5 Years",
  tagline: "Carry out original research in AI, data science, networks, security or software systems.",
  bannerTitle: [
    "Ph.D. in",
    "Computer Science"
  ],
  overview: [
    "A Ph.D. in Computer Science is a research doctorate in which you produce original research — in areas such as artificial intelligence, machine learning, cybersecurity, networks, cloud computing or software engineering — and write and defend a thesis.",
    "For working professionals it is usually run as a part-time programme, with coursework in the first year and research under a supervisor after that."
  ],
  notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university.",
  benefits: [
    {
      title: "Academic Career",
      desc: "Required for most faculty positions in computer science."
    },
    {
      title: "Research Leadership",
      desc: "Qualifies you for R&D and research-scientist roles."
    },
    {
      title: "Deep Expertise",
      desc: "Become an expert in a focused area of computing."
    },
    {
      title: "Publications",
      desc: "Build a record of papers in journals and conferences."
    }
  ],
  eligibility: [
    "M.Tech / MCA / M.Sc. (CS/IT) or equivalent with at least 55% marks (50% for reserved categories), or a 4-year bachelor's degree with 75% as per UGC rules.",
    "University entrance test or UGC-NET / GATE, followed by an interview."
  ],
  specializations: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cyber Security",
    "Data Science",
    "Cloud & Distributed Systems",
    "Computer Networks",
    "Software Engineering"
  ],
  syllabusIntro: "Coursework is completed in the first year; the rest of the programme is research under your supervisor.",
  syllabus: [
    {
      term: "Coursework",
      subjects: [
        "Research Methodology",
        "Research & Publication Ethics",
        "Advanced Topics in Your Area",
        "Literature Review"
      ]
    },
    {
      term: "Research Phase",
      subjects: [
        "Research Proposal",
        "Experiments & Implementation",
        "Progress Seminars",
        "Journal / Conference Papers"
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
      role: "Assistant Professor",
      desc: "Teaches and researches at universities and engineering colleges.",
      salary: "₹8 – 18 LPA"
    },
    {
      role: "Research Scientist",
      desc: "Leads research in corporate or government R&D labs.",
      salary: "₹15 – 40 LPA"
    },
    {
      role: "AI / ML Researcher",
      desc: "Develops new models and methods in AI.",
      salary: "₹15 – 40 LPA"
    }
  ],
  faqs: [
    {
      q: "Can I do a Ph.D. in Computer Science online?",
      a: "UGC does not permit Ph.D. degrees in online or distance mode. Working professionals can pursue a part-time Ph.D. that follows UGC norms; some coursework and guidance may be online."
    },
    {
      q: "Is GATE or NET compulsory?",
      a: "Not always. Most universities hold their own entrance test; GATE/NET-qualified candidates may be exempt."
    }
  ],
  related: [
    "online-mca",
    "pg-in-ai-online",
    "phd-in-management"
  ],
  image: IMG_MCA
};

export default phdInComputerScience;

import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * Online MCA — static content for /online-course/online-mca
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMca: CourseContent = {
  slug: "online-mca",
  shortName: "Online MCA",
  fullName: "Master of Computer Applications (Online)",
  tagline: "A two-year postgraduate degree in software development, cloud, data and AI — built for working learners.",
  overview: [
    "An Online MCA is a two-year postgraduate degree in computer applications. It covers programming, data structures, databases, networks and software engineering, followed by advanced electives in areas such as cloud computing, data science, AI/ML and cybersecurity.",
    "It is ideal for BCA and B.Sc. graduates who want to grow as developers, and for professionals from other backgrounds (with mathematics) who want to move into IT."
  ],
  benefits: [
    {
      title: "Industry-relevant Skills",
      desc: "Hands-on labs in modern languages, frameworks and cloud platforms."
    },
    {
      title: "Study While You Work",
      desc: "Keep your job while you upgrade to a master's degree."
    },
    {
      title: "Specialise Early",
      desc: "Choose electives in AI/ML, data science, cloud or cybersecurity."
    },
    {
      title: "Valid Degree",
      desc: "An MCA from a UGC-entitled university is valid for jobs and higher studies."
    }
  ],
  eligibility: [
    "BCA, B.Sc. (CS/IT) or any bachelor's degree with Mathematics at 10+2 or graduation level.",
    "Minimum 50% aggregate marks in graduation (45% for reserved categories) — varies by university.",
    "Some universities offer a bridge course for non-IT graduates."
  ],
  specializations: [
    "Artificial Intelligence & Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
    "Full-Stack Development",
    "Blockchain",
    "Data Analytics"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Programming in C / Python",
        "Discrete Mathematics",
        "Computer Organisation & Architecture",
        "Database Management Systems",
        "Operating Systems"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming with Java",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Cloud Computing",
        "Machine Learning",
        "Mobile Application Development",
        "Elective I",
        "Elective II"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Information Security",
        "Elective III",
        "Major Project"
      ]
    }
  ],
  careers: [
    {
      role: "Software Developer",
      desc: "Designs, builds and maintains web, mobile or enterprise applications.",
      salary: "₹4 – 12 LPA"
    },
    {
      role: "Full-Stack Developer",
      desc: "Works across front-end, back-end and databases.",
      salary: "₹5 – 15 LPA"
    },
    {
      role: "Data Analyst",
      desc: "Cleans, analyses and visualises data to support decisions.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "Cloud Engineer",
      desc: "Deploys and manages applications on AWS, Azure or GCP.",
      salary: "₹6 – 16 LPA"
    },
    {
      role: "Cyber Security Analyst",
      desc: "Monitors systems and protects them against attacks.",
      salary: "₹5 – 14 LPA"
    },
    {
      role: "ML Engineer",
      desc: "Builds and deploys machine-learning models in products.",
      salary: "₹7 – 20 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online MCA valid?",
      a: "Yes. An online MCA from a UGC-entitled university is equivalent to a regular MCA for jobs and higher studies."
    },
    {
      q: "Can I do an online MCA without a BCA?",
      a: "Yes, most universities accept any graduate who studied Mathematics at 10+2 or graduation. Some ask non-IT graduates to take a bridge course."
    },
    {
      q: "Does an online MCA include practical labs?",
      a: "Yes. Labs are done on virtual lab platforms and your own computer, with projects in every semester."
    },
    {
      q: "Can I get a job after an online MCA?",
      a: "Yes. Employers hire for skills — build a strong project portfolio and use the university's placement support to improve your chances."
    }
  ],
  related: [
    "online-bca",
    "pg-in-ai-online",
    "pg-in-data-science-online",
    "phd-in-computer-science"
  ],
  image: IMG_MCA
};

export default onlineMca;

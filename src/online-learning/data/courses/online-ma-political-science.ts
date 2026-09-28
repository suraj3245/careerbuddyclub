import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online MA Political Science — static content for /online-course/online-ma-political-science
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMaPoliticalScience: CourseContent = {
  slug: "online-ma-political-science",
  shortName: "Online MA Political Science",
  fullName: "Master of Arts in Political Science (Online)",
  tagline: "Study political theory, Indian politics, international relations and public policy — ideal for civil-services aspirants.",
  bannerTitle: [
    "Online MA",
    "Political Science"
  ],
  overview: [
    "An Online MA in Political Science is a two-year postgraduate degree covering political theory, Indian government and politics, comparative politics, international relations and public administration.",
    "It is popular with civil-services aspirants and with anyone interested in governance, public policy, journalism, research or teaching."
  ],
  benefits: [
    {
      title: "Civil Services Edge",
      desc: "Covers a large part of the UPSC and state PSC syllabus, including a popular optional subject."
    },
    {
      title: "Understand Governance",
      desc: "Learn how governments, institutions and policies really work."
    },
    {
      title: "Critical Thinking",
      desc: "Build strong reading, analysis and writing skills."
    },
    {
      title: "Study While You Work",
      desc: "Flexible online classes alongside a job or exam preparation."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university.",
    "Minimum 40–50% aggregate marks (varies by university)."
  ],
  specializations: [
    "Political Theory",
    "Indian Politics",
    "International Relations",
    "Public Administration",
    "Public Policy",
    "Comparative Politics"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Western Political Thought",
        "Indian Government & Politics",
        "Comparative Politics",
        "Research Methods in Political Science"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Indian Political Thought",
        "International Relations: Theories",
        "Public Administration",
        "State Politics in India"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Contemporary Political Theory",
        "India's Foreign Policy",
        "Human Rights",
        "Elective I"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Public Policy & Governance",
        "Politics of Development",
        "Elective II",
        "Dissertation"
      ]
    }
  ],
  careers: [
    {
      role: "Civil Services",
      desc: "Prepare for IAS, IPS, IFS and state civil services.",
      salary: "As per pay scale"
    },
    {
      role: "Policy / Research Analyst",
      desc: "Researches policy issues for think tanks, NGOs and governments.",
      salary: "₹4 – 9 LPA"
    },
    {
      role: "Political Journalist",
      desc: "Reports and analyses politics and governance for media houses.",
      salary: "₹3 – 8 LPA"
    },
    {
      role: "Lecturer",
      desc: "Teaches political science at colleges (NET/SET required).",
      salary: "₹4 – 9 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an MA in Political Science useful for UPSC?",
      a: "Yes. It covers much of the General Studies polity and international-relations syllabus, and Political Science & International Relations is a popular optional subject."
    },
    {
      q: "Can I do an online MA Political Science after B.Sc. or B.Com?",
      a: "Yes, most universities accept graduates from any discipline."
    }
  ],
  related: [
    "online-ma",
    "online-ma-economics",
    "online-ma-english"
  ],
  image: IMG_MBA
};

export default onlineMaPoliticalScience;

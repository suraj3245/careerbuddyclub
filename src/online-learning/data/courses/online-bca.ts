import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * Online BCA — static content for /online-course/online-bca
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineBca: CourseContent = {
  slug: "online-bca",
  shortName: "Online BCA",
  fullName: "Bachelor of Computer Applications (Online)",
  tagline: "A three-year undergraduate degree in programming, databases and web development — study from anywhere after 12th.",
  overview: [
    "An Online BCA is a three-year undergraduate degree that builds a strong foundation in computer applications — programming, databases, networking, web and mobile development.",
    "It suits students who want to start an IT career after Class 12, as well as working learners who want a recognised degree. It is also the most common route into an MCA."
  ],
  benefits: [
    {
      title: "Start Early in IT",
      desc: "Build coding skills and a portfolio right after Class 12."
    },
    {
      title: "Flexible Learning",
      desc: "Study alongside a job, an internship or other commitments."
    },
    {
      title: "Affordable",
      desc: "Lower fees than on-campus programmes, with EMI options."
    },
    {
      title: "Path to MCA",
      desc: "A natural stepping stone to an MCA and specialised IT roles."
    }
  ],
  eligibility: [
    "Class 12 pass from a recognised board in any stream.",
    "Minimum 45–50% marks in Class 12 (varies by university).",
    "Some universities prefer Mathematics or Computer Science in Class 12."
  ],
  specializations: [
    "Data Science",
    "Cloud & Security",
    "Full-Stack Development",
    "AI & Machine Learning",
    "Cyber Security"
  ],
  syllabus: [
    {
      term: "Year 1",
      subjects: [
        "Fundamentals of Computers & IT",
        "Programming in C",
        "Mathematics for Computing",
        "Digital Electronics",
        "Communication Skills"
      ]
    },
    {
      term: "Year 2",
      subjects: [
        "Data Structures",
        "Object-Oriented Programming (C++/Java)",
        "Database Management Systems",
        "Operating Systems",
        "Web Development (HTML, CSS, JavaScript)"
      ]
    },
    {
      term: "Year 3",
      subjects: [
        "Computer Networks",
        "Software Engineering",
        "Python Programming",
        "Mobile App Development",
        "Electives",
        "Major Project"
      ]
    }
  ],
  careers: [
    {
      role: "Junior Software Developer",
      desc: "Writes and tests code as part of a development team.",
      salary: "₹3 – 6 LPA"
    },
    {
      role: "Web Developer",
      desc: "Builds and maintains websites and web apps.",
      salary: "₹3 – 7 LPA"
    },
    {
      role: "Technical Support Engineer",
      desc: "Resolves hardware, software and network issues for users.",
      salary: "₹2.5 – 5 LPA"
    },
    {
      role: "QA / Test Engineer",
      desc: "Tests software to find bugs before release.",
      salary: "₹3 – 6 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online BCA valid?",
      a: "Yes. An online BCA from a UGC-entitled university is equivalent to a regular BCA for jobs and higher studies such as MCA."
    },
    {
      q: "Can a commerce or arts student do an online BCA?",
      a: "Yes, most universities accept Class 12 from any stream, though some prefer Mathematics."
    },
    {
      q: "What can I do after an online BCA?",
      a: "You can start working as a developer, tester or support engineer, or continue to an MCA or a PG programme in data science or AI."
    }
  ],
  related: [
    "online-mca",
    "online-bba",
    "pg-in-data-science-online"
  ],
  image: IMG_MCA
};

export default onlineBca;

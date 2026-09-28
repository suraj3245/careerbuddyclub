import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * Online M.Sc. — static content for /online-course/online-msc
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMsc: CourseContent = {
  slug: "online-msc",
  shortName: "Online M.Sc.",
  fullName: "Master of Science (Online)",
  tagline: "A two-year science master's in areas such as Mathematics, Data Science and Computer Science — studied online.",
  overview: [
    "An Online M.Sc. is a two-year postgraduate science degree offered in subjects that can be taught effectively online — for example Mathematics, Data Science, Computer Science, Applied Statistics or Environmental Science.",
    "It is suited to science graduates who want to deepen their subject knowledge for teaching, research, analytics or technical roles, without leaving their job."
  ],
  eligibility: [
    "B.Sc. or an equivalent bachelor's degree in a relevant subject from a recognised university.",
    "Minimum 45–50% aggregate marks (varies by university and subject).",
    "Some subjects need specific subjects at graduation — e.g. Mathematics for M.Sc. Mathematics or Data Science."
  ],
  specializations: [
    "Mathematics",
    "Data Science",
    "Computer Science",
    "Applied Statistics",
    "Environmental Science",
    "Physics",
    "Chemistry"
  ],
  syllabusIntro: "Subjects depend on the specialisation. A typical M.Sc. (Mathematics / Data Science) looks like this:",
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Real Analysis",
        "Linear Algebra",
        "Probability & Statistics",
        "Programming with Python"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Complex Analysis",
        "Differential Equations",
        "Numerical Methods",
        "Data Structures"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Optimisation Techniques",
        "Machine Learning",
        "Elective I",
        "Elective II"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Elective III",
        "Research Methodology",
        "Dissertation / Project"
      ]
    }
  ],
  careers: [
    {
      role: "Lecturer / Teacher",
      desc: "Teaches at schools, coaching institutes or colleges (NET/SET or B.Ed. may be needed).",
      salary: "₹3 – 8 LPA"
    },
    {
      role: "Data Analyst",
      desc: "Analyses data to support business decisions.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "Research Assistant",
      desc: "Supports research projects in labs and institutes.",
      salary: "₹3 – 6 LPA"
    },
    {
      role: "Statistician",
      desc: "Designs surveys and analyses data for organisations.",
      salary: "₹4 – 10 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online M.Sc. valid?",
      a: "Yes, if the university and programme are UGC-entitled for online mode. It is equivalent to a regular M.Sc."
    },
    {
      q: "Which M.Sc. subjects are offered online?",
      a: "Mostly subjects that don't need heavy wet-lab work, such as Mathematics, Data Science, Computer Science and Statistics. Lab-intensive subjects are rarely offered fully online."
    },
    {
      q: "Can I do a Ph.D. after an online M.Sc.?",
      a: "Yes. A UGC-entitled online M.Sc. makes you eligible for Ph.D. admission and exams like CSIR-NET, subject to the usual marks criteria."
    }
  ],
  related: [
    "pg-in-data-science-online",
    "online-mca",
    "online-ma"
  ],
  image: IMG_MCA
};

export default onlineMsc;

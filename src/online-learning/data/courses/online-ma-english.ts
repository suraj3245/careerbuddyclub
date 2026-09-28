import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online MA English — static content for /online-course/online-ma-english
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMaEnglish: CourseContent = {
  slug: "online-ma-english",
  shortName: "Online MA English",
  fullName: "Master of Arts in English (Online)",
  tagline: "Study literature, language and communication — a strong foundation for teaching, writing, media and publishing.",
  bannerTitle: [
    "Online MA",
    "English"
  ],
  overview: [
    "An Online MA in English is a two-year postgraduate degree covering British, American, Indian and world literature, literary theory, linguistics and communication.",
    "It develops excellent reading, writing and critical-thinking skills, which are valued in teaching, content, publishing, media, corporate communication and competitive exams."
  ],
  benefits: [
    {
      title: "Communication Skills",
      desc: "Become a confident, clear writer and speaker."
    },
    {
      title: "Teaching Pathway",
      desc: "Leads to teaching roles after B.Ed. or NET/SET."
    },
    {
      title: "Content Careers",
      desc: "Strong base for writing, editing and publishing roles."
    },
    {
      title: "Study While You Work",
      desc: "Flexible online classes alongside a job."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline from a recognised university (English at graduation preferred by some universities).",
    "Minimum 40–50% aggregate marks (varies by university)."
  ],
  specializations: [
    "British Literature",
    "American Literature",
    "Indian Writing in English",
    "Literary Theory",
    "Linguistics & ELT",
    "Postcolonial Literature"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "British Poetry",
        "British Drama",
        "History of English Literature",
        "Introduction to Linguistics"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "British Novel",
        "American Literature",
        "Literary Criticism",
        "English Language Teaching"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Indian Writing in English",
        "Literary Theory",
        "Postcolonial Literature",
        "Elective I"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "World Literature in Translation",
        "Women's Writing",
        "Elective II",
        "Dissertation"
      ]
    }
  ],
  careers: [
    {
      role: "English Teacher / Lecturer",
      desc: "Teaches English at schools or colleges (B.Ed. or NET/SET may be required).",
      salary: "₹3 – 8 LPA"
    },
    {
      role: "Content Writer / Copywriter",
      desc: "Writes for websites, brands, agencies and publications.",
      salary: "₹3 – 7 LPA"
    },
    {
      role: "Editor / Proofreader",
      desc: "Edits books, journals and digital content for publishers.",
      salary: "₹3 – 7 LPA"
    },
    {
      role: "Corporate Communication Executive",
      desc: "Handles internal and external communication for companies.",
      salary: "₹4 – 8 LPA"
    }
  ],
  faqs: [
    {
      q: "Can I become a lecturer after an online MA English?",
      a: "Yes. You will also need to clear UGC-NET or a state SET, and meet the university's other requirements."
    },
    {
      q: "Can I do an online MA English without English Honours?",
      a: "Usually yes. Most universities accept graduates from any discipline, though some prefer English as a subject at graduation."
    }
  ],
  related: [
    "online-ma",
    "online-ma-political-science",
    "online-ba"
  ],
  image: IMG_MBA
};

export default onlineMaEnglish;

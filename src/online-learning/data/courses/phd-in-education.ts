import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Ph.D. in Education — static content for /online-course/phd-in-education
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const phdInEducation: CourseContent = {
  slug: "phd-in-education",
  shortName: "Ph.D. in Education",
  fullName: "Doctor of Philosophy in Education",
  tagline: "A research doctorate for educators who want to shape teaching, learning and education policy.",
  bannerTitle: [
    "Ph.D. in",
    "Education"
  ],
  overview: [
    "A Ph.D. in Education is a research doctorate in which you study an area such as pedagogy, curriculum, educational psychology, teacher education, educational technology or education policy, and write and defend a thesis.",
    "For working educators it is typically offered as a part-time programme, with coursework first and research under a supervisor after that."
  ],
  notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university.",
  benefits: [
    {
      title: "Academic Career",
      desc: "A Ph.D. is needed for most senior faculty roles in education."
    },
    {
      title: "Research Impact",
      desc: "Contribute evidence that improves teaching and policy."
    },
    {
      title: "Leadership Roles",
      desc: "Qualifies you for senior academic and policy positions."
    },
    {
      title: "Highest Qualification",
      desc: "Earn the top academic degree in education."
    }
  ],
  eligibility: [
    "M.Ed. or a master's degree in Education (or a related field) with at least 55% marks (50% for reserved categories), as per UGC rules.",
    "University entrance test or UGC-NET / JRF, followed by an interview."
  ],
  specializations: [
    "Educational Psychology",
    "Curriculum Studies",
    "Teacher Education",
    "Educational Technology",
    "Inclusive Education",
    "Education Policy"
  ],
  syllabusIntro: "Coursework is completed in the first year; the rest of the programme is research under your supervisor.",
  syllabus: [
    {
      term: "Coursework",
      subjects: [
        "Research Methodology in Education",
        "Research & Publication Ethics",
        "Statistics for Educational Research",
        "Review of Literature"
      ]
    },
    {
      term: "Research Phase",
      subjects: [
        "Research Proposal",
        "Field Work & Data Collection",
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
      role: "Assistant / Associate Professor (Education)",
      desc: "Teaches and researches at universities and teacher-education colleges.",
      salary: "₹7 – 18 LPA"
    },
    {
      role: "Education Researcher",
      desc: "Leads research for institutes, NGOs and government bodies.",
      salary: "₹6 – 15 LPA"
    },
    {
      role: "Policy Advisor",
      desc: "Shapes education policy for governments and organisations.",
      salary: "₹8 – 20 LPA"
    }
  ],
  faqs: [
    {
      q: "Can I do a Ph.D. in Education online?",
      a: "UGC does not allow Ph.D. degrees in online or distance mode. Working educators can pursue a part-time Ph.D. that follows UGC norms; some coursework and guidance may be online."
    },
    {
      q: "Is M.Ed. compulsory for a Ph.D. in Education?",
      a: "Most universities require an M.Ed. or a master's degree in Education. Some accept related master's degrees — check the university's criteria."
    }
  ],
  related: [
    "online-med",
    "med-and-edd-combo",
    "phd-in-management"
  ],
  image: IMG_MBA
};

export default phdInEducation;

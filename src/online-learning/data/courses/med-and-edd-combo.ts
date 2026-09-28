import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * M.Ed & Ed.D Combo — static content for /online-course/med-and-edd-combo
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const medAndEddCombo: CourseContent = {
  slug: "med-and-edd-combo",
  shortName: "M.Ed & Ed.D Combo",
  fullName: "Master of Education + Doctor of Education Combo",
  tagline: "A combined pathway from a master's in education to a professional doctorate (Ed.D) for education leaders.",
  bannerTitle: [
    "M.Ed +",
    "Ed.D"
  ],
  overview: [
    "The M.Ed & Ed.D combo combines a master's-level education programme with a Doctor of Education (Ed.D), a professional doctorate focused on solving real problems in schools, colleges and education systems.",
    "It is designed for experienced teachers, principals, trainers and education administrators who want to lead institutions and drive change in education."
  ],
  notice: "An Ed.D is a professional doctorate and is often awarded by a foreign university. It is not the same as a UGC-regulated Ph.D. and may not be accepted for faculty or government posts in India. Check recognition and AIU equivalence before you enrol.",
  benefits: [
    {
      title: "Two Qualifications",
      desc: "A master's and a professional doctorate in one planned pathway."
    },
    {
      title: "Leadership Focus",
      desc: "Built around leading schools, colleges and education programmes."
    },
    {
      title: "Applied Research",
      desc: "Research that tackles real problems in your own institution."
    },
    {
      title: "Study While You Work",
      desc: "Designed for working education professionals."
    }
  ],
  eligibility: [
    "Bachelor's degree with B.Ed. (or equivalent), or a relevant master's degree.",
    "Usually several years of teaching or education-management experience.",
    "English proficiency may be required where a foreign university is involved."
  ],
  specializations: [
    "Educational Leadership",
    "Curriculum & Instruction",
    "Higher Education Administration",
    "Educational Technology"
  ],
  syllabus: [
    {
      term: "Master's Stage",
      subjects: [
        "Foundations of Education",
        "Curriculum Design",
        "Assessment & Evaluation",
        "Educational Leadership",
        "Research Methods"
      ]
    },
    {
      term: "Doctoral Coursework",
      subjects: [
        "Advanced Research Design",
        "Leading Change in Education",
        "Education Policy",
        "Academic Writing"
      ]
    },
    {
      term: "Doctoral Research",
      subjects: [
        "Research Proposal",
        "Applied Research Study",
        "Dissertation",
        "Final Defence"
      ]
    }
  ],
  careers: [
    {
      role: "Principal / Head of School",
      desc: "Leads a school's academics, staff and administration.",
      salary: "₹8 – 20 LPA"
    },
    {
      role: "Education Consultant",
      desc: "Advises schools, EdTech firms and governments on education quality.",
      salary: "₹8 – 20 LPA"
    },
    {
      role: "Academic Director",
      desc: "Oversees academics across a group of schools or institutions.",
      salary: "₹12 – 25 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an Ed.D the same as a Ph.D. in Education?",
      a: "No. An Ed.D is a professional doctorate focused on practice and leadership; a Ph.D. is an academic research degree. For faculty posts in India, a UGC-compliant Ph.D. is usually required."
    },
    {
      q: "Who should choose this combo?",
      a: "Experienced educators aiming for leadership roles in schools, school groups or education organisations."
    }
  ],
  related: [
    "online-med",
    "phd-in-education",
    "mba-and-doctorate-combo"
  ],
  image: IMG_MBA
};

export default medAndEddCombo;

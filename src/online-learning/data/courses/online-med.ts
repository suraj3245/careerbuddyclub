import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online M.Ed. — static content for /online-course/online-med
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineMed: CourseContent = {
  slug: "online-med",
  shortName: "Online M.Ed.",
  fullName: "Master of Education (Online)",
  tagline: "A postgraduate degree for teachers and educators who want to grow into leadership, training and curriculum roles.",
  overview: [
    "An M.Ed. (Master of Education) is a postgraduate degree for teachers and education professionals. It covers educational psychology, curriculum design, assessment, educational leadership, research methods and inclusive education.",
    "It helps teachers move into senior teaching, teacher-training, curriculum-development, school-leadership and education-research roles."
  ],
  notice: "M.Ed. programmes are regulated by the NCTE as well as the UGC. Check that the specific M.Ed. programme and its mode are recognised before you enrol, especially if you plan to become a teacher-educator.",
  benefits: [
    {
      title: "Career Growth",
      desc: "Move into teacher-educator, coordinator or school-leadership roles."
    },
    {
      title: "Research Skills",
      desc: "Learn to design and evaluate educational research."
    },
    {
      title: "Better Teaching",
      desc: "Apply modern pedagogy and assessment in your classroom."
    },
    {
      title: "Study While Teaching",
      desc: "Continue your teaching job while you study."
    }
  ],
  eligibility: [
    "B.Ed. (or an equivalent teacher-education degree) from a recognised institution.",
    "Minimum 50% marks in B.Ed. (varies by university; relaxation for reserved categories)."
  ],
  specializations: [
    "Educational Leadership & Management",
    "Curriculum & Pedagogy",
    "Educational Technology",
    "Inclusive / Special Education",
    "Guidance & Counselling"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Psychology of Learning & Development",
        "Philosophy of Education",
        "Educational Studies",
        "Introduction to Research Methods"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Sociology of Education",
        "Curriculum Studies",
        "Teacher Education",
        "Advanced Research Methods"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Educational Technology",
        "Assessment & Evaluation",
        "Specialisation Elective I",
        "Internship"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Educational Leadership",
        "Inclusive Education",
        "Specialisation Elective II",
        "Dissertation"
      ]
    }
  ],
  careers: [
    {
      role: "Teacher Educator",
      desc: "Trains future teachers at B.Ed. / D.El.Ed. colleges.",
      salary: "₹4 – 8 LPA"
    },
    {
      role: "Academic Coordinator",
      desc: "Plans and oversees curriculum and teaching quality in a school.",
      salary: "₹4 – 8 LPA"
    },
    {
      role: "Curriculum Developer",
      desc: "Designs courses and learning materials for schools and EdTech.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "School Principal / Vice-Principal",
      desc: "Leads a school's academics and administration (with experience).",
      salary: "₹6 – 15 LPA"
    }
  ],
  faqs: [
    {
      q: "Who can do an M.Ed.?",
      a: "Candidates who hold a B.Ed. (or equivalent teacher-education degree) with the minimum marks set by the university."
    },
    {
      q: "What is the difference between B.Ed. and M.Ed.?",
      a: "A B.Ed. qualifies you to teach in schools. An M.Ed. is a master's degree that prepares you for teacher-training, leadership, curriculum and research roles."
    }
  ],
  related: [
    "med-and-edd-combo",
    "phd-in-education",
    "online-ma"
  ],
  image: IMG_MBA
};

export default onlineMed;

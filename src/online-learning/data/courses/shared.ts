/**
 * Content shared by every course page. Edit here to change it everywhere;
 * edit data/courses/<slug>.ts to change one course.
 */
import type { CourseBenefit, CourseContent, CourseFAQ, CourseLevel } from "./types";

export const IMG_MBA = "/assets/images/courses/online-mba.png";
export const IMG_MCA = "/assets/images/courses/online-mca.png";

export const DEFAULT_BANNER_TAGLINE = "Gateway to a Brighter Future";

export const LEVEL_LABEL: Record<CourseLevel, string> = {
  UG: "Undergraduate",
  PG: "Postgraduate",
  Diploma: "Diploma",
  Executive: "Executive Programme",
  Doctorate: "Doctorate",
  Certificate: "PG Certificate",
};

export const ADMISSION_STEPS: CourseBenefit[] = [
  { title: "Registration", desc: "Fill in the online application form on the university portal and pay the application fee, if any." },
  { title: "Document Submission", desc: "Upload scanned copies of your mark sheets, ID proof, photograph and other required documents." },
  { title: "Document Verification", desc: "The university verifies your eligibility and documents, usually within a few working days." },
  { title: "Fee Payment", desc: "Pay the semester or annual fee — most universities also offer EMI or instalment options." },
  { title: "Admission Confirmed", desc: "Receive your enrolment number and LMS login, then start attending live and recorded classes." },
];

export function getRequiredDocuments(level: CourseLevel): CourseBenefit[] {
  const academic =
    level === "UG"
      ? "Class 10 and Class 12 mark sheets and passing certificates."
      : level === "Doctorate"
      ? "Class 10, 12, graduation and post-graduation mark sheets and degree certificates."
      : "Class 10, 12 and graduation mark sheets and degree certificate (plus PG documents, if any).";
  const docs: CourseBenefit[] = [
    { title: "Academic Documents", desc: academic },
    { title: "Government ID Proof", desc: "Aadhaar card, PAN card, passport or any other valid government-issued photo ID." },
    { title: "Passport-size Photographs", desc: "Recent colour photographs with a plain background, in the format the university asks for." },
  ];
  if (level === "Executive" || level === "Doctorate") {
    docs.push({ title: "Work Experience Proof", desc: "Experience or relieving letters, and a current salary slip or employer letter where required." });
  } else {
    docs.push({ title: "Other Certificates", desc: "Migration / transfer certificate, category certificate (if applicable) and work experience letter, if any." });
  }
  return docs;
}

/** Used when a course file has no `benefits`. */
export const DEFAULT_BENEFITS: CourseBenefit[] = [
  { title: "Study While You Work", desc: "Live weekend classes and recorded lectures let you keep your job and income while you earn a degree." },
  { title: "Affordable Fees", desc: "Online programmes cost far less than their on-campus versions and most universities offer easy EMI options." },
  { title: "Same Degree Value", desc: "Degrees from UGC-entitled universities in online mode are treated at par with regular degrees for jobs and higher studies." },
  { title: "Learn From Anywhere", desc: "Attend classes, submit assignments and take proctored exams from home — no relocation or commute needed." },
];

/** Added after every course's own FAQs. */
export const COMMON_FAQS = (name: string): CourseFAQ[] => [
  {
    q: `How are ${name} classes and exams conducted?`,
    a: "Classes run on the university's learning management system (LMS) as a mix of live sessions — usually on weekends — and recorded lectures you can watch any time. Semester exams are generally online and remotely proctored; a few universities may ask you to visit an exam centre.",
  },
  {
    q: `Can I pay the ${name} fee in instalments?`,
    a: "Yes. Most universities let you pay semester-wise or annually, and many offer no-cost or low-cost EMI through partner lenders. Talk to a Career Buddy Club counsellor for the current payment plans of each university.",
  },
  {
    q: "How do I check whether the university is approved?",
    a: "Look for the university in the UGC-DEB list of institutions entitled to offer online programmes for the relevant academic session, and check that the specific programme is listed. Our counsellors can help you verify this before you apply.",
  },
];

/** Minimal content for a course that exists in the API but has no file in data/courses yet. */
export function buildFallbackContent(slug: string, name: string): CourseContent {
  const n = name.toLowerCase();
  const isUG = /^b|bachelor|online\s*b/.test(n);
  return {
    slug,
    shortName: name,
    fullName: name,
    tagline: `Explore ${name} — eligibility, fees, universities, syllabus and career scope.`,
    overview: [], // → API description is used
    eligibility: isUG
      ? ["Class 12 pass from a recognised board.", "Minimum marks as set by the university."]
      : ["Bachelor's degree from a recognised university.", "Minimum marks as set by the university."],
    specializations: [],
    syllabus: [],
    careers: [],
    faqs: [],
    related: [],
    image: /mca|bca|computer|data|ai\b/.test(n) ? IMG_MCA : IMG_MBA,
  };
}

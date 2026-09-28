import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Online BBA — static content for /online-course/online-bba
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const onlineBba: CourseContent = {
  slug: "online-bba",
  shortName: "Online BBA",
  fullName: "Bachelor of Business Administration (Online)",
  tagline: "A three-year management degree that builds business, marketing and leadership skills right after 12th.",
  overview: [
    "An Online BBA is a three-year undergraduate degree that introduces you to how businesses work — management, marketing, finance, HR, operations and entrepreneurship.",
    "It suits students who want an early start in business or management, young entrepreneurs, and working learners who want a recognised degree. It is also the most natural route to an MBA."
  ],
  benefits: [
    {
      title: "Early Management Start",
      desc: "Build business and leadership skills straight after Class 12."
    },
    {
      title: "Earn While You Learn",
      desc: "Work or intern while you study."
    },
    {
      title: "Entrepreneurship",
      desc: "Learn to plan, fund and grow your own venture."
    },
    {
      title: "Path to MBA",
      desc: "A strong foundation for an MBA later."
    }
  ],
  eligibility: [
    "Class 12 pass in any stream from a recognised board.",
    "Minimum 40–50% marks in Class 12 (varies by university)."
  ],
  specializations: [
    "Marketing",
    "Finance",
    "Human Resource Management",
    "Digital Marketing",
    "Business Analytics",
    "International Business",
    "Entrepreneurship"
  ],
  syllabus: [
    {
      term: "Year 1",
      subjects: [
        "Principles of Management",
        "Business Economics",
        "Financial Accounting",
        "Business Communication",
        "Business Mathematics & Statistics"
      ]
    },
    {
      term: "Year 2",
      subjects: [
        "Marketing Management",
        "Human Resource Management",
        "Financial Management",
        "Organisational Behaviour",
        "Business Law"
      ]
    },
    {
      term: "Year 3",
      subjects: [
        "Strategic Management",
        "Entrepreneurship Development",
        "Specialisation Electives",
        "Summer Internship / Project"
      ]
    }
  ],
  careers: [
    {
      role: "Business Development Executive",
      desc: "Finds new customers and grows sales.",
      salary: "₹3 – 6 LPA"
    },
    {
      role: "Marketing Executive",
      desc: "Supports campaigns, social media and brand activities.",
      salary: "₹3 – 5.5 LPA"
    },
    {
      role: "HR Executive",
      desc: "Supports recruitment, onboarding and employee engagement.",
      salary: "₹2.5 – 5 LPA"
    },
    {
      role: "Operations Executive",
      desc: "Helps run day-to-day business processes.",
      salary: "₹2.5 – 5 LPA"
    }
  ],
  faqs: [
    {
      q: "Is an online BBA valid?",
      a: "Yes. An online BBA from a UGC-entitled university is equivalent to a regular BBA for jobs and higher studies such as an MBA."
    },
    {
      q: "What can I do after an online BBA?",
      a: "Start working in sales, marketing, HR or operations, or continue to an MBA — the most common next step."
    },
    {
      q: "Can a science student do an online BBA?",
      a: "Yes. Students from any stream can apply."
    }
  ],
  related: [
    "online-mba",
    "online-bcom",
    "online-bca"
  ],
  image: IMG_MBA
};

export default onlineBba;

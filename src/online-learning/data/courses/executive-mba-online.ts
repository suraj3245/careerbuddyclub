import type { CourseContent } from "./types";
import { IMG_MBA } from "./shared";

/**
 * Executive MBA — static content for /online-course/executive-mba-online
 *
 * From the API (don't add here): fees, duration, universities, approvals, level.
 * Edit anything below to update this course's page.
 */
const executiveMbaOnline: CourseContent = {
  slug: "executive-mba-online",
  shortName: "Executive MBA",
  fullName: "Executive Master of Business Administration (Online)",
  level: "Executive",
  tagline: "A leadership-focused MBA for experienced professionals moving into senior management roles.",
  bannerTitle: [
    "Executive",
    "MBA"
  ],
  overview: [
    "An Executive MBA (EMBA) is a postgraduate management programme for professionals who already have significant work experience. It focuses less on theory and more on leadership, strategy, decision-making and managing change.",
    "Classes are scheduled around a full-time job and draw heavily on the experience of the batch, so peer learning is a big part of the programme."
  ],
  benefits: [
    {
      title: "Leadership Focus",
      desc: "Strategy, negotiation and people leadership for senior roles."
    },
    {
      title: "Experienced Peers",
      desc: "Learn with managers from many industries and build a strong professional network."
    },
    {
      title: "Apply at Work",
      desc: "Projects are often based on real challenges from your own organisation."
    },
    {
      title: "No Career Break",
      desc: "Keep your job, salary and seniority while you study."
    }
  ],
  eligibility: [
    "Bachelor's degree from a recognised university, usually with 50% marks.",
    "Minimum 2–5 years of full-time work experience (varies by university).",
    "Some universities hold an interview or statement-of-purpose review."
  ],
  specializations: [
    "General Management",
    "Leadership & Strategy",
    "Finance",
    "Marketing",
    "Human Resources",
    "Operations",
    "Business Analytics",
    "Digital Transformation"
  ],
  syllabus: [
    {
      term: "Semester 1",
      subjects: [
        "Leadership & Organisational Behaviour",
        "Managerial Economics",
        "Financial Reporting & Analysis",
        "Marketing Strategy"
      ]
    },
    {
      term: "Semester 2",
      subjects: [
        "Corporate Finance",
        "Operations Strategy",
        "Data-driven Decision Making",
        "Human Capital Strategy"
      ]
    },
    {
      term: "Semester 3",
      subjects: [
        "Strategic Management",
        "Negotiation & Conflict Management",
        "Specialisation Electives"
      ]
    },
    {
      term: "Semester 4",
      subjects: [
        "Managing Change & Innovation",
        "Global Business Environment",
        "Specialisation Electives",
        "Industry Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "General Manager",
      desc: "Runs a business unit and is accountable for its growth and profitability.",
      salary: "₹18 – 40 LPA"
    },
    {
      role: "Head of Department",
      desc: "Leads a function such as sales, HR, finance or operations.",
      salary: "₹15 – 35 LPA"
    },
    {
      role: "Strategy Manager",
      desc: "Shapes long-term plans, new markets and major investments.",
      salary: "₹15 – 30 LPA"
    },
    {
      role: "Management Consultant",
      desc: "Advises leadership teams on strategy and transformation.",
      salary: "₹12 – 30 LPA"
    }
  ],
  faqs: [
    {
      q: "What is the difference between an Executive MBA and an Online MBA?",
      a: "An Executive MBA requires several years of work experience and focuses on leadership and strategy. A regular Online MBA is open to fresh graduates and covers management fundamentals in more depth."
    },
    {
      q: "Is work experience compulsory for an Executive MBA?",
      a: "Yes. Most universities ask for at least 2–5 years of full-time experience."
    },
    {
      q: "Will an Executive MBA help me get promoted?",
      a: "It strengthens your case for senior roles by adding leadership and strategy skills and a recognised qualification, but promotions still depend on your performance and your employer."
    }
  ],
  related: [
    "online-mba",
    "executive-pg-management-online",
    "senior-management-programme"
  ],
  image: IMG_MBA
};

export default executiveMbaOnline;

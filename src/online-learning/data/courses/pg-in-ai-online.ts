import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * PG in AI — static content for /online-course/pg-in-ai-online
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const pgInAiOnline: CourseContent = {
  slug: "pg-in-ai-online",
  shortName: "PG in AI",
  fullName: "Post Graduate Programme in Artificial Intelligence & Generative AI (Online)",
  level: "Certificate",
  fallbackDuration: "6 – 12 Months",
  tagline: "Learn machine learning, deep learning, LLMs and agentic AI — and build real projects for your portfolio.",
  bannerTitle: [
    "PG in",
    "AI"
  ],
  overview: [
    "A PG programme in Artificial Intelligence teaches you how modern AI systems are built — from machine learning and deep learning to large language models (LLMs), generative AI and AI agents.",
    "It is aimed at engineers, developers and analysts who want to move into AI roles. Most programmes are project-heavy and are awarded as a PG certificate or diploma."
  ],
  notice: "This is typically a PG certificate / diploma, not a master's degree. Check the award and the issuing institution before you enrol.",
  benefits: [
    {
      title: "In-demand Skills",
      desc: "AI and generative-AI skills are among the most sought-after in tech hiring."
    },
    {
      title: "Hands-on Projects",
      desc: "Build chatbots, RAG apps, vision models and AI agents."
    },
    {
      title: "Industry Tools",
      desc: "Work with Python, PyTorch/TensorFlow, LangChain and cloud AI platforms."
    },
    {
      title: "Short Duration",
      desc: "Upskill in months without leaving your job."
    }
  ],
  eligibility: [
    "Bachelor's degree, preferably in engineering, computer science, mathematics or statistics.",
    "Basic programming knowledge (Python preferred) — some programmes include a preparatory module.",
    "Work experience is recommended but not always required."
  ],
  specializations: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Generative AI & LLMs",
    "Agentic AI",
    "Computer Vision",
    "MLOps"
  ],
  syllabus: [
    {
      term: "Module 1",
      subjects: [
        "Python for AI",
        "Statistics & Probability",
        "Linear Algebra Essentials",
        "Data Wrangling"
      ]
    },
    {
      term: "Module 2",
      subjects: [
        "Supervised & Unsupervised Learning",
        "Model Evaluation",
        "Feature Engineering"
      ]
    },
    {
      term: "Module 3",
      subjects: [
        "Neural Networks & Deep Learning",
        "Computer Vision",
        "NLP & Transformers"
      ]
    },
    {
      term: "Module 4",
      subjects: [
        "Generative AI & LLMs",
        "Prompt Engineering & RAG",
        "AI Agents",
        "MLOps & Deployment",
        "Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "Machine Learning Engineer",
      desc: "Builds, trains and deploys ML models in production.",
      salary: "₹8 – 25 LPA"
    },
    {
      role: "AI Engineer / GenAI Developer",
      desc: "Builds applications on top of LLMs and AI APIs.",
      salary: "₹8 – 25 LPA"
    },
    {
      role: "Data Scientist",
      desc: "Uses statistics and ML to solve business problems.",
      salary: "₹8 – 20 LPA"
    },
    {
      role: "NLP Engineer",
      desc: "Builds language-understanding systems such as chatbots and search.",
      salary: "₹8 – 22 LPA"
    }
  ],
  faqs: [
    {
      q: "Do I need to know coding for a PG in AI?",
      a: "Basic Python helps a lot. Many programmes include a short Python and maths refresher at the start."
    },
    {
      q: "Is a PG in AI a degree?",
      a: "Usually not — it is a PG certificate or diploma. It is valued for skills and projects. If you need a degree, consider an MCA or M.Sc. with an AI specialisation."
    },
    {
      q: "Can non-IT graduates join?",
      a: "Yes, if you are comfortable with maths and willing to learn programming. Graduates in science, engineering, commerce with statistics or economics often do well."
    }
  ],
  related: [
    "pg-in-data-science-online",
    "online-mca",
    "online-msc"
  ],
  image: IMG_MCA
};

export default pgInAiOnline;

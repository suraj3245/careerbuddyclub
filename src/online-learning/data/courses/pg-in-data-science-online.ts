import type { CourseContent } from "./types";
import { IMG_MCA } from "./shared";

/**
 * PG in Data Science — static content for /online-course/pg-in-data-science-online
 *
 * From the API (don't add here): fees, duration, universities, approvals.
 * Edit anything below to update this course's page.
 */
const pgInDataScienceOnline: CourseContent = {
  slug: "pg-in-data-science-online",
  shortName: "PG in Data Science",
  fullName: "Post Graduate Programme in Data Science (Online)",
  level: "Certificate",
  fallbackDuration: "6 – 12 Months",
  tagline: "Master Python, SQL, statistics, machine learning and data visualisation to become job-ready for data roles.",
  bannerTitle: [
    "PG in",
    "Data Science"
  ],
  overview: [
    "A PG programme in Data Science teaches you to collect, clean, analyse and model data to answer business questions. It covers Python, SQL, statistics, machine learning, data visualisation and big-data tools.",
    "It suits graduates and working professionals from IT, engineering, commerce, economics and science backgrounds who want to move into analytics or data-science roles."
  ],
  notice: "This is typically a PG certificate / diploma, not a master's degree. Check the award and the issuing institution before you enrol.",
  benefits: [
    {
      title: "High Demand",
      desc: "Almost every industry now hires data analysts and data scientists."
    },
    {
      title: "Portfolio Projects",
      desc: "Work on real datasets from finance, retail, healthcare and more."
    },
    {
      title: "Industry Tools",
      desc: "Python, SQL, Power BI/Tableau, scikit-learn and cloud platforms."
    },
    {
      title: "Career Switch",
      desc: "A practical route into data from almost any quantitative background."
    }
  ],
  eligibility: [
    "Bachelor's degree in any discipline, preferably with Mathematics or Statistics.",
    "Some universities require 50% marks in graduation.",
    "No prior coding experience is needed for most programmes."
  ],
  specializations: [
    "Data Analytics",
    "Machine Learning",
    "Business Intelligence",
    "Big Data Engineering",
    "Deep Learning"
  ],
  syllabus: [
    {
      term: "Module 1",
      subjects: [
        "Python Programming",
        "Statistics for Data Science",
        "Excel & SQL"
      ]
    },
    {
      term: "Module 2",
      subjects: [
        "Exploratory Data Analysis",
        "Data Visualisation (Power BI / Tableau)",
        "Data Storytelling"
      ]
    },
    {
      term: "Module 3",
      subjects: [
        "Machine Learning",
        "Time-series Forecasting",
        "Model Deployment"
      ]
    },
    {
      term: "Module 4",
      subjects: [
        "Big Data (Spark)",
        "Deep Learning Basics",
        "Generative AI for Analytics",
        "Capstone Project"
      ]
    }
  ],
  careers: [
    {
      role: "Data Analyst",
      desc: "Turns raw data into dashboards and insights.",
      salary: "₹4 – 10 LPA"
    },
    {
      role: "Data Scientist",
      desc: "Builds predictive models to solve business problems.",
      salary: "₹8 – 20 LPA"
    },
    {
      role: "Business Intelligence Analyst",
      desc: "Designs reports and dashboards for decision-makers.",
      salary: "₹5 – 12 LPA"
    },
    {
      role: "Data Engineer",
      desc: "Builds the pipelines that move and store data.",
      salary: "₹7 – 18 LPA"
    }
  ],
  faqs: [
    {
      q: "Can I learn data science without a coding background?",
      a: "Yes. Most programmes start from Python basics. A comfort with numbers matters more than prior coding."
    },
    {
      q: "Is a PG in Data Science enough to get a job?",
      a: "It gives you the skills; your projects, portfolio and interview preparation decide the job. Use the programme's career support and build 3–4 solid projects."
    }
  ],
  related: [
    "pg-in-ai-online",
    "online-mca",
    "online-msc"
  ],
  image: IMG_MCA
};

export default pgInDataScienceOnline;

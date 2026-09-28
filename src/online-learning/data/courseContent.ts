/**
 * Editorial content for every online course page (/online-course/<slug>).
 *
 * Live data (which universities offer the course, their fees and
 * durations) comes from the API — see fetchCourseBySlug() in api.ts.
 * Everything a student reads to understand the course (overview,
 * eligibility, syllabus, careers, FAQs …) lives here, keyed by the slug
 * from courseSlugs.ts.
 *
 * To add or edit a course: change its entry below. A course that exists
 * in the API but has no entry here still gets a page, built from
 * buildFallbackContent() and the API description.
 *
 * Salary figures are indicative Indian market ranges and are labelled as
 * such on the page — keep them conservative.
 */

export type CourseLevel = "UG" | "PG" | "Executive" | "Doctorate" | "Certificate";

export interface CourseBenefit {
  title: string;
  desc: string;
}

export interface SyllabusTerm {
  term: string;
  subjects: string[];
}

export interface CareerRole {
  role: string;
  desc: string;
  salary: string; // indicative, e.g. "₹6 – 12 LPA"
}

export interface CourseFAQ {
  q: string;
  a: string;
}

export interface CourseContent {
  slug: string;
  shortName: string; // "Online MBA"
  fullName: string; // "Master of Business Administration (Online)"
  level: CourseLevel;
  defaultDuration: string;
  tagline: string;
  overview: string[];
  benefits: CourseBenefit[];
  eligibility: string[];
  entranceNote?: string;
  /** Shown as a highlighted notice — e.g. recognition caveats */
  notice?: string;
  specializations: string[];
  syllabusIntro?: string;
  syllabus: SyllabusTerm[];
  careers: CareerRole[];
  faqs: CourseFAQ[];
  related: string[];
  image: string;
  /** Banner beside "About" — optional overrides. Defaults: ["Online", "MBA"] and "Gateway to a Brighter Future". */
  bannerTitle?: string[];
  bannerTagline?: string;
  /** A designed banner image (e.g. /assets/images/courses/banners/online-mba.webp) — replaces the coded banner. */
  bannerImage?: string;
}

const IMG_MBA = "/assets/images/courses/online-mba.png";
const IMG_MCA = "/assets/images/courses/online-mca.png";

// ── Shared blocks ───────────────────────────────────────────────────────

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

const ONLINE_BENEFITS: CourseBenefit[] = [
  { title: "Study While You Work", desc: "Live weekend classes and recorded lectures let you keep your job and income while you earn a degree." },
  { title: "Affordable Fees", desc: "Online programmes cost far less than their on-campus versions and most universities offer easy EMI options." },
  { title: "Same Degree Value", desc: "Degrees from UGC-entitled universities in online mode are treated at par with regular degrees for jobs and higher studies." },
  { title: "Learn From Anywhere", desc: "Attend classes, submit assignments and take proctored exams from home — no relocation or commute needed." },
];

const COMMON_FAQS = (name: string): CourseFAQ[] => [
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

// ── Course entries ──────────────────────────────────────────────────────

const MBA_CAREERS: CareerRole[] = [
  { role: "Business Analyst", desc: "Uses data to spot problems and opportunities and recommends process or product changes.", salary: "₹6 – 12 LPA" },
  { role: "Marketing Manager", desc: "Plans campaigns, manages brands and budgets and tracks how marketing drives revenue.", salary: "₹8 – 18 LPA" },
  { role: "HR Manager", desc: "Leads hiring, performance management, employee engagement and HR policy.", salary: "₹7 – 15 LPA" },
  { role: "Financial Manager", desc: "Handles budgeting, financial planning, investments and reporting for a business unit.", salary: "₹9 – 20 LPA" },
  { role: "Operations Manager", desc: "Keeps day-to-day operations, supply chain and service delivery efficient.", salary: "₹7 – 16 LPA" },
  { role: "Project Manager", desc: "Plans and delivers projects on time and on budget while managing cross-functional teams.", salary: "₹10 – 22 LPA" },
  { role: "Management Consultant", desc: "Advises organisations on strategy, operations and growth problems.", salary: "₹10 – 25 LPA" },
  { role: "Entrepreneur", desc: "Starts and scales a business using the strategy, finance and marketing skills from the MBA.", salary: "Varies" },
];

const MBA_SPECS = [
  "Marketing Management", "Finance Management", "Human Resource Management", "Operations Management",
  "Business Analytics", "Information Technology", "International Business", "Digital Marketing",
  "Healthcare Management", "Supply Chain & Logistics", "Banking & Insurance", "Retail Management",
  "Project Management", "Data Science", "Entrepreneurship",
];

const MBA_SYLLABUS: SyllabusTerm[] = [
  { term: "Semester 1", subjects: ["Management Process & Organisational Behaviour", "Accounting for Managers", "Managerial Economics", "Business Communication", "Quantitative Techniques", "Marketing Management"] },
  { term: "Semester 2", subjects: ["Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods", "Management Information Systems"] },
  { term: "Semester 3", subjects: ["Strategic Management", "Legal & Business Environment", "Specialisation Elective I", "Specialisation Elective II", "Specialisation Elective III"] },
  { term: "Semester 4", subjects: ["Entrepreneurship & Innovation", "Business Ethics & Corporate Governance", "Specialisation Elective IV", "Specialisation Elective V", "Capstone Project"] },
];

const COURSES: CourseContent[] = [
  // ─────────────────────────── MANAGEMENT ───────────────────────────
  {
    slug: "online-mba",
    shortName: "Online MBA",
    fullName: "Master of Business Administration (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "A UGC-entitled, two-year management degree you can earn while you work — with 15+ in-demand specialisations.",
    overview: [
      "An Online MBA is a two-year postgraduate management degree delivered through live and recorded classes on a digital learning platform. It covers the same core subjects as an on-campus MBA — finance, marketing, HR, operations and strategy — followed by a specialisation of your choice in the second year.",
      "It is built for working professionals, graduates who want to move into management and entrepreneurs who want structured business knowledge without leaving their job or city. Degrees awarded by UGC-entitled universities in online mode carry the same value as a regular MBA for jobs and higher education.",
    ],
    benefits: [
      { title: "Affordability", desc: "Online MBA fees are a fraction of a full-time MBA, with no relocation, hostel or loss-of-salary costs." },
      { title: "Flexibility", desc: "Weekend live classes and on-demand recordings fit around a full-time job." },
      { title: "Networking", desc: "Learn alongside working professionals from many industries and cities, and join the university's alumni network." },
      { title: "Self-paced Learning", desc: "Revisit lectures, study at your own pace and apply concepts at work the very next day." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university.",
      "Minimum 40–50% aggregate marks in graduation (varies by university; relaxation for reserved categories).",
      "Work experience is not mandatory for most Online MBAs, though it helps you get more from the programme.",
      "No upper age limit.",
    ],
    entranceNote: "Most universities admit you directly on the basis of graduation marks. A few may hold their own online aptitude test or interview; CAT / MAT / CMAT scores are generally not required.",
    specializations: MBA_SPECS,
    syllabus: MBA_SYLLABUS,
    careers: MBA_CAREERS,
    faqs: [
      { q: "Is an online MBA degree valid?", a: "Yes. An Online MBA from a university entitled by the UGC to offer online programmes is treated as equivalent to a regular MBA for private jobs, government jobs and higher studies." },
      { q: "Is an online MBA worth doing?", a: "For working professionals it usually is — you gain management skills and a recognised degree without giving up your salary. The return depends on the university you choose, the specialisation and how actively you apply what you learn at work." },
      { q: "Does an online MBA provide placements?", a: "Most universities offer placement assistance — resume building, interview preparation, job portals and virtual placement drives. Placements are not guaranteed, and outcomes depend on your profile and experience." },
      { q: "Is an online MBA tough?", a: "It is manageable if you plan your time. Expect about 10–15 hours of study a week, including live classes, assignments and exam preparation." },
      { q: "Who is eligible for an online MBA?", a: "Anyone with a bachelor's degree in any discipline with the minimum marks set by the university (usually 40–50%) can apply. Work experience is usually optional." },
      { q: "Is an online MBA valid for government jobs?", a: "Yes, if the university and programme are UGC-entitled for online mode. Always check the specific recruitment notification for any extra conditions." },
    ],
    related: ["executive-mba-online", "dual-mba-online", "one-year-online-mba", "online-bba"],
    image: IMG_MBA,
  },
  {
    slug: "one-year-online-mba",
    shortName: "1 Year Online MBA",
    fullName: "One-Year MBA (Online)",
    level: "PG",
    defaultDuration: "1 Year",
    tagline: "An accelerated management programme for experienced professionals who want an MBA-level qualification in 12 months.",
    overview: [
      "A one-year online MBA compresses core management subjects and a specialisation into roughly 12 months. It suits professionals who already have several years of experience and want to move into management roles quickly.",
      "In India, UGC regulations set the duration of an MBA at two years, so most one-year MBAs are offered either by foreign universities (often through Indian learning partners) or as one-year PG programmes in management. Check exactly which certificate or degree you will receive, and who awards it, before you enrol.",
    ],
    benefits: [
      { title: "Fast-track Learning", desc: "Finish in about a year and apply your new skills at work straight away." },
      { title: "Built for Experience", desc: "Case discussions and projects draw on the real work experience of your batch." },
      { title: "Global Exposure", desc: "Many one-year programmes are run with international universities and faculty." },
      { title: "Flexible Schedule", desc: "Weekend live sessions and recorded content fit around a full-time job." },
    ],
    eligibility: [
      "Bachelor's degree from a recognised university (some programmes ask for 50% or more).",
      "Usually 2–5 years of full-time work experience.",
      "English proficiency may be required for programmes run with foreign universities.",
    ],
    notice: "UGC regulations set a two-year duration for MBA degrees awarded by Indian universities. If a one-year MBA is awarded by a foreign university, check its recognition and whether you will need an AIU equivalence certificate for government jobs or further study in India.",
    specializations: ["General Management", "Marketing", "Finance", "Human Resources", "Operations", "Business Analytics", "Digital Transformation"],
    syllabus: [
      { term: "Term 1", subjects: ["Managerial Economics", "Financial & Management Accounting", "Organisational Behaviour", "Marketing Management"] },
      { term: "Term 2", subjects: ["Corporate Finance", "Operations & Supply Chain", "Business Analytics", "Human Capital Management"] },
      { term: "Term 3", subjects: ["Strategic Management", "Leadership & Change", "Specialisation Electives", "Capstone Project"] },
    ],
    careers: [
      { role: "Senior Manager", desc: "Leads a function or business unit and owns its targets and budget.", salary: "₹12 – 25 LPA" },
      { role: "Product Manager", desc: "Defines what gets built and why, balancing customers, business and technology.", salary: "₹12 – 28 LPA" },
      { role: "Business Development Manager", desc: "Finds new markets, partners and customers to grow revenue.", salary: "₹8 – 18 LPA" },
      { role: "Management Consultant", desc: "Solves strategy and operations problems for client organisations.", salary: "₹10 – 25 LPA" },
    ],
    faqs: [
      { q: "Is a 1-year online MBA valid in India?", a: "It depends on who awards it. Indian universities award MBAs of two years' duration under UGC rules. A one-year MBA from a recognised foreign university is valid in the private sector; for government jobs or further study in India you may need an AIU equivalence certificate." },
      { q: "Who should choose a 1-year MBA?", a: "Professionals with a few years of experience who already understand how businesses work and want to formalise their skills quickly." },
      { q: "Is a 1-year MBA harder than a 2-year MBA?", a: "The content is similar but packed into less time, so the weekly workload is higher — plan for 12–15 hours of study a week." },
    ],
    related: ["online-mba", "executive-mba-online", "executive-pg-management-online"],
    image: IMG_MBA,
  },
  {
    slug: "dual-mba-online",
    shortName: "Dual MBA Online",
    fullName: "Dual Specialisation MBA (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "One MBA, two specialisations — build a broader skill set such as Marketing + Analytics or Finance + HR.",
    overview: [
      "A Dual MBA online lets you study two specialisations within one two-year MBA programme. You complete the same core management subjects as a regular MBA and then split your electives between two areas instead of one.",
      "It suits learners who want to keep their options open or whose roles already cut across functions — for example a marketer who works heavily with data, or a finance professional who manages people.",
    ],
    benefits: [
      { title: "Two Skill Sets", desc: "Stand out with expertise in two complementary business areas." },
      { title: "Wider Career Options", desc: "Apply for roles in either specialisation, or hybrid roles that need both." },
      { title: "Single Degree Timeline", desc: "Get two specialisations in the same two years as a regular MBA." },
      { title: "Study While You Work", desc: "Weekend live classes and recorded sessions fit your work schedule." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university.",
      "Minimum 40–50% aggregate marks in graduation (varies by university).",
      "Work experience is usually optional.",
    ],
    specializations: ["Marketing + Business Analytics", "Finance + Human Resources", "Marketing + Finance", "Operations + Supply Chain", "IT + Project Management", "HR + Business Analytics"],
    syllabus: [
      MBA_SYLLABUS[0],
      MBA_SYLLABUS[1],
      { term: "Semester 3", subjects: ["Strategic Management", "Specialisation A – Elective I", "Specialisation A – Elective II", "Specialisation B – Elective I", "Specialisation B – Elective II"] },
      { term: "Semester 4", subjects: ["Business Ethics & Corporate Governance", "Specialisation A – Elective III", "Specialisation B – Elective III", "Capstone Project"] },
    ],
    careers: MBA_CAREERS.slice(0, 6),
    faqs: [
      { q: "Is a dual MBA better than a single-specialisation MBA?", a: "It is better if your career needs two skill sets. If you are sure of one field, a single specialisation lets you go deeper." },
      { q: "Does a dual MBA take longer?", a: "No, it usually takes the same two years. The electives are split between two specialisations." },
      { q: "Will my degree mention both specialisations?", a: "This varies by university. Most mention both on the mark sheet or degree — confirm with the university before you enrol." },
    ],
    related: ["online-mba", "executive-mba-online", "online-bba"],
    image: IMG_MBA,
  },
  {
    slug: "executive-mba-online",
    shortName: "Executive MBA",
    fullName: "Executive Master of Business Administration (Online)",
    level: "Executive",
    defaultDuration: "2 Years",
    tagline: "A leadership-focused MBA for experienced professionals moving into senior management roles.",
    overview: [
      "An Executive MBA (EMBA) is a postgraduate management programme for professionals who already have significant work experience. It focuses less on theory and more on leadership, strategy, decision-making and managing change.",
      "Classes are scheduled around a full-time job and draw heavily on the experience of the batch, so peer learning is a big part of the programme.",
    ],
    benefits: [
      { title: "Leadership Focus", desc: "Strategy, negotiation and people leadership for senior roles." },
      { title: "Experienced Peers", desc: "Learn with managers from many industries and build a strong professional network." },
      { title: "Apply at Work", desc: "Projects are often based on real challenges from your own organisation." },
      { title: "No Career Break", desc: "Keep your job, salary and seniority while you study." },
    ],
    eligibility: [
      "Bachelor's degree from a recognised university, usually with 50% marks.",
      "Minimum 2–5 years of full-time work experience (varies by university).",
      "Some universities hold an interview or statement-of-purpose review.",
    ],
    specializations: ["General Management", "Leadership & Strategy", "Finance", "Marketing", "Human Resources", "Operations", "Business Analytics", "Digital Transformation"],
    syllabus: [
      { term: "Semester 1", subjects: ["Leadership & Organisational Behaviour", "Managerial Economics", "Financial Reporting & Analysis", "Marketing Strategy"] },
      { term: "Semester 2", subjects: ["Corporate Finance", "Operations Strategy", "Data-driven Decision Making", "Human Capital Strategy"] },
      { term: "Semester 3", subjects: ["Strategic Management", "Negotiation & Conflict Management", "Specialisation Electives"] },
      { term: "Semester 4", subjects: ["Managing Change & Innovation", "Global Business Environment", "Specialisation Electives", "Industry Capstone Project"] },
    ],
    careers: [
      { role: "General Manager", desc: "Runs a business unit and is accountable for its growth and profitability.", salary: "₹18 – 40 LPA" },
      { role: "Head of Department", desc: "Leads a function such as sales, HR, finance or operations.", salary: "₹15 – 35 LPA" },
      { role: "Strategy Manager", desc: "Shapes long-term plans, new markets and major investments.", salary: "₹15 – 30 LPA" },
      { role: "Management Consultant", desc: "Advises leadership teams on strategy and transformation.", salary: "₹12 – 30 LPA" },
    ],
    faqs: [
      { q: "What is the difference between an Executive MBA and an Online MBA?", a: "An Executive MBA requires several years of work experience and focuses on leadership and strategy. A regular Online MBA is open to fresh graduates and covers management fundamentals in more depth." },
      { q: "Is work experience compulsory for an Executive MBA?", a: "Yes. Most universities ask for at least 2–5 years of full-time experience." },
      { q: "Will an Executive MBA help me get promoted?", a: "It strengthens your case for senior roles by adding leadership and strategy skills and a recognised qualification, but promotions still depend on your performance and your employer." },
    ],
    related: ["online-mba", "executive-pg-management-online", "senior-management-programme"],
    image: IMG_MBA,
  },
  {
    slug: "executive-pg-management-online",
    shortName: "Executive PG in Management",
    fullName: "Executive Post Graduate Programme in Management (Online)",
    level: "Executive",
    defaultDuration: "1 Year",
    tagline: "A short, practical management programme for working professionals who want management skills fast.",
    overview: [
      "An Executive Post Graduate Programme in Management is a shorter management qualification — usually around one year — aimed at working professionals. It covers the core of an MBA (finance, marketing, strategy, people management) with a strong focus on practical application.",
      "It is usually awarded as a PG certificate or diploma rather than a degree, so it suits people who want skills and a credential from a reputed institution without committing to a two-year MBA.",
    ],
    benefits: [
      { title: "Shorter Duration", desc: "Complete the programme in about a year." },
      { title: "Practical Curriculum", desc: "Case studies and projects you can apply at work immediately." },
      { title: "Reputed Institutions", desc: "Often offered by well-known universities and business schools." },
      { title: "Work-friendly", desc: "Weekend and evening sessions fit a full-time job." },
    ],
    eligibility: [
      "Bachelor's degree from a recognised university.",
      "Usually 2+ years of work experience.",
    ],
    notice: "An Executive PG programme is typically a certificate or diploma, not a degree. Check the exact award before enrolling if you need a degree for a job or further study.",
    specializations: ["General Management", "Marketing", "Finance", "Human Resources", "Operations", "Business Analytics"],
    syllabus: [
      { term: "Term 1", subjects: ["Principles of Management", "Managerial Accounting", "Marketing Management", "Organisational Behaviour"] },
      { term: "Term 2", subjects: ["Financial Management", "Operations Management", "Business Analytics", "Human Resource Management"] },
      { term: "Term 3", subjects: ["Strategic Management", "Leadership", "Electives", "Capstone Project"] },
    ],
    careers: [
      { role: "Team Lead / Manager", desc: "Moves from an individual role into managing a team and its targets.", salary: "₹8 – 18 LPA" },
      { role: "Business Development Manager", desc: "Builds partnerships and brings in new business.", salary: "₹7 – 16 LPA" },
      { role: "Operations Manager", desc: "Improves processes and runs day-to-day delivery.", salary: "₹7 – 15 LPA" },
    ],
    faqs: [
      { q: "Is an Executive PG in Management equal to an MBA?", a: "No. It is usually a PG certificate or diploma. It gives you management skills and a credential, but it is not a master's degree." },
      { q: "Who should choose an Executive PG programme?", a: "Working professionals who want management skills in a shorter time and don't specifically need a degree." },
    ],
    related: ["executive-mba-online", "online-mba", "senior-management-programme"],
    image: IMG_MBA,
  },
  {
    slug: "senior-management-programme",
    shortName: "Senior Management Programme",
    fullName: "Senior Management Programme (Online)",
    level: "Certificate",
    defaultDuration: "6 – 12 Months",
    tagline: "An executive-education programme that prepares experienced managers for CXO and business-leadership roles.",
    overview: [
      "A Senior Management Programme is an executive-education certificate for experienced managers — typically with 8–10+ years of experience — who are preparing for senior leadership. It covers strategy, finance for leaders, leading change and managing large teams.",
      "These programmes are usually delivered live online by leading business schools, sometimes with a short campus immersion. They award a certificate (and often alumni status), not a degree.",
    ],
    benefits: [
      { title: "Leadership Readiness", desc: "Prepare for the scope and decisions of senior roles." },
      { title: "Top-tier Faculty", desc: "Learn from experienced business-school faculty and industry leaders." },
      { title: "Senior Peer Network", desc: "Your batch is made up of experienced managers and leaders." },
      { title: "Short Commitment", desc: "Finish in months rather than years, without leaving your job." },
    ],
    eligibility: [
      "Bachelor's degree (or equivalent) from a recognised university.",
      "Usually 8–10+ years of work experience, with some managerial experience.",
      "Selection is often based on a profile review or interview.",
    ],
    notice: "This is a certificate programme, not a degree. It is valued for skills and network, not as an academic qualification.",
    specializations: ["Strategy & Leadership", "Finance for Senior Managers", "Digital Transformation", "Leading Change"],
    syllabus: [
      { term: "Module 1", subjects: ["Strategic Thinking", "Competitive Strategy", "Business Model Innovation"] },
      { term: "Module 2", subjects: ["Finance for Non-finance Leaders", "Data-driven Decisions", "Marketing Strategy"] },
      { term: "Module 3", subjects: ["Leading People & Teams", "Negotiation", "Leading Change", "Capstone"] },
    ],
    careers: [
      { role: "Business Head", desc: "Owns the P&L of a business line or region.", salary: "₹30 LPA+" },
      { role: "Functional Head / VP", desc: "Leads an entire function across the organisation.", salary: "₹30 LPA+" },
      { role: "CXO Track", desc: "Prepares for chief-level roles such as COO, CMO or CHRO.", salary: "Varies" },
    ],
    faqs: [
      { q: "Is the Senior Management Programme a degree?", a: "No, it is an executive certificate. It is meant for skills, leadership development and networking." },
      { q: "How much experience do I need?", a: "Most programmes look for 8–10 years or more, including some years in a managerial role." },
    ],
    related: ["executive-mba-online", "executive-pg-management-online", "phd-in-management"],
    image: IMG_MBA,
  },
  {
    slug: "phd-in-management",
    shortName: "Ph.D. in Management",
    fullName: "Doctor of Philosophy in Management",
    level: "Doctorate",
    defaultDuration: "3 – 5 Years",
    tagline: "A research doctorate for professionals and academics who want to contribute original research in management.",
    overview: [
      "A Ph.D. in Management is the highest academic qualification in business and management. You carry out original research in an area such as marketing, finance, HR, strategy or operations, and write and defend a thesis.",
      "Programmes for working professionals are usually run in a part-time or blended format — coursework on weekends or online, and research you carry out alongside your job under a supervisor.",
    ],
    benefits: [
      { title: "Highest Qualification", desc: "Earn the title 'Dr.' and the top academic qualification in management." },
      { title: "Academic Careers", desc: "A Ph.D. is required for most assistant-professor and senior academic roles." },
      { title: "Research Expertise", desc: "Become a subject expert in a focused area of management." },
      { title: "Consulting Credibility", desc: "Strengthens your profile for consulting, research and policy roles." },
    ],
    eligibility: [
      "Master's degree (MBA/PGDM/M.Com or equivalent) with at least 55% marks (50% for reserved categories), or a 4-year bachelor's degree with 75% as per UGC Ph.D. regulations.",
      "Entrance test conducted by the university, or UGC-NET / JRF, followed by an interview.",
      "Working professionals may need a no-objection certificate from their employer.",
    ],
    notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university before applying.",
    specializations: ["Marketing", "Finance", "Human Resource Management", "Strategy", "Operations", "Organisational Behaviour", "Business Analytics"],
    syllabusIntro: "Ph.D. coursework is completed in the first two semesters; the rest of the programme is research under your supervisor.",
    syllabus: [
      { term: "Coursework", subjects: ["Research Methodology", "Research & Publication Ethics", "Quantitative & Qualitative Methods", "Review of Literature in Your Area"] },
      { term: "Research Phase", subjects: ["Research Proposal", "Data Collection & Analysis", "Progress Seminars", "Research Publications"] },
      { term: "Thesis", subjects: ["Thesis Writing", "Pre-submission Seminar", "Thesis Submission", "Viva-voce"] },
    ],
    careers: [
      { role: "Assistant / Associate Professor", desc: "Teaches and researches at universities and business schools.", salary: "₹8 – 20 LPA" },
      { role: "Research Consultant", desc: "Leads research projects for consulting firms and think tanks.", salary: "₹10 – 25 LPA" },
      { role: "Senior Management / Strategy", desc: "Brings research-driven decision-making to leadership roles.", salary: "Varies" },
    ],
    faqs: [
      { q: "Can I do a Ph.D. in Management online?", a: "UGC does not allow Ph.D. degrees in online or distance mode. Working professionals can do a part-time Ph.D. that follows UGC rules, with some coursework and guidance delivered online. Confirm the mode with the university." },
      { q: "How long does a Ph.D. in Management take?", a: "Usually 3 to 5 years, depending on your research and the university's rules." },
      { q: "Is an entrance exam required?", a: "Yes. You usually need to pass the university's entrance test (or hold UGC-NET/JRF) and clear an interview." },
    ],
    related: ["mba-and-doctorate-combo", "executive-mba-online", "phd-in-education"],
    image: IMG_MBA,
  },
  {
    slug: "mba-and-doctorate-combo",
    shortName: "MBA & Doctorate Combo",
    fullName: "MBA + Doctorate Combo Programme",
    level: "Doctorate",
    defaultDuration: "3 – 4 Years",
    tagline: "A bundled pathway that combines an MBA with a professional doctorate such as a DBA.",
    overview: [
      "An MBA & Doctorate combo bundles a master's-level management programme with a professional doctorate — commonly a Doctor of Business Administration (DBA) — into one pathway. You complete the MBA stage first and then move into applied doctoral research.",
      "These programmes are often offered by, or in partnership with, foreign universities through Indian learning partners. They are aimed at experienced professionals who want both advanced management skills and a doctoral title.",
    ],
    benefits: [
      { title: "Two Qualifications", desc: "Complete an MBA and a professional doctorate in one planned pathway." },
      { title: "Applied Research", desc: "A DBA focuses on solving real business problems rather than pure theory." },
      { title: "Global Exposure", desc: "Often delivered with international universities and faculty." },
      { title: "Leadership Profile", desc: "Adds credibility for senior leadership, consulting and speaking roles." },
    ],
    eligibility: [
      "Bachelor's degree from a recognised university (master's degree preferred for direct doctoral entry).",
      "Usually 5+ years of work experience, including managerial experience.",
      "English proficiency may be required by the foreign partner university.",
    ],
    notice: "Doctorates awarded by foreign universities, and professional doctorates such as a DBA, are not the same as a UGC-regulated Ph.D. They may not be accepted for teaching posts or government jobs in India. Check recognition and AIU equivalence before you enrol.",
    specializations: ["General Management", "Leadership", "Strategy", "Marketing", "Finance", "Human Resources"],
    syllabus: [
      { term: "MBA Stage", subjects: ["Management Fundamentals", "Finance & Accounting", "Marketing Strategy", "Strategic Leadership", "Specialisation Electives"] },
      { term: "Doctoral Coursework", subjects: ["Advanced Research Methods", "Academic Writing", "Research Proposal Development"] },
      { term: "Doctoral Research", subjects: ["Applied Research Project", "Dissertation", "Final Defence"] },
    ],
    careers: [
      { role: "Senior Executive / CXO Track", desc: "Leads organisations with research-backed strategy.", salary: "₹30 LPA+" },
      { role: "Management Consultant", desc: "Advises leadership on strategy and transformation.", salary: "₹15 – 35 LPA" },
      { role: "Corporate Trainer / Coach", desc: "Designs and delivers leadership development programmes.", salary: "₹10 – 25 LPA" },
    ],
    faqs: [
      { q: "Is a DBA the same as a Ph.D.?", a: "No. A DBA is a professional doctorate focused on applied business research, while a Ph.D. is an academic research degree. In India, only a UGC-compliant Ph.D. is accepted for most academic and government roles." },
      { q: "Who should consider this combo?", a: "Experienced professionals who want an MBA and a doctoral title mainly for leadership, consulting or personal growth, rather than an academic career in India." },
    ],
    related: ["phd-in-management", "executive-mba-online", "online-mba"],
    image: IMG_MBA,
  },

  // ─────────────────────────── COMPUTING ───────────────────────────
  {
    slug: "online-mca",
    shortName: "Online MCA",
    fullName: "Master of Computer Applications (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "A two-year postgraduate degree in software development, cloud, data and AI — built for working learners.",
    overview: [
      "An Online MCA is a two-year postgraduate degree in computer applications. It covers programming, data structures, databases, networks and software engineering, followed by advanced electives in areas such as cloud computing, data science, AI/ML and cybersecurity.",
      "It is ideal for BCA and B.Sc. graduates who want to grow as developers, and for professionals from other backgrounds (with mathematics) who want to move into IT.",
    ],
    benefits: [
      { title: "Industry-relevant Skills", desc: "Hands-on labs in modern languages, frameworks and cloud platforms." },
      { title: "Study While You Work", desc: "Keep your job while you upgrade to a master's degree." },
      { title: "Specialise Early", desc: "Choose electives in AI/ML, data science, cloud or cybersecurity." },
      { title: "Valid Degree", desc: "An MCA from a UGC-entitled university is valid for jobs and higher studies." },
    ],
    eligibility: [
      "BCA, B.Sc. (CS/IT) or any bachelor's degree with Mathematics at 10+2 or graduation level.",
      "Minimum 50% aggregate marks in graduation (45% for reserved categories) — varies by university.",
      "Some universities offer a bridge course for non-IT graduates.",
    ],
    specializations: ["Artificial Intelligence & Machine Learning", "Data Science", "Cloud Computing", "Cyber Security", "Full-Stack Development", "Blockchain", "Data Analytics"],
    syllabus: [
      { term: "Semester 1", subjects: ["Programming in C / Python", "Discrete Mathematics", "Computer Organisation & Architecture", "Database Management Systems", "Operating Systems"] },
      { term: "Semester 2", subjects: ["Data Structures & Algorithms", "Object-Oriented Programming with Java", "Computer Networks", "Software Engineering", "Web Technologies"] },
      { term: "Semester 3", subjects: ["Cloud Computing", "Machine Learning", "Mobile Application Development", "Elective I", "Elective II"] },
      { term: "Semester 4", subjects: ["Information Security", "Elective III", "Major Project"] },
    ],
    careers: [
      { role: "Software Developer", desc: "Designs, builds and maintains web, mobile or enterprise applications.", salary: "₹4 – 12 LPA" },
      { role: "Full-Stack Developer", desc: "Works across front-end, back-end and databases.", salary: "₹5 – 15 LPA" },
      { role: "Data Analyst", desc: "Cleans, analyses and visualises data to support decisions.", salary: "₹4 – 10 LPA" },
      { role: "Cloud Engineer", desc: "Deploys and manages applications on AWS, Azure or GCP.", salary: "₹6 – 16 LPA" },
      { role: "Cyber Security Analyst", desc: "Monitors systems and protects them against attacks.", salary: "₹5 – 14 LPA" },
      { role: "ML Engineer", desc: "Builds and deploys machine-learning models in products.", salary: "₹7 – 20 LPA" },
    ],
    faqs: [
      { q: "Is an online MCA valid?", a: "Yes. An online MCA from a UGC-entitled university is equivalent to a regular MCA for jobs and higher studies." },
      { q: "Can I do an online MCA without a BCA?", a: "Yes, most universities accept any graduate who studied Mathematics at 10+2 or graduation. Some ask non-IT graduates to take a bridge course." },
      { q: "Does an online MCA include practical labs?", a: "Yes. Labs are done on virtual lab platforms and your own computer, with projects in every semester." },
      { q: "Can I get a job after an online MCA?", a: "Yes. Employers hire for skills — build a strong project portfolio and use the university's placement support to improve your chances." },
    ],
    related: ["online-bca", "pg-in-ai-online", "pg-in-data-science-online", "phd-in-computer-science"],
    image: IMG_MCA,
  },
  {
    slug: "online-bca",
    shortName: "Online BCA",
    fullName: "Bachelor of Computer Applications (Online)",
    level: "UG",
    defaultDuration: "3 Years",
    tagline: "A three-year undergraduate degree in programming, databases and web development — study from anywhere after 12th.",
    overview: [
      "An Online BCA is a three-year undergraduate degree that builds a strong foundation in computer applications — programming, databases, networking, web and mobile development.",
      "It suits students who want to start an IT career after Class 12, as well as working learners who want a recognised degree. It is also the most common route into an MCA.",
    ],
    benefits: [
      { title: "Start Early in IT", desc: "Build coding skills and a portfolio right after Class 12." },
      { title: "Flexible Learning", desc: "Study alongside a job, an internship or other commitments." },
      { title: "Affordable", desc: "Lower fees than on-campus programmes, with EMI options." },
      { title: "Path to MCA", desc: "A natural stepping stone to an MCA and specialised IT roles." },
    ],
    eligibility: [
      "Class 12 pass from a recognised board in any stream.",
      "Minimum 45–50% marks in Class 12 (varies by university).",
      "Some universities prefer Mathematics or Computer Science in Class 12.",
    ],
    specializations: ["Data Science", "Cloud & Security", "Full-Stack Development", "AI & Machine Learning", "Cyber Security"],
    syllabus: [
      { term: "Year 1", subjects: ["Fundamentals of Computers & IT", "Programming in C", "Mathematics for Computing", "Digital Electronics", "Communication Skills"] },
      { term: "Year 2", subjects: ["Data Structures", "Object-Oriented Programming (C++/Java)", "Database Management Systems", "Operating Systems", "Web Development (HTML, CSS, JavaScript)"] },
      { term: "Year 3", subjects: ["Computer Networks", "Software Engineering", "Python Programming", "Mobile App Development", "Electives", "Major Project"] },
    ],
    careers: [
      { role: "Junior Software Developer", desc: "Writes and tests code as part of a development team.", salary: "₹3 – 6 LPA" },
      { role: "Web Developer", desc: "Builds and maintains websites and web apps.", salary: "₹3 – 7 LPA" },
      { role: "Technical Support Engineer", desc: "Resolves hardware, software and network issues for users.", salary: "₹2.5 – 5 LPA" },
      { role: "QA / Test Engineer", desc: "Tests software to find bugs before release.", salary: "₹3 – 6 LPA" },
    ],
    faqs: [
      { q: "Is an online BCA valid?", a: "Yes. An online BCA from a UGC-entitled university is equivalent to a regular BCA for jobs and higher studies such as MCA." },
      { q: "Can a commerce or arts student do an online BCA?", a: "Yes, most universities accept Class 12 from any stream, though some prefer Mathematics." },
      { q: "What can I do after an online BCA?", a: "You can start working as a developer, tester or support engineer, or continue to an MCA or a PG programme in data science or AI." },
    ],
    related: ["online-mca", "online-bba", "pg-in-data-science-online"],
    image: IMG_MCA,
  },
  {
    slug: "pg-in-ai-online",
    shortName: "PG in AI",
    fullName: "Post Graduate Programme in Artificial Intelligence & Generative AI (Online)",
    level: "Certificate",
    defaultDuration: "6 – 12 Months",
    tagline: "Learn machine learning, deep learning, LLMs and agentic AI — and build real projects for your portfolio.",
    overview: [
      "A PG programme in Artificial Intelligence teaches you how modern AI systems are built — from machine learning and deep learning to large language models (LLMs), generative AI and AI agents.",
      "It is aimed at engineers, developers and analysts who want to move into AI roles. Most programmes are project-heavy and are awarded as a PG certificate or diploma.",
    ],
    benefits: [
      { title: "In-demand Skills", desc: "AI and generative-AI skills are among the most sought-after in tech hiring." },
      { title: "Hands-on Projects", desc: "Build chatbots, RAG apps, vision models and AI agents." },
      { title: "Industry Tools", desc: "Work with Python, PyTorch/TensorFlow, LangChain and cloud AI platforms." },
      { title: "Short Duration", desc: "Upskill in months without leaving your job." },
    ],
    eligibility: [
      "Bachelor's degree, preferably in engineering, computer science, mathematics or statistics.",
      "Basic programming knowledge (Python preferred) — some programmes include a preparatory module.",
      "Work experience is recommended but not always required.",
    ],
    notice: "This is typically a PG certificate / diploma, not a master's degree. Check the award and the issuing institution before you enrol.",
    specializations: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Generative AI & LLMs", "Agentic AI", "Computer Vision", "MLOps"],
    syllabus: [
      { term: "Module 1", subjects: ["Python for AI", "Statistics & Probability", "Linear Algebra Essentials", "Data Wrangling"] },
      { term: "Module 2", subjects: ["Supervised & Unsupervised Learning", "Model Evaluation", "Feature Engineering"] },
      { term: "Module 3", subjects: ["Neural Networks & Deep Learning", "Computer Vision", "NLP & Transformers"] },
      { term: "Module 4", subjects: ["Generative AI & LLMs", "Prompt Engineering & RAG", "AI Agents", "MLOps & Deployment", "Capstone Project"] },
    ],
    careers: [
      { role: "Machine Learning Engineer", desc: "Builds, trains and deploys ML models in production.", salary: "₹8 – 25 LPA" },
      { role: "AI Engineer / GenAI Developer", desc: "Builds applications on top of LLMs and AI APIs.", salary: "₹8 – 25 LPA" },
      { role: "Data Scientist", desc: "Uses statistics and ML to solve business problems.", salary: "₹8 – 20 LPA" },
      { role: "NLP Engineer", desc: "Builds language-understanding systems such as chatbots and search.", salary: "₹8 – 22 LPA" },
    ],
    faqs: [
      { q: "Do I need to know coding for a PG in AI?", a: "Basic Python helps a lot. Many programmes include a short Python and maths refresher at the start." },
      { q: "Is a PG in AI a degree?", a: "Usually not — it is a PG certificate or diploma. It is valued for skills and projects. If you need a degree, consider an MCA or M.Sc. with an AI specialisation." },
      { q: "Can non-IT graduates join?", a: "Yes, if you are comfortable with maths and willing to learn programming. Graduates in science, engineering, commerce with statistics or economics often do well." },
    ],
    related: ["pg-in-data-science-online", "online-mca", "online-msc"],
    image: IMG_MCA,
  },
  {
    slug: "pg-in-data-science-online",
    shortName: "PG in Data Science",
    fullName: "Post Graduate Programme in Data Science (Online)",
    level: "Certificate",
    defaultDuration: "6 – 12 Months",
    tagline: "Master Python, SQL, statistics, machine learning and data visualisation to become job-ready for data roles.",
    overview: [
      "A PG programme in Data Science teaches you to collect, clean, analyse and model data to answer business questions. It covers Python, SQL, statistics, machine learning, data visualisation and big-data tools.",
      "It suits graduates and working professionals from IT, engineering, commerce, economics and science backgrounds who want to move into analytics or data-science roles.",
    ],
    benefits: [
      { title: "High Demand", desc: "Almost every industry now hires data analysts and data scientists." },
      { title: "Portfolio Projects", desc: "Work on real datasets from finance, retail, healthcare and more." },
      { title: "Industry Tools", desc: "Python, SQL, Power BI/Tableau, scikit-learn and cloud platforms." },
      { title: "Career Switch", desc: "A practical route into data from almost any quantitative background." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline, preferably with Mathematics or Statistics.",
      "Some universities require 50% marks in graduation.",
      "No prior coding experience is needed for most programmes.",
    ],
    notice: "This is typically a PG certificate / diploma, not a master's degree. Check the award and the issuing institution before you enrol.",
    specializations: ["Data Analytics", "Machine Learning", "Business Intelligence", "Big Data Engineering", "Deep Learning"],
    syllabus: [
      { term: "Module 1", subjects: ["Python Programming", "Statistics for Data Science", "Excel & SQL"] },
      { term: "Module 2", subjects: ["Exploratory Data Analysis", "Data Visualisation (Power BI / Tableau)", "Data Storytelling"] },
      { term: "Module 3", subjects: ["Machine Learning", "Time-series Forecasting", "Model Deployment"] },
      { term: "Module 4", subjects: ["Big Data (Spark)", "Deep Learning Basics", "Generative AI for Analytics", "Capstone Project"] },
    ],
    careers: [
      { role: "Data Analyst", desc: "Turns raw data into dashboards and insights.", salary: "₹4 – 10 LPA" },
      { role: "Data Scientist", desc: "Builds predictive models to solve business problems.", salary: "₹8 – 20 LPA" },
      { role: "Business Intelligence Analyst", desc: "Designs reports and dashboards for decision-makers.", salary: "₹5 – 12 LPA" },
      { role: "Data Engineer", desc: "Builds the pipelines that move and store data.", salary: "₹7 – 18 LPA" },
    ],
    faqs: [
      { q: "Can I learn data science without a coding background?", a: "Yes. Most programmes start from Python basics. A comfort with numbers matters more than prior coding." },
      { q: "Is a PG in Data Science enough to get a job?", a: "It gives you the skills; your projects, portfolio and interview preparation decide the job. Use the programme's career support and build 3–4 solid projects." },
    ],
    related: ["pg-in-ai-online", "online-mca", "online-msc"],
    image: IMG_MCA,
  },
  {
    slug: "phd-in-computer-science",
    shortName: "Ph.D. in Computer Science",
    fullName: "Doctor of Philosophy in Computer Science",
    level: "Doctorate",
    defaultDuration: "3 – 5 Years",
    tagline: "Carry out original research in AI, data science, networks, security or software systems.",
    overview: [
      "A Ph.D. in Computer Science is a research doctorate in which you produce original research — in areas such as artificial intelligence, machine learning, cybersecurity, networks, cloud computing or software engineering — and write and defend a thesis.",
      "For working professionals it is usually run as a part-time programme, with coursework in the first year and research under a supervisor after that.",
    ],
    benefits: [
      { title: "Academic Career", desc: "Required for most faculty positions in computer science." },
      { title: "Research Leadership", desc: "Qualifies you for R&D and research-scientist roles." },
      { title: "Deep Expertise", desc: "Become an expert in a focused area of computing." },
      { title: "Publications", desc: "Build a record of papers in journals and conferences." },
    ],
    eligibility: [
      "M.Tech / MCA / M.Sc. (CS/IT) or equivalent with at least 55% marks (50% for reserved categories), or a 4-year bachelor's degree with 75% as per UGC rules.",
      "University entrance test or UGC-NET / GATE, followed by an interview.",
    ],
    notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university.",
    specializations: ["Artificial Intelligence", "Machine Learning", "Cyber Security", "Data Science", "Cloud & Distributed Systems", "Computer Networks", "Software Engineering"],
    syllabusIntro: "Coursework is completed in the first year; the rest of the programme is research under your supervisor.",
    syllabus: [
      { term: "Coursework", subjects: ["Research Methodology", "Research & Publication Ethics", "Advanced Topics in Your Area", "Literature Review"] },
      { term: "Research Phase", subjects: ["Research Proposal", "Experiments & Implementation", "Progress Seminars", "Journal / Conference Papers"] },
      { term: "Thesis", subjects: ["Thesis Writing", "Pre-submission Seminar", "Thesis Submission", "Viva-voce"] },
    ],
    careers: [
      { role: "Assistant Professor", desc: "Teaches and researches at universities and engineering colleges.", salary: "₹8 – 18 LPA" },
      { role: "Research Scientist", desc: "Leads research in corporate or government R&D labs.", salary: "₹15 – 40 LPA" },
      { role: "AI / ML Researcher", desc: "Develops new models and methods in AI.", salary: "₹15 – 40 LPA" },
    ],
    faqs: [
      { q: "Can I do a Ph.D. in Computer Science online?", a: "UGC does not permit Ph.D. degrees in online or distance mode. Working professionals can pursue a part-time Ph.D. that follows UGC norms; some coursework and guidance may be online." },
      { q: "Is GATE or NET compulsory?", a: "Not always. Most universities hold their own entrance test; GATE/NET-qualified candidates may be exempt." },
    ],
    related: ["online-mca", "pg-in-ai-online", "phd-in-management"],
    image: IMG_MCA,
  },

  // ─────────────────────────── SCIENCE & ARTS ───────────────────────────
  {
    slug: "online-msc",
    shortName: "Online M.Sc.",
    fullName: "Master of Science (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "A two-year science master's in areas such as Mathematics, Data Science and Computer Science — studied online.",
    overview: [
      "An Online M.Sc. is a two-year postgraduate science degree offered in subjects that can be taught effectively online — for example Mathematics, Data Science, Computer Science, Applied Statistics or Environmental Science.",
      "It is suited to science graduates who want to deepen their subject knowledge for teaching, research, analytics or technical roles, without leaving their job.",
    ],
    benefits: ONLINE_BENEFITS,
    eligibility: [
      "B.Sc. or an equivalent bachelor's degree in a relevant subject from a recognised university.",
      "Minimum 45–50% aggregate marks (varies by university and subject).",
      "Some subjects need specific subjects at graduation — e.g. Mathematics for M.Sc. Mathematics or Data Science.",
    ],
    specializations: ["Mathematics", "Data Science", "Computer Science", "Applied Statistics", "Environmental Science", "Physics", "Chemistry"],
    syllabusIntro: "Subjects depend on the specialisation. A typical M.Sc. (Mathematics / Data Science) looks like this:",
    syllabus: [
      { term: "Semester 1", subjects: ["Real Analysis", "Linear Algebra", "Probability & Statistics", "Programming with Python"] },
      { term: "Semester 2", subjects: ["Complex Analysis", "Differential Equations", "Numerical Methods", "Data Structures"] },
      { term: "Semester 3", subjects: ["Optimisation Techniques", "Machine Learning", "Elective I", "Elective II"] },
      { term: "Semester 4", subjects: ["Elective III", "Research Methodology", "Dissertation / Project"] },
    ],
    careers: [
      { role: "Lecturer / Teacher", desc: "Teaches at schools, coaching institutes or colleges (NET/SET or B.Ed. may be needed).", salary: "₹3 – 8 LPA" },
      { role: "Data Analyst", desc: "Analyses data to support business decisions.", salary: "₹4 – 10 LPA" },
      { role: "Research Assistant", desc: "Supports research projects in labs and institutes.", salary: "₹3 – 6 LPA" },
      { role: "Statistician", desc: "Designs surveys and analyses data for organisations.", salary: "₹4 – 10 LPA" },
    ],
    faqs: [
      { q: "Is an online M.Sc. valid?", a: "Yes, if the university and programme are UGC-entitled for online mode. It is equivalent to a regular M.Sc." },
      { q: "Which M.Sc. subjects are offered online?", a: "Mostly subjects that don't need heavy wet-lab work, such as Mathematics, Data Science, Computer Science and Statistics. Lab-intensive subjects are rarely offered fully online." },
      { q: "Can I do a Ph.D. after an online M.Sc.?", a: "Yes. A UGC-entitled online M.Sc. makes you eligible for Ph.D. admission and exams like CSIR-NET, subject to the usual marks criteria." },
    ],
    related: ["pg-in-data-science-online", "online-mca", "online-ma"],
    image: IMG_MCA,
  },
  {
    slug: "online-ma",
    shortName: "Online MA",
    fullName: "Master of Arts (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "A two-year humanities master's in English, Economics, Political Science, Psychology and more.",
    overview: [
      "An Online MA is a two-year postgraduate degree in the humanities and social sciences. Popular subjects include English, Economics, Political Science, History, Sociology, Psychology and Journalism.",
      "It suits graduates preparing for teaching, civil services, content, media, research and policy careers — and working professionals who want a master's degree without leaving their job.",
    ],
    benefits: ONLINE_BENEFITS,
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university.",
      "Minimum 40–50% aggregate marks (varies by university).",
      "Some subjects may prefer the same subject at graduation level.",
    ],
    specializations: ["English", "Economics", "Political Science", "History", "Sociology", "Psychology", "Public Administration", "Journalism & Mass Communication"],
    syllabusIntro: "Subjects depend on your chosen specialisation. Every MA follows this broad structure:",
    syllabus: [
      { term: "Semester 1", subjects: ["Core Paper I", "Core Paper II", "Core Paper III", "Ability Enhancement Course"] },
      { term: "Semester 2", subjects: ["Core Paper IV", "Core Paper V", "Core Paper VI", "Research Methodology"] },
      { term: "Semester 3", subjects: ["Core Paper VII", "Discipline Elective I", "Discipline Elective II", "Generic Elective"] },
      { term: "Semester 4", subjects: ["Core Paper VIII", "Discipline Elective III", "Dissertation / Project"] },
    ],
    careers: [
      { role: "Teacher / Lecturer", desc: "Teaches in schools or colleges (B.Ed. or NET/SET may be required).", salary: "₹3 – 8 LPA" },
      { role: "Content Writer / Editor", desc: "Writes and edits content for media, brands and publishers.", salary: "₹3 – 7 LPA" },
      { role: "Civil Services / Government", desc: "An MA helps with UPSC, state PSC and other government exams.", salary: "As per pay scale" },
      { role: "Research / Policy Associate", desc: "Works on research, surveys and policy analysis for NGOs and think tanks.", salary: "₹4 – 8 LPA" },
    ],
    faqs: [
      { q: "Is an online MA valid for government jobs?", a: "Yes, if the university and programme are UGC-entitled for online mode. Check each recruitment notification for any specific conditions." },
      { q: "Can I do an online MA in a subject different from my graduation?", a: "Usually yes — most universities accept graduates from any discipline, though a few subjects prefer a background in the same subject." },
      { q: "Can I appear for UGC-NET after an online MA?", a: "Yes. A master's degree from a UGC-entitled university in online mode makes you eligible for UGC-NET, subject to the minimum marks." },
    ],
    related: ["online-ma-english", "online-ma-economics", "online-ma-political-science", "online-ba"],
    image: IMG_MBA,
  },
  {
    slug: "online-ma-economics",
    shortName: "Online MA Economics",
    fullName: "Master of Arts in Economics (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "Study micro- and macroeconomics, econometrics and public policy — a strong base for analytics, banking and policy roles.",
    overview: [
      "An Online MA in Economics is a two-year postgraduate degree that covers economic theory, quantitative methods and applied fields such as development, public finance, international trade and monetary economics.",
      "It builds strong analytical and data skills, which are valued in banking, research, policy, analytics and competitive exams such as UPSC, RBI Grade B and the Indian Economic Service.",
    ],
    benefits: [
      { title: "Analytical Skills", desc: "Learn to model, test and interpret economic data." },
      { title: "Exam Advantage", desc: "Directly useful for UPSC, IES, RBI and other economics-based exams." },
      { title: "Diverse Careers", desc: "Open doors in banking, research, policy, consulting and analytics." },
      { title: "Study While You Work", desc: "Weekend live classes and recorded lectures fit your schedule." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university (Economics or Mathematics at graduation preferred by some universities).",
      "Minimum 40–50% aggregate marks (varies by university).",
    ],
    specializations: ["Development Economics", "Public Finance", "International Economics", "Monetary Economics", "Econometrics", "Environmental Economics"],
    syllabus: [
      { term: "Semester 1", subjects: ["Microeconomic Theory", "Macroeconomic Theory", "Mathematical Methods for Economics", "Statistical Methods"] },
      { term: "Semester 2", subjects: ["Advanced Microeconomics", "Advanced Macroeconomics", "Econometrics", "Indian Economy"] },
      { term: "Semester 3", subjects: ["Public Economics", "International Trade & Finance", "Development Economics", "Elective I"] },
      { term: "Semester 4", subjects: ["Monetary Economics", "Environmental Economics", "Elective II", "Dissertation"] },
    ],
    careers: [
      { role: "Economic / Research Analyst", desc: "Studies economic data and trends for banks, firms and research houses.", salary: "₹4 – 10 LPA" },
      { role: "Data / Business Analyst", desc: "Applies statistical and economic thinking to business data.", salary: "₹4 – 10 LPA" },
      { role: "Policy Analyst", desc: "Evaluates government policies and programmes for think tanks and NGOs.", salary: "₹4 – 9 LPA" },
      { role: "Lecturer", desc: "Teaches economics at colleges (NET/SET required).", salary: "₹4 – 9 LPA" },
    ],
    faqs: [
      { q: "Is maths required for an MA in Economics?", a: "Some mathematics and statistics are part of the course. A maths background helps but is not always compulsory — check the university's criteria." },
      { q: "What jobs can I get after an MA in Economics?", a: "Research and data analyst roles, banking and financial services, policy and development roles, teaching, and government jobs through competitive exams." },
    ],
    related: ["online-ma", "online-ma-political-science", "online-mcom"],
    image: IMG_MBA,
  },
  {
    slug: "online-ma-political-science",
    shortName: "Online MA Political Science",
    fullName: "Master of Arts in Political Science (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "Study political theory, Indian politics, international relations and public policy — ideal for civil-services aspirants.",
    overview: [
      "An Online MA in Political Science is a two-year postgraduate degree covering political theory, Indian government and politics, comparative politics, international relations and public administration.",
      "It is popular with civil-services aspirants and with anyone interested in governance, public policy, journalism, research or teaching.",
    ],
    benefits: [
      { title: "Civil Services Edge", desc: "Covers a large part of the UPSC and state PSC syllabus, including a popular optional subject." },
      { title: "Understand Governance", desc: "Learn how governments, institutions and policies really work." },
      { title: "Critical Thinking", desc: "Build strong reading, analysis and writing skills." },
      { title: "Study While You Work", desc: "Flexible online classes alongside a job or exam preparation." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university.",
      "Minimum 40–50% aggregate marks (varies by university).",
    ],
    specializations: ["Political Theory", "Indian Politics", "International Relations", "Public Administration", "Public Policy", "Comparative Politics"],
    syllabus: [
      { term: "Semester 1", subjects: ["Western Political Thought", "Indian Government & Politics", "Comparative Politics", "Research Methods in Political Science"] },
      { term: "Semester 2", subjects: ["Indian Political Thought", "International Relations: Theories", "Public Administration", "State Politics in India"] },
      { term: "Semester 3", subjects: ["Contemporary Political Theory", "India's Foreign Policy", "Human Rights", "Elective I"] },
      { term: "Semester 4", subjects: ["Public Policy & Governance", "Politics of Development", "Elective II", "Dissertation"] },
    ],
    careers: [
      { role: "Civil Services", desc: "Prepare for IAS, IPS, IFS and state civil services.", salary: "As per pay scale" },
      { role: "Policy / Research Analyst", desc: "Researches policy issues for think tanks, NGOs and governments.", salary: "₹4 – 9 LPA" },
      { role: "Political Journalist", desc: "Reports and analyses politics and governance for media houses.", salary: "₹3 – 8 LPA" },
      { role: "Lecturer", desc: "Teaches political science at colleges (NET/SET required).", salary: "₹4 – 9 LPA" },
    ],
    faqs: [
      { q: "Is an MA in Political Science useful for UPSC?", a: "Yes. It covers much of the General Studies polity and international-relations syllabus, and Political Science & International Relations is a popular optional subject." },
      { q: "Can I do an online MA Political Science after B.Sc. or B.Com?", a: "Yes, most universities accept graduates from any discipline." },
    ],
    related: ["online-ma", "online-ma-economics", "online-ma-english"],
    image: IMG_MBA,
  },
  {
    slug: "online-ma-english",
    shortName: "Online MA English",
    fullName: "Master of Arts in English (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "Study literature, language and communication — a strong foundation for teaching, writing, media and publishing.",
    overview: [
      "An Online MA in English is a two-year postgraduate degree covering British, American, Indian and world literature, literary theory, linguistics and communication.",
      "It develops excellent reading, writing and critical-thinking skills, which are valued in teaching, content, publishing, media, corporate communication and competitive exams.",
    ],
    benefits: [
      { title: "Communication Skills", desc: "Become a confident, clear writer and speaker." },
      { title: "Teaching Pathway", desc: "Leads to teaching roles after B.Ed. or NET/SET." },
      { title: "Content Careers", desc: "Strong base for writing, editing and publishing roles." },
      { title: "Study While You Work", desc: "Flexible online classes alongside a job." },
    ],
    eligibility: [
      "Bachelor's degree in any discipline from a recognised university (English at graduation preferred by some universities).",
      "Minimum 40–50% aggregate marks (varies by university).",
    ],
    specializations: ["British Literature", "American Literature", "Indian Writing in English", "Literary Theory", "Linguistics & ELT", "Postcolonial Literature"],
    syllabus: [
      { term: "Semester 1", subjects: ["British Poetry", "British Drama", "History of English Literature", "Introduction to Linguistics"] },
      { term: "Semester 2", subjects: ["British Novel", "American Literature", "Literary Criticism", "English Language Teaching"] },
      { term: "Semester 3", subjects: ["Indian Writing in English", "Literary Theory", "Postcolonial Literature", "Elective I"] },
      { term: "Semester 4", subjects: ["World Literature in Translation", "Women's Writing", "Elective II", "Dissertation"] },
    ],
    careers: [
      { role: "English Teacher / Lecturer", desc: "Teaches English at schools or colleges (B.Ed. or NET/SET may be required).", salary: "₹3 – 8 LPA" },
      { role: "Content Writer / Copywriter", desc: "Writes for websites, brands, agencies and publications.", salary: "₹3 – 7 LPA" },
      { role: "Editor / Proofreader", desc: "Edits books, journals and digital content for publishers.", salary: "₹3 – 7 LPA" },
      { role: "Corporate Communication Executive", desc: "Handles internal and external communication for companies.", salary: "₹4 – 8 LPA" },
    ],
    faqs: [
      { q: "Can I become a lecturer after an online MA English?", a: "Yes. You will also need to clear UGC-NET or a state SET, and meet the university's other requirements." },
      { q: "Can I do an online MA English without English Honours?", a: "Usually yes. Most universities accept graduates from any discipline, though some prefer English as a subject at graduation." },
    ],
    related: ["online-ma", "online-ma-political-science", "online-ba"],
    image: IMG_MBA,
  },
  {
    slug: "online-ba",
    shortName: "Online B.A.",
    fullName: "Bachelor of Arts (Online)",
    level: "UG",
    defaultDuration: "3 Years",
    tagline: "A flexible three-year undergraduate degree in the humanities and social sciences — study from anywhere after 12th.",
    overview: [
      "An Online B.A. is a three-year undergraduate degree in the humanities and social sciences. You can study subjects such as English, Political Science, Economics, History, Sociology and Psychology.",
      "It suits students who want a recognised degree while working, preparing for competitive exams or managing other commitments, and it leads naturally to an MA, B.Ed., law or MBA.",
    ],
    benefits: ONLINE_BENEFITS,
    eligibility: [
      "Class 12 pass in any stream from a recognised board.",
      "Minimum 40–45% marks in Class 12 (varies by university).",
    ],
    specializations: ["English", "Political Science", "Economics", "History", "Sociology", "Psychology", "Journalism & Mass Communication"],
    syllabus: [
      { term: "Year 1", subjects: ["English Communication", "Discipline Core I", "Discipline Core II", "Environmental Studies"] },
      { term: "Year 2", subjects: ["Discipline Core III", "Discipline Core IV", "Skill Enhancement Course", "Generic Elective"] },
      { term: "Year 3", subjects: ["Discipline Specific Elective I", "Discipline Specific Elective II", "Project / Dissertation"] },
    ],
    careers: [
      { role: "Government Jobs", desc: "Eligible for SSC, banking, railway and state-level exams that need a graduate degree.", salary: "As per pay scale" },
      { role: "Content Writer", desc: "Writes for websites, blogs and brands.", salary: "₹2.5 – 5 LPA" },
      { role: "Customer Relationship Executive", desc: "Handles customer service and relationships.", salary: "₹2.5 – 4.5 LPA" },
      { role: "Further Studies", desc: "Continue to an MA, B.Ed., LLB or MBA.", salary: "—" },
    ],
    faqs: [
      { q: "Is an online B.A. valid for government jobs?", a: "Yes, if it is from a UGC-entitled university. It meets the graduation requirement for most government exams." },
      { q: "Can I do an online B.A. while preparing for competitive exams?", a: "Yes — the flexible schedule is one of the main reasons exam aspirants choose it." },
      { q: "What can I do after an online B.A.?", a: "You can take up a job or government exams, or continue to an MA, B.Ed., LLB or MBA." },
    ],
    related: ["online-ma", "online-bba", "online-bcom"],
    image: IMG_MBA,
  },

  // ─────────────────────────── COMMERCE ───────────────────────────
  {
    slug: "online-mcom",
    shortName: "Online M.Com",
    fullName: "Master of Commerce (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "Advance your knowledge of accounting, finance, taxation and business — ideal for commerce graduates.",
    overview: [
      "An Online M.Com is a two-year postgraduate degree in commerce that deepens your knowledge of accounting, finance, taxation, auditing, business law and economics.",
      "It suits B.Com graduates and finance professionals who want to grow in accounting, banking, taxation or teaching, and it is useful preparation for CA/CMA/CS and NET.",
    ],
    benefits: [
      { title: "Finance Expertise", desc: "Go deeper into accounting, tax, audit and financial management." },
      { title: "Professional Exams", desc: "Strengthens preparation for CA, CMA, CS and UGC-NET Commerce." },
      { title: "Teaching Pathway", desc: "Leads to commerce lecturer roles after NET/SET." },
      { title: "Study While You Work", desc: "Keep your job while you earn a master's degree." },
    ],
    eligibility: [
      "B.Com, BBA or an equivalent bachelor's degree from a recognised university.",
      "Minimum 45–50% aggregate marks (varies by university).",
      "Some universities also accept other graduates with commerce subjects.",
    ],
    specializations: ["Accounting & Finance", "Banking & Insurance", "Taxation", "International Business", "Financial Analytics", "E-commerce"],
    syllabus: [
      { term: "Semester 1", subjects: ["Management Concepts & Organisational Behaviour", "Advanced Financial Accounting", "Business Economics", "Statistical Analysis"] },
      { term: "Semester 2", subjects: ["Corporate Financial Management", "Advanced Cost Accounting", "Business Environment", "Research Methodology"] },
      { term: "Semester 3", subjects: ["Corporate Tax Planning", "Security Analysis & Portfolio Management", "Elective I", "Elective II"] },
      { term: "Semester 4", subjects: ["Auditing & Assurance", "International Finance", "Elective III", "Project"] },
    ],
    careers: [
      { role: "Accountant / Senior Accountant", desc: "Manages accounts, reporting and compliance.", salary: "₹3 – 7 LPA" },
      { role: "Tax Consultant", desc: "Handles GST, income-tax planning and filings.", salary: "₹3.5 – 8 LPA" },
      { role: "Financial Analyst", desc: "Analyses financial data to guide investment and business decisions.", salary: "₹4.5 – 10 LPA" },
      { role: "Banking Officer", desc: "Works in retail, credit or operations roles in banks.", salary: "₹4 – 8 LPA" },
      { role: "Commerce Lecturer", desc: "Teaches commerce at colleges (NET/SET required).", salary: "₹4 – 9 LPA" },
    ],
    faqs: [
      { q: "Is an online M.Com valid?", a: "Yes. An online M.Com from a UGC-entitled university is equivalent to a regular M.Com for jobs and higher studies." },
      { q: "M.Com or MBA Finance — which is better?", a: "An M.Com goes deeper into accounting, tax and theory and suits accounting, teaching and CA/CMA paths. An MBA Finance is broader and more management-focused. Pick based on your career goal." },
      { q: "Can I do an online M.Com after BBA?", a: "Most universities accept BBA graduates. Check the university's specific criteria." },
    ],
    related: ["online-bcom", "online-mba", "online-ma-economics"],
    image: IMG_MBA,
  },
  {
    slug: "online-bcom",
    shortName: "Online B.Com",
    fullName: "Bachelor of Commerce (Online)",
    level: "UG",
    defaultDuration: "3 Years",
    tagline: "A three-year commerce degree in accounting, taxation, finance and business — study from anywhere after 12th.",
    overview: [
      "An Online B.Com is a three-year undergraduate degree covering accounting, business law, taxation, economics, finance and management.",
      "It suits students who want a commerce career, those preparing for CA/CMA/CS alongside their degree, and working learners who need a recognised graduation degree.",
    ],
    benefits: [
      { title: "Pair with CA/CMA/CS", desc: "The flexible schedule leaves time to prepare for professional exams." },
      { title: "Job-ready Skills", desc: "Learn accounting, GST and Tally-style tools used at work." },
      { title: "Affordable", desc: "Lower fees than on-campus programmes, with EMI options." },
      { title: "Path to M.Com / MBA", desc: "A strong base for an M.Com, MBA or finance certifications." },
    ],
    eligibility: [
      "Class 12 pass from a recognised board (commerce stream preferred; many universities accept all streams).",
      "Minimum 40–50% marks in Class 12 (varies by university).",
    ],
    specializations: ["Accounting & Finance", "Banking & Insurance", "Taxation", "Financial Markets", "International Finance (ACCA-aligned)"],
    syllabus: [
      { term: "Year 1", subjects: ["Financial Accounting", "Business Organisation & Management", "Business Economics", "Business Communication", "Business Mathematics"] },
      { term: "Year 2", subjects: ["Corporate Accounting", "Income Tax Law & Practice", "Business Law", "Cost Accounting", "Business Statistics"] },
      { term: "Year 3", subjects: ["Auditing", "GST & Indirect Taxes", "Financial Management", "Management Accounting", "Electives / Project"] },
    ],
    careers: [
      { role: "Accounts Executive", desc: "Maintains books, handles billing and reconciliations.", salary: "₹2.5 – 5 LPA" },
      { role: "Tax Assistant", desc: "Supports GST and income-tax filings.", salary: "₹2.5 – 5 LPA" },
      { role: "Banking Associate", desc: "Works in branch banking, operations or sales.", salary: "₹3 – 5 LPA" },
      { role: "Financial Analyst (Junior)", desc: "Prepares financial reports and analysis.", salary: "₹3.5 – 6 LPA" },
    ],
    faqs: [
      { q: "Is an online B.Com valid?", a: "Yes. An online B.Com from a UGC-entitled university is equivalent to a regular B.Com for jobs and higher studies." },
      { q: "Can I do CA along with an online B.Com?", a: "Yes. Many students pursue CA, CMA or CS alongside an online B.Com because of its flexible schedule." },
      { q: "Can science or arts students do an online B.Com?", a: "Many universities accept Class 12 from any stream. Check the specific university's criteria." },
    ],
    related: ["online-mcom", "online-bba", "online-mba"],
    image: IMG_MBA,
  },
  {
    slug: "online-bba",
    shortName: "Online BBA",
    fullName: "Bachelor of Business Administration (Online)",
    level: "UG",
    defaultDuration: "3 Years",
    tagline: "A three-year management degree that builds business, marketing and leadership skills right after 12th.",
    overview: [
      "An Online BBA is a three-year undergraduate degree that introduces you to how businesses work — management, marketing, finance, HR, operations and entrepreneurship.",
      "It suits students who want an early start in business or management, young entrepreneurs, and working learners who want a recognised degree. It is also the most natural route to an MBA.",
    ],
    benefits: [
      { title: "Early Management Start", desc: "Build business and leadership skills straight after Class 12." },
      { title: "Earn While You Learn", desc: "Work or intern while you study." },
      { title: "Entrepreneurship", desc: "Learn to plan, fund and grow your own venture." },
      { title: "Path to MBA", desc: "A strong foundation for an MBA later." },
    ],
    eligibility: [
      "Class 12 pass in any stream from a recognised board.",
      "Minimum 40–50% marks in Class 12 (varies by university).",
    ],
    specializations: ["Marketing", "Finance", "Human Resource Management", "Digital Marketing", "Business Analytics", "International Business", "Entrepreneurship"],
    syllabus: [
      { term: "Year 1", subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "Business Mathematics & Statistics"] },
      { term: "Year 2", subjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Organisational Behaviour", "Business Law"] },
      { term: "Year 3", subjects: ["Strategic Management", "Entrepreneurship Development", "Specialisation Electives", "Summer Internship / Project"] },
    ],
    careers: [
      { role: "Business Development Executive", desc: "Finds new customers and grows sales.", salary: "₹3 – 6 LPA" },
      { role: "Marketing Executive", desc: "Supports campaigns, social media and brand activities.", salary: "₹3 – 5.5 LPA" },
      { role: "HR Executive", desc: "Supports recruitment, onboarding and employee engagement.", salary: "₹2.5 – 5 LPA" },
      { role: "Operations Executive", desc: "Helps run day-to-day business processes.", salary: "₹2.5 – 5 LPA" },
    ],
    faqs: [
      { q: "Is an online BBA valid?", a: "Yes. An online BBA from a UGC-entitled university is equivalent to a regular BBA for jobs and higher studies such as an MBA." },
      { q: "What can I do after an online BBA?", a: "Start working in sales, marketing, HR or operations, or continue to an MBA — the most common next step." },
      { q: "Can a science student do an online BBA?", a: "Yes. Students from any stream can apply." },
    ],
    related: ["online-mba", "online-bcom", "online-bca"],
    image: IMG_MBA,
  },

  // ─────────────────────────── EDUCATION ───────────────────────────
  {
    slug: "online-med",
    shortName: "Online M.Ed.",
    fullName: "Master of Education (Online)",
    level: "PG",
    defaultDuration: "2 Years",
    tagline: "A postgraduate degree for teachers and educators who want to grow into leadership, training and curriculum roles.",
    overview: [
      "An M.Ed. (Master of Education) is a postgraduate degree for teachers and education professionals. It covers educational psychology, curriculum design, assessment, educational leadership, research methods and inclusive education.",
      "It helps teachers move into senior teaching, teacher-training, curriculum-development, school-leadership and education-research roles.",
    ],
    benefits: [
      { title: "Career Growth", desc: "Move into teacher-educator, coordinator or school-leadership roles." },
      { title: "Research Skills", desc: "Learn to design and evaluate educational research." },
      { title: "Better Teaching", desc: "Apply modern pedagogy and assessment in your classroom." },
      { title: "Study While Teaching", desc: "Continue your teaching job while you study." },
    ],
    eligibility: [
      "B.Ed. (or an equivalent teacher-education degree) from a recognised institution.",
      "Minimum 50% marks in B.Ed. (varies by university; relaxation for reserved categories).",
    ],
    notice: "M.Ed. programmes are regulated by the NCTE as well as the UGC. Check that the specific M.Ed. programme and its mode are recognised before you enrol, especially if you plan to become a teacher-educator.",
    specializations: ["Educational Leadership & Management", "Curriculum & Pedagogy", "Educational Technology", "Inclusive / Special Education", "Guidance & Counselling"],
    syllabus: [
      { term: "Semester 1", subjects: ["Psychology of Learning & Development", "Philosophy of Education", "Educational Studies", "Introduction to Research Methods"] },
      { term: "Semester 2", subjects: ["Sociology of Education", "Curriculum Studies", "Teacher Education", "Advanced Research Methods"] },
      { term: "Semester 3", subjects: ["Educational Technology", "Assessment & Evaluation", "Specialisation Elective I", "Internship"] },
      { term: "Semester 4", subjects: ["Educational Leadership", "Inclusive Education", "Specialisation Elective II", "Dissertation"] },
    ],
    careers: [
      { role: "Teacher Educator", desc: "Trains future teachers at B.Ed. / D.El.Ed. colleges.", salary: "₹4 – 8 LPA" },
      { role: "Academic Coordinator", desc: "Plans and oversees curriculum and teaching quality in a school.", salary: "₹4 – 8 LPA" },
      { role: "Curriculum Developer", desc: "Designs courses and learning materials for schools and EdTech.", salary: "₹4 – 10 LPA" },
      { role: "School Principal / Vice-Principal", desc: "Leads a school's academics and administration (with experience).", salary: "₹6 – 15 LPA" },
    ],
    faqs: [
      { q: "Who can do an M.Ed.?", a: "Candidates who hold a B.Ed. (or equivalent teacher-education degree) with the minimum marks set by the university." },
      { q: "What is the difference between B.Ed. and M.Ed.?", a: "A B.Ed. qualifies you to teach in schools. An M.Ed. is a master's degree that prepares you for teacher-training, leadership, curriculum and research roles." },
    ],
    related: ["med-and-edd-combo", "phd-in-education", "online-ma"],
    image: IMG_MBA,
  },
  {
    slug: "med-and-edd-combo",
    shortName: "M.Ed & Ed.D Combo",
    fullName: "Master of Education + Doctor of Education Combo",
    level: "Doctorate",
    defaultDuration: "4 Years",
    tagline: "A combined pathway from a master's in education to a professional doctorate (Ed.D) for education leaders.",
    overview: [
      "The M.Ed & Ed.D combo combines a master's-level education programme with a Doctor of Education (Ed.D), a professional doctorate focused on solving real problems in schools, colleges and education systems.",
      "It is designed for experienced teachers, principals, trainers and education administrators who want to lead institutions and drive change in education.",
    ],
    benefits: [
      { title: "Two Qualifications", desc: "A master's and a professional doctorate in one planned pathway." },
      { title: "Leadership Focus", desc: "Built around leading schools, colleges and education programmes." },
      { title: "Applied Research", desc: "Research that tackles real problems in your own institution." },
      { title: "Study While You Work", desc: "Designed for working education professionals." },
    ],
    eligibility: [
      "Bachelor's degree with B.Ed. (or equivalent), or a relevant master's degree.",
      "Usually several years of teaching or education-management experience.",
      "English proficiency may be required where a foreign university is involved.",
    ],
    notice: "An Ed.D is a professional doctorate and is often awarded by a foreign university. It is not the same as a UGC-regulated Ph.D. and may not be accepted for faculty or government posts in India. Check recognition and AIU equivalence before you enrol.",
    specializations: ["Educational Leadership", "Curriculum & Instruction", "Higher Education Administration", "Educational Technology"],
    syllabus: [
      { term: "Master's Stage", subjects: ["Foundations of Education", "Curriculum Design", "Assessment & Evaluation", "Educational Leadership", "Research Methods"] },
      { term: "Doctoral Coursework", subjects: ["Advanced Research Design", "Leading Change in Education", "Education Policy", "Academic Writing"] },
      { term: "Doctoral Research", subjects: ["Research Proposal", "Applied Research Study", "Dissertation", "Final Defence"] },
    ],
    careers: [
      { role: "Principal / Head of School", desc: "Leads a school's academics, staff and administration.", salary: "₹8 – 20 LPA" },
      { role: "Education Consultant", desc: "Advises schools, EdTech firms and governments on education quality.", salary: "₹8 – 20 LPA" },
      { role: "Academic Director", desc: "Oversees academics across a group of schools or institutions.", salary: "₹12 – 25 LPA" },
    ],
    faqs: [
      { q: "Is an Ed.D the same as a Ph.D. in Education?", a: "No. An Ed.D is a professional doctorate focused on practice and leadership; a Ph.D. is an academic research degree. For faculty posts in India, a UGC-compliant Ph.D. is usually required." },
      { q: "Who should choose this combo?", a: "Experienced educators aiming for leadership roles in schools, school groups or education organisations." },
    ],
    related: ["online-med", "phd-in-education", "mba-and-doctorate-combo"],
    image: IMG_MBA,
  },
  {
    slug: "phd-in-education",
    shortName: "Ph.D. in Education",
    fullName: "Doctor of Philosophy in Education",
    level: "Doctorate",
    defaultDuration: "3 – 5 Years",
    tagline: "A research doctorate for educators who want to shape teaching, learning and education policy.",
    overview: [
      "A Ph.D. in Education is a research doctorate in which you study an area such as pedagogy, curriculum, educational psychology, teacher education, educational technology or education policy, and write and defend a thesis.",
      "For working educators it is typically offered as a part-time programme, with coursework first and research under a supervisor after that.",
    ],
    benefits: [
      { title: "Academic Career", desc: "A Ph.D. is needed for most senior faculty roles in education." },
      { title: "Research Impact", desc: "Contribute evidence that improves teaching and policy." },
      { title: "Leadership Roles", desc: "Qualifies you for senior academic and policy positions." },
      { title: "Highest Qualification", desc: "Earn the top academic degree in education." },
    ],
    eligibility: [
      "M.Ed. or a master's degree in Education (or a related field) with at least 55% marks (50% for reserved categories), as per UGC rules.",
      "University entrance test or UGC-NET / JRF, followed by an interview.",
    ],
    notice: "Under the UGC (Ph.D.) Regulations 2022, a Ph.D. cannot be awarded through online or distance mode. Programmes for working professionals must be run as part-time Ph.D.s that meet UGC norms. Check the programme format with the university.",
    specializations: ["Educational Psychology", "Curriculum Studies", "Teacher Education", "Educational Technology", "Inclusive Education", "Education Policy"],
    syllabusIntro: "Coursework is completed in the first year; the rest of the programme is research under your supervisor.",
    syllabus: [
      { term: "Coursework", subjects: ["Research Methodology in Education", "Research & Publication Ethics", "Statistics for Educational Research", "Review of Literature"] },
      { term: "Research Phase", subjects: ["Research Proposal", "Field Work & Data Collection", "Progress Seminars", "Research Publications"] },
      { term: "Thesis", subjects: ["Thesis Writing", "Pre-submission Seminar", "Thesis Submission", "Viva-voce"] },
    ],
    careers: [
      { role: "Assistant / Associate Professor (Education)", desc: "Teaches and researches at universities and teacher-education colleges.", salary: "₹7 – 18 LPA" },
      { role: "Education Researcher", desc: "Leads research for institutes, NGOs and government bodies.", salary: "₹6 – 15 LPA" },
      { role: "Policy Advisor", desc: "Shapes education policy for governments and organisations.", salary: "₹8 – 20 LPA" },
    ],
    faqs: [
      { q: "Can I do a Ph.D. in Education online?", a: "UGC does not allow Ph.D. degrees in online or distance mode. Working educators can pursue a part-time Ph.D. that follows UGC norms; some coursework and guidance may be online." },
      { q: "Is M.Ed. compulsory for a Ph.D. in Education?", a: "Most universities require an M.Ed. or a master's degree in Education. Some accept related master's degrees — check the university's criteria." },
    ],
    related: ["online-med", "med-and-edd-combo", "phd-in-management"],
    image: IMG_MBA,
  },
];

// Banner headline lines for names that don't split neatly as "Online" + "<course>"
const BANNER_TITLES: Record<string, string[]> = {
  "one-year-online-mba": ["1 Year", "Online MBA"],
  "dual-mba-online": ["Dual", "MBA"],
  "executive-mba-online": ["Executive", "MBA"],
  "executive-pg-management-online": ["Executive PG", "Management"],
  "senior-management-programme": ["Senior", "Management"],
  "phd-in-management": ["Ph.D. in", "Management"],
  "mba-and-doctorate-combo": ["MBA +", "Doctorate"],
  "pg-in-ai-online": ["PG in", "AI"],
  "pg-in-data-science-online": ["PG in", "Data Science"],
  "phd-in-computer-science": ["Ph.D. in", "Computer Science"],
  "online-ma-economics": ["Online MA", "Economics"],
  "online-ma-political-science": ["Online MA", "Political Science"],
  "online-ma-english": ["Online MA", "English"],
  "med-and-edd-combo": ["M.Ed +", "Ed.D"],
  "phd-in-education": ["Ph.D. in", "Education"],
};
COURSES.forEach((c) => {
  if (!c.bannerTitle && BANNER_TITLES[c.slug]) c.bannerTitle = BANNER_TITLES[c.slug];
});

const CONTENT_BY_SLUG = new Map(COURSES.map((c) => [c.slug, c]));

export function getCourseContent(slug: string): CourseContent | undefined {
  return CONTENT_BY_SLUG.get(slug);
}

export function getAllCourseContent(): CourseContent[] {
  return COURSES;
}

/** Generic content for a course the API has but this file doesn't cover yet. */
export function buildFallbackContent(
  slug: string,
  name: string,
  description?: string,
  duration?: string
): CourseContent {
  const n = name.toLowerCase();
  const level: CourseLevel = /ph\.?d|doctor/.test(n)
    ? "Doctorate"
    : /executive|senior/.test(n)
    ? "Executive"
    : /^b|bachelor|online\s*b/.test(n)
    ? "UG"
    : "PG";
  return {
    slug,
    shortName: name,
    fullName: name,
    level,
    defaultDuration: duration || (level === "UG" ? "3 Years" : "2 Years"),
    tagline: `Explore ${name} — eligibility, fees, universities, syllabus and career scope.`,
    overview: description ? [description] : [`${name} is offered online by leading universities, so you can study while you work.`],
    benefits: ONLINE_BENEFITS,
    eligibility:
      level === "UG"
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

/** Course-specific FAQs followed by the shared ones. */
export function getAllFaqs(content: CourseContent): CourseFAQ[] {
  return [...content.faqs, ...COMMON_FAQS(content.shortName)];
}

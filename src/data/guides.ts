/**
 * College guides — the single source of truth for each guide's SEO fields,
 * dates, FAQ entries and comparison table.
 *
 * Adding a guide: add an entry here (title, description and headline are
 * required by the `Guide` type), then in the page:
 *   export const metadata = buildGuideMetadata(guide);
 *   <GuideHeader guide={guide} />   ← byline + the one H1 + "Last updated"
 *   <GuideSchema guide={guide} />   ← Article + BreadcrumbList
 *   <ComparisonTable data={guide.comparison} />  (optional)
 *   <FaqBlock items={guide.faqs} />              (optional — prints FAQPage schema too)
 *
 * When you edit a guide's content, bump `dateModified`.
 */
import type { Guide } from "@/lib/guides/types";

const guides = {
  "best-bmlt-colleges-in-dehradun": {
    slug: "best-bmlt-colleges-in-dehradun",
    title: "Top 5 BMLT Colleges in Dehradun 2027 | Comparison & Admission",
    description:
      "Explore the best BMLT colleges in Dehradun and Uttarakhand for 2027. Compare fees, eligibility, admission process, syllabus, placements and careers in MLT.",
    headline: "Best BMLT Colleges in Dehradun (2027) – Fees, Eligibility, Admission & Career Guide",
    category: "Paramedical / Allied Healthcare",
    image: "/assets/images/blog/bmlt_course_img_blog.jpg",
    imageAlt: "Medical Laboratory Technology students training in a laboratory",
    datePublished: "2027-05-22",
    dateModified: "2027-05-22",
    ogTitle: "Best BMLT Colleges in Dehradun 2027 – Fees, Admission & Placements",
    ogDescription:
      "Looking for the best BMLT colleges in Dehradun? Compare top Medical Laboratory Technology colleges with fees, eligibility, admission process and placement details.",
    keywords: [
      "top bmlt colleges in dehradun", "best bmlt colleges in dehradun", "bmlt colleges in dehradun",
      "bmlt colleges in uttarakhand", "best bmlt college in uttarakhand", "top bmlt colleges in uttarakhand",
      "bmlt admission 2027", "medical laboratory technology colleges", "paramedical colleges in dehradun",
      "bmlt course fees in dehradun", "bmlt admission process dehradun", "bmlt eligibility criteria",
      "government bmlt colleges in dehradun", "private bmlt colleges in dehradun",
      "bmlt colleges with placement", "medical lab technician course dehradun",
    ],
    faqs: [
      { question: "What is the duration of BMLT?", answer: "BMLT generally lasts 3–3.5 years including internship training." },
      { question: "Is NEET required for BMLT?", answer: "No. Most colleges provide admission through merit-based or institutional processes." },
      {
        question: "Which BMLT college offers good placement opportunities in Dehradun?",
        answer: "Placement opportunities differ among institutions and depend on internships, industry exposure, and institutional support.",
      },
      { question: "Can PCM students apply for BMLT?", answer: "Eligibility varies among institutions, though many colleges prefer PCB backgrounds." },
      { question: "Is BMLT better than DMLT?", answer: "BMLT is a degree program with broader academic and career scope, while DMLT is a diploma program." },
      { question: "What is the average fee for BMLT in Uttarakhand?", answer: "Annual fees generally range from ₹40,000–₹90,000 depending on institution and facilities." },
      {
        question: "Is BMLT a good career option in 2027?",
        answer: "Yes. Growing healthcare diagnostics and pathology services continue creating strong demand for trained laboratory professionals.",
      },
    ],
  },

  "best-mha-colleges-in-dehradun-uttarakhand": {
    slug: "best-mha-colleges-in-dehradun-uttarakhand",
    title: "Best MHA Colleges in Dehradun & Uttarakhand 2027 | Compared",
    description:
      "Explore the best MHA (Master of Hospital Administration) colleges in Dehradun, Uttarakhand for 2027. Check fees, eligibility, admission and placements.",
    headline: "Best MHA Colleges in Dehradun 2027 | Top Hospital Administration Colleges in Uttarakhand",
    category: "Hospital Administration",
    image: "/assets/images/blog/MHA_800.jpg",
    imageAlt: "Best MHA colleges in Dehradun, Uttarakhand",
    datePublished: "2025-12-06",
    dateModified: "2027-04-18",
    ogTitle: "Best MHA Colleges in Dehradun 2027",
    ogDescription: "Find top MHA colleges in Dehradun with fees, admission details, and placement insights.",
    keywords: [
      "best MHA colleges in Dehradun", "top MHA colleges in Dehradun 2027", "MHA colleges in Uttarakhand",
      "hospital administration colleges in Dehradun", "MHA course fees in Dehradun", "MHA admission 2027 Uttarakhand",
      "eligibility for MHA in Dehradun", "private MHA colleges in Uttarakhand", "government MHA colleges in Uttarakhand",
      "MHA colleges with placement in Dehradun", "best hospital management colleges in India", "MHA salary in India",
      "career after MHA course", "which college is best for MHA in Dehradun",
    ],
    faqs: [
      {
        question: "Which is the best MHA college in Dehradun?",
        answer:
          "BFIT College Dehradun and Guru Nanak College are among the popular choices for MHA in Dehradun, offering good academic programs and infrastructure.",
      },
    ],
  },

  "best-pharmacy-colleges-in-dehradun": {
    slug: "best-pharmacy-colleges-in-dehradun",
    title: "Top 5 Pharmacy Colleges in Dehradun 2027 | Comparison",
    description:
      "Compare the best pharmacy colleges in Dehradun for 2027. Explore D.Pharm, B.Pharm & Pharm.D courses, fees, eligibility and PCI-approved institutes.",
    headline: "Best Pharmacy Colleges in Dehradun (2027) – Complete Admission & Career Guide",
    category: "Pharmacy",
    image: "/assets/images/blog/pharmacy-college-dehradun.jpg",
    imageAlt: "Best pharmacy colleges in Dehradun",
    datePublished: "2025-07-10",
    dateModified: "2027-10-12",
    ogTitle: "Best Pharmacy Colleges in Dehradun 2027 – Fees, Courses & Admission",
    ogDescription:
      "Looking for the best pharmacy colleges in Dehradun? Compare PCI-approved D.Pharm, B.Pharm & Pharm.D colleges with fees, eligibility and placement details.",
    keywords: [
      "best pharmacy colleges in dehradun", "top pharmacy colleges in dehradun", "pharmacy colleges in dehradun",
      "b pharm colleges in dehradun", "d pharm colleges in dehradun", "pharm d colleges in dehradun",
      "pharmacy admission in dehradun 2027", "pharmacy college fees in dehradun", "pharmacy admission process dehradun",
      "pharmacy eligibility criteria dehradun", "pci approved pharmacy colleges in dehradun",
      "government pharmacy colleges in dehradun", "private pharmacy colleges in dehradun",
      "pharmacy colleges in dehradun with placement", "pharmacy colleges in uttarakhand",
    ],
    comparison: {
      heading: "Pharmacy Colleges in Dehradun: Comparison Table",
      note: "Fees are approximate annual tuition as listed in this guide; confirm with the college before applying.",
      rows: [
        {
          college: "Guru Nanak College (GNC)",
          collegeHref: "https://gnc.edu.in/pharmacy-college-in-dehradun-uttarakhand",
          location: "Dehradun",
          courses: "D.Pharm, B.Pharm",
          approval: "PCI-approved",
          fee: "D.Pharm ₹45,000–₹60,000 · B.Pharm ₹70,000–₹85,000",
        },
        {
          college: "BFIT Group of Institutions",
          collegeHref: "/college-details/BFIT",
          location: "Dehradun",
          courses: "D.Pharm, B.Pharm",
          approval: "PCI-approved",
          fee: "D.Pharm ₹50,000 · B.Pharm ₹80,000",
        },
        {
          college: "Doon PG College of Agriculture and Allied Sciences",
          collegeHref: "/college-details/DCAAS",
          location: "Dehradun",
          courses: "D.Pharm, B.Pharm",
          approval: "PCI-approved",
          fee: "D.Pharm ₹45,000 · B.Pharm ₹75,000–₹85,000",
        },
        {
          college: "JB Institute of Technology (JBIT)",
          collegeHref: "/college-details/JBIT",
          location: "Dehradun",
          courses: "D.Pharm, B.Pharm",
          approval: "PCI-approved",
          fee: "D.Pharm ₹40,000–₹50,000 · B.Pharm ₹75,000",
        },
        {
          college: "Maya Devi University",
          location: "Dehradun",
          courses: "D.Pharm, B.Pharm, Pharm.D, M.Pharm",
          approval: "PCI-approved",
        },
        {
          college: "Dev Bhoomi Institute of Pharmacy & Research",
          courses: "Pharm.D and advanced pharmacy programs",
          approval: "PCI-approved",
        },
      ],
    },
    faqs: [
      {
        question: "Which are the top pharmacy colleges in Dehradun?",
        answer:
          "Some of the best pharmacy colleges in Dehradun for 2027 include Guru Nanak College, BFIT Group of Institutions, Maya Devi University, Doon PG College of Agriculture and Allied Sciences, and JB Institute of Technology. The best choice depends on budget, course preference, and career goals.",
      },
      {
        question: "What is the eligibility for B.Pharm admission in Dehradun colleges?",
        answer:
          "To apply for B.Pharm in Dehradun, candidates must have passed 10+2 with Physics and Chemistry, along with Biology or Mathematics, securing at least 45% marks (40% for reserved categories).",
      },
      {
        question: "What is the average fee for pharmacy courses in Dehradun?",
        answer: "Fees depend on infrastructure, university status, and facilities. Approximate annual fees:",
        points: [
          "D.Pharm: ₹40,000 – ₹60,000 per year",
          "B.Pharm: ₹70,000 – ₹90,000 per year",
          "Pharm.D: ₹1.8 – ₹2.5 lakh per year (varies by university)",
        ],
      },
      {
        question: "Is Pharmacy a good career option in 2027?",
        answer:
          "Yes. Pharmacy remains a strong career option in 2027 due to growth in pharmaceutical manufacturing, clinical research, e-pharmacy, pharmacovigilance, and healthcare services in India and abroad.",
      },
      {
        question: "Can I do Pharm.D in Dehradun?",
        answer: "Yes. Maya Devi University and select institutes around Dehradun offer Pharm.D (Doctor of Pharmacy) programs approved by PCI.",
      },
      {
        question: "What are the career options after D.Pharm?",
        answer: "After D.Pharm, students can work as:",
        points: [
          "Registered Pharmacist",
          "Hospital Pharmacist",
          "Medical Sales Representative",
          "Quality Control Assistant",
          "They can also opt for lateral entry into B.Pharm (2nd year).",
        ],
      },
      {
        question: "Which pharmacy course has the highest salary?",
        answer:
          "Among pharmacy courses, Pharm.D, M.Pharm (Regulatory Affairs/Clinical Research), and Pharmacovigilance roles generally offer higher salary potential, especially in multinational companies.",
      },
    ],
  },

  "bsc-nursing-admission-uttarakhand": {
    slug: "bsc-nursing-admission-uttarakhand",
    title: "B.Sc Nursing Admission Uttarakhand 2027 | Process & Eligibility",
    description:
      "B.Sc Nursing admission in Uttarakhand 2027: eligibility, entrance exam, application, fees, counselling process and top nursing colleges.",
    headline: "BSc Nursing Admission Process in Uttarakhand 2027 | Eligibility, Entrance Exam & Top Colleges",
    category: "Nursing",
    image: "/assets/images/blog/nursing_blog.jpg",
    imageAlt: "BSc Nursing admission in Uttarakhand 2027",
    datePublished: "2025-11-03",
    dateModified: "2027-10-12",
    ogTitle: "B.Sc Nursing Admission Uttarakhand 2027 | Process & Eligibility",
    ogDescription:
      "Check B.Sc Nursing admission process in Uttarakhand 2027. Know eligibility, entrance exam, fees, counselling dates and top nursing colleges.",
    keywords: [
      "bsc nursing admission uttarakhand 2027", "bsc nursing admission in uttarakhand", "bsc nursing colleges in uttarakhand",
      "bsc nursing fees in uttarakhand", "bsc nursing eligibility criteria 2027", "bsc nursing entrance exam uttarakhand",
      "bsc nursing counselling uttarakhand", "government bsc nursing colleges in uttarakhand",
      "private bsc nursing colleges in uttarakhand", "bsc nursing colleges in dehradun", "career after bsc nursing",
      "nursing course after 12th science",
    ],
    comparison: {
      heading: "Top BSc Nursing Colleges in Uttarakhand: Comparison Table",
      note: "All colleges listed are recognised by the Indian Nursing Council (INC). Check fees and seat intake with the college for the 2027 session.",
      rows: [
        { college: "Guru Nanak College", collegeHref: "/college-details/GNC", location: "Dehradun", courses: "BSc Nursing", approval: "INC-recognised" },
        { college: "BFIT Group of Institutions", collegeHref: "/college-details/BFIT", location: "Dehradun", courses: "BSc Nursing", approval: "INC-recognised" },
        {
          college: "Graphic Era College of Nursing",
          collegeHref: "/college-details/GEU",
          location: "Dehradun",
          courses: "BSc Nursing",
          approval: "INC-recognised · Graphic Era (Deemed to be University)",
        },
        {
          college: "Sushila Tiwari Government Nursing College",
          location: "Haldwani",
          courses: "BSc Nursing",
          approval: "Government college · INC-recognised",
        },
        {
          college: "Swami Rama Himalayan University",
          collegeHref: "/college-details/HCN",
          location: "Jolly Grant, Dehradun",
          courses: "BSc Nursing",
          approval: "INC-recognised",
        },
        {
          college: "Dev Bhoomi Uttarakhand University (DBUU)",
          collegeHref: "/college-details/DBUUDehradun",
          location: "Dehradun",
          courses: "BSc Nursing",
          approval: "INC-recognised",
        },
      ],
    },
    faqs: [
      {
        question: "What is the eligibility for BSc Nursing in Uttarakhand?",
        answer: "Candidates must have passed 10+2 with Physics, Chemistry, Biology and English, with at least 45% marks.",
      },
      {
        question: "Which entrance exam is required for BSc Nursing in Uttarakhand?",
        answer: "Admission is done through the Uttarakhand Nursing Entrance Test (UNET) conducted by HNBUMU.",
      },
    ],
  },

  "top-7-nursing-colleges-in-dehradun": {
    slug: "top-7-nursing-colleges-in-dehradun",
    title: "Top 7 Nursing Colleges in Dehradun 2027 | Comparison",
    description:
      "Top nursing colleges in Dehradun for 2027: compare B.Sc Nursing, GNM and ANM fees, eligibility, admission, hospital training and placements.",
    headline: "Top Nursing Colleges in Dehradun (2027): Courses, Fees, Eligibility, Placement & Career Scope",
    category: "Nursing",
    image: "/assets/images/blog/nursing_blog_2027.png",
    imageAlt: "Top nursing colleges in Dehradun 2027",
    datePublished: "2027-01-17",
    dateModified: "2027-01-24",
    ogTitle: "Top 7 Nursing Colleges in Dehradun (2027) | Fees, Admission & Placements",
    ogDescription:
      "Looking for the best nursing colleges in Dehradun? Compare B.Sc Nursing, GNM and ANM colleges with updated 2027 fees, eligibility, admission process, hospital training and placement opportunities.",
    keywords: [
      "top nursing colleges in dehradun", "best nursing colleges in dehradun", "best nursing colleges in dehradun 2027",
      "nursing colleges dehradun 2027", "bsc nursing colleges dehradun", "gnm nursing college dehradun",
      "anm nursing colleges uttarakhand", "nursing admission dehradun", "nursing fees structure dehradun",
      "best nursing college in uttarakhand", "nursing placement colleges india", "career after nursing",
    ],
    faqs: [
      {
        question: "Is B.Sc Nursing better than GNM in 2027?",
        answer: "B.Sc Nursing is preferred for long-term growth and overseas migration. GNM suits applicants seeking quicker hospital entry.",
      },
      {
        question: "Do nursing colleges in Dehradun provide placements?",
        answer: "Yes. Placement support is offered by most private institutions and university campuses.",
      },
      {
        question: "Can male candidates apply for nursing in Uttarakhand?",
        answer: "Yes. There is no gender restriction for ANM, GNM, or B.Sc Nursing.",
      },
      { question: "Is NEET required for B.Sc Nursing?", answer: "NEET is not mandatory for most Uttarakhand nursing colleges." },
    ],
  },

  "top-bba-colleges-in-dehradun": {
    slug: "top-bba-colleges-in-dehradun",
    title: "Top 5 BBA Colleges in Dehradun 2027 | Comparison & Placements",
    description:
      "Compare the best BBA colleges in Dehradun for 2027. Explore fees, admission process, eligibility, curriculum, placements and career scope after BBA.",
    headline: "Top BBA Colleges in Dehradun: Fees, Location, Curriculum & Career Prospects",
    category: "BBA",
    image: "/assets/images/blog/bba_blog800.jpg",
    imageAlt: "Top BBA colleges in Dehradun",
    datePublished: "2025-07-10",
    dateModified: "2027-10-12",
    ogTitle: "Top 5 BBA Colleges in Dehradun 2027 | Comparison & Placements",
    ogDescription:
      "Looking for the best BBA colleges in Dehradun? Compare fees, admission, curriculum, placements and career opportunities after BBA.",
    keywords: [
      "best bba colleges in dehradun", "top bba colleges in dehradun", "bba colleges in dehradun",
      "bba colleges in dehradun fees", "bba admission in dehradun 2027", "bba eligibility criteria",
      "bba course after 12th", "private bba colleges in dehradun", "government bba colleges in dehradun",
      "management colleges in dehradun", "bba colleges in uttarakhand", "best management colleges in uttarakhand",
      "bba placement colleges in dehradun", "career after bba", "jobs after bba", "bba salary in india",
      "bba marketing colleges", "bba finance colleges", "bba hr colleges", "bba vs bcom", "is bba good after 12th",
    ],
    comparison: {
      heading: "BBA Colleges in Dehradun: Comparison Table",
      note: "Fees are approximate annual tuition as listed in this guide; confirm with the college before applying.",
      rows: [
        {
          college: "Graphic Era (Deemed to be University)",
          collegeHref: "/college-details/GEU",
          location: "Dehradun",
          courses: "BBA — Finance, HR, Marketing, Digital Marketing, International Business",
          approval: "Deemed University (UGC) · NAAC A+",
          fee: "₹1,15,000",
          placements: "Amazon, Wipro, Deloitte, HCL, Infosys",
        },
        {
          college: "UPES",
          collegeHref: "/college-details/UPES",
          location: "Dehradun",
          courses: "BBA — Oil & Gas Marketing, Logistics, Finance, Marketing, HR",
          approval: "UGC, AIU · NAAC A",
          fee: "₹2,60,000",
          placements: "94% placement rate · Schlumberger, Reliance, ONGC, Accenture",
        },
        {
          college: "DIT University",
          collegeHref: "/college-details/DIT",
          location: "Dehradun",
          courses: "BBA — HR, Finance, Digital Business, Data Analytics",
          approval: "UGC-approved private university · NAAC in process",
          fee: "₹1,10,000",
          placements: "TCS, Infosys, Deloitte, HDFC",
        },
        {
          college: "IMS Unison University",
          collegeHref: "/college-details/IMSUU",
          location: "Dehradun",
          courses: "BBA — HR, Finance, Marketing, International Business",
          approval: "UGC-recognised private university · NAAC B+",
          fee: "₹1,05,000",
          placements: "Axis Bank, Byju's, Justdial, Decathlon",
        },
        {
          college: "Guru Nanak College",
          collegeHref: "https://gnc.edu.in/best-bba-college-in-dehradun",
          location: "Dehradun",
          courses: "General BBA",
          approval: "Sri Dev Suman Uttarakhand University",
          fee: "₹50,000–₹60,000",
        },
        {
          college: "JB Institute of Technology (JBIT)",
          collegeHref: "/college-details/JBIT",
          location: "Dehradun",
          courses: "BBA — HR, Marketing, Finance",
          approval: "Sri Dev Suman Uttarakhand University",
          fee: "₹70,000–₹85,000",
          placements: "Byju's, Infosys, ICICI Bank, Wipro",
        },
        {
          college: "BFIT Group of Institutions",
          collegeHref: "/college-details/BFIT",
          location: "Dehradun",
          courses: "General BBA, Entrepreneurship",
          approval: "HNB Garhwal Central University",
          fee: "₹60,000–₹75,000",
          placements: "PolicyBazaar, Tech Mahindra, HDFC, Reliance",
        },
      ],
    },
    faqs: [
      {
        question: "What is the average fee for BBA in Dehradun?",
        answer: "Fees range from ₹85,000 to ₹2.6 Lakhs per year, depending on the university.",
      },
      { question: "Is hostel accommodation available?", answer: "Yes, most colleges offer on-campus or partnered hostel facilities." },
      {
        question: "Are BBA programs UGC approved?",
        answer: "Yes, all the colleges mentioned above are UGC-recognized and follow NEP-aligned curriculums.",
      },
    ],
  },

  "top-bpt-colleges-in-dehradun": {
    slug: "top-bpt-colleges-in-dehradun",
    title: "Top 5 BPT Colleges in Dehradun 2027 | Comparison",
    description:
      "Compare the top BPT colleges in Dehradun — Guru Nanak College, BFIT, Doon PG College and New Anmol — with fees, eligibility, campus highlights and careers.",
    headline: "Top 5 BPT Colleges in Dehradun 2027 | Comparison",
    excerpt:
      "Dehradun is steadily gaining recognition as a center for healthcare and rehabilitation education. This guide covers the top BPT colleges in Dehradun with program details, fees, eligibility, campus highlights and career scope.",
    category: "Physiotherapy",
    image: "/assets/images/blog/bpt_blog220.jpg",
    imageAlt: "Top BPT (Bachelor of Physiotherapy) colleges in Dehradun",
    datePublished: "2025-08-12",
    dateModified: "2027-10-12",
    keywords: [
      "top bpt colleges in dehradun", "best bpt colleges in dehradun", "bpt colleges in dehradun",
      "bachelor of physiotherapy dehradun", "bpt fees in dehradun", "bpt admission dehradun",
      "physiotherapy colleges in uttarakhand", "career after bpt",
    ],
    comparison: {
      heading: "BPT Colleges in Dehradun: Comparison Table",
      note: "Fees are approximate annual tuition as listed in this guide; confirm with the college before applying.",
      rows: [
        {
          college: "Guru Nanak College (GNC)",
          collegeHref: "https://gnc.edu.in/best-bpt-college-indehradun-uttarakhand",
          location: "Dehradun",
          courses: "BPT",
          fee: "₹80,000–₹95,000",
        },
        { college: "BFIT Group of Institutions", collegeHref: "/college-details/BFIT", location: "Dehradun", courses: "BPT", fee: "₹85,000–₹1,00,000" },
        {
          college: "Doon PG College of Agriculture and Allied Sciences",
          collegeHref: "/college-details/DCAAS",
          location: "Dehradun",
          courses: "BPT",
          fee: "₹75,000–₹90,000",
        },
        { college: "New Anmol Group of Institutions", location: "Dehradun", courses: "BPT", fee: "₹75,000–₹90,000" },
      ],
    },
  },

  "uttarakhand-paramedical-admission": {
    slug: "uttarakhand-paramedical-admission",
    title: "Uttarakhand Paramedical Admission 2027 | Dates & Process",
    description:
      "Uttarakhand Paramedical Admission 2027: exam dates, eligibility, application process, counselling and top paramedical colleges in Uttarakhand.",
    headline: "Uttarakhand Paramedical Admission 2027: Dates, Eligibility, Entrance Exam, Counselling & Top Colleges",
    category: "Paramedical",
    image: "/assets/images/blog/uttarakhand-paramedical-admission-2027.jpg",
    imageAlt: "Uttarakhand Paramedical Admission 2027",
    datePublished: "2027-01-24",
    dateModified: "2027-01-24",
    ogTitle: "Uttarakhand Paramedical Admission 2027 – Dates, Eligibility & Colleges",
    ogDescription:
      "Check Uttarakhand Paramedical Admission 2027 details including entrance exam, eligibility, counselling process and top colleges.",
    keywords: [
      "Uttarakhand Paramedical Admission 2027", "Uttarakhand Paramedical Entrance Exam 2027", "HNBUMU Paramedical Admission 2027",
      "Paramedical Admission in Uttarakhand 2027", "Paramedical Colleges in Uttarakhand", "BPT Admission Uttarakhand 2027",
      "BSc Paramedical Admission Uttarakhand", "MSc MLT Admission Uttarakhand", "MPT Admission Uttarakhand",
      "eligibility for paramedical courses in uttarakhand", "how to apply for uttarakhand paramedical entrance exam",
      "uttarakhand paramedical counselling 2027", "list of paramedical colleges in uttarakhand",
      "paramedical entrance exam syllabus uttarakhand", "paramedical courses after 12th", "career after paramedical courses",
      "government paramedical colleges in uttarakhand", "private paramedical colleges in uttarakhand",
    ],
    faqs: [
      { question: "Is admission based on entrance?", answer: "Yes. Admission is entrance-based followed by counselling." },
      { question: "Eligibility for BSc Paramedical?", answer: "10+2 PCB with minimum 50% marks." },
      { question: "When will 2027 forms be released?", answer: "Expected in May 2027." },
      { question: "Which programs are offered?", answer: "BPT, BSc Paramedical, MPT, MSc MLT, and allied health sciences." },
    ],
  },
} satisfies Record<string, Guide>;

export type GuideSlug = keyof typeof guides;

export function getGuide(slug: GuideSlug): Guide {
  return guides[slug];
}

export const allGuides: Guide[] = Object.values(guides);

export default guides;

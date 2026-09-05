export interface AdvisorUniversity {
  id: string;
  name: string;
  logo: string;
  location: string;
  rating: number;
  reviews: number;
  fee: string;
  feeNumeric: number;
  duration: string;
  emi: string;
  accreditations: string[];
  highlights: string[];
  badge?: string;
  courses: string[];
  specializations: string[];
  learningModes: string[];
  experienceLevel: string[];
}

export type MatchedUniversity = AdvisorUniversity & { matchScore: number };

export const courseSpecializations: Record<string, { label: string; value: string; icon: string }[]> = {
  mba: [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Finance Management", value: "finance", icon: "💰" },
    { label: "Marketing Management", value: "marketing", icon: "📈" },
    { label: "HR Management", value: "hr", icon: "👥" },
    { label: "Operations Management", value: "operations", icon: "⚙️" },
    { label: "IT Management", value: "it-mgmt", icon: "💻" },
    { label: "Healthcare Management", value: "healthcare", icon: "🏥" },
    { label: "International Business", value: "international-business", icon: "🌍" }
  ],
  mca: [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "AI & Machine Learning", value: "ai-ml", icon: "🤖" },
    { label: "Cloud Computing", value: "cloud", icon: "☁️" },
    { label: "Cybersecurity", value: "cybersecurity", icon: "🔒" },
    { label: "Data Science", value: "data-science", icon: "📊" },
    { label: "Full-Stack Development", value: "full-stack", icon: "🌐" },
    { label: "Mobile App Development", value: "mobile", icon: "📱" }
  ],
  "msc-it": [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Software Engineering", value: "software-eng", icon: "👨‍💻" },
    { label: "Network Systems", value: "network", icon: "📡" },
    { label: "Database Management", value: "dbms", icon: "🗄️" },
    { label: "IT Architecture", value: "architecture", icon: "🏗️" }
  ],
  mcom: [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Accounting & Finance", value: "acc-fin", icon: "📒" },
    { label: "Corporate Law", value: "corp-law", icon: "⚖️" },
    { label: "Taxation", value: "taxation", icon: "🧾" },
    { label: "Banking & Insurance", value: "banking", icon: "🏦" }
  ],
  ma: [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "English Literature", value: "english", icon: "📚" },
    { label: "Economics", value: "economics", icon: "📉" },
    { label: "Psychology", value: "psychology", icon: "🧠" },
    { label: "Sociology", value: "sociology", icon: "🤝" }
  ],
  "ms-ds": [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Business Analytics", value: "business-analytics", icon: "📊" },
    { label: "Big Data Technologies", value: "big-data", icon: "🐘" },
    { label: "Deep Learning", value: "deep-learning", icon: "🧠" },
    { label: "Statistical Modeling", value: "statistics", icon: "📈" }
  ],
  "pg-dip": [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Digital Marketing", value: "digital-marketing", icon: "📱" },
    { label: "Supply Chain", value: "supply-chain", icon: "🚢" },
    { label: "Project Management", value: "project-mgmt", icon: "📋" },
    { label: "Business Administration", value: "bus-admin", icon: "🏢" }
  ],
  "pg-ai": [
    { label: "Help Me Decide", value: "help-me-decide", icon: "🤔" },
    { label: "Computer Vision", value: "computer-vision", icon: "👁️" },
    { label: "NLP", value: "nlp", icon: "💬" },
    { label: "Robotics", value: "robotics", icon: "🦾" },
    { label: "Generative AI", value: "gen-ai", icon: "🎨" }
  ]
};

export const budgetOptions = [
  { label: "Under ₹1L", value: "under-1l", range: [0, 100000] },
  { label: "₹1L – ₹3L", value: "1l-3l", range: [100000, 300000] },
  { label: "₹3L – ₹6L", value: "3l-6l", range: [300000, 600000] },
  { label: "₹6L – ₹10L", value: "6l-10l", range: [600000, 1000000] },
  { label: "₹10L+", value: "10l-plus", range: [1000000, Infinity] }
];

export const experienceOptions = [
  { label: "Fresher (0 years)", value: "fresher", icon: "🎓" },
  { label: "1–3 years", value: "1-3-years", icon: "🌱" },
  { label: "3–5 years", value: "3-5-years", icon: "🚀" },
  { label: "5–10 years", value: "5-10-years", icon: "💼" },
  { label: "10+ years", value: "10-plus-years", icon: "👑" }
];

export const learningModeOptions = [
  { label: "Self-Paced", value: "self-paced", icon: "🚶", subtitle: "Learn at your own speed" },
  { label: "Weekend Classes", value: "weekend", icon: "📅", subtitle: "Saturday & Sunday batches" },
  { label: "Evening Batch", value: "evening", icon: "🌙", subtitle: "Post-work sessions" },
  { label: "Full-Time Online", value: "full-time", icon: "💻", subtitle: "Intensive daily schedule" }
];

export const advisorUniversities: AdvisorUniversity[] = [
  {
    id: "amity-001",
    name: "Amity University Online",
    logo: "/assets/images/college/amity.logo.jpg",
    location: "Noida, India",
    rating: 4.5,
    reviews: 1250,
    fee: "₹1,50,000",
    feeNumeric: 150000,
    duration: "2 Years",
    emi: "₹6,250/month",
    accreditations: ["NAAC A+", "UGC Entitled", "AICTE Approved"],
    highlights: ["Global Faculty", "100% Placement Assistance"],
    badge: "Most Popular",
    courses: ["mba", "mca", "mcom", "ma", "pg-dip"],
    specializations: ["finance", "marketing", "hr", "ai-ml", "cloud", "digital-marketing", "acc-fin", "english"],
    learningModes: ["self-paced", "weekend"],
    experienceLevel: ["fresher", "1-3-years", "3-5-years"]
  },
  {
    id: "manipal-002",
    name: "Manipal University Jaipur (Online)",
    logo: "/assets/images/college/manipal.logo.jpg",
    location: "Jaipur, India",
    rating: 4.6,
    reviews: 2100,
    fee: "₹2,60,000",
    feeNumeric: 260000,
    duration: "2 Years",
    emi: "₹10,833/month",
    accreditations: ["NAAC A+", "WES Recognized", "UGC Entitled"],
    highlights: ["Free Coursera Access", "Alumni Status"],
    badge: "Top Ranked",
    courses: ["mba", "mca", "ms-ds", "mcom", "msc-it"],
    specializations: ["finance", "operations", "data-science", "business-analytics", "full-stack", "dbms"],
    learningModes: ["self-paced", "evening", "weekend"],
    experienceLevel: ["1-3-years", "3-5-years", "5-10-years", "10-plus-years"]
  },
  {
    id: "dy-patil-003",
    name: "D.Y. Patil University (Online)",
    logo: "/assets/images/college/DY-Patil.logo.jpg",
    location: "Navi Mumbai, India",
    rating: 4.3,
    reviews: 840,
    fee: "₹1,30,000",
    feeNumeric: 130000,
    duration: "2 Years",
    emi: "₹5,416/month",
    accreditations: ["NAAC A", "UGC Approved", "AIU Member"],
    highlights: ["Industry Curriculum", "Live Sessions"],
    courses: ["mba", "mca", "pg-dip"],
    specializations: ["healthcare", "hr", "project-mgmt", "marketing", "cybersecurity"],
    learningModes: ["weekend", "evening"],
    experienceLevel: ["fresher", "1-3-years", "3-5-years"]
  },
  {
    id: "lpu-004",
    name: "Lovely Professional University (LPU) Online",
    logo: "/assets/images/college/lpu.logo.jpg",
    location: "Phagwara, India",
    rating: 4.4,
    reviews: 1800,
    fee: "₹95,000",
    feeNumeric: 95000,
    duration: "2 Years",
    emi: "₹3,958/month",
    accreditations: ["NAAC A++", "UGC Entitled", "NIRF Ranked"],
    highlights: ["Most Affordable", "Interactive LMS"],
    badge: "Best Value",
    courses: ["mba", "mca", "msc-it", "ma", "mcom"],
    specializations: ["finance", "it-mgmt", "software-eng", "economics", "taxation"],
    learningModes: ["self-paced", "full-time"],
    experienceLevel: ["fresher", "1-3-years"]
  },
  {
    id: "chandigarh-005",
    name: "Chandigarh University Online",
    logo: "/assets/images/college/chandigarh.logo.png",
    location: "Chandigarh, India",
    rating: 4.5,
    reviews: 1450,
    fee: "₹1,10,000",
    feeNumeric: 110000,
    duration: "2 Years",
    emi: "₹4,583/month",
    accreditations: ["NAAC A+", "UGC Entitled", "AICTE Approved"],
    highlights: ["International Tie-ups", "Virtual Labs"],
    courses: ["mba", "mca", "ms-ds", "pg-ai"],
    specializations: ["marketing", "hr", "ai-ml", "cloud", "data-science", "computer-vision"],
    learningModes: ["self-paced", "weekend", "evening"],
    experienceLevel: ["fresher", "1-3-years", "3-5-years"]
  },
  {
    id: "nmims-006",
    name: "NMIMS Global Access",
    logo: "/assets/images/college/nmims.logo.jpg",
    location: "Mumbai, India",
    rating: 4.7,
    reviews: 3200,
    fee: "₹3,50,000",
    feeNumeric: 350000,
    duration: "2 Years",
    emi: "₹14,583/month",
    accreditations: ["NAAC A+", "UGC Entitled", "Autonomy Grade 1"],
    highlights: ["Premium Brand", "Harvard Business Publishing"],
    badge: "Premium",
    courses: ["mba", "pg-dip"],
    specializations: ["finance", "marketing", "operations", "supply-chain", "bus-admin", "international-business"],
    learningModes: ["self-paced", "weekend"],
    experienceLevel: ["3-5-years", "5-10-years", "10-plus-years"]
  },
  {
    id: "vit-007",
    name: "VIT Online Learning",
    logo: "/assets/images/college/vit.logo.jpg",
    location: "Vellore, India",
    rating: 4.6,
    reviews: 950,
    fee: "₹2,20,000",
    feeNumeric: 220000,
    duration: "2 Years",
    emi: "₹9,166/month",
    accreditations: ["NAAC A++", "UGC Entitled", "IoE Status"],
    highlights: ["Tech Focused", "Project Based Learning"],
    courses: ["mca", "ms-ds", "msc-it", "pg-ai"],
    specializations: ["data-science", "ai-ml", "full-stack", "cybersecurity", "big-data", "nlp", "network"],
    learningModes: ["self-paced", "evening", "full-time"],
    experienceLevel: ["fresher", "1-3-years", "3-5-years", "5-10-years"]
  },
  {
    id: "jain-008",
    name: "JAIN (Deemed-to-be University) Online",
    logo: "/assets/images/college/amity.logo.jpg", 
    location: "Bangalore, India",
    rating: 4.4,
    reviews: 1100,
    fee: "₹1,80,000",
    feeNumeric: 180000,
    duration: "2 Years",
    emi: "₹7,500/month",
    accreditations: ["NAAC A++", "UGC Entitled", "AICTE Approved"],
    highlights: ["Elective Breadth", "Dedicated Mentors"],
    courses: ["mba", "mca", "mcom", "ma", "ms-ds"],
    specializations: ["finance", "hr", "healthcare", "cloud", "banking", "psychology", "statistics"],
    learningModes: ["self-paced", "weekend", "evening"],
    experienceLevel: ["fresher", "1-3-years", "3-5-years", "5-10-years"]
  }
];

export function matchUniversities(
  answers: {
    specialization: string | null;
    budgetRange: string | null;
    experience: string | null;
    learningMode: string | null;
  },
  courseId: string
): MatchedUniversity[] {
  // 1. Filter by course
  const eligibleUniversities = advisorUniversities.filter((uni) => uni.courses.includes(courseId));

  // 2. Score each eligible university
  const scoredUniversities: MatchedUniversity[] = eligibleUniversities.map((uni) => {
    let score = 0;

    // Budget Score (40% max, weight 40 points)
    let budgetScore = 0;
    if (answers.budgetRange) {
      const selectedIndex = budgetOptions.findIndex(b => b.value === answers.budgetRange);
      if (selectedIndex !== -1) {
        const [min, max] = budgetOptions[selectedIndex].range;
        if (uni.feeNumeric >= min && uni.feeNumeric <= max) {
          budgetScore = 40; // 100% of 40 = 40
        } else {
          // Check if adjacent
          let isAdjacent = false;
          if (selectedIndex > 0) {
            const [prevMin, prevMax] = budgetOptions[selectedIndex - 1].range;
            if (uni.feeNumeric >= prevMin && uni.feeNumeric <= prevMax) isAdjacent = true;
          }
          if (selectedIndex < budgetOptions.length - 1) {
            const [nextMin, nextMax] = budgetOptions[selectedIndex + 1].range;
            if (uni.feeNumeric >= nextMin && uni.feeNumeric <= nextMax) isAdjacent = true;
          }
          if (isAdjacent) {
            budgetScore = 20; // 50% of 40 = 20
          }
        }
      }
    } else {
      budgetScore = 40; // Ignore if not selected
    }
    score += budgetScore;

    // Specialization Score (30% max, weight 30 points)
    let specScore = 0;
    if (!answers.specialization || answers.specialization === "help-me-decide") {
      specScore = 30;
    } else if (uni.specializations.includes(answers.specialization)) {
      specScore = 30;
    }
    score += specScore;

    // Experience Score (20% max, weight 20 points)
    let expScore = 0;
    if (!answers.experience) {
      expScore = 20;
    } else if (uni.experienceLevel.includes(answers.experience)) {
      expScore = 20;
    }
    score += expScore;

    // Learning Mode Score (10% max, weight 10 points)
    let modeScore = 0;
    if (!answers.learningMode) {
      modeScore = 10;
    } else if (uni.learningModes.includes(answers.learningMode)) {
      modeScore = 10;
    }
    score += modeScore;

    // Scale back to 0-100 total points based on components
    return { ...uni, matchScore: score };
  });

  // 3. Sort descending and return top 6
  return scoredUniversities
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);
}

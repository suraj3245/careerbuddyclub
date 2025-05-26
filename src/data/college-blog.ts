// Collegeblog.ts

export interface CollegeRow {
  label: string;
  value: string;
  shortDescription?: string;
  keyBenefits?: string[];
  eligibility?: string;
  fees?: string;
  website?: string;
}

export interface BlogContent {
  title: string;
  description?: string;
  tableData?: {
    heading: string;
    rows: CollegeRow[];
  };
}

const blogData: Record<number, BlogContent> = {
  17: {
    title: "Best Pharmacy Colleges in Dehradun (2025 Guide)",
    description:
      "Dehradun, often hailed as the educational hub of Uttarakhand, has emerged as a hotspot for pharmacy education. The city is home to several reputed institutions offering pharmacy courses, ranging from diploma to bachelor's level, with excellent infrastructure and industry connections. With the Indian pharmaceutical sector poised for robust growth, pursuing a career in pharmacy offers both stability and a multitude of career options. In this comprehensive 2025 guide by Career Buddy Club — your trusted education partner — we explore the top pharmacy colleges in Dehradun. This guide covers essential details such as courses offered, fees, eligibility criteria, campus highlights, and career scope to help students and parents make informed decisions.",
    tableData: {
      heading: "Top Pharmacy Colleges in Dehradun",
      rows: [
        {
          label: "1. Guru Nanak College (GNC), Dehradun",
          value: "B.Pharm, D.Pharm",
          shortDescription: "GNC focuses on practical skills and industry-oriented training in pharmacy.",
          keyBenefits: ["Affordable fee structure", "Placement assistance", "Hands-on lab work"],
          eligibility: "10+2 with PCB/PCM, minimum 50%",
          fees: "₹65,000 - ₹85,000/year",
          website: "https://www.gncdehradun.com/"
        },
        {
          label: "2. Doon PG College of Agriculture and Allied Sciences",
          value: "B.Pharm, M.Pharm",
          shortDescription: "Offers modern infrastructure and strong industry-academic partnerships.",
          keyBenefits: ["Research opportunities", "NAAC accreditation", "Experienced faculty"],
          eligibility: "10+2 Science, entrance test required",
          fees: "₹75,000 - ₹1,10,000/year",
          website: "https://www.dpmc.in/"
        },
        {
          label: "3. JB Institute of Technology (JBIT), Dehradun",
          value: "B.Pharm, Pharmacy Practice",
          shortDescription: "Known for clinical exposure and experiential learning in pharmacy.",
          keyBenefits: ["Industry visits", "Clinical tie-ups", "Active placement cell"],
          eligibility: "10+2 in Science with min 45-50%",
          fees: "₹70,000 - ₹90,000/year",
          website: "https://www.jbitdoon.com/"
        },
        {
          label: "4. BFIT Group of Institutions, Dehradun",
          value: "D.Pharm, B.Pharm",
          shortDescription: "Popular among students for affordable education and active campus life.",
          keyBenefits: ["Scholarships available", "Entrepreneurial ecosystem", "Top-notch faculty"],
          eligibility: "10+2 (PCB/PCM), no entrance required",
          fees: "₹60,000 - ₹80,000/year",
          website: "https://bfit.edu.in/"
        }
      ]
    }
  }
};

export default blogData;

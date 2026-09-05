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
  variants?: Record<string, BlogContent>;
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
  },
  2: {
    title: "Top BBA Colleges in Dehradun: Fees, Location, Curriculum & Career Prospects",
    description: `Top BBA Colleges in Dehradun: Fees, Location, Curriculum & Career Prospects  
    
    If you're planning to pursue a Bachelor of Business Administration (BBA), Dehradun is emerging as a premier destination for quality management education. Known for its scenic beauty and academic 
    atmosphere, Dehradun offers a mix of prestigious universities, an industry-aligned curriculum, affordable fees, and strong career opportunities. In this blog, we explore the top BBA colleges in 
    Dehradun, their fees, location advantages, curriculum highlights, and career prospects after graduation. 

Why Choose Dehradun for a BBA? 

1. Educational Hub with Quality Institutions 
Dehradun is home to several reputable universities and colleges that offer top-rated BBA programs 
recognized by UGC and accredited bodies like NAAC and AICTE. 

2. Strategic Location 
Located in Uttarakhand, Dehradun is well-connected to major cities like Delhi, Haridwar, and 
Chandigarh. It also provides a peaceful learning environment and proximity to industrial hubs for 
practical exposure. 

3. Affordable Living & Education 
Compared to metro cities, Dehradun offers affordable tuition fees and cost of living, making it ideal 
for students from across India. 

Top BBA Colleges in Dehradun 

Here are some of the best colleges for BBA in Dehradun, based on curriculum, placements, industry 
interface, and student reviews: 

1. Graphic Era (Deemed to be University) 
• Affiliation: Deemed University (UGC approved) 
• NAAC Rating: A+ 
• Fees: ₹1,15,000 per year (approx.) 
• Specializations: Finance, HR, Marketing, Digital Marketing, International Business 
• Placement Partners: Amazon, Wipro, Deloitte, HCL, Infosys 

Highlights: 
• Strong industry interface 
• Excellent infrastructure 
• International collaborations 

2. UPES (University of Petroleum and Energy Studies) 
• Affiliation: UGC, AIU 
• NAAC Rating: A 
• Fees: ₹2,60,000 per year (approx.) 
• Specializations: Oil & Gas Marketing, Logistics, Finance, Marketing, HR 
• Top Recruiters: Schlumberger, Reliance, ONGC, Accenture 

Highlights: 
• Unique BBA specializations tailored to emerging industries 
• Industry-integrated curriculum 
• 94% placement rate 

3. DIT University 
• Affiliation: Private University (UGC Approved) 
• NAAC Rating: NAAC Accreditation in process 
• Fees: ₹1,10,000 per year (approx.) 
• Specializations: HR, Finance, Digital Business, Data Analytics 
• Recruiters: TCS, Infosys, Deloitte, HDFC 

Highlights: 
• Modern pedagogy with case-based learning 
• Excellent placement and internship support 

4. IMS Unison University 
• Affiliation: UGC Recognized Private University 
• NAAC Rating: B+ 
• Fees: ₹1,05,000 per year (approx.) 
• Specializations: HR, Finance, Marketing, International Business 
• Top Recruiters: Axis Bank, Justdial, Byju's, Decathlon 

Highlights: 
• Good student-faculty ratio 
• Skill development workshops 

5. Guru Nanak College, Dehradun 
• Affiliation: Sri Dev Suman Uttarakhand University 
• Fees: ₹50,000–₹60,000/year (approx.) 
• Specializations: General BBA 
• Facilities: Wi-Fi campus, digital classrooms, personality development workshops 

Highlights: 
• Personalized academic attention 
• Affordable fees 
• Strong focus on student activities 

Learn more and apply: https://gnc.edu.in/best-bba-college-in-dehradun 

6. JBIT (JB Institute of Technology), Dehradun 
• Affiliation: Sri Dev Suman Uttarakhand University 
• Fees: ₹70,000–₹85,000 per year (approx.) 
• Specializations: HR, Marketing, Finance 
• Top Recruiters: Byju’s, Infosys, ICICI Bank, Wipro 

Highlights: 
• Strong placement and career support 
• Regular industrial visits and guest lectures 
• Modern infrastructure with ERP-integrated learning 

7. BFIT Group of Institutions, Dehradun 
• Affiliation: HNB Garhwal Central University 
• Fees: ₹60,000–₹75,000 per year (approx.) 
• Specializations: General BBA, Entrepreneurship 
• Top Recruiters: PolicyBazaar, Tech Mahindra, Reliance, HDFC 

Highlights: 
• One of the largest and oldest groups in Dehradun 
• Affordable yet comprehensive curriculum 
• Emphasis on practical learning and startup incubation 

Key Advantages of Doing BBA in Dehradun 

Industry Exposure 
Thanks to proximity to industrial cities like Haridwar and Roorkee, students get ample internship and live project opportunities. 

Strong Placement Support 
Colleges in Dehradun maintain active placement cells with strong connections in the corporate 
world. 

Ideal for Competitive Exam Preparation 
The peaceful learning environment is perfect for those preparing for MBA entrance exams like CAT, 
XAT, or government exams alongside their BBA. 

Modern Infrastructure 
Most colleges are equipped with smart classrooms, libraries, entrepreneurship cells, and incubation 
centers. 

Curriculum Overview of BBA Programs 

A typical BBA curriculum in Dehradun includes: 
Core Subjects: 
• Principles of Management 
• Financial Accounting 
• Business Economics 
• Organizational Behavior 
• Business Communication 
• Marketing Management 
• Human Resource Management 

Electives & Specializations: 
• Digital Marketing 
• Financial Modeling 
• Entrepreneurship 
• Supply Chain Management 
• International Business 

Skill Enhancement Courses: 
• Excel & Data Tools 
• Presentation & Soft Skills 
• Business Analytics Basics 
• Case Study Analysis 

Internships: 

Most universities mandate 6–8 weeks of internships after the 4th or 5th semester. 
Career Prospects After BBA 
Graduating with a BBA from a reputed college in Dehradun opens a wide range of opportunities: 

Higher Education 
• MBA/PGDM (IIMs, XLRI, FMS, etc.) 
• Specialized Masters (MSc in Finance, Data Analytics, etc.) 
• International programs (MS, MBA abroad) 

Job Opportunities 
• Business Analyst 
• HR Executive 
• Digital Marketing Associate 
• Sales Manager 
• Operations Executive 
• Banking & Finance Associate 

Entrepreneurship 

With incubation centers and startup support, many BBA graduates go on to launch their own 
businesses. 

Final Thoughts 
Pursuing a BBA in Dehradun is not just about gaining a degree—it's about building a foundation for 
leadership, corporate readiness, and entrepreneurial thinking. With a blend of academic excellence, 
industry alignment, affordable costs, and scenic surroundings, Dehradun has earned its place among 
India's emerging educational destinations. 

Frequently Asked Questions (FAQs) 

Q1. What is the average fee for BBA in Dehradun? 
A: Fees range from ₹85,000 to ₹2.6 Lakhs per year, depending on the university. 

Q2. Is hostel accommodation available in Dehradun colleges? 
A: Yes, most colleges offer on-campus or partnered hostel facilities. 

Q3. Are BBA programs in Dehradun UGC approved? 
A: Yes, all the colleges mentioned above are UGC-recognized and follow NEP-aligned curriculums. 

Explore More with Career Buddy Club 

Want personalized guidance to select the best BBA college for you? Contact Career Buddy Club for free counseling, college comparison, and career advice.`,
    tableData: {
      heading: "Top BBA Colleges in Dehradun",
      rows: [
        {
          label: "Graphic Era (Deemed to be University)",
          value: "Finance, HR, Marketing, Digital Marketing, International Business",
          shortDescription: "A+ NAAC, UGC Approved, Industry-focused curriculum",
          keyBenefits: [
            "Strong industry interface",
            "Excellent infrastructure",
            "International collaborations"
          ],
          eligibility: "10+2 (any stream), min. 50%",
          fees: "₹1,15,000/year (approx.)",
          website: ""
        },
        {
          label: "UPES (University of Petroleum and Energy Studies)",
          value: "Oil & Gas Marketing, Logistics, Finance, Marketing, HR",
          shortDescription: "Unique industry-aligned specializations, A NAAC",
          keyBenefits: [
            "Industry-integrated curriculum",
            "94% placement rate"
          ],
          eligibility: "10+2 (any stream), min. 50%",
          fees: "₹2,60,000/year (approx.)",
          website: ""
        },
        {
          label: "DIT University",
          value: "HR, Finance, Digital Business, Data Analytics",
          shortDescription: "Modern pedagogy, internships, strong placements",
          keyBenefits: [
            "Case-based learning",
            "Excellent placement & internship support"
          ],
          eligibility: "10+2 (any stream), min. 50%",
          fees: "₹1,10,000/year (approx.)",
          website: ""
        },
        {
          label: "IMS Unison University",
          value: "HR, Finance, Marketing, International Business",
          shortDescription: "Good student-faculty ratio, B+ NAAC",
          keyBenefits: [
            "Skill development workshops"
          ],
          eligibility: "10+2 (any stream), min. 45%",
          fees: "₹1,05,000/year (approx.)",
          website: ""
        },
        {
          label: "Guru Nanak College, Dehradun",
          value: "General BBA",
          shortDescription: "Affordable private college, holistic development",
          keyBenefits: [
            "Personalized academic attention",
            "Affordable fees",
            "Strong focus on student activities"
          ],
          eligibility: "10+2 (any stream), min. 45%",
          fees: "₹50,000–₹60,000/year (approx.)",
          website: "https://gnc.edu.in/best-bba-college-in-dehradun"
        },
        {
          label: "JBIT (JB Institute of Technology)",
          value: "HR, Marketing, Finance",
          shortDescription: "ERP-integrated learning, industry connect",
          keyBenefits: [
            "Strong placement and career support",
            "Regular industrial visits and guest lectures",
            "Modern infrastructure with ERP-integrated learning"
          ],
          eligibility: "10+2 (any stream), min. 45%",
          fees: "₹70,000–₹85,000/year (approx.)",
          website: ""
        },
        {
          label: "BFIT Group of Institutions",
          value: "General BBA, Entrepreneurship",
          shortDescription: "Oldest & largest group, startup support",
          keyBenefits: [
            "One of the largest and oldest groups in Dehradun",
            "Affordable yet comprehensive curriculum",
            "Emphasis on practical learning and startup incubation"
          ],
          eligibility: "10+2 (any stream), min. 45%",
          fees: "₹60,000–₹75,000/year (approx.)",
          website: ""
        }
      ]
    }
    ,
    variants: {
      bangalore: {
        title: "Top BBA Colleges in Bangalore: Fees, Curriculum & Placements",
        description: `Bangalore offers industry-connected BBA programs with strong placement support and modern curricula. This overview highlights leading colleges, fees, eligibility, and career prospects for business management in Bangalore.

Why Bangalore for BBA?
- Corporate exposure and internships
- Technology ecosystem and entrepreneurship support
- Strong placement records across domains`,
        tableData: {
          heading: "Top BBA Colleges in Bangalore",
          rows: [
            {
              label: "Christ University",
              value: "Finance, Marketing, Business Analytics, HR",
              shortDescription: "NAAC A+, industry-focused BBA with strong internships",
              keyBenefits: ["Robust placements", "Industry projects", "Global exposure"],
              eligibility: "10+2 (any stream), min. 50%",
              fees: "₹1,80,000/year (approx.)",
              website: ""
            },
            {
              label: "Jain (Deemed-to-be) University",
              value: "Marketing, Finance, Entrepreneurship",
              shortDescription: "Skill-based curriculum with startup ecosystem",
              keyBenefits: ["Internships", "Incubation support"],
              eligibility: "10+2 (any stream), min. 50%",
              fees: "₹1,40,000/year (approx.)",
              website: ""
            }
          ]
        }
      }
    }
  }
};

 




export default blogData;
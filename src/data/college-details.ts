import { IcollegeType } from "@/types/college-details";
import job_img_1 from "@/assets/images/logo/media_22.webp";
import Image, { StaticImageData } from "next/image";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_22.jpg";

const college_details: IcollegeType[] = [
  {
    id: 1,
    logo: job_img_1,
    type: "Private",
    establishmentyear: "2009",
    Recognisedby: "UGC",
    Approvedby: "BCI, RCI, PCI, NCTE",
    state: "Uttarakhand",
    city: "Dehradun",
    Campusarea: "20+ acre",
    link: "https://gnc.edu.in/",
    email: "info@gncmh.com",
    founded: "",
    phone: "7300900909",
    feild: ["Education"],
    overviewsection:
      "The college, renowned for its distinguished faculty from top-tier institutions, excels with the region's highest number of faculty possessing Master's and Ph.D. qualifications. All programs are accredited by leading regulatory bodies. Transparent processes, automated operations through ERP software, and dedicated resources for training and placements showcase the institution's commitment to excellence. The campus is a ragging and smoking-free environment, providing bus services, uniforms for new students, and separate hostel facilities.",
    duration: "Fulltime",
    date: "18 Jul 2019",
    college: "Guru Nanak College",
    location: "Dehradun, India",
    category: ["Pharmacy", "Medical"],
    experience: "Fresher",
    salary: 900,
    salary_duration: "Monthly",
    tags: ["java", "developer"],
    english_fluency: "Fluent",
    overview:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    videoid: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    courses:
      " The fees for these programs vary, ensuring accessibility for a broad spectrum of students. The institution prioritizes transparency in its fee structures and provides flexible payment options, acknowledging the diverse financial backgrounds of its students. This approach aims to make quality education accessible to all, fostering inclusivity and diversity within the student body. Students can explore a wide range of courses, each tailored to meet industry standards, with corresponding fees designed to accommodate individual financial circumstances.      .",

    ranking:
      "Our institution consistently secures impressive rankings, a testament to our unwavering commitment to academic excellence and holistic development. Recognized regionally and nationally, these rankings affirm our dedication to providing a top-notch education, encouraging cutting-edge research, and fostering an enriching learning environment for our students.",
    awards:
      "Our institution takes pride in its accolades, having received recognition for excellence in education and innovation. These awards underscore our commitment to delivering high-quality academic programs, fostering research, and promoting an inclusive learning environment. We have been honored for our contributions to the community and advancements in education methodology. These accolades motivate us to continually strive for excellence, ensuring that our students receive a world-class education and graduate well-prepared for their future endeavors.",
    hostel:
      "Our institution ensures a comfortable and secure living environment for students with separate hostel facilities for both male and female students. The hostels are well-equipped with modern amenities, providing a conducive atmosphere for focused study and recreation. Trained staff maintains discipline, and safety measures are prioritized. The hostel experience fosters a sense of community, facilitating cultural exchange and lifelong friendships. With a commitment to student welfare, we aim to create a home away from home, ensuring a positive and enriching residential experience during the academic journey.",
    opportunities:
      "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
    campus:
      "Our campus provides an ideal environment for academic and personal growth. Sprawling greenery and state-of-the-art infrastructure create a conducive atmosphere for learning. Well-equipped classrooms, modern laboratories, and a resource-rich library foster a dynamic educational experience. The campus is Wi-Fi enabled, promoting seamless connectivity for research and collaborative projects. Recreational facilities, including sports amenities and cultural spaces, encourage a balanced student life. Additionally, our commitment to safety and security ensures a peaceful environment. The vibrant campus life, coupled with engaging extracurricular activities, enriches the overall student experience, fostering a sense of community and camaraderie.",
    placement:
      "Our institution takes pride in its robust placement initiatives, facilitated by a dedicated Corporate Resource Centre (CRC). The CRC ensures that students are equipped with the skills and knowledge necessary for successful career placement. We have established strong ties with industry partners, leading to excellent placement records. Mock interviews, workshops, and internships are integral components of our placement preparation. Our alumni network further contributes to creating meaningful connections for job opportunities. Through these comprehensive efforts, we strive to empower our students for successful professional journeys, making them valuable contributors to their chosen fields upon graduation.      ",
    admission:
      "Admission to our esteemed institution follows a fair and transparent process. Prospective students can access detailed admission guidelines, ensuring clarity at every step. The selection criteria are merit-based, reflecting our commitment to academic excellence. Application procedures are streamlined, and information is readily available through our online portal. Our dedicated admission committee is always ready to assist and guide applicants through the process. With a focus on diversity and inclusivity, we welcome aspiring students to join our vibrant academic community, where they can embark on a journey of knowledge, skills, and personal growth.",
    faculty:"Our institution boasts a distinguished faculty drawn from premier institutions across India, setting high academic standards. With a significant number holding Master's and Ph.D. qualifications, they actively contribute to both teaching and research. Their expertise ensures a rigorous and insightful learning experience for students. The faculty's commitment to excellence extends beyond the classroom, guiding students in research endeavors and preparing them for real-world challenges. Their collective knowledge and dedication contribute significantly to the academic vibrancy of our institution, shaping the future leaders of tomorrow. ",

    overviewtable:[
      {
        specialization: "Short Name",
        annualfee: "GNC Dehradun",
      },
      {
        specialization: "Institute Type - Public/ Private/ Govt",
        annualfee: "Private",
      },
      {
        specialization: "State",
        annualfee: "Uttarakhand",
      },
      {
        specialization: "City",
        annualfee: "Dehradun",
      },
      {
        specialization: "Location/ Address",
        annualfee: "Jhajra, Chakrata Road",
      },
      {
        specialization: "Latitude",
        annualfee: "30.485096",
      },
      {
        specialization: "Longitude",
        annualfee: "74.502748",
      },
      {
        specialization: "Phone Numbers",
        annualfee: "7300900909",
      },
      {
        specialization: "Website",
        annualfee: "https://gncmh.com/",
      },
      {
        specialization: "Email Address",
        annualfee: "info@gncmh.com",
      },
      {
        specialization: "Establishment Year",
        annualfee: "2009",
      },
      {
        specialization: "University Affiliation",
        annualfee: "Uttarakhand Technical University, Uttarakhand Board of Technical Education Roorkee, Hemwanti Nandan Bahuguna Medical University",
      },
      {
        specialization: "Approval",
        annualfee: "Pharmacy Council of India , ParaMedical Council of India, All India Council of Technical Education,Indian Nursing Council",
      },
      {
        specialization: "Area",
        annualfee: "Education",
      },
     
    ],
      coursesAndFees: [
        {
          course: "Bachelor of Technology Computer Science & Engineering",
          specialization: "",
          annualFee: "Rs Rs.1,05,000",
          duration: "JEE Mains/UKSEE",
          eligibility: "Passed 10+2 examination with PCM.",
        },
        {
          course: "Bachelor of Business Administration (BBA) ",
          specialization: "",
          annualFee: "Rs Rs.33,000",
          duration: "Personal Interview",
          eligibility: "Passed 10+2 examination any Stream",
        },
        
        {
          course: "Bachelor of Hospital Administration (BHA) ",
          specialization: "",
          annualFee: "Rs Rs.33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB",
        },

        {
          course: "Bachelor of Commerce (B.Com.) ",
          specialization: "",
          annualFee: "Rs Rs.50,000",
          duration: "",
          eligibility: "Passed 10+2 examination with Commerce",
        },

        {
          course: "B.Sc. Computer Science",
          specialization: "",
          annualFee: "Rs Rs.25,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },
  
        {
          course: "B.Sc. Information Technology",
          specialization: "",
          annualFee: "Rs 25,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },

        {
          course: "Bachelor of Computer Application (BCA)",
          specialization: "",
          annualFee: "Rs 25,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },

        {
          course: "Bachelor Articial Intelligence",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },

        {
          course: "B.Sc. Data Science & Cyber Security",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },

        {
          course: "Bachelor of Fine Art (BFA) ",
          specialization: "",
          annualFee: "Rs 33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with any Stream",
        },
  
        {
          course: "Bachelor of Hotel Management (BHM) ",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination",
        },
  
        {
          course: "B.Sc. Biotechnology  ",
          specialization: "",
          annualFee: "Rs 33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
        {
          course: "B.Sc. Microbiology  ",
          specialization: "",
          annualFee: "Rs 33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
  
        {
          course: "B.Sc. Food Technology ",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
  
        {
          course: "B.Sc. CBZ",
          specialization: "",
          annualFee: "Rs 20,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB",
        },
  
        {
          course: "B.Sc. PCM ",
          specialization: "",
          annualFee: "Rs 20,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },
  
        {
          course: "B.Sc. Geology ",
          specialization: "",
          annualFee: "Rs 33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM",
        },
        {
          course: "B.Sc. Home Science ",
          specialization: "",
          annualFee: "Rs 33,000",
          duration: "",
          eligibility: "Passed 10+2 examination with any Stream",
        },
        {
          course: "B.Sc. Agriculture (Hons.)",
          specialization: "",
          annualFee: "Rs 59,000",
          duration: "",
          eligibility: "Passed 10+2 examination with any Stream",
        },
        {
          course: " B.Sc. Forestry (Hons.)  ",
          specialization: "",
          annualFee: "Rs 59,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
        {
          course: "Diploma in Pharmacy (D.Pharm) ",
          specialization: "",
          annualFee: "Rs 65,000",
          duration: "",
          eligibility: "Passed 10 or 10+2 examination with PCB/PCM",
        },
        {
          course: "Bachelor of Pharmacy (B.Pharm) ",
          specialization: "",
          annualFee: "Rs 85,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
        {
          course: "Lateral Entry in B.Pharm ",
          specialization: "",
          annualFee: "Rs 85,000",
          duration: "",
          eligibility: "Diploma in Pharmacy",
        },
        {
          course: "Bachelor of Medical Laboratory Technology (BMLT)",
          specialization: "",
          annualFee: "Rs 55,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM/B",
        },
        {
          course: "Bachelor of Medical Radio Diagnosis & Imaging Technology (BMRIT)",
          specialization: "",
          annualFee: "Rs 55,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB",
        },
        {
          course: "Bachelor of Science in Operation Theater Technology (B.Sc. OTT)",
          specialization: "",
          annualFee: "Rs 50,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB",
        },
        {
          course: "Bachelor of Science in Optometry (B.Sc. Opto)  ",
          specialization: "",
          annualFee: "Rs 55,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM/PCB",
        },
        {
          course: "Bachelor of Physiotherapy (BPT) ",
          specialization: "",
          annualFee: "Rs 55,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB/PCM",
        },
        {
          course: "Bachelor of Science in Nursing (Package With Hostel)",
          specialization: "",
          annualFee: "Rs 2,25,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCB",
        },
        {
          course: "General Nursing and Midwifery (Package With Hostel) - (GNM)",
          specialization: "",
          annualFee: "Rs 1,75,000",
          duration: "",
          eligibility: "Passed 10+2 examination with any stream with English Compulsory Subject",
        },
        {
          course: "Diploma in Dialysis Technology (DDT)",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination with any PCB/PCM",
        },
        {
          course: "Diploma in Articial Intelligence & Machine Learning (AI&ML)",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10+2 examination with PCM/PCB",
        },
        {
          course: "Diploma in Veterinary Hospital Management (DVHM)",
          specialization: "",
          annualFee: "Rs 40,000",
          duration: "",
          eligibility: "Passed 10th examination with science ",
        },
        {
          course: "Diploma in Hotel Mgmt. (DHM)",
          specialization: "",
          annualFee: "Rs 45,000",
          duration: "",
          eligibility: "Passed 10th in any stream from a recognized board",
        },
        {
          course: "Diploma in Event Mgmt. (DEM)",
          specialization: "",
          annualFee: "Rs 45,000",
          duration: "",
          eligibility: "Passed 10th in any stream from a recognized board",
        },
        {
          course: "Diploma in Fashion Designing (DFD)",
          specialization: "",
          annualFee: "Rs 45,000",
          duration: "",
          eligibility: "Passed 10th in any stream from a recognized board",
        },
        {
          course: "Diploma in Hospital Admin. (DHA) ",
          specialization: "",
          annualFee: "Rs 45,000",
          duration: "",
          eligibility: "Passed 10th examination with science",
        },
        {
          course: "Diploma in Nursing Administration (DNA)",
          specialization: "",
          annualFee: "Rs 45,000",
          duration: "",
          eligibility: "Passed 10th examination with science",
        },
        {
          course: "Master of Business Administration (MBA)",
          specialization: "",
          annualFee: "Rs 1,25,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Microbiology",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Biotechnology",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Food Technology",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Zoology",
          specialization: "",
          annualFee: "Rs 30,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Biochemistry",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Chemistry",
          specialization: "",
          annualFee: "Rs 30,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Physics",
          specialization: "",
          annualFee: "Rs 30,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Geology",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Botany",
          specialization: "",
          annualFee: "Rs 30,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Agronomy",
          specialization: "",
          annualFee: "Rs 70,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in (Ag) Seed Science & Technology",
          specialization: "",
          annualFee: "Rs 70,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Science in Horticulture",
          specialization: "",
          annualFee: "Rs 70,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Public Health",
          specialization: "",
          annualFee: "Rs 60,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Hospital Administration (MHA)",
          specialization: "",
          annualFee: "Rs 60,000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "Master of Articial Intelligence",
          specialization: "",
          annualFee: "Rs 49,500",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
        {
          course: "PGDM (Logistics & Supply Chain, Human Resource, Marketing, Finance, Management, Agriculture Bussiness Management, Al & Cyber Security)",
          specialization: "",
          annualFee: "Rs 1,25000",
          duration: "",
          eligibility: "Bachelors degree from a recognized university",
        },
       
    ],
    admissionDates: [
      {
        name: "Application Start Date",
        date: "01-Mar-2024",
      },
      {
        name: "Application End Date",
        date: "30-Jul-2024",
      },
      {
        name: "Date of Result Declaration",
        date: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        date: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        date: "01-Aug-2024",
      },
    ],
    campusinfo: [
      {
        name: "Registration Dates",
        info: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September 17, 2023",
      },
      {
        name: "Date of Result Declaration",
        info: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        info: "October 3, 2023",
      },
    ],
    placementinformation: [
      {
        name: "Placement Year",
        info: "2023",
      },
      {
        name: "Degree",
        info: "4 Years",
      },
      {
        name: "Number of Students Registered",
        info: "22",
      },
      {
        name: "Number of Companies Visited",
        info: "11",
      },
      {
        name: "Number of Students Placed",
        info: "22",
      },
      {
        name: "Number of Offers Made",
        info: "40",
      },
      {
        name: "Maximum Salary",
        info: "9 LPA",
      },
      {
        name: "Average Salary",
        info: "4.5 LPA",
      },
      {
        name: "Maximum Salary (International, if applicable)",
        info: "9 LPA",
      },
      {
        name: "Average Salary (International, if applicable)",
        info: "7 LPA",
      },
      {
        name: "Average Salary Percentage for Last 3 Years",
        info: "4 LPA",
      },
      {
        name: "Recruiter List",
        info: "Coral Pharmaceutical Selaqui, Unico Medicoz Selaqui, Sun Pharmaceutical Industries Ltd., Cipla Ltd., Divis Laboratories Ltd., Zydus Lifesciences Ltd., Biocon Ltd., Himalayan Drugs, Patanjali, Jubilant Pharma Ltd., Innovexia Life Sciences Pvt. Ltd., Alkem Laboratories, Lupin Limited, Piramal Enterprises Limited, Biophar Lifesciences Pvt. Ltd.",
      },
      {
        name: " Internship Details",
        info: "Natco Pharma Limited, Hyderabad, Lupin Pharma, ZIM LABORATORIES, Enaltech Pvt Ltd, Fussion Pvt Ltd,  Himalayan Drugs, Patanjali, Jubilant Pharma Ltd., Sun Pharmaceutical Industries Ltd., Piramal Enterprises Limited, Biophar Lifesciences Pvt. Ltd.and many more…..",
      },
      {
        name: "Placement Report",
        info: "",
      },
    ],
    opportunitiesinfo: [
      {
        name: "Registration Dates",
        info: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September 17, 2023",
      },
      {
        name: "Date of Result Declaration",
        info: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        info: "October 3, 2023",
      },
    ],
    awardsinfo: [
      {
        name: "Best Life Sciences, Allied Sciences, Applied Sciences, Agricultural Sciences & Medical Sciences College in India",
        info: "Today Research & Ratings Network Announces Winners of the Better India Education Awards",
      },
      {
        name: "Best Food Technology & Agricultural Sciences College in India",
        info: "WBR Corp",
      },
      {
        name: "Awarded Best Technical & Professional College in Uttarakhand (North India)",
        info: "Royal Brands Pvt Ltd.",
      },
      {
        name: "Awarded as The Best College in North India",
        info: "Career Connect",
      },
      {
        name: "Awarded Top Hotel Management Institute in India",
        info: "Competition Success Review",
      },
      {
        name: "Awarded Best Academic Leadership Award in IT & Management Education",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Life Science College in Uttarakhand ",
        info: "Time Research",
      },
      {
        name: "Awarded Best Leading Management & Technical Institution",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Centre of Excellence",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Emplacement College in India",
        info: "Praxis Media Private Limited",
      },
      {
        name: "Awarded Best Contribution in Value Education",
        info: "Econs",
      },
      {
        name: "Awarded Best B-School & Mass Comm.College in North India",
        info: "Brand Achiever",
      },
      {
        name: "Awarded Best Applied Sciences & Technical Institute in Uttarakhand",
        info: "Communication Multimedia and Infrastructure",
      },
      {
        name: "A++' College in India",
        info: "Pooja Movie Creations & Tgie Awards",
      },
      {
        name: "Awarded Most Popular Academic Institution of North India",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Best Agriculture Science College in North India",
        info: "Mediaz Group",
      },
      {
        name: "Best B School and Engineering College in India",
        info: "All India Technical and Management Council",
      },
      {
        name: "Best Mass Communication Journalism, Sciences and Management College in India",
        info: "BFIT Institute",
      },
      {
        name: "Awarded Best College for Science & Technology",
        info: "All India Technical and Management Council",
      },
      {
        name: "Life Time Achievement Award Listed India's Top 10 Academicians",
        info: "Ucost",
      },
      {
        name: "Excellent Research & Development College in India",
        info: "Entrepreneurship and Skill Development Association",
      },
    ],
    facultytable: [
      {
        name: "Dr. Vishal",
        Qualification: "Dept. of  Microbiology",
        Experience: "22 year",
        Specialization: "Agriculture microbiology, Biological Control, Plant growth promo. Rhizo bacteria, Fermentation Technology, Antimicrobial Activity of mediclinal plant, Microbial pathology.",
      },
      {
        name: "Dr. RD Saklani",
        Qualification: "Dept. of  Geology",
        Experience: "10 year",
        Specialization: "Sequence stratigraphy, Petroleum Geology, Ichnology, Disaster Management, Engg. Geology, Field Geology, Himalayan Geology & Western India (Kachchh & Rajasthan).",
      },
      {
        name: "Mr. S K Thakur",
        Qualification: "Dept. of  Statistics & Mathematics",
        Experience: "35 year",
        Specialization: "Statistics, International finance,  International Economics, Coorporates Law. ",
      },
      {
        name: "Dr. Neelesh",
        Qualification: "Dept. of  Microbiology",
        Experience: "02 year",
        Specialization: "Medical microbiology, General microbiology.",
      },
      {
        name: "Mrs. Preeti Sood",
        Qualification: "Dept. of  Hotel Management ",
        Experience: "23 year",
        Specialization: "Food and beverage,Front office, House Keeping, Kitchen.",
      },
      {
        name: "Mr. Gurmeet singh",
        Qualification: "Dept. of  Chemistry",
        Experience: "03 year",
        Specialization: "Waste Management, Water purification, Biofilms and filters, Polymers, Analytical Chemistry.",
      },
      {
        name: "Mr. Kashif Hussain",
        Qualification: "Dept. of  Pharmacy",
        Experience: "12 year",
        Specialization: "Pharmaceutical Chemistry.",
      },
      {
        name: "Mr. Javed Siddiqui",
        Qualification: "Dept. of  Paramedical ",
        Experience: "14 year",
        Specialization: "Clinical biochemistry, Pathology, Medical Microbiology.",
      },
      {
        name: "Ms. Rohita",
        Qualification: "Dept. of  Pharmacy",
        Experience: "01 year",
        Specialization: "Hospital and clinical pharmacy, Community pharmacy, Pharmacy practice, Social pharmacy.",
      },
      {
        name: "Dr. Manisha Singh",
        Qualification: "Dept. of  Paramedical ",
        Experience: "01 year",
        Specialization: "Orthopedics, Neurology.",
      },
      {
        name: "Dr. Kiran",
        Qualification: "Dept. of  Paramedical ",
        Experience: "05 year",
        Specialization: "Orthopedics",
      },
      {
        name: "Dr. Nidhi Chatterjee",
        Qualification: "Dept. of  Zoology",
        Experience: "18 year",
        Specialization: "Zoology, Fish and Fishries, Parasitology.",
      },
      {
        name: "Ms. Susmita Bahuguna ",
        Qualification: "Dept. of  Nursing",
        Experience: "01 year",
        Specialization: "Nursing fundamental, Social nursing",
      },
      {
        name: "Ms. Oshin",
        Qualification: "Dept. of  Nursing",
        Experience: "01 year",
        Specialization: "Psychology, Anatomy, Physiology",
      },

    ],
    hostelinfo: [
      {
        name: "Capacity",
        info: "1000",
      },
      {
        name: "Hostel Fees",
        info: "In-house Residential Accommodation (Optional) Charges (Note: - Hostel charges is per year which includes Vegetarian / Non-Vegetarian Food) ",
      },
      {
        name: "",
        info: "•	Standard Quad (Four Sharing Room) with Attached Toilet Rs.48000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe Quad (Four Sharing Room) with Attached Toilet Rs.58000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Three Sharing Room) with Attached Toilet Rs.68000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Three Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Two Sharing Room) with Attached Toilet Rs.73000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Two Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Super Deluxe (Two Sharing Room) with Attached Toilet Rs.88000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with LCD + Tata Sky + Attached Toilet Rs.95000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with A.C + LCD + Tata Sky + Attached Toilet Rs.105000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Hostel Enrolment & Furnishing Fee: Rs.5000/-(To be paid Once) Laundry Charges: Rs.4800/-per Year",
      },
      {
        name: "Mess Fees",
        info: "Includes in Hostel Fees",
      },
      {
        name: "Location (on-campus or off-campus)",
        info: "On-Campus",
      },
      {
        name: "Number of Rooms",
        info: "300",
      },
      {
        name: "Room Type (Occupancy basis)",
        info: "Single Sharing, Two sharing, Three Sharing, Four Sharing",
      },
      {
        name: "Hostel Facilities/ Amenities",
        info: "Wi-Fi, CCTV Surveillance, Security Guards, Warden, Indoor Stadium, Outdoor Playground, Gymnasium, etc.",
      },
    ],
    rankinginfo: [
      {
        name: "6384(University)",
        info: "The World, 2022",
      },
      {
        name: "2390(University)",
        info: "The Asia, 2022",
      },
      {
        name: "350(University)",
        info: "The India, 2022",
      },
      {
        name: "9(University)",
        info: "The Uttarakhand, 2022",
      },
      {
        name: "4(University)",
        info: "Dehradun, 2022",
      },
    ],
    reviewinfo: [
      {
        id: 1,
        rating: 4.7,
        desc: "It is a well created theme without much overhead. The created was very responsive and helpful.",
        user: user_1,
        name: "James Stephens",
        location: "China",
      },
      {
        id: 2,
        rating: 4.5,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_2,
        name: "John Doe",
        location: "Italy",
      },
      {
        id: 3,
        rating: 4.8,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_3,
        name: "Martin Jonas",
        location: "USA",
      },
    ],
  },





  {
    id: 2,
    logo: job_img_1,
    type: "Private",
    establishmentyear: "2009",
    Recognisedby: "UGC",
    Approvedby: "BCI, RCI, PCI, NCTE",
    state: "Uttarakhand",
    city: "Dehradun",
    Campusarea: "20+ acre",
    link: "https://gnc.edu.in/",
    email: "info@gncmh.com",
    founded: "",
    phone: "7300900909",
    feild: ["Education"],
    overviewsection:
      "The college, renowned for its distinguished faculty from top-tier institutions, excels with the region's highest number of faculty possessing Master's and Ph.D. qualifications. All programs are accredited by leading regulatory bodies. Transparent processes, automated operations through ERP software, and dedicated resources for training and placements showcase the institution's commitment to excellence. The campus is a ragging and smoking-free environment, providing bus services, uniforms for new students, and separate hostel facilities.",
    duration: "Fulltime",
    date: "18 Jul 2019",
    college: "BFIT",
    location: "Dehradun, India",
    category: ["Pharmacy", "Medical"],
    experience: "Fresher",
    salary: 900,
    salary_duration: "Monthly",
    tags: ["java", "developer"],
    english_fluency: "Fluent",
    overview:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    videoid: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    courses:
      " The fees for these programs vary, ensuring accessibility for a broad spectrum of students. The institution prioritizes transparency in its fee structures and provides flexible payment options, acknowledging the diverse financial backgrounds of its students. This approach aims to make quality education accessible to all, fostering inclusivity and diversity within the student body. Students can explore a wide range of courses, each tailored to meet industry standards, with corresponding fees designed to accommodate individual financial circumstances.      .",

    ranking:
      "Our institution consistently secures impressive rankings, a testament to our unwavering commitment to academic excellence and holistic development. Recognized regionally and nationally, these rankings affirm our dedication to providing a top-notch education, encouraging cutting-edge research, and fostering an enriching learning environment for our students.",
    awards:
      "Our institution takes pride in its accolades, having received recognition for excellence in education and innovation. These awards underscore our commitment to delivering high-quality academic programs, fostering research, and promoting an inclusive learning environment. We have been honored for our contributions to the community and advancements in education methodology. These accolades motivate us to continually strive for excellence, ensuring that our students receive a world-class education and graduate well-prepared for their future endeavors.",
    hostel:
      "Our institution ensures a comfortable and secure living environment for students with separate hostel facilities for both male and female students. The hostels are well-equipped with modern amenities, providing a conducive atmosphere for focused study and recreation. Trained staff maintains discipline, and safety measures are prioritized. The hostel experience fosters a sense of community, facilitating cultural exchange and lifelong friendships. With a commitment to student welfare, we aim to create a home away from home, ensuring a positive and enriching residential experience during the academic journey.",
    opportunities:
      "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
    campus:
      "Our campus provides an ideal environment for academic and personal growth. Sprawling greenery and state-of-the-art infrastructure create a conducive atmosphere for learning. Well-equipped classrooms, modern laboratories, and a resource-rich library foster a dynamic educational experience. The campus is Wi-Fi enabled, promoting seamless connectivity for research and collaborative projects. Recreational facilities, including sports amenities and cultural spaces, encourage a balanced student life. Additionally, our commitment to safety and security ensures a peaceful environment. The vibrant campus life, coupled with engaging extracurricular activities, enriches the overall student experience, fostering a sense of community and camaraderie.",
    placement:
      "Our institution takes pride in its robust placement initiatives, facilitated by a dedicated Corporate Resource Centre (CRC). The CRC ensures that students are equipped with the skills and knowledge necessary for successful career placement. We have established strong ties with industry partners, leading to excellent placement records. Mock interviews, workshops, and internships are integral components of our placement preparation. Our alumni network further contributes to creating meaningful connections for job opportunities. Through these comprehensive efforts, we strive to empower our students for successful professional journeys, making them valuable contributors to their chosen fields upon graduation.      ",
    admission:
      "Admission to our esteemed institution follows a fair and transparent process. Prospective students can access detailed admission guidelines, ensuring clarity at every step. The selection criteria are merit-based, reflecting our commitment to academic excellence. Application procedures are streamlined, and information is readily available through our online portal. Our dedicated admission committee is always ready to assist and guide applicants through the process. With a focus on diversity and inclusivity, we welcome aspiring students to join our vibrant academic community, where they can embark on a journey of knowledge, skills, and personal growth.",
    faculty:"Our institution boasts a distinguished faculty drawn from premier institutions across India, setting high academic standards. With a significant number holding Master's and Ph.D. qualifications, they actively contribute to both teaching and research. Their expertise ensures a rigorous and insightful learning experience for students. The faculty's commitment to excellence extends beyond the classroom, guiding students in research endeavors and preparing them for real-world challenges. Their collective knowledge and dedication contribute significantly to the academic vibrancy of our institution, shaping the future leaders of tomorrow. ",

    overviewtable:[
      {
        specialization: "Short Name",
        annualfee: "BFIT 2.0 ",
      },
      {
        specialization: "Institute Type - Public/ Private/ Govt",
        annualfee: "Private",
      },
      {
        specialization: "State",
        annualfee: "Uttarakhand",
      },
      {
        specialization: "City",
        annualfee: "Dehradun",
      },
      {
        specialization: "Location/ Address",
        annualfee: "Suddhowala",
      },
      {
        specialization: "Latitude",
        annualfee: "30.33387.",
      },
      {
        specialization: "Longitude",
        annualfee: "77.9780399.",
      },
      {
        specialization: "Phone Numbers",
        annualfee: "7300900909",
      },
      {
        specialization: "Website",
        annualfee: "https://www.bfitdoon.com/about-bfit2-0/",
      },
      {
        specialization: "Email Address",
        annualfee: "info@bfitdoon.com, admission@bfitdoon.com",
      },
      {
        specialization: "Establishment Year",
        annualfee: "2002",
      },
      {
        specialization: "University Affiliation",
        annualfee: "Hemwanti Nandan Bahuguna Gargwal Central University,SRI DEV SUMAN UTTARAKHAND UNIVERSITY,UTTARAKHAND TECHNICAL UNIVERSITY , UTTARAKHAND BOARD OF TECHNICAL EDUCATION Roorkee ",
      },
      {
        specialization: "Approval",
        annualfee: "University Grant Commission & Ministry of H.R.D. Human Resource Development Govt. of India, All India Council for Technical Education",
      },
      {
        specialization: "Area",
        annualfee: "Education",
      },
     
    ],
      coursesAndFees: [
      {
        course: "",
        specialization: "B.Sc. Biotechnology ",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility: "Passed 10+2 examination with PCB/PCM.",
      },
      {
        course: "",
        specialization: "B.Sc. Microbiology",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility: "PCB",
      },
      {
        course: "",
        specialization: "B.Sc. Food Technology ",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        course: "",
        specialization: "B.Sc. Chemistry, Botany, Zoology/ Physics, Chemistry, Mathematics",
        annualFee: "Rs 1,73,099",
        duration: "1",
        eligibility:
          "For B.Sc.PCM- PCM with and for B.Sc.CBZ",
      },
      {
        course: "",
        specialization: "B.Sc. Statistics With Harvard University Data Scientist",
        annualFee: "Rs 2,48,099",
        duration: "1",
        eligibility: "Passed 10+2 examination with PCB.",
      },
      {
        course: "",
        specialization: "B.Sc. Geology",
        annualFee: "Rs 2,48,099",
        duration: "1",
        eligibility:
          "PCM/PCB",
      },
      {
        course: "",
        specialization: "B.Sc. Economics With Harvard University Data Scientist ",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility:
          "Passed 10+2 examination with PCM.",
      },
      {
        course: "",
        specialization: "B.Sc.  Home Science",
        annualFee: "Rs 2,03,099",
        duration: "1",
        eligibility:
          "Passed 10+2 examination with PCM/PCM.",
      },
      {
        course: "",
        specialization: "B.Sc. Hons. Agriculture",
        annualFee: "Rs 2,48,099",
        duration: "1",
        eligibility: "PCB/PCM",
      },
      {
        course: "",
        specialization: "B.Sc. Horticulture",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility:
          "Passed 10+2 examination with PCB/PCM.",
      },
      {
        course: "",
        specialization: "B.Sc. Forestry",
        annualFee: "Rs 2,18,099",
        duration: "1",
        eligibility:
          "Passed 10+2 examination with PCB/PCM.",
      },
      {
        course: "",
        specialization: "M.Sc. Biotechnology",
        annualFee: "Rs1,71,799",
        duration: "1",
        eligibility: "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Microbiology",
        annualFee: "Rs 1,71,799",
         duration: "1",
        eligibility: "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Food Technology",
        annualFee: "Rs 1,71,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Zoology",
        annualFee: "Rs 1,31,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Chemistry",
        annualFee: "Rs 1,31,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Physics Astro/Nuclear Physics",
        annualFee: "Rs 1,31,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Mathematics",
        annualFee: "Rs 1,11,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Geology",
        annualFee: "Rs 1,91,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Environmental Science Commercial Cultivation/ Remote Sensing and GIS /Solid Waste Management",
        annualFee: "Rs 1,11,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Botany",
        annualFee: "Rs 1,21,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Statistics ",
        annualFee: "Rs  1,91,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Biochemistry ",
        annualFee: "Rs 1,51,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Agronomy",
        annualFee: "Rs 1,91,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Seed Science",
        annualFee: "Rs 1,81,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Forestry",
        annualFee: "Rs 1,71,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "M.Sc. Horticulture",
        annualFee: "Rs 1,81,799",
        duration: "1",
        eligibility:
          "Bachelors degree",
      },
      {
        course: "",
        specialization: "Master of Public Health (MPH)",
        annualFee: "Rs 1,81,799",
        duration: "1",
        eligibility:
          "Any Graduate",
      },
      {
        course: "",
        specialization: "Master of Hospital Administration (MHA)",
        annualFee: "Rs 1,81,799",
        duration: "1",
        eligibility:
          "Any Graduate",
      },
    ],
    admissionDates: [
      {
        name: "Application Start Date",
        date: "01-Mar-2024",
      },
      {
        name: "Application End Date",
        date: "30-Jul-2024",
      },
      {
        name: "Date of Result Declaration",
        date: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        date: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        date: "01-Aug-2024",
      },
    ],
    campusinfo: [
      {
        name: "Registration Dates",
        info: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September 17, 2023",
      },
      {
        name: "Date of Result Declaration",
        info: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        info: "October 3, 2023",
      },
    ],
    placementinformation: [
      {
        name: "Placement Year",
        info: "2023",
      },
      {
        name: "Degree",
        info: "4 Years",
      },
      {
        name: "Number of Students Registered",
        info: "22",
      },
      {
        name: "Number of Companies Visited",
        info: "11",
      },
      {
        name: "Number of Students Placed",
        info: "22",
      },
      {
        name: "Number of Offers Made",
        info: "40",
      },
      {
        name: "Maximum Salary",
        info: "9 LPA",
      },
      {
        name: "Average Salary",
        info: "4.5 LPA",
      },
      {
        name: "Maximum Salary (International, if applicable)",
        info: "9 LPA",
      },
      {
        name: "Average Salary (International, if applicable)",
        info: "7 LPA",
      },
      {
        name: "Average Salary Percentage for Last 3 Years",
        info: "4 LPA",
      },
      {
        name: "Recruiter List",
        info: "Coral Pharmaceutical Selaqui, Unico Medicoz Selaqui, Sun Pharmaceutical Industries Ltd., Cipla Ltd., Divis Laboratories Ltd., Zydus Lifesciences Ltd., Biocon Ltd., Himalayan Drugs, Patanjali, Jubilant Pharma Ltd., Innovexia Life Sciences Pvt. Ltd., Alkem Laboratories, Lupin Limited, Piramal Enterprises Limited, Biophar Lifesciences Pvt. Ltd.",
      },
      {
        name: " Internship Details",
        info: "Natco Pharma Limited, Hyderabad, Lupin Pharma, ZIM LABORATORIES, Enaltech Pvt Ltd, Fussion Pvt Ltd,  Himalayan Drugs, Patanjali, Jubilant Pharma Ltd., Sun Pharmaceutical Industries Ltd., Piramal Enterprises Limited, Biophar Lifesciences Pvt. Ltd.and many more…..",
      },
      {
        name: "Placement Report",
        info: "",
      },
    ],
    opportunitiesinfo: [
      {
        name: "Registration Dates",
        info: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September 17, 2023",
      },
      {
        name: "Date of Result Declaration",
        info: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        info: "October 3, 2023",
      },
    ],
    awardsinfo: [
      {
        name: "Best Life Sciences, Allied Sciences, Applied Sciences, Agricultural Sciences & Medical Sciences College in India",
        info: "Today Research & Ratings Network Announces Winners of the Better India Education Awards",
      },
      {
        name: "Best Food Technology & Agricultural Sciences College in India",
        info: "WBR Corp",
      },
      {
        name: "Awarded Best Technical & Professional College in Uttarakhand (North India)",
        info: "Royal Brands Pvt Ltd.",
      },
      {
        name: "Awarded as The Best College in North India",
        info: "Career Connect",
      },
      {
        name: "Awarded Top Hotel Management Institute in India",
        info: "Competition Success Review",
      },
      {
        name: "Awarded Best Academic Leadership Award in IT & Management Education",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Life Science College in Uttarakhand ",
        info: "Time Research",
      },
      {
        name: "Awarded Best Leading Management & Technical Institution",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Centre of Excellence",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Emplacement College in India",
        info: "Praxis Media Private Limited",
      },
      {
        name: "Awarded Best Contribution in Value Education",
        info: "Econs",
      },
      {
        name: "Awarded Best B-School & Mass Comm.College in North India",
        info: "Brand Achiever",
      },
      {
        name: "Awarded Best Applied Sciences & Technical Institute in Uttarakhand",
        info: "Communication Multimedia and Infrastructure",
      },
      {
        name: "A++' College in India",
        info: "Pooja Movie Creations & Tgie Awards",
      },
      {
        name: "Awarded Most Popular Academic Institution of North India",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Best Agriculture Science College in North India",
        info: "Mediaz Group",
      },
      {
        name: "Best B School and Engineering College in India",
        info: "All India Technical and Management Council",
      },
      {
        name: "Best Mass Communication Journalism, Sciences and Management College in India",
        info: "BFIT Institute",
      },
      {
        name: "Awarded Best College for Science & Technology",
        info: "All India Technical and Management Council",
      },
      {
        name: "Life Time Achievement Award Listed India's Top 10 Academicians",
        info: "Ucost",
      },
      {
        name: "Excellent Research & Development College in India",
        info: "Entrepreneurship and Skill Development Association",
      },
    ],
    facultytable: [
      {
        name: "Dr. RBP Singh",
        Qualification: "Dept. of  Agriculture & Allied Sciences",
        Experience: "26 year",
        Specialization: "Water, Soil- Quality monitoring and assessment, Livehood Generation Programme- Mushroom Cultivation, Organic Farming, MAP cultivation, Culnary Herb Cultivation. ",
      },
      {
        name: "Dr. Vishal",
        Qualification: "Dept. of  Microbiology",
        Experience: "22 year",
        Specialization: "Agriculture microbiology, Biological Control, Plant growth promo. Rhizo bacteria, Fermentation Technology, Antimicrobial Activity of mediclinal plant, Microbial pathology.",
      },
      {
        name: "zDr. RD Saklani",
        Qualification: "Dept. of  Geology",
        Experience: "10 year",
        Specialization: "Sequence stratigraphy, Petroleum Geology, Ichnology, Disaster Management, Engg. Geology, Field Geology, Himalayan Geology & Western India (Kachchh & Rajasthan).",
      },
      {
        name: "Dr. Shubramanian",
        Qualification: "Dept. of  Zoology",
        Experience: "26 year",
        Specialization: "Anatomy and Physiology, Ecology and Environment.",
      },
      {
        name: "Mr. S K Thakur",
        Qualification: "Dept. of  Statistics & Mathematics",
        Experience: "35 year",
        Specialization: "Statistics, International finance,  International Economics, Coorporates Law. ",
      },
      {
        name: "Dr. Narayani",
        Qualification: "Dept. of  Biochemistry",
        Experience: "06 year",
        Specialization: "Enzyme Kinetics, Antioxidants, Biotic and Abiotic stress, NGS, GWAS.",
      },
      {
        name: "Dr. Neelesh",
        Qualification: "Dept. of  Microbiology",
        Experience: "02 year",
        Specialization: "Medical microbiology, General microbiology.",
      },
      {
        name: "Dr. Tawseef Ahmad Mir",
        Qualification: "Dept. of  Botany",
        Experience: "02 year",
        Specialization: "Ethnobotany, Taxonomy, Phytochemistry, Traditional knowledge, Medicinal plants.",
      },
      {
        name: "Dr. Muatasim Jan",
        Qualification: "Dept. of  Botany",
        Experience: "02 year",
        Specialization: "Ethnobotany, Ethanogynecology, Traditional knowledge, Ethnobotany medicine,Medicinal plants.",
      },
      {
        name: "Mrs. Preeti Sood",
        Qualification: "Dept. of  Hotel Management ",
        Experience: "23 year",
        Specialization: "Food and beverage,Front office, House Keeping, Kitchen.",
      },
      {
        name: "Er. Manendra Singh  ",
        Qualification: "Dept. of  Biotechnology",
        Experience: "08 year",
        Specialization: "Biochemical Engg., Bioprocess Technology, Fermentation Technology, Upstream and downstream Process, Chromatography, Unit Process and Unit Operation. ",
      },
      {
        name: "Mr. Mamlesh Semwal",
        Qualification: "Dept. of  Geology",
        Experience: "12 year",
        Specialization: "Geomorphology, Physical Geology, Engg. Geology, Field Geology.",
      },
      {
        name: "Ms. Priyanka Juyal",
        Qualification: "Dept. of  Agriculture & Allied Sciences",
        Experience: "02 year",
        Specialization: "Weed management, Crop production technology, Protected Agriculture, Organic Farming.",
      },
      {
        name: "Mr. Gurmeet singh",
        Qualification: "Dept. of  Chemistry",
        Experience: "03 year",
        Specialization: "Waste Management, Water purification, Biofilms and filters, Polymers, Analytical Chemistry.",
      },
      {
        name: "Mr. Vaibhav Singh",
        Qualification: "Dept. of  Zoology",
        Experience: "03 year",
        Specialization: "Entamology, Medical Entamology, Agriculture Entamology.",
      },
      {
        name: "Ms. Ruby",
        Qualification: "Dept. of  Management & Technology",
        Experience: "01 year",
        Specialization: "Marketing and Finance, Merger and Acquisition, Management accounting, Sales Vs Marketing.",
      },
      {
        name: "Ms. Varsha",
        Qualification: "Dept. of  Food Technology",
        Experience: "02 year",
        Specialization: "Food snacks, Food Preservation, Food Processing.",
      },
      {
        name: "Mr. Javed Siddiqui",
        Qualification: "Dept. of  Paramedical ",
        Experience: "14 year",
        Specialization: "Clinical biochemistry, Pathology, Medical Microbiology.",
      },
      {
        name: "Ms. Komal Sharma",
        Qualification: "Dept. of  Food Technology",
        Experience: "03 year",
        Specialization: "Food nutrition, Hotel Management, Food Science.",
      },
      {
        name: "Ms. Yashasvi",
        Qualification: "Dept. of  Biotechnology",
        Experience: "01 year",
        Specialization: "Plant tissue culture, Bioanlytical Technique, Medicinal plant evalution.",
      },
      {
        name: "Dr.Vishal Kamboj",
        Qualification: "Dept. of  Environmental Science",
        Experience: "2.5 year",
        Specialization: "Water Quality, Fresh water ecology, Environment Pollution and Solid Waste Management.",
      },
      {
        name: "Dr. Manisha Singh",
        Qualification: "Dept. of  Paramedical ",
        Experience: "01 year",
        Specialization: "Orthopedics, Neurology.",
      },
      {
        name: "Dr. Anita Chauhan",
        Qualification: "Dept. of  Forestry & Horticulture",
        Experience: "30 year",
        Specialization: "Forest Ecology, Botany, Forestry, Horticulture.",
      },
      {
        name: "Dr. Kiran",
        Qualification: "Dept. of  Paramedical ",
        Experience: "05 year",
        Specialization: "Orthopedics",
      },
      {
        name: "Dr. Peter",
        Qualification: "Dept. of  Botany",
        Experience: "27 year",
        Specialization: "General Plant Pathology, Plant Protection, Plant-Pollutant Interaction, Plant-Pathogen Interaction,Plant-Pathogen-Pollutant Interaction, Plant Growth Promoting Microorganism,  Biofertilizers, Molecular Plant Pathology and Endophytes. ",
      },
      {
        name: "Dr. Rakesh",
        Qualification: "Dept. of  Agriculture & Allied Sciences",
        Experience: "05 year",
        Specialization: "Seed Science and Technology",
      },
      {
        name: "Dr. Nidhi Chatterjee",
        Qualification: "Dept. of  Zoology",
        Experience: "18 year",
        Specialization: "Zoology, Fish and Fishries, Parasitology.",
      },
      
    ],
    hostelinfo: [
      {
        name: "Capacity",
        info: "1000",
      },
      {
        name: "Hostel Fees",
        info: "In-house Residential Accommodation (Optional) Charges (Note: - Hostel charges is per year which includes Vegetarian / Non-Vegetarian Food) ",
      },
      {
        name: "",
        info: "•	Standard Quad (Four Sharing Room) with Attached Toilet Rs.48000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe Quad (Four Sharing Room) with Attached Toilet Rs.58000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Three Sharing Room) with Attached Toilet Rs.68000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Three Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Two Sharing Room) with Attached Toilet Rs.73000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Two Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Super Deluxe (Two Sharing Room) with Attached Toilet Rs.88000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with LCD + Tata Sky + Attached Toilet Rs.95000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with A.C + LCD + Tata Sky + Attached Toilet Rs.105000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Hostel Enrolment & Furnishing Fee: Rs.5000/-(To be paid Once) Laundry Charges: Rs.4800/-per Year",
      },
      {
        name: "Mess Fees",
        info: "Includes in Hostel Fees",
      },
      {
        name: "Location (on-campus or off-campus)",
        info: "On-Campus",
      },
      {
        name: "Number of Rooms",
        info: "300",
      },
      {
        name: "Room Type (Occupancy basis)",
        info: "Single Sharing, Two sharing, Three Sharing, Four Sharing",
      },
      {
        name: "Hostel Facilities/ Amenities",
        info: "Wi-Fi, CCTV Surveillance, Security Guards, Warden, Indoor Stadium, Outdoor Playground, Gymnasium, etc.",
      },
    ],
    rankinginfo: [
      {
        name: "6384(University)",
        info: "The World, 2022",
      },
      {
        name: "2390(University)",
        info: "The Asia, 2022",
      },
      {
        name: "350(University)",
        info: "The India, 2022",
      },
      {
        name: "9(University)",
        info: "The Uttarakhand, 2022",
      },
      {
        name: "4(University)",
        info: "Dehradun, 2022",
      },
    ],
    reviewinfo: [
      {
        id: 1,
        rating: 4.7,
        desc: "It is a well created theme without much overhead. The created was very responsive and helpful.",
        user: user_1,
        name: "James Stephens",
        location: "China",
      },
      {
        id: 2,
        rating: 4.5,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_2,
        name: "John Doe",
        location: "Italy",
      },
      {
        id: 3,
        rating: 4.8,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_3,
        name: "Martin Jonas",
        location: "USA",
      },
    ],
  },







  {
    id: 3,
    logo: job_img_1,
    type: "Private",
    establishmentyear: "2003",
    Recognisedby: "UGC",
    Approvedby: "UGC,NAAC",
    state: "Uttarakhand",
    city: "Dehradun",
    Campusarea: "20+ acre",
    link: "https://www.upes.ac.in/",
    email: "enrollments@upes.ac.in",
    founded: "",
    phone: "",
    feild: ["Education"],
    overviewsection:
      "To be an institution of global standing for developing professionally competent talent contributing to nation building.UPES Dehradun NIRF Ranking 2023 has been officially announced. The University of Petroleum Studies has got the 52nd rank in the NIRF University Ranking list. Also, as per the NIRF Management Ranking list 2023, the university has got the 39th position. The university also received the 54th rank in the NIRF Engineering Ranking 2023. The QS Asia University Rankings 2023 place the University of Petroleum and Energy Studies ninth among universities overall. The IACBE, NBA, NAAC, UGC, Bar Council of India, and Pharmacy Council of India all accredited the university, and it has received an A grade from NAAC. ",
    duration: "Fulltime",
    date: "18 Jul 2019",
    college: "University Of Petroleum And Energy Studies",
    location: "Dehradun, India",
    category: ["+91 7456000100"],
    experience: "Fresher",
    salary: 900,
    salary_duration: "Monthly",
    tags: ["java", "developer"],
    english_fluency: "Fluent",
    overview:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    videoid: "EPEePMcbWrI?si",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    courses:
      " The university offers 20+ courses at the UG and PG levels. The B.Tech course is the flagship course offered by the university and the admissions to B.Tech are based on exams like UPESEAT (University of Petroleum & Energy Studies Engineering Aptitude Test) and JEE Mains. MBA is another popular course among the UPES Dehradun courses and admissions are based on exams like UPESMET (UPES Management Entrance Test), CAT, MAT, XAT, CMAT, NMAT, GMAT, etc. The courses offered along with the fees are mentioned below for the reference of aspiring students. ",

    ranking:
      "The top universities in the world are listed in the QS World University Rankings. This year the University of Petroleum and Energy Studies QS Ranking 2023 is in the band 243 and the overall score is 22.5. Apart from this, various other rankings of the university are mentioned below:",
    awards:
      "The University of Petroleum and Energy Sciences Dehradun has been awarded a five-star rating overall by QS. It has a five-star rating in teaching, employability, Academic development, facilities, and program strength.",    
      hostel:
      "Our institution ensures a comfortable and secure living environment for students with separate hostel facilities for both male and female students. The hostels are well-equipped with modern amenities, providing a conducive atmosphere for focused study and recreation. Trained staff maintains discipline, and safety measures are prioritized. The hostel experience fosters a sense of community, facilitating cultural exchange and lifelong friendships. With a commitment to student welfare, we aim to create a home away from home, ensuring a positive and enriching residential experience during the academic journey.",
    opportunities:
      "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
    campus:
      "Our campus provides an ideal environment for academic and personal growth. Sprawling greenery and state-of-the-art infrastructure create a conducive atmosphere for learning. Well-equipped classrooms, modern laboratories, and a resource-rich library foster a dynamic educational experience. The campus is Wi-Fi enabled, promoting seamless connectivity for research and collaborative projects. Recreational facilities, including sports amenities and cultural spaces, encourage a balanced student life. Additionally, our commitment to safety and security ensures a peaceful environment. The vibrant campus life, coupled with engaging extracurricular activities, enriches the overall student experience, fostering a sense of community and camaraderie.",
    placement:
      "The university has recently concluded the placement drive for 2022 and released the official data. The UPES Dehradun placements B.Tech were maximum with the highest package of Rs 50.09 lakh per annum being awarded to a B.Tech Computer Science student. More than 3800 students were placed in multinational companies. The highest package offered in 2022 was a 25% increase as compared to 2021. The overall average package was Rs 8.37 lakh per annum and the average package offered for UPES Dehradun placements MBA was Rs 6.48 lakh per annum. Moreover, the placement rate in 2022 was 27% more as compared to the placements in 2021. The various placement statistics are mentioned below.",
    admission:
      "The UPES Dehradun admission process for various courses is based on the scores of national-level entrance examinations. The important dates for the same are mentioned below.  ",
    faculty:"UPES Uttarakhand has 7 schools to provide advanced courses. The faculty members at the University of Petroleum and Energy Studies are very educated and always willing to support students. The faculty members have also achieved awards and were certificated for their performances. UPES Dehradun faculty list is provided below with their name and designation. ",

    overviewtable:[
      {
        specialization: "Short Name",
        annualfee: "UPES",
      },
      {
        specialization: "Institute Type - Public/ Private/ Govt",
        annualfee: "Private",
      },
      {
        specialization: "State",
        annualfee: "Uttarakhand",
      },
      {
        specialization: "City",
        annualfee: "Dehradun",
      },
      {
        specialization: "Location/ Address",
        annualfee: "Bidholi, Via-Prem Nagar, Vikasnagar, Uttarakhand 248007",
      },
     
      {
        specialization: "Phone Numbers",
        annualfee: "",
      },
      {
        specialization: "Website",
        annualfee: "https://www.upes.ac.in/",
      },
      {
        specialization: "Email Address",
        annualfee: "info@bfitdoon.com, admission@bfitdoon.com",
      },
      {
        specialization: "Establishment Year",
        annualfee: "2002",
      },
      {
        specialization: "University Affiliation",
        annualfee: "Hemwanti Nandan Bahuguna Gargwal Central University,SRI DEV SUMAN UTTARAKHAND UNIVERSITY,UTTARAKHAND TECHNICAL UNIVERSITY , UTTARAKHAND BOARD OF TECHNICAL EDUCATION Roorkee ",
      },
      {
        specialization: "Approval",
        annualfee: "University Grant Commission & Ministry of H.R.D. Human Resource Development Govt. of India, All India Council for Technical Education",
      },
      {
        specialization: "Area",
        annualfee: "Education",
      },
      {
        specialization: "Top Recruiters",
        annualfee: "Accenture, AIS, Xebia, Exxon Mobil, Hilti, Honeywell, Dell R&D, Nestle, L&T Infotech, Maruti, Philips Carbon Black, Reliance Industries, Tata Technologies, Tetra Pak, Jubilant, Ambuja Cements, Prism Cements, Bechtel",
      },
    

    ],
      coursesAndFees: [
      {
        course: "B.Tech(CSE)",
        specialization: "Artificial Intelligence and Machine Learning",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Bigdata",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Data Science",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Cloud Computing and Virtualization Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Cyber Security & Digital Forensics",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE Mains / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% Marks in Class X and XII. Along with 50 % in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "DevOps",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Full Stack Development",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Internet of Things (IoT)",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
    
      {
        course: "",
        specialization: "Graphics & Gaming",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Applied Petroleum Engineering)",
        specialization: "Energy Systems and Storage",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Gas Engineering Informatics",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Intelligent Petroleum Systems",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Aerospace Engineering)",
        specialization: "Defence Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Avionics",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Space Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Chemical Engineering)",
        specialization: "Energy Systems and Storage",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Refining and Petrochemicals",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Digitalization of Process Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Electronics and Computer Engineering)",
        specialization: "Microelectronics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "5G and 6G Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "AI & ML Applications",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Wearable Devices",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "E-Vehicle & Industrial drives",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Fire and Safety Engineering)",
        specialization: "AI & ML",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XIIw",
      },
      {
        course: "",
        specialization: "ESG and Sustainability",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Mechanical Engineering)",
        specialization: "Advanced Manufacturing",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Mechatronics",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Defence Technology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Civil Engineering)",
        specialization: "Transportation Engineering",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Environmental Engineering",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "Construction Management",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Sustainability Engineering)",
        specialization: "Circular Economy",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and",
      },
      {
        course: "",
        specialization: "Sustainability Management",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Automotive Engineering)",
        specialization: "E – Mobility",
        annualFee: "2,68,000 - 4,10,000",
        duration: "UPESEAT / JEE / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% marks in Classes X and XII. with 50% in PCM (Physics/Chemistry and Mathematics) in Class XII",
      },
      {
        course: "",
        specialization: "",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "Bachelor of Computer Application (BCA) / B.Sc. (Computer Science)",
        specialization: "Data Science",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Artificial Intelligence and Machine Learning",
        annualFee: "1,76,000 - 2,20,000",
        duration: "Personal Interview",
        eligibility: "50% marks in class X and XII with Mathematics / Computer Science / Information Technology as one of the major Subject in Class XII",
      },
      {
        course: "",
        specialization: "Cyber Security and Digital Forensics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Des",
        specialization: "Game Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Animation and VFX",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Graphics & Communication Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "User Experience and Interaction Design",
        annualFee: "4,94,000",
        duration: "National Level (NID/NIFT/UCEED/JEE) / UPESDAT / Board Merit/ CUET followed by Portfolio Presentation & Interview",
        eligibility: "Minimum 50% marks at X and XII any Stream",
      },
      {
        course: "",
        specialization: "Product Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Mobility and Vehicle Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Interior and Retail Space Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "BA LL.B (Hons.) BBA LLB (Hons.) B.Com. LLB (Hons.)",
        specialization: "Energy & Environmental Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Constitutional Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Criminal Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Corporate Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Banking & Insolvency laws",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Investment and Trade Law",
        annualFee: "3,48,000 - 3,64,000",
        duration: "ULSAT / CLAT /LSAT- India / Board Marks/ CUET",
        eligibility: "Minimum 50% Marks at Higher and Senior Secondary level (X and XII)",
      },
      {
        course: "",
        specialization: "Taxation Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Disruptive Technologies Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Industrial Relations Law and the Constitution",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Intellectual Property Rights",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "LL.B (3 Years)",
        specialization: "Constitutional Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Criminal Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Corporate Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Taxation Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Intellectual Property Rights",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Energy & Environmental Law",
        annualFee: "3,98,000",
        duration: "Personal Interview",
        eligibility: "Minimum 50% Marks at Higher and Senior Secondary level (X, XII) and Graduation in any stream.",
      },
      {
        course: "",
        specialization: "Banking & Insolvency laws",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Investment and Trade Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Disruptive Technologies Law",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Industrial Relations Law and the Constitution",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Pharma",
        specialization: "",
        annualFee: "2,16,000",
        duration: "UPESPAT / JEE- Mains / Board Merit / NEET",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "B.Tech (Food Technology)",
        specialization: "Food Biotechnology/Plant Engineering",
        annualFee: "3,86,000",
        duration: "UPESEAT / JEE Mains / Board Merit / SAT/CUET",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },  
      {
        course: "B.Tech (Biotechnology)",
        specialization: "Pharmaceutical Biotechnology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Genomics and Biosimilars",
        annualFee: "3,86,000",
        duration: "UPESEAT / JEE Mains / Board Merit / SAT/CUET",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "",
        specialization: "Plant Biotechnology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      
      {
        course: "",
        specialization: "Bioinformatics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Tech (Biomedical Engineering)",
        specialization: "Medical Devices",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Biomaterials",
        annualFee: "3,86,000",
        duration: "UPESEAT / JEE Mains / Board Merit / SAT/ CUET",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "",
        specialization: "Prosthetics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Medical Diagnostics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Sc. Food Nutrition and Dietetics",
        specialization: "Dietetics and Holistic wellness",
        annualFee: "1,62,000",
        duration: "Personal Interview",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "",
        specialization: "Nutraceutical and Nutritional policy.",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Sc. Microbiology",
        specialization: "Food and Environmental Microbiology",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Medical and Pharmaceutical Microbiology",
        annualFee: "1,62,000",
        duration: "Personal Interview",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "B.Sc. Clinical Research",
        specialization: "Regulatory Affairs",
        annualFee: "1,62,000",
        duration: "Personal Interview",
        eligibility: "Minimum 50% Marks at X & XII with Physics, Chemistry, Biology/ Math’s, and English as a Major Subject in XII",
      },
      {
        course: "",
        specialization: "Clinical Pharmacokinetics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "BA (Journalism and Mass Communication) (Digital)",
        specialization: "Social Media and Search Engine Optimization",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Data, Analytics and Visualisation",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Media Management, Public Policy and Strategic Communications",
        annualFee: "2,18,000",
        duration: "Personal Interview",
        eligibility: "50% 10th & 12th Any Stream",
      },
      {
        course: "",
        specialization: "Digital Publishing/Website Management",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Sc. (Hons.) Economics with Data Science (3 + 1)*",
        specialization: "",
        annualFee: "3,66,000",
        duration: "Personal Interview/ Valid SAT Score /CUE",
        eligibility: "50% in 10th & 12th ",
      },
      {
        course: "B.Sc. (Hons.) Psychology and Behaviour (3 + 1)*",
        specialization: "",
        annualFee: "3,66,000",
        duration: "Personal Interview/ Valid SAT Score /CUET",
        eligibility: "50% in 10th & 12th",
      },
      {
        course: "B.Sc. (Hons.) Economics and Finance (3 + 1)*",
        specialization: "",
        annualFee: "3,66,000",
        duration: "Personal Interview/ Valid SAT Score /CUET",
        eligibility: "50% in 10th & 12th",
      },
      {
        course: "BA (Hons.) English",
        specialization: "",
        annualFee: "1,96,000",
        duration: "Personal Interview/ Valid SAT Score /CUET",
        eligibility: "50% in 10th & 12th",
      },
      {
        course: "BA (Hons.) History",
        specialization: "",
        annualFee: "1,96,000",
        duration: "Personal Interview/ Valid SAT Score /CUET",
        eligibility: "50% in 10th & 12th",
      },
      {
        course: "BA (Hons.) Political Science",
        specialization: "",
        annualFee: "1,96,000",
        duration: "Personal Interview/ Valid SAT Score /CUET",
        eligibility: "50% in 10th & 12th",
      },
      {
        course: "MBA (Marketing/HR/Finance/Operations)",
        specialization: "Marketing Management/Finance Management/Human Resource/Operations Management",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Digital Business)",
        specialization: "Web Design and Development/Cloud Computing",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Business Analytics in collaboration with KPMG)",
        specialization: "Cognitive Analytics/Data Mining",
        annualFee: "9,00,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Oil and Gas Management)",
        specialization: "Petroleum Marketing & Business Development/Natural Gas & Trading",
        annualFee: "8,08,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Power Management)",
        specialization: "Power Business & Regulations/Green Energy and Transition to Sustainability",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (International Business)",
        specialization: "International Business Law and Negotiation/Cross Cultural Management",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: " MBA (Logistics and Supply Chain Management)",
        specialization: "Logistics Planning / Supply Chain/ Business Process in Supply Chain",
        annualFee: "8,08,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Aviation Management)",
        specialization: "Airline Service Operations/Aviation Enterprise Management ",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "MBA (Metaverse and Web 3.0)",
        specialization: "Metaverse/Web 3.0",
        annualFee: "8,02,000",
        duration: "UPESMET / National Level Exams/ followed by Personal Interview",
        eligibility: "Minimum 50% marks in Class X, XII and Graduation. Graduation From a recognized University in any stream",
      },
      {
        course: "M.Tech (Computational Fluid Dynamics)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech /BE in Aerospace/ Aeronautical/ Mechanical/ Civil/ Chemical Eng. Or equivalent with minimum 60% marks. Gate / NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Chemical Engineering)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech/BE in Chemical Engineering/ Chemical Technology/Petro Chemical Engineering/ Petroleum Engineering, with minimum 60% Marks or equivalent. Gate / NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Health, Safety and Environment)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech / BE in Chemical/ Mechanical/ Electrical/ Civil/ Industrial Safety/ Petroleum Engineering/ Geo- Science Engineering/ Fire Safety Engineering/ Electronics/ Geo Informatics or equivalent with minimum 60% Marks. GATE/NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Robotics Engineering)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech /BE in Robotics/ Mechatronics/ Electronics /Mechanical /Electrical/ ECE/ Information Technology/ /CSE/Automation/Power/Aeronautical/MCA or M.Sc- CS/ Manufacturing Engg./ Instrumentation & Control Engineering/ EEE or equivalent with minimum 60% marks. GATE / NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Sustainability Engineering)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech/BE in Electrical / Mechanical / Chemical /EEE/Electronics/ Instrumentation and Control Engineering or equivalent with minimum 60% marks. GATE/NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Petroleum Engineering)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech/ BE in Petroleum/ Geo Science/ Gas Engineering/Petrochemical Refining/Petrochemical Engineering/ Mechanical/ Chemical or M.Sc. in Geology or equivalent with minimum 60% marks. GATE /NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Renewable Energy)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: " B. Tech / BE in Electrical / Electronics / EEE / Mechanical / Chemical / Instrumentation / Petroleum Engineering and Control Engineering or equivalent with minimum 60% marks. GATE / NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (Construction Technology and Management)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech/BE in Civil Engineering or equivalent with minimum 60% marks. GATE / NET Qualified will be preferred.",
      },
      {
        course: "M.Tech (E-Mobility)",
        specialization: "",
        annualFee: "1,50,000 - 3,50,000",
        duration: "Personal Interview",
        eligibility: "B. Tech/B.E. in Mechanical / Electrical/ Electronics/ Materials/Mechatronics/ Manufacturing/ Industrial Engineering/Production Engineering/Automobiles or equivalent with minimum 60% marks. GATE/NET qualification will be preferred.",
      },
      {
        course: "M.Sc. (Chemistry)",
        specialization: "Organic Chemistry/Polymer Science/Instrumental Chemical Analysis",
        annualFee: "1,02,000",
        duration: "Personal Interview",
        eligibility: "50% in 10th and 12th (PCM/B) and 50% in graduation in relevant subject",
      },
      {
        course: "M.Sc. (Physics)",
        specialization: "Material Science and Nano technology/Astronomy and Astrophysics",
        annualFee: "1,02,000",
        duration: "Personal Interview",
        eligibility: "50% in 10th and 12th (PCM/B) and 50% in graduation in relevant subject",
      },
      {
        course: "M.Sc. (Mathematics)",
        specialization: "Applied Mathematics/Pure Mathematics",
        annualFee: "1,02,000",
        duration: "Personal Interview",
        eligibility: "50% in 10th and 12th (PCM/B) and 50% in graduation in relevant subject",
      },
      {
        course: "M.Sc. (Hons.) Applied Geology",
        specialization: "",
        annualFee: "1,02,000",
        duration: "Personal Interview",
        eligibility: "50% in 10th and 12th (PCM/B) and 50% in graduation in relevant subject",
      },
      {
        course: "Master of Computer Application (MCA)",
        specialization: "Artificial Intelligence and Machine Learning",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Cloud Computing and Cyber Security",
        annualFee: "2,40,000",
        duration: "Personal Interview",
        eligibility: " 50% aggregate marks in BCA or B.Sc. (Computer Science) or B.Sc. (Information Technology) or any Graduation with Computer Science / IT as a subject for three years",
      },
      {
        course: "",
        specialization: "Data Science",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
     
      {
        course: " M.Tech (Computer Science and Engineering)",
        specialization: "Artificial Intelligence and Machine Learning",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Cyber Security and Digital Forensics",
        annualFee: "3,52,000",
        duration: "Screening of Application and Personal Interview",
        eligibility: " Minimum 60% marks at Higher and Senior Secondary level (X and XII). 2. B. Tech/ BE (IT/(Hons.) Computer Science and Engineering), MCA, M.Sc. (Physics/Math’s/Statistics, with minimum 60% marks. Or Equivalent.",
      },
      {
        course: "",
        specialization: "Data Analytics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "M.Des",
        specialization: "Product Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Transportation Design",
        annualFee: "6,04,000",
        duration: "National Level / UPESDAT followed by Portfolio Presentation & Interview",
        eligibility: "Minimum 50% marks in Bachelor’s Degree in Design/Engineering/Architecture/ Interior Design: 10+2+4 years (minimum four-year bachelor’s course)",
      },
      {
        course: "",
        specialization: "Interaction Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Communication Design",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "LL.M.",
        specialization: "Environmental and Energy Law        ",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Intellectual Property Rights",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Corporate and Commercial Laws",
        annualFee: "2,78,000",
        duration: "ULSAT-LLM / CLAT- PG",
        eligibility: "Minimum 50% marks at Higher and Senior Secondary level (X and XII) and Minimum 50%marks in Graduation with LLB Degree. Or equivalent",
      },
      {
        course: "",
        specialization: "Cyber Security and Digital Laws",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Alternate Dispute Resolution",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "M.Sc. (Nutrition and Dietetics)",
        specialization: "Dietetics and Holistic wellness/Dietetics and Holistic wellness",
        annualFee: "1,72,00 - 2,06,000",
        duration: "Personal Interview",
        eligibility: "Min. 50% marks in X, XII, and graduation in B.Sc. With Biology/Biotechnology/B.Sc./ Pharma / BPT/ B.Sc. Food Science Tech./ B.Sc. Microbiology/ B.Sc. Nursing / BMIT/B.Sc. B.Sc. Environmental Sciences/ B.Sc. Dairy Sciences/ Biochemistry/ B.Sc. Chemistry/ B.Sc. Zoology/B.Sc. Food, Nutrition and Dietetics/home science or any other equivalent course",
      },
      {
        course: "M.Sc. (Microbiology)",
        specialization: "Food and environmental Microbiology/Medical and pharmaceutical Microbiology",
        annualFee: "1,72,000 - 2,06,000",
        duration: "Personal Interview",
        eligibility: "X and XII With 50% and B.Sc. with Biology/Biotechnology/B.Sc. /B. Pharma / BPT/ B.Sc. Food Science Tech./ B.Sc. Microbiology/ B.Sc. Nursing / BMIT/B.Sc. Biochemistry/ B.Sc. Chemistry/B.Sc. Zoology/ B.Sc. Environmental Science/ B.Sc. Dairy Science/ B.Sc. Food Nutrition & Dietetics or any other equivalent course with 50%.",
      },
      {
        course: "MA Journalism and Mass Communication (Digital)",
        specialization: "",
        annualFee: "2,62,000",
        duration: "Personal Interview",
        eligibility: "50% in X, XII and Graduation in any stream",
      },
      {
        course: "MA Digital and Mass Media (Broadcasting)",
        specialization: "",
        annualFee: "2,62,000",
        duration: "Personal Interview",
        eligibility: "50% in X, XII and Graduation in any stream",
      },
      {
        course: "",
        specialization: "",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
     
      
    ],
    admissionDates: [
      {
        name: "UCEED 2024 application form out",
        date: "0	October 3, 2024",
      },
      {
        name: "Last date to fill out the form with a late fee of Rs 500",
        date: "November 8, 2024",
      },
      {
        name: "Admit card release date",
        date: "January 5, 2025",
      },
      {
        name: "Exam date",
        date: "January 21, 2025",
      },
      
    ],
    campusinfo: [
      {
        name: "Registration Dates",
        info: "February, 2024",
      },
      {
        name: "Exam Dates",
        info: "April, 2024",
      },
      {
        name: "Results Dates",
        info: "May, 2024",
      },
     
    ],
    placementinformation: [
      {
        name: "Placement Year",
        info: "2023",
      },
      {
        name: "UPES Dehradun average package ",
        info: "Rs 8.37 lakh per annum",
      },
      {
        name: "Average package for School of Design",
        info: "Rs 6.53 lakh per annum",
      },
      {
        name: "UPES Dehradun average package MBA",
        info: "Rs 6.48 lakh per annum",
      },
      {
        name: "Total number of students placed",
        info: "3800+",
      },
      {
        name: "UPES Dehradun Law average package",
        info: "Rs 4.18 lakh per annum",
      },
      {
        name: "Placement rate",
        info: "	96.07%",
      },
      {
        name: "UPES Dehradun highest package",
        info: "Rs 50.09 lakh per annum",
      },
      {
        name: "Top recruiters",
        info: "IBS, Infosys, Bosch, Nestle, Larsen and Toubro, Novartis",
      },
    ],
    opportunitiesinfo: [
      {
        name: "Registration Dates",
        info: "February to September , 2024",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September , 2024",
      },
      {
        name: "Date of Result Declaration",
        info: "September , 2024",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September , 2024",
      },
      {
        name: "Commencement of the Coursework",
        info: "October , 2024",
      },
    ],
    awardsinfo: [
      {
        name: "Best Life Sciences, Allied Sciences, Applied Sciences, Agricultural Sciences & Medical Sciences College in India",
        info: "Today Research & Ratings Network Announces Winners of the Better India Education Awards",
      },
      {
        name: "Best Food Technology & Agricultural Sciences College in India",
        info: "WBR Corp",
      },
      {
        name: "Awarded Best Technical & Professional College in Uttarakhand (North India)",
        info: "Royal Brands Pvt Ltd.",
      },
      {
        name: "Awarded as The Best College in North India",
        info: "Career Connect",
      },
      {
        name: "Awarded Top Hotel Management Institute in India",
        info: "Competition Success Review",
      },
      {
        name: "Awarded Best Academic Leadership Award in IT & Management Education",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Life Science College in Uttarakhand ",
        info: "Time Research",
      },
      {
        name: "Awarded Best Leading Management & Technical Institution",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Centre of Excellence",
        info: "All India Technical and Management Council",
      },
      {
        name: "Awarded Best Emplacement College in India",
        info: "Praxis Media Private Limited",
      },
      {
        name: "Awarded Best Contribution in Value Education",
        info: "Econs",
      },
      {
        name: "Awarded Best B-School & Mass Comm.College in North India",
        info: "Brand Achiever",
      },
      {
        name: "Awarded Best Applied Sciences & Technical Institute in Uttarakhand",
        info: "Communication Multimedia and Infrastructure",
      },
      {
        name: "A++' College in India",
        info: "Pooja Movie Creations & Tgie Awards",
      },
      {
        name: "Awarded Most Popular Academic Institution of North India",
        info: "Entrepreneurship and Skill Development Association",
      },
      {
        name: "Awarded Best Agriculture Science College in North India",
        info: "Mediaz Group",
      },
      {
        name: "Best B School and Engineering College in India",
        info: "All India Technical and Management Council",
      },
      {
        name: "Best Mass Communication Journalism, Sciences and Management College in India",
        info: "BFIT Institute",
      },
      {
        name: "Awarded Best College for Science & Technology",
        info: "All India Technical and Management Council",
      },
      {
        name: "Life Time Achievement Award Listed India's Top 10 Academicians",
        info: "Ucost",
      },
      {
        name: "Excellent Research & Development College in India",
        info: "Entrepreneurship and Skill Development Association",
      },
    ],
    facultytable: [
      {
        name: "z",
        Qualification: "z",
        Experience: "z",
        Specialization: "z",
      },
    ],
    hostelinfo: [
      {
        name: "Capacity",
        info: "1000",
      },
    ],
    rankinginfo: [
      {
        name: "The UPES Dehradun rank in India by the NIRF 2022 for the overall category is 97.",
        info: "NIRF 2022",
      },
      {
        name: "For Law, the university has been ranked 21 by the NIRF 2022 report.",
        info: "NIRF 2022",
      },
      {
        name: "The ranking for MBA by the NIRF 2022 is 41.",
        info: "NIRF 2022",
      },
      {
        name: "The UPES Dehradun ranking for B.Tech by the NIRF 2022 rankings is 61.",
        info: "NIRF 2022",
      },
      {
        name: "Ranked 243rd in Asia by the QS Asia University Rankings 2023.",
        info: "QS Asia University 2023",
      },
      {
        name: "Among India’s Top 10 Institutions in Academic Reputation, the UPES Dehradun ranking is 9th.",
        info: "",
      },
    ],
    reviewinfo: [
      {
        id: 1,
        rating: 4.7,
        desc: "It is a well created theme without much overhead. The created was very responsive and helpful.",
        user: user_1,
        name: "James Stephens",
        location: "China",
      },
      {
        id: 2,
        rating: 4.5,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_2,
        name: "John Doe",
        location: "Italy",
      },
      {
        id: 3,
        rating: 4.8,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_3,
        name: "Martin Jonas",
        location: "USA",
      },
    ],
  },

  {
    id: 4,
    logo: job_img_1,
    type: "Private",
    establishmentyear: "2009",
    Recognisedby: "UGC",
    Approvedby: "",
    state: "Uttarakhand",
    city: "Dehradun",
    Campusarea: "20+ acre",
    link: "https://www.uudoon.in/",
    email: "university@uttaranchaluniversity.ac.in",
    founded: "",
    phone: "",
    feild: ["Education"],
    overviewsection:
      "The Uttaranchal University placement highlights that over 490 companies visited during the placement drive and the highest package offered to one of the BTech CSE students (internationally) was Rs 1.24 Crore.Uttaranchal University courses include 100+ multidisciplinary programmes from the fields of engineering, management, law, applied sciences, agriculture, nursing and more. Students can check the Uttaranchal University course and fee details from this page. Moreover, Uttaranchal University scholarships are awarded to qualified candidates based on performance in the last qualifying examination. Uttaranchal University was established in the year 2013 and has been granted recognition by the UGC. Uttaranchal University NIRF Ranking in the engineering category was between 151 - 200 band in 2022 and has been awarded with  by NAAC. The AICTE, BCI ICAR and PCI have provided approval to Uttaranchal University.",
    duration: "Fulltime",
    date: "18 Jul 2019",
    college: "Uttaranchal University",
    location: "Dehradun, India",
    category: ["+91 7456000100"],
    experience: "Fresher",
    salary: 900,
    salary_duration: "Monthly",
    tags: ["java", "developer"],
    english_fluency: "Fluent",
    overview:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    videoid: "1lOGlxngJHQ?si",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    courses:
      " Uttaranchal University courses are offered at undergraduate, postgraduate and doctoral levels. The university also offers certificate and diploma courses. Courses at Uttaranchal University cover diverse domains like engineering, management, pharmacy, paramedical & allied sciences, law, agriculture etc. Uttaranchal University courses are offered in regular mode and some of the popular courses offered are B.Tech, BCA, B.Pharm, BA LLB, M.Tech, MBA, LLM, M.Sc etc. Uttaranchal University fee structure is different for each programme and can also vary for each specialisation. For more information about Uttaranchal University courses, students can check out the table given below containing the course details, duration and eligibility criteria. ",

    ranking:
      "Uttaranchal University is a premier university that is many students’ choice. Rankings from established and nationally recognised authorities represent an institution's quality and standards. Uttaranchal University was ranked 53rd in The Week Hansa Research Survey 2023's category of Multidisciplinary Universities. The university was presented with the Jagran Excellence Award for Education in 2022. It is the first university in Uttarakhand to receive a NAAC A+ rating. Listed below are some categories in which Uttaranchal University has managed to rank high.",
    awards:
      "Our institution takes pride in its accolades, having received recognition for excellence in education and innovation. These awards underscore our commitment to delivering high-quality academic programs, fostering research, and promoting an inclusive learning environment. We have been honored for our contributions to the community and advancements in education methodology. These accolades motivate us to continually strive for excellence, ensuring that our students receive a world-class education and graduate well-prepared for their future endeavors.",
    hostel:
      "Our institution ensures a comfortable and secure living environment for students with separate hostel facilities for both male and female students. The hostels are well-equipped with modern amenities, providing a conducive atmosphere for focused study and recreation. Trained staff maintains discipline, and safety measures are prioritized. The hostel experience fosters a sense of community, facilitating cultural exchange and lifelong friendships. With a commitment to student welfare, we aim to create a home away from home, ensuring a positive and enriching residential experience during the academic journey.",
    opportunities:
      "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
    campus:
      "Our campus provides an ideal environment for academic and personal growth. Sprawling greenery and state-of-the-art infrastructure create a conducive atmosphere for learning. Well-equipped classrooms, modern laboratories, and a resource-rich library foster a dynamic educational experience. The campus is Wi-Fi enabled, promoting seamless connectivity for research and collaborative projects. Recreational facilities, including sports amenities and cultural spaces, encourage a balanced student life. Additionally, our commitment to safety and security ensures a peaceful environment. The vibrant campus life, coupled with engaging extracurricular activities, enriches the overall student experience, fostering a sense of community and camaraderie.",
    placement:
      "Every year, the final year students can take part in the Uttaranchal University placements. Students can register themselves through the placement cell known as the Corporate Resource Centre (CRC). The CRC is responsible for executing the Uttaranchal University placement. Students and future employers both benefit from this department's efforts to bridge the gap between academics and industry. The Uttaranchal University placement data for the year 2023 is available now. During Uttaranchal University placement, a student of B.Tech Computer Science and Engineering course obtained the highest package from Citibank, which was Rs 1.24 CPA. Over 147 local and international recruiters attended the placement drive, and 100 students received job offers. On the other hand, the Uttaranchal University highest MBA package was Rs 26.4 LPA. Students can check the details of Uttaranchal University placement below. ",
    admission:
      "Uttaranchal University admission is offered in UG, PG and doctoral programmes. Uttaranchal University course admission process varies for each programme. The university accepts merit-based and entrance exam-based admission. Uttaranchal University admission in B.Tech courses are given on the basis of candidates' performance in JEE Main. The university accepts CUET scores for BBA, B.Com, B.Sc, BA LLB, BBA LLB, B.Pharm, BA, BCA, and BHMCT programme admission. At the postgraduate level, GATE scores are considered for Uttaranchal University M.Tech admission. The university accepts scores from a variety of entrance tests for enrollment in its programmes, including JEE Main, CUET, GATE, UGC NET, CAT, and MAT.",
    faculty:"Our institution boasts a distinguished faculty drawn from premier institutions across India, setting high academic standards. With a significant number holding Master's and Ph.D. qualifications, they actively contribute to both teaching and research. Their expertise ensures a rigorous and insightful learning experience for students. The faculty's commitment to excellence extends beyond the classroom, guiding students in research endeavors and preparing them for real-world challenges. Their collective knowledge and dedication contribute significantly to the academic vibrancy of our institution, shaping the future leaders of tomorrow. ",

    overviewtable:[
      {
        specialization: "Short Name",
        annualfee: "UU",
      },
      {
        specialization: "Institute Type - Public/ Private/ Govt",
        annualfee: "Private",
      },
      {
        specialization: "State",
        annualfee: "Uttarakhand",
      },
      {
        specialization: "City",
        annualfee: "Dehradun",
      },
      {
        specialization: "Location/ Address",
        annualfee: "Arcadia Grant, Chandanwari, Prem Nagar, Dehradun, Uttarakhand 248007",
      },
     
      {
        specialization: "Phone Numbers",
        annualfee: "0135-2770300",
      },
      {
        specialization: "Website",
        annualfee: "uudoon.in",
      },
      {
        specialization: "Email Address",
        annualfee: "university@uttaranchaluniversity.ac.in and admission@uumail.in ",
      },
      
      {
        specialization: "Area",
        annualfee: "Education",
      },
      {
        specialization: "Approved by",
        annualfee: "AICTE (All India Council for Technical Education), BCI (Bar Council of India), PCI (Pharmacy Council of India) and India Council of Agricultural Research (ICAR)",
      },
      {
        specialization: "Accreditation",
        annualfee: "A+ grade by NAAC",
      },
     
    ],
      coursesAndFees: [
      {
        course: "B.Tech (CSE)",
        specialization: "Cloud Computing",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Big Data Analytics",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Cyber Security",
        annualFee: "Rs 2,71,000",
        duration: "JEE Mains/UKSEE",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "",
        specialization: "AI/ML",
        annualFee: "",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.tech ",
        specialization: "Civil Engineering",
        annualFee: "Rs 1,48,000",
        duration: "JEE Mains/UKSEE",
        eligibility: "Passed 10+2 examination with PCM",
      },
     
      {
        course: "",
        specialization: " Mechanical Engineering",
        annualFee: "Rs 1,48,000",
        duration: "JEE Mains/UKSEE",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "",
        specialization: "Aerospace Engineering ",
        annualFee: "Rs 1,76,000",
        duration: "JEE Mains/UKSEE",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "BBA",
        specialization: "HR",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Banking & Finance",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Digital Marketing",
        annualFee: "Rs 1,10,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "",
        specialization: "Aviation",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Tourism & Event Mgmt.",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "B.Com",
        specialization: "",
        annualFee: "Rs 1,00,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "B.Sc",
        specialization: "IT",
        annualFee: "Rs 90,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "B.A. LLB/ BBA LL.B",
        specialization: "",
        annualFee: "Rs 2,31,400",
        duration: "CLAT/ULET",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "D. Pharma",
        specialization: "",
        annualFee: "Rs 85,000",
        duration: "Personal Interview",
        eligibility: "Passed 10th  examination with Science",
      },
      {
        course: "B.A. Journalism & Mass Comm.",
        specialization: "",
        annualFee: "Rs 86,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "B.Sc (Hons.) Agriculture",
        specialization: "",
        annualFee: "Rs 1,20,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination ",
      },
      {
        course: "B.Sc. ",
        specialization: "Physics",
        annualFee: "Rs ",
        duration: "",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "",
        specialization: "Chemistry",
        annualFee: "Rs 70,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "",
        specialization: "Maths",
        annualFee: "Rs ",
        duration: "",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "B.Sc",
        specialization: "Forensic Science",
        annualFee: "Rs 1,10,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "",
        specialization: "Data Science",
        annualFee: "Rs 1,10,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "B.Sc. Animation & Gaming",
        specialization: "",
        annualFee: "Rs 1,20,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "B.Sc",
        specialization: "Microbiology",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Food Technology",
        annualFee: "Rs 91,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCB",
      },
      {
        course: "",
        specialization: "Biotechnology",
        annualFee: "Rs ",
        duration: "",
        eligibility: "Passed 10+2 examination with PCB",
      },
      {
        course: "Bachelor of Hotel Mgmt.",
        specialization: "",
        annualFee: "Rs 90,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with any stream",
      },
      {
        course: "B.Sc Hotel & Hospitality Mgmt.",
        specialization: "",
        annualFee: "Rs 90,000",
        duration: "",
        eligibility: "Passed 10+2 examination with any stream",
      },
       {
        course: "Diploma in Hotel Mgmt.",
        specialization: "",
        annualFee: "Rs 60,000",
        duration: "Personal Interview",
        eligibility: "Passed 10th examination ",
      },
      {
        course: "Certificate in Hotel Management",
        specialization: "",
        annualFee: "Rs 40,500",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with any stream",
      },
      {
        course: "B.A.",
        specialization: "",
        annualFee: "Rs 66,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with any stream",
      },
      {
        course: "BA English/Psyhcology",
        specialization: "",
        annualFee: "Rs 72,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination ",
      },
      {
        course: "B.Sc (CBZ/PCM)",
        specialization: "",
        annualFee: "Rs 60,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM/PCB",
      },
      {
        course: "BCA",
        specialization: "Data Analytics",
        annualFee: "Rs 1,10,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "",
        specialization: "Cyber Security",
        annualFee: "Rs 1,10,000",
        duration: "Personal Interview",
        eligibility: "Passed 10+2 examination with PCM",
      },
      {
        course: "MBA",
        specialization: "IT",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Business",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Analytics",
        annualFee: "Rs 2,21,000",
        duration: "CAT/XAT/MAT",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "",
        specialization: "Digital Marketing",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "IB",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },

      {
        course: "MBA Logistic & SupplyChain Mgmt.",
        specialization: "",
        annualFee: "Rs 2,21,000",
        duration: "CAT/XAT/MAT",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "MCA",
        specialization: "",
        annualFee: "Rs 1,20,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "MCA",
        specialization: "Cloud Computing",
        annualFee: "Rs 1,25,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "MAJMC",
        specialization: "",
        annualFee: "Rs 86,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "M.Sc Ag.",
        specialization: "",
        annualFee: "Rs 91,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "M.Sc.",
        specialization: "Physics",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Chemistry",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Maths",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Industrial Chemistry",
        annualFee: "Rs 61,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "",
        specialization: "Zoology",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Botany",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "EVS",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "M.Tech",
        specialization: "CSE",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Thermal Engg.",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Environ. Engg.",
        annualFee: "Rs 1,01,000",
        duration: "",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "",
        specialization: "Energy Mgmt.",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Construction Tech & Mgmt.",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "Paramedical",
        specialization: "BMLT",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "BMRIT",
        annualFee: "Rs 90,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "",
        specialization: "Opreration Theatre & optometry",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "M.A.",
        specialization: "English",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Political Science",
        annualFee: "Rs 71,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "",
        specialization: "Clinical psychology",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "M.Sc Food Tech",
        specialization: "",
        annualFee: "Rs 91,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },

      {
        course: "MCA",
        specialization: "AI/ML",
        annualFee: "Rs 1,30,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "M.Sc. Biotechonolgy",
        specialization: "",
        annualFee: "Rs 91,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "M.Sc Food Nutrition & Dietetics",
        specialization: "",
        annualFee: "Rs 91,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      {
        course: "M.Sc",
        specialization: "Data Science",
        annualFee: "Rs ",
        duration: "",
        eligibility: "",
      },
      {
        course: "",
        specialization: "Forensic Science",
        annualFee: "Rs 1,20,000",
        duration: "Personal Interview",
        eligibility: "Graduation From a recognized University",
      },
      
      
    ],
    admissionDates: [
      {
        name: "Application Start Date",
        date: "01-Mar-2024",
      },
      {
        name: "Application End Date",
        date: "30-Jul-2024",
      },
      {
        name: "Date of Result Declaration",
        date: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        date: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        date: "01-Aug-2024",
      },
    ],
    campusinfo: [
      {
        name: "Registration Dates",
        info: "February  , 2024",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "April, 2024",
      },
      {
        name: "Date of Result Declaration",
        info: "May , 2024",
      },
      {
        name: "Commencement of the Coursework",
        info: "October , 2024",
      },
    ],
    placementinformation: [
      {
        name: "Placement Year",
        info: "2023",
      },
      {
        name: "Number of Companies Participated",
        info: "490+",
      },
      {
        name: "Number of Students",
        info: "1200+",
      },
      {
        name: "Highest Package",
        info: "INR 1.24 CPA",
      },
      {
        name: "Top Recruiters",
        info: "Forma, Decathlon, Outlook, Uniqlo, Bajaj Finserv",
      },
     
      
    ],
    opportunitiesinfo: [
      {
        name: "Registration Dates",
        info: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        info: "September 17, 2023",
      },
      {
        name: "Date of Result Declaration",
        info: "September 18, 2023",
      },
      {
        name: "Last Date of Submission of Fee",
        info: "September 28, 2023",
      },
      {
        name: "Commencement of the Coursework",
        info: "October 3, 2023",
      },
    ],
    awardsinfo: [
      {
        name: "Most Promising Engineering & Management Institute in India Award.",
        info: "",
      },
      {
        name: "Most Aware Campus of Uttarakhand Award.",
        info: "",
      },
      {
        name: "Icon Award of Uttarakhand.",
        info: "",
      },
      {
        name: "Top Private Law College In Uttarakhand.",
        info: "",
      },
      {
        name: "NAAC A+",
        info: "",
      },
     
      
    ],
    facultytable: [
      {
        name: "Dr. Vishal",
        Qualification: "Dept. of  Microbiology",
        Experience: "22 year",
        Specialization: "Agriculture microbiology, Biological Control, Plant growth promo. Rhizo bacteria, Fermentation Technology, Antimicrobial Activity of mediclinal plant, Microbial pathology.",
      },
      {
        name: "Dr. RD Saklani",
        Qualification: "Dept. of  Geology",
        Experience: "10 year",
        Specialization: "Sequence stratigraphy, Petroleum Geology, Ichnology, Disaster Management, Engg. Geology, Field Geology, Himalayan Geology & Western India (Kachchh & Rajasthan).",
      },
      {
        name: "Mr. S K Thakur",
        Qualification: "Dept. of  Statistics & Mathematics",
        Experience: "35 year",
        Specialization: "Statistics, International finance,  International Economics, Coorporates Law. ",
      },
      {
        name: "Dr. Neelesh",
        Qualification: "Dept. of  Microbiology",
        Experience: "02 year",
        Specialization: "Medical microbiology, General microbiology.",
      },
      {
        name: "Mrs. Preeti Sood",
        Qualification: "Dept. of  Hotel Management ",
        Experience: "23 year",
        Specialization: "Food and beverage,Front office, House Keeping, Kitchen.",
      },
      {
        name: "Mr. Gurmeet singh",
        Qualification: "Dept. of  Chemistry",
        Experience: "03 year",
        Specialization: "Waste Management, Water purification, Biofilms and filters, Polymers, Analytical Chemistry.",
      },
      {
        name: "Mr. Kashif Hussain",
        Qualification: "Dept. of  Pharmacy",
        Experience: "12 year",
        Specialization: "Pharmaceutical Chemistry.",
      },
      {
        name: "Mr. Javed Siddiqui",
        Qualification: "Dept. of  Paramedical ",
        Experience: "14 year",
        Specialization: "Clinical biochemistry, Pathology, Medical Microbiology.",
      },
      {
        name: "Ms. Rohita",
        Qualification: "Dept. of  Pharmacy",
        Experience: "01 year",
        Specialization: "Hospital and clinical pharmacy, Community pharmacy, Pharmacy practice, Social pharmacy.",
      },
      {
        name: "Dr. Manisha Singh",
        Qualification: "Dept. of  Paramedical ",
        Experience: "01 year",
        Specialization: "Orthopedics, Neurology.",
      },
      {
        name: "Dr. Kiran",
        Qualification: "Dept. of  Paramedical ",
        Experience: "05 year",
        Specialization: "Orthopedics",
      },
      {
        name: "Dr. Nidhi Chatterjee",
        Qualification: "Dept. of  Zoology",
        Experience: "18 year",
        Specialization: "Zoology, Fish and Fishries, Parasitology.",
      },
      {
        name: "Ms. Susmita Bahuguna ",
        Qualification: "Dept. of  Nursing",
        Experience: "01 year",
        Specialization: "Nursing fundamental, Social nursing",
      },
      {
        name: "Ms. Oshin",
        Qualification: "Dept. of  Nursing",
        Experience: "01 year",
        Specialization: "Psychology, Anatomy, Physiology",
      },

    ],
    hostelinfo: [
      {
        name: "Capacity",
        info: "1000",
      },
      {
        name: "Hostel Fees",
        info: "In-house Residential Accommodation (Optional) Charges (Note: - Hostel charges is per year which includes Vegetarian / Non-Vegetarian Food) ",
      },
      {
        name: "",
        info: "•	Standard Quad (Four Sharing Room) with Attached Toilet Rs.48000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe Quad (Four Sharing Room) with Attached Toilet Rs.58000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Three Sharing Room) with Attached Toilet Rs.68000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Three Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Standard (Two Sharing Room) with Attached Toilet Rs.73000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Deluxe (Two Sharing Room) with Attached Toilet Rs.78000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Super Deluxe (Two Sharing Room) with Attached Toilet Rs.88000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with LCD + Tata Sky + Attached Toilet Rs.95000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Executive Room (TWO SHARING Room) with A.C + LCD + Tata Sky + Attached Toilet Rs.105000/-per Year.        ",
      },
      {
        name: "",
        info: "•	Hostel Enrolment & Furnishing Fee: Rs.5000/-(To be paid Once) Laundry Charges: Rs.4800/-per Year",
      },
      {
        name: "Mess Fees",
        info: "Includes in Hostel Fees",
      },
      {
        name: "Location (on-campus or off-campus)",
        info: "On-Campus",
      },
      {
        name: "Number of Rooms",
        info: "300",
      },
      {
        name: "Room Type (Occupancy basis)",
        info: "Single Sharing, Two sharing, Three Sharing, Four Sharing",
      },
      {
        name: "Hostel Facilities/ Amenities",
        info: "Wi-Fi, CCTV Surveillance, Security Guards, Warden, Indoor Stadium, Outdoor Playground, Gymnasium, etc.",
      },
    ],
    rankinginfo: [
      {
        name: "6384(University)",
        info: "The World, 2022",
      },
      {
        name: "2390(University)",
        info: "The Asia, 2022",
      },
      {
        name: "350(University)",
        info: "The India, 2022",
      },
      {
        name: "9(University)",
        info: "The Uttarakhand, 2022",
      },
      {
        name: "4(University)",
        info: "Dehradun, 2022",
      },
    ],
    reviewinfo: [
      {
        id: 1,
        rating: 4.7,
        desc: "It is a well created theme without much overhead. The created was very responsive and helpful.",
        user: user_1,
        name: "James Stephens",
        location: "China",
      },
      {
        id: 2,
        rating: 4.5,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_2,
        name: "John Doe",
        location: "Italy",
      },
      {
        id: 3,
        rating: 4.8,
        desc: "Very impressed with the jobi template. The designs/layouts are modern and professional with quaintly..",
        user: user_3,
        name: "Martin Jonas",
        location: "USA",
      },
    ],
  },




];

export default college_details;

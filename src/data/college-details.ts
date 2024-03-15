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
        specialization: "B.Pharma",
        annualFee: "Rs 3,84,399",
        eligibility: "Passed 10+2 examination with PCB/PCM.",
      },
      {
        specialization: "Lateral Entry B.Pharma ",
        annualFee: "Rs 2,93,099",
        eligibility: "D Pharma",
      },
      {
        specialization: "B.Sc Optometry",
        annualFee: "Rs 2,03,099",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "Bachelor in Medical Radio Imaging Technology",
        annualFee: "Rs 2,03,099",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "Bachelor of Physio Therapy",
        annualFee: "Rs 2,64,399",
        eligibility: "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "B.Sc. Operation Theatre",
        annualFee: "Rs 2,44,399",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "Bachelor of Medical Laboratory Technology",
        annualFee: "Rs 2,03,099",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "B.Sc Nursing",
        annualFee: "Rs 7,00,000",
        eligibility: "Passed 10+2 examination with PCB with English.",
      },
      {
        specialization: "D.Pharma ",
        annualFee: "Rs 1,61,799",
        eligibility:
          "Passed 10+2 examination with PCB/PCM.",
      },
      {
        specialization: "Diploma in Dialysis Technology",
        annualFee: "Rs 1,35,599",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "General Nursing and Midwifery",
        annualFee: "Rs 3,60,000",
        eligibility: "Passed 10+2 examination.",
      },
      {
        specialization: "Diploma in Hotel Management",
        annualFee: "",
        eligibility: "Passed 10 examination.",
      },
      {
        specialization: "Diploma in Event Management",
        annualFee: "",
        eligibility:
          "Passed 10 examination.",
      },
      {
        specialization: "Diploma in Hospitality Management",
        annualFee: "",
        eligibility:
          "Passed 10 examination.",
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
        specialization: "B.Sc. Biotechnology ",
        annualFee: "Rs 2,18,099",
        eligibility: "Passed 10+2 examination with PCB/PCM.",
      },
      {
        specialization: "B.Sc. Microbiology",
        annualFee: "Rs 2,18,099",
        eligibility: "PCB",
      },
      {
        specialization: "B.Sc. Food Technology ",
        annualFee: "Rs 2,18,099",
        eligibility:
          "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "B.Sc. Chemistry, Botany, Zoology/ Physics, Chemistry, Mathematics",
        annualFee: "Rs 1,73,099",
        eligibility:
          "For B.Sc.PCM- PCM with and for B.Sc.CBZ",
      },
      {
        specialization: "B.Sc. Statistics With Harvard University Data Scientist",
        annualFee: "Rs 2,48,099",
        eligibility: "Passed 10+2 examination with PCB.",
      },
      {
        specialization: "B.Sc. Geology",
        annualFee: "Rs 2,48,099",
        eligibility:
          "PCM/PCB",
      },
      {
        specialization: "B.Sc. Economics With Harvard University Data Scientist ",
        annualFee: "Rs 2,18,099",
        eligibility:
          "Passed 10+2 examination with PCM.",
      },
      {
        specialization: "B.Sc.  Home Science",
        annualFee: "Rs 2,03,099",
        eligibility:
          "Passed 10+2 examination with PCM/PCM.",
      },
      {
        specialization: "B.Sc. Hons. Agriculture",
        annualFee: "Rs 2,48,099",
        eligibility: "PCB/PCM",
      },
      {
        specialization: "B.Sc. Horticulture",
        annualFee: "Rs 2,18,099",
        eligibility:
          "Passed 10+2 examination with PCB/PCM.",
      },
      {
        specialization: "B.Sc. Forestry",
        annualFee: "Rs 2,18,099",
        eligibility:
          "Passed 10+2 examination with PCB/PCM.",
      },
      {
        specialization: "M.Sc. Biotechnology",
        annualFee: "Rs1,71,799",
        eligibility: "Bachelors degree",
      },
      {
        specialization: "M.Sc. Microbiology",
        annualFee: "Rs 1,71,799",
        eligibility: "Bachelors degree",
      },
      {
        specialization: "M.Sc. Food Technology",
        annualFee: "Rs 1,71,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Zoology",
        annualFee: "Rs 1,31,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Chemistry",
        annualFee: "Rs 1,31,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Physics Astro/Nuclear Physics",
        annualFee: "Rs 1,31,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Mathematics",
        annualFee: "Rs 1,11,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Geology",
        annualFee: "Rs 1,91,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Environmental Science Commercial Cultivation/ Remote Sensing and GIS /Solid Waste Management",
        annualFee: "Rs 1,11,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Botany",
        annualFee: "Rs 1,21,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Statistics ",
        annualFee: "Rs  1,91,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Biochemistry ",
        annualFee: "Rs 1,51,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Agronomy",
        annualFee: "Rs 1,91,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Seed Science",
        annualFee: "Rs 1,81,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Forestry",
        annualFee: "Rs 1,71,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "M.Sc. Horticulture",
        annualFee: "Rs 1,81,799",
        eligibility:
          "Bachelors degree",
      },
      {
        specialization: "Master of Public Health (MPH)",
        annualFee: "Rs 1,81,799",
        eligibility:
          "Any Graduate",
      },
      {
        specialization: "Master of Hospital Administration (MHA)",
        annualFee: "Rs 1,81,799",
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
    link: "",
    email: "",
    founded: "",
    phone: "",
    feild: ["Education"],
    overviewsection:
      "To be an institution of global standing for developing professionally competent talent contributing to nation building.UPES Dehradun NIRF Ranking 2023 has been officially announced. The University of Petroleum Studies has got the 52nd rank in the NIRF University Ranking list. Also, as per the NIRF Management Ranking list 2023, the university has got the 39th position. The university also received the 54th rank in the NIRF Engineering Ranking 2023. The QS Asia University Rankings 2023 place the University of Petroleum and Energy Studies ninth among universities overall. The IACBE, NBA, NAAC, UGC, Bar Council of India, and Pharmacy Council of India all accredited the university, and it has received an A grade from NAAC. ",
    duration: "Fulltime",
    date: "18 Jul 2019",
    college: "University Of Petroleum And Energy Studies",
    location: "Dehradun, India",
    category: ["Pharmacy", "Medical","Engineering","LAW","Design"],
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
        specialization: "B. Tech",
        annualFee: "1.7-2.3 Lakh",
        eligibility: "Passed 10+2 examination with PCM.",
      },
      {
        specialization: "B. Des.",
        annualFee: "	2-4 Lakh ",
        eligibility: "",
      },
      {
        specialization: "B.B. A ",
        annualFee: "1.3-1.6 Lakh ",
        eligibility:
          "",
      },
      {
        specialization: "B. Com.",
        annualFee: "70,000",
        eligibility:
          "",
      },
      {
        specialization: "B. Sc.	",
        annualFee: "70,000",
        eligibility: "",
      },
      {
        specialization: "M. Tech	",
        annualFee: "1.4-1.7 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "M. Des.",
        annualFee: "2.8-3 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "M.B.A	",
        annualFee: "6.51 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "BA/BBA/B.COM + LLB",
        annualFee: "1.5-1.9 Lakh",
        eligibility: "",
      },
      {
        specialization: "LLM",
        annualFee: "1.1 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "LLB",
        annualFee: "1.6-1.9 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "M. Sc	",
        annualFee: "90,000",
        eligibility: "",
      },
      {
        specialization: "B.A.",
        annualFee: "90,000",
        eligibility: "",
      },
      {
        specialization: "M.A.",
        annualFee: "1.1-1.3 Lakh",
        eligibility:
          "",
      },
      {
        specialization: "B.C.A",
        annualFee: "70,000",
        eligibility:
          "",
      },
      {
        specialization: "M.C.A",
        annualFee: "90,000",
        eligibility:
          "",
      },
      {
        specialization: "B. Com. - M.B.A.",
        annualFee: "4 lakh",
        eligibility:
          "",
      },
      {
        specialization: "B.B.A.-M.B.A.",
        annualFee: "Rs 4 lakh",
        eligibility:
          "",
      },
      {
        specialization: "B. Des. + M. Des.",
        annualFee: "4 lakh",
        eligibility:
          "",
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
];

export default college_details;

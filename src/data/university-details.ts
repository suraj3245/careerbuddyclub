import { IuniversityType } from "@/types/university-details";
import job_img_1 from "@/assets/images/logo/U-logo1.png";
import job_img_2 from "@/assets/images/logo/U-logo3.png";
import job_img_3 from "@/assets/images/logo/U-logo2.png";
import job_img_4 from "@/assets/images/logo/uu-logo.svg";
import Image, { StaticImageData } from "next/image";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_22.jpg";
import job_img1 from "@/assets/images/assets/U1.png";
import job_img11 from "@/assets/images/assets/U1-1.png";
import job_img2 from "@/assets/images/assets/U2.png";
import job_img22 from "@/assets/images/assets/U2-2.png";
import job_img3 from "@/assets/images/assets/U3.png";
import image from "next/image";

const university_details: IuniversityType[] = [
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
      link: "",
      email: "admission@careerbuddyclub.com",
      founded: "",
      phone: "7300900900",
      feild: ["Education"],
      overviewsection: "Established in 1944, Orenburg State Medical University (Or SMU) is one of the top-ranked government medical universities located in the city of Orenburg, Russia. It offers courses leading to officially recognised higher education degrees such as bachelor’s degrees, master’s degrees, and doctorate degrees in several areas of study. The University meets all modern standards and requirements presented to higher medical schools. And that is why, Orenburg State Medical University is the most desired Russian medical university, majorly amongst Indian students who desire to study MBBS in Russia. ",
      duration: "Fulltime",
      date: "18 Jul 2019",
      college: "Orenburg State Medical University",
      location: "Russia",
      category: ["+91 7456000100"],
      experience: "Fresher",
      salary: 900,
      salary_duration: "Monthly",
      tags: ["java", "developer"],
      english_fluency: "Fluent",
      overview: "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
      videoid: "LyQJPc9YrMI?si",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      courses: "The fee structure for Orenburg State Medical University in 2024-25 typically includes tuition, hostel accommodation, medical insurance, and possibly other fees. However, specific amounts may vary. It's recommended to consult the university directly or visit their official website for precise and updated fee information.",
      ranking: "Our institution consistently secures impressive rankings, a testament to our unwavering commitment to academic excellence and holistic development. Recognized regionally and nationally, these rankings affirm our dedication to providing a top-notch education, encouraging cutting-edge research, and fostering an enriching learning environment for our students.",
      awards: "To be eligible for admission in Orenburg State Medical University, applicants must have a good academic record. International students are also eligible for admission if:",
      
      opportunities: "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
      campus: "OSMU offers hi-tech robotic learning for practical sessions, enhancing students' real-life experiences. Among its three hostels, the third is reserved for Indian students, providing a homely atmosphere. The university prioritizes sports with a club inaugurated in 2013, promoting a healthy lifestyle and sportsmanship through 12 leagues, where Indian students actively participate. An Indian mess caters to their culinary needs.",
      placement: "Embark on a journey of medical education at Orenburg State Medical University, where the doors swing open without entrance exams or hefty donations. Here, affordability meets excellence, with rigorous standards of education delivered in English, recognized by esteemed medical bodies worldwide. Join a vibrant community of over 1200 Indian students, residing in top-notch hostels, and choose your path between English and Russian mediums of instruction. ",
      admission: "Admission to our esteemed institution follows a fair and transparent process. Prospective students can access detailed admission guidelines, ensuring clarity at every step. The selection criteria are merit-based, reflecting our commitment to academic excellence. Application procedures are streamlined, and information is readily available through our online portal. Our dedicated admission committee is always ready to assist and guide applicants through the process. With a focus on diversity and inclusivity, we welcome aspiring students to join our vibrant academic community, where they can embark on a journey of knowledge, skills, and personal growth.",
    
      image: [
        {
          img: job_img1,
          
        },
      ],

      image1: [
        {
          img1: job_img11,
          
        },
      ],


      overviewtable: [
        {
          specialization: "Short Name",
          annualfee: "OSMU",
        },
        {
          specialization: "Institute Type - Public/ Private/ Govt",
          annualfee: "Private",
        },
        {
          specialization: "Phone Numbers",
          annualfee: "7300900900",
        },
        {
          specialization: "Email Address",
          annualfee: "admission@careerbuddyclub.com",
        },
        {
          specialization:"University Recognitions",
          annualfee: "ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), GMC PLAB",
        },
        {
          specialization: "Area",
          annualfee: "Education",
        },
      ],
      coursesAndFees: [
        {
          course: "1st Year",
          annualFee: "$6,000 ",
          duration: "Included in Tuition Fee",
          eligibility: "$1500 ",
        },
        {
          course: "2nd – 6th Year",
          annualFee: "$6,000  (per year)",
          duration: "",
          eligibility: "Optional",
        },
        {
          course: "Total Fee",
          annualFee: "$36,000 ",
          duration: "" ,
          eligibility: "$37,500 ",
        },
        
      ],
     
      whychoosepoints: [
        "Student have passed 10+2 with 50% marks in science subjects. ",
        "The student should have completed 17 years as in the year of admission.",
        "The student have qualified NEET exam.",
        "The student is not suffering from any contagious disease i.e. tuberculosis, HIV AIDS, etc.",
       
      ],
      whystudypoints: [
       "No entrance examination, donation needed.",
       "Easy Admission procedure.",
       "The cost of studying MBBS in Russia is affordable.",
       "The medium of education in Russia in English.",
       "The MBBS degree from Orenburg State Medical University is honored by all the major associations like ECFMG, WDOMS, FAIMER, NMC(MCI), etc. The Indian scholars who complete their MBBS from Orenburg state medical university can work in India as well after passing Foreign Medical Graduate Examination.",
       "The students can choose between English and Russian medium of study at their convenience.",
      ],
      
     
     
      reviewinfo: [
        {
          id: 1,
          rating: 4.7,
          desc: "At Orenburg State Medical, experience is the best. Talking about studies, faculty is the best. They speak in English language and explain all the possible things we need.",
          user: user_1,
          name: "",
          location: "",
        },
        {
          id: 2,
          rating: 4.5,
          desc: "Orenburg State Medical University is one of the top Medical Universities in Russia. It has the best hostel facilities like Indian mess, hostel rooms.",
          user: user_2,
          name: "",
          location: "",
        },
        {
          id: 3,
          rating: 4.8,
          desc: "Orenburg State Medical University has provided an extremely supportive environment for me during the 2 years of Post Graduation in Radiology.",
          user: user_3,
          name: "",
          location: "",
        },
      ],
      
    },



    {
      id: 2,
      logo: job_img_2,
      type: "Private",
      establishmentyear: "2009",
      Recognisedby: "UGC",
      Approvedby: "BCI, RCI, PCI, NCTE",
      state: "Uttarakhand",
      city: "Dehradun",
      Campusarea: "20+ acre",
      link: "",
      email: "admission@careerbuddyclub.com",
      founded: "",
      phone: "7300900900",
      feild: ["Education"],
      overviewsection: "Established in 1972 by the Ministry of Science and Higher Education of the Russian Federation. Mari State University (MarSU) is one of the rapidly growing classical universities of the Mari El Republic, Russia, located in the scenic city of Yoshkar-Ola which is the capital of Mari El Republic. The core aim of the university is to make higher education more accessible to all students around the world, allowing them to develop holistically and prepare them as specialists to work in the field of health care. The university curriculum and environment focuses on the developing and implementing innovative diagnostic, treatment, and prevention technologies while nurturing the essential values of compassion and empathy among its students.",
      duration: "Fulltime",
      date: "18 Jul 2019",
      college: "Mari State University",
      location: "Russia",
      category: ["+91 7456000100"],
      experience: "Fresher",
      salary: 900,
      salary_duration: "Monthly",
      tags: ["java", "developer"],
      english_fluency: "Fluent",
      overview: "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
      videoid: "n5G48VjaiJQ?si",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      courses: " The fees for these programs vary, ensuring accessibility for a broad spectrum of students. The institution prioritizes transparency in its fee structures and provides flexible payment options, acknowledging the diverse financial backgrounds of its students. This approach aims to make quality education accessible to all, fostering inclusivity and diversity within the student body. Students can explore a wide range of courses, each tailored to meet industry standards, with corresponding fees designed to accommodate individual financial circumstances.",

      ranking: "Our institution consistently secures impressive rankings, a testament to our unwavering commitment to academic excellence and holistic development. Recognized regionally and nationally, these rankings affirm our dedication to providing a top-notch education, encouraging cutting-edge research, and fostering an enriching learning environment for our students.",
      awards: "",
    
      opportunities: "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
      campus: "MarSU hosts over 1100 Indian students, offering a vibrant student life filled with diverse activities. From scientific communities to cultural events, students engage in sports, volunteering, and public work. With well-equipped sports facilities, including fields, gyms, and courts, along with celebrations of cultural festivals, the university fosters a rich and inclusive environment for all.",
      placement: "Mari State University offers globally recognized medical education with affordable fees, meeting international standards. Its modern infrastructure includes well-equipped classrooms and laboratories. The admission process is straightforward, with no donation or entrance tests like IELTS or TOEFL required. All courses are taught in English, with over 1100 students enrolled. MarSU boasts the largest research centers in the region and offers various facilities for students' holistic development, including sports, arts, and social activities.",
      admission: "Admission to our esteemed institution follows a fair and transparent process. Prospective students can access detailed admission guidelines, ensuring clarity at every step. The selection criteria are merit-based, reflecting our commitment to academic excellence. Application procedures are streamlined, and information is readily available through our online portal. Our dedicated admission committee is always ready to assist and guide applicants through the process. With a focus on diversity and inclusivity, we welcome aspiring students to join our vibrant academic community, where they can embark on a journey of knowledge, skills, and personal growth.",
    

      image: [
        {
          img: job_img2,
        },
       
      ],

      image1: [
        {
          img1: job_img22,
          
        },
      ],

      overviewtable: [
        {
          specialization: "Short Name",
          annualfee: "MSU",
        },
        {
          specialization: "Institute Type - Public/ Private/ Govt",
          annualfee: "Private",
        },
        {
          specialization: "Email Address",
          annualfee: "admission@careerbuddyclub.com",
        },
        {
          specialization: "University Recognitions",
          annualfee: "ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI)",
        },
        {
          specialization: "Area",
          annualfee: "Education",
        },
      ],
      coursesAndFees: [
        {
          course: "1st Year",
          annualFee: "$6,000 ",
          duration: "Included in Tuition Fee",
          eligibility: "$1500 ",
        },
        {
          course: "2nd – 6th Year",
          annualFee: "$5,000  (per year)",
          duration: "",
          eligibility: "Optional",
        },
        {
          course: "Total Fee",
          annualFee: "$31,000 ",
          duration: "" ,
          eligibility: "$32,500 ",
        },
        
      ],
     
      whychoosepoints: [
        "The student should have qualified class 10 and 12 from any recognised education board/institution ",
        "The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject)",
        "The student must be of 17 years of age",
        "50th percentile for the students of general/EWS category is 50th percentile, 45th percentile for the students belonging to PwD, 40th percentile for the students belonging to the SC/ST/OBC category",
        "The students must possess a valid NEET Score card.",
      ],

      whystudypoints: [
        "Globally recognised medical education",
        "Affordable Fees",
        "The quality of education is at par with the international standards.",
        "Well equipped classrooms and laboratories",
        " No entrance tests required like IELTS, TOEFL, etc.",
        "Largest research centres in the region, where students can get their hands-on-learning. ",
        "Wide range of facilities for the students such as sports, arts and social and other enriching activities.",
      ],
     
     
     
     
      reviewinfo: [
        {
          id: 1,
          rating: 4.7,
          desc: "It's very Good University for Indian Students, and other Country's Students,  the climate is too cold but awesome Weather.",
          user: user_1,
          name: "",
          location: "",
        },
        {
          id: 2,
          rating: 4.5,
          desc: "I choose Mari State University for pusing MBBS in Russia. I was very much worried about the admission procedure for Medical Universities of Russia but Mari state is very student friendly University especially for Indian students and in budget.",
          user: user_2,
          name: "",
          location: "",
        },
        {
          id: 3,
          rating: 4.8,
          desc: "Mari is a great option for Indian students who wish to pursue MBBS from abroad.",
          user: user_3,
          name: "",
          location: "",
        },
      ],
      
    },

    {
      id: 3,
      logo: job_img_3,
      type: "Private",
      establishmentyear: "2009",
      Recognisedby: "UGC",
      Approvedby: "BCI, RCI, PCI, NCTE",
      state: "Uttarakhand",
      city: "Dehradun",
      Campusarea: "20+ acre",
      link: "",
      email: "admission@careerbuddyclub.com",
      founded: "",
      phone: "7300900900",
      feild: ["Education"],
      overviewsection: "Founded in 1916 and located in the Perm City of Russia, Perm State Medical University is one of the oldest and largest universities of Russia. The leading university is a popular name amongst Indian medical aspirants who want to pursue MBBS in Russia. Perm State Medical University is integrated with academic institutions of the Ural Branch of the Russian Academy of Sciences and different higher schools of Russia and Perm. The result is deepening of scientific-research studies, which are widely introduced into medical practice, as well as receiving grants of the Russian Foundation for Basic Research (RFBR) and Russian Humanitarian Science Foundation (RHF).",
      duration: "Fulltime",
      date: "18 Jul 2019",
      college: "Perm State Medical University",
      location: "Russia",
      category: ["+91 7456000100"],
      experience: "Fresher",
      salary: 900,
      salary_duration: "Monthly",
      tags: ["java", "developer"],
      english_fluency: "Fluent",
      overview: "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
      videoid: "qJBWOVM9Hsc?si",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      courses: " The fees for these programs vary, ensuring accessibility for a broad spectrum of students. The institution prioritizes transparency in its fee structures and provides flexible payment options, acknowledging the diverse financial backgrounds of its students. This approach aims to make quality education accessible to all, fostering inclusivity and diversity within the student body. Students can explore a wide range of courses, each tailored to meet industry standards, with corresponding fees designed to accommodate individual financial circumstances.",
      ranking: "Our institution consistently secures impressive rankings, a testament to our unwavering commitment to academic excellence and holistic development. Recognized regionally and nationally, these rankings affirm our dedication to providing a top-notch education, encouraging cutting-edge research, and fostering an enriching learning environment for our students.",
      awards: "Students must meet the following eligibility conditions to apply for MBBS in Russia at Perm State Medical University:", 
      opportunities: "Our institution provides a myriad of opportunities for students to thrive. Beyond academic excellence, we offer extensive career support, industry collaborations, and leadership programs. A vibrant campus life, enriched with cultural events, sports, and global exposure, fosters holistic development. The Career Resource Centre ensures students are well-prepared for professional success through internships and placement assistance. Research opportunities and collaborations with leading institutions further broaden horizons. We aim to empower our students with a diverse range of opportunities, equipping them for a dynamic and successful future.",
      campus: "Perm State Medical University boasts top-notch student life features, with award-winning campus and hostel facilities. Its sprawling campus comprises 27 buildings, including sports facilities and comfortable hostels with attached kitchens. The university prioritizes extracurricular activities with dedicated areas for sports, along with amenities like a shopping center, cultural hub, and diverse dining options for international students.",
      placement: "Perm State Medical University (PSMU) stands out as a premier government medical institution in Russia, boasting recognition from esteemed international bodies such as ECFMG, WDOMS, FAIMER, and medical councils across various countries including Canada and Australia. Its graduates hold the privilege of practicing medicine worldwide, supported by an affordable MBBS fee structure. Delivering education in English, the university prioritizes the comprehension of international students. It offers comfortable and well-equipped hostel accommodations for both genders, catering to the basic needs of students. Notably, the institution caters to a substantial Indian student population, currently exceeding 1400, and provides a specialized Indian mess for their convenience.",
      admission: "Admission to our esteemed institution follows a fair and transparent process. Prospective students can access detailed admission guidelines, ensuring clarity at every step. The selection criteria are merit-based, reflecting our commitment to academic excellence. Application procedures are streamlined, and information is readily available through our online portal. Our dedicated admission committee is always ready to assist and guide applicants through the process. With a focus on diversity and inclusivity, we welcome aspiring students to join our vibrant academic community, where they can embark on a journey of knowledge, skills, and personal growth.",
     
      image: [
        {
          img: job_img1,
        },
       
      ],
      image1: [
        {
          img1: job_img11,
          
        },
      ],

      overviewtable: [
        {
          specialization: "Short Name",
          annualfee: "PSMU",
        },
        {
          specialization: "Institute Type - Public/ Private/ Govt",
          annualfee: "Private",
        },
        {
          specialization: "Email Address",
          annualfee: "admission@careerbuddyclub.com",
        },
        {
          specialization: "University Recognitions",
          annualfee: "WDOMS, ECFMG, FAIMER, NMC(erstwhile MCI)",
        },
        {
          specialization: "Area",
          annualfee: "Education",
        },
      ],
      coursesAndFees: [
        {
          course: "1st Year",
          annualFee: "$6,000 ",
          duration: "Included in Tuition Fee",
          eligibility: "$1500 ",
        },
        {
          course: "2nd – 6th Year",
          annualFee: "$6,000 (per year)",
          duration: "",
          eligibility: "Optional",
        },
        {
          course: "Total Fee",
          annualFee: "$36,000 ",
          duration: "" ,
          eligibility: "$37,500 ",
        },
        
      ],
     
      whychoosepoints: [
        "Students must have scored at least 50% in Physics, Chemistry, and Biology in class 12 and passing marks in English. ",
        "Students must be 17 years of age as on 31 December in the admission year.",
        "Students must qualify the NEET exam. (50th percentile for general/EWS category and 40th percentile for unreserved category)",
    
      ],

      whystudypoints: [
        "Perm State Medical University is one of the leading government medical universities of Russia.",
        "The university is well-recognized by ECFMG, WDOMS, FAIMER, and Medical councils of Canada, Australia, etc.",
        "The faculty teaches medicine in the English language to international students for better understanding. ",
        "It has state-of-the-art infrastructure including well-equipped laboratories, advanced classrooms, libraries, sports facilities, etc.",
        "Use of promobots for the training of Indian students to provide real-time patient-doctor exposure.",
        "PSMU is affiliated with reputed hospitals to provide clinical training to its students.",

      ],

      reviewinfo: [
        {
          id: 1,
          rating: 4.7,
          desc: "PSMU has a very wonderful faculty and they are very cooperative. The campus and its environment is very positive.",
          user: user_1,
          name: "",
          location: "",
        },
        {
          id: 2,
          rating: 4.5,
          desc: "PSMU has made the best efforts to provide all the facilities for the students like Faculties, events, sports, etc. The academic experience with a world class infrastructure.",
          user: user_2,
          name: "",
          location: "",
        },
        {
          id: 3,
          rating: 4.8,
          desc: "Perm State University is equipped with latest technology & also has robots involved in teaching.",
          user: user_3,
          name: "",
          location: "",
        },
      ],
      
    },

];

export default university_details;
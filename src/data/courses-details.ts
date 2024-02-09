import { IcourseType } from "@/types/course-details";
import job_img_1 from "@/assets/images/logo/media_22.webp";
import Image, { StaticImageData } from "next/image";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_22.jpg";

const courses_details: IcourseType[] = [
  {
    id: 1,
    logo: job_img_1,
    coursename: "B.Tech",
    coursefullform: "Bachelor in Technology",
    courseoverview:
      "Discover a transformative B.Tech journey that bridges academia and industry. Our unique program blends cutting-edge education with practical skills, ensuring employability and fostering innovation. Join us to shape your future with hands-on expertise.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Technology",
      },
      {
        particulars: "Commonly known As",
        details: "B. Tech Course",
      },
      {
        particulars: "Level",
        details: "Undergraduate",
      },
      {
        particulars: "B.Tech Course Duration",
        details: "4 years",
      },
      {
        particulars: "Semester/Yearly",
        details: "Semester",
      },
      {
        particulars: "B Tech entry procedure",
        details: "Entrance test followed by counselling by the authorities.",
      },
      {
        particulars: "B Tech Entrance Exam",
        details: "JEE Main , JEE Advanced , GATE",
      },
      {
        particulars: "B Tech Eligibility Criteria",
        details:
          "Should have completed class 10+2 in PCM or PCB from a recognized institute/board",
      },
      {
        particulars: "B Tech Syllabus",
        details: "The syllabus depends on B Tech specializations",
      },
      {
        particulars: "B Tech Course Fees",
        details: "INR 5,00,000 to Rs. 12,00,000",
      },
      {
        particulars: "Top B Tech Government Colleges",
        details: "IITs, NITs, IITs",
      },
      {
        particulars: "Top B Tech Private Colleges",
        details: "VIT,BITS,MIT",
      },
      {
        particulars: "Types of Careers",
        details:
          "Civil Engineer, Mechanical Engineer, Computer Engineer, Electrical Engineer, Marine Engineer",
      },
      {
        particulars: "Top Recruiters",
        details:
          "Google, Apple, Hindustan Unilever, ISRO, Microsoft, Amazon, Flipkart, Intel, Tata Consultancy",
      },
    ],

    whychoose:
      "Engineering is one of the dream professions of many Indian students and families. In this regard, several students apply for B Tech courses in various engineering colleges and work hard to achieve them. One of the major reasons why BTech is one of the top bachelor's degrees is that it offers excellent career opportunities and tremendous. If you have completed Class 12th and are wondering why you are studying a BTech, then go through the key benefits of studying this course given below.",

    whychoosepoints: [
      "B Tech course gives a wide number of options for engineering specializations, which will provide students with a broader scope by providing a wider range of options as well as a greater variety of professions",
      "Candidates pursuing a B Tech degree are more theoretical and practical since the whole course teaches and forms students with the practical knowledge and theories essential for their particular sectors",
      "The demand for BTech engineers has always been the boom, as they form the core of the companies while maintaining the upcoming trends in their engineering policies. Engineers' worth has increased dramatically as a result of the rising population in India and technological advancement. As a result, there are various job opportunities for BTech graduates in various sectors",
      "The average B Tech salary of an experienced engineer can be as high as INR 40,00,000 Per Annum to INR 50,00,000 Per Annum which can rise to more depending upon the recruiter and candidate's skills.",
      "Securing a higher degree will not only enhance your study skills but also highlight your position in the professional field. If the candidates pursuing the B Tech course have leadership skills, they can proceed with their start-ups. With the emergence of new technologies and styles, new engineering graduates are starting up their businesses",
      "When speaking about BTech jobs, there is a lot of abundance in the facilities as the BTech is very diverse. One can opt for jobs in private and public sector undertakings too, depending on the criteria met by the company",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"There are numerous exams in India, divided into national, state level, and university levels. The national level top B Tech exams are JEE Main, JEE Advanced state-level BTech exams include WBJEE, and MHT CET; university-level exams include BITSAT, VITEEE, and SRMJEEE. To know more about these exams that aid in access to BTech and their important dates, read the following.",
    coursesEntrance: [
          {
            Exams:"JEE Main",
            Entrance:"Conducted by NTA at a national level for Engineering candidates all over the India. The mode of the exam is online mode.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"JEE Advanced",
            Entrance:"Conducted online by the IITs at national level. The JEE Advanced 2024 Exam will be conducted by IIT Madras.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"BITSAT",
            Entrance:"Conducted by the Birla Institute of Technology and Science, Pilani, for admissions to UG courses at its campuses at Pilani, Goa and Hyderabad.",
            TExams:"University Level",
            MExams:"Online - Computer Based Test (CBT)",
          },
          {
            Exams:"SRMJEEE",
            Entrance:"Conducted at the university level for admissions into BTech, MTech and BSc courses at the SRM Institute of Science and Technology campuses.",
            TExams:"University Level",
            MExams:"Online",
          },
          {
            Exams:"GUJCET",
            Entrance:"It is a state level entrance exam conducted by Gujarat Secondary and Higher Secondary Education Board for admission to for admission to BTech and BPharma courses.",
            TExams:"State Level",
            MExams:"Online",
          },
          {
            Exams:"MHT CET",
            Entrance:"Conducted by the Government of Maharashtra at the state level for admission to for admission to various UG courses.",
            TExams:"State Level	",
            MExams:"Online - Computer Based Test (CBT)",
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
    coursename: "B Arch ",
    coursefullform: "Bachelor of Architecture",
    courseoverview:
      "B Arch is an undergraduate degree programme available for fresh class 12th pass-out candidates. Candidates need to pass the entrance exams to get admission to the top Bachelor of Architecture colleges in India. Go through the important details of this programme given below.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Architecture",
      },
      {
        particulars: "Industry ",
        details: "Architecture ",
      },
      {
        particulars: "BArch course duration ",
        details: "Five Years",
      },
      {
        particulars: "Admission Process ",
        details: "Via Entrance Exam ",
      },
      {
        particulars: "Entrance Exam",
        details: "NATA and JEE Main",
      },
      {
        particulars: "B Arch Eligibility ",
        details: "Passed class 10+12 with an aggregate of 50% marks or hold diploma",
      },
      {
        particulars: "BArch Colleges in India",
        details: "IIT Roorkee,IIT Kharagpur,School of Planning and Architecture ",
      },
      {
        particulars: "Colleges in Abroad",
        details:
          "The University of Melbourne, Australia, University of Cambridge, UK, Princeton University, USA",
      },
      {
        particulars: "B Arch Course Fees",
        details: "INR 2-8 LPA",
      },
      {
        particulars: "Career Options",
        details: "Architecture Designer, Project Architect, Principal Architect, Design Architect, Interior Architect, and more.",
      },
      {
        particulars: "Top Recruiters ",
        details: "Gaursons India, Architect Hafeez Contractor, RSP Architects Ltd, Kembhavi Architecture Foundation, Raj Rewal Associates, so on.",
      },
     
    ],

    whychoose:
      "If you want to study architecture, you must recognize that it is both a creative and academic journey. Check the benefits of pursuing the B Arch course given below. ",

    whychoosepoints: [
      "Opportunity to travel around the world - By pursuing a B Arch course you will get to travel the world and learn about different architectural styles. As an architect, you will have the opportunity to meet new people and travel extensively. Whether you are overseeing or consulting, you will be able to go around the world to see the basic design of your work and witness it being created. Your drive to travel, broaden your horizons, learn new things, and experiment will accompany you wherever you go.",
      "Architects are well-paid and well-liked - People that choose to become architects will do more than only design buildings, workplaces, and structures. They will design houses, places where people will live, work, laugh, and spend the majority of their time. Places where individuals may feel comfortable and calm, places where they can be creative and replenish their batteries. ",
      "To Become an Outstanding Problem Solver - Acquiring technical talents to handle design difficulties will elevate you to the status of an architect. An architecture degree teaches you how to understand facts and information in order to create a building or solve an issue. You will learn about the design approach and rationale used to construct a building that may be utilized to tackle a wide range of problems unrelated to architecture.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"There are numerous exams in India, divided into national, state level, and university levels. The national level top B Tech exams are JEE Main, JEE Advanced state-level BTech exams include WBJEE, and MHT CET; university-level exams include BITSAT, VITEEE, and SRMJEEE. To know more about these exams that aid in access to BTech and their important dates, read the following.",
    coursesEntrance: [
          {
            Exams:"JEE Main",
            Entrance:"Conducted by NTA at a national level for Engineering candidates all over the India. The mode of the exam is online mode.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NATA",
            Entrance:"The Council of Architecture (COA) administers the National Aptitude Test in Architecture (NATA), a national-level undergraduate test for admission to 5-year B Arch and B. Planning programmes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AMUEEE",
            Entrance:"Aligarh Muslim University (AMU) holds the Aligarh Muslim University Engineering Entrance Examination (AMUEEE) to grant admission to engineering and architecture programmes provided in the Faculty of Engineering & Technology, such as B Arch, BE, and BTech.",
            TExams:"University Level",
            MExams:"Online ",
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
    coursename: "B Ed  ",
    coursefullform: "Bachelor of Education",
    courseoverview:
      "B Ed full form is Bachelor of Education. It is a 2 to 4 years undergraduate degree that allows students to become teachers in schools and colleges/ universities or become highly paid private tutors or professors. BEd Syllabus covers subjects including teaching methods, educational psychology and specific knowledge. In India, the National Council for Teacher Education (NCTE) sets standards for Bachelor of Education courses. NCTE regulates B Ed Courses to ensure quality by accrediting institutions maintaining curriculum guidelines and promoting development for better future educators.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Education ",
      },
      {
        particulars: "Industry ",
        details: "Education ",
      },
      {
        particulars: "Eligibility Criteria ",
        details: "Bachelor's degree in any discipline",
      },
      {
        particulars: "Duration",
        details: "2 years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance exam or merit-based",
      },
      {
        particulars: "Course Structure",
        details: "Four semesters",
      },
      {
        particulars: "Course Topics",
        details: "Educational psychology, teaching methodology, curriculum development, classroom management, assessment techniques, etc.",
      },
      {
        particulars: "Career Options",
        details:
          "Teacher, Educator, curriculum developer, Education counselor, instructional designer, educational researcher, content writer, etc.",
      },
      {
        particulars: "Further Studies",
        details: "	Master of Education (M.Ed), PhD in Education",
      },
    
    ],

    whychoose:
      "Opting for a B.Ed degree can be a choice for individuals who are passionate about education and moulding young minds. Here are some compelling reasons that might persuade you to consider pursuing it:",

    whychoosepoints: [
      "Transforming lives: Teaching is a fulfilling profession that enables you to directly influence the lives of your students. You have the power to nurture their curiosity, guide their learning journey and inspire them to realise their potential.",
      "Shaping the future: Teachers play a role in shaping generations. You will be entrusted with the responsibility of imparting knowledge, values and critical thinking skills that will stay with them for a lifetime. ",
      "Addressing challenges: Education holds the key to addressing social issues. As an educator you can contribute towards building an equitable society by promoting inclusivity, critical thinking and responsible citizenship.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"B Ed entrance exams are your gateway to prestigious B.Ed courses across India. But navigating the landscape of these diverse exams can be overwhelming. This guide will provide you with the knowledge and resources to confidently embark on your B Ed journey in 2024.",
    coursesEntrance: [
          {
            Exams:"IGNOU B Ed",
            Entrance:"The Bachelor of Education (B.Ed.) programme of Indira Gandhi National Open University (IGNOU) has been designed with the aim to develop an understanding of teaching-learning process at secondary and senior-secondary level among student teachers.",
            TExams:"National Level",
            MExams:"Offline",
          },
          {
            Exams:"CUET PG",
            Entrance:"A list of CUET PG Courses 2024 will help you have an insight into the PG programs offered at each and every CUET Central University.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"MAH B.Ed CET ",
            Entrance:"MAH B.Ed CET (Maharashtra Bachelors in Education Common Entrance Test) is conducted by the State Common Entrance Test Cell, Maharashtra, for admission to B.Ed (Bachelor of Education) courses in various colleges in Maharashtra.",
            TExams:"State Level",
            MExams:"Online ",
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
    coursename: "B. Des  ",
    coursefullform: "Bachelor of Design",
    courseoverview:
      "BDes or Bachelor of Design is a full-time four-year undergraduate course in design. It is a completely offline programme with an array of specializations including product design, fashion design, communication design, and textile design, to name a few.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Design",
      },
      {
        particulars: "Top B Des Specializations",
        details: "Fashion Design, Leather Design, Game Design, Graphic Design, Accessory Design, Textile Design, Fashion Communication, Knitwear Design",
      },
      {
        particulars: "Eligibility Criteria ",
        details: "10+2 with at least 50% from a recognised board of secondary education",
      },
      {
        particulars: "BDes Selection Criteria",
        details: "Entrance Exam + PI",
      },
      {
        particulars: "BDes Entrance Exams",
        details: "NIFT, UCEED NID DAT, CUET-UG, UPES DAT, etc.",
      },
      {
        particulars: "Top Job Roles after BDes",
        details: "Costume Designer, Fashion Merchandiser, Graphic Designer, Design Manager, Interior Designer, Entrepreneur, Colour Consultant",
      },
      {
        particulars: "Top Recruiters for BDes Graduates",
        details: "eBay, Oracle, Balenciaga, Myntra, Walt Disney, etc.",
      },
     
    
    ],

    whychoose:
      "Anyone with a passion for design, fashion and fashion technology can opt for the Bachelor of Design course. However, there are a few reasons that set the BDes course aside from other similar courses. Some of these are:",

    whychoosepoints: [
      "Theory and Practical Knowledge - The B.Des course is an innovative course based not only on theoretical knowledge but also on project and studio-based learning along with live projects. Students will be pushed to work with tools for designing, creative practice and innovation. ",
      "Exposure to Real World - The B.Des course spans eight semesters wherein students get the opportunity to participate in intensive workshops, trade fairs, and museum exhibitions. Further, they get to network with visiting professionals from the industry who familiarise students with various markets.  ",
      "High-Paying Career Options - While the starting salary can be low, those with experience can expect to earn a monthly income as high as INR 80,000 or even higher. Bachelor of Design lets one grab opportunities at A-list companies like Wipro Technologies, VIP Industries Ltd, Whirlpool of India Ltd., and Philips, to name a few. ",
      "Vast Range of Specialisations - Given how popular and in-demand Bachelor of Design is, the course can be customised to suit one’s needs. From fashion design to game design, one can choose from a wide spectrum of specializations that help one make their marks in their respective fields.",
      "Launch Own Business - Some B.Des courses integrate business-related courses like entrepreneurship or design management. They held to build a strong portfolio, get market insights, create prototypes and refine designs. ",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"As mentioned above, students interested in studying B.Des should clear the required entrance exam in order to be considered for admission. Some of the top and most popular BDes entrance exams are as follows:",
    coursesEntrance: [
          {
            Exams:"NIFT",
            Entrance:"The NIFT entrance exam, conducted by the National Institute of Fashion Technology, is a Computer Based Test (CBT) comprising Creative Ability Test (CAT) and General Ability Test (GAT). After the CBT, one’s result determines if they will be shortlisted for the Situation Test and enrol in BDes at NIFT.",
            TExams:"National Level",
            MExams:"Offline",
          },
          {
            Exams:"UCEED",
            Entrance:"Admission to the Bachelor of Design courses at IIT Bombay, IIT Guwahati, IIT Delhi, IIT Hyderabad, and IIITDM Jabalpur are done through the Undergraduate Common Entrance Exam for Design. Apart from these institutes, the UCEED exam scorecard is recognized by many other institutes as well. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"UPES DAT ",
            Entrance:"UPES DAT exam is organised by the University Of Petroleum And Energy Studies, Dehradun in online mode. It is a one-hour test that determines one’s admission to UPES’ B.Des course.",
            TExams:"National Level",
            MExams:"Online ",
          },
          {
            Exams:"AIEED",
            Entrance:"The All India Entrance Examination for Design is the BDes (Bachelor of Design) entrance exam for admission to the UGC-approved ARCH College Design & Business. It is nothing but screening held in multiple sessions in online mode.",
            TExams:"National Level",
            MExams:"Online ",
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
    id: 5,
    logo: job_img_1,
    coursename: "B PEd",
    coursefullform: "Bachelor of Physical Education",
    courseoverview:
      "BPEd full form is Bachelor of Physical Education, is an undergraduate degree program that focuses on the field of physical education and sports. The course is designed to provide students with knowledge and skills related to physical fitness, sports training, and teaching physical education.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor in Physical Education",
      },
      {
        particulars: "Degree Type",
        details: "Graduation",
      },
      {
        particulars: "Course Duration",
        details: "3 - 4 years",
      },
      {
        particulars: "Education Mode",
        details: "Full - Time",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Completed class 12th from recognised school board with 50% aggregate marks.",
      },
      {
        particulars: "Admission Process",
        details: "MAH BPEd CET, AP PECET, TS PECET, BHU BPEd Entrance Exam.",
      },
      {
        particulars: "Top Colleges",
        details: "Laxmibai National College of Physical Education, Gwalior, Indira Gandhi Institute of Physical Education and Sports Sciences, New Delhi, Lakshmibai National Institute of Physical Education, Thiruvananthapuram.",
      },
     
    
    ],

    whychoose:
      "Studying BPEd, or Bachelor of Physical Education, offers numerous advantages and opportunities. Here are some topmost reasons to pursue this course:",

    whychoosepoints: [
      "Passion for Sports and Fitness: If you have a genuine love for sports, games, and physical fitness, studying BPEd allows you to delve deeper into these areas and develop a comprehensive understanding of them.",
      "Career Options: BPEd opens up a wide range of career prospects. Graduates can work as physical education teachers, sports trainers, fitness instructors, sports coaches, sports administrators, or even start their own fitness centers or sports academies.",
      "Impact on Others: As a BPEd professional, you have the opportunity to make a positive impact on the lives of others. You can inspire and guide students to lead healthy, active lifestyles and instill in them the importance of physical fitness.",
      "Personal Growth: The course not only enhances your knowledge in physical education but also helps you develop skills such as communication, leadership, teamwork, and problem-solving, which are valuable in various aspects of life.",
      "Ever-Growing Industry: The sports and fitness industry continues to expand, creating a demand for qualified professionals. Studying BPEd ensures you stay relevant and equipped with the skills needed to thrive in this dynamic field.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"The best entrance examinations for obtaining a B PEd are national-level or state-level education entrance exams that are administered by testing organizations or by state education boards. The following are some of the popular B.P.Ed entrance exams:",
    coursesEntrance: [
          {
            Exams:"CUET",
            Entrance:"NTA conducts Common University Entrance Test or CUET for admission to UG courses of central, state, private or deemed universities.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"RIE CEE ",
            Entrance:"RIE CEE (Regional Institute of Education Common Entrance Examination) is an entrance exam conducted every year that offers UG and PG courses. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AP PECET",
            Entrance:"The Andhra Pradesh Physical Education Common Entrance Test (AP PECET) is an entrance exam conducted by the Directorate of Technical Education, Government of Andhra Pradesh for admission into various U.G, PG and Diploma Courses in physical education institutes affiliated to universities of Andhra Pradesh.",
            TExams:"National Level",
            MExams:"Online ",
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
    id: 6,
    logo: job_img_1,
    coursename: "MBA",
    coursefullform: "Master of Business Administration",
    courseoverview:
      "BPEd full form is Bachelor of Physical Education, is an undergraduate degree program that focuses on the field of physical education and sports. The course is designed to provide students with knowledge and skills related to physical fitness, sports training, and teaching physical education.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Business Administration",
      },
      {
        particulars: "Degree Type",
        details: "Post Graduate",
      },
      {
        particulars: "Course Duration",
        details: "2 years",
      },
      {
        particulars: "Education Mode",
        details: "Full-Time MBA, Part-Time MBA, Distance MBA, Online MBA, Executive MBA, Integrated MBA",
      },
      {
        particulars: "Top MBA Specializations in India",
        details: "Sales, Marketing, Finance, Human Resources, IT, Operations, Digital Marketing, Business Analytics",
      },
      {
        particulars: "Top B-Schools in India",
        details: "IIM Ahmedabad, IIM Indore, IIM Bangalore, FMS Delhi, IIM Calcutta, IIM Kozhikode, IIM Lucknow, SPJIMR Mumbai, XLRI, etc.",
      },
      {
        particulars: "Major MBA Recruiters",
        details: "Amazon, Citigroup, Deloitte, Apple, Bain & Company, Flipkart, Microsoft, Google, Tesla, LinkedIn, PepsiCo, Unilever, Nike, Ernst & Young, and Deutsche Bank.",
      },
     
    
    ],

    whychoose:
      "MBA is an internationally acclaimed degree preferred by individuals who wish to gain knowledge of business practices. Here are a few top reasons to choose an MBA:",

    whychoosepoints: [
      "Developing Managerial Skills - MBA programme helps develop business acumen and managerial skills and prepares a candidate to perform various managerial duties. An MBA degree also instills communication, analytical, logical, comprehension, and various other crucial skills.",
      "Better Career Opportunities - With an MBA from a well-recognized institute, one can find high-paying in some of the biggest organizations not just in India but abroad as well. Many working professionals do MBA to boost their careers and grab better career opportunities.",
      "Developing Leadership Skills - With an MBA degree, one can acquire leadership roles in top companies across the world. It prepares a candidate to lead a team, convey his ideas clearly to the team members, make decisions that can impact hundreds of people, and keep the functioning and operations of the business intact.",
      "Entrepreneurial Skill Development - An MBA helps students understand how a business works and what contributes to its success; thus, preparing them for entrepreneurial roles and starting their own company.",
      "Lucrative Salary & Great Benefits - Students are offered exceptional salary packages between 20-50 lakhs per annum after graduating from an MBA course from a well-established college or university. Through IIM placements, one can even get a package of 90 lakhs per annum and above.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"Mentioned below are some of the top national, state, and university-level MBA entrance exams required to make a cut into the MBA colleges.",
    coursesEntrance: [
          {
            Exams:"CAT",
            Entrance:"The Common Admission Test (CAT) is India’s most prestigious national-level entrance examination, which permits aspirants to get into top management institutes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"GMAT",
            Entrance:"The Graduate Management Admission Test (GMAT) is a computer adaptive test (CAT) intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program, such as a Master of Business Administration (MBA) program. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"ATMA",
            Entrance:"ATMA (AIMS Test for Management Admissions) is a national-level entrance exam conducted by AIMS (Association of Indian Management School). It is a single-window test held for admission to various post-graduate programs like MBA, PGDM, MMS, etc. The exam is scheduled 4-5 times in a year.",
            TExams:"National Level",
            MExams:"Online ",
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
    id: 7,
    logo: job_img_1,
    coursename: "BSc",
    coursefullform: "Bachelor of Science",
    courseoverview:
      "Bachelor of Science, or BSc, is a three-year undergraduate degree and one of the most popular programmes chosen by students with a flair for science and a passion for research-oriented, calculative approaches based on a tried-and-true method. The primary objective of BSc courses is on experimentation, investigation, and discovery.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Science",
      },
      {
        particulars: "Courses Offered",
        details: "BSc Physics, BSc Nursing, BSc Computer Science, BSc Geography, BSc IT, BSc Biology, BSc Forensic Science, etc.",
      },
      {
        particulars: "Course Duration",
        details: "3 years",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream.",
      },
      {
        particulars: "Top Colleges",
        details: "Delhi University, Madras Christian College, Christ University, Stella Maris College, Presidency University, etc.",
      },
      {
        particulars: "Careers Scope",
        details: "Candidates can either pursue a master's degree or work in specialization-specific jobs.",
      },
      {
        particulars: "Jobs Opportunity",
        details: "Scientist, Research Associate, Teacher, Professor, Lab Chemist, Statistician, etc.",
      },
     
    ],

    whychoose:
      "There are numerous reasons to pursue a BSc Course, some of which are listed below:",

    whychoosepoints: [
      "Various Specialisation Available",
      "Skill Orientd Courses",
      "Opportunities For Various Higher Education Options",
      "Several Career Options",
      "Comprehensive Syllabus & Subjects",
      "Greate Earning Opportunities",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"For BSc admission, various colleges/universities hold an entrance exam. The following is a list of BSc entrance exams required for admission to this course, along with their descriptions:",
    coursesEntrance: [
          {
            Exams:"CUET",
            Entrance:"The Central University Entrance Test (CUET) will give students a single window opportunity to apply to these participating Universities / Institute(s) across the nation for admission to various BSc programmes of the participating Central Universities. No weight will be given to class 12th results when determining admission to undergraduate programmes at Central Universities; admission will solely be based on CUET scores.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"OUAT",
            Entrance:"For admission to the undergraduate level, the University of Agriculture and Technology of Orissa (OUAT) holds an annual examination.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NPAT ",
            Entrance:"NPAT or NMIMS Programs is an entrance exam for admission to BSc courses such as BSc (Finance), BSc (Economics).",
            TExams:"National Level",
            MExams:"Online ",
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
    id: 8,
    logo: job_img_1,
    coursename: "LLM",
    coursefullform: "Master of Laws",
    courseoverview:
      "LLM full form is Master of Laws (LL.M/ L.L.M/ M.L./ Latin Legum Magister). LLM is a postgraduate law course in India that typically lasts for one to two years. During this course students have the opportunity to delve deeply into any specific area of law through research and studies. LLM degree can only be pursued by candidates who have mandatorily completed their LLB or Bachelor of Laws degree from a recognized institute in India.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Law",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Bachelor's degree in law (LLB) with at least 55% aggregate marks.",
      },
      {
        particulars: "Course Duration",
        details: "2 years",
      },
      {
        particulars: "Top Colleges",
        details: "NLSIU, Symbiosis Law School, NLU Delhi, NALSAR, NUJS, etc.",
      },
      {
        particulars: "Course Specializations",
        details: "Criminal Law, Business Law, Environmental Law, Cyber Law, etc.",
      },
      {
        particulars: "Career Opportunities",
        details: "Legal Consultant, Corporate Lawyer, Public Prosecutor, Legal Advisor, etc.",
      },
      {
        particulars: "Job Locations",
        details: "Law Firms, Corporate Houses, Government Agencies, Legal Consultancies, etc.",
      },
     
    ],

    whychoose:
      "If your career aspirations or personal life requires it, you may decide to take an LLM degree in India. Here are some key factors to consider while you’re thinking about pursuing an LLM course in India:",

    whychoosepoints: [
      "Upgrading Career Prospects: Specialisation: An LLM allows you to focus on the subfields of law such as human rights or business laws in more detail. It can focus on areas such as environmental legislations and business policies. Law degree can delve into further details of any given legal topic than normal classes would. Such job applicants can focus on a particular area of law and become more interesting to potential employers that may employ them.",
      "Advantages of studying in India: Cost-effectiveness: Not only pursuing LLM in India is more cost effective than pursuing LLM abroad, it also helps students to understand the Indian legal system in a better way and practice law in India.",
      "Other factors to consider: Course reputation: A good LLM degree from an accredited institution can do wonders for your legal career. It will not only enhance the reputation of your degree but will also demonstrate the potential employers how high skilled you are. Faculty expertise: There are some of the best and learned legal faculty in the world at reputed Indian law institutes. To acquire all your information concerning the law from this honorable and learned group of people will help you a lot in becoming a good legal practitioner.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"There are multiple entrance exams for LLM in India, but some of the most popular ones are:",
    coursesEntrance: [
          {
            Exams:"CLAT",
            Entrance:"This is a national-level exam conducted by the Consortium of National Law Universities (NLUs) for admission to postgraduate law programs in 22 NLUs and other participating universities.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AILET",
            Entrance:"This is another national-level exam conducted by the National Law University, Delhi (NLU Delhi) for admission to its LLM programme.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"LSAT",
            Entrance:"This is an international standardised test conducted by the Law School Admission Council (LSAC) for admission to law schools in India and around the world.",
            TExams:"National Level",
            MExams:"Online ",
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
    id: 9,
    logo: job_img_1,
    coursename: "B Pharma",
    coursefullform: "Bachelor of Pharmacy",
    courseoverview:
      "B Pharma or Bachelor of Pharmacy is a four year undergraduate degree programme in the field of Pharmacy. As per the B Pharma Syllabus, topics that are included in the course are Drugs and Medicines, Medicinal Chemistry, Pharmaceutical Engineering etc. After completing the B Pharma course, students can expect to be offered multiple career opportunities with lucrative packages, in both public and private sectors.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Pharmacy",
      },
      {
        particulars: "Regulatory Body",
        details: "	Pharmacy Council of India (PCI)",
      },
      {
        particulars: "Course Duration",
        details: "4 years",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Class 12th Board exams with 50% aggregate mark in science stream with Physics, Chemistry, and Biology/Math.",
      },
      {
        particulars: "Job Profiles",
        details: "Wholesaler, Drug Inspector, Pharmacist, Quality Assurance Associate, etc.",
      },
      {
        particulars: "Higher Education",
        details: "M Pharma, MBA in Pharmaceutical Management, PG Diploma in Pharmacy.",
      },
      
    ],

    whychoose:
      "There are several compelling reasons why one should pursue a bachelor's degree in pharmacy i.e, a B Pharma degree. Apart from the fact that a B Pharma course will assist in building a profession as a Medical Representative, Scientific Writing, Medical Scripting, Clinical Research, and so on, there are several additional benefits attached to a B Pharma course as well. Thus, some of the reasons why one should choose also a B Pharma course are mentioned below:",

    whychoosepoints: [
      "Government Jobs: After completing a B Pharma degree, all eligible candidates may easily be qualified to work for a variety of government agencies and hospitals across the country. ",
      "Opportunities Across Private Jobs: Apart from government agencies, a B Pharma course graduate may easily grab an opportunity in the private sector with lucrative salary packages across the country. ",
      "Working with Patients: In addition to being a pharmacist, one will play an important role in the health-care system by offering asthma care, cholesterol testing, diabetes disease management, and bone density scans, among other things.",
      "Opportunities for a Wide Range of Careers: Working at a retail pharmacy, whether in a healthcare facility or in the community, is the most obvious option for pharmacists. The B Pharma job includes offering people over-the-counter and prescription drugs, as well as counseling.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"B Pharma admissions are determined by a student's performance on several entrance exams administered by various colleges. The B Pharma cut-off scores differ from one college to the next. A student can pursue a B Pharma course through a variety of tests. The following are some of the most popular admission or B Pharma entrance exams:",
    coursesEntrance: [
          {
            Exams:"BITSAT",
            Entrance:"BITSAT stands for the Birla Institute of Technology and Science Admission Test. Candidates seeking an admission in the on-campus undergraduate engineering courses offered at any of the three campuses of Birla Institute of Technology and Science (BITS) Pilani appear for BITSAT.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"UPSEE",
            Entrance:"UPSEE stands for Uttar Pradesh State Entrance Examination. It is a state-level entrance examination conducted by Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh. UPSEE is conducted for admission to various undergraduate and postgraduate courses in engineering, management, pharmacy, architecture, and other fields offered by colleges and universities in Uttar Pradesh.",
            TExams:"State Level",
            MExams:"Online",
          },
          {
            Exams:"AP EAMCET",
            Entrance:" Andhra Pradesh State Council of Higher Education (APSCHE) organizes the Andhra Pradesh Engineering Agriculture Pharmacy Common Entrance Test or AP EAMCET which is a common entrance exam conducted by the Jawaharlal Nehru Technological University, Kakinada every year.",
            TExams:"State Level",
            MExams:"Online ",
          },
          
    ],


    reviewinfo: [
      {
        id: 10,
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
    id: 10,
    logo: job_img_1,
    coursename: "BDS",
    coursefullform: "Bachelor of Dental Surgery)",
    courseoverview:
      "BDS full form Bachelor of Dental Surgery, is a 5-year course that helps candidates become dental surgeons. It comprises 4 years of classroom education and 1 year of mandatory rotating internship. Aspirants have to successfully complete class 12 exam or hold an equivalent degree with at least 85% from a well-known, recognized institute. BDS Syllabus covers an in-depth knowledge of various aspects of dental problems, denture, and surgery in the same fields. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Dental Surgery",
      },
      {
        particulars: "Course Level",
        details: "Undergraduate ",
      },
      {
        particulars: "Course Duration",
        details: "5 years",
      },
      {
        particulars: "Course Mode",
        details: "Full Time/ Part-Time",
      },
      {
        particulars: "Minimum Qualification Required",
        details: "10+2",
      },
      {
        particulars: "HSelection Process",
        details: "Entrance Exams",
      },
      
    ],

    whychoose:
      "Candidates may choose to pursue a BDS course to study the discipline of Dental Surgery, which is known for its vast scope in the field of medical sciences, and in terms of brighter career prospects. BDS course graduates may expect a salary up to INR 50,000 per month, depending on their expertise, skillset, type of employment, job roles, and theoretical knowledge. Listed below are the prime reasons for choosing a BDS course:",

    whychoosepoints: [
      "Decent Course Fee: BDS course fee, as compared to other medical courses, is much less expensive and more accessible to candidates belonging from all walks of life. A BDS degree is undoubtedly very affordable for all candidates to build a successful career in the field of dental surgery. ",
      "Course Duration: BDS Course duration is 5 years, and therefore, students pursuing the degree are awarded their graduation significantly earlier than MBBS degrees. This enables the BDS graduates to explore job opportunities rather quickly than other medical graduates, and build up an impressive work experience over the years.",
      "Easy Admission: Several accredited dental institutes with connected teaching hospitals offer BDS admissions to students wishing to pursue a career in dental surgery. The admission process for the same is rather simple and straightforward. Students need to qualify the entrance examination to be eligible for BDS course admission. ",
      "Availability of Seats: The availability of seats for a BDS course admission is usually higher than other medical courses due to the low level of competition. Therefore, students who secure the minimum required cut-off scores for admission, candidates easily grab a seat for pursuing BDS course.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"The admission to BDS courses is usually conducted through the National Eligibility cum Entrance Test (NEET). Every year, thousands of candidates appear for the NEET entrance exam for admission to a number of medical courses. The National Testing Agency (NTA) conducts the NEET UG entrance exam and is responsible for conveying all the important guidelines to the aspirants through notifications published on their official website. The examination is held for 3 hours and 20 minutes, with the total marks of 720: 180 questions from each Physics, Chemistry, Biology (Botany) and Biology (Zoology) sections. The syllabus of the NEET UG exam is the same as 10+2 PCMB.",
    coursesEntrance: [
          {
            Exams:"NEET",
            Entrance:"NEET UG is the single national level entrance test for admission to MBBS and BDS colleges in India. NEET exam is compulsory to become a doctor in India.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"IPU CET",
            Entrance:"IPU CET Exam is also known as the Guru Gobind Singh Indraprastha University Common Entrance Test. It is a university-level exam organized annually to offer the candidate admission into various undergraduate and postgraduate courses. Applicants will be offered admission to GGSIPU and other associated colleges for B.Tech, BCA, BBA, LLB, MCA etc. For MBBS and BDS programmes, applicants must always apply based on their NEET scores.",
            TExams:"National Level",
            MExams:"Online",
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
    id: 11,
    logo: job_img_1,
    coursename: "BMS",
    coursefullform: "Bachelor of Management Studies",
    courseoverview:
      "BMS full form is Bachelor of Management Studies. It is a three-year undergraduate program that offers advanced studies in the field of Management. BMS course provides in-depth knowledge of basic Management concepts such as Human Resource Management, Economics, and Business Studies necessary to run an organization efficiently. A BMS course includes various training sessions and extra and co-curricular activities that are essential for the overall development of students and also help them understand real-world challenges. BMS subjects also teach budding entrepreneurs how to expand their businesses with the least risks. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Management Studies",
      },
      {
        particulars: "Course Level",
        details: "Undergraduate ",
      },
      {
        particulars: "Course Duration",
        details: "3 years",
      },
      {
        particulars: "Top BMS Specializations",
        details: "Retail and Sales Management, Marketing, Finance, Human Resources, IT, Digital Marketing, Business Analytics, etc.",
      },
      {
        particulars: "Popular BMS Entrance Exams",
        details: "CUET, DU JAT, MUCMET, St. Xavier’s BMS Entrance Test, etc.",
      },
      {
        particulars: "Top BMS Colleges in India",
        details: "IIM Ahmedabad, IIM Indore, IIM Bangalore, FMS Delhi, IIM Calcutta, Aryabhatta College, SPJIMR Mumbai, XLRI Jamshedpur, etc.",
      },
      
    ],

    whychoose:
      "A Bachelor of Management Studies is one of the most sought-after courses in this day and age.  Aspirants who wish to pursue a career in the field of management are ideal candidates for this course as it helps students understand the subject of management and apply the necessary skills to plan and organize a business. Planning, organizing, directing, staffing, controlling, and additional strategic management are some of the elements included in a BMS course.",

    whychoosepoints: [
      "Due to BMS being a professional degree program, the course standard is much more sophisticated than other management programs. ",
      "A BMS course is very comparable to a BBA degree. Although the subjects are essentially the same, a BBA degree costs an average of Rs. 1.5 lakh PA whereas a BMS degree costs an average of Rs. 75,000 PA.",
      "A BMS course offers students a chance to understand and learn about the business and management world from a different point of view than traditional management degrees.",
      "It can also be argued that BMS graduates receive better career prospects than other management graduates.",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"BMS course admission can be secured on the basis of past academic performance and merit in Class 12 final examination or on the basis of entrance examination scores depending on the institute that an aspirant chooses.",
    coursesEntrance: [
          {
            Exams:"CUET",
            Entrance:"The Ministry of Education (MoE), Government of India (GOI) has established the National Testing Agency (NTA) as an independent, autonomous, and self-sustained premier testing organization under the Societies Registration Act (1860) for conducting efficient, transparent and international standards tests in order to assess the competency of candidates for admissions to premier higher education institutions.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"UGAT",
            Entrance:"Under Graduate Aptitude Test (UGAT) is a standardized test being administered by AIMA annually to screen the candidates for various under graduate programs such as Integrated MBA (IMBA), BBA, BCA, BHM, B.Com, etc.",
            TExams:"National Level",
            MExams:"Online",
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
    id: 12,
    logo: job_img_1,
    coursename: "MSc",
    coursefullform: "Master of Science",
    courseoverview:
      "The MSc full form is Master of Science. The Master of Science (MSc) is a two-year postgraduate programme that provides in-depth knowledge and specialisation in a specific field of study. To be eligible for an MSc admission, candidates must have a Bachelor of Science (BSc) with an aggregate of 50% to 60% from an accredited college or university. The course fee of an MSc course usually ranges between INR 10k and INR 1.50LPA. The CPGET, ICAR AIEEA, CUET PG, MCAER CET, AP PGCET, IIT JAM, URATPG, MAH CET, and other entrance exams are often held for MSc courses. Banaras Hindu University, Bharathiar University, Calcutta University, Delhi University, and other well-known universities are among those that provide MSc degrees in India.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science",
      },
      {
        particulars: "Course Level",
        details: "Post Graduate ",
      },
      {
        particulars: "Course Duration",
        details: "2 years",
      },
      {
        particulars: "Entrance Exams",
        details: "RCUET, BIT SAT, TISSNET, CUSAT CA.",
      },
      {
        particulars: "Career Options",
        details: "Agricultural Industry, Chemical Industry, Pharmaceutical Companies, Hospitals, Research and Industrial Laboratories, Testing Laboratories, Geological Survey Departments, Colleges/Universities, Oil Industry.",
      },
      {
        particulars: "Top BMS Colleges in India",
        details: "IIM Ahmedabad, IIM Indore, IIM Bangalore, FMS Delhi, IIM Calcutta, Aryabhatta College, SPJIMR Mumbai, XLRI Jamshedpur, etc.",
      },
      
    ],

    whychoose:
      "MSc courses may prove advantageous in the long run, despite being difficult, costly, and psychologically taxing. A Master of Science degree opens up many career options in both public and private sectors, such as research, academia, medical labs, biotechnology companies, food institutes, and more.",

    whychoosepoints: [
      "MSc programmes usually provide comprehensive and specialised knowledge in a specific field.  ",
      " Professional Growth: Getting an MSc degree can open up new job opportunities and paths. ",
     "Research and Innovation: If you want to learn more about your field and conduct research, an MSc can allow you to conduct original research, publish papers, and contribute to creative solutions.",
      "Greater Earning Potential: Having an MSc degree can translate into a higher earning potential in many industries than having only a bachelor's. ",
    ],
    typesofcoursedegreeContent:
      "B Tech is an undergraduate degree course within which there are many specializations from which candidates can choose. Along with that, the BTech is available in various modes like full-time BTech, part-time BTech, online BTech, offline BTech, and distant BTech. Below is the table that highlights the B Tech types along with the BTech fee structure",
    typesofcourses: [
      {
        typesofcourse: "Full time",
        avgfee: "INR 2- 3 Lakhs ( 3 to 4 years)",
      },
      {
        typesofcourse: "Part time",
        avgfee: "INR 45,000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22,000",
      },
    ],
    lateralentryprocedure:
      "BTech Lateral Entry is for candidates who have already completed their Diploma in Engineering or a B.Sc degree. Therefore, candidates will get direct entry in the third semester of the BTech. BTech Lateral Entry access is an entrance-based process. For entrance to B Tech Lateral Entry Courses, candidates must complete their B.Sc or Diploma degree in engineering with a minimum of 45% aggregate where a relaxation of 5% is given to the candidates belonging from the reserved category. Some of the BTech Lateral Entry entrances are Haryana LEET, Assam JLEE, JELET, PU LEET, etc.",
    integratedcourse:
      "An integrated course combines two courses that candidates can opt for after completing their 10+2. It can be a combination of a bachelor's course with a postgraduate course. Listed below are some of the Integrated courses offered with BTech:",
    eligibility:
      "Candidates who wish to pursue BTech are advised to check the BTech Eligibility Criteria before filling out the BTech Application Form so that they do not miss out on anything and regret it at the last minute. The Eligibility Criteria for BTech may vary from institute to institute. We have sketched the Eligibility Criteria for BTech in the pointers below.",
    eligibilitypoint: [
      "Candidate should have completed 10+2 or equivalent examinations from a recognized educational board like CBSE, ICSE, etc.",
      "They must belong to the Science Stream with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects.",
      "Candidates are mandated to score at least 60% marks in aggregate where a relaxation of 5% to 10% is given to the candidates from the reserved categories.",
      "Those who are interested in the regular mode of entry to the BTech are through the entrances after Class 12th. The other mode is called as Lateral-Entry mode, wherein candidates can enroll in BTech in the second year.",
      "Those who possess a three-year diploma course in engineering can enroll in BTech under the Lateral-Entry Scheme.",
    ],
    requiredskillset:
      "To be a successful engineer, one must be innovative and have exceptional communication skills. There are various skill sets required for a BTech engineer to flourish in their field of matter. The table below highlights some of the skills required for the B Tech course.",

    skillset: [
      {
        skill: "Creativity",
        details: "Communication skills- verbal or written",
      },
      {
        skill: "Multi-disciplinary exposure",
        details: "Acquaintance with computers and IT",
      },
      {
        skill: "Teamwork ",
        details: "Familiarity with industry standards",
      },
      {
        skill: "Knowledge of the core subject",
        details: "Application of the knowledge",
      },
      {
        skill: "Leadership skills",
        details: "Analytical and creative thinking",
      },
    ],
    
    courseexam:"There are many entrance examinations conducted at national level and university level for taking MSc admission. The students must know about the different types of entrance examination conducted for Master of Science in a variety of streams. Some of the popular entrance examinations required for taking Master of Science admission are listed below.     ",
    coursesEntrance: [
          {
            Exams:"CUET",
            Entrance:"The Central University Entrance Exam (CUET), a national entrance exam for admission to undergraduate programmes offered by all participating universities, is administered by the NTA.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"IIT JAM",
            Entrance:"The Indian Institutes of Technology (IITs), which are a part of the Ministry of Human Resources Development (MHRD), alternately administer the Joint Admission Test for MSc (JAM). The Indian Institute of Science (IISc), Bangalore, as well as other postgraduate programmes at IITs, provide integrated PhD programmes. IIT JAM is a competition held to admit students to these programmes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"BITSAT",
            Entrance:"TIt is a National level entrance examination conducted by Birla Institute of Technology and Science Admission Test for admission to various courses including Master of Science.",
            TExams:"National Level",
            MExams:"Online",
          },
    ],


    entrance:
      "There are numerous exams in India, divided into national, state level, and university levels. The national level top B Tech exams are JEE Main, JEE Advanced state-level BTech exams include WBJEE, and MHT CET; university-level exams include BITSAT, VITEEE, and SRMJEEE. To know more about these exams that aid in access to BTech and their important dates, read the following.",
    EntranceExamination: [
      {
        examination: "JEE Main",
        applicationstart:
          "Session 1 - November 1, 2023 Session 2 - February 2, 2024",
        applicationend:
          "Session 1 - December 4, 2023 Session 2 - March 2, 2024",
        admitcard: "Session 1 - January 21, 2024 Session 2 -  March 29, 2024",
        examdate:
          "Session 1 -  January 24 to February 1, 2024 Session 2 - April 1 to 15, 2024",
        result: "Session 1 - February 12, 2024 Session 2 - April 25, 2024",
      },
      {
        examination: "JEE Advanced",
        applicationstart: "April 21, 2024",
        applicationend: "April 30, 2024",
        admitcard: "May 17 to 26, 2024",
        examdate: "May 26, 2024",
        result: "June 9, 2024",
      },
      {
        examination: "BITSAT",
        applicationstart: "Session 1 - January 2024 Session 2 - May 2024",
        applicationend: "Session 1 - April 2024 Session 2 - June 2024",
        admitcard: "Session 1 - May 2024 Session 2 - June 2024",
        examdate: "Session 1 - May 2024 Session 2 - June 2024",
        result: "Session 1 - May 2024 Session 2 - June 2024",
      },
      {
        examination: "SRMJEEE",
        applicationstart: "November 10, 2023",
        applicationend: "Session 1 - April 13, 2024 Session 2 - June 15, 2024",
        admitcard:
          "(Release on the same day when candidates complete Slot Booking)",
        examdate:
          "Session 1 - April 19 to 21, 2024 Session 2 - June 21 to 23, 2024",
        result: "Session 1 - April 2024 Session 2 - June 2024",
      },
      {
        examination: "VITEEE",
        applicationstart: "November 1, 2023",
        applicationend: "March 30, 2024",
        admitcard: "1st week of April 2024",
        examdate: "	April 19 to 30, 2024",
        result: "May 3, 2024",
      },
      {
        examination: "AEEE",
        applicationstart: "November 1, 2023",
        applicationend: "January 5, 2024",
        admitcard:
          "Session 1 - 2nd week of January 2024 Session 2 - 1st week of May 2024",
        examdate:
          "Session 1 - January 19 to 22, 2024 Session 2 - May 10 to 14, 2024",
        result: "Session 1 - May 2024 Session 2 - May 2024",
      },
      {
        examination: "Amity JEE",
        applicationstart: "Last week of December 2023",
        applicationend: "April 2024",
        admitcard: "April 2024",
        examdate: "May 2024",
        result: "	May 2024",
      },
      {
        examination: "AP EAMCET",
        applicationstart: "March 2024",
        applicationend: "April 2024",
        admitcard: "May 2024",
        examdate: "MPC stream - May 2024 BiPC stream - May 2024",
        result: "June 2024",
      },
      {
        examination: "TS EAMCET",
        applicationstart: "March 2024",
        applicationend: "April 2024",
        admitcard: "April 2024",
        examdate: "Engineering - May 2024 Agriculture & Pharmacy - May 2024",
        result: "June 2024",
      },
      {
        examination: "GUJCET",
        applicationstart: "1st week of January 2024",
        applicationend: "Last week of January 2024",
        admitcard: "March 2024",
        examdate: "April 2, 2024",
        result: "May 2024",
      },
      {
        examination: "Assam CEE",
        applicationstart: "March 2024",
        applicationend: "April 2024",
        admitcard: "May 2024",
        examdate: "May/June 2024",
        result: "June 2024 (Within 10 days of conducting the exam)",
      },
      {
        examination: "COMEDK",
        applicationstart: "2nd week of February 2024",
        applicationend: "April 2024",
        admitcard: "May 2024",
        examdate: "May 12, 2024",
        result: "May 2024",
      },
      {
        examination: "GITAM GAT",
        applicationstart: "October 27, 2023",
        applicationend: "January 4, 2024",
        admitcard: "To be Notified",
        examdate: "January 6 & 7, 2024",
        result: "January 12, 2024",
      },
      {
        examination: "KCET",
        applicationstart: "1st week of March 2024",
        applicationend: "1st week of April 2024",
        admitcard: "May 2024",
        examdate: "May 2024",
        result: "June 2024",
      },
      {
        examination: "MHT CET",
        applicationstart: "March 2024",
        applicationend: "March 2024",
        admitcard: "1st week of April 2024",
        examdate: "April 16 to 30, 2024",
        result: "June 2024",
      },
      {
        examination: "MU OET",
        applicationstart: "November 7, 2023",
        applicationend: "March 15, 2024",
        admitcard: "As per the exam Slot Booking",
        examdate:
          "Phase 1 - Last week of April 2024 Phase 2 - Last week of May 2024",
        result: "Phase 1 - May 2024 Phase 2 - June 2024",
      },
      {
        examination: "WBJEE",
        applicationstart: "3rd week of December 2023",
        applicationend: "2nd week of January 2024",
        admitcard: "2nd week of April 2024",
        examdate: "April 28, 2024",
        result: "May 2024",
      },
      {
        examination: "KLUEEE",
        applicationstart: "October 25, 2023",
        applicationend:
          "Phase 1 - December 13, 2023 Phase 2 - 1st week of February 2024 Phase 3 - 2nd week of April 2024",
        admitcard:
          "Phase 1 - December 14, 2023 Phase 2 - 1st week of February 2024 Phase 3 - 2nd week of April 2024",
        examdate:
          "Phase 1 - December 15 to 18, 2023 Phase 2 - 2nd week of February 2024 Phase 3 - 3rd week of April 2024",
        result:
          "Phase 1 - 2nd week of January 2024 Phase 2 - 1st week of April 2024 Phase 3 - 4th week of April 2024",
      },
      {
        examination: "AUSAT",
        applicationstart: "October 19, 2023",
        applicationend: "1st week of January 2024 (for JEE Main)",
        admitcard: "Once the candidates have successfully registered",
        examdate: "1st week of July 2024",
        result: "July 2024",
      },
      {
        examination: "AMUEEE",
        applicationstart: "February 2024",
        applicationend: "March 2024",
        admitcard: "1st week of May 2024",
        examdate: "2nd week of May 2024",
        result: "Last week of May 2024",
      },
      {
        examination: "Tripura JEE",
        applicationstart: "1st week of February 2024",
        applicationend: "3rd week of February 2024",
        admitcard: "3rd week of April 2024",
        examdate: "Last week of April 2024",
        result: "2nd week of June 2024",
      },
      {
        examination: "AMUEEE",
        applicationstart: "February 2024",
        applicationend: "March 2024",
        admitcard: "1st week of May 2024",
        examdate: "2nd week of May 2024",
        result: "Last week of May 2024",
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

export default courses_details;

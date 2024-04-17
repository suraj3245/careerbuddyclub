import { IcourseType } from "@/types/course-details";
import job_img_1 from "@/assets/images/logo/media_22.webp";
import Image, { StaticImageData } from "next/image";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_22.jpg";
import img1  from "@/assets/images/assets/C_1.jpg"
import img2  from "@/assets/images/assets/C_2.jpg"
import img3  from "@/assets/images/assets/C_3.jpg"
import img4  from "@/assets/images/assets/C_4.jpg"
import img5  from "@/assets/images/assets/C_5.png"
import img6  from "@/assets/images/assets/C_6.jpg"
import img7  from "@/assets/images/assets/C_7.jpg"
import img8  from "@/assets/images/assets/C_8.jpg"
import img9  from "@/assets/images/assets/C_9.jpg"
import img10  from "@/assets/images/assets/C_10.jpg"
import img11 from "@/assets/images/assets/C_11.jpg"
import img12 from "@/assets/images/assets/C_12.jpg"
import img13 from "@/assets/images/assets/C_13.jpg"
import img14 from "@/assets/images/assets/C_14.jpg"
import img15 from "@/assets/images/assets/C_15.jpg"
import img16  from "@/assets/images/assets/C_16.png"
import img17  from "@/assets/images/assets/C_17.png"
import img18  from "@/assets/images/assets/C_18.jpeg"
import img19  from "@/assets/images/assets/C_19.jpg"
import img20  from "@/assets/images/assets/C_20.jpg"
import img21  from "@/assets/images/assets/C_21.jpg"
import img22  from "@/assets/images/assets/C_22.jpg"
import img23  from "@/assets/images/assets/C_23.jpg"
import img24  from "@/assets/images/assets/C_24.jpg"
import img25  from "@/assets/images/assets/C_25.jpg"
import img26  from "@/assets/images/assets/C_26.jpg"
import img27  from "@/assets/images/assets/C_27.jpg"
import img28  from "@/assets/images/assets/C_28.jpg"
import img29  from "@/assets/images/assets/C_29.jpg"
import img30  from "@/assets/images/assets/C_30.jpg"
import img31  from "@/assets/images/assets/C_31.jpg"
import img32  from "@/assets/images/assets/C_32.jpg"
import img33  from "@/assets/images/assets/C_33.png"
import img34  from "@/assets/images/assets/C_34.jpg"
import img35  from "@/assets/images/assets/C_35.jpg"
import img36  from "@/assets/images/assets/C_36.png"
import img37  from "@/assets/images/assets/C_37.png"
import img38  from "@/assets/images/assets/C_38.jpg"
import img39  from "@/assets/images/assets/C_39.jpg"
import img40  from "@/assets/images/assets/C_40.jpg"
import img41  from "@/assets/images/assets/C_41.jpg"
import img42  from "@/assets/images/assets/C_42.jpg"
import img43  from "@/assets/images/assets/C_43.jpg"
import img44  from "@/assets/images/assets/C_44.jpg"
import img45  from "@/assets/images/assets/C_45.jpg"
import img46  from "@/assets/images/assets/C_46.jpg"
import img47  from "@/assets/images/assets/C_47.jpg"
import img48  from "@/assets/images/assets/C_48.jpg"
import img49  from "@/assets/images/assets/C_49.jpg"
import img50  from "@/assets/images/assets/C_50.jpg"
import img51  from "@/assets/images/assets/C_51.jpg"
import img52  from "@/assets/images/assets/C_52.jpg"
import img53  from "@/assets/images/assets/C_53.jpg"
import img54  from "@/assets/images/assets/C_54.jpg"
import img55  from "@/assets/images/assets/C_55.jpg"

const courses_details: IcourseType[] = [
  {
    id: 1,
    logo: job_img_1,
    image: img1,
    coursename: "B.Tech",
    coursefullform: "Bachelor in Technology",
    courseoverview:
      "BTech is a four-year undergraduate Course that covers all the domains of Engineering and Technology. The B.Tech course list is available for Candidates in various specializations such as Computer Engineering, Civil Engineering, Mechanical Engineering, Chemical Engineering, etc. As per BTech eligibility criteria, candidates can pursue a B Tech course after passing Class 12th with Physics, Chemistry, Mathematics/Biology. BTech admission is done majorly via engineering entrance exams like JEE Main, JEE Advanced, BITSAT, WBJEE, COMEDK UGET, etc.  However, many colleges offer direct entry based on Class 12 marks. Through BTech syllabus candidates develop the technical skills that can be invested in the core technology and development industry.",
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
        particulars: " B Tech  Colleges",
        details: "BFIT",
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
   
  
    
    careertable: [
      {
        career: "Civil Engineer",
      },
      {
        career: "Software Development",
      },
     
      {
        career: "Biomedical Engineer",
      },
      {
        career: "Network Engineer",
      },
      {
        career: "Electrical Engineer",
      },
      {
        career: "Aerospace Engineer",
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
    image: img2,
    
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
   
    
    
   
    
    careertable: [
      {
        career: "Project Architect",
      },
      {
        career: "Design Architect",
      },
      {
        career: "Project Manager",
      },
      {
        career: "Landscape Architect",
      },
      {
        career: "Interior Architect",
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
    image: img3,
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
   
    
    
   
    
    careertable: [
      {
        career: "Educational Administrator",
      },
      {
        career: "Education Consultant",
      },
      {
        career: "Corporate Trainer",
      },
      {
        career: "School Teacher",
      },
      {
        career: "Tutoring and Private Coaching",
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
    image: img4,
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
   
    
    
   
    
    careertable: [
      {
        career: "Graphic Designer",
      },
      {
        career: "Design Managers",
      },
      {
        career: "Textile Designer",
      },
      {
        career: "Fashion Forecasters",
      },
      {
        career: "Interior Designer Entrepreneur",
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
    image: img5,
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
   
    
    
   
    
    careertable: [
      {
        career: "Physical Education Teacher",
      },
      {
        career: "Gym trainer",
      },
      {
        career: "Coach",
      },
      {
        career: "Sports trainer",
      },
      {
        career: "Yoga trainer",
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
    image: img6,
    coursename: "MBA",
    coursefullform: "Master of Business Administration",
    courseoverview:
      "A master of business administration (MBA) is a level up from an undergraduate business degree and generally places the graduate well above those with only undergraduate degrees. Most major universities and colleges provide MBA programs, which usually last two years.",
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
   
    
    
   
    
    careertable: [
      {
        career: "Business Analyst	",
      },
      {
        career: "Chief Financial Officer",
      },
      {
        career: "Management Consulting	",
      },
      {
        career: "Operations Manager",
      },
      {
        career: "Asset Manager",
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
    image: img7,
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
   
  
   
    
    careertable: [
      {
        career: "Biological Technician",
      },
      {
        career: "Wildlife Biologist",
      },

      {
        career: "Healthcare Scientist",
      },

      {
        career: "	Industrial Microbiologist",
      },

      {
        career: "Hardware Developer",
      },
      {
        career: "Software Developer",
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
    image: img8,
    coursename: "B.Sc. BIOTECHNOLOGY",
    coursefullform: " BACHELOR’S IN BIOTECHNOLOGY",
    courseoverview:
      "A Bachelor's in Biotechnology is a three-year undergraduate course that helps in exploration of the intersection of biology and technology, delving into the manipulation of living organisms and biological systems for practical applications. Students gain a comprehensive understanding of genetic engineering, bioinformatics, and other cutting-edge techniques shaping the field. The program equips graduates with the knowledge and skills to contribute to advancements in healthcare, agriculture, and environmental sustainability.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN BIOTECHNOLOGY",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
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
        particulars: "Average Fee Structure",
        details: "INR 50 K - 2 LPA",
      },
      {
        particulars: "Average Salary ",
        details: "INR 3 - 8 LPA",
      },
     
    ],

    whychoose:
      "BSc Biotechnology is a popular course amongsts students after class 12th. Also, after completing a BSc Biotechnology course, students will have a wide range of career options. The bachelors in biotechnology course has numerous benefits. Some of the benefits of a BSc Biotechnology degree are listed below.      ",

    whychoosepoints: [
      "Candidates who complete the BSc Biotechnology programme are prepared to conduct research in bioinformatics and computer-assisted research. The course opens up a wide range of career opportunities in the medical field because it covers a wide range of technical and practical knowledge related to medicines      ",
      "Students can expect a longer association with companies because they are equipped with both computer knowledge and the latest technology used in the industry, as the industry changes on a regular basis. Biotechnology job opportunities are constantly expanding, especially since the pandemic",
      "Many students pursue career opportunities in education after completing their BSc Biotechnology degree. This course is open to candidates who are up to date on the latest knowledge in the field and want to join the teaching profession. The BSc Biotechnology syllabus is designed to teach students the fundamentals of management and entrepreneurship",
      "Candidates who are interested in management and administration can also apply for positions. The salary structure is usually favourable after completing a BSc in Biotechnology. On average, candidates earn between INR INR 3-8 LPA      ",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Lab Technician",
      },
      {
        career: "Project Manager",
      },
      {
        career: "Microbiologists",
      },
      {
        career: "Epidemiologists",
      },
      {
        career: "Biotech Analyst",
      },

    ],
    
    courseexam:"BSc Biotechnology entrance exam is conducted by many famous colleges/universities offer in BSc Biotechnology admission . There are some entrance exams taken at the state as well as national level such as the KCET entrance exam, SAAT entrance exam, CUET entrance exam, and KIITEE entrance exam. The candidates need to prepare well for the exam and crack the entrance exam to get admission to the top colleges.     ",
    coursesEntrance: [
          {
            Exams:"CUET",
            Entrance:"The Central University Entrance Test (CUET) will give students a single window opportunity to apply to these participating Universities / Institute(s) across the nation for admission to various BSc programmes of the participating Central Universities. No weight will be given to class 12th results when determining admission to undergraduate programmes at Central Universities; admission will solely be based on CUET scores.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SAAT ",
            Entrance:"SAAT is a national-level entrance exam conducted for admission of deserving aspirants in various courses offered at different constituent institutes/schools of Siksha 'O' Anusandhan University. By taking SAAT, aspirants get admission to various undergraduate (UG) and postgraduate (PG) courses in different disciplines like engineering, management, pharmacy, law, etc. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"KIITEE",
            Entrance:"SAAT is a national-level entrance exam conducted for admission of deserving aspirants in various courses offered at different constituent institutes/schools of Siksha 'O' Anusandhan University. By taking SAAT, aspirants get admission to various undergraduate (UG) and postgraduate (PG) courses in different disciplines like engineering, management, pharmacy, law, etc.",
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
    image: img9,
    coursename: "B.Sc. ARTIFICIAL INTELLIGENCE",
    coursefullform: "BACHELOR’S IN ARTIFICIAL INTELLIGENCE ",
    courseoverview:
      "A Bachelor's in Artificial Intelligence (AI) is a three-year undergraduate program that integrates computer science, mathematics, and engineering to develop intelligent systems mirroring human cognitive abilities. Students explore machine learning, robotics, data science, and ethics in AI. The curriculum equips graduates with theoretical understanding and practical skills to pursue careers in diverse sectors like technology, healthcare, and finance. They emerge adept at addressing real-world challenges through innovative AI solutions.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN ARTIFICIAL INTELLIGENCE",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream.",
      },
      {
        particulars: "Technology Skills",
        details: "Programming languages proficiency: Python, Java, C++,TensorFlow, PyTorch, scikit-learn.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50 K - 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Algorithm Optimization,  Data Analysis and Interpretation, Implementation of Neural Networks, Hyperparameter Tuning, Deployment of AI Solutions.",
      },
     
    ],

    whychoose:
      "In English BSc in artificial intelligence will help a student get acquainted with the basic principles of AI, such as analytical, programming and mathematical skills. Also, learning the tools and techniques of artificial intelligence will help you to be at the forefront in the future. ",

    whychoosepoints: [
      "Data specialist",
      "Software engineer",
      "AI researcher",
      "Data scientist",
      "A natural language processing specialist",
      "Data analyst",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Big Data Analyst",
      },
      {
        career: "User Experience (UX) Designer/Developer",
      },
      {
        career: "AI Engineer",
      },
      {
        career: "Software Engineer",
      },
      {
        career: "Data Mining and Analysis",
      },
      {
        career: "Computer Vision Engineer",
      },
      {
        career: "Robotics Engineer",
      },

    ],
    
    courseexam:"The major entrance examinations that are required for admission to BTech in Artificial Intelligence are JEE Main and JEE Advanced. Top B. Tech AI colleges are SRM University, IIT Hyderabad, NIT Surathkal and Jamia Hamdard, New Delhi.",
    coursesEntrance: [
          {
            Exams:"JEE Main ",
            Entrance:"JEE Main is a screening exam to select the candidates who will be eligible to appear for JEE Advanced, which will serve as final exam to select candidates for admission into prestigious IITs.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SUPESEAT",
            Entrance:"SUPESEAT is the University of Petroleum & Energy Studies Engineering Aptitude Test and is held once every year. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SRMJEEE ",
            Entrance:"SRMJEEE is a national-level online remote proctored admission test to BTech programmes offered by SRMIST campuses. 10+2 passed/appearing candidates can apply for SRMJEEE.",
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
    id: 10,
    logo: job_img_1,
    image: img10,
    coursename: "B.Sc. AGRICULTURE",
    coursefullform: "BACHELOR’S IN AGRICULTURE",
    courseoverview:
      "A Bachelor of Science in Agriculture (BSc Agriculture) is a four year comprehensive undergraduate program that focuses on the principles and practices of agriculture, including crop cultivation, animal husbandry, agribusiness, and sustainable farming techniques. Students gain a strong foundation in agricultural sciences, fostering expertise in modern farming methods, crop management, and agricultural technology, preparing them for diverse roles in the agricultural sector.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN AGRICULTURE",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream.",
      },
      {
        particulars: "Technology Skills",
        details: "Precision Farming Technologies, Agricultural Software, Drones and UAVs, Automated Machinery, Data Analytics",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50 K - 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Crop rotation planning and execution, Livestock health monitoring and care, Budget management for farm operations, Operation of precision farming technologies,  Implementation of sustainable farming practices",
      },
     
    ],

    whychoose:
      "Pursuing BSc Agriculture has several advantages. Here’re the vital reasons why you should choose it.  ",

    whychoosepoints: [
      "There will continue to be a lot of innovations in the future. Plenty of technological interventions in likelier to happen in the agricultural field. ",
      "There are many colleges and universities with agricultural courses and many domains you can choose from. ",
      "Graduates can begin their entrepreneurial ventures and start separate farms or agribusinesses with the knowledge gained during the course.",
      "There is a high demand for the program. Specific areas of study, such as food production, horticulture, animal rearing, rural economy, environmental health, etc., are most sought-after. ",
      "Agricultural-related work can give you the job satisfaction that you are positively contributing to society. ",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Agriculture Officer",
      },
      {
        career: "Assistant Plantation Manager",
      },
      {
        career: "Seed Technologist",
      },
      {
        career: "Food Safety Officer	",
      },
      {
        career: "Research Assistant",
      },

    ],
    
    courseexam:" ICAR-AIEEA, KEAM, KCET, AP EAMCET, TJEE, and others are among the top BSc Agriculture Entrance Exam 2023. ICAR-AIEEA: The Indian Council of Agricultural Research (ICAR) is the primary organisation in charge of the ICAR-AIEEA (UG).",
    coursesEntrance: [
          {
            Exams:"UPCATET",
            Entrance:"The exam is conducted to shortlist the candidates for admission to the UG & PG programs offered by the four Agriculture Universities of Uttar Pradesh.",
            TExams:"State Level",
            MExams:"Online",
          },
          {
            Exams:"PAU CET",
            Entrance:"Punjab Agricultural University, Ludhiana is the conducting body of the PAU CET 2024 exam. The exam is conducted at the state level once a year. Punjab Agricultural University conducts the PAU CET entrance exam for admission to different UG/PG courses. ",
            TExams:"State Level",
            MExams:"Online",
          },
          {
            Exams:"KCET",
            Entrance:"The Karnataka Examination Authority (KEA) is in charge of the Karnataka Common Entrance Test (KCET). This state- level engineering entrance test is organized and conducted by KEA once a year to once a year to judge the merit of candidates for admission into various professional degree courses offered by by various educational Institutions in Karnataka state. The main goal of holding KCET is to orovice admission to deserving applicants in various engineering, pharmacy, and other allied fields.",
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
    id: 11,
    logo: job_img_1,
    image: img11,
    coursename: "B.COM",
    coursefullform: "BACHELOR’S IN COMMERCE ",
    courseoverview:
      "A Bachelor of Commerce (B. Com) is a three-year undergraduate program that provides students with a comprehensive understanding of concepts in business, finance, economics, and accounting. It equips students with the knowledge and skills needed for a variety of roles in the business world, including in banking, finance, management, and entrepreneurship. The program covers subjects such as accounting principles, business law, economics, financial management, and organizational behaviour, preparing students for a wide range of career opportunities in the corporate sector.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN COMMERCE",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in commerce stream.",
      },
      {
        particulars: "Technology Skills",
        details: "Proficiency in Microsoft Excel, Knowledge of accounting software,  Familiarity with data analysis tools, Basic understanding of ERP systems, Ability to use online banking platforms",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50 K - 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: " Financial data analysis,  Budget preparation, Tax preparation assistance, Financial report generation, Audit support",
      },
     
    ],

    whychoose:
      "Pursuing BSc Agriculture has several advantages. Here’re the vital reasons why you should choose it.  ",

    whychoosepoints: [
      "There will continue to be a lot of innovations in the future. Plenty of technological interventions in likelier to happen in the agricultural field. ",
      "There are many colleges and universities with agricultural courses and many domains you can choose from. ",
      "Graduates can begin their entrepreneurial ventures and start separate farms or agribusinesses with the knowledge gained during the course.",
      "There is a high demand for the program. Specific areas of study, such as food production, horticulture, animal rearing, rural economy, environmental health, etc., are most sought-after. ",
      "Agricultural-related work can give you the job satisfaction that you are positively contributing to society. ",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: " Chartered Accountant (CA)",
      },
      {
        career: "Investment Banker",
      },
      {
        career: "Chartered Financial Analyst (CFA)",
      },
      {
        career: "Sales Manager",
      },
      {
        career: "Budget Analyst ",
      },
      {
        career: "Stock Broker ",
      },
      {
        career: "Statistician ",
      },

    ],
    
    courseexam:"The top entrance exams for BCom are IPU CET, CUET, Christ University Entrance Test, DUET, etc. Some of the top colleges are SRCC, Ramjas College, Christ University, Hindu College, Hansraj College, etc.",
    coursesEntrance: [
          {
            Exams:"CUET UG",
            Entrance:"CUET will provide a single window opportunity to students to seek admission in any of the Central Universities (CUs) across the country.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SET",
            Entrance:"SET is a national-level entrance exam conducted for admission to various undergraduate courses. SET will be conducted in the computer-based test mode. The difficulty level of the SET exam is usually easy to moderate. But, a few questions might trick your mind and can be time-consuming.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AIMA UGAT",
            Entrance:"The Undergraduate Aptitude Test (UGAT) is a national-level exam that screens students for undergraduate programmes. The All India Management Association (AIMA) conducts the UGAT annually.",
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
    id: 12,
    logo: job_img_1,
    image: img12,
    coursename: "B.A. LLB",
    coursefullform: "BACHELOR’S IN LEGISLATIVE LAW ",
    courseoverview:
      "The Bachelor of Arts Bachelor of Laws (BA LLB) program in India is a five-year integrated undergraduate course that offers a comprehensive understanding of both legal principles and humanities subjects. It equips students with a solid foundation in law, coupled with a broad understanding of social sciences, preparing them for diverse career opportunities in the legal profession and related fields.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN LEGISLATIVE LAW ",
      },
      {
        particulars: "Duration of the Course",
        details: "5 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board Exams with 50% aggregate marks or above.",
      },
      {
        particulars: "Technology Skills",
        details: "Proficiency in using legal research databases, Knowledge of e-discovery tools,  Ability to use online legal research tools effectively, Understanding of basic cyber security principles.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 1.5 Lakhs - 7 Lakhs",
      },
      {
        particulars: "Detailed Work Activities",
        details: " Conducting legal research, Drafting legal documents, Assisting with case preparation,  Participating in client meetings, Analysing legal issues",
      },
     
    ],

    whychoose:
      "The advantages of BA LLB combined law degree often exceed the drawbacks. It helps students to complete the arts bachelor's degree and the law degree together in 5 years, which is shorter than usual to complete the degrees. The time-saving issue of this programme is a great advantage when regarded from the point of view of 6-7 years that are needed for secondary double degree. First, by the multidisciplinary nature of this programme young people are able to dive into many fields all at once ranging from arts, social sciences and law. It exposes me to diverse perspectives among individuals and improves communication as well as analytical skills. ",

    whychoosepoints: [
      "Solid foundation for a lucrative career",
      " Comprehensive knowledge of Law ",
      "Competitive advantage over other graduates — Integrated Degree",
      "Holistic development ",
      "Fosters strong ethics and compassion ",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Legal Associate/Advisor",
      },
      {
        career: "Litigation Lawyer",
      },
      {
        career: "Legal Secretary",
      },
      {
        career: "Law Clerk",
      },
      {
        career: " Legal Analyst",
      },
      {
        career: "Judge",
      },
      {
        career: " Paralegal",
      },

    ],
    
    courseexam:"In India, aspirant lawyers could choose to embark on fulfilling their BA LLB ambitions through different top-notch entrance exams.Here are the most prestigious and widely accepted options:",
    coursesEntrance: [
          {
            Exams:"CLAT",
            Entrance:"Organised by the Consortium of National Law Universities, CLAT is the portal to 22 national law universities (NLUs) in India. Famed for its stringent testing of analytical and logical reasoning ability, legal aptitude as well as general knowledge. Highly competitive, attracting over thousands of applicants annually.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AILET",
            Entrance:"AILET, which is organised by the National Law University Delhi (NLU Delhi) admits students into this prestigious NLU. Covers analytical reasoning, legal awareness and general knowledge as well with a particular attention to English language proficiency. Seen as somewhat less competitive than CLAT but still requires exhaustive preparation.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"LSAT",
            Entrance:"Conducted by the The Pearson VUE version of the globally acclaimed LSAT, in India. Provides access to different NLUs and other renowned law universities in India.  Measures logical reasoning, reading comprehension and analytical writing in a standardised assessment.",
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
    id: 13,
    logo: job_img_1,
    image: img13,
    coursename: "B.Sc. FOOD TECHNOLOGY",
    coursefullform: " BACHELOR’S IN FOOD TECHNOLOGY",
    courseoverview:
      "Bachelor of Science in Food Technology (BSc Food Technology) is a three-year comprehensive undergraduate program focused on the science and technology behind food production, processing, preservation, and safety. This degree equips students with the knowledge and skills to ensure the quality, nutritional value, and safety of food products. Through a blend of theoretical learning and hands-on experience, students learn about food chemistry, microbiology, engineering, and nutrition. Graduates are prepared to play vital roles in the food industry, contributing to innovation, quality control, and regulatory compliance to meet the growing demands for safe and nutritious food globally.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: " BACHELOR’S IN FOOD TECHNOLOGY ",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Passed 10+2 with at least 50% aggregate in Physics, Chemistry, Biology and Mathematics as compulsory subjects",
      },
      {
        particulars: "Technology Skills",
        details: "Proficiency in using legal research databases, Knowledge of e-discovery tools,  Ability to use online legal research tools effectively, Understanding of basic cyber security principles.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Sanitation Standards and Quality Assurance,Technological Integration and Research,  Comprehensive Testing and Analysis, Collaboration on Design Challenges,  Standards Establishment and Effective Communication",
      },
     
    ],

    whychoose:
      "The candidates who wish to pursue a degree in this field must fulfil certain BSc Food Technology eligibility criteria. Though these criteria vary from one university to another, certain requirements are common with all. The eligibility criteria required for admission to BSc Food Technology are listed below: ",

    whychoosepoints: [
      "Candidates must have passed 12th grade or an equivalent degree from a recognised institute/board in India.",
      "Students must have opted for Mathematics, Chemistry/ Biology/ Biotechnology, and Physics as the major subjects in class 12th.",
      "The prospective applicant must have received a minimum aggregate of 50% marks (45% for the reserved candidates) in 12th grade. ",
      "Applicants who are appearing for the final exam or waiting for their final result from class 12 can also apply for admission. ",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Quality Food Technologist",
      },
      {
        career: "Product Development Manager",
      },
      {
        career: "Application Technologist",
      },
      {
        career: "Application Technologist",
      },
      {
        career: "Operations Manager for Food Manufacturing",
      },
      {
        career: "Food Scientist",
      },
   
    ],
    
    courseexam:"Some colleges in India may need applicants to take an entrance exam to be accepted into the BSc Food Technology programme. These tests are intended to evaluate a student's knowledge and abilities in a range of courses, with a focus on the Science stream. While the majority of educational institutions admit students based on their performance in the 10+2 exams, some could need applicants to pass additional entrance exams. Common national, state, and university entry tests that may be pertinent for a BSc in food technology include the following:",
    coursesEntrance: [
          {
            Exams:"CFTRI",
            Entrance:"CSIR–CFTRI is committed to excel in Research & Innovation, Knowledge Dissemination, Technology Transfer and Human Resource Development in the areas of Food Science and Technology through quality attributes to be practiced and implemented at all levels.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"CUCET",
            Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET) is an all-India test being organized by National Testing Agency for admission to various doctorate, Postgraduate, Undergraduate, Integrated Postgraduate, Diploma, Certification courses and Research Programmes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NPAT",
            Entrance:"The NPAT exam consists of three sections, each section with a different set of question types. Three sections of NMIMS-NPAT exam includes Verbal Reasoning, Logical Reasoning, and Quantitative Reasoning. Verbal Reasoning section tests the ability to understand and interpret written material.",
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
    id: 14,
    logo: job_img_1,
    image: img14,
    coursename: "B.Sc. CBZ",
    coursefullform: "BACHELORS IN CHEMISTRY, BOTANY AND ZOOLOGY",
    courseoverview:
      "The Bachelor of Science in Chemistry, Botany, and Zoology (B.Sc. CBZ) is a comprehensive undergraduate program designed to provide students with a strong foundation in the fundamental principles of chemistry, botany, and zoology. This interdisciplinary degree integrates key concepts from these three scientific disciplines, offering students a holistic understanding of the biological and chemical processes that govern the natural world. Throughout the B.Sc. CBZ program, students engage in a rigorous curriculum that combines theoretical knowledge with practical laboratory skills.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELORS IN CHEMISTRY, BOTANY AND ZOOLOGY",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years/4 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Passed 10+2 with at least 50% aggregate in Physics, Chemistry, Biology ",
      },
      {
        particulars: "Technology Skills",
        details: "Laboratory instrumentation proficiency, Data analysis software skills, Microscopy and imaging technology competence, Modeling and simulation tool familiarity",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Conducting experiments and analyses in laboratory settings, Collecting and classifying plant and animal specimens for research,  Analysing chemical composition and properties of substances, Recording and interpreting data from experiments and fieldwork",
      },
     
    ],

    whychoose:
      "A Bachelor of Science (BSc) in Chemistry, Botany, and Zoology is an important qualification for future jobs. This degree can help you secure a job in many different sectors. For instance, you can go into marketing, finance, or business. ",

    whychoosepoints: [
      "B.Sc graduates with a specialization in the sciences can easily land up in several fields including educational institutions, research institutes, and biotechnology companies. They can even work as teachers and technical writers. ",
      "The bachelor's degree in Chemistry, Botany, and Zoology (CBZ) combines the fields of Chemistry and Botany. The combined study allows graduates to pursue advanced studies in Chemistry, Botany, and Zoology.",
      "The Future Scope of a Bachelor of Science B.Sc CBZ is very vast. You will be equipped with the knowledge of how mathematics works and how it is used in almost all sectors. ",

    ],
   
    
    
   
    
    careertable: [
      {
        career: "Research Scientist",
      },
    
      {
        career: "Professor",
      },

      {
        career: "Forensic expert",
      },

      {
        career: "Research Associate",
      },

      {
        career: "Biologist",
      },

      {
        career: "Plant breeder",
      },

    ],
    
    courseexam:"Some colleges in India may need applicants to take an entrance exam to be accepted into the BSc Food Technology programme. These tests are intended to evaluate a student's knowledge and abilities in a range of courses, with a focus on the Science stream. While the majority of educational institutions admit students based on their performance in the 10+2 exams, some could need applicants to pass additional entrance exams. Common national, state, and university entry tests that may be pertinent for a BSc in food technology include the following:",
    coursesEntrance: [
          {
            Exams:"NEST ",
            Entrance:"The National Entrance Screening Test (popularly known as NEST) is an annual college entrance examination in India, conducted for admission into the National Institute of Science Education and Research, Bhubaneswar (NISER) and the Center for Excellence in Basic Sciences (UM-DAE CEBS), Mumbai.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"CUET",
            Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET) is an all-India test being organized by National Testing Agency for admission to various doctorate, Postgraduate, Undergraduate, Integrated Postgraduate, Diploma, Certification courses and Research Programmes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"OUAT",
            Entrance:"The OUAT entrance exam is usually conducted in offline (pen and paper) mode. Duration: The duration of the exam may vary, but it typically lasts for a few hours.",
            TExams:"State Level",
            MExams:"Offline ",
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
    id: 15,
    logo: job_img_1,
    image: img15,
    coursename: "B.Sc. HOME SCIENCE",
    coursefullform: "BACHELOR’S OF HOME SCIENCE",
    courseoverview:
      "The Bachelor of Science in Home Science program at Guru Nanak College, Dehradun, is an undergraduate course designed for students interested in the comprehensive study of home management, nutrition, human development, textiles, and family resource management. This three-year program offers a blend of theory and practical knowledge aimed at improving the quality of life for individuals, families, and communities.      ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S OF HOME SCIENCE",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 12th in any stream from any recognized board.",
      },
      {
        particulars: "Technology Skills",
        details: " Food and Nutrition Software, Health Monitoring Apps, Home Design Software, Child Development Apps, Online Family Resources.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Conducting experiments and analyses in laboratory settings, Collecting and classifying plant and animal specimens for research,  Analysing chemical composition and properties of substances, Recording and interpreting data from experiments and fieldwork",
      },
     
    ],

    whychoose:
      "A Bachelor of Science in Home Science degree has several benefits. A few reasons for choosing a BSc Home Science course are as follows: ",

    whychoosepoints: [
      "The BSc Home Science course is a foundational degree programme that consists of highly descriptive specialised higher education courses. ",
      "The study of a range of interconnected descriptive subjects, including home economics, human development, nutrition, dietetics, interior decoration, fashion design, apparel design, bioscience, and physical sciences, is included in the BSc Home Science course. ",
      "BSc in Home science is an interesting branch of science that deals with the science of everyday life in our families, including human development, nutrients for particular foods, and food and nutrition.",
      "It gives you the opportunity to pursue a Master of Public Health, Master of Business Administration, or Master of Social Work to expand your field of expertise.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Nutrition Expert",
      },
      {
        career: "Health Care Worker",
      },
      {
        career: "Child Care-taker",
      },
      {
        career: "Community Representative",
      },

    ],
    
    courseexam:"The entrance exam is required for admission to the top government and private BSc Home Science colleges in India. Since colleges release the final student list based on exam results, exams are the main criteria for selecting students. The common entrance exam for BSc Home Science is:",
    coursesEntrance: [
          
          {
            Exams:"CUET",
            Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET) is an all-India test being organized by National Testing Agency for admission to various doctorate, Postgraduate, Undergraduate, Integrated Postgraduate, Diploma, Certification courses and Research Programmes.",
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
    id: 16,
    logo: job_img_1,
    image: img16,
    coursename: "B.Sc. DATA SCIENCE AND CYBER SECURITY",
    coursefullform: "BACHELOR’S IN DATA SCIENCE AND CYBER SECURITY",
    courseoverview:
      "The three-year Bachelor's in Data Science and Cyber Security prepares students for careers safeguarding digital assets and utilizing data for strategic decision-making. The focused curriculum equips students with essential knowledge and skills in data security and analytics. Graduates are well-equipped to address the evolving challenges of cybersecurity and harness the potential of data to propel organizational success.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "BACHELOR’S IN DATA SCIENCE AND CYBER SECURITY",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 12th in PCM stream from any recognized board.",
      },
      {
        particulars: "Technology Skills",
        details: "Programming Languages, Cryptography Techniques,  Network Security Tools, Data Analytics Software, Penetration Testing Tools",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 2 LPA",
      },
      {
        particulars: "Detailed Work Activities",
        details: "Threat Analysis and Detection, Data Encryption and Decryption,  Network Monitoring and Security, Incident Response and Handling",
      },
     
    ],

    whychoose:
      "The following are some key reasons why a candidate should pursue a BSc in Data Science:",

    whychoosepoints: [
      "High Demand: Data science is becoming an important part in a variety of industries. Organisations are turning to data scientists to help them make sense of the increasing amount of data generated and collected. ",
      "High Pay: Data scientists are one of the highest-paid professionals in their field. Data scientists' salaries are typically higher than those of other IT professionals which increases with experience.",
      "Multidisciplinary Field: Data science is an interdisciplinary field that includes concepts and abilities from several other fields, such as Business, Computer Science, Statistics, and Statistics. ",
      "Many Career Paths: Data science provides numerous opportunities for advancement. Some Data Scientists work as Analysts, while others can advance to Management or Leadership positions in the field.",
      "Impactful Job: Working in data science is both challenging and rewarding. Candidates will. be solving complex problems and have a significant impact on businesses and society.",
    ],
   
    
   
    
    careertable: [
      {
        career: "Security Analyst",
      },
      {
        career: "Ethical Hacker/Penetration Tester",
      },
      {
        career: "Security Engineer",
      },
      {
        career: "Cybersecurity Architect",
      },
      {
        career: "Security Consultant",
      },
      {
        career: "Information Security Analyst",
      },

    ],
    
    courseexam:"BSc Data Science admissions are provided on the basis of marks scored by the candidates in various exams. Following is the list of BSc Data Science Entrance Exams:",
    coursesEntrance: [
          
          {
            Exams:"CUET",
            Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET) is an all-India test being organized by National Testing Agency for admission to various doctorate, Postgraduate, Undergraduate, Integrated Postgraduate, Diploma, Certification courses and Research Programmes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SET",
            Entrance:"The SET exam is administered at the state level, which means that passing it qualifies you for the position of Assistant Professor in colleges and universities within that state.",
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
    id: 17,
    logo: job_img_1,
    image: img17,
    coursename: "B.Sc of Medical Laboratory Technology",
    coursefullform: "Bachelor of Medical Laboratory Technology",
    courseoverview:
      "The Bachelor of Medical Laboratory Technology (BMLT) is a three-year undergraduate program that equips students with the essential skills and knowledge for a career in laboratory medicine. This course thoroughly covers subjects such as human anatomy, physiology, biochemistry, microbiology, pathology, and hematology. These foundational topics are vital for understanding human health and diseases.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Medical Laboratory Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years+ 6 Months Internship",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "10+2, with Physics, Chemistry and Biology as imperative subjects.",
      },
      {
        particulars: "Employment Sectors",
        details: "Hospitals, Nursing homes, Diagnostic laboratories, Pharmaceutical laboratories, Research & Development centers, etc",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 3 LPA",
      },
     
    ],

    whychoose:
      "There are many reasons to choose a Bachelor of Medical Laboratory Technology degree. Some of them are listed below:",

    whychoosepoints: [
      "There are a lot of research facilities associated with this degree. Aspirants who are interested in pursuing their research degree can opt for this course. They can contribute significantly towards the development of laboratory equipment and facilities.  ",
      "Professionals in this field can work as research assistants or lab assistants alongside senior medical practitioners.      ",
      "There are ample employment opportunities available for graduates. One can work at laboratory facilities like urology, pathology, and other research labs.  ",
      "Aspirants can choose to assist seniors as a supervisor or consultants in a laboratory, quality assurance companies, the medicine industry, etc. ",
      "Students can pursue a career in the education field and become a lecturer. With passing years, graduates will learn more about the ins and outs of teaching. This will eventually make them highly-qualified and well-compensated employees.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Medical Laboratory Technologist/Technician",
      },
      {
        career: "Laboratory Manager/Supervisor",
      },
      {
        career: "Research Scientist",
      },
      {
        career: "Quality Assurance/Quality Control Officer",
      },
      {
        career: "Healthcare Educator/Trainer",
      },
      {
        career: "Phlebotomist",
      },

    ],
    
    courseexam:"BSc Data Science admissions are provided on the basis of marks scored by the candidates in various exams. Following is the list of BSc Data Science Entrance Exams:",
    coursesEntrance: [
          
          {
            Exams:"NEET UG",
            Entrance:"This entrance test is conducted at the national level by the National Testing Agency. The full marks of the test is 720. The test is conducted in offline mode.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"MET",
            Entrance:"Manipal Academy of Higher Education conducts this test in online mode. The fill marks of the test is 240. Questions are asked from Physics, Chemistry and Biology chapter of Classes XI and XII.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AIIMS Paramedical",
            Entrance:"The exam is conducted in online mode by AIIMS, New Delhi. A total of 90 multiple choice question will be asked to the students. ,The total marks of the test is 90.",
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
    id: 18,
    logo: job_img_1,
    image: img18,
    coursename: "B.Sc of Medical Radio Diagnosis And Imaging Technology",
    coursefullform: "Bachelor of Medical Radio Diagnosis And Imaging Technology",
    courseoverview:
      "A Bachelor of Medical Radio Diagnosis And Imaging Technology (BMRIT) is a three-year undergraduate program designed to train students to become medical imaging professionals who operate and maintain medical imaging equipment. Medical imaging is a field in healthcare that involves the use of technology to create images of the body for diagnostic and treatment purposes.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Medical Radio Diagnosis And Imaging Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 10+2 from science stream.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 3 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "There are numerous reasons that assist students choose BSc Medical Radiography and Imaging Technology in order to build their career. Some of the advantages of the course are listed below.",

    whychoosepoints: [
      "The BSc Medical Radiography and Imaging Technology course is designed to provide students with specialized knowledge of processes and procedures that deal with making images of internal body parts and treating the defects found in the body parts.  ",
      "There are a wide range of opportunities for graduates of this career field.",
      "The average initial after completing the course ranges from INR 1,00,000 to 1,50,000 per year which is quite good as compared to other low paying courses.",
      "It provides students with in-depth knowledge of diagnostic and therapeutic knowledge helpful in treating cancers. ",
      "Students, after completing the course, can apply for a master's degree and research courses in the same field that will improve their academic background and will also increase the salary range.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Radiographer",
      },
      {
        career: "X-Ray technician",
      },
      {
        career: "MRI Technician",
      },
      {
        career: "Ultrasound Technician",
      },
     

    ],
    
    courseexam:"BSc Data Science admissions are provided on the basis of marks scored by the candidates in various exams. Following is the list of BSc Data Science Entrance Exams:",
    coursesEntrance: [
          
          {
            Exams:"NEET UG",
            Entrance:"This entrance test is conducted at the national level by the National Testing Agency. The full marks of the test is 720. The test is conducted in offline mode.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"AIIMS Paramedical",
            Entrance:"The exam is conducted in online mode by AIIMS, New Delhi. A total of 90 multiple choice question will be asked to the students. ,The total marks of the test is 90.",
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
    id: 19,
    logo: job_img_1,
    image: img19,
    coursename: "B.Sc of Operation Theatre Technology",
    coursefullform: "Bachelor of Operation Theatre Technology",
    courseoverview:
      "The Bachelor of Operation Theatre Technology (BOTT) is a specialized undergraduate program designed for those aspiring to be integral members of surgical teams in healthcare settings. This course offers in-depth knowledge and hands-on training in managing operation theaters, understanding surgical procedures, handling sophisticated equipment, and assisting in complex surgeries. Students learn crucial aspects of anesthesia technology, surgical instrumentation, patient monitoring, and operation theater management, ensuring a sterile and safe environment during surgeries.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Operation Theatre Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 10+2 from science stream.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 3 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "The reasons for why to choose this BSc Operation Theatre Technology are mentioned below:-",

    whychoosepoints: [
      "This course will help you to build your confidence and you can develop your technical as well as interpersonal skills as you will get a chance to work under the guidance of doctors, nurses, anesthetists, and other junior doctors.",
      "After completing a master’s degree you can become a teacher/ lecturer in the respective field. This course is also very good for getting high salary packages. Top recruiting companies always offer handsome packages to the deserving candidates.",
      "Skills like how to disinfect the surgical pieces of equipment, how-to guide an anesthetist, what precautions have to be taken for a patient post-surgery, and how to provide moral support to a patient pre and post-surgery all that you can inculcate while pursuing this course.",
      "In the future, if you wish you can prefer to opt for M.sc in Operation Theatre Technology course and establish yourself as a teacher or lecturer in any medical colleges and hospitals. And you will get a chance to train future professionals in the same course.",
      "Students can explore many benefits of pursuing this course. Some experienced technologists get a chance to work in emergency departments and ICUs in various hospitals and healthcare institutes. They will get a chance to work with experienced doctors, nurses, and hereby getting an opportunity to learn new things every day.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "Anaesthetist",
      },
      {
        career: "Consultant",
      },
      {
        career: "Lab Technician",
      },
      {
        career: "Neurosurgery",
      },
      {
        career: "Operating theatre teacher",
      },
      {
        career: "Surgical Assistant",
      },

    ],
    
    courseexam:"BSc Data Science admissions are provided on the basis of marks scored by the candidates in various exams. Following is the list of BSc Data Science Entrance Exams:",
    coursesEntrance: [
          
          {
            Exams:"NEET UG",
            Entrance:"This entrance test is conducted at the national level by the National Testing Agency. The full marks of the test is 720. The test is conducted in offline mode.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"AIIMS Paramedical",
            Entrance:"The exam is conducted in online mode by AIIMS, New Delhi. A total of 90 multiple choice question will be asked to the students. ,The total marks of the test is 90.",
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
    id: 20,
    logo: job_img_1,
    image: img20,
    coursename: "B.Sc of Physiotherapy",
    coursefullform: "Bachelor of Physiotherapy",
    courseoverview:
      "The Bachelor of Physiotherapy is a four-year undergraduate degree designed for students interested in a career in physical therapy, a crucial branch of rehabilitative health science. This program provides comprehensive training in physical therapy techniques to treat and rehabilitate patients with movement dysfunctions, injuries, or disabilities. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Physiotherapy",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 10+2 from science stream.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 3 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "The reasons for why to choose this BSc Physiotherapy are mentioned below:-",

    whychoosepoints: [
      "BSc in Physiotherapy is an in-demand course where students are placed in health institutes, hospitals etc. or they can start their own practice as well. ",
      "In terms of knowledge, students get familiarity with sources of current and new research and knowledge with integration of concepts from outside fields.",
      "Students get an understanding of the critical approach to the creation and compilation of a systematic and coherent body of knowledge and concepts gained from a range of sources.",
      "Candidates develop Technical, creative and analytical skills appropriate to solving specialized problems using evidentiary and procedural based processes in predictable and new contexts that include devising and sustaining arguments associated with a field of work or discipline.",
      "There are a large number of job opportunities for degree holders in Physiotherapy in India and Abroad where students can earn and are at a more likely chance to get into a higher position. ",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "",
      },
      {
        career: "",
      },
      {
        career: "",
      },
      {
        career: "",
      },
      {
        career: "",
      },
      {
        career: "",
      },

    ],
    
    courseexam:"BSc Data Science admissions are provided on the basis of marks scored by the candidates in various exams. Following is the list of BSc Data Science Entrance Exams:",
    coursesEntrance: [
          
          {
            Exams:"NEET UG",
            Entrance:"This entrance test is conducted at the national level by the National Testing Agency. The full marks of the test is 720. The test is conducted in offline mode.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"AIIMS Paramedical",
            Entrance:"The exam is conducted in online mode by AIIMS, New Delhi. A total of 90 multiple choice question will be asked to the students. ,The total marks of the test is 90.",
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
    id: 21,
    logo: job_img_1,
    image: img21,
    coursename: "B. Optom",
    coursefullform: "Bachelor of Optometry ",
    courseoverview:
      "A Bachelor of Science in Optometry (BSc Optometry) is a four-year undergraduate program designed to train students to become eye care professionals who provide services such as vision testing, prescribing eyeglasses or contact lenses, and diagnosing and treating eye conditions. Optometry is a healthcare field that focuses on the prevention, diagnosis, and treatment of visual problems and disorders.      ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Optometry",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Year Undergraduate Program along with 1 year compulsory Internship Program",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 10+2 from science stream.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 3 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "Here are the primary reasons why candidates should opt for BSc Optometry Course.",

    whychoosepoints: [
      "Students post-graduation become well-adept professionals, all thanks to hands-on training. Graduates are able to indulge in optometric practices, grasp pediatric optometry, study aspects of clinical optometry contact lenses, and learn more about how to treat binocular vision eye diseases. ",
      "BSc Optometry course degree serves as the groundwork for further higher studies in this field like M.Sc., M.Phil, or Ph.D. ",
      "Candidates get to explore a dynamic and challenging career where they can achieve personal growth and receive appreciation from society. ",
      "Candidates develop Technical, creative and analytical skills appropriate to solving specialized problems using evidentiary and procedural based processes in predictable and new contexts that include devising and sustaining arguments associated with a field of work or discipline.",
      "One can also join the research community and assist in making a true impact around the field.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Candidates need to qualify entrance exams in order to get BSc Optometry admission in various colleges in India. Below mentioned are some of the important exams that are conducted in order to provide BSc Optometry admission to the eligible candidates:",
    coursesEntrance: [
          
          {
            Exams:"NEET UG",
            Entrance:"This entrance test is conducted at the national level by the National Testing Agency. The full marks of the test is 720. The test is conducted in offline mode.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"AIIMS",
            Entrance:"The exam is conducted in online mode by AIIMS, New Delhi. A total of 90 multiple choice question will be asked to the students. ,The total marks of the test is 90.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"CUET",
            Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET) is an all-India test being organized by National Testing Agency for admission to various Undergraduate, Integrated, Postgraduate, Diploma, Certification courses and Research Programmes in 45 Central Universities of India. In order to take admission in BSc Optometry course, candidates need to qualify the CUET entrance test. Know more about Common University Entrance Test (CUET)            ",
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
    id: 22,
    logo: job_img_1,
    image: img22,
    coursename: "Diploma in Dialysis Technology",
    coursefullform: "Diploma in Dialysis Technology",
    courseoverview:
      "Diploma in Dialysis Techniques is a 2-year skilled-based certification course that trains students to purify and filter the blood and excess or waste materials from the human kidney. It also enables students to perform critical dialysis including renal dialysis and hem-dialysis.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Dialysis Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Minimum qualification required is 10+2 from science stream.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 1 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "Here are the primary reasons why candidates should opt for Diploma in Dialysis Technology Course.",

    whychoosepoints: [
      "Diploma in Dialysis Technique trains the student in the procedure of dialysis therapeutic assistance. The certificate course is a boon to all those health or paramedical staff who want to learn the dialysis technique in a short duration.",
      "The diploma teaches the significance of dialysis technicians as well as the dialysis technique in healthcare to the students. In addition to this, the courses enable the students to identify the major treatment options for end-stage renal disease.",
      "The students will be able to spread awareness in the patients to prevent urinary tract infections and peritonitis.",
      "Diploma in Dialysis Technique inculcates the skills of maintenance of dialysis equipment. The students can also examine the patients independently and suggest an appropriate treatment.",
      "Moreover, the students are taught the usage of recent technologies and the interpretation of clinical data.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Candidates need to qualify entrance exams in order to get Diploma in Dialysis Technology admission in various colleges in India. Below mentioned are some of the important exams that are conducted in order to provide Diploma in Dialysis Technologyy admission to the eligible candidates:",
    coursesEntrance: [
          
          {
            Exams:"CEE AMPAI Masters (PG) Exam",
            Entrance:"CEE AMPAI or Common Entrance Test Association of Minority Professional Academic Institutes (AMPAI) for admissions to full-time MBA, MCA, MTech and M.Pharma programmes offered by the following institutes. The exam is conducted at state and national levels.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"Indian Institute of Mass Communication Test (IIMC)",
            Entrance:"IIMC  exam will be conducted through CUET PG (Common University Entrance Test- PG) However, the Entrance Examination for the language courses - PG Diploma Courses in Journalism (Odia, Marathi, Malayalam and Urdu) - will be held separately.",
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
    id: 23,
    logo: job_img_1,
    image: img23,
    coursename: "B.Pharm",
    coursefullform: "Bachelor of Pharmacy",
    courseoverview:
      "Diploma in Dialysis Techniques is a 2-year skilled-based certification course that trains students to purify and filter the blood and excess or waste materials from the human kidney. It also enables students to perform critical dialysis including renal dialysis and hem-dialysis.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Pharmacy",
      },
      {
        particulars: "Duration of the Course",
        details: "4 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream with Physics, Chemistry, and Biology/Math.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 1 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "There are several compelling reasons why one should pursue a bachelor's degree in pharmacy i.e, a B Pharma degree. Apart from the fact that a B Pharma course will assist in building a profession as a Medical Representative, Scientific Writing, Medical Scripting, Clinical Research, and so on, there are several additional benefits attached to a B Pharma course as well. Thus, some of the reasons why one should choose also a B Pharma course are mentioned below:",

    whychoosepoints: [
      "Government Jobs: After completing a B Pharma degree, all eligible candidates may easily be qualified to work for a variety of government agencies and hospitals across the country. ",
      "Opportunities Across Private Jobs: Apart from government agencies, a B Pharma course graduate may easily grab an opportunity in the private sector with lucrative salary packages across the country.",
      "Working with Patients: In addition to being a pharmacist, one will play an important role in the health-care system by offering asthma care, cholesterol testing, diabetes disease management, and bone density scans, among other things.",
      "Opportunities for a Wide Range of Careers: Working at a retail pharmacy, whether in a healthcare facility or in the community, is the most obvious option for pharmacists. The B Pharma job includes offering people over-the-counter and prescription drugs, as well as counseling.",
      "Career in Abroad: Not only in India but the scope for B Pharma course graduates is equally wider in Abroad as well.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"BITSAT	",
            Entrance:"Birla Institute of Technology and Science Admission Test",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"AP EAMCET",
            Entrance:"Andhra Pradesh Engineering Agriculture and Medical Common Entrance Test",
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
    id: 24,
    logo: job_img_1,
    image: img24,
    coursename: "D.Pharm",
    coursefullform: "Diploma in Pharmacy",
    courseoverview:
      "D Pharma or Diploma in Pharmacy is a 2-year professional diploma course that prepares students for careers in the pharmaceutical industry. The course curriculum of D Pharmacy is designed to prepare students for variousD Pharma jobs such as in hospitals, community pharmacies, and other pharmaceutical-related industries under the supervision of a certified pharmacist. D Pharma Admission is done on the basis of either an admission exam or a merit-based selection process. Students who wish to apply for D Pharma are required to complete Class 12 in the science stream with at least 50% marks in aggregate. GPAT, JEE Pharmacy, and other entrance exams are among the most popular D Pharma entrance examinations. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Pharmacy",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream with Physics, Chemistry, and Biology/Math.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "D Pharma course offers its own set of benefits and chances that distinguish it from other career roles and responsibilities. The following are some of the most important reasons to take D Pharmacy courses:      ",

    whychoosepoints: [
      "Pharmacists have a significant social responsibility since they define the health-care industry. They contribute to the health and well-being of a society's citizens.",
      "Pharmacists can work in a variety of settings, including hospitals, nursing homes, colleges, and the medical business as a whole.      ",
      "Healthcare is a vocation that is constantly changing and evolving. Candidates in the healthcare field have a lot of room for advancement and development.",
      "D Pharma course provides flexibility, as it is a 24-hour job, it is possible to work either a day or a night shift.",
     
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"AU AIMEE Pharmacy",
            Entrance:"Annamalai University All India Medical Entrance Exam Pharmacy (AU AIMEE Pharmacy) is conducted annually by Annamalai University (Chidambaram, Tamil Nadu) for admission into different Pharmaceutical courses, including B.Pharma, M.Pharma, D.Pharma, and Pharma-D Courses.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"CUET UG",
            Entrance:"Gateway to Central Universities: CUET serves as a single entrance test for admission to various central universities across India. It provides a centralized platform, streamlining the admission process for a diverse range of undergraduate and postgraduate programs.",
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
    id: 25,
    logo: job_img_1,
    image: img25,
    coursename: "B.Sc Nursing",
    coursefullform: "Bachelor of Science in Nursing",
    courseoverview:
      "BSc Nursing course is a bachelor's degree program that trains students in areas of critical care and incorporates values necessary to become nurses and midwives. The undergraduate program is of 4 years duration followed by 6 months of mandatory internship. Students will take part in classroom study, projects, and assignments during the course.  ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Science in Nursing",
      },
      {
        particulars: "Duration of the Course",
        details: "4 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Class 12th Board exams with 50% aggregate mark in science stream with Physics, Chemistry, and Biology/Math.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 1LPA to INR 4 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "There are several reasons to study a BSc Nursing course if candidates have a substantial interest in this field. Listed below are some gripping facts that will help students who are wondering whether a BSc Nursing course is the right choice for them. Go through these solid reasons that state why one should choose the course to begin their career as a licensed and professional nurse:",

    whychoosepoints: [
      "Diverse Specializations: While a registered nurse is eligible to work in any hospital or clinic, the nursing profession offers you the choice to specialize in different sub-fields. After completing a BSc Nursing degree, many students opt for a field of specialization that makes them qualified to become an infant nurse, midwife, or neonatal nurse. ",
      "Learning Opportunities: Every job comes with its set of challenges and difficulties and therefore, this is no exception. However, a nurse can tell you that each day is different and they keep learning more and more which keeps them interested and excited about their profession.      ",
      "Increasing Demand for Nurses: Nurses will always be in demand due to the continuous expansion of the healthcare sector. Just like a healthcare setting cannot function without qualified doctors, qualified and registered nurses are an imperative aspect without which the hospital mortality rate will increase and there will be a reduction in patient satisfaction and quality of life. The demand for jobs after BSc Nursing including RNs (Registered Nurses) will increase in future.",
      "Good Placement Record: Almost 94% of nursing graduate students get a job within 6 months of completing their 4-year undergraduate degree. ",
      "Career Mobility: After completing a BSc Nursing course, a Registered Nurse can choose to work in a variety of workplaces like hospitals, healthcare facilities, etc. They can also opt for frontline trauma care or extend to public health or community settings. If a candidate is interested in teaching, job roles as educators in nursing schools also are excellent career choices.",
      "Job Satisfaction: One of the most important reasons behind choosing to study BSc in Nursing and joining the nursing profession is job satisfaction. ",
    ],
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"BHU Nursing Entrance Exam",
            Entrance:"The subjects covered in the BHU BSc Nursing Entrance Exam are Physics, Biology, and Chemistry. Candidates are always guided to check the syllabus of the exam before the examination as a syllabus-based preparation always helps aspirants to score cnsiderable marks in the exam.",
            TExams:"State Level",
            MExams:"Online",
          },
        
          {
            Exams:"PGIMER Nursing",
            Entrance:"The course aims to prepare nursing teachers and personnel for supervision, administration, and teaching purposes in the field of Nursing. PGIMER Chandigarh is one of the top-ranked government medical colleges in India.",
            TExams:"State Level",
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
    id: 26,
    logo: job_img_1,
    image: img26,
    coursename: "GNM",
    coursefullform: "General Nursing and Midwifery",
    courseoverview:
      "GNM stands for General Nursing and Midwifery. GNM Nursing is a three-year diploma course with a mandatory six-months internship period. GNM Nursing is designed for aspirants who want to pursue a career in clinical nursing. Candidates who have successfully passed their class 12 exam in the Science stream can pursue the GNM nursing course. The program teaches aspirants how to care for individuals who are sick or have been injured in order to help them attain full recovery.  ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "General Nursing and Midwifery",
      },
      {
        particulars: "Duration of the Course",
        details: "3.5 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "10+2 with minimum 50% marks in aggregate with science subjects",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 1LPA to INR 4 LPA",
      },
      {
        particulars: "Top Recruiters",
        details: "AIIMS, Columbia Asia, Apollo Hospital, CMC, Medanta, Fortis Hospital, Manipal Hospital",
      },

    ],

    whychoose:
      "In today’s era, there is no shortage of courses for students. One can opt for any programme and pursue their studies in the same. To help students realize about the GNM nursing programme, given below are some of the key reasons why one should pursue a GNM Nursing course.",

    whychoosepoints: [
      "GNM Nursing course provides vocational training to students to help them assist the needs of the patients using advanced clinical methodologies.",
      "The work demands addressing the patients’ needs and lending a helping hand to the doctors. The overall goal is to provide care for society.",
      "Curriculum of the GNM Nursing course is specifically curated to transform learners into full-fledged nursing professionals. It comprises a mixture of both on-ground training and theoretical understanding for the aspirants which helps one acquire basic skills",
      "Career Mobility: After completing a BSc Nursing course, a Registered Nurse can choose to work in a variety of workplaces like hospitals, healthcare facilities, etc. They can also opt for frontline trauma care or extend to public health or community settings. If a candidate is interested in teaching, job roles as educators in nursing schools also are excellent career choices.",
      "Job Satisfaction: One of the most important reasons behind choosing to study BSc in Nursing and joining the nursing profession is job satisfaction. ",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"NEET Exam",
            Entrance:"NEET is held for admission to MBBS and BDS courses in India. The test comprises three sections – physics, chemistry and biology. Candidates have to attempt all the questions in order to qualify for admission. The duration of the exam is three hours.",
            TExams:"National Level",
            MExams:"Online",
          },
        
          {
            Exams:"CUET UG",
            Entrance:"Gateway to Central Universities: CUET serves as a single entrance test for admission to various central universities across India. It provides a centralized platform, streamlining the admission process for a diverse range of undergraduate and postgraduate programs.",
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
    id: 27,
    logo: job_img_1,
    image: img27,
    coursename: "MPH",
    coursefullform: "Master of Public Health",
    courseoverview:
      "Master of Public Health is a professional postgraduate degree that is pursued by candidates after they have completed their bachelor’s degree with at least 50% marks in aggregate in a similar subject. The total duration of a Master of Public Health is 2 years. The curricular work of the Master of Public Health includes several subjects like Ecology of Health, Public Health Biology, Human Psychology, Demographic Transition, etc. MPH (Master of Public Health) is a program that offers maintenance of public health along with dealing with various issues that are in relation to public health. Providing different means of solution namely health awareness programs. The Master of Public Health program also teaches students various ways to tackle diseases and disease-causing agents. Once a candidate completes his or her post-graduation in Master of Public Health, they are eligible for working at national and international levels in relevance to the sector of public health.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Public Health",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Candidates must have a bachelor’s degree in medical science or any related field such as BPT, BDS, MBBS to study Master of Public Health",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },

    ],

    whychoose:
      "In today’s era, there is no shortage of courses for students. One can opt for any programme and pursue their studies in the same. To help students realize about the GNM nursing programme, given below are some of the key reasons why one should pursue a GNM Nursing course.",

    whychoosepoints: [
      "A Master of Public Health degree will lead to a highly rewarding career where one will be well paid. Moreover, with an MPH degree and the research, education and project management involved, one will leave a huge impact on the lives of people.",
      "The demand for Public Health officials is increasing day by day so there is a lot of job safety involved in a career as a Master of Public Health graduate.",
      "With new virus mutations happening every single day, there will be no boredom in your workday.",
      "Master of Public Health students are also trained to handle worst-case scenarios.",
      "The course highly focuses on topics such as disease characteristics, prevention and cure, crisis management, strategic health policies, and regulatory affairs.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Mentioned below are the list of entrance examinations that the candidates can appear in for Master of Public Health admission:",
    coursesEntrance: [
          
          {
            Exams:"NEET PG",
            Entrance:"NEET is held for admission in courses in India. The test comprises three sections – physics, chemistry and biology. Candidates have to attempt all the questions in order to qualify for admission. The duration of the exam is three hours.",
            TExams:"National Level",
            MExams:"Online",
          },

          {
            Exams:"JIPMER ",
            Entrance:"JIPMER MBBS exam, or generally referred to as JIPMER exam by the students of class 12 is conducted by Jawaharlal Institute Postgraduate Medical Education & Research, Puducherry every year for admissions to their undergraduate program.",
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
    id: 28,
    logo: job_img_1,
    image: img28,
    coursename: "MHA",
    coursefullform: "Master of Hospital Administration",
    courseoverview:
      "Master of Hospital Administration, also known as the Master of Hospital Administration (MHA) is a popular PG (Post Graduate) Healthcare and Hospital Management course. One of the most important aspects of MHA course is that it covers the main subject in the field, i.e., Hospital Administration. Hospital Administration is a field that deals with the management, leadership, and administration of healthcare systems, hospital networks, and hospitals. Healthcare administrations are regarded as healthcare professionals. The two-year duration Master of Health/ Hospital Administration course is career orienting in nature, which opens wide career opportunities in different fields of hospital management.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Hospital Administration",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "Candidates must have a bachelor’s degree in medical science or any related field such as BPT, BDS, MBBS to study Master of Public Health",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },

    ],

    whychoose:
      "In today’s era, there is no shortage of courses for students. One can opt for any programme and pursue their studies in the same. To help students realize about the GNM nursing programme, given below are some of the key reasons why one should pursue a GNM Nursing course.",

    whychoosepoints: [
      "A Master of Public Health degree will lead to a highly rewarding career where one will be well paid. Moreover, with an MPH degree and the research, education and project management involved, one will leave a huge impact on the lives of people.",
      "The demand for Public Health officials is increasing day by day so there is a lot of job safety involved in a career as a Master of Public Health graduate.",
      "With new virus mutations happening every single day, there will be no boredom in your workday.",
      "Master of Public Health students are also trained to handle worst-case scenarios.",
      "The course highly focuses on topics such as disease characteristics, prevention and cure, crisis management, strategic health policies, and regulatory affairs.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Mentioned below are the list of entrance examinations that the candidates can appear in for Master of Public Health admission:",
    coursesEntrance: [
          
          {
            Exams:"NEET PG",
            Entrance:"NEET is held for admission in courses in India. The test comprises three sections – physics, chemistry and biology. Candidates have to attempt all the questions in order to qualify for admission. The duration of the exam is three hours.",
            TExams:"National Level",
            MExams:"Online",
          },

          {
            Exams:"JIPMER ",
            Entrance:"JIPMER MBBS exam, or generally referred to as JIPMER exam by the students of class 12 is conducted by Jawaharlal Institute Postgraduate Medical Education & Research, Puducherry every year for admissions to their undergraduate program.",
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
    id: 29,
    logo: job_img_1,
    image: img29,
    coursename: "BSc in Forestry",
    coursefullform: "Bachelor of Science in Forestry",
    courseoverview:
      "The BSc Forestry is a four-year undergraduate program that covers various aspects of forestry and specializations. The BSc Forestry course is divided into eight semesters, and teaches students how to manage plantations, cash crops, sanctuaries, botanical gardens, and forests. To pursue a BSc Forestry degree, candidates must have completed class 12th with a minimum aggregate of 50% from a recognised board. BSc Forestry admissions are determined by merit and entrance exams such as the JCECE, ICAR Exam, OUAT, and CUET.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: " Bachelor of Science in Forestry",
      },
      {
        particulars: "Duration of the Course",
        details: "4 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "The candidate must have passed class 12th with a 50% minimum aggregate.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "The Bachelor of Science in Forestry course offers a degree in a specialised field that is in demand right now. While there are numerous reasons to pursue a BSc in Forestry, the following are some of the most significant ones. ",

    whychoosepoints: [
      "Graduates with a BSc in Forestry will have many job opportunities in the Forest Department of the Indian government. ",
      "The graduates can take a large number of the exams offered by the central government. Several branches of the central government may ask for them during the hiring process. ",
      "Graduates in BSc Forestry are eligible to sit for UPSC exams in order to be considered for government jobs and other professions like IPS and IAS. ",
      "The BSc Forestry's main objective is to get students ready for careers as foresters. It provides students with an understanding of the most recent methods used in the field. ",
      "Students can even pursue postgraduate degrees in the same field, like an MSc or PhD in Agricultural Science or Forestry. Which allows you to pursue higher-paying jobs, this will help you broaden your horizons even more.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"ICAR AIEEA Exam",
            Entrance:"Indian Council of Agricultural Research examination is conducted annually by National Testing Agency. The students can take admission in a variety of courses through ICAR entrance examination in both state and central universities.",
            TExams:"National Level",
            MExams:"Online",
          },

          {
            Exams:"OUAT ",
            Entrance:" It is also conducted at the university level for admission to undergraduate program annually. Orissa University of Agriculture and Technology provide admissions in the field of agriculture and technology to both undergraduate and postgraduate students. The students must have domicile for appearing in OUAT examination. ",
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
    id: 30,
    logo: job_img_1,
    image: img30,
    coursename: "M.Sc. Agronomy",
    coursefullform: " Master of Science in Agronomy ",
    courseoverview:
      "M.Sc. in Agronomy is a 2- year full- time course divided into 4 semesters, with each semester lasting a period of 6 months. The course is designed to offer to eligible candidates, advanced insight into the means of providing options for sustainable agriculture for both the wellness of the environment and humans who consume agricultural produce.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Agronomy ",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "The minimum criterion of eligibility needed to be met for pursuing the course is a Bachelor's degree in science with Biology, Maths and Chemistry as main subjects.",
      },
      
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },

    ],

    whychoose:
      "Career and Job Opportunities after Master of Science (M.Sc.) Agriculture Agronomy ",

    whychoosepoints: [
      " Students who get a master's degree in agronomy can work as crop scientists, crop production specialists, agronomists, agricultural scientists, assistant professors, lab technicians, research fellows, farm associates, and farm managers, among other positions. ",
      "Students can also obtain a doctorate in agronomy and conduct research. Pursuing a PhD broadens career opportunities while also increasing pay. ",
      "Students can also apply for positions in the Central Rice Research Institute, the Centre for Cotton Research, the Central Arid Zone Research Institute, and other government agencies. ",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CG PAT",
            Entrance:"The CG PAT examination is conducted for admission to various Bachelor of Science (B.Sc.) degree programs in Agriculture and allied sciences offered at colleges and universities in the state of Chhattisgarh.",
            TExams:"National Level",
            MExams:"Online",
          },

          {
            Exams:"AGRICET",
            Entrance:"AGRICET typically assesses candidates' knowledge in agriculture-related subjects, including agriculture, horticulture, and forestry. The examination consists of objective-type questions that evaluate applicants' understanding of agricultural sciences and related disciplines. Aspiring students who wish to pursue a career in agriculture and allied fields can appear for AGRICET.",
            TExams:"State  Level",
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
    id: 31,
    logo: job_img_1,
    image: img31,
    coursename: "M.Sc. in Seed Science and Technology",
    coursefullform: "Master of Science in Seed Science and Technology",
    courseoverview:
      "MSc Seed Science and Technology is a full-time 2 year PG course in the field of agricultural science that studies the theoretical study of seed growth. To be eligible, the candidates must have passed their final year graduation examination in the related field of specialization like B.Sc. Agriculture/B.Sc. Biotechnology/B.Sc. life sciences/B.Sc. Biology etc.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Seed Science and Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "The minimum criterion of eligibility needed to be met for pursuing the course is a Bachelor's degree in science with Biology, Maths and Chemistry as main subjects.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },

    ],

    whychoose:
      "Career and Job Opportunities after Master of Science in Seed Science and Technology. ",

    whychoosepoints: [
      "The graduates of MSc in Seed Science & Technology degree program have a variety of work prospects in both government and commercial businesses.",
      "Students who pass the competitive entrance examination after the completion of the MSc in Seed Science & Technology course can be appointed as a scientist in the Indian Council of Agricultural Research (ICAR).",
      "Students must pass the qualifying examination administered by the Agriculture Scientist Recruitment Board in order to work in this position.",
      "The students holding MSc Seed Science and Technology degree have access to a plethora of options in both the public and private sectors.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CUET PG",
            Entrance:"CUET PG, introduced in 2022 by UGC, is the common entrance examination for admission to PG courses in the central universities of India. Every year CUET PG is scheduled over 10+ days by the NTA.",
            TExams:"National Level",
            MExams:"Online",
          },

          {
            Exams:"NEST",
            Entrance:"NEST is a mandatory test for admission to the National Institute of Science Education and Research (NISER), Bhubaneswar, and the University of Mumbai - Department of Atomic Energy Centre for Excellence in Basic Sciences (UM-DAE CEBS), Mumbai.",
            TExams:"National  Level",
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
    id: 32,
    logo: job_img_1,
    image: img32,
    coursename: "M.Sc. Horticulture",
    coursefullform: "Master of Science in Horticulture",
    courseoverview:
      "M.Sc in Horticulture is a postgraduate degree programme that involves the study of plant harvesting including breeding, storage, storage and shipment of vegetable and fruits. A candidate studying M.Sc Horticulture course learns the environmentally friendly practices to process food production. Candidates can expect the course to be completed with a deeper understanding of food production. The course focuses on the attention to detail to all the topics covered in the curriculum.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Horticulture",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: "The candidate must hold a bachelors degree in B.Sc Agriculture, B.Sc Horticulture,  B.Sc Biotechnology or any other equivalent discipline from a recognized institute.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 10,000 to INR 1.2 LPA",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },

    ],

    whychoose:
      "A horticulturist uses science to propagate and grow plants. This knowledge helps farmers and any business or organisation that grows fruit, vegetables, plants or flowers. The primary focus is very much in the prevention of disease and pest infestation, helping plants to grow and thrive.",

    whychoosepoints: [
      "Wide variety of horticultural jobs on offer.",
      "You get to work outdoors",
      "Maintain the importance of green spaces",
      "Help to produce locally grown food",
      "Branch into research",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Admission in most of the institutes is considered on merit basis i.e candidates performance in the qualifying examination is considered for admission in M.Sc Horticulture course. ",
    coursesEntrance: [
          
          {
            Exams:"ICAR AIEEA",
            Entrance:"ICAR AIEEA is one the entrance exam conducted by National Testing Agency (NTA) for admission in postgraduate agriculture courses including M.Sc horticulture course.",
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
    id: 33,
    logo: job_img_1,
    image: img33,
    coursename: "BBA",
    coursefullform: "Bachelor of Business Administration",
    courseoverview:
      "BBA or Bachelor of Business Administration, is a 3-year bachelor's degree that prepares students for a career in the business field. Many BBA graduates pursue management roles or start their businesses and some use it as a foundation for careers in various fields such as marketing, accounting, finance, real estate, and education. The BBA syllabus allows for specializations in areas like Marketing, Healthcare, Accounting, or Management, providing tailored expertise for these industries",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Business Administration",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      },
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria	",
        details: " To be eligible for the Bachelor of Business Administration course, candidates should have passed their class 12th examinations from any stream and a recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 6 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "BBA is an ideal choice for students aspiring for management and business careers after Class 12 as it equips them with essential skills. In the fiercely competitive business world, robust leadership and managerial skills are prerequisites for a thriving career. Pursuing BBA post-Class 12 opens up a diverse spectrum of job prospects for students. BBA graduates can elevate their career trajectory by pursuing higher studies like an MBA, propelling their management and business journey.",

    whychoosepoints: [
      "Fast-Tracks Career Progression: Launches careers effectively in organizations or entrepreneurship, granting access to multiple industries and lucrative packages.",
      "Enhances Market Readiness: Develops insights into market needs and global trends, enriching career prospects and boosting earning potential.",
      "Cultivates Managerial Prowess: Offers comprehensive training in management and leadership, preparing graduates for managerial roles and entrepreneurship, accompanied by average salaries ranging from INR 3 lakh to INR 8 lakh.",
      "International Work Opportunities: Attaining a BBA degree broadens avenues to work overseas, fostering professional growth on a global scale.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CUET UG",
            Entrance:"CUET UG 2024 exam has been introduced for all 12th-pass students who want to get admitted into the UG courses at the best universities in India. The organisation was started to achieve one India, and one exam. The exam provides a common ground for all the students, especially those from rural or remote areas. Candidates can get admission into India's Central Universities.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"JIPMAT",
            Entrance:"JIPMAT is a national-level entrance examination for admission to IIM Bodh Gaya and IIM Jammu's 5-Year integrated Program in Management. The full form of JIPMAT is the Joint Integrated Programme in Management Admission Test.",
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
    id: 34,
    logo: job_img_1,
    image: img34,
    coursename: "BHA",
    coursefullform: "Bachelor of Hospital Administration",
    courseoverview:
      "Bachelor in Hospital Administration or BHA is a three-year undergraduate degree. The program is opted by candidates who are looking for a career in management, administration and leadership of hospitals, healthcare systems and hospital networks. The main aim of the program is to prepare healthcare professionals who can respond effectively to the diverse and ever-changing healthcare sector.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Hospital Administration",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Candidates should have passed their class 12th examinations from any stream and a recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 6 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "BHA program is aimed at preparing healthcare professionals for future leaders who can effectively respond to the dynamic and ever-changing healthcare industry.  Some of the merits of learning Bachelor in Hospital Administration are :",

    whychoosepoints: [
      "BHA provides students with adequate knowledge and skills to carry out the administrative tasks of the clinical and support services departments.",
      "Hospital Administration is largely an operations-oriented subject so the curriculum is designed accordingly with subjects like Floor Management, Public Healthcare facility, Nutrition, etc.",
      "Health and Hospital are one of the money-making industries in the world, hence it provides a variety of job options for the BHA graduates.",
      "BHA students get internships in the 3rd or 4th Semester as often the professionals are visiting faculties of the Hospital Administration Institutes.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CAT",
            Entrance:"The CAT exam is an aptitude test designed to evaluate an applicant's Quantitative, Verbal/reading, Data Interpretation, and Reasoning Skills. The Indian Institutes of Management conduct a computer-based Common Admission Test in the last week of November in two sessions.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"XAT",
            Entrance:"The Xavier Aptitude Test is an all-India test conducted by Xavier Association of Management Institutes (XAMI) as an entrance exam for admission to the post graduate programs in management courses of several management institutes all over India.",
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
    id: 35,
    logo: job_img_1,
    image: img35,
    coursename: "B.Sc. IT/CS",
    coursefullform: "Bachelor of Science in Information Technology and Computer Science",
    courseoverview:
      "Bachelor of Science in Information Technology (BSc IT) is a three-year full-time undergraduate science program. The program focuses on databases, networking, and software. It aims to provide students with both theoretical and practical knowledge of how to safely store, process, and manage information BSc in IT stands for Bachelor of Science in Information Technology. The BSc Information Technology is an undergraduate science programme emphasises networking, databases, and software. The course provide students with a theoretical and practical understanding of information management, processing, and storage. In a nutshell, the BSc Information Technology is all about computer networks, programming, databases, websites, software development, software design, and software engineering.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Science in Information Technology and Computer Science",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Candidates should have passed their class 12th examinations from maths stream and a recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 6 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "Candidates who complete the BSc IT programme have the option of pursuing a variety of careers. Students can either seek employment or further their education after completing the course. The scope of the project is rapidly expanding and will likely continue to do so in the near future. Graduates of the BSc IT programme can work in a variety of fields in both the private and public sectors.",

    whychoosepoints: [
      "Apply for a Job: If you want, you can go straight into the workforce. There are numerous options available, and if you receive a high grade during graduation, you will be offered a competitive salary package. The average salary package will most likely range between INR 3-11LPA. This is a good place to start for a newcomer. You can then gain experience and expertise and aim higher. You can also go freelance.",
      "Higher Education: It is an option after receiving a BSc in IT if you are interested and your financial situation allows it. You can pursue a postgraduate degree in the same field, like an MSc in information technology or an MCA. Your options will be expanded further because you will have access to better-paying jobs as well as the possibility of becoming a teacher. Another option is to pursue an MBA or continue your education abroad. The facilities at universities and colleges abroad are excellent. A good place to start if you want to relocate abroad is by enrolling in classes there. Additionally, you'll need to take the TOEFL or IELTS and obtain a passing score.",
      "Competitive Exams: Prepare for UPSC, SBI-PO, PSC, etc: After BSc IT, if you wish to get into the government sector, you can appear for public sector examinations like SBI-PO, UPSC, SSC, and PSC.",
    
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CUET",
            Entrance:"The exam is conducted by National Testing Agency (NTA). The purpose of this entrance exam is to ensure that candidates who wish to apply for admission into various Undergraduate, Integrated, Postgraduate, Diploma, Certification courses and Research Programmes in 45 Central Universities.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SET",
            Entrance:"SET is a national-level entrance exam conducted for admission to various undergraduate courses.",
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
    id: 36,
    logo: job_img_1,
    image: img36,
    coursename:"BCA",
    coursefullform: "Bachelor of Computer Applications",
    courseoverview:
      "BCA course is a three-year undergraduate programme that imparts students with the basic knowledge of software development and computer application. Bachelor of Computer Application course is prevalent among candidates with a background in Computer Science. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Computer Applications",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Candidates should have passed their class 12th examinations from maths stream and a recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 6 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "Candidates who complete the BSc IT programme have the option of pursuing a variety of careers. Students can either seek employment or further their education after completing the course. The scope of the project is rapidly expanding and will likely continue to do so in the near future. Graduates of the BSc IT programme can work in a variety of fields in both the private and public sectors.",

    whychoosepoints: [
      "Lucrative Career Prospects: With a BCA degree, you can rank among the highest-paid newcomers in the field. Therefore, BCA is the programme you ought to undertake if you wish to start your profession with a high base income.",
      "Paid Internships at Top IT Companies: Many IT organizations seek individuals to work with them since the BCA course is so malleable. Top IT firms even pay bright BCA students to intern with them as part of their efforts to develop them professionally and integrate them into the industry once they have finished their studies.",
      "A Multi-Faceted Career: With a BCA course, you can work in the IT, trading, healthcare, finance, software, transportation, and educational sectors. Therefore, a BCA is the best option for you if you are seeking a degree that will give you a variety of career options.",
      "Global Career Options: Undoubtedly, having a BCA degree can open up a variety of international professional options. After completing the course of study, you have the option of pursuing a Master of Computer Application (MCA) to improve your employment prospects internationally.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Admission to the majority of BCA colleges in India is primarily done through an applicant’s 10+2 scores. For BCA lateral entry, admissions are offered based on the candidate’s diploma scores or a certification course equivalent to it. However, most popular private institutions also conduct their entrance test to decide on an applicant’s caliber. Further, there are several other national-level and state-level BCA entrance exams conducted for admission as listed below:     ",
    coursesEntrance: [
          
          {
            Exams:"AIMA UGAT",
            Entrance:" For admission to the BCA course, the AIMA UGAT is a paper-based undergraduate aptitude test. The test's objective nature makes it ideal for evaluating candidates' technical and general abilities. There are no deducting points for incorrect responses.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"BUMAT",
            Entrance:" The Bharati Vidyapeeth Undergraduate Management Aptitude Test (BUMAT) is a nationwide admission examination offered by the prestigious university Bharati Vidyapeeth. Overall, 200 objective-type questions with one mark each make up the aptitude test. For erroneous answers, a negative marking scheme is not applied.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"SRMHCAT",
            Entrance:"For admission to the BCA degree programme, SRM University administers the SRM University Haryana Common Aptitude Test (SRMHCAT). The total possible score for the exam is 300. There are 100 questions in the test, and each one is worth three points if answered correctly. No points are deducted for wrong answers.",
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
    id: 37,
    logo: job_img_1,
    image: img37,
    coursename:"BFA",
    coursefullform: "Bachelor of Fine Arts",
    courseoverview:
      "BFA course full-form is Bachelor of Fine Arts, which is a three-year full-time undergraduate degree focused on the study of performing or visual arts. Some institutions may also refer to it as a Bachelor of Visual Arts course. It covers a range of topics from literature, and animation to sculpture, painting and much more. To be eligible for this course, students must have completed 10+2 with at least 50% to 60% aggregate marks, while those with an Arts/ Humanities background are preferred at the time of admission. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Fine Arts",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Candidates should have passed their class 12th examinations from maths stream and a recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 6 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },

    ],

    whychoose:
      "BFA course is a very creative course which requires full dedication and diligence by the candidates who wish to pursue it. Candidates who have an interest in artistic things or have creative vision for various things are most suitable for BFA course. Below are some of the reasons as why one should pursue Bachelor of Fine arts course:      ",

    whychoosepoints: [
      "BFA course is not like other courses where only theoretical knowledge about the subject is given. In BFA course, candidates are provided knowledge in different subjects such as painting, aesthetics, making of ceramics and pottery, etc. ",
      "BFA course is a very versatile course in which candidates have a lot of scope. Job opportunities are not limited to only one kind of work. Candidates can try their hand in different works as suited for them.",
      "Candidates after completing undergraduate course for fine arts can pursue their profession as freelance artist, teacher or a writer. It is up to the candidate how he/she wishes to utilize their learning about the fine arts.",
      "As per pay scale, Candidates can manage to get a handsome package after completing the degree. An average package for BFA graduate is around INR 5,00,000/. The package will gradually increase with the gain in experience.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Students who want to pursue a Bachelor of Fine Arts degree should take the required entrance exam. Admission to specific Bachelor of Fine Arts colleges is determined by entrance exams, which are followed by counselling. CUET, UPSEE, and are among the various entrance exams held by BFA colleges to enrol students in BFA degree programmes.",
    coursesEntrance: [
          
          {
            Exams:"CUET ",
            Entrance:"The CUET consists of four domain papers, one language paper, and one general test paper. Alternatively, they can opt for three domain papers, two language papers, and one general test paper.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"UPSEE",
            Entrance:"UPSEE is conducted for admission to various undergraduate and postgraduate courses in engineering, management, pharmacy, architecture, and other fields offered by colleges and universities in Uttar Pradesh. The exam is open to both residents of Uttar Pradesh and candidates from other states.",
            TExams:"State Level",
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
    id: 38,
    logo: job_img_1,
    image: img38,
    coursename:"M.Sc in AI",
    coursefullform: "Master of Science in Artificial Intelligence",
    courseoverview:
      "MSc Artificial Intelligence is a 2-year postgraduate course which is designed to teach the students the basics and applications of Artificial Intelligence. The main objective of this course is to ensure that students will have a solid understanding of the fundamentals of Artificial Intelligence as well as Machine Learning in theory and practice. ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Artificial Intelligence",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Bachelor’s degree in Computer Science or equivalent with an aggregate of at least 50% marks.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Post Graduate level",
      },

    ],

    whychoose:
      "The goal to pursue an MSc Artificial Intelligence degree course will depend on each individual’s aspirations and goals. Some of the reasons to pursue this course are as follows: ",

    whychoosepoints: [
      "Prestigious Job Profile: The demand for Artificial Intelligence students is increasing day by day. Any student with the passion to excel in the field will succeed for sure. Students holding a degree in this course are assumed to have advanced skills in understanding technology and its functions. ",
      "High pay: Average salary for MSc Artificial Intelligence postgraduates are on the higher side for both private and public organizations. After completing this course, students can work as a Big Data Engineer, User Experience, Specialist, Game Programmer, Machine Learner etc. ",
      "Career opportunities: Artificial Intelligence postgraduates will be able to pursue a diverse array of career opportunities. There is no limit to educational programs one can choose. From Research Courses, Management to Competitive Exams to get employed in Govt. Organizations, one can have a variety of options to choose from. ",
      "After completing this course, one can work in the field of Data Analytics, Gaming, Industries that are turning towards digitalization, manufacturing sector etc.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Only a few colleges offer this course in India. The mode of exams can be online or offline depending upon the colleges.",
    coursesEntrance: [
          
          {
            Exams:"BITSAT",
            Entrance:"BITSAT is an engineering entrance test conducted for admission to Integrated First Year Degree programs (engineering and pharmacy) at BITS Pilani, Goa and Hyderabad. BITSAT is a highly competitive exam, and only the top 10% of candidates qualify. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NEST",
            Entrance:"NEST is a mandatory test for admission to the National Institute of Science Education and Research (NISER), Bhubaneswar, and the University of Mumbai - Department of Atomic Energy Centre for Excellence in Basic Sciences (UM-DAE CEBS), Mumbai. ",
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
    id: 39,
    logo: job_img_1,
    image: img39,
    coursename:"DHM",
    coursefullform: "Diploma in Hotel Management",
    courseoverview:
      "Welcome to our One-Year Diploma in Hotel Management! This program is designed for those seeking to dive into the vibrant world of hospitality. In just one year, you will gain a comprehensive understanding of hotel operations, including front office management, housekeeping, and food and beverage service.      ",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Hotel Management",
      },
      {
        particulars: "Duration of the Course",
        details: "2-3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in any stream.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },

    ],

    whychoose:
      "",

    whychoosepoints: [
      "Diverse Career Opportunities: A diploma in hotel management opens the doors to various career paths within the hospitality industry, including hotel operations, food and beverage management, event planning, tourism, and more.",
      "Hands-On Experience: Many diploma programs emphasize practical training, allowing students to gain real-world experience through internships, practical exercises, and industry placements.",
      "Global Industry: The hospitality industry is international, which means that graduates with a hotel management diploma have the potential to work in various countries and cultures around the world.",
      "Rapid Career Progression: With the right skills and dedication, individuals can quickly progress from entry-level positions to managerial roles in a relatively short period of time.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CAT",
            Entrance:"It is conducted once every year by the Indian Institute of Managements (IIMs) and is their primary method of admission. It is one of the most competitive exams in the country – both in standard of toughness of the paper and the seats available in the premier IIMs.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"MAT",
            Entrance:"The MAT exam pattern consists of five sections such as English Language, Mathematical Skills, Critical Reasoning, Data Interpretation, and General Awareness.",
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
    id: 40,
    logo: job_img_1,
    image: img40,
    coursename:"DEM",
    coursefullform: "Diploma in Event Management",
    courseoverview:
      "Event Management course focuses on planning and hosting small- or large-scale events. It provides education and training in planning, organising, and executing events of various types, including parties, functions, weddings, seminars, festivals, games, political rallies, and more. This field offers undergraduate and postgraduate courses that can vary from one to three years, depending on the course type such as diploma, certificate, and degree. The Event Management syllabus and subjects include Event Marketing, Research Methodology, Organisational Behavior, Event Planning and Control, etc.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Event Management",
      },
      {
        particulars: "Duration of the Course",
        details: "1-3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in any stream.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 4 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },

    ],

    whychoose: "Over the past few years, event management has grown at an accelerating pace, positioning it as one of the most lucrative sectors and a significant contributor to India's GDP. A professional who chooses the Event Management course expands their knowledge of the world and learns something new with every event. If you are a bright, outgoing person searching for something exciting and demanding that will stimulate your imagination and increase your practical knowledge, this course is a wonderful fit for you. The following are some convincing reasons for taking an event management course.",

    whychoosepoints: [
      "Acquire Transferable Skills: You can learn a range of skill sets to oversee the planning, execution, and collection of data regarding various event kinds by enrolling in an event management course. In addition to these perks, it gives you transferable skills that you can use in your daily life and that are necessary for many other career options, like budgeting, hustling culture, and many more.",
      "Immense Work Satisfaction: To plan, create, and carry out an event, professionals have to dedicate a significant amount of time and effort. Many event planners claim that organising a big, successful event brings them a great lot of satisfaction in their work.",
      "Opportunities to Explore New Places: Participating in occasions like award presentations, destination weddings, and business gatherings will allow you the opportunity to go to breathtaking and unique places. Even while this field of employment requires the utmost commitment, it also offers fulfilling experiences.",
      "Continuous Growth: The event management industry has experienced remarkable growth in the last few years. People are using event organisers and planners to make any occasion special, from big public events to small-scale private parties and get-togethers. An event management course can lead to an array of employment progression opportunities.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"While some top event management colleges in India offer direct admission, others require students to take entrance exams. However, for postgraduate courses or advanced studies like MBA in Event Management, colleges and universities conduct their admission based on the scores of exams like CAT, MAT, NMAT by GMAC, etc. Given below are some event management entrance exams that prospective students may need to sit for based on their preferred college’s requirements.",
    coursesEntrance: [
          
          {
            Exams:"CAT",
            Entrance:"It is conducted once every year by the Indian Institute of Managements (IIMs) and is their primary method of admission. It is one of the most competitive exams in the country – both in standard of toughness of the paper and the seats available in the premier IIMs.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"MAT",
            Entrance:"The MAT exam pattern consists of five sections such as English Language, Mathematical Skills, Critical Reasoning, Data Interpretation, and General Awareness.",
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
    id: 41,
    logo: job_img_1,
    image: img41,
    coursename:"DNA",
    coursefullform: "Diploma in Nursing Administration",
    courseoverview:
      "Diploma in Nursing is a full time diploma program that can be pursued by the applicants after they have completed their higher secondary degree in science stream with at least 50% marks in aggregate. The curricular work of the Diploma in Nursing involves studies regarding fundamental principles and practices of nursing, medical science, basic healthcare, health economics, assistance in medical surgeries, administration, and management. The total duration of the course is 3 years. A diploma in Nursing primarily prepares medical students to function effectively as members of the healthcare team and to deal with competencies in both hospitals and other types of healthcare organizations.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Nursing Administration",
      },
      {
        particulars: "Duration of the Course",
        details: "1 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10+2 with Physics, Chemistry and Biology as mandatory subjects ",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 50,000 to INR 4 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },

    ],

    whychoose: "If you are considering a career in nursing, here are some of the best reasons to pursue  Diploma in Nursing courses to get started and thrive in the healthcare industry:    ",

    whychoosepoints: [
      "Nursing is a rewarding and fulfilling career path in India and around the world. ",
      "The Diploma in Nursing professionals are readily placed since they meet our country's overall demand for healthcare expertise.",
      "The Diploma course develops the student's interpersonal and communication skills, which are critical in this profession.",
      "This course's career prospects and opportunities provide greater employment stability and even greater career freedom.",
      "Their medical and professional knowledge is also useful outside of the workplace.",
      "There are a plethora of Nursing specializationsto choose from like Midwifery Nursing, Anesthesia Nursing, Mental Health Nursing, Adult Nursing, General Nursing, Pediatric Nursing, and many others.",
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"There are various types of exams that students consider depending on the college. The following are some of the entrance exams for a Diploma in Nursing course that are held across the country.",
    coursesEntrance: [
          
          {
            Exams:"AIIMS Nursing",
            Entrance:"All India Institute of Medical Sciences (AIIMS), New Delhi conducts nursing exam for admission in nursing programmes. AIIMS Delhi conducts the entrance exam for nursing courses named B.Sc (Hons. ), B.Sc (Post-Basic) nursing and B.Sc (Paramedical) beyond the MBBS exam.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"AFMC Nursing",
            Entrance:"Armed Forces Medical College Nursing refers to the nursing program offered by the Armed Forces Medical College (AFMC) in Pune, India. The AFMC Nursing program is a four-year undergraduate course that leads to a Bachelor of Science (B.Sc.) degree in nursing. The course is open to female candidates who have completed their 10+2 education and meet the eligibility criteria.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NEET",
            Entrance:"NEET is held for admission to MBBS and BDS courses in India. The test comprises three sections – physics, chemistry and biology. Candidates have to attempt all the questions in order to qualify for admission. The duration of the exam is three hours.",
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
    id: 42,
    logo: job_img_1,
    image: img42,
    coursename:"DFD",
    coursefullform: "Diploma in Fashion Designing",
    courseoverview:
      "Diploma in Fashion Designing course is designed for undergraduate students interested in the field of fashion design. Candidates with a 10+2 diploma from a recognised board are eligible to apply. The Diploma in Fashion Designing programme lasts one year. The diploma in fashion designing course helps students improve their skills by informing them about the latest fashion trends. Fashion design is an increasingly popular career path. Admission to the Diploma in Fashion Designing course is based on a merit list created from the qualifying examination, such as the 12th or equivalent examination. The main goal is to deliver high-quality designs that are both functional and aesthetically appealing in terms of fashion.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Fashion Designing",
      },
      {
        particulars: "Duration of the Course",
        details: "1 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in any stream.    ",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },

    ],

    whychoose: "Diploma in Fashion Designing course is one of the most popular study programmes in today's trending generation. Students should take this course if they are interested in design development, construction, garment processing, fibre to fabric, stitching, marketing, entrepreneurship, styling, clothing, and accessories. A diploma in fashion design is the best course for those who have always wanted to be successful fashion designers or who want to work in the fashion industry.   ",

    whychoosepoints: [
      "Demand: A Diploma in Fashion Designing is very much in need as they are the designers of clothing lines. They have ample opportunities in jobs and globally to any area of talent.",
      "Career Growth: A job in a Diploma in Fashion Designing course has many career paths like fashion, designer, modeling, stylist, retail manager, marketing, merchandising, closet organizer, fashion show, professional careers in the textile and fashion industry.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"There are many entrance exams for the Diploma in Fashion Designing course in India that the students can attend. Appearing for entrance exams is an essential criterion and a good merit score from the 10+2 education. The students can grab a seat for the course in a reputed college or university. Some of the very best and mandatory Diploma in Fashion Designing entrance exams are:",
    coursesEntrance: [
          
          {
            Exams:"NIFT",
            Entrance:"The NIFT 2024 General Ability Test (GAT) for the B. Des is conducted as a LAN-based, CBT exam. The exam is conducted in a centre-based mode and is bi-lingual. The duration of the exam is 120 minutes.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"NID",
            Entrance:"NID DAT Prelims will be held offline and will consist of subjective and objective questions, whereas the NID DAT Mains, a studio test, will comprise several tests such as drawing, sketching, and model making.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"CEED",
            Entrance:"The objective of the Common Entrance Exam for Design (CEED) is to assess the candidate's aptitude for design involving visual perception ability, drawing skills, logical reasoning, creativity, communication, and problem solving skills. CEED is conducted by IIT Bombay.",
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
    id: 43,
    logo: job_img_1,
    image: img43,
    coursename:"DHA",
    coursefullform: "Diploma in Hospital Administration",
    courseoverview:
      "The Diploma in Hospital Administration (DHA) is a specialized two-year program designed for those aspiring to enter or advance in the field of hospital administration. This course offers a deep dive into the administrative and managerial aspects of hospitals, combining essential knowledge of hospital systems with the practicalities of hospital management. The curriculum is tailored to provide a comprehensive understanding of hospital policy, hospital management, hospital economics, and hospital law, along with a focus on ethical practices in hospital administration. This program is particularly suited for individuals looking to develop a robust foundation in hospital administration, equipping them to effectively manage hospital facilities and services.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Hospital Administration",
      },
      {
        particulars: "Duration of the Course",
        details: "1-2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in any stream.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },
    ],

    whychoose: "This course provides students with a platform for learning managerial techniques related to the hospital sector, hospital agencies, institutions, etc.",

    whychoosepoints: [
      
      "You can work in the small, medium, large organizations and multi-service sectors.",
      "Students will learn managerial skills for taking the leadership role in this sector.",
      "You will get a chance to visit patients, their housemates, and the working team to increase communication and interaction.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"CAT",
            Entrance:"Common Admission Test (CAT Exam) is a computer based test for admission in graduate management programs(MBA). It consist of 3 sections i.e., Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning(DILR), Quantitative Aptitude (Quant).",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"XAT",
            Entrance:"XAT is a Computer-based Test consisting of three sections: a) Verbal and Logical Ability, Data Interpretation and Quantitative Ability, and Decision-Making b) Mock Keyboard Testing c) General Awareness and Essay Writing. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"MAT",
            Entrance:"MAT. Management Aptitude Test (MAT) is a standardised test being administered since 1988 to facilitate Business Schools (B-Schools) to screen candidates for admission to MBA and allied programmes.",
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
    id: 44,
    logo: job_img_1,
    image: img44,
    coursename:"DAI & ML",
    coursefullform: "Diploma in Artificial Intelligence & Machine Learning",
    courseoverview:
      "Artificial Intelligence and Machine Learning (AI-ML) is a significant technological advancement, in the way computer systems learn, adapt and evolve. It is at present being widely used in practically every industry and is regarded as a revolutionary leap forward in the domain of computer science.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Artificial Intelligence & Machine Learning",
      },
      {
        particulars: "Duration of the Course",
        details: "1-2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in any Science.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },
    ],

    whychoose: "Artificial Intelligence is a relatively new technology and is still a growing field. In fact, AI skills are among the most sought-after by employers, with jobs requiring knowledge of AI or machine learning expected to increase by 71% over the next 5 years, according to Forbes.",

    whychoosepoints: [
      "Artificial intelligence (AI) researcher: responsible for exploring and developing new AI algorithms and technologies. ",
      "Machine learning engineer: responsible for designing, building, and maintaining machine learning models. ",
      "Data scientist: responsible for collecting, analyzing, and interpreting complex data sets to identify patterns and insights that can inform business decisions.",
      "Data analysts: They are in charge of analyzing and interpreting data to find patterns, trends, and insights that may be used to inform business choices.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
          {
            Exams:"GRE",
            Entrance:"While not specifically designed for AI and ML, GRE scores are often used as part of the admission process for various graduate programs, including AI and ML.",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"GATE",
            Entrance:"GATE is an exam conducted in India for admission into postgraduate programs in engineering, including AI and ML. ",
            TExams:"National Level",
            MExams:"Online",
          },
          {
            Exams:"JEE",
            Entrance:"Another exam conducted in India, JEE is primarily for admission into undergraduate engineering programs, but some institutions may offer AI and ML diplomas based on JEE scores.",
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
    id: 45,
    logo: job_img_1,
    image: img45,
    coursename:"DVHM",
    coursefullform: "Diploma in Veterinary Hospital Management",
    courseoverview:
      "A Diploma in Veterinary Hospital Management equips students with skills in animal care, business management, and regulatory compliance. The curriculum covers topics such as veterinary practice management, financial administration, and client communication. Graduates are prepared for roles as veterinary practice managers, hospital administrators, or clinic supervisors in the veterinary healthcare industry.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Diploma in Veterinary Hospital Management",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "10/10+2 Examination passed in  Science.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Diploma level",
      },
    ],

    whychoose: "Choosing a Diploma in Veterinary Hospital Management (DVHM) offers a unique blend of animal care expertise and business management skills, providing a versatile foundation for a career in the veterinary healthcare industry. With DVHM, you gain specialized knowledge in veterinary practice management, financial administration, and client communication, positioning you for leadership roles in veterinary clinics, hospitals, or related organizations.",

    whychoosepoints: [
      "In-depth understanding of animal care and welfare standards.",
      "Practical training in clinic operations and staff management. ",
      "Proficiency in regulatory compliance and industry standards.",
      "Enhanced problem-solving and decision-making abilities.",
      "Opportunity for personal and professional growth in a rewarding field.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
      {
        Exams:"",
        Entrance:"",
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
    id: 46,
    logo: job_img_1,
    image: img46,
    coursename:"B.Sc Microbiology ",
    coursefullform: "Bachelor of Science in Microbiology",
    courseoverview:
      "A Bachelor of Science in Microbiology provides comprehensive study of microorganisms and their applications in various fields including healthcare, biotechnology, and environmental science. Students learn about microbial structure, function, and genetics, as well as laboratory techniques, research methodologies, and the role of microbes in disease and industry.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Science in Microbiology",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "The students who have passed 10+2 or had given senior secondary examination with Maths/Biology/Agriculture from any recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },
    ],

    whychoose: "Choosing a B.Sc in Microbiology offers a deep understanding of microscopic organisms' role in health, industry, and the environment. It provides practical laboratory skills, prepares for diverse careers in research, healthcare, biotechnology, and environmental science, and contributes to advancements in medicine, agriculture, and environmental protection.",

    whychoosepoints: [
      "Diverse Career Opportunities: A B.Sc in Microbiology opens doors to careers in various fields such as pharmaceuticals, food industry, healthcare, research, and environmental science, offering versatility and job security.",
      "Contribution to Scientific Advancements: Microbiologists play a crucial role in discovering new drugs, developing vaccines, improving food safety, and advancing biotechnological innovations, contributing to scientific progress and societal well-being.",
      "Understanding of Infectious Diseases: Microbiology education provides insights into the causes, transmission, and treatment of infectious diseases, equipping individuals to contribute to disease prevention, control, and public health initiatives.",
      "Research and Innovation: With strong laboratory skills and research methodologies, microbiology graduates drive innovation by conducting experiments, analyzing data, and developing new technologies to address global challenges in healthcare, agriculture, and environmental sustainability.",
      "Global Relevance and Impact: Microbiology is a globally relevant field, with applications in addressing pressing issues such as antibiotic resistance, emerging infectious diseases, climate change, and food security, offering opportunities to make a meaningful impact on a global scale.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for B.Sc Microbiology programs may vary depending on the institution offering the course. Some common entrance exams for undergraduate microbiology programs in India, for instance, include:",
    coursesEntrance: [
          
      {
        Exams:"JEE",
        Entrance:"Some universities may consider JEE scores for admission into B.Sc programs, including microbiology, although it's more commonly associated with engineering programs.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"CET",
        Entrance:"Various states conduct CET for admission into undergraduate programs, including microbiology, in state universities and colleges.",
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
    id: 47,
    logo: job_img_1,
    image: img47,
    coursename:"B.Sc Geology",
    coursefullform: "Bachelor of Science in Geology",
    courseoverview:
      "A Bachelor of Science in Geology offers comprehensive study of the Earth's structure, processes, and history. Students learn about rocks, minerals, fossils, and geological phenomena, gaining insights into natural resource exploration, environmental conservation, hazard mitigation, and understanding Earth's evolution and dynamic systems through fieldwork, laboratory analysis, and research.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Bachelor of Science in Geology",
      },
      {
        particulars: "Duration of the Course",
        details: "3 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is 12th with SCIENCE from any recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Graduate level",
      },
    ],

    whychoose: "Choosing a B.Sc in Geology provides a deep understanding of Earth's processes, resources, and environmental challenges. It offers practical fieldwork and laboratory skills, preparing graduates for careers in resource exploration, environmental management, hazard assessment, and research. Geology contributes to sustainable development, natural resource conservation, and understanding Earth's dynamic systems.",

    whychoosepoints: [
      "Understanding Earth's Dynamics: Geology offers insights into Earth's evolution, including plate tectonics, earthquakes, and volcanic activity, enabling us to better comprehend natural phenomena and mitigate associated hazards.",
      "Resource Exploration: Geologists play a crucial role in locating and extracting mineral, oil, and water resources vital for human civilization and economic development.",
      "Environmental Conservation: By studying Earth's processes and history, geologists contribute to environmental conservation efforts, such as groundwater protection, land-use planning, and remediation of contaminated sites.",
      "Career Opportunities: A B.Sc in Geology opens doors to diverse careers in industries like energy, mining, environmental consulting, government agencies, academia, and research institutions, offering exciting opportunities for professional growth and development.",
      "Fieldwork and Laboratory Skills: Geology programs emphasize hands-on fieldwork and laboratory techniques, allowing students to develop practical skills in mapping, sample analysis, and data interpretation essential for geological research and exploration.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for B.Sc Geology programs may vary by institution. Common exams include Joint Entrance Examination (JEE) for IITs and state-level entrance tests like CET. These exams typically assess proficiency in mathematics, physics, and chemistry. It's crucial to check specific requirements of institutions offering B.Sc Geology programs for their entrance exams.",
    coursesEntrance: [
          
      {
        Exams:"CG PAT",
        Entrance:"The Chhattisgarh Professional Examination Board, Raipur conducts Pre Agriculture Test commonly known as CG PAT for admissions to Bachelor of Science (BSc) in Agriculture and Horticulture offered at the affiliated colleges to Indira Gandhi Krishi Vishwavidyalaya (IGKV). The entrance exam is held in a pen-paper based tets mode across more than 35 test centres in Chhattisgarh. The question paper of CG PAT is based on three subject groups - Agriculture Group; Physics, Chemistry, Mathematics (PCM) Group; and Physics, Chemistry, Biology (PCB) Group. ",
        TExams:"State Level",
        MExams:"Online",
      },
      {
        Exams:"IISER IAT",
        Entrance:"ISER Aptitude Test (IAT) is an entrance exam conducted by the IIT Madras, IISc Bangalore and Indian Institutes of Science Education and Research (IISERs) for admission into their five-year dual degree program in basic sciences (BS-MS).",
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
    id: 48,
    logo: job_img_1,
    image: img48,
    coursename:"M.Sc in Microbiology",
    coursefullform: "Master of Science in Microbiology",
    courseoverview:
      "A Master of Science in Microbiology delves deeply into the study of microorganisms and their applications in healthcare, industry, and research. The program emphasizes advanced laboratory techniques, research methodologies, and specialized knowledge in microbial genetics, physiology, ecology, and biotechnology, preparing graduates for leadership roles in various scientific fields.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Microbiology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation in any stream of Life Science from any recognized university",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "Choosing an M.Sc in Microbiology offers advanced knowledge in microbial sciences, preparing for careers in research, healthcare, biotechnology, and environmental science. With specialized laboratory skills, research experience, and understanding of microbial diversity, graduates contribute to advancements in medicine, agriculture, and environmental sustainability, shaping the future of microbiology.",

    whychoosepoints: [
      "Advanced Expertise: An M.Sc in Microbiology provides advanced knowledge in microbial genetics, physiology, and ecology, enhancing understanding of microbial diversity and their applications in various fields, including healthcare and biotechnology.",
      "Research Opportunities: Students engage in cutting-edge research, contributing to scientific advancements in areas such as drug discovery, disease prevention, and environmental sustainability.",
      "Specialized Laboratory Skills: The program equips students with advanced laboratory techniques, enabling them to conduct sophisticated experiments and analyze complex data in microbiological research and industry settings.",
      "Career Advancement: Graduates of M.Sc in Microbiology programs are well-positioned for leadership roles in research institutions, pharmaceutical companies, biotech firms, and governmental agencies, driving innovation and addressing global challenges.",
      "Global Impact: Microbiology plays a crucial role in addressing global issues such as antibiotic resistance, infectious diseases, and environmental pollution, offering opportunities for M.Sc graduates to make meaningful contributions to global health and sustainability.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for M.Sc in Microbiology programs vary by institution. Common exams include Graduate Record Examination (GRE) or university-specific tests assessing proficiency in microbiology, biology, chemistry, and related subjects. These exams typically evaluate candidates' academic aptitude and readiness for advanced studies in microbiology.",
    coursesEntrance: [
          
      {
        Exams:"CUET PG",
        Entrance:"The Common University Entrance Test (CUET PG) has been implemented to facilitate admission to a range of postgraduate programmes at Central and State Universities, as well as participating Deemed/Private Universities.",
        TExams:"State Level",
        MExams:"Online",
      },
      {
        Exams:"BITSAT Exam",
        Entrance:"Admissions to renowned BITS institutes across the country will be based on the scores obtained by applicants in the nationally organised BITSATs held each year.",
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
    id: 49,
    logo: job_img_1,
    image: img49,
    coursename:"M.Sc in Biotechnology",
    coursefullform: "Master of Science in Biotechnology",
    courseoverview:
      "A Master of Science in Biotechnology offers advanced study in the interdisciplinary field of biotechnology, focusing on genetic engineering, molecular biology, and bioinformatics. Students gain practical laboratory skills and theoretical knowledge, preparing them for careers in pharmaceuticals, agriculture, healthcare, and research, driving innovation in biological sciences.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Biotechnology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation in any stream of Life Science from any recognized university.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "Choosing an M.Sc in Biotechnology provides specialized expertise in genetic engineering, molecular biology, and bioinformatics, preparing for diverse careers in pharmaceuticals, agriculture, healthcare, and research. With practical laboratory skills and theoretical knowledge, graduates contribute to advancements in medicine, food production, environmental sustainability, and biotechnological innovations.",

    whychoosepoints: [
      "Interdisciplinary Field: M.Sc in Biotechnology integrates biology, chemistry, and engineering, offering a comprehensive understanding of biological processes and their applications in diverse industries, from healthcare to agriculture.",
      "Cutting-edge Research Opportunities: Students engage in innovative research projects, exploring genetic manipulation, drug development, and bioprocessing technologies, contributing to scientific advancements and industrial innovations.",
      "Practical Laboratory Skills: The program emphasizes hands-on training in state-of-the-art laboratories, equipping students with essential techniques in genetic engineering, protein expression, and bioinformatics analysis.",
      "Industry Relevance: Graduates are in high demand in biopharmaceutical companies, biotech startups, agricultural firms, and research institutions, driving advancements in personalized medicine, sustainable agriculture, and renewable energy.",
      "Global Impact: Biotechnology addresses pressing global challenges, including disease eradication, food security, and environmental conservation, offering graduates opportunities to make meaningful contributions to global health, sustainability, and economic development.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for M.Sc in Biotechnology programs vary by institution. Common exams may include Graduate Record Examination (GRE), Graduate Aptitude Test in Engineering (GATE), or university-specific tests assessing proficiency in biology, chemistry, and related subjects. These exams typically evaluate candidates' aptitude for advanced studies in biotechnology.",
    coursesEntrance: [
          
      {
        Exams:"IPU CET ",
        Entrance:"IPU CET stands for Indraprastha University Common Entrance Test which is conducted annually for admission into UG and PG programmes. It is a university level examination and conducted at Guru Gobind Singh Indraprastha University.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"BITSAT Exam",
        Entrance:"Admissions to renowned BITS institutes across the country will be based on the scores obtained by applicants in the nationally organised BITSATs held each year.",
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
    id: 50,
    logo: job_img_1,
    image: img50,
    coursename:"M.Sc in Food Technology",
    coursefullform: "Master of Science in Food Technology",
    courseoverview:
      "A Master of Science in Food Technology focuses on the scientific principles behind food production, preservation, and safety. Students learn about food chemistry, microbiology, processing techniques, and quality control. The program prepares graduates for careers in food industry management, product development, research, and regulatory affairs.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Food Technology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation in any stream of Life Science from any recognized university.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "Choosing an M.Sc in Food Technology offers expertise in food science, production, and safety, essential for careers in the food industry. With practical skills and knowledge in food processing, quality assurance, and innovation, graduates contribute to ensuring food safety, improving nutrition, and meeting global demand for sustainable food solutions.",

    whychoosepoints: [
      "Expertise in Food Science: M.Sc in Food Technology provides in-depth knowledge of food composition, processing, and preservation techniques, enabling graduates to address complex challenges in food production and safety.",
      "Career Opportunities: Graduates can pursue diverse roles in food industry management, research, quality assurance, and product development, offering opportunities for professional growth and advancement.",
      "Industry-Relevant Skills: The program emphasizes hands-on training in food processing technologies, quality control methods, and regulatory compliance, preparing students for real-world challenges in the food industry.",
      "Innovation and Sustainability: Students learn about emerging trends in food technology, such as plant-based alternatives, sustainable packaging, and novel processing methods, contributing to the development of environmentally friendly and nutritious food products.",
      "Global Impact: With the increasing demand for safe and nutritious food worldwide, graduates play a vital role in ensuring food security, promoting public health, and addressing global challenges related to food production and distribution.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for M.Sc in Biotechnology programs vary by institution. Common exams may include Graduate Record Examination (GRE), Graduate Aptitude Test in Engineering (GATE), or university-specific tests assessing proficiency in biology, chemistry, and related subjects. These exams typically evaluate candidates' aptitude for advanced studies in biotechnology.",
    coursesEntrance: [
          
      {
        Exams:"CFTRI",
        Entrance:"CFTRI Entrance Exam is conducted at the notified centers. Preference of 50% each is given to the marks of the qualifying exam and entrance test during selection in M.Sc.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"MDU CEE",
        Entrance:"Maharshi Dayanand University Common Entrance Exam is a state-level entrance test conducted for admission to various M.Sc and M.Pharma courses across seven universities in Haryana. ",
        TExams:"State Level",
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
    id: 51,
    logo: job_img_1,
    image: img51,
    coursename:"M.Sc in Zoology",
    coursefullform: " Master of Science in Zoology",
    courseoverview:
      "A Master of Science in Zoology delves into the study of animals, encompassing their anatomy, physiology, behavior, ecology, and evolution. Students explore diverse animal species, their interactions with ecosystems, and the conservation of biodiversity. The program prepares graduates for careers in research, education, conservation, and environmental management.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: " Master of Science in Zoology",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation with science in relevant subject from any recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "Choosing an M.Sc in Zoology offers a deep understanding of animal biology, behavior, and ecology. With fieldwork, laboratory research, and specialized knowledge, graduates contribute to wildlife conservation, biodiversity preservation, and scientific discovery, shaping the future of animal science and environmental sustainability.",

    whychoosepoints: [
      "Comprehensive Understanding: M.Sc in Zoology provides in-depth knowledge of animal biology, behavior, ecology, and evolution, offering insights into diverse species and their interactions with ecosystems.",
      "Research Opportunities: Students engage in fieldwork and laboratory research, investigating topics such as animal physiology, conservation biology, and wildlife ecology, contributing to scientific advancements.",
      "Career Versatility: Graduates can pursue careers in research institutions, environmental agencies, zoological parks, education, and conservation organizations, with opportunities for specialization in areas like wildlife biology, marine science, or biodiversity conservation.",
      "Practical Skills: The program emphasizes hands-on training in research methodologies, data analysis, and field techniques, equipping students with practical skills for scientific inquiry and environmental monitoring.",
      "Global Impact: With the increasing threats to biodiversity and ecosystems, zoologists play a crucial role in wildlife conservation, habitat restoration, and sustainable resource management, addressing pressing environmental challenges on a global scale.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"Entrance examinations for M.Sc in Zoology programs vary by institution. Common exams may include Graduate Record Examination (GRE), university-specific tests assessing proficiency in biology, ecology, and related subjects, evaluating candidates' readiness for advanced studies in zoology. It's essential to check the specific admission requirements of the institutions where you intend to apply.",
    coursesEntrance: [
          
      {
        Exams:"CUET",
        Entrance:"The CUET PG  offers an all-in-one platform for postgraduate students expecting to get into any of the Central Universities (CUs) or other affiliated institutions, such as state universities, private universities, and deemed to be universities around the nation.",
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
    id: 52,
    logo: job_img_1,
    image: img52,
    coursename:"M.Sc  in Biochemistry",
    coursefullform: "Master of Science in Biochemistry",
    courseoverview:
      "A Master of Science in Biochemistry delves into the molecular mechanisms underlying life processes. Students study biomolecules, cellular metabolism, and genetic regulation, gaining insights into diseases and biotechnological applications. The program emphasizes laboratory research, equipping graduates for careers in pharmaceuticals, biotechnology, healthcare, and academia.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Biochemistry",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation with science from any recognized university.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "M.Sc in Biochemistry offers advanced knowledge in molecular biology, genetics, and cellular processes, essential for careers in pharmaceuticals, biotechnology, healthcare, and research. With practical laboratory skills and theoretical understanding, graduates contribute to scientific discoveries, medical advancements, and biotechnological innovations, shaping the future of biochemistry and biomedicine.",

    whychoosepoints: [
      "Advanced Understanding: M.Sc in Biochemistry provides in-depth knowledge of molecular biology, genetics, and cellular processes, enabling graduates to unravel the complexities of life at the molecular level.",
      "Versatile Career Opportunities: Graduates can pursue diverse careers in pharmaceuticals, biotechnology, healthcare, research, and academia, with roles in drug development, genetic engineering, diagnostics, and teaching.",
      "Cutting-edge Research: The program emphasizes hands-on laboratory research, enabling students to explore novel techniques, conduct experiments, and contribute to scientific advancements in areas such as gene therapy, personalized medicine, and protein engineering.",
      "Practical Laboratory Skills: Students gain proficiency in laboratory techniques, biochemical assays, and data analysis, essential for conducting research, developing new therapies, and solving complex biological problems in various industries.",
      "Impact on Health and Medicine: With a focus on understanding disease mechanisms, drug targets, and therapeutic interventions, biochemists play a crucial role in advancing medical science, improving patient outcomes, and addressing global health challenges.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"To acquire admissions in the MSc Biochemistry course you have to appear for National and College-level entrance exams like BHU-PET, GSAT, Amity JEE, AIIMS Biochemistry entrance exams, and other exams.",
    coursesEntrance: [
          
      {
        Exams:"NPAT",
        Entrance:"The Narsee Monjee Institute of Management Studies (NMIMS) organizes the National Test for Programs After 12th (NPAT) for both undergraduate and postgraduate courses. It's a big deal as it's a university-level exam that opens doors to various courses offered by the university.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"CUET",
        Entrance:"The Common University Entrance Test (CUET), earlier known as Central Universities Common Entrance Test (CUCET)[1] is an all-India test being organized by National Testing Agency for admission to various doctorate, Postgraduate, Undergraduate, Integrated Postgraduate, Diploma, Certification courses and Research Programmes in 45 Central Universities of India. It is also accepted by number of other State Universities and Deemed universities in India.",
        TExams:"State Level",
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
    id: 53,
    logo: job_img_1,
    image: img53,
    coursename:"M.Sc  in Chemistry",
    coursefullform: "Master of Science in Chemistry",
    courseoverview:
      "A Master of Science in Chemistry provides advanced study of chemical principles, reactions, and applications. Students explore organic, inorganic, physical, and analytical chemistry, gaining expertise in laboratory techniques, research methodologies, and theoretical concepts. The program prepares graduates for careers in industry, academia, research, and innovation.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Biochemistry",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation with science from any recognized university.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: " M.Sc in Chemistry offers advanced knowledge in various subfields such as organic, inorganic, physical, and analytical chemistry. With practical laboratory skills and theoretical understanding, graduates contribute to scientific discoveries, technological advancements, and innovations in industries like pharmaceuticals, materials science, and environmental protection.",

    whychoosepoints: [
      "Specialized Expertise: M.Sc in Chemistry provides advanced knowledge across diverse subfields, including organic synthesis, materials science, and spectroscopy, preparing graduates for specialized roles in research, industry, and academia.",
      "Practical Laboratory Skills: The program emphasizes hands-on training in state-of-the-art laboratories, enabling students to conduct sophisticated experiments and analyze complex data.",
      "Career Opportunities: Graduates can pursue careers in pharmaceuticals, biotechnology, chemical manufacturing, and environmental science, with roles in research, development, quality control, and management.",
      "Scientific Inquiry: Students engage in critical thinking and problem-solving, applying theoretical principles to real-world challenges in chemistry, from designing new materials to understanding chemical reactions in biological systems.",
      "Contribution to Society: M.Sc in Chemistry graduates contribute to advancements in medicine, technology, and environmental sustainability, addressing global challenges such as renewable energy, pollution control, and drug discovery.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
    coursesEntrance: [
          
      {
        Exams:"IIT JAM",
        Entrance:"IIT JAM full form is the Indian Institute of Technology Joint Admission Test. IIT JAM is a national-level entrance exam conducted by IITs of India alternatively. The exam is held for students interested in pursuing MSc, M.Tech or PhD courses from top IITs, NITs, and IScs of India.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"OJEE",
        Entrance:"OJEE ((Odisha Joint Entrance Examination)) is a state-level exam for admission to undergraduate, postgraduate, and lateral entrance programmes in the colleges in Odisha. MCA, Integrated MBA, B.E/B.Tech, M.Arch, M.Plan, B.Parm, M.Tech, BHM, MBA, and BAMS are some of the courses offered through OJEE examination.",
        TExams:"State Level",
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
    id: 54,
    logo: job_img_1,
    image: img54,
    coursename:"M.Sc  in Physics",
    coursefullform: "Master of Science in Physics",
    courseoverview:
      "A Master of Science in Physics program provides advanced coursework and research opportunities in fundamental principles of physics. Topics may include quantum mechanics, electromagnetism, thermodynamics, and astrophysics. Graduates are equipped for careers in research, academia, industry, and technology development.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Physics",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Minimum qualification required is graduation with science from any recognized university.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "An M.Sc. in Physics offers rigorous training in analytical thinking, problem-solving, and research methodologies. It opens doors to diverse career paths in academia, industry, and technology. With its focus on understanding the fundamental laws of the universe, it empowers graduates to tackle complex scientific challenges and make significant contributions to society.",

    whychoosepoints: [
      "Advanced Expertise: Gain specialized knowledge in areas like quantum mechanics and astrophysics, deepening your understanding of the universe's fundamental principles.",
      "Research Opportunities: Engage in cutting-edge research projects, contributing to advancements in scientific knowledge and technology.",
      "Career Versatility: Acquire skills applicable across various industries, from academia to technology development, ensuring diverse career opportunities.",
      "Intellectual Challenge: Tackle complex problems and theoretical concepts, fostering critical thinking and analytical skills essential for scientific inquiry.",
      "Contribution to Society: By unraveling the mysteries of the universe, you can make meaningful contributions to society's understanding of the world and its technological advancements.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"To get MSc admission, candidates must keep in mind that they need to sit for some of the entrance exams that are conducted by some of the universities in India to enrol the candidates in MSc admission. The entrance exams for MSc admission are CUET PG, ICAR AIEEA, BHU PET, WBJEE, IIT JAM, AMU Entrance Exam etc",
        coursesEntrance: [
          
      {
        Exams:"IIT JAM",
        Entrance:"IIT JAM full form is the Indian Institute of Technology Joint Admission Test. IIT JAM is a national-level entrance exam conducted by IITs of India alternatively. The exam is held for students interested in pursuing MSc, M.Tech or PhD courses from top IITs, NITs, and IScs of India.",
        TExams:"National Level",
        MExams:"Online",
      },
      {
        Exams:"CPGET",
        Entrance:"The Common Post Graduate Entrance Test (CPGET) is an entrance exam conducted by Osmania University. Candidates can secure admission to various PG, PGD (postgraduate diploma) courses and five-year integrated courses which are offered by Osmania, Telangana, Mahatma Gandhi and Palamuru Universities by giving this entrance exam. ",
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
    id: 55,
    logo: job_img_1,
    image: img55,
    coursename:"M.Sc  in Botany",
    coursefullform: "Master of Science in Botany",
    courseoverview:
      "A Master of Science in Botany program typically delves into advanced plant biology, ecology, and research methodologies. Students explore plant diversity, physiology, genetics, and environmental interactions, with opportunities for specialization in areas such as ethnobotany or conservation biology. Graduates are equipped for careers in research, education, conservation, and industry.",
    coursesoverviewtable: [
      {
        particulars: "Full form",
        details: "Master of Science in Botany",
      },
      {
        particulars: "Duration of the Course",
        details: "2 Years",
      }, 
      {
        particulars: "Admission Process",
        details: "Entrance/Merit Based",
      },
      {
        particulars: "Eligibility Criteria",
        details: "Students who have passed 10+2 or senior secondary examination with Maths/Biology/Agriculture with any recognized board.",
      },
      {
        particulars: "Average Fee Structure",
        details: "INR 20,000 to INR 2 lakh and above",
      },
      {
        particulars: "Level",
        details: "Postgraduate level",
      },
    ],

    whychoose: "An M.Sc. in Botany offers in-depth exploration of plant biology, ecology, and research methodologies, providing skills vital for careers in research, conservation, education, and industry. Specializations such as ethnobotany or conservation biology cater to diverse interests, while contributing to crucial fields like agriculture, environmental management, and pharmaceuticals.",

    whychoosepoints: [
      "Research Opportunities: M.Sc. in Botany offers extensive research avenues, allowing students to delve into diverse topics from plant genetics to ecosystem dynamics, fostering innovation and scientific discovery.",
      "Environmental Conservation: Equips graduates to address pressing environmental challenges by understanding plant biodiversity, ecosystem functions, and conservation strategies, crucial for sustainable resource management and biodiversity preservation.",
      "Career Versatility: Graduates are prepared for diverse career paths, including research, education, pharmaceuticals, agriculture, and environmental consulting, with opportunities in both public and private sectors worldwide.",
      "Hands-On Experience: Programs often incorporate fieldwork, laboratory experiments, and advanced technologies, providing practical skills in plant identification, data analysis, and experimental design, essential for real-world applications and research.",
      "Contribution to Society: Botany plays a vital role in addressing global issues like food security, climate change, and public health. M.Sc. graduates contribute significantly to solving these challenges through their expertise and research contributions.",
      
    ],
   
    
    
   
    
    careertable: [
      {
        career: "abc",
      },

    ],
    
    courseexam:"",
        coursesEntrance: [
          
      {
        Exams:"BHU-PET",
        Entrance:"BHU-PET is a university-level entrance exam conducted by Banaras Hindu University for offering admissions in postgraduate courses. It is an offline exam for 2 hours.",
        TExams:"State Level",
        MExams:"Online",
      },
      {
        Exams:"DUET",
        Entrance:"This entrance examination is conducted by Delhi University for admission to master degree courses both in the DU campus and in the colleges under Delhi University which provide master degree courses.",
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
];

export default courses_details;
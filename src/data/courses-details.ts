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
      "A B. Tech degree is seen as a stepping stone into the area of engineering. Candidates willing to pursue a B. Tech course are always advised to check the highlights before proceeding with the other details. A highlight provides an overview of the course. If you are planning to pursue the course, then go through the important B Tech Course Details given below.",
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
        avgfee: "INR 45, 000",
      },
      {
        typesofcourse: "Distance",
        avgfee: "INR 22, 000",
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
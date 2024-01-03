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
    type: "private",
    establishmentyear: "2016",
    Recognisedby: "UGC",
    Approvedby: "BCI, RCI, PCI, NCTE",
    state: "uttarakhand",
    city: "dehradun",
    Campusarea: "20+ acre",
    link: "",
    email: "slack@inquery.com",
    founded: "27 Jan,1997",
    phone: "234 112 779",
    feild: ["Technology", "Product", "Agency"],
    overviewsection:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    duration: "Fulltime",
    date: "18 Jul 2024",
    college: "Guru Nanak College",
    location: "Dehradun, India",
    category: ["pharmacy", "Medical"],
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
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",

    ranking:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    awards:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    hostel:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    opportunities:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    campus:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    placement:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    admission:
      "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
    coursesAndFees: [
      {
        specialization: "Diploma",
        annualFee: "Rs 45,000",
        eligibility: "Class 10th with minimum 35% marks in aggregate.",
      },
      {
        specialization: "Diploma in Pharmacy (D.Pharm.)",
        annualFee: "Rs 1,00,000",
        eligibility: "As per PCI norms.",
      },
      {
        specialization: "B.Tech",
        annualFee: "Rs 1,15,000 - Rs 1,30,000",
        eligibility:
          "Passed 10+2 examination with Physics and Mathematics as compulsory subjects.",
      },
      {
        specialization: "BCA",
        annualFee: "Rs 60,000",
        eligibility:
          "10+2 with Mathematics/Computer Science/Information Practices etc. with minimum 50% marks.",
      },
      {
        specialization: "B.Sc.",
        annualFee: "Rs 45,000 - Rs 1,25,000",
        eligibility: "10+2 or equivalent.",
      },
      {
        specialization: "B.Ed.",
        annualFee: "Rs 60,000",
        eligibility:
          "Graduation in any stream with minimum 50% marks in aggregate.",
      },
      {
        specialization: "B.Com.",
        annualFee: "Rs 40,000",
        eligibility:
          "10+2 with minimum 50% marks in best four relevant subjects.",
      },
      {
        specialization: "B.Com. (Hons.)",
        annualFee: "Rs 50,000",
        eligibility: "10+2 with minimum 50% marks.",
      },
      {
        specialization: "BBA",
        annualFee: "Rs 60,000",
        eligibility:
          "10+2 with minimum 50% marks in best four relevant subjects.",
      },
      {
        specialization: "B.Sc. in Nursing",
        annualFee: "Rs 2,00,000",
        eligibility:
          "Candidate must pass the 12th or equivalent exam with PCB and English from a recognised board.",
      },
      {
        specialization: "Integrated B. Com LLB (Hons)",
        annualFee: "Rs 60,000",
        eligibility: "10 +2 with minimum 45% marks in aggregate.",
      },
      {
        specialization: "Integrated BA LLB (Hons)",
        annualFee: "Rs 60,000",
        eligibility: "Passed 10 +2 with minimum 45% marks in aggregate.",
      },
      {
        specialization: "M.Tech.",
        annualFee: "Rs 60,000",
        eligibility:
          "B.Tech. with minimum 55% marks in the relevant branch or 60% in MCA for Computer Science & Engineering.",
      },
      {
        specialization: "MCA",
        annualFee: "Rs 60,000",
        eligibility:
          "Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent degree.",
      },
      {
        specialization: "M.Sc.",
        annualFee: "Rs 30,000 - Rs 70,000",
        eligibility:
          "Graduate in science with minimum 50% marks in aggregate with relevant subject.",
      },
      {
        specialization: "M.B.A.",
        annualFee: "Rs 1,15,000",
        eligibility:
          "Bachelor's degree (any discipline) with 50% marks in aggregate.",
      },
      {
        specialization: "M.Pharma",
        annualFee: "Rs 1,00,000",
        eligibility:
          "B.Pharm degree with a minimum of 50% marks from a recognised institute.",
      },
      {
        specialization: "LLM",
        annualFee: "Rs 40,000",
        eligibility:
          "The candidate must have completed an LLB degree (3-year LLB or 5-year LLB) from a recognised university.",
      },
      {
        specialization: "M.Sec.",
        annualFee: "Rs 50,000",
        eligibility:
          "Graduate in Science with minimum 50% marks in aggregate with relevant subjects.",
      },
    ],
    admissionDates: [
      {
        name: "Registration Dates",
        date: "February 8 to September 15, 2023",
      },
      {
        name: "Date of Entrance Test & Interview",
        date: "September 17, 2023",
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
        date: "October 3, 2023",
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
        info: "bachelors",
      },
      {
        name: "Number of Students Registered",
        info: "12312",
      },
      {
        name: "Number of Companies Visited",
        info: "122",
      },
      {
        name: "Number of Students Placed",
        info: "1222",
      },
      {
        name: "Number of Offers Made",
        info: "1222",
      },
      {
        name: "Minimum Salary",
        info: "1222",
      },
      {
        name: "Average Salary",
        info: "1222",
      },
      {
        name: "Minimum Salary (International, if applicable)",
        info: "1222",
      },
      {
        name: "Maximum Salary (International, if applicable)",
        info: "1222",
      },
      {
        name: "Average Salary (International, if applicable)",
        info: "1222",
      },
      {
        name: "Average Salary Percentage for Last 3 Years",
        info: "1222",
      },
      {
        name: "Recruiter List",
        info: "1222",
      },
      {
        name: " Internship Details",
        info: "1222",
      },
      {
        name: "Placement Report",
        info: "1222",
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
    hostelinfo: [
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
    rankinginfo: [
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

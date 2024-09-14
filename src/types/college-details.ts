import { StaticImageData } from "next/image";

export interface ICourse {
  course: string;
  specialization: string;
  annualFee: string;
  duration: string;
  eligibility: string;
}

export interface Ioverview {
  specialization: string;
  annualfee: string;
}

export interface IAdmissionDate {
  name: string;
  date: string;
}

export interface IPlacement {
  name: string;
  info: string;
}
export interface ICampus {
  name: string;
  info: string;
}
export interface Iopportunity {
  name: string;
  info: string;
}
export interface Ihostel {
  name: string;
  info: string;
}
export interface Iranking {
  name: string;
  info: string;
}

export interface Ifaculty {
  name: string;
  Qualification: string;
  Experience: string;
  Specialization: string;
}

export interface Ireview {
  id: number;
  rating: number;
  desc: string;
  user: StaticImageData;
  name: string;
  location: string;
}

export interface IcollegeType {
  id: String;
  pageTitle: string;
  metaDescription: string;
  logo: StaticImageData;
  type: string;
  establishmentyear: string;
  Recognisedby: string;
  Approvedby: string;
  state: string;
  city: string;
  Campusarea: string;
  link: string;
  email: string;
  phone: string;
  founded: string;
  feild: string[];
  overviewsection: string;
  overviewtable:Ioverview[];
  faculty: string;
  facultytable:Ifaculty[];
  duration: string;
  date: string;
  college: string;
  location: string;
  category: string[];
  tags?: string[];
  experience: string;
  salary: number;
  salary_duration: string;
  english_fluency: string;
  overview: string;
  courses: string;
  ranking: string;
  awards: string;
  hostel: string;
  opportunities: string;
  campus: string;
  placement: string;
  admission: string;
  videoid: string;
 
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  
  coursesAndFees: ICourse[];
  admissionDates: IAdmissionDate[];
  placementinformation: IPlacement[];
  campusinfo: ICampus[];
  opportunitiesinfo: Iopportunity[]; // Added this line for admission dates
  awardsinfo: string[]; // Added this line for admission dates
  hostelinfo: Ihostel[]; // Added this line for admission dates
  rankinginfo: Iranking[];
  reviewinfo: Ireview[];
}

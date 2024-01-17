import { StaticImageData } from "next/image";

export interface ICourse {
  specialization: string;
  annualFee: string;
  eligibility: string;
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
export interface Iaward {
  name: string;
  info: string;
}

export interface Ireview {
  id: number;
  rating: number;
  desc: string;
  user: StaticImageData;
  name: string;
  location: string;
}

export interface IcourseType {
  id: number;
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
  awardsinfo: Iaward[]; // Added this line for admission dates
  hostelinfo: Ihostel[]; // Added this line for admission dates
  rankinginfo: Iranking[];
  reviewinfo: Ireview[];
}

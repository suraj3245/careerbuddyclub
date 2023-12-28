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

export interface IcollegeType {
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
  videoid: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  coursesAndFees: ICourse[]; // Added this line for course and fee details
  admissionDates: IAdmissionDate[]; // Added this line for admission dates
}

import { StaticImageData } from "next/image";

export interface ICourse {
  course: string;
  annualFee: string;
  duration: string;
  eligibility: string;
}
export interface Ioverview {
  specialization: string;
  annualfee: string;
}

export interface Ireview {
  id: number;
  rating: number;
  desc: string;
  user: StaticImageData;
  name: string;
  location: string;
}
export interface Iimagetype {
  img: StaticImageData;
}
export interface Iimagetype1 {
  img1: StaticImageData;
}

export interface IuniversityType {
   
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
  overviewtable:Ioverview[];
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
  
  opportunities: string;
  campus: string;
  placement: string;
  admission: string;
  videoid: string;
 
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;

  image: Iimagetype[];
  image1: Iimagetype1[];

  
  whychoosepoints: string[];
  whystudypoints: string[];
  

  coursesAndFees: ICourse[]; 
  reviewinfo: Ireview[];
}

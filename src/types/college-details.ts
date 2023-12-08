import { StaticImageData } from "next/image";

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
}

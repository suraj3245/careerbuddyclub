import { StaticImageData } from "next/image";

export interface IcompanyType {
  id: number;
  logo: StaticImageData;
  title: string;
  link: string;
  email: string;
  founded: string;
  feild: string[];
  overviewsection: string;
  duration: string;
  date: string;
  company: string;
  location: string;
  category: string[];
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

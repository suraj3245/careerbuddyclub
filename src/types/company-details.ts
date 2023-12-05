import { StaticImageData } from "next/image";

export interface IcompanyType {
  id: number;
  logo: StaticImageData;
  title: string;
  size: string;
  link: string;
  email: string;
  phone: string;
  founded: string;
  feild: string[];
  overviewsection: string;
  duration: string;
  date: string;
  company: string;
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

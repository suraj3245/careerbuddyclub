import { StaticImageData } from "next/image";

export interface ICourse {
  specialization: string;
  annualFee: string;
  eligibility: string;
}

export interface Icoursesoverview {
  particulars: string;
  details: string;
}
export interface IcoursesTypes {
  typesofcourse: string;
  avgfee: string;
}

export interface Iskillset {
  skill: string;
  details: string;
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
  coursename: string;
  coursefullform: string;
  courseoverview: string;
  coursesoverviewtable: Icoursesoverview[];
  whychoose: string;
  whychoosepoints: string[];
  typesofcoursedegreeContent: string;
  typesofcourses: IcoursesTypes[];
  lateralentryprocedure: string;
  integratedcourse: string;
  eligibility: string;
  eligibilitypoint: string[];
  requiredskillset: string;
  skillset: Iskillset[];

  reviewinfo: Ireview[];
}

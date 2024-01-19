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
  reviewinfo: Ireview[];
}

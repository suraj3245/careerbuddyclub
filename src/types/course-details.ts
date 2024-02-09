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
export interface IExamination {
  examination: string;
  applicationstart: string;
  applicationend: string;
  admitcard: string;
  examdate: string;
  result: string;
}
export interface ISpecialization {
  courselist: string;
  courselisttwo: string;
}
export interface Iprivatecollege {
  institutename: string;
  coursefee: string;
}
export interface Igovernmentcollege {
  institutename: string;
  coursefee: string;
}
export interface Isubject {
  particulars: string;
  details: string;
}
export interface Istream {
  specialization: string;
  subjects: string;
}
export interface Icommonstream {
  semester: string;
  subjects: string;
}
export interface Isemester {
  semester: string;
  subjects: string;
}
export interface Isyllabus {
  specialization: string;
  syllabus: string[];
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
  // entrance: string;
  // EntranceExamination: IExamination[];
  // popularSpecializaiton: string;
  // popularSpecializaitontable: ISpecialization[];
  // admissionprocess: string;
  // admissionviaexam: string;
  // admissionpoints: string[];
  // admissionmeritbasis: string;
  // admissionlateral: string;
  // admissionwithoutprocess: string;
  // admissionwithoutprocesspoint: string[];
  // coursesfeeinindia: string;
  // topprivatecollege: Iprivatecollege[];
  // syllabusandsubject: string;
  // syllabuspoint: string[];
  // syllabussubject: Isubject[];
  // streamwise: string;
  // streamwisetable: Istream[];
  // commonsubjectforall: Icommonstream[];
  // coresubjects: string;
  // syllabussemester: Isemester[];
  // sepecializationsyllabus: Isyllabus[];
  reviewinfo: Ireview[];
}
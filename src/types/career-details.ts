import { StaticImageData } from "next/image";
import { string } from "yup";

export interface ITopcollege {
   University:string;
   
}
export interface ITopcourse {
    Courses:string;
     
 }
 export interface ITopcompany {
    Company:string;
     
 }
 export interface ISummary {
    Section:string;
    Detailing: string;
 }
export interface IPackage {
    Student: string;
    Package: string;
}

export interface IcareerType {
    id: number;
    
    careersection: string;
    careersection1: string;
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    t5: string;
    X1: string;
    X2: string;
    X3: string;
    X4: string;
    X5: string;
    S1: string;
    S2: string;
    S3: string;
    S4: string;
    S5: string;
    summary: string;
    courses: string;
    college: string;
    company: string;
    location: string;
    career:string;
    Package: IPackage[];
    Topcollege: ITopcollege[];
    Topcourse: ITopcourse[];
    Topcompany: ITopcompany[];
    Summary: ISummary[];
}
"use client";
import React, { useState } from "react";
import Image from "next/image";
import img_1 from "@/assets/images/logo/logo_20.jpeg";
import img_2 from "@/assets/images/logo/logo_21.jpg";
import img_3 from "@/assets/images/logo/logo_22.jpg";
import img_4 from "@/assets/images/logo/logo_23.jpg";
import img_5 from "@/assets/images/logo/logo_24.jpg";
import img_6 from "@/assets/images/logo/logo_25.jpg";
import img_7 from "@/assets/images/logo/logo_26.jpg";
import img_8 from "@/assets/images/logo/logo_27.jpg";
import img_9 from "@/assets/images/logo/logo_28.jpg";
import img_10 from "@/assets/images/logo/logo_29.png";
import img_11 from "@/assets/images/logo/logo_30.jpg";
import img_12 from "@/assets/images/logo/logo_31.png";
import img_13 from "@/assets/images/logo/logo_32.webp";
import img_14 from "@/assets/images/logo/logo_33.jpg";
import img_15 from "@/assets/images/logo/logo_34.jpg";
import img_16 from "@/assets/images/logo/logo_35.jpg";
import img_17 from "@/assets/images/logo/logo_36.webp";
import img_18 from "@/assets/images/logo/logo_37.jpg";
import img_19 from "@/assets/images/logo/logo_38.jpg";
import img_20 from "@/assets/images/logo/logo_39.jpg";
import img_21 from "@/assets/images/logo/logo_40.jpg";
import img_22 from "@/assets/images/logo/logo_41.jpg";
import img_23 from "@/assets/images/logo/logo_42.jpeg";
import img_24 from "@/assets/images/logo/logo_43.jpg";
import img_25 from "@/assets/images/logo/logo_44.jpeg";
import img_26 from "@/assets/images/logo/logo_45.jpeg";
import img_27 from "@/assets/images/logo/logo_46.jpg";
import img_28 from "@/assets/images/logo/logo_47.jpg";
import img_29 from "@/assets/images/logo/logo_48.jpg";
import img_30 from "@/assets/images/logo/logo_49.jpg";
import img_31 from "@/assets/images/logo/logo_50.jpg";
import img_32 from "@/assets/images/logo/logo_51.jpg";
import img_33 from "@/assets/images/logo/logo_52.jpg";
import img_34 from "@/assets/images/logo/logo_53.jpg";
import img_35 from "@/assets/images/logo/logo_54.jpeg";
import img_36 from "@/assets/images/logo/logo_55.png";
import img_37 from "@/assets/images/logo/logo_56.jpg";
import img_38 from "@/assets/images/logo/logo_57.jpg";
import img_39 from "@/assets/images/logo/logo_58.jpg";
import img_40 from "@/assets/images/logo/logo_59.jpg";
import img_41 from "@/assets/images/logo/logo_60.jpg";
import img_42 from "@/assets/images/logo/logo_61.jpg";
import img_43 from "@/assets/images/logo/logo_62.jpg";
import img_44 from "@/assets/images/logo/logo_63.jpg";
import img_45 from "@/assets/images/logo/logo_64.jpg";
import img_46 from "@/assets/images/logo/logo_65.jpg";
import img_47 from "@/assets/images/logo/logo_66.jpg";
import img_48 from "@/assets/images/logo/logo_67.jpg";
import img_49 from "@/assets/images/logo/logo_68.png";
import img_50 from "@/assets/images/logo/logo_69.jpg";
import img_51 from "@/assets/images/logo/logo_70.jpg";
import img_52 from "@/assets/images/logo/logo_71.jpg";
import img_53 from "@/assets/images/logo/logo_72.jpg";
import img_54 from "@/assets/images/logo/logo_73.jpg";


import { IgalType } from "@/types/traits-data-type";

// categories
const traits_data: IgalType[] = [
  {
    id: 1,
    logo: img_1,
    category: ["Realistic"],
    description: "Geographers ",
  },
  {
    id: 2,
    logo: img_2,
    category: ["Realistic"],
    description: "Critical Care Nurses",
  },
  {
    id: 3,
    logo: img_3,
    category: ["Realistic"],
    description: "Conservation Scientists",
  },
  {
    id: 4,
    logo: img_4,
    category: ["Realistic"],
    description: "Exercise Physiologists",
  },
  {
    id: 5,
    logo: img_5,
    category: ["Realistic"],
    description: "Airline Pilots",
  },
  {
    id: 6,
    logo: img_6,
    category: [ "Realistic"],
    description: "Geneticists",
  },
  {
    id: 7,
    logo: img_7,
    category: [ "Realistic"],
    description: "Technical Writers",
  },
  {
    id: 8,
    logo: img_8,
    category: [ "Realistic"],
    description: "Accountants and Auditors",
  },
  {
    id: 9,
    logo: img_9,
    category: [ "Realistic"],
    description: "Public Relations Specialists",
  },
  {
    id: 10,
    logo: img_10,
    category: [ "Conventional"],
    description: "Actuaries",
  },
  {
    id: 11,
    logo: img_11,
    category: [ "Conventional"],
    description: "Fraud Examiners, Investigators and Analysts",
  },
  {
    id: 12,
    logo: img_12,
    category: [ "Conventional"],
    description: "Web Administrators",
  },
  {
    id: 13,
    logo: img_13,
    category: [ "Conventional"],
    description: "Intelligence Analysts",
  },
  {
    id: 14,
    logo: img_14,
    category: [ "Conventional"],
    description: "Food Scientists and Technologists",
  },
  {
    id: 15,
    logo: img_15,
    category: [ "Conventional"],
    description: "Clinical Data Managers",
  },
  {
    id: 16,
    logo: img_16,
    category: [ "Conventional"],
    description: "Database Administrators",
  },
  {
    id: 17,
    logo: img_17,
    category: [ "Conventional"],
    description: "Environmental Compliance Inspectors",
  },
{
  id: 18,
  logo: img_18,
  category: [ "Conventional"],
  description: "Foresters",
},
{
  id: 19,
  logo: img_19,
  category: [ "Investigative"],
  description: "Clinical Research Coordinators",
},
{
  id: 20,
  logo: img_20,
  category: [ "Investigative"],
  description: "News Analysts, Reporters, and Journalists",
},
{
  id: 21,
  logo: img_21,
  category: [ "Investigative"],
  description: "Data Scientist",
},
{
  id: 22,
  logo: img_22,
  category: [ "Investigative"],
  description: "Geneticists",
},
{
  id: 23,
  logo: img_23,
  category: [ "Investigative"],
  description: "Market Research Analysts and Marketing Specialists",
},
{
  id: 24,
  logo: img_24,
  category: [ "Investigative"],
  description: "Medical Nurses",
},
{
  id: 25,
  logo: img_25,
  category: [ "Investigative"],
  description: "Technical Writers",
},
{
  id: 26,
  logo: img_26,
  category: [ "Investigative"],
  description: "Accountants and Auditors",
},
{
  id: 27,
  logo: img_27,
  category: [ "Investigative"],
  description: "Business Continuity Planners",
},
{
  id: 28,
  logo: img_28,
  category: [ "Enterprising"],
  description: "Advertising and Promotions Managers",
},
{
  id: 29,
  logo: img_29,
  category: [ "Enterprising"],
  description: "Public Relations Specialists",
},
{
  id: 30,
  logo: img_30,
  category: [ "Enterprising"],
  description: "Business Intelligence Analysts",
},
{
  id: 31,
  logo: img_31,
  category: [ "Enterprising"],
  description: "Business/ Marketing",
},
{
  id: 32,
  logo: img_32,
  category: [ "Enterprising"],
  description: "Business Continuity Planners",
},
{
  id: 33,
  logo: img_33,
  category: [ "Enterprising"],
  description: "Industrial Engineers",
},
{
  id: 34,
  logo: img_34,
  category: [ "Enterprising"],
  description: "Buyers and Purchasing Agents, Farm Products",
},
{
  id: 35,
  logo: img_35,
  category: [ "Enterprising"],
  description: "Media Technical Directors/Managers",
},
{
  id: 36,
  logo: img_36,
  category: [ "Enterprising"],
  description: "Fish and Game Wardens",
},
{
  id: 37,
  logo: img_37,
  category: [ "Artistic"],
  description: "Editors",
},
{
  id: 38,
  logo: img_38,
  category: [ "Artistic"],
  description: "Film and Video Editors, Media Programming Directors",
},
{
  id: 39,
  logo: img_39,
  category: [ "Artistic"],
  description: "Proofreaders and Copy Markers",
},
{
  id: 40,
  logo: img_40,
  category: [ "Artistic"],
  description: "Technical Writers",
},
{
  id: 41,
  logo: img_41,
  category: [ "Artistic"],
  description: "Poets, Lyricists and Creative Writers",
},
{
  id: 42,
  logo: img_42,
  category: [ "Artistic"],
  description: "Music Therapistss",
},
{
  id: 43,
  logo: img_43,
  category: [ "Artistic"],
  description: "Landscape Architects",
},
{
  id: 44,
  logo: img_44,
  category: [ "Artistic"],
  description: "Architectural and Engineering Managers",
},
{
  id: 45,
  logo: img_45,
  category: [ "Artistic"],
  description: "Interior Designers",
},
{
  id: 46,
  logo: img_46,
  category: [ "Social"],
  description: "Teacher",
},
{
  id: 47,
  logo: img_47,
  category: [ "Social"],
  description: "Registered Nurses",
},
{
  id: 48,
  logo: img_48,
  category: [ "Social"],
  description: "Medical Officer",
},
{
  id: 49,
  logo: img_49,
  category: [ "Social"],
  description: "Political Scientists, Social Science Research Assistants",
},
{
  id: 50,
  logo: img_50,
  category: [ "Social"],
  description: "Environmental Science and Protection Technicians, Including Health",
},
{
  id: 51,
  logo: img_51,
  category: [ "Social"],
  description: "Sociologists",
},
{
  id: 52,
  logo: img_52,
  category: [ "Social"],
  description: "Nurse Practitioners",
},
{
  id: 53,
  logo: img_53,
  category: [ "Social"],
  description: "Chemistry Teachers",
},
{
  id: 54,
  logo: img_54,
  category: ["Social"],
  description: "Political Scientists",
},
];
const categories: string[] = [
  "Realistic",
  "Conventional",
  "Investigative",
  "Enterprising",
  "Artistic",
  "Social",
];
// job items
const jobs = traits_data.filter((j) => j.category.includes(categories[0]));

const  CategorySectionEight = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [jobItems, setJobItems] = useState(jobs);
 
  // Updated handleJob function
  const handleJob = (value: string) => {
    setActiveCategory(value);
    const filtered_jobs = traits_data.filter((j) => j.category.includes(value));
    setJobItems(filtered_jobs);
  };

  

  return (
    <>
      <section className=" pt-120 xl-pt-100 md-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-50 xl-mt-90 md-mt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="title-one text-center text-lg-start md-mb-20">
                <h2 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                  Personality Traits
                </h2>
              </div>
            </div>
            <div className="col-xl-12 col-lg-7">
              <ul className="style-none d-flex justify-content-center justify-content-lg-end flex-wrap isotop-menu-wrapper g-control-nav">
                {categories.map((cate, i) => (
                  <li
                    key={i}
                    onClick={() => handleJob(cate)}
                    className={`${cate === activeCategory ? "is-checked" : ""}`}
                  >
                    {cate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            id="isotop-gallery-wrapper"
            className="grid-3column pt-55 lg-pt-20"
          >
            <div className="row">
              {jobItems.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 isotop-item overflow-hidden"
                >
                  <div className="job-list-two mt-10 lg-mt-5 position-relative">
                    <div className="image">
                      <Image
                        src={item.logo}
                        alt="logo"
                        width={350}
                        height={300}
                        style={{
                          objectFit: "cover",
                        }}
                        className="lazy-img m-auto"
                      />
                    </div>
                    <div className="description text-center " >{item.description}</div> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default CategorySectionEight;

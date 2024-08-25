"use client";
import React, { useState } from "react";
import Image from "next/image";
import img_1 from "@/assets/images/assets/11.jpeg";
import img_2 from "@/assets/images/assets/12.jpg";
import img_3 from "@/assets/images/assets/13.jpeg";
import img_4 from "@/assets/images/assets/14.webp";
import img_5 from "@/assets/images/assets/15.jpg";
import img_6 from "@/assets/images/assets/17.jpg";
import img_7 from "@/assets/images/assets/18.jpg";
import img_8 from "@/assets/images/assets/19.jpg";
import img_9 from "@/assets/images/assets/20.webp";
import img_10 from "@/assets/images/assets/21.jpg";
import img_11 from "@/assets/images/assets/22.jpeg";
import img_12 from "@/assets/images/assets/23.jpg";



import { IgalType } from "@/types/job-data-type";

// categories
const job_data: IgalType[] = [
  {
    id: 1,
    logo: img_1,
    category: ["Campus Life"],
  },
  {
    id: 2,
    logo: img_2,
    category: ["Campus Life"],
  },
  {
    id: 3,
    logo: img_3,
    category: ["Campus Life"],
  },
  {
    id: 4,
    logo: img_4,
    category: ["Campus Life"],
  },
  {
    id: 5,
    logo: img_5,
    category: ["Campus Life"],
  },
  {
    id: 6,
    logo: img_6,
    category: ["Campus Life"],
  },
  {
    id: 7,
    logo: img_7,
    category: ["Student Engagement"],
  },
  {
    id: 8,
    logo: img_8,
    category: ["Student Engagement"],
  },
  {
    id: 9,
    logo: img_9,
    category: ["Student Engagement"],
  },
  {
    id: 10,
    logo: img_10,
    category: ["Student Engagement"],
  },
  {
    id: 11,
    logo: img_11,
    category: ["Student Engagement"],
  },
  {
    id: 12,
    logo: img_12,
    category: ["Student Engagement"],
  },
  
];

const categories: string[] = [
  "Campus Life",
  "Student Engagement",
  
];
// job items
const jobs = job_data.filter((j) => j.category.includes(categories[0]));

const JobListEleven = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [jobItems, setJobItems] = useState(jobs);

  // Updated handleJob function
  const handleJob = (value: string) => {
    setActiveCategory(value);
    const filtered_jobs = job_data.filter((j) => j.category.includes(value));
    setJobItems(filtered_jobs);
  };

  return (
    <>
      <section className=" pt-30 xl-pt-50 md-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-50 xl-mt-90 md-mt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="title-one text-center text-lg-start md-mb-20">
                <h3 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                  Life At Doon Business School
                </h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
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
                        height={350}
                        style={{
                          objectFit: "cover",
                        }}
                        className="lazy-img m-auto"
                      />
                    </div>
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

export default JobListEleven;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import img_1 from "@/assets/images/logo/1.jpg";
import img_2 from "@/assets/images/logo/2.jpg";
import img_3 from "@/assets/images/logo/3.jpg";
import img_4 from "@/assets/images/logo/4.jpg";
import img_5 from "@/assets/images/logo/5.jpg";
import img_6 from "@/assets/images/logo/6.jpg";
import img_7 from "@/assets/images/logo/logo_8.jpg";
import img_8 from "@/assets/images/logo/logo_9.jpg";
import img_9 from "@/assets/images/logo/logo_10.jpg";
import img_10 from "@/assets/images/logo/logo_7.jpg";
import img_11 from "@/assets/images/logo/logo_11.jpg";
import img_12 from "@/assets/images/logo/logo_12.jpg";
import img_13 from "@/assets/images/logo/Logo_13.jpg";
import img_14 from "@/assets/images/logo/Logo_14.jpg";
import img_15 from "@/assets/images/logo/Logo_15.jpg";
import img_16 from "@/assets/images/logo/Logo_16.jpg";
import img_17 from "@/assets/images/logo/Logo_17.jpg";
import img_18 from "@/assets/images/logo/logo_18.jpg";

import { IgalType } from "@/types/job-data-type";

// categories
const job_data: IgalType[] = [
  {
    id: 1,
    logo: img_1,
    category: ["Career Aptitude"],
  },
  {
    id: 2,
    logo: img_2,
    category: ["Career Aptitude"],
  },
  {
    id: 3,
    logo: img_3,
    category: ["Career Aptitude"],
  },
  {
    id: 4,
    logo: img_5,
    category: ["Career Aptitude"],
  },
  {
    id: 5,
    logo: img_6,
    category: ["Career Aptitude"],
  },
  {
    id: 6,
    logo: img_7,
    category: ["Career Town"],
  },
  {
    id: 7,
    logo: img_8,
    category: ["Career Town"],
  },
  {
    id: 8,
    logo: img_9,
    category: ["Career Town"],
  },
  {
    id: 9,
    logo: img_10,
    category: ["Career Town"],
  },
  {
    id: 10,
    logo: img_11,
    category: ["Career Town"],
  },
  {
    id: 11,
    logo: img_12,
    category: ["Career Town"],
  },
  {
    id: 12,
    logo: img_13,
    category: ["Social Events"],
  },
  {
    id: 13,
    logo: img_14,
    category: ["Social Events"],
  },
  {
    id: 14,
    logo: img_15,
    category: ["Social Events"],
  },
  {
    id: 15,
    logo: img_16,
    category: ["Social Events"],
  },
  {
    id: 16,
    logo: img_17,
    category: ["Social Events"],
  },
  {
    id: 17,
    logo: img_18,
    category: ["Social Events"],
  },
];

const categories: string[] = [
  "Career Town",
  "Career Aptitude",
  "Social Events",
];
// job items
const jobs = job_data.filter((j) => j.category.includes(categories[0]));

const JobListTwo = () => {
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
      <section className=" pt-30 xl-pt-50 md-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-110 xl-mt-90 md-mt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="title-one text-center text-lg-start md-mb-20">
                <h2 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                  Our Engagement
                </h2>
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

        <section className="text-feature-three position-relative pt-100 lg-pt-80 md-pt-50">
          <div className="container">
            <div className="row">
              <h2> Our Team</h2>
              <div className="col-xxl-11 m-auto">
                <div className="video-post-two d-flex align-items-center justify-content-center mt-100 lg-mt-50 mb-50 lg-mb-30"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default JobListTwo;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_12.svg";
import icon_2 from "@/assets/images/icon/icon_13.svg";
import icon_3 from "@/assets/images/icon/icon_14.svg";
import icon_4 from "@/assets/images/icon/icon_15.svg";
import shape_2 from "@/assets/images/shape/shape_22.svg";
import shape_3 from "@/assets/images/shape/shape_24.svg";
import bg_1 from "@/assets/images/assets/img_16.webp";
import bg_2 from "@/assets/images/assets/img_17.webp";
import bg_3 from "@/assets/images/assets/img_18.webp";
import bg_4 from "@/assets/images/assets/img_19.webp";

import { ICategoryThree } from "@/types/category-type";

// category data
export const category_data: ICategoryThree[] = [
  {
    id: 1,
    icon: icon_1,
    title: <>Career</>,
    description:
      "Still confused which career is best for you? Take our Career Aptitude Test to find the best course for you as per your personality strengths & interests.",
    nav: "/careerapt",
    bg_img: bg_1,
  },
  {
    id: 2,
    icon: icon_2,
    title: <>Courses</>,
    description:
      "Will your Degree land you a Job? Take Job Guarenteed Degree from Career Buddy Club to have a Job after your Course.",
    nav: "",
    bg_img: bg_2,
  },
  {
    id: 3,
    icon: icon_3,
    title: <>College</>,
    description:
      "Worried about not getting into a good college? Let Career Buddy Club get you 100% Guaranteed Admission in the Best College as per your need.",
    nav: "/campus",
    bg_img: bg_3,
  },
  {
    id: 4,
    icon: icon_4,
    title: <>Company</>,
    description:
      "Not getting hired as a fresher? Check our job portal for the latest fresher Jobs & thier interview dates",
    nav: "/corporate",
    bg_img: bg_4,
  },
];
// CategoryCardWrapper
export function CategoryCardWrapper() {
  return (
    <div className="card-wrapper row mt-10 lg-mt-10">
      {category_data.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div
            className={`card-style-four ${item?.bg} tran3s w-100 mt-30 wow fadeInUp`}
          >
            {!item.df && (
              <Link href={item.nav} className="d-block">
                <div className="icon tran3s d-flex align-items-center justify-content-center">
                  <Image src={item.icon} alt="icon" className="lazy-img" />
                </div>
                <div className="title tran3s fw-500 text-lg">{item.title}</div>
                <div className="total-job">{item.description}</div>
              </Link>
            )}
            {item.df && (
              <Link href={item.nav} className="d-block">
                <div className="title text-white">{item.title}</div>
                <div className="text-lg text-white">{item?.sub_title}</div>
                <div className="d-flex align-items-center justify-content-end mt-50">
                  <Image src={shape_2} alt="shape" className="lazy-img" />
                  <div className="icon tran3s d-flex align-items-center justify-content-center ms-5">
                    <Image src={item.icon} alt="icon" className="lazy-img" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const CategorySectionSeven = () => {
  return (
    <section className="hero-banner-two position-relative pt-150 lg-pt-150 pb-140 lg-pb-180">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-sm-8">
            <div
              className="title-one text-center text-sm-start wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h2 className="fw-600">What Do You Need Help With</h2>
            </div>
          </div>
        </div>
        {/* CategoryCardWrapper */}
        <CategoryCardWrapper />
        {/* CategoryCardWrapper */}
      </div>
    </section>
  );
};

export default CategorySectionSeven;

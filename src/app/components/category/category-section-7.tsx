"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_2 from "@/assets/images/shape/shape_22.svg";
import bg_1 from "@/assets/images/assets/career.png";
import bg_2 from "@/assets/images/assets/meeting.png";
import bg_3 from "@/assets/images/assets/graduate.png";
import bg_4 from "@/assets/images/assets/company.png";
import { ICategoryThree } from "@/types/category-type";
import dynamic from "next/dynamic";

const ApplyModal = dynamic(
  () => import("@/app/components/common/popup/apply-modal"),
  {
    ssr: false,
  }
);
const LoginModal = dynamic(
  () => import("@/app/components/common/popup/login-modal"),
  {
    ssr: false,
  }
);
const PhoneModal = dynamic(
  () => import("@/app/components/common/popup/phone-modal"),
  {
    ssr: false,
  }
);
interface CategoryCardWrapperProps {
  isUserLoggedIn: boolean;
}

interface categorySectionProps {
  user: {
    value: string | null;
  };
}
export const category_data: ICategoryThree[] = [
  {
    id: 1,
    icon: bg_1,
    title: <>Career</>,
    description:
      "Still confused which career is best for you? Take our Career Aptitude Test to find the best course for you as per your Personality, Strengths & Interests.",
    nav: "/career-aptitude",
    bg_img: bg_1,
  },
  {
    id: 2,
    icon: bg_2,
    title: <>Courses</>,
    description:
      "Will your Degree land you a Job? Take Job Guarenteed Degree from Career Buddy Club to have a Job after your Course.",
    nav: "/admission",
    bg_img: bg_2,
  },
  {
    id: 3,
    icon: bg_3,
    title: <>College</>,
    description:
      "Worried about not getting into a good College? Let Career Buddy Club get you 100% Guaranteed Admission in the Best College as per your need.",
    nav: "/dashboard/candidate-dashboard/profile",
    bg_img: bg_3,
  },
  {
    id: 4,
    icon: bg_4,
    title: <>Company</>,
    description:
      "Not getting hired as a Fresher? Check our Job Portal for the latest Fresher Jobs & their Interview Dates",
    nav: "https://jobs.careerbuddyclub.com",
    bg_img: bg_4,
  },
];
// CategoryCardWrapper
export function CategoryCardWrapper({
  isUserLoggedIn,
}: CategoryCardWrapperProps) {
  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px", 
  };

  const cardImageStyle = {
    maxWidth: "100px", 
    maxHeight: "100px", 
  };
  const titleStyle: React.CSSProperties = {
    textAlign: "center", 
    fontWeight: "500", 
  };
  const descriptionTextStyle: React.CSSProperties = {
    color: "#333333", 
    
  };
  const renderLink = (item: ICategoryThree) => {
    const linkTarget =
      item.nav === "/dashboard/candidate-dashboard/profile" && !isUserLoggedIn
        ? "#" 
        : item.nav; 

    const linkProps =
      item.nav === "/dashboard/candidate-dashboard/profile" && !isUserLoggedIn
        ? { "data-bs-toggle": "modal", "data-bs-target": "#ApplyModal" } // Modal properties
        : {}; 

    return (
      <Link href={linkTarget} {...linkProps} className="d-block">
        <div style={iconContainerStyle}>
          <Image
            src={item.icon}
            style={cardImageStyle}
            alt="icon"
            className="lazy-img"
          />
        </div>
        <div className="title tran3s fw-500 text-lg" style={titleStyle}>
          {item.title}
        </div>
        <div className="total-job" style={descriptionTextStyle}>
          {item.description}
        </div>
      </Link>
    );
  };

  return (
    <div className="card-wrapper row mt-10 lg-mt-10">
      {category_data.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div
            className={`card-style-four ${item?.bg} tran3s w-100 mt-30 wow fadeInUp`}
          >
            {!item.df && renderLink(item)}
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

const CategorySectionSeven: React.FC<categorySectionProps> = ({ user }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const isUserLoggedIn = Boolean(user.value); 

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); 
    };

    
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle: React.CSSProperties = isLargeScreen
    ? {
        overflow: "hidden",
        height: "100vh", 
      }
    : {
        overflow: "auto", 
      };

  return (
    <>
      <section
        style={sectionStyle}
        className="hero-banner-dp position-relative pt-50 lg-pt-50 pb-140 lg-pb-180"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 col-sm-8">
              <div
                className="title-one text-center text-sm-start"
                data-wow-delay="0.3s"
              >
                <h2 className="fw-600">
                  India's 1ˢᵗ End-To-End Career Services for Students
                </h2>
              </div>
            </div>
          </div>             
          {/* CategoryCardWrapper */}
          <CategoryCardWrapper isUserLoggedIn={isUserLoggedIn} />
          {/* CategoryCardWrapper */}
        </div>
      </section>
      <ApplyModal />
      <LoginModal />
      <PhoneModal />
    </>
  );
};

export default CategorySectionSeven;

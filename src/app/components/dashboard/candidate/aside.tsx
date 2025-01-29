"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/dashboard/images/logo_01.png";
import profile_icon_2 from "@/assets/dashboard/images/icon/icon_24.svg";
import nav_1 from "@/assets/dashboard/images/icon/icon_1.svg";
import nav_5 from "@/assets/dashboard/images/icon/icon_5.svg";
import nav_1_active from "@/assets/dashboard/images/icon/icon_1_active.svg";
import nav_5_active from "@/assets/dashboard/images/icon/icon_5_active.svg";
import nav_2 from "@/assets/dashboard/images/icon/icon_2.svg";
import nav_2_active from "@/assets/dashboard/images/icon/icon_2_active.svg";
import nav_3 from "@/assets/dashboard/images/icon/icon_3.svg";
import nav_3_active from "@/assets/dashboard/images/icon/icon_3_active.svg";
import nav_4 from "@/assets/dashboard/images/icon/icon_4.svg";
import nav_4_active from "@/assets/dashboard/images/icon/icon_4_active.svg";
import nav_6 from "@/assets/dashboard/images/icon/icon_6.svg";
import nav_6_active from "@/assets/dashboard/images/icon/icon_6_active.svg";
import { useEffect } from "react";
import axios from "axios";
import { isUserLoggedIn } from "@/utils/auth";
// nav data
const nav_data: {
  id: number;
  icon: StaticImageData;
  icon_active: StaticImageData;
  link: string;
  title: string;
}[] = [
  {
    id: 1,
    icon: nav_1,
    icon_active: nav_1_active,
    link: "/dashboard/candidate-dashboard/dashboard",
    title: "Profile",
  },
  {
    id: 2,
    icon: nav_4,
    icon_active: nav_4_active,
    link: "/dashboard/candidate-dashboard/career-aptitude",
    title: "Career Aptitude Test",
  },
  {
    id: 3,
    icon: nav_2,
    icon_active: nav_2_active,
    link: "/dashboard/candidate-dashboard/profile",
    title: "College Application",
  },
  {
    id: 4,
    icon: nav_3,
    icon_active: nav_3_active,
    link: "/dashboard/candidate-dashboard/education",
    title: "Education Details",
  },
  {
    id: 5,
    icon: nav_6,
    icon_active: nav_6_active,
    link: "/dashboard/candidate-dashboard/document",
    title: "Documents",
  },

  {
    id: 6,
    icon: nav_5,
    icon_active: nav_5_active,
    link: "/dashboard/candidate-dashboard/power-degree",
    title: "Power Degree",
  },
];
// props type
type IProps = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const CandidateAside = ({ isOpenSidebar, setIsOpenSidebar }: IProps) => {
  const [userName, setUserName] = useState("");
  const pathname = usePathname();
  isUserLoggedIn();

  function onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("School_email");
  }

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    // Check if username is already in localStorage
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
      return;
    }
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/getstudentsprofile",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {},
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      if (data.student && data.student.name) {
        localStorage.setItem("username", data.student.name);
        setUserName(data.student.name);
      } else {
        setUserName("No Name Available");
      }
    } catch (error) {
      console.error(error);
      setUserName("No Name Available");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const getInitials = (userName: string) =>
    userName && userName.length > 0 ? userName[0].toUpperCase() : "?";
  return (
    <>
      <aside className={`dash-aside-navbar ${isOpenSidebar ? "show" : ""}`}>
        <div className="position-relative">
          <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
            <Link href="/">
              <Image src={logo} width={100} height={70} alt="logo" priority />
            </Link>
            <button
              onClick={() => setIsOpenSidebar(false)}
              className="close-btn d-block d-md-none"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="user-data">
            <div className="user-avatar position-relative rounded-circle">
              <div
                className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "40px",
                }}
              >
                {getInitials(userName)}
              </div>
            </div>
            <div className="user-name-data">
              <button
                className="user-name dropdown-toggle pt-10 "
                type="button"
                id="profile-dropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {userName || "Name"}
              </button>
              <ul className="dropdown-menu text-center">
                <li>
                  <a
                    href="/dashboard/candidate-dashboard/setting"
                    className="dropdown-item"
                  >
                    setPassword
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown-item" onClick={onLogout}>
                    logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="dasboard-main-nav">
            <ul className="style-none">
              {nav_data.map((m) => {
                const isActive = pathname === m.link;
                return (
                  <li key={m.id} onClick={() => setIsOpenSidebar(false)}>
                    <Link
                      href={m.link}
                      className={`d-flex w-100 align-items-center ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <Image
                        src={isActive ? m.icon_active : m.icon}
                        alt="icon"
                        className="lazy-img"
                      />
                      <span>{m.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
      {/* LogoutModal star */}
      {/* LogoutModal end */}
    </>
  );
};

export default CandidateAside;

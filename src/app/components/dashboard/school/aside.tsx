"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/dashboard/images/logo_01.png";
import profile_icon_2 from "@/assets/dashboard/images/icon/icon_24.svg";
import nav_1 from "@/assets/dashboard/images/icon/icon_1.svg";
import nav_1_active from "@/assets/dashboard/images/icon/icon_1_active.svg";
import nav_2 from "@/assets/dashboard/images/icon/icon_2.svg";
import nav_2_active from "@/assets/dashboard/images/icon/icon_2_active.svg";
import nav_3 from "@/assets/dashboard/images/icon/icon_3.svg";
import nav_3_active from "@/assets/dashboard/images/icon/icon_3_active.svg";

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
    link: "/dashboard/school-dashboard/profile",
    title: "Profile",
  },
  {
    id: 2,
    icon: nav_2,
    icon_active: nav_2_active,
    link: "/dashboard/school-dashboard/application",
    title: "School Application",
  },
  {
    id: 3,
    icon: nav_3,
    icon_active: nav_3_active,
    link: "/dashboard/school-dashboard/dashboard",
    title: "Student Details",
  },
];

// props type
type IProps = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchoolAside = ({ isOpenSidebar, setIsOpenSidebar }: IProps) => {
  const [userName, setUserName] = useState("");
  const pathname = usePathname();

  return (
    <>
      <style jsx>{`
        .no-underline {
          text-decoration: none;
        }

        
      `}</style>
      <aside className={`dash-aside-navbar ${isOpenSidebar ? "show" : ""}`}>
        <div className="position-relative">
          <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
            <Link href="/">
              <Image src={logo} width={100} height={70} alt="logo" priority />
            </Link>
            <button
              onClick={() => setIsOpenSidebar(false)}
              className="btn-close d-block d-md-none"
            />
          </div>
          <div className="user-data text-center mt-3">
            <div className="user-avatar position-relative rounded-circle mx-auto">
              <div
                className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center bg-primary text-white"
                style={{
                  width: "70px",
                  height: "70px",
                  fontSize: "40px",
                }}
              >
                {/* {getInitials(userName)} */}
              </div>
            </div>
            <div className="user-name-data mt-2">
              <button
                className="user-name dropdown-toggle"
                type="button"
                id="profile-dropdown"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userName || "Name"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="/dashboard/candidate-dashboard/profile"
                    style={{ textDecoration: "none" }}
                  >
                    <Image
                      src={profile_icon_2}
                      alt="icon"
                      className="lazy-img me-2"
                    />
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <nav className="dasboard-main-nav mt-4">
            <ul className="list-unstyled">
              {nav_data.map((m) => {
                const isActive = pathname === m.link;
                return (
                  <li
                    key={m.id}
                    onClick={() => setIsOpenSidebar(false)}
                    className="nav-item mb-2"
                  >
                    <Link
                      href={m.link}
                      className={`d-flex align-items-center p-2 rounded ${
                        isActive ? "bg-info text-white" : "text-dark"
                      }`}
                      style={{ textDecoration: "none" }}
                    >
                      <Image
                        src={isActive ? m.icon_active : m.icon}
                        alt="icon"
                        className="lazy-img me-2"
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
    </>
  );
};

export default SchoolAside;

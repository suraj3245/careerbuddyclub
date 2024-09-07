// Import necessary modules and components
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Menus from "./component/menus";
import logo from "@/assets/images/logo/logo4.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";
import PhoneModal from "@/app/components/common/popup/phone-modal";
import ScheduleModal from "@/app/components/common/popup/schedule";
import img_1 from "@/assets/images/assets/user-icon.png";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import axios from "axios";
import SchoolPhoneFormModal from "@/app/components/common/popup/schoolphone-modal";
import SchoolLoginFormModal from "@/app/components/common/popup/schoolloginmodal";
import StudentFormModal from "@/app/components/common/popup/studentloginmodal";
import ApplyModal from "@/app/components/common/popup/apply-modal";
import ApplyModalSchool from "@/app/components/common/popup/apply-modal2";
import "react-toastify/dist/ReactToastify.css";

// Interface defining props for HeaderFour component
interface HeaderFourProps {
  user: {
    value: string | null;
  };
  onLogout: () => void;
  index: number; // Changed 'key' to 'index'
}

// HeaderFour component definition
const HeaderFour: React.FC<HeaderFourProps> = ({ user, index, onLogout }) => {
  const { sticky } = useSticky();
  const isUserLoggedIn = Boolean(user.value);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const pathname = usePathname();

  // Function to fetch user data
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

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

  // Effect to fetch user data and simulate click on Apply Modal
  useEffect(() => {
    fetchUserData();
    if (!localStorage.getItem("token")) {
      setTimeout(() => {
        const event = new Event("click");
        const applyNowButton = document.querySelector(
          '[data-bs-target="#ApplyModal"]'
        );
        if (applyNowButton) {
          applyNowButton.dispatchEvent(event);
        }
      }, 1000);
    }
  }, [isUserLoggedIn]);

  // Effect to determine user type based on stored data
  useEffect(() => {
    const username = localStorage.getItem("username");
    const schoolname = localStorage.getItem("schoolName");
    if (username) {
      setUserType("student");
    } else if (schoolname) {
      setUserType("school");
    }
  }, []);

  // Function to get initials from username
  const getInitials = ((userNames: string) =>{
    const username = localStorage.getItem("username");
    const schoolName = localStorage.getItem("schoolName");
    const nameToUse = username || schoolName || "";
    return nameToUse.length > 0 ? nameToUse[0].toUpperCase() : "?"; 
  })

  
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
        style={{ marginTop: "30px" }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image src={logo} alt="logo" width="125" height="75" priority />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 order-lg-2">
                {!isUserLoggedIn && (
                  <ul className="d-flex align-items-center style-none">
                    <li>
                      <a
                        href="#"
                        className="fw-500 text-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModalstudent"
                      >
                        Login
                      </a>
                    </li>
                    <li className="d-none d-md-block ms-4">
                      <a
                        href="#"
                        className="fw-500 btn-five"
                        data-bs-toggle="modal"
                        data-bs-target="#ApplyModal"
                      >
                        Apply Now
                      </a>
                    </li>
                  </ul>
                )}
                {isUserLoggedIn && (
                  <ul className="d-flex align-items-center style-none">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <div
                          className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#007bff",
                            color: "white",
                            fontSize: "30px",
                          }}
                        >
                          {getInitials(userName)}
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        {userType === "student" && (
                          <>
                            <li>
                              <Link
                                href="/dashboard/candidate-dashboard/profile"
                                className="dropdown-item"
                              >
                                Student Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dashboard/candidate-dashboard/setting"
                                className="dropdown-item"
                              >
                                Set Password
                              </Link>
                            </li>
                            <li>
                              <a href="/" className="dropdown-item" onClick={onLogout}>
                                Logout
                              </a>
                            </li>
                          </>
                        )}
                        {userType === "school" && (
                          <>
                            <li>
                              <Link
                                href="/dashboard/school-dashboard/profile"
                                className="dropdown-item"
                              >
                                School Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dashboard/school-dashboard/setting"
                                className="dropdown-item"
                              >
                                Set Password
                              </Link>
                            </li>
                            <li>
                              <a href="/" className="dropdown-item" onClick={onLogout}>
                                Logout
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                )}
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-1">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" priority width="100" />
                        </Link>
                      </div>
                    </li>
                    {/* menus start */}
                    <Menus />
                    {/* menus end */}
                    {!isUserLoggedIn && (
                      <li className="d-md-none mt-5">
                        <a
                          href="#"
                          className="fw-500 btn-five"
                          data-bs-toggle="modal"
                          data-bs-target="#ApplyModal"
                        >
                          Apply Now
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <ApplyModal />
      <LoginModal />
      <PhoneModal />
      <ScheduleModal />
      <SchoolPhoneFormModal />
      <SchoolLoginFormModal />
      <StudentFormModal />
      <ApplyModalSchool />
    </>
  );
};

export default HeaderFour;

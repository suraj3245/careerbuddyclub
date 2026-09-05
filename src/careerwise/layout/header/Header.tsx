"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoginPopup from "@/careerwise/components/LoginPopup";

export default function Header() {
  const router = useRouter();

  const [signupOpen, setSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Student");
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement | null>(null);

  // Check login
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (!token) {
      setIsLoggedIn(false);
      setUserName("Student");
      setProfileOpen(false);
      return;
    }

    setIsLoggedIn(true);
    setUserName(username?.trim().split(/\s+/)[0] || "Student");
  };

  // Initial login check + login event
  useEffect(() => {
    checkLogin();

    const handleLogin = () => checkLogin();

    window.addEventListener("userLoggedIn", handleLogin);
    window.addEventListener("storage", handleLogin);

    return () => {
      window.removeEventListener("userLoggedIn", handleLogin);
      window.removeEventListener("storage", handleLogin);
    };
  }, []);

  // Close dropdown outside click
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    [
      "token",
      "username",
      "student_id",
      "School_email",
      "user",
      "mobile",
    ].forEach((key) => localStorage.removeItem(key));
    setIsLoggedIn(false);
    setUserName("Student");
    setProfileOpen(false);
    router.push("/");
  };

  return (
    <header className="navbar">

      {/* Hamburger */}
      <div className="hamburgerMenu" aria-label="Menu" role="button">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      {/* Logo */}
      <Link href="/" className="brand" aria-label="Career Buddy Club home">
        <Image
          className="brandMark"
          src="/assets/images/logo.png"
          alt="Career Buddy Club logo"
          width={240}
          height={44}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="navLinks" aria-label="Main navigation">
        <a href="#degrees">
          Explore Courses
          <i className="chevron" />
        </a>

        <a href="#universities">
          Universities
          <i className="chevron" />
        </a>

        <a href="#compare">Compare</a>

        <Link href="/roi-calculator">ROI</Link>

        <Link href="/ai-finder">AI Finder</Link>
      </nav>

      {/* Actions */}
      <div className="navActions">

        {!isLoggedIn ? (
          <button
  type="button"
  className="Register"
  onClick={() => setSignupOpen(true)}
  style={{
    height: "42px",
    minWidth: "88px",
    padding: "0 18px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "11px",
    background: "linear-gradient(135deg, #effcff 0%, #e2f8fc 100%)",
    color: "#087f98",
    fontSize: "15px",
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(20, 150, 170, 0.07)",
    transition: "all 0.2s ease",
  }}
>
  Register
</button>
        ) : (
          <div className="headerProfile" ref={profileRef}>

            {/* User button */}
            <button
              type="button"
              className={`headerProfileButton ${
                profileOpen ? "active" : ""
              }`}
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-expanded={profileOpen}
            >
              <span className="headerUserIcon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
              </span>

              <span className="headerUserName">
                {userName}
              </span>

              <svg
                className={`headerProfileArrow ${
                  profileOpen ? "rotate" : ""
                }`}
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="headerProfileDropdown">

                <div className="profileDropdownSection">
                  <div className="profileDropdownTitle">
                    Profile
                  </div>

                  <Link
                    href="/dashboard/student-dashboard"
                    className="profileDropdownItem"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="profileDropdownIcon">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5 21a7 7 0 0 1 14 0" />
                      </svg>
                    </span>
                    Profile
                  </Link>

                  <Link
                    href="/verify-advisor"
                    className="profileDropdownItem"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="profileDropdownIcon">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8 12 2.5 2.5L16.5 9" />
                      </svg>
                    </span>
                    Verify Your Advisor
                  </Link>

                  <button
                    type="button"
                    className="profileDropdownItem profileLogout"
                    onClick={handleLogout}
                  >
                    <span className="profileDropdownIcon">
                      <svg viewBox="0 0 24 24">
                        <path d="M10 17 5 12l5-5" />
                        <path d="M5 12h12" />
                        <path d="M15 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" />
                      </svg>
                    </span>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Expert */}
        <a className="expertButton" href="#counselling">
          Talk to an Expert
          <span className="buttonArrow">→</span>
        </a>
      </div>

      {/* Login Popup */}
      <LoginPopup
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
      />
    </header>
  );
}
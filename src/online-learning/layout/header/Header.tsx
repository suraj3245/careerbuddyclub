"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoginPopup from "@/online-learning/components/LoginPopup";

import { fetchOnlineStreams, Stream } from "@/online-learning/data/api";
import { universitiesData } from "@/online-learning/components/universities/universityData";

export default function Header({ initialStreams = [] }: { initialStreams?: Stream[] }) {
  const router = useRouter();

  const [signupOpen, setSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Student");
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement | null>(null);

  // Explore Courses State
  const [exploreOpen, setExploreOpen] = useState(false);
  const [exploreData, setExploreData] = useState<Stream[]>(initialStreams);
  const [activeStream, setActiveStream] = useState<string>(initialStreams.length > 0 ? initialStreams[0].title : "");
  const exploreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Universities Dropdown State
  const [universitiesOpen, setUniversitiesOpen] = useState(false);
  const universitiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleExploreEnter = () => {
    if (exploreTimeoutRef.current) clearTimeout(exploreTimeoutRef.current);
    setExploreOpen(true);
  };

  const handleExploreLeave = () => {
    exploreTimeoutRef.current = setTimeout(() => setExploreOpen(false), 200);
  };

  const handleUniversitiesEnter = () => {
    if (universitiesTimeoutRef.current) clearTimeout(universitiesTimeoutRef.current);
    setUniversitiesOpen(true);
  };

  const handleUniversitiesLeave = () => {
    universitiesTimeoutRef.current = setTimeout(() => setUniversitiesOpen(false), 200);
  };
  
  // Extract unique online universities
  const onlineUniversities = Array.from(
    new Map(
      exploreData
        .flatMap((stream) => stream.colleges || [])
        .map((college) => [college.id, college])
    ).values()
  );

  useEffect(() => {
    if (initialStreams.length > 0 && exploreData.length === 0) {
      setExploreData(initialStreams);
      setActiveStream(initialStreams[0].title);
    }
  }, [initialStreams]);

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
    <>
    <header className="navbar" style={{ zIndex: 9999 }}>

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
        <div 
          className="navDropdownWrapper"
          onMouseEnter={handleExploreEnter}
          onMouseLeave={handleExploreLeave}
          onFocus={handleExploreEnter}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setExploreOpen(false);
            }
          }}
        >
          <Link href="#degrees" className="navLinkItem">
            Explore Courses
            <i className="chevron" />
          </Link>
          
          {exploreOpen && (
            <div className="exploreDropdown" style={{ marginTop: '-15px', paddingTop: '15px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <div style={{ display: 'flex', background: '#ffffff', borderRadius: '12px', border: '1px solid #e5edef', boxShadow: '0 10px 30px rgba(30, 70, 80, 0.12)', overflow: 'hidden' }}>
                <div className="exploreStreams">
                  {exploreData.length > 0 ? (
                    exploreData.map(group => (
                      <div 
                        key={group.id || group.title} 
                        className={`streamItem ${activeStream === group.title ? 'active' : ''}`}
                        onMouseEnter={() => setActiveStream(group.title)}
                      >
                        {group.title}
                        <i className="streamArrow">→</i>
                      </div>
                    ))
                  ) : (
                    <div className="streamItem">Loading...</div>
                  )}
                </div>
                <div className="exploreCourses">
                  {exploreData.find(g => g.title === activeStream)?.courses?.map(course => (
                    <Link 
                      key={course.id || course.name} 
                      href={`/course/${course.id}`} 
                      className="courseCard"
                      onClick={(e) => {
                        if (!isLoggedIn) {
                          e.preventDefault();
                          setSignupOpen(true);
                        }
                      }}
                    >
                      <div className="courseIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </div>
                      <div className="courseContent">
                        <h4>{course.name}</h4>
                        <span className="courseLinkText">View program &rarr;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div 
          className="navDropdownWrapper"
          onMouseEnter={handleUniversitiesEnter}
          onMouseLeave={handleUniversitiesLeave}
          onFocus={handleUniversitiesEnter}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setUniversitiesOpen(false);
            }
          }}
        >
          <a href="#universities" className="navLinkItem">
            Universities
            <i className="chevron" />
          </a>
          
          {universitiesOpen && (
            <div className="exploreDropdown" style={{ marginTop: '-15px', paddingTop: '15px', background: 'transparent', border: 'none', boxShadow: 'none', minWidth: '350px', display: 'block' }}>
              <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e5edef', boxShadow: '0 10px 30px rgba(30, 70, 80, 0.12)', padding: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                  {onlineUniversities.length > 0 ? (
                    onlineUniversities.map(college => {
                      const collegeSlug = college.college_full_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                      const matchedData = universitiesData.find(
                        (u) => 
                          u.name.toLowerCase() === college.college_full_name.toLowerCase() || 
                          u.id === collegeSlug ||
                          collegeSlug.includes(u.id) ||
                          u.id.includes(collegeSlug)
                      );
                      const logoSrc = matchedData?.logo;

                      return (
                        <Link 
                          key={college.id} 
                          href={`/online-university/${collegeSlug}`} 
                          style={{
                            padding: '10px 15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            color: '#333',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'background 0.2s',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '1.4'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f9fa')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          {logoSrc ? (
                            <div style={{ width: '28px', height: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                              <img 
                                src={logoSrc} 
                                alt={college.college_full_name} 
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            </div>
                          ) : (
                            <div style={{ width: '28px', height: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', borderRadius: '4px', color: '#64748b', fontWeight: 'bold' }}>
                              {college.college_full_name.charAt(0)}
                            </div>
                          )}
                          {college.college_full_name}
                        </Link>
                      );
                    })
                  ) : (
                    <div style={{ padding: '10px 15px', color: '#666' }}>Loading...</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>



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
    </header>

    {/* Login Popup */}
    <LoginPopup
      isOpen={signupOpen}
      onClose={() => setSignupOpen(false)}
    />
    </>
  );
}
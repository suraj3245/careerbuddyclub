"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoginPopup from "@/online-learning/components/LoginPopup";
import { openExpertModal } from "@/online-learning/components/ExpertCallbackModal";
import { openCatLeadModal } from "@/online-learning/components/CatLeadModal";

import { fetchOnlineStreams, Stream } from "@/online-learning/data/api";
import { universitiesData } from "@/online-learning/components/universities/universityData";
import { getCourseHref, getCourseSlug } from "@/online-learning/data/courseSlugs";

/** Map each course to its dedicated image using the same slug logic as the URL routing. */
const COURSE_IMAGE_MAP: Record<string, string> = {
  'online-mba':                    '/assets/images/courses/online-mba.jpg',
  'one-year-online-mba':           '/assets/images/courses/one-year-online-mba.jpg',
  'dual-mba-online':               '/assets/images/courses/dual-mba-online.jpg',
  'mba-and-doctorate-combo':       '/assets/images/courses/mba-and-doctorate-combo.jpg',
  'executive-mba-online':          '/assets/images/courses/executive-mba-online.jpg',
  'executive-pg-management-online':'/assets/images/courses/executive-pg-management-online.jpg',
  'senior-management-programme':   '/assets/images/courses/senior-management-programme.jpg',
  'phd-in-management':             '/assets/images/courses/phd-in-management.jpg',
  'phd-in-education':              '/assets/images/courses/phd-in-education.jpg',
  'phd-in-computer-science':       '/assets/images/courses/phd-in-computer-science.jpg',
  'med-and-edd-combo':             '/assets/images/courses/med-and-edd-combo.jpg',
  'online-med':                    '/assets/images/courses/online-med.jpg',
  'pg-in-ai-online':               '/assets/images/courses/pg-in-ai-online.jpg',
  'pg-in-data-science-online':     '/assets/images/courses/pg-in-data-science-online.jpg',
  'online-ma-economics':           '/assets/images/courses/online-ma-economics.jpg',
  'online-ma-political-science':   '/assets/images/courses/online-ma-political-science.jpg',
  'online-ma-english':             '/assets/images/courses/online-ma-english.jpg',
  'online-msc':                    '/assets/images/courses/online-msc.jpg',
  'online-mcom':                   '/assets/images/courses/online-mcom.jpg',
  'online-mca':                    '/assets/images/courses/online-mca.jpg',
  'online-ma':                     '/assets/images/courses/online-ma.jpg',
  'online-bcom':                   '/assets/images/courses/online-bcom.jpg',
  'online-bba':                    '/assets/images/courses/online-bba.jpg',
  'online-bca':                    '/assets/images/courses/online-bca.jpg',
  'online-ba':                     '/assets/images/courses/online-ba.jpg',
};

const DEFAULT_COURSE_IMAGE = '/assets/images/courses/default-course.jpg';

const getCourseImage = (courseName?: string): string => {
  if (!courseName) return DEFAULT_COURSE_IMAGE;
  const slug = getCourseSlug(courseName);
  return COURSE_IMAGE_MAP[slug] || DEFAULT_COURSE_IMAGE;
};

export default function Header({ initialStreams = [] }: { initialStreams?: Stream[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const [signupOpen, setSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Student");
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile drawer: which accordion section is expanded + active stream tab
  const [mobileSection, setMobileSection] = useState<"explore" | "universities" | null>(null);
  const [mobileStream, setMobileStream] = useState<string>(initialStreams.length > 0 ? initialStreams[0].title : "");

  const profileRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileCloseRef = useRef<HTMLButtonElement | null>(null);

  // CAT flow: login first (if needed) -> CAT lead form -> career-aptitude page.
  // Remembers that the login popup was opened from the CAT button.
  const catAfterLoginRef = useRef(false);

  const handleCatClick = () => {
    let loggedIn = false;
    try {
      loggedIn = !!localStorage.getItem("token");
    } catch {
      /* storage unavailable — treat as signed out */
    }
    if (loggedIn) {
      openCatLeadModal();
    } else {
      catAfterLoginRef.current = true;
      setSignupOpen(true);
    }
  };

  // Login popup closes itself ~1.2s after a successful login (and on cancel)
  const handleLoginPopupClose = () => {
    setSignupOpen(false);
    if (!catAfterLoginRef.current) return;
    catAfterLoginRef.current = false;
    let loggedIn = false;
    try {
      loggedIn = !!localStorage.getItem("token");
    } catch {
      /* ignore */
    }
    if (loggedIn) openCatLeadModal();
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSection(null);
  };

  const toggleMobileSection = (section: "explore" | "universities") =>
    setMobileSection((current) => (current === section ? null : section));

  // Opens the signup popup from inside the drawer (drawer must close first
  // so the popup is never hidden behind it)
  const openSignupFromMobile = () => {
    closeMobileMenu();
    setSignupOpen(true);
  };

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

  const getCollegeSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const getCollegeLogo = (name: string) => {
    const slug = getCollegeSlug(name);
    return universitiesData.find(
      (u) =>
        u.name.toLowerCase() === name.toLowerCase() ||
        u.id === slug ||
        slug.includes(u.id) ||
        u.id.includes(slug)
    )?.logo;
  };

  const mobileCourses = exploreData.find((g) => g.title === mobileStream)?.courses || [];

  useEffect(() => {
    if (initialStreams.length > 0 && exploreData.length === 0) {
      setExploreData(initialStreams);
      setActiveStream(initialStreams[0].title);
    }
  }, [initialStreams]);

  useEffect(() => {
    if (!mobileStream && exploreData.length > 0) setMobileStream(exploreData[0].title);
  }, [exploreData, mobileStream]);

  // Close the drawer / dropdowns whenever the route changes
  useEffect(() => {
    closeMobileMenu();
    setExploreOpen(false);
    setUniversitiesOpen(false);
  }, [pathname]);

  // Prefetch every university page in the background once the header is
  // idle, so clicking a university swaps the URL and page instantly instead
  // of waiting for the server. (Prefetching only runs in production builds.)
  const universitySlugsKey = onlineUniversities
    .map((c) => getCollegeSlug(c.college_full_name))
    .join("|");

  useEffect(() => {
    if (!universitySlugsKey) return;
    const prefetchAll = () =>
      universitySlugsKey
        .split("|")
        .forEach((slug) => router.prefetch(`/online-university/${slug}`));

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(prefetchAll);
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(prefetchAll, 1500);
    return () => window.clearTimeout(t);
  }, [universitySlugsKey, router]);

  // Drawer open: lock page scroll, close on Escape, move focus into drawer.
  // Drawer closed: return focus to the hamburger.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    // Rotating a tablet / resizing to desktop width leaves no drawer to close
    const onResize = () => {
      if (window.innerWidth > 850) closeMobileMenu();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const focusTimer = window.setTimeout(() => mobileCloseRef.current?.focus(), 60);
    const hamburger = hamburgerRef.current;

    return () => {
      body.style.overflow = prevBodyOverflow;
      documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(focusTimer);
      hamburger?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

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
      <button
        type="button"
        ref={hamburgerRef}
        className={`hamburgerMenu ${mobileMenuOpen ? 'open' : ''}`}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="cw-mobile-nav"
        onClick={() => (mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true))}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

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
        >
          <button 
            type="button"
            className="navLinkItem"
            onClick={() => setExploreOpen(!exploreOpen)}
          >
            Explore Courses
            <i className={`chevron ${exploreOpen ? 'open' : ''}`} />
          </button>
          
          {exploreOpen && (
            <>
              {/* Backdrop overlay */}
              <div 
                className="exploreBackdrop" 
                onClick={() => setExploreOpen(false)} 
              />
              
              {/* Full-width Explore Panel */}
              <div className="explorePanel">
                {/* Close button */}
                <button 
                  type="button" 
                  className="explorePanelClose"
                  onClick={() => setExploreOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
                
                <div className="explorePanelInner">
                  {/* Left sidebar - Streams */}
                  <div className="exploreSidebar">
                    {exploreData.length > 0 ? (
                      exploreData.map(group => (
                        <button 
                          type="button"
                          key={group.id || group.title} 
                          className={`exploreSidebarItem ${activeStream === group.title ? 'active' : ''}`}
                          onClick={() => setActiveStream(group.title)}
                        >
                          <span className="exploreSidebarIcon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                          </span>
                          {group.title}
                        </button>
                      ))
                    ) : (
                      <div className="exploreSidebarItem">Loading streams...</div>
                    )}
                  </div>
                  
                  {/* Right content - Course cards grid */}
                  <div className="exploreCoursesGrid">
                    {exploreData.find(g => g.title === activeStream)?.courses?.map((course, index) => {
                      const badges = ['RIGHT MBA', 'TRENDING', 'IN DEMAND', 'TOP RATED', 'SKILL ORIENTED', 'CAREER READY'];
                      const badgeIndex = index % badges.length;

                      return (
                        <Link 
                          key={course.id || course.name} 
                          href={getCourseHref(course.name)} 
                          className="exploreCourseCard"
                          onClick={(e) => {
                            if (!isLoggedIn) {
                              e.preventDefault();
                              setSignupOpen(true);
                            }
                          }}
                        >
                          <div className="exploreCourseCardImgWrapper">
                            <img 
                              src={getCourseImage(course.name)}
                              alt={course.name}
                              className="exploreCourseCardImg"
                            />
                          </div>
                          
                          <div className="exploreCourseCardBadgeWrapper">
                            <span className="exploreCourseCardPill">
                              <span style={{ color: '#ffb915' }}>⚡</span> {badges[badgeIndex]}
                            </span>
                          </div>
                          
                          <div className="exploreCourseCardInfo">
                            <h4 className="exploreCourseCardName">{course.name}</h4>
                            <p className="exploreCourseCardDuration">
                              {course.duration ? `Duration: ${course.duration}` : "Duration: 2 Years"}
                            </p>
                          </div>

                          <div className="exploreCourseCardFooter">
                            <span className="exploreCourseCardLink">
                              Read More <span className="exploreCourseCardArrow">→</span>
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                    
                    {/* Empty state */}
                    {(!exploreData.find(g => g.title === activeStream)?.courses || 
                      exploreData.find(g => g.title === activeStream)?.courses?.length === 0) && (
                      <div className="exploreCoursesEmpty">
                        <p>No courses available for this stream yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
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
                      const collegeSlug = getCollegeSlug(college.college_full_name);
                      const logoSrc = getCollegeLogo(college.college_full_name);

                      return (
                        <Link 
                          key={college.id} 
                          href={`/online-university/${collegeSlug}`} 
                          onClick={() => setUniversitiesOpen(false)}
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

        {/* CAT - Career Aptitude Test */}
        <button
          type="button"
          className="catButton"
          onClick={handleCatClick}
          aria-haspopup="dialog"
          style={{
            height: "42px",
            minWidth: "70px",
            padding: "0 18px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "11px",
            background: "#eed30d", // theme yellow ($color-four, same as the scrollbar)
            color: "#254035",
            fontSize: "15px",
            fontWeight: 700,
            fontFamily: "inherit",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(238, 211, 13, 0.35)",
            transition: "all 0.2s ease",
            textDecoration: "none",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
            border: "1.5px solid #d9bf0b",
          }}
        >
          CAT Exam
        </button>

        {/* Expert */}
        <button
          type="button"
          className="expertButton"
          onClick={openExpertModal}
          aria-haspopup="dialog"
        >
          Talk to an Expert
          <span className="buttonArrow">→</span>
        </button>
      </div>
    </header>

    {/* ======================================================
        MOBILE NAVIGATION DRAWER (≤ 850px)
        ====================================================== */}
    <div
      className={`mobileNavBackdrop ${mobileMenuOpen ? "open" : ""}`}
      onClick={closeMobileMenu}
      aria-hidden="true"
    />

    <aside
      id="cw-mobile-nav"
      className={`mobileNav ${mobileMenuOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!mobileMenuOpen}
    >
      {/* Top bar: brand + close */}
      <div className="mobileNavTop">
        <Link href="/" className="mobileNavBrand" aria-label="Career Buddy Club home" onClick={closeMobileMenu}>
          <Image src="/assets/images/logo.png" alt="Career Buddy Club logo" width={240} height={44} />
        </Link>
        <button
          type="button"
          ref={mobileCloseRef}
          className="mobileNavClose"
          aria-label="Close menu"
          onClick={closeMobileMenu}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Primary actions */}
      <div className="mobileNavActions">
        {!isLoggedIn ? (
          <button type="button" className="mobileNavRegister" onClick={openSignupFromMobile}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /></svg>
            Register
          </button>
        ) : (
          <div className="mobileNavUser">
            <span className="mobileNavUserIcon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /></svg>
            </span>
            <span className="mobileNavUserName">Hi, {userName}</span>
          </div>
        )}
        <button
          type="button"
          className="mobileNavCAT"
          aria-haspopup="dialog"
          onClick={() => {
            closeMobileMenu();
            handleCatClick();
          }}
          style={{
            display: "flex",
            width: "100%",
            cursor: "pointer",
            fontFamily: "inherit",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px 20px",
            borderRadius: "12px",
            background: "#eed30d", // theme yellow ($color-four, same as the scrollbar)
            color: "#254035",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            border: "1.5px solid #d9bf0b",
            letterSpacing: "0.5px",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
          CAT Exam
        </button>
        <button
          type="button"
          className="mobileNavExpert"
          aria-haspopup="dialog"
          onClick={() => {
            closeMobileMenu();
            openExpertModal();
          }}
        >
          Talk to an Expert <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Scrollable menu body */}
      <nav className="mobileNavBody" aria-label="Mobile navigation">
        {/* Explore Courses */}
        <div className={`mobileNavGroup ${mobileSection === "explore" ? "expanded" : ""}`}>
          <button
            type="button"
            className="mobileNavItem"
            aria-expanded={mobileSection === "explore"}
            aria-controls="cw-mobile-explore"
            onClick={() => toggleMobileSection("explore")}
          >
            Explore Courses
            <i className="mobileNavChevron" aria-hidden="true" />
          </button>

          {mobileSection === "explore" && (
            <div id="cw-mobile-explore" className="mobileNavPanel">
              {exploreData.length > 0 ? (
                <>
                  <div className="mobileStreamTabs" role="tablist" aria-label="Course streams">
                    {exploreData.map((group) => (
                      <button
                        type="button"
                        role="tab"
                        key={group.id || group.title}
                        aria-selected={mobileStream === group.title}
                        className={`mobileStreamTab ${mobileStream === group.title ? "active" : ""}`}
                        onClick={() => setMobileStream(group.title)}
                      >
                        {group.title}
                      </button>
                    ))}
                  </div>

                  {mobileCourses.length > 0 ? (
                    <div className="mobileCourseGrid">
                      {mobileCourses.map((course) => (
                        <Link
                          key={course.id || course.name}
                          href={getCourseHref(course.name)}
                          className="mobileCourseCard"
                          onClick={(e) => {
                            if (!isLoggedIn) {
                              e.preventDefault();
                              openSignupFromMobile();
                              return;
                            }
                            closeMobileMenu();
                          }}
                        >
                          <span className="mobileCourseImg">
                            <img
                              src={getCourseImage(course.name)}
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <span className="mobileCourseInfo">
                            <span className="mobileCourseName">{course.name}</span>
                            <span className="mobileCourseDuration">
                              Duration: {course.duration || "2 Years"}
                            </span>
                          </span>
                          <span className="mobileCourseMore">View More</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="mobileNavEmpty">No courses available for this stream yet.</p>
                  )}
                </>
              ) : (
                <p className="mobileNavEmpty">Loading courses…</p>
              )}
            </div>
          )}
        </div>

        {/* Universities */}
        <div className={`mobileNavGroup ${mobileSection === "universities" ? "expanded" : ""}`}>
          <button
            type="button"
            className="mobileNavItem"
            aria-expanded={mobileSection === "universities"}
            aria-controls="cw-mobile-universities"
            onClick={() => toggleMobileSection("universities")}
          >
            Top Universities
            <i className="mobileNavChevron" aria-hidden="true" />
          </button>

          {mobileSection === "universities" && (
            <div id="cw-mobile-universities" className="mobileNavPanel">
              {onlineUniversities.length > 0 ? (
                <ul className="mobileUniList">
                  {onlineUniversities.map((college) => {
                    const logoSrc = getCollegeLogo(college.college_full_name);
                    return (
                      <li key={college.id}>
                        <Link
                          href={`/online-university/${getCollegeSlug(college.college_full_name)}`}
                          className="mobileUniLink"
                          onClick={closeMobileMenu}
                        >
                          <span className="mobileUniLogo" aria-hidden="true">
                            {college.college_full_name.charAt(0)}
                            {logoSrc && (
                              <img
                                src={logoSrc}
                                alt=""
                                loading="lazy"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                              />
                            )}
                          </span>
                          <span className="mobileUniName">{college.college_full_name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mobileNavEmpty">Loading universities…</p>
              )}
            </div>
          )}
        </div>

        <Link href="/roi-calculator" className="mobileNavItem" onClick={closeMobileMenu}>
          <span className="mobileNavItemLabel">
            <svg className="mobileNavIcon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h4" /></svg>
            ROI Calculator
          </span>
        </Link>

        <Link href="/ai-finder" className="mobileNavItem" onClick={closeMobileMenu}>
          <span className="mobileNavItemLabel">
            <svg className="mobileNavIcon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            AI Finder
            <span className="mobileNavBadge">AI Based</span>
          </span>
        </Link>

        {isLoggedIn && (
          <button type="button" className="mobileNavItem mobileNavLogout" onClick={() => { closeMobileMenu(); handleLogout(); }}>
            <span className="mobileNavItemLabel">
              <svg className="mobileNavIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17 5 12l5-5" /><path d="M5 12h12" /><path d="M15 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" /></svg>
              Sign Out
            </span>
          </button>
        )}
      </nav>
    </aside>

    {/* Login Popup */}
    <LoginPopup
      isOpen={signupOpen}
      onClose={handleLoginPopupClose}
    />
    </>
  );
}

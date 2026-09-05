"use client";
import { useState, useRef, useEffect } from "react";
import { universitiesData } from "./universities/universityData";

const popularSearches = ["Online MBA", "MCA", "BBA", "BCA", "M.Com", "MA"];

const courseOptions = [
  "MBA", "MCA", "BBA", "BCA", "M.Com", "MA", "B.Com", "B.Sc",
  "M.Sc", "B.Tech", "M.Tech", "Ph.D", "PGDM", "BMS", "Executive MBA",
];

const universityOptions = universitiesData.map((u) => u.name);

const slides = [
  { src: "/assets/images/banner-1.jpeg", mobileSrc: "/assets/images/mobile-banner-1.jpeg", alt: "Student with laptop" },
  { src: "/assets/images/banner-2.jpeg", mobileSrc: "/assets/images/mobile-banner-2.jpeg", alt: "Student celebrating" },
];

const AUTOPLAY_MS = 4000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [courseOpen, setCourseOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);
  const [courseSearch, setCourseSearch] = useState("");
  const [uniSearch, setUniSearch] = useState("");
  const courseRef = useRef<HTMLDivElement>(null);
  const uniRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Autoplay carousel
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setActiveSlide((prev) => prev + 1);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Infinite loop logic: jump back to start instantly after reaching duplicate slide
  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 800); // wait for 0.8s CSS transition to finish
      return () => clearTimeout(timeout);
    }
  }, [activeSlide]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (courseRef.current && !courseRef.current.contains(e.target as Node)) setCourseOpen(false);
      if (uniRef.current && !uniRef.current.contains(e.target as Node)) setUniOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredCourses = courseOptions.filter((c) =>
    c.toLowerCase().includes(courseSearch.toLowerCase())
  );
  const filteredUnis = universityOptions.filter((u) =>
    u.toLowerCase().includes(uniSearch.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const section = document.getElementById("degrees");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handlePopularClick = (item: string) => {
    setSelectedCourse(item);
    setCourseSearch("");
    const section = document.getElementById("degrees");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="heroLayout">
        {/* ── BACKGROUND: Full width carousel ── */}
        <div className="heroCarousel">
          <div 
            className="heroSlideTrack"
            style={{ 
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: isTransitioning ? "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)" : "none"
            }}
          >
            {[...slides, slides[0]].map((slide, i) => (
              <div
                className={`heroSlide heroSlide--${i % slides.length}`}
                key={i}
                role="img"
                aria-label={slide.alt}
              />
            ))}
          </div>
        </div>

        {/* ── FOREGROUND: static content ── */}
        <div className="heroCopy">
          <div className="eyebrow">
            <span>✓</span> India&apos;s Trusted Online Education Platform
          </div>
          <h1>
            Find the Right<br />
            <em>Online Degree.</em><br />
            Build Your Future.
          </h1>
          <p>
            Explore 100+ online universities and 500+ degree programs.<br />
            Compare, shortlist and choose the best for your career.
          </p>

          <form className="programSearch" onSubmit={handleSearch}>
            {/* Course dropdown */}
            <div className="heroDropdown" ref={courseRef}>
              <label onClick={() => { setCourseOpen(!courseOpen); setUniOpen(false); }}>
                <span className="miniIcon">◆</span>
                <span>
                  <strong>What do you want to study?</strong>
                  <small>{selectedCourse || "e.g. MBA, BCA, M.Com"}</small>
                </span>
              </label>
              {courseOpen && (
                <div className="heroDropdownMenu">
                  <input
                    type="text"
                    className="heroDropdownSearch"
                    placeholder="Search courses..."
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    autoFocus
                  />
                  <ul>
                    {filteredCourses.map((c) => (
                      <li
                        key={c}
                        className={c === selectedCourse ? "active" : ""}
                        onClick={() => { setSelectedCourse(c); setCourseOpen(false); setCourseSearch(""); }}
                      >
                        {c}
                      </li>
                    ))}
                    {filteredCourses.length === 0 && (
                      <li className="noResult">No results found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* University dropdown */}
            <div className="heroDropdown" ref={uniRef}>
              <label onClick={() => { setUniOpen(!uniOpen); setCourseOpen(false); }}>
                <span className="miniIcon">♜</span>
                <span>
                  <strong>Select University</strong>
                  <small>{selectedUniversity || "Choose university"}</small>
                </span>
              </label>
              {uniOpen && (
                <div className="heroDropdownMenu">
                  <input
                    type="text"
                    className="heroDropdownSearch"
                    placeholder="Search universities..."
                    value={uniSearch}
                    onChange={(e) => setUniSearch(e.target.value)}
                    autoFocus
                  />
                  <ul>
                    {filteredUnis.map((u) => (
                      <li
                        key={u}
                        className={u === selectedUniversity ? "active" : ""}
                        onClick={() => { setSelectedUniversity(u); setUniOpen(false); setUniSearch(""); }}
                      >
                        {u}
                      </li>
                    ))}
                    {filteredUnis.length === 0 && (
                      <li className="noResult">No results found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <button type="submit">
              <span>⌕</span> Search Programs
            </button>
          </form>

          <div className="popular">
            <strong>Popular Searches:</strong>
            {popularSearches.map((item) => (
              <a
                href="#degrees"
                key={item}
                onClick={(e) => { e.preventDefault(); handlePopularClick(item); }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

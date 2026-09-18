"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Stream, CollegeDetail } from "../data/api";
import LoginPopup from "./LoginPopup";

const slides = [
  { src: "/assets/images/banner-1.jpeg", mobileSrc: "/assets/images/mobile-banner-1.jpeg", alt: "Student with laptop" },
  { src: "/assets/images/banner-2.jpeg", mobileSrc: "/assets/images/mobile-banner-2.jpeg", alt: "Student celebrating" },
];

const AUTOPLAY_MS = 4000;

interface HeroClientProps {
  streams: Stream[];
  collegeDetails: CollegeDetail[];
}

export default function HeroClient({ streams, collegeDetails }: HeroClientProps) {
  const router = useRouter();
  const [signupOpen, setSignupOpen] = useState(false);
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

  // Parse streams and collegeDetails to find mappings
  const { allCourses, allUniversities, collegeToCourses, courseToColleges, topCourses } = useMemo(() => {
    // 1. Get all unique clean courses from streams
    const streamCoursesMap = new Map<number, {id: number, name: string}>();
    streams.forEach(s => {
      (s.courses || []).forEach(c => {
        streamCoursesMap.set(c.id, c);
      });
    });
    const uniqueStreamCourses = Array.from(streamCoursesMap.values());

    // 2. Get all unique colleges from streams
    const streamCollegesMap = new Map<number, {id: number, name: string}>();
    streams.forEach(s => {
      (s.colleges || []).forEach(c => {
        streamCollegesMap.set(c.id, { id: c.id, name: c.college_full_name });
      });
    });
    const uniqueStreamColleges = Array.from(streamCollegesMap.values());

    const c2c = new Map<string, string[]>(); // courseName -> collegeNames
    const col2c = new Map<string, string[]>(); // collegeName -> courseNames
    const courseFrequency = new Map<string, number>();

    uniqueStreamColleges.forEach(streamCol => {
      const colName = streamCol.name;
      col2c.set(colName, []);

      // find college in collegeDetails to check its actual courses
      const detailCol = collegeDetails.find(d => d.id === streamCol.id);
      if (detailCol) {
        uniqueStreamCourses.forEach(streamCourse => {
          // Check if this college offers this stream course
          const lowerName = (streamCourse.name || "").toLowerCase();
          const hasCourse = (detailCol.courses || []).some(
            dc => dc.id === streamCourse.id || (dc.name && dc.name.toLowerCase() === lowerName)
          );

          if (hasCourse) {
            // Add mapping
            col2c.get(colName)!.push(streamCourse.name);
            
            if (!c2c.has(streamCourse.name)) {
              c2c.set(streamCourse.name, []);
            }
            c2c.get(streamCourse.name)!.push(colName);
            
            courseFrequency.set(streamCourse.name, (courseFrequency.get(streamCourse.name) || 0) + 1);
          }
        });
      }
    });

    const popular = Array.from(courseFrequency.entries())
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
      .slice(0, 4);

    return {
      allCourses: uniqueStreamCourses.map(c => c.name),
      allUniversities: uniqueStreamColleges.map(c => c.name),
      collegeToCourses: col2c,
      courseToColleges: c2c,
      topCourses: popular.length > 0 ? popular : ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online MA"]
    };
  }, [streams, collegeDetails]);

  // Derived options based on selections
  const courseOptions = useMemo(() => {
    if (selectedUniversity) {
      return collegeToCourses.get(selectedUniversity) || [];
    }
    return allCourses;
  }, [selectedUniversity, allCourses, collegeToCourses]);

  const universityOptions = useMemo(() => {
    if (selectedCourse) {
      return courseToColleges.get(selectedCourse) || [];
    }
    // Limit to 8 by default as per previous requirement, or show all
    return allUniversities.slice(0, 8);
  }, [selectedCourse, allUniversities, courseToColleges]);

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

  // Infinite loop logic
  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 800); 
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
    if (selectedUniversity) {
      const token = localStorage.getItem("token");
      if (token) {
        const slug = selectedUniversity.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        router.push(`/online-university/${slug}`);
      } else {
        setSignupOpen(true);
      }
    } else {
      const section = document.getElementById("degrees");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
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
                  <small>{selectedCourse || "e.g. Online MBA, Online BCA"}</small>
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
                        onClick={() => { 
                          setSelectedUniversity(u); 
                          setUniOpen(false); 
                          setUniSearch(""); 
                        }}
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
            {topCourses.map((item) => (
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
      <LoginPopup isOpen={signupOpen} onClose={() => setSignupOpen(false)} />
    </section>
  );
}

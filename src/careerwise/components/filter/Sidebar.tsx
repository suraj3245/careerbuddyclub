"use client";

import { useRef } from "react";
import { GraduationCap, Briefcase, BookOpen, BrainCircuit, Book, Wrench, Plane, Award, ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  { id: "pg", icon: GraduationCap, title: "PG Courses", sub: "After Graduation", active: true },
  { id: "exec", icon: Briefcase, title: "Executive Education", sub: "Working Professionals & CXOs", active: false },
  { id: "doc", icon: BookOpen, title: "Doctorate / Ph.D.", sub: "Doc to PhD (After UG + Work Exp)", active: false },
  { id: "ai", icon: BrainCircuit, title: "Gen AI / Agentic AI", sub: "Future Proof Career", active: false },
  { id: "ug", icon: Book, title: "UG Courses", sub: "After 12th", active: false },
  { id: "eng", icon: Wrench, title: "Engineering", sub: "First Timers", active: false },
  { id: "abroad", icon: Plane, title: "Study Abroad", sub: "Pathway / Hybrid Mode", active: false },
  { id: "skill", icon: Award, title: "Skilling & Certificates", sub: "Short Term & 12m", active: false },
];

export default function Sidebar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -180, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 180, behavior: "smooth" });
  };

  return (
    <div className="cfSidebar">
      {/* Mobile scroll controls */}
      <div className="cfMobileScrollControls">
        <button 
          type="button" 
          className="cfScrollBtn cfScrollBtnPrev" 
          onClick={scrollLeft} 
          aria-label="Scroll categories left"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="cfCategoryList" ref={scrollRef}>
          {categories.map((cat) => (
            <button 
              type="button" 
              key={cat.id} 
              className={`cfCategoryItem ${cat.active ? "active" : ""}`}
            >
              <span className="cfCatIcon">
                <cat.icon size={18} strokeWidth={2} />
              </span>
              <div className="cfCatText">
                <span className="cfCatTitle">{cat.title}</span>
                <span className="cfCatSub">
                  {cat.active ? <span>{cat.sub}</span> : cat.sub}
                </span>
              </div>
              <ChevronRight className="cfCatArrow" size={16} />
            </button>
          ))}
        </div>

        <button 
          type="button" 
          className="cfScrollBtn cfScrollBtnNext" 
          onClick={scrollRight} 
          aria-label="Scroll categories right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="cfExpertCard">
        <h3 className="cfExpertTitle">Not sure which course is right for you?</h3>
        <p className="cfExpertDesc">Talk to our experts and get personalized guidance.</p>
        <button type="button" className="cfExpertBtn">Talk to an Expert</button>
        <div style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "100px", height: "120px", background: "#d8e0e4", borderRadius: "16px 0 0 0" }}></div>
      </div>
    </div>
  );
}

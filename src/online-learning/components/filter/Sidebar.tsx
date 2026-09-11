"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Stream } from "../../data/api";

interface SidebarProps {
  streams: Stream[];
  selectedStreamId: number | string | null;
  onSelectStream: (id: number | string) => void;
}

const getSubtitleForStream = (title: string): string => {
  const t = (title || "").toLowerCase();
  if (t.includes("pg")) return "After Graduation";
  if (t.includes("executive")) return "Working Professionals & CXOs";
  if (t.includes("doctorate") || t.includes("ph.d")) return "Get Dr. Title (After UG + Work Ex)";
  if (t.includes("ai")) return "Future Proof Career";
  if (t.includes("ug")) return "After 12th";
  if (t.includes("engineering")) return "Flexi Timing";
  if (t.includes("abroad")) return "Pathway/Hybrid Mode";
  return "Online Degree";
};

const cleanTitle = (title: string): string => {
  const t = (title || "").replace(/\s*\(?Online\)?/gi, "").trim();
  if (t.toLowerCase() === "pg course" || t.toLowerCase() === "pg courses") return "PG Courses";
  return t;
};

export default function Sidebar({ streams = [], selectedStreamId, onSelectStream }: SidebarProps) {
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
          {streams.map((stream) => {
            const active = String(stream.id) === String(selectedStreamId);
            const title = cleanTitle(stream.title);
            const subtitle = getSubtitleForStream(stream.title);

            return (
              <button 
                type="button" 
                key={stream.id} 
                className={`cfCategoryItem ${active ? "active" : ""}`}
                onClick={() => onSelectStream(stream.id)}
              >
                <span className="cfCatTitle">{title}</span>
                <span className="cfCatPill">{subtitle}</span>
              </button>
            );
          })}
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
    </div>
  );
}


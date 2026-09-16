"use client";

import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Clock,
  ShieldCheck,
  Laptop,
  BookOpen,
  Building,
  Users,
  Award,
  Cpu,
  LineChart,
  Zap,
} from "lucide-react";
import { Stream, CollegeDetail } from "../../data/api";

interface CourseGridProps {
  selectedStream?: Stream;
  collegeDetails?: CollegeDetail[];
}

const getCourseBadge = (name: string): { label: string; isGreen: boolean } => {
  const n = (name || "").toLowerCase();
  if (n.includes("1 year")) return { label: "ROI 100%", isGreen: true };
  if (n.includes("dual")) return { label: "19+ Specializations", isGreen: false };
  if (n.includes("social work") || n.includes("msw") || n.includes("global mca")) return { label: "2 Years", isGreen: false };
  if (n.includes("diploma")) return { label: "NEW", isGreen: true };
  if (n.includes("ed.d") || n.includes("edu leader")) return { label: "Edu Leader", isGreen: true };
  if (n.includes("doctorate") || n.includes("phd") || n.includes("ph.d")) return { label: "Dr Title", isGreen: true };
  if (n.includes("global") || n.includes("trending")) return { label: "Trending", isGreen: true };
  if (n.includes("ms degree") || n.includes("ms ")) return { label: "Global", isGreen: true };
  if (n.includes("mba")) return { label: "92+ Specializations", isGreen: false };
  if (n.includes("mca")) return { label: "24+ Specializations", isGreen: false };
  if (n.includes("msc") || n.includes("m.sc")) return { label: "13+ Specializations", isGreen: false };
  if (n.includes("com") || n.includes("finance")) return { label: "7+ Specializations", isGreen: false };
  if (n.includes("med") || n.includes("m.ed") || n.includes("education")) return { label: "5+ Specializations", isGreen: false };
  if (n.includes("ma") || n.includes("arts")) return { label: "17+ Specializations", isGreen: false };
  if (n.includes("ai") || n.includes("data")) return { label: "High Demand", isGreen: true };
  if (n.includes("executive") || n.includes("senior")) return { label: "For CXOs", isGreen: true };
  return { label: "Trending", isGreen: true };
};

const getCourseIcon = (name: string) => {
  const n = (name || "").toLowerCase();
  if (n.includes("mca") || n.includes("computer") || n.includes("cs")) return ShieldCheck;
  if (n.includes("data") || n.includes("analytics")) return LineChart;
  if (n.includes("ai") || n.includes("machine")) return Cpu;
  if (n.includes("com") || n.includes("finance")) return Building;
  if (n.includes("executive") || n.includes("senior")) return Briefcase;
  if (n.includes("phd") || n.includes("doctorate")) return Award;
  if (n.includes("1 year")) return Clock;
  if (n.includes("dual")) return Users;
  if (n.includes("global")) return Globe;
  if (n.includes("med") || n.includes("ma") || n.includes("education")) return BookOpen;
  if (n.includes("mba")) return Laptop;
  return GraduationCap;
};

export default function CourseGrid({ selectedStream, collegeDetails = [] }: CourseGridProps) {
  if (!selectedStream || !selectedStream.courses) return null;

  const getCollegesCount = (courseId: number, courseName: string): number => {
    let count = 0;
    const lower = (courseName || "").toLowerCase();
    collegeDetails.forEach((col) => {
      const has = (col.courses || []).some(
        (c) => c.id === courseId || (c.name && c.name.toLowerCase() === lower)
      );
      if (has) count++;
    });
    return count;
  };

  return (
    <div className="cfGridWrapper">
      <div className="cfGrid">
        {selectedStream.courses.map((course) => {
          const count = getCollegesCount(course.id, course.name);
          const badge = getCourseBadge(course.name);
          const Icon = getCourseIcon(course.name);

          return (
            <div key={course.id} className="cfCard">
              {/* Top Badge */}
              <div className={`cfBadge ${badge.isGreen ? "cfBadgeGreen" : "cfBadgePeach"}`}>
                {badge.isGreen && <Zap size={8} strokeWidth={3} />}
                <span>{badge.label}</span>
              </div>

              {/* Center Icon */}
              <div className="cfCardIcon">
                <Icon size={22} strokeWidth={1.75} />
              </div>

              {/* Course Title */}
              <h3 className="cfCardTitle">{course.name}</h3>

              {/* Bottom Button */}
              <Link href={`/advisor/${course.id}`} className="cfCardBtn">
                Compare {count > 0 ? count : 1} Now
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}


"use client";

import Link from "next/link";
import { Briefcase, LineChart, Code, Building, Shield, Users, PieChart, Cpu, Clock, Banknote, Star, Flame, Sparkles } from "lucide-react";

const courses = [
  {
    id: "mba",
    title: "Online MBA",
    icon: Briefcase,
    tag: { label: "Popular", type: "popular", icon: Star },
    duration: "2 Years",
    fee: "80K - 18L",
    programs: 18
  },
  {
    id: "mca",
    title: "Online MCA",
    icon: LineChart,
    tag: { label: "High Demand", type: "highDemand", icon: Flame },
    duration: "2 Years",
    fee: "60K - 12L",
    programs: 15
  },
  {
    id: "msc-it",
    title: "Online M.Sc (IT)",
    icon: Code,
    tag: { label: "Popular", type: "popular", icon: Star },
    duration: "2 Years",
    fee: "60K - 10L",
    programs: 12
  },
  {
    id: "mcom",
    title: "Online M.Com",
    icon: Building,
    tag: { label: "New", type: "new", icon: Sparkles },
    duration: "2 Years",
    fee: "40K - 8L",
    programs: 10
  },
  {
    id: "ma",
    title: "Online MA",
    icon: Shield,
    tag: { label: "Trending", type: "trending", icon: Flame },
    duration: "2 Years",
    fee: "30K - 6L",
    programs: 9
  },
  {
    id: "ms-ds",
    title: "MS (Data Science)",
    icon: Users,
    tag: { label: "Popular", type: "popular", icon: Star },
    duration: "2 Years",
    fee: "90K - 16L",
    programs: 8
  },
  {
    id: "pg-dip",
    title: "PG Diploma",
    icon: PieChart,
    tag: { label: "High ROI", type: "highRoi", icon: LineChart },
    duration: "1 Year",
    fee: "20K - 3L",
    programs: 25
  },
  {
    id: "pg-ai",
    title: "PG in AI & ML",
    icon: Cpu,
    tag: { label: "New", type: "new", icon: Sparkles },
    duration: "2 Years",
    fee: "70K - 14L",
    programs: 7
  }
];

export default function CourseGrid() {
  return (
    <div>
      <div className="cfGridHeader">
        <div>
          <h3 className="cfGridTitle">Popular PG Courses</h3>
          <p className="cfGridSub">Compare programs, fees, duration and more</p>
        </div>
        <button className="cfViewAll">View All PG Courses &rarr;</button>
      </div>

      <div className="cfGrid" style={{ marginTop: "24px" }}>
        {courses.map(course => (
          <div key={course.id} className="cfCard">
            <div className="cfCardHeader">
              <span className="cfCardIcon">
                <course.icon size={24} strokeWidth={1.5} />
              </span>
              <span className={`cfTag cft-${course.tag.type}`}>
                <course.tag.icon size={12} strokeWidth={2.5} />
                {course.tag.label}
              </span>
            </div>
            <h4 className="cfCardTitle">{course.title}</h4>
            <div className="cfCardSpec">
              <Users size={14} /> Multiple Specializations
            </div>
            <div className="cfCardMetrics">
              <span><Clock size={14} /> {course.duration}</span>
              <span><Banknote size={14} /> {course.fee}</span>
            </div>
            <Link href={`/advisor/${course.id}`} className="cfCardBtn">
              Compare {course.programs} Programs
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

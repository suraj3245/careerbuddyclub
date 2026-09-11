"use client";

import Link from "next/link";
import { Building, Star, Flame, Sparkles, MapPin } from "lucide-react";
import { Stream } from "../../data/api";

interface CollegeGridProps {
  selectedStream: Stream;
}

const getCollegeTag = (index: number) => {
  const tags = [
    { label: "Top Ranked", type: "popular", icon: Star },
    { label: "High Placement", type: "highDemand", icon: Flame },
    { label: "Premium", type: "new", icon: Sparkles },
    { label: "Trending", type: "trending", icon: Flame },
  ];
  return tags[index % tags.length];
};

export default function CollegeGrid({ selectedStream }: CollegeGridProps) {
  if (!selectedStream) return null;

  return (
    <div>
      <div className="cfGridHeader">
        <div>
          <h3 className="cfGridTitle">Top {selectedStream.title} Colleges</h3>
          <p className="cfGridSub">Explore universities, accreditations, and more</p>
        </div>
        <button className="cfViewAll">View All {selectedStream.title} Colleges &rarr;</button>
      </div>

      <div className="cfGrid" style={{ marginTop: "24px" }}>
        {selectedStream.colleges?.map((c, i) => {
          const tag = getCollegeTag(i);

          return (
            <div key={c.id} className="cfCard">
              <div className="cfCardHeader">
                <span className="cfCardIcon">
                  <Building size={24} strokeWidth={1.5} />
                </span>
                <span className={`cfTag cft-${tag.type}`}>
                  <tag.icon size={12} strokeWidth={2.5} />
                  {tag.label}
                </span>
              </div>
              <h4 className="cfCardTitle">{c.college_full_name}</h4>
              {c.college_short_name && (
                <div className="cfCardSpec">
                   {c.college_short_name}
                </div>
              )}
              <div className="cfCardMetrics">
                <span><MapPin size={14} /> View Details</span>
              </div>
              <Link href={`/universities/${c.id}`} className="cfCardBtn">
                Explore University
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}


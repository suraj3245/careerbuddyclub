import React from "react";
import WhyChooseCarousel from "./WhyChooseCarousel";
import { IWhyChooseCard } from "@/types/university-details";

interface HighlightsGridProps {
  universityName: string;
}

export function HighlightsGrid({ universityName }: HighlightsGridProps) {
  // Professional content mapped dynamically using the university name
  const dynamicHighlights: IWhyChooseCard[] = [
    {
      title: "Global Recognition & Accreditation",
      description: `${universityName} offers programs that are globally recognized and fully accredited by top educational bodies.`,
      secondaryText: "Ensures your degree holds significant value in top organizations worldwide, opening doors to global opportunities.",
      icon: "globe"
    },
    {
      title: "Flexible & Self-Paced Learning",
      description: `Balance your professional career and education seamlessly with ${universityName}'s asynchronous digital learning modules.`,
      secondaryText: "Access highly interactive lectures, assignments, and study materials 24/7 on any digital device.",
      icon: "check"
    },
    {
      title: "Expert Faculty & Mentorship",
      description: "Learn directly from distinguished industry veterans and accomplished academics who bring real-world insights.",
      secondaryText: "Includes one-on-one mentorship sessions, live interactive webinars, and dedicated academic support.",
      icon: "users"
    },
    {
      title: "Dedicated Career Support",
      description: "Benefit from a robust placement cell designed specifically to accelerate your career trajectory.",
      secondaryText: "Take advantage of resume building workshops, interview preparation, and exclusive corporate hiring drives.",
      icon: "briefcase"
    },
    {
      title: "Advanced Digital Curriculum",
      description: "Stay ahead of industry trends with a curriculum that is continuously updated to reflect the latest market demands.",
      secondaryText: "Engage with practical case studies, capstone projects, and modern learning frameworks.",
      icon: "book"
    }
  ];

  const highlightsData = dynamicHighlights;

  return (
    <section className="upHighlights bg-gradient-to-br from-teal-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12">
          Why Choose <span className="text-teal-500">{universityName}</span>?
        </h2>
        <WhyChooseCarousel data={highlightsData} />
      </div>
    </section>
  );
}
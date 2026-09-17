"use client";

import React from "react";

interface SectionNavProps {
  activeSection: string;
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs" },
  { id: "fees", label: "Fees" },
  { id: "accreditations", label: "Accreditations" },
  { id: "experience", label: "Learning Experience" },
  { id: "faqs", label: "FAQs" },
];

export function SectionNav({ activeSection }: SectionNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="upSectionNav">
      <ul className="upNavList">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`upNavItem ${activeSection === section.id ? "upNavActive" : ""}`}
              onClick={(e) => handleClick(e, section.id)}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

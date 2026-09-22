"use client";

import { useState, useEffect, useCallback } from "react";
import type { UniversityProfile } from "@/online-learning/data/api";

import { NotificationBar } from "./NotificationBar";
import { UniversityHero } from "./UniversityHero";
import { SectionNav } from "./SectionNav";
import { OverviewSection } from "./OverviewSection";
import { HighlightsGrid } from "./HighlightsGrid";
import { ProgramCatalog } from "./ProgramCatalog";

import { FeesSection } from "./FeesSection";

import AccreditationsSection from "./AccreditationsSection";
import LearningExperience from "./LearningExperience";

import StudentStories from "./StudentStories";
import FAQAccordion from "./FAQAccordion";
import EnquiryForm from "./EnquiryForm";
import { StickyMobileCTA } from "./StickyMobileCTA";

interface Props {
  university: UniversityProfile;
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs" },
  { id: "fees", label: "Fees" },
  { id: "accreditations", label: "Accreditations" },
  { id: "experience", label: "Learning Experience" },
  { id: "faqs", label: "FAQs" },
];

export default function UniversityProfilePage({ university }: Props) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string>("");
  const [activeSection, setActiveSection] = useState("overview");

  const openEnquiry = useCallback((programName?: string) => {
    if (programName) setPreselectedProgram(programName);
    else setPreselectedProgram("");
    setEnquiryOpen(true);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(SECTIONS[i].id);
            return;
          }
        }
      }
      setActiveSection(SECTIONS[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="upPageWrapper">
      <NotificationBar />

      <UniversityHero
        university={university}
        onEnquiryOpen={() => openEnquiry()}
      />

      <SectionNav activeSection={activeSection} />

      <div className="upSectionWrapper upSectionWrapper--white">
        <OverviewSection universityName={university.name} about={university.about} />
      </div>

      <div className="upSectionWrapper upSectionWrapper--light">
        <HighlightsGrid universityName={university.name} />
      </div>

      <div className="upSectionWrapper upSectionWrapper--white">
        <ProgramCatalog
          courses={university.courses}
          universityName={university.name}
          onRequestDetails={(name: string) => openEnquiry(name)}
        />
      </div>


      <div className="upSectionWrapper upSectionWrapper--white">
        <FeesSection
          courses={university.courses}
          universityName={university.name}
        />
      </div>

      <div className="upSectionWrapper upSectionWrapper--light">
        <AccreditationsSection universityName={university.name} />
      </div>

      <div className="upSectionWrapper upSectionWrapper--light">
        <LearningExperience universityName={university.name} />
      </div>


      <div className="upSectionWrapper upSectionWrapper--light">
        <StudentStories />
      </div>

      <div className="upSectionWrapper upSectionWrapper--white">
        <FAQAccordion
          universityName={university.name}
          totalPrograms={university.totalPrograms}
        />
      </div>

      {/* Enquiry Form Modal */}
      <EnquiryForm
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        universityName={university.name}
        programs={university.courses.map((c) => ({ id: c.id, name: c.name }))}
        preselectedProgram={preselectedProgram}
      />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA onEnquiryOpen={() => openEnquiry()} />
    </div>
  );
}

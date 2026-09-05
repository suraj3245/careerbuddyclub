import { Metadata } from "next";
import CareerWiseShell from "@/careerwise/CareerWiseShell";
import Hero from "@/careerwise/components/Hero";
import Metrics from "@/careerwise/components/Metrics";
import CourseFilter from "@/careerwise/components/filter/CourseFilter";
import UniversitiesSection from "@/careerwise/components/universities/UniversitiesSection";
import CareerMap from "@/careerwise/components/CareerMap";
import Testimonials from "@/careerwise/components/Testimonials";
import MentorSection from "@/careerwise/components/mentor/MentorSection";
import ROICalculatorSection from "@/careerwise/components/roi/ROICalculatorSection";
import OffCampusSection from "@/careerwise/components/offcampus/OffCampusSection";

export const metadata: Metadata = {
  title: "Career Buddy Club | Career Counselling | Career Guidance",
  description:
    "Empowering students with knowledge, resources, and guidance, Career Buddy Club (CBC) offers India's 1st end-to-end career services. Compare online degrees and universities to build your future.",
  alternates: { canonical: "https://careerbuddyclub.com/" },
};

export default function Home() {
  return (
    <CareerWiseShell>
      <main id="top">
        <Hero />
        <Metrics />
        <CourseFilter />
        <UniversitiesSection />
        <CareerMap />
        <Testimonials />
        <MentorSection />
        <ROICalculatorSection />
        <OffCampusSection />
      </main>
    </CareerWiseShell>
  );
}

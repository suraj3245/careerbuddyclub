import { Metadata } from "next";
import OnlineLearningShell from "@/online-learning/OnlineLearningShell";
import Hero from "@/online-learning/components/Hero";
import Metrics from "@/online-learning/components/Metrics";
import CourseFilter from "@/online-learning/components/filter/CourseFilter";
import UniversitiesSection from "@/online-learning/components/universities/UniversitiesSection";
import CareerMap from "@/online-learning/components/CareerMap";
import Testimonials from "@/online-learning/components/Testimonials";
import MentorSection from "@/online-learning/components/mentor/MentorSection";
import ROICalculatorSection from "@/online-learning/components/roi/ROICalculatorSection";
import OffCampusSection from "@/online-learning/components/offcampus/OffCampusSection";

export const metadata: Metadata = {
  title: "Career Buddy Club | Career Counselling | Career Guidance",
  description:
    "Empowering students with knowledge, resources, and guidance, Career Buddy Club (CBC) offers India's 1st end-to-end career services. Compare online degrees and universities to build your future.",
  alternates: { canonical: "https://careerbuddyclub.com/" },
};

export default function Home() {
  return (
    <OnlineLearningShell>
      <main id="top">
        <Hero />
        <Metrics />
        <CourseFilter />
        <UniversitiesSection />
        <CareerMap />
        {/* <Testimonials /> */}
        {/* <MentorSection /> */}
        <ROICalculatorSection />
        <OffCampusSection />
      </main>
    </OnlineLearningShell>
  );
}

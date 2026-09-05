import { Metadata } from "next";
import CareerWiseShell from "@/careerwise/CareerWiseShell";
import AdvisorFlow from "@/careerwise/components/advisor/AdvisorFlow";

export const metadata: Metadata = {
  title: "Course Advisor | Career Buddy Club",
  description:
    "Answer four questions and get matched with the online programmes that fit your budget, mode and experience.",
};

// Full-bleed flow: it renders its own close button and locks body scroll,
// so it deliberately opts out of the CareerWise header and footer.
export default function AdvisorPage() {
  return (
    <CareerWiseShell chrome={false}>
      <AdvisorFlow />
    </CareerWiseShell>
  );
}

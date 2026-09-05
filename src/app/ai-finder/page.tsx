import { Metadata } from "next";
import CareerWiseShell from "@/careerwise/CareerWiseShell";
import AIFinder from "@/careerwise/components/AIFinder";

export const metadata: Metadata = {
  title: "AI College Finder | Career Buddy Club",
  description: "Find the best college for you with our AI College Finder.",
};

export default function AIFinderPage() {
  return (
    <CareerWiseShell>
      <main style={{ backgroundColor: "var(--surface-0, #f8f8f6)" }}>
        <AIFinder />
      </main>
    </CareerWiseShell>
  );
}

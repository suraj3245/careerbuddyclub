import { Metadata } from "next";
import OnlineLearningShell from "@/online-learning/OnlineLearningShell";
import AIFinder from "@/online-learning/components/AIFinder";

export const metadata: Metadata = {
  title: "AI College Finder | Career Buddy Club",
  description: "Find the best college for you with our AI College Finder.",
};

export default function AIFinderPage() {
  return (
    <OnlineLearningShell>
      <main style={{ backgroundColor: "var(--surface-0, #f8f8f6)" }}>
        <AIFinder />
      </main>
    </OnlineLearningShell>
  );
}

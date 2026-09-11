import { Metadata } from "next";
import OnlineLearningShell from "@/online-learning/OnlineLearningShell";
import AdvisorFlow from "@/online-learning/components/advisor/AdvisorFlow";
import { fetchAllCollegesDetails, fetchOnlineStreams } from "@/online-learning/data/api";

export const metadata: Metadata = {
  title: "Course Advisor | Career Buddy Club",
  description:
    "Answer four questions and get matched with the online programmes that fit your budget, mode and experience.",
};

// Full-bleed flow: it renders its own close button and locks body scroll,
// so it deliberately opts out of the online-learning header and footer.
export default async function AdvisorPage() {
  const [colleges, streams] = await Promise.all([
    fetchAllCollegesDetails(),
    fetchOnlineStreams(),
  ]);

  return (
    <OnlineLearningShell chrome={false}>
      <AdvisorFlow collegeDetails={colleges} streams={streams} />
    </OnlineLearningShell>
  );
}


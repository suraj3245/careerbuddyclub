import { Metadata } from "next";
import OnlineLearningShell from "@/online-learning/OnlineLearningShell";
import StudentDashboard from "@/online-learning/components/dashboard/StudentDashboard";

export const metadata: Metadata = {
  title: "Student Dashboard | Career Buddy Club",
};

// The dashboard is its own full-height surface with its own sidebar/header.
export default function StudentDashboardPage() {
  return (
    <OnlineLearningShell chrome={false}>
      <StudentDashboard />
    </OnlineLearningShell>
  );
}

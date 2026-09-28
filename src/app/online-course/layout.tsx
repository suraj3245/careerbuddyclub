import OnlineLearningShell from "@/online-learning/OnlineLearningShell";

export default function OnlineCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnlineLearningShell>{children}</OnlineLearningShell>;
}

import OnlineLearningShell from "@/online-learning/OnlineLearningShell";

export default function OnlineUniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnlineLearningShell>{children}</OnlineLearningShell>;
}

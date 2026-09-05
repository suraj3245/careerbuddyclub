import { Metadata } from "next";
import CareerWiseShell from "@/careerwise/CareerWiseShell";
import StudentDashboard from "@/careerwise/components/dashboard/StudentDashboard";

export const metadata: Metadata = {
  title: "Student Dashboard | Career Buddy Club",
};

// The dashboard is its own full-height surface with its own sidebar/header.
export default function StudentDashboardPage() {
  return (
    <CareerWiseShell chrome={false}>
      <StudentDashboard />
    </CareerWiseShell>
  );
}

import dynamic from 'next/dynamic';
import Wrapper from "@/layouts/wrapper";
import { Metadata } from 'next';

const StudentDetails = dynamic(() => import("@/app/components/dashboard/school/details"), {
  ssr: false
});

export const metadata: Metadata = {
  title: "Student Details | School Dashboard",
};

const StudentDashboardPage = () => {
  return (
    <Wrapper>
      <StudentDetails />
    </Wrapper>
  );
};

export default StudentDashboardPage;

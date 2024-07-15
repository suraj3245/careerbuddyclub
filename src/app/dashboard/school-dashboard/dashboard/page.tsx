import dynamic from 'next/dynamic';
import Wrapper from "@/layouts/wrapper";

const StudentDetails = dynamic(() => import("@/app/components/dashboard/school/details"), {
  ssr: false
});

const StudentDashboardPage = () => {
  return (
    <Wrapper>
      <StudentDetails />
    </Wrapper>
  );
};

export default StudentDashboardPage;

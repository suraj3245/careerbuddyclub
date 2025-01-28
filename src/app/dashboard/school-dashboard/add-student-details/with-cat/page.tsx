import dynamic from "next/dynamic";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";

const StudentWithCatForm = dynamic(
  () => import("@/app/components/dashboard/school/add-student-with-cat-form"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Add Student Details | School Dashboard",
};

const AddStudentsWithCat = () => {
  return (
    <Wrapper>
      <StudentWithCatForm />
    </Wrapper>
  );
};

export default AddStudentsWithCat;

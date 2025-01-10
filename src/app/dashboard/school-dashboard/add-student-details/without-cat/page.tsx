import dynamic from "next/dynamic";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";

const StudentWithOutCatForm = dynamic(
  () => import("@/app/components/dashboard/school/add-student-without-cat-form"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Add Student Details | School Dashboard",
};

const AddStudentsWithOutCat = () => {
  return (
    <Wrapper>
      <StudentWithOutCatForm />
    </Wrapper>
  );
};

export default AddStudentsWithOutCat;

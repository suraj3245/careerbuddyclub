import dynamic from "next/dynamic";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";

const ImportStudentWithCatForm = dynamic(
  () => import("@/app/components/dashboard/school/import-student-with-cat-form"),
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
      <ImportStudentWithCatForm />
    </Wrapper>
  );
};

export default AddStudentsWithCat;

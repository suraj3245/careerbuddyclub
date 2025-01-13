import dynamic from "next/dynamic";
import Wrapper from "@/layouts/wrapper";
import { Metadata } from "next";

const ImportStudentWithOutCatForm = dynamic(
  () => import("@/app/components/dashboard/school/import-student-without-cat-form"),
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
      <ImportStudentWithOutCatForm />
    </Wrapper>
  );
};

export default AddStudentsWithOutCat;

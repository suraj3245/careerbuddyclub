import { PlusCircle } from "lucide-react";
import CourseFilterClient from "./CourseFilterClient";
import { fetchOnlineStreams, fetchAllCollegesDetails } from "../../data/api";

export default async function CourseFilter() {
  const [streams, collegeDetails] = await Promise.all([
    fetchOnlineStreams(),
    fetchAllCollegesDetails(),
  ]);

  return (
    <section className="courseFilterSection" id="degrees">
      <div className="cfHeader">
        <span className="cfEyebrow">
          <PlusCircle size={14} strokeWidth={2.5} />
          Explore Courses
        </span>
        <h2 className="cfTitle">Find the Right Course for Your Future</h2>
        <p className="cfSubtitle">
          Explore online degree &amp; certification programs from top universities and find the perfect match for your career goals.
        </p>
      </div>

      <CourseFilterClient streams={streams} collegeDetails={collegeDetails} />
    </section>
  );
}

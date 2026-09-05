import Sidebar from "./Sidebar";
import TopBanner from "./TopBanner";
import CourseGrid from "./CourseGrid";
import BottomBanner from "./BottomBanner";
import { PlusCircle } from "lucide-react";

export default function CourseFilter() {
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

      <div className="cfLayout">
        <Sidebar />
        <div className="cfMain">
          <TopBanner />
          <CourseGrid />
          <BottomBanner />
        </div>
      </div>
    </section>
  );
}

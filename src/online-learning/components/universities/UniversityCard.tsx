import Image from "next/image";
import { University } from "./universityData";

export default function UniversityCard({ university }: { university: University }) {
  return (
    <div className="uniCard">
      <div className="uniLogo">
        <Image
          src={university.logo}
          alt={`${university.name} logo`}
          fill
          sizes="(max-width: 720px) 28vw, (max-width: 1024px) 16vw, 9vw"
        />
      </div>
      <div className="uniDetails">
        <span className="uniCardCourses">{university.coursesCount} Courses</span>
        <span className="uniCardName">{university.name}</span>
      </div>
    </div>
  );
}

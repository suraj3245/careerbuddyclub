"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import CourseGrid from "./CourseGrid";
import { Stream, CollegeDetail } from "../../data/api";

interface CourseFilterClientProps {
  streams: Stream[];
  collegeDetails?: CollegeDetail[];
}

export default function CourseFilterClient({
  streams = [],
  collegeDetails = [],
}: CourseFilterClientProps) {
  const [selectedStreamId, setSelectedStreamId] = useState<number | string>(
    streams.length > 0 ? streams[0].id : 39
  );

  const selectedStream =
    streams.find((s) => String(s.id) === String(selectedStreamId)) || streams[0];

  return (
    <div className="cfLayout">
      <Sidebar
        streams={streams}
        selectedStreamId={selectedStream?.id || selectedStreamId}
        onSelectStream={setSelectedStreamId}
      />
      <div className="cfMain">
        <CourseGrid
          selectedStream={selectedStream}
          collegeDetails={collegeDetails}
        />
      </div>
    </div>
  );
}


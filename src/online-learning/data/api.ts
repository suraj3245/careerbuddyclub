export interface College {
  id: number;
  college_full_name: string;
  college_short_name?: string;
  type?: string;
  about?: string;
}

export interface Course {
  id: number;
  name: string;
  stream_id: string;
}

export interface Stream {
  id: number;
  title: string;
  colleges: College[];
  courses: Course[];
}

export interface FilterationData {
  streams: Stream[];
}

export async function fetchOnlineStreams(): Promise<Stream[]> {
  try {
    const res = await fetch("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 } // cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch filtration data: ${res.statusText}`);
    }

    const data: FilterationData = await res.json();

    // Filter streams that contain "Online"
    const onlineStreams = (data.streams || []).filter(stream => (stream.title || "").includes("Online"));

    // Clean up titles (remove "(Online)" or " (Online)")
    const cleanedStreams = onlineStreams.map(stream => ({
      ...stream,
      title: (stream.title || "").replace(/\s*\(?Online\)?/gi, "").trim(),
    }));

    return cleanedStreams;
  } catch (error) {
    console.error("Error fetching online streams:", error);
    return [];
  }
}

export interface CollegeDetailCourse {
  id: number;
  name: string;
  duration?: string;
  pivot?: {
    college_id: number;
    course_id: string | number;
    fee: string;
  };
}

export interface CollegeDetail {
  id: number;
  college_full_name: string;
  courses: CollegeDetailCourse[];
}

export async function fetchAllCollegesDetails(): Promise<CollegeDetail[]> {
  try {
    const res = await fetch("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch college details: ${res.statusText}`);
    }

    const data = await res.json();
    return data.colleges || [];
  } catch (error) {
    console.error("Error fetching college details:", error);
    return [];
  }
}

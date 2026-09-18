export async function fetchCollegesData() {
  const [collegesRes, streamsRes] = await Promise.all([
    fetch("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails", {
      method: "POST",
      next: { revalidate: 3600 }
    }),
    fetch("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata", {
      method: "POST",
      next: { revalidate: 3600 }
    }),
  ]);

  if (!collegesRes.ok || !streamsRes.ok) {
    return { colleges: [], streams: [] };
  }

  const collegesData = await collegesRes.json();
  const streamsData = await streamsRes.json();

  const rawColleges = collegesData.colleges || [];
  const rawStreams = streamsData.streams || [];

  // Identify online streams and their exclusive colleges
  const onlineStreams = rawStreams.filter((s: any) => s.title.toLowerCase().includes('(online)'));
  const onlineCollegeIds = new Set<number>();
  onlineStreams.forEach((s: any) => {
    (s.colleges || []).forEach((c: any) => onlineCollegeIds.add(c.id));
  });

  // Offline streams
  const offlineStreams = rawStreams.filter((s: any) => !s.title.toLowerCase().includes('(online)'));
  const offlineCollegeIds = new Set<number>();
  offlineStreams.forEach((s: any) => {
    (s.colleges || []).forEach((c: any) => offlineCollegeIds.add(c.id));
  });

  const collegesToRemove = new Set<number>();
  onlineCollegeIds.forEach((id: number) => {
    if (!offlineCollegeIds.has(id)) {
      collegesToRemove.add(id);
    }
  });

  const filteredStreams = offlineStreams;
  const filteredColleges = rawColleges.filter((c: any) => !collegesToRemove.has(c.id));

  return { colleges: filteredColleges, streams: filteredStreams };
}

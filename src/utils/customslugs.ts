// Map streamId to custom URL slug (path segment only)
const streamCustomSlugs: Record<number, string> = {
     17:"top-pharmacy-colleges-in-dehradun-uttarakhand",
  
     // Add more as needed
};

export function getStreamSlug(title: string, id: number) {
  return streamCustomSlugs[id]
    ? streamCustomSlugs[id]
    : title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-+/g, "-");
}
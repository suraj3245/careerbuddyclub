export const createSlug = (text: string): string => {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")       
    .replace(/\s+/g, "-")       
    .replace(/[^a-z0-9\-]/g, "") 
    .replace(/\-{2,}/g, "-");    

  return encodeURIComponent(slug);
};

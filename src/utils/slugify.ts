export const createSlug = (text: string): string => {
  // Convert the string to lower case, trim spaces, replace multiple spaces with hyphens,
  // remove non-alphanumeric (and non-hyphen) characters, and then encode the result.
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens.
    .replace(/[^a-z0-9\-]/g, ""); // Remove any character that is not alphanumeric or hyphen.

  return encodeURIComponent(slug);
};

export const createSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};
export const createExcerpt = (str: string) => {
  return str.length > 100 ? str.slice(0, 100) + "..." : str;
};

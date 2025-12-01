export const generateUrlArray = ({ url }: { url: string }) => {
  if (!url) return [];

  if (url) {
    const urlPathnames = url.split("/").slice(1);

    return urlPathnames.map((path) => path.split("-").join(" "));
  }

  return [];
};

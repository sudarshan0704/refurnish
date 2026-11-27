export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://refurnishit.vercel.app"
).replace(/\/+$/, "");

export const defaultOgImage = {
  url: "/logo.png",
  width: 2053,
  height: 766,
  alt: "Refurnish logo",
};

import BlogsPage from "@/features/blogs";
import { defaultOgImage } from "@/shared/site-config";

export const metadata = {
  title: "Furniture Restoration Blog | Tips for Bangalore Homes",
  description:
    "Practical guides on furniture restoration, sofa upholstery, wooden furniture polishing, repair and refinishing in Bangalore.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Furniture Restoration Blog | Refurnish",
    description:
      "Guides on restoring, repairing, polishing and refinishing the furniture you already own.",
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
    url: "/blogs",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Restoration Blog | Refurnish",
    description: "Guides on furniture restoration, upholstery, polishing and repair.",
    images: [defaultOgImage.url],
  },
};

export default function Blogs() {
  return <BlogsPage />;
}

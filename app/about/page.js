import AboutPage from "@/features/about";
import { defaultOgImage } from "@/shared/site-config";

export const metadata = {
  title: "About Refurnish | Furniture Restoration in Bangalore",
  description:
    "Meet Refurnish, a Bangalore furniture restoration service focused on repair, upholstery, polishing and refinishing. Learn our practical approach to restoring furniture.",
  keywords: [
    "About Refurnish",
    "Furniture Restoration in Bangalore",
    "Furniture Refurbishing in Bangalore",
    "Old Furniture Makeover in Bangalore",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Refurnish",
    description:
      "Discover Refurnish and our approach to furniture restoration, repair and makeover services in Bangalore.",
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
    url: "/about",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Refurnish",
    description:
      "Furniture restoration and makeover expertise in Bangalore.",
    images: [defaultOgImage.url],
  },
};

export default function About() {
  return <AboutPage />;
}

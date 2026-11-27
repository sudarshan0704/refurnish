import type { Metadata } from "next";
import HomePage from "@/features/home";
import { defaultOgImage } from "@/shared/site-config";

export const metadata: Metadata = {
  title: "Furniture Restoration in Bangalore | Refurnish",
  description:
    "Furniture repair and restoration in Bangalore for sofas, chairs, tables and wooden furniture. Restore and refurnish instead of replacing.",
  keywords: [
    "Furniture Restoration in Bangalore",
    "Furniture Refurbishing in Bangalore",
    "Furniture Repair Services in Bangalore",
    "Sofa Restoration in Bangalore",
    "Sofa Upholstery Services in Bangalore",
    "Wooden Furniture Restoration in Bangalore",
    "Furniture Polishing in Bangalore",
    "Old Furniture Makeover in Bangalore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Furniture Restoration in Bangalore | Refurnish",
    description:
      "Give old furniture a new life with professional restoration, upholstery, repair and refinishing services in Bangalore.",
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
    url: "/",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Restoration in Bangalore | Refurnish",
    description:
      "Don't replace old furniture. Transform it with Refurnish furniture restoration services in Bangalore.",
    images: [defaultOgImage.url],
  },
};

export default function Home() {
  return <HomePage />;
}

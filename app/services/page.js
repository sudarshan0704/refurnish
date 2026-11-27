import ServicesPage from "@/features/services";
import { defaultOgImage } from "@/shared/site-config";

export const metadata = {
  title: "Furniture Restoration Services in Bangalore",
  description:
    "Wooden furniture restoration, sofa and chair upholstery, furniture repair, polishing, refinishing and redesign in Bangalore. Give your old furniture a fresh new look instead of replacing it.",
  keywords: [
    "Furniture Restoration in Bangalore",
    "Sofa Upholstery Services in Bangalore",
    "Wooden Furniture Restoration in Bangalore",
    "Furniture Polishing in Bangalore",
    "Furniture Refinishing Services in Bangalore",
    "Furniture Repair Services in Bangalore",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Furniture Restoration Services in Bangalore | Refurnish",
    description:
      "Restoration, upholstery, repair, polishing, refinishing and redesign for the furniture you already own.",
    images: [defaultOgImage.url],
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
    url: "/services",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Restoration Services in Bangalore | Refurnish",
    description:
      "Restoration, upholstery, repair, polishing, refinishing and redesign in Bangalore.",
  },
};

export default function Services() {
  return <ServicesPage />;
}

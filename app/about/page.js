import AboutPage from "@/features/about";

export const metadata = {
  title: "About Us | Furniture Restoration in Bangalore",
  description:
    "Refurnish restores, repairs, refinishes and redesigns old furniture in Bangalore. Learn why we believe in giving furniture a second life instead of replacing it.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "About Refurnish",
    description:
      "Furniture restoration and makeover expertise in Bangalore.",
  },
};

export default function About() {
  return <AboutPage />;
}

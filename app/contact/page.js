import ContactPage from "@/features/contact";

export const metadata = {
  title: "Contact Us | Furniture Restoration in Bangalore",
  description:
    "Call or WhatsApp Refurnish to enquire about furniture restoration, upholstery, repair, polishing and refinishing in Bangalore. Share photos of your furniture to get started.",
  keywords: [
    "Contact Refurnish",
    "Furniture Restoration in Bangalore",
    "Furniture Repair Services in Bangalore",
    "Get a Free Quote Furniture Restoration Bangalore",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Refurnish | Furniture Restoration in Bangalore",
    description:
      "Call, WhatsApp or send an enquiry about restoring, repairing or refinishing your furniture in Bangalore.",
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Refurnish | Furniture Restoration in Bangalore",
    description: "Call or WhatsApp us about your furniture in Bangalore.",
  },
};

export default function Contact() {
  return <ContactPage />;
}

import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";
import BootstrapClient from "@/shared/components/common/BootstrapClient";
import WhatsAppFloat from "@/shared/components/layout/WhatsAppFloat";
import AosInit from "@/shared/components/common/AosInit";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "Refurnish | Furniture Restoration in Bangalore",
    template: "%s | Refurnish",
  },
  description:
    "Professional furniture restoration, repair, upholstery, polishing and refinishing services in Bangalore.",
  applicationName: "Refurnish",
  authors: [{ name: "Refurnish" }],
  creator: "Refurnish",
  publisher: "Refurnish",
  category: "Furniture Restoration",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Refurnish",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${roboto.variable}`}>
      <body>
        <BootstrapClient />
        <AosInit />
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

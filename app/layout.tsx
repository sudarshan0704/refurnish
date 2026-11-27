import type { Metadata } from "next";
import { Hanken_Grotesk, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";
import BootstrapClient from "@/shared/components/common/BootstrapClient";
import WhatsAppFloat from "@/shared/components/layout/WhatsAppFloat";
import AosInit from "@/shared/components/common/AosInit";
import { defaultOgImage, siteUrl } from "@/shared/site-config";

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Refurnish",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917676045748",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${roboto.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
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

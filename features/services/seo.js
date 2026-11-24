import { contactDetails } from "@/features/contact/data";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

export function absoluteUrl(path) {
  return siteUrl ? `${siteUrl}${path}` : undefined;
}

function business() {
  return {
    "@type": "LocalBusiness",
    name: "Refurnish",
    telephone: "+917676045748",
    ...(siteUrl ? { url: siteUrl } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Bangalore" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917676045748",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  };
}

/** Structured data (JSON-LD) for a service page. */
export function serviceStructuredData(service) {
  const path = `/services/${service.slug}`;
  const url = absoluteUrl(path);

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.pageTitle,
      serviceType: service.title,
      description: service.metaDescription,
      ...(url ? { url } : {}),
      provider: business(),
      areaServed: { "@type": "City", name: "Bangalore" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  // Breadcrumb items need absolute URLs, so they are only added once
  // NEXT_PUBLIC_SITE_URL is set.
  if (siteUrl) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: service.pageTitle, item: url },
      ],
    });
  }

  return graph;
}

export { contactDetails };

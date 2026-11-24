import { notFound } from "next/navigation";
import ServiceDetail from "@/features/services/components/ServiceDetail";
import { getServiceBySlug, services } from "@/features/services/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${service.metaTitle} | Refurnish`,
      description: service.metaDescription,
      type: "website",
      locale: "en_IN",
      siteName: "Refurnish",
      url: path,
      images: [{ url: service.cover, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | Refurnish`,
      description: service.metaDescription,
      images: [service.cover],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

import { getAllPosts } from "@/features/blogs/data";
import { services } from "@/features/services/data";
import { siteUrl } from "@/shared/site-config";

export function GET() {
  const serviceLinks = services
    .map(
      (service) =>
        `- [${service.title}](${siteUrl}/services/${service.slug}): ${service.description}`,
    )
    .join("\n");
  const guideLinks = getAllPosts()
    .map(
      (post) =>
        `- [${post.title}](${siteUrl}/blogs/${post.slug}): ${post.excerpt}`,
    )
    .join("\n");

  const content = `# Refurnish

> Furniture repair and restoration services in Bangalore, Karnataka, India.

Refurnish helps customers assess and restore furniture through wooden furniture restoration, sofa and chair upholstery, furniture repair, polishing, refinishing, repainting, and redesign.

## Key pages

- [Home](${siteUrl}/): Furniture restoration and repair in Bangalore.
- [About Refurnish](${siteUrl}/about): The restoration approach and business information.
- [Services](${siteUrl}/services): Overview of available furniture services.
- [Contact](${siteUrl}/contact): Enquiries and ways to get in touch.
- [Furniture restoration guides](${siteUrl}/blogs): Practical furniture repair and restoration articles.

## Services

${serviceLinks}

## Guides

${guideLinks}

## Contact

- Phone and WhatsApp: +91 76760 45748
- Service location: Bangalore, Karnataka, India

## Discovery

- [XML sitemap](${siteUrl}/sitemap.xml)
- [Robots instructions](${siteUrl}/robots.txt)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

import { notFound } from "next/navigation";
import BlogDetail from "@/features/blogs/components/BlogDetail";
import { blogPosts, getPostBySlug } from "@/features/blogs/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle || post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.excerpt,
      type: "article",
      locale: "en_IN",
      siteName: "Refurnish",
      url: `/blogs/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}

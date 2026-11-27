import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../data";
import "./index.css";

export default function BlogDetail({ post }) {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    image: post.cover,
  };

  return (
    <article className="blog-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container">
        <div className="blog-detail__inner">
          <nav className="blog-detail__crumbs" aria-label="Breadcrumb">
            <Link href="/">Refurnish</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blogs">Blogs</Link>
          </nav>

          <h1 className="blog-detail__title">{post.title}</h1>

          <div className="blog-detail__meta">
            <span className="blog-detail__author">By {post.author}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-detail__tag">{post.category}</span>
          </div>

          <div className="blog-detail__cover">
            <Image
              src={post.cover}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 991px) 100vw, 860px"
            />
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.serviceLinks?.length ? (
            <aside className="blog-detail__links" aria-label="Related services">
              <h2>Related Refurnish services</h2>
              <ul>
                {post.serviceLinks.map(([href, title]) => (
                  <li key={href}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact">Contact Refurnish in Bangalore</Link>
                </li>
              </ul>
            </aside>
          ) : null}

          {post.relatedLinks?.length ? (
            <aside className="blog-detail__links" aria-label="Related blog guides">
              <h2>Continue reading</h2>
              <ul>
                {post.relatedLinks.map(([href, title]) => (
                  <li key={href}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/about">About our furniture restoration approach</Link>
                </li>
              </ul>
            </aside>
          ) : null}

          {post.tags?.length ? (
            <ul className="blog-detail__tags" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}

          <Link className="blog-detail__back" href="/blogs">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}

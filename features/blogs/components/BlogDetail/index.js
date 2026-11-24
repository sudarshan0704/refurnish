import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../data";
import "./index.css";

export default function BlogDetail({ post }) {
  return (
    <article className="blog-detail">
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

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../data";
import "./index.css";

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link className="blog-card__link" href={`/blogs/${post.slug}`}>
        <div className="blog-card__image">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={770}
            height={700}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
          />
          <span className="blog-card__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
        <div className="blog-card__body">
          <div className="blog-card__meta">
            <span>{formatDate(post.date)}</span>
            <span>By {post.author}</span>
          </div>
          <h3 className="blog-card__title">{post.title}</h3>
          <p className="blog-card__excerpt">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

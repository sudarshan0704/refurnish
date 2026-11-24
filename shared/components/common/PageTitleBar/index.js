import Link from "next/link";
import "./index.css";

export default function PageTitleBar({
  title,
  image = "/images/bg/titlebar-img.jpg",
  trail = [],
}) {
  return (
    <section
      className="page-titlebar"
      aria-labelledby="page-title"
      style={{ "--titlebar-image": `url(${image})` }}
    >
      <div className="container">
        <h1 id="page-title">{title}</h1>
        <nav
          className={`page-breadcrumb${trail.length ? " has-trail" : ""}`}
          aria-label="Breadcrumb"
        >
          <Link href="/">Refurnish</Link>
          {trail.map((item) => (
            <span className="page-breadcrumb__item" key={item.href}>
              <span aria-hidden="true">›</span>
              <Link href={item.href}>{item.label}</Link>
            </span>
          ))}
          <span className="page-breadcrumb__current">
            <span aria-hidden="true">›</span>
            <span aria-current="page">{title}</span>
          </span>
        </nav>
      </div>
    </section>
  );
}

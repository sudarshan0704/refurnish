import Image from "next/image";
import Link from "next/link";
import "./index.css";

export default function ServiceCard({ service, href = "/services" }) {
  return (
    <article className="pbmit-service-style-7 pbmit-ele-service">
      <Link
        className="pbminfotech-post-item"
        href={href}
        aria-label={`${service.title}: view details`}
      >
        <div className="pbminfotech-box-content">
          <div className="pbmit-service-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <Image
                  src={service.image}
                  alt={service.alt || service.title}
                  width={620}
                  height={520}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className="pbmit-content-box">
            <h3 className="pbmit-service-title">{service.title}</h3>
            <div className="pbmit-service-description">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
        <span className="pbmit-service-btn" aria-hidden="true">
          <span className="pbmit-button-icon">
            <svg viewBox="0 0 24 24">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </span>
      </Link>
    </article>
  );
}

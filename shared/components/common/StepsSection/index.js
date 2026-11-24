import Image from "next/image";
import Link from "next/link";
import "./index.css";

export default function StepsSection({ id, eyebrow, title, intro, steps, images = [], cta }) {
  return (
    <section className="steps" aria-labelledby={id}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="section-heading text-start steps__heading">
              <p className="eyebrow">{eyebrow}</p>
              <h2 id={id}>{title}</h2>
              {intro ? <p>{intro}</p> : null}
            </div>

            <ol className="steps__list">
              {steps.map((step, index) => (
                <li className="steps__item" key={step.title}>
                  <span className="steps__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            {cta ? (
              <Link className="refurnish-pill-button" href={cta.href}>
                {cta.label}
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </i>
              </Link>
            ) : null}
          </div>

          {images.length ? (
            <div className="col-lg-6" data-aos="fade-left">
              <div className="steps__images">
                {images.map((image) => (
                  <div className="steps__image" key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={720}
                      sizes="(max-width: 991px) 45vw, 24vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

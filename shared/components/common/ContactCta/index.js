import Link from "next/link";
import "./index.css";

export default function ContactCta() {
  return (
    <section className="home-contact-cta" aria-labelledby="home-contact-cta-heading">
      <div className="home-contact-cta__overlay" aria-hidden="true" />
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-xl-8">
            <div className="section-heading home-contact-cta__heading text-start">
              <p className="home-contact-cta__eyebrow">
                Furniture restoration in Bangalore
              </p>
              <h2 id="home-contact-cta-heading">
                Give your favourite furniture a fresh start.
              </h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="home-contact-cta__badge">
              <Link className="home-contact-cta__badge-link" href="/contact">
                <span>Contact</span>
                <span>Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a
        className="home-contact-cta__phone"
        href="tel:+917676045748"
        aria-label="Call Refurnish at +91 76760 45748"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.1 2.8 9.7 8l-2.1 1.6a15.4 15.4 0 0 0 6.8 6.8l1.6-2.1 5.2 2.6-1.1 3.4c-.3.9-1.2 1.5-2.2 1.4C10.4 21.1 2.9 13.6 2.3 6.1c-.1-1 .5-1.9 1.4-2.2l3.4-1.1Z" />
        </svg>
        <span>+91 76760 45748</span>
      </a>
    </section>
  );
}

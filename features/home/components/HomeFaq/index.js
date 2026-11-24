import Link from "next/link";
import { homeFaqs } from "../../data";
import "./index.css";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomeFaq() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="section-heading text-start home-faq__heading">
              <p className="eyebrow">FAQ</p>
              <h2 id="home-faq-heading">Frequently asked questions</h2>
              <p>
                Answers to the questions we hear most about furniture restoration in
                Bangalore.
              </p>
            </div>
            <Link className="refurnish-pill-button" href="/contact">
              Ask Us Something
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </i>
            </Link>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="home-faq__list">
              {homeFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

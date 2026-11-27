import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import EnquiryForm from "@/shared/components/common/EnquiryForm";
import PageTitleBar from "@/shared/components/common/PageTitleBar";
import { whatsappUrl, contactDetails } from "@/features/contact/data";
import { getServiceBySlug, processSteps } from "../../data";
import { serviceStructuredData } from "../../seo";
import "./index.css";

function CheckList({ items }) {
  return (
    <ul className="service-detail__checks">
      {items.map((item) => (
        <li key={item}>
          <FaCircleCheck aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetail({ service }) {
  const related = service.related.map(getServiceBySlug).filter(Boolean);
  const structuredData = serviceStructuredData(service);

  return (
    <>
      {structuredData.map((entry) => (
        <script
          key={entry["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <PageTitleBar
        title={service.pageTitle}
        image={service.banner}
        trail={[{ label: "Services", href: "/services" }]}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__layout">
            <article className="service-detail__main">
              <div className="service-detail__cover">
                <Image
                  src={service.cover}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 70vw"
                />
              </div>

              <h2>{service.heading}</h2>
              {service.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}

              {service.scopeHeading ? (
                <>
                  <h2>{service.scopeHeading}</h2>
                  <p>{service.scopeIntro}</p>
                </>
              ) : null}

              {service.idealFor?.length ? (
                <>
                  <h2>Who this service is ideal for</h2>
                  <CheckList items={service.idealFor} />
                </>
              ) : null}

              {service.materials?.length ? (
                <>
                  <h2>Furniture and materials we work with</h2>
                  <CheckList items={service.materials} />
                </>
              ) : null}

              <h2>Problems we solve</h2>
              <CheckList items={service.problems} />

              <h2>What our {service.title.toLowerCase()} service includes</h2>
              <CheckList items={service.includes} />

              <h2>Benefits</h2>
              <div className="service-detail__benefits">
                {service.benefits.map((benefit) => (
                  <div className="service-detail__benefit" key={benefit.title}>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                ))}
              </div>

              <h2>How it works</h2>
              <ol className="service-detail__steps">
                {processSteps.map((step, index) => (
                  <li key={step.title}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2>{service.title} in Bangalore</h2>
              <p>
                We serve customers in Bangalore and Bengaluru. The exact work depends on
                the furniture, its condition and the result you want. Send photos of the
                whole piece and close-ups of the damage so we can assess whether repair,
                restoration, polishing, refinishing or upholstery is the appropriate next step.
                You can also read{" "}
                <Link href="/about">about Refurnish and our restoration approach</Link>{" "}
                before requesting an assessment.
              </p>

              {service.blogLinks?.length ? (
                <>
                  <h2>Related furniture care and decision guides</h2>
                  <ul className="service-detail__related">
                    {service.blogLinks.map(([slug, title]) => (
                      <li key={slug}>
                        <Link href={`/blogs/${slug}`}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <h2>Frequently asked questions</h2>
              <div className="service-detail__faqs">
                {service.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              <div className="service-detail__cta">
                <h2>Don&apos;t replace it. Refurnish it.</h2>
                <p>
                  Share photos of your furniture and tell us what you would like done. Call
                  us on{" "}
                  <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a> or
                  message us on WhatsApp.
                </p>
                <a
                  className="service-detail__cta-button"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share your furniture photos
                </a>
              </div>

              <h2>Explore our other services</h2>
              <ul className="service-detail__related">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`}>{item.pageTitle}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/services">All furniture restoration services</Link>
                </li>
                <li>
                  <Link href="/blogs">Furniture care tips and guides</Link>
                </li>
                <li>
                  <Link href="/about">Our approach to furniture restoration</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Refurnish in Bangalore</Link>
                </li>
              </ul>
            </article>

            <aside className="service-detail__aside" aria-label="Enquiry form">
              <EnquiryForm service={service.title} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

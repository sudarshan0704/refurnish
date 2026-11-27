import Link from "next/link";
import { services } from "@/features/services/data";
import { serviceAreas } from "../../data";
import "./index.css";

export default function HomeServiceArea() {
  return (
    <section className="service-area" aria-labelledby="service-area-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="section-heading text-start service-area__heading">
              <p className="eyebrow">Service Area</p>
              <h2 id="service-area-heading">Furniture restoration across Bangalore</h2>
              <p>
                Refurnish provides furniture repair and restoration services in Bangalore,
                Karnataka. Tell us where you are and send a few photos so we can confirm
                the piece and the work you need.
              </p>
            </div>

            <ul className="service-area__services" aria-label="Services in Bangalore">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>

            {serviceAreas.length ? (
              <div className="service-area__areas">
                <h3>Areas we serve</h3>
                <ul>
                  {serviceAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <Link className="refurnish-pill-button" href="/contact">
              Check Your Location
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </i>
            </Link>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="service-area__map">
              <iframe
                src="https://maps.google.com/maps?q=Bangalore%2C%20Karnataka%2C%20India&t=m&z=11&output=embed"
                title="Map of Bangalore, Karnataka, India"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import ServiceCard from "@/shared/components/common/ServiceCard";
import { services } from "../../data";
import "./index.css";

export default function ServicesList() {
  return (
    <section className="services-list" aria-labelledby="services-list-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2 id="services-list-heading">Furniture restoration services in Bangalore</h2>
          <p>
            Wooden furniture, sofas, chairs and cabinets. Whatever your piece needs, we can
            repair it, refinish it, re-cover it or redesign it, so you keep using what you
            already own.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.slug}>
              <ServiceCard service={service} href={`/services/${service.slug}`} />
            </div>
          ))}
        </div>
        <p className="services-list__cta">
          Not sure which service your furniture needs?{" "}
          <Link href="/contact">Send us a few photos.</Link>
        </p>
      </div>
    </section>
  );
}

import ServiceCard from "@/shared/components/common/ServiceCard";
import { homeServices } from "../../data";
import "./index.css";

export default function HomeServices() {
  return (
    <section className="service-section-nine" aria-labelledby="home-services-heading">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Our Services</p>
          <h2 id="home-services-heading">From worn out to worth keeping</h2>
          <p>Six services for furniture you already own.</p>
        </div>
        <div className="row g-4">
          {homeServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 120}
            >
              <ServiceCard service={service} href={`/services/${service.slug}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

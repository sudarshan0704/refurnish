import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { contactDetails, whatsappUrl } from "@/features/contact/data";
import { services } from "@/features/services/data";
import CurrentYear from "./CurrentYear";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="row gy-5 gx-4 gx-xl-5">
            <div className="col-md-6 col-lg-4 order-md-1">
              <Link href="/" className="footer-logo" aria-label="Refurnish home">
                <Image src="/logo-new-webp.webp" alt="Refurnish" width={2048} height={764} />
              </Link>
              <p className="footer-company-copy">
                We restore, repair, refinish and redesign furniture in Bangalore, so you can
                keep the pieces you already own.
              </p>
              <a
                className="footer-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="col-6 col-md-6 col-lg-2 order-md-3 order-lg-2">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-md-6 col-lg-3 order-md-4 order-lg-3">
              <h2 className="footer-heading">Our Services</h2>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 order-md-2 order-lg-4">
              <h2 className="footer-heading">Get in Touch</h2>
              <ul className="footer-contact">
                <li>
                  <FaLocationDot aria-hidden="true" />
                  <span>{contactDetails.location}</span>
                </li>
                <li>
                  <FaPhone aria-hidden="true" />
                  <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
                </li>
                {contactDetails.email ? (
                  <li>
                    <FaEnvelope aria-hidden="true" />
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <p>
            © <CurrentYear /> Refurnish. All rights reserved.
          </p>
          <p>Furniture restoration in Bangalore, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}

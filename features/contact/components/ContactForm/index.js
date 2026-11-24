"use client";

import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { detailItems, serviceOptions, whatsappUrl } from "../../data";
import "./index.css";

const icons = {
  location: FaLocationDot,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Hello Refurnish, I would like to enquire about furniture restoration.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : null,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].filter((line) => line !== null);

    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Opening WhatsApp with your enquiry. You can attach photos of your furniture there.");
  }

  return (
    <section className="contact-main" aria-labelledby="contact-heading">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          <div className="col-xl-5">
            <div className="contact-details">
              <div className="section-heading text-start">
                <p className="eyebrow">Contact Us</p>
                <h2 id="contact-heading">Let&apos;s talk about your furniture</h2>
                <p>
                  Call, message us on WhatsApp or send an enquiry. Share what needs
                  restoring, repairing or refinishing and we will get back to you.
                </p>
              </div>
              <ul className="contact-details__list">
                {detailItems.map((item) => {
                  const Icon = icons[item.icon];
                  const content = (
                    <>
                      <span className="contact-details__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="contact-details__text">
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-xl-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="contact-form__title">Send an Enquiry</h2>
              <p className="contact-form__intro">
                Fill in the details below and we will open WhatsApp with your message ready
                to send.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="contact-label" htmlFor="contact-name">
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    className="contact-field"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="contact-label" htmlFor="contact-phone">
                    Phone number *
                  </label>
                  <input
                    id="contact-phone"
                    className="contact-field"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="contact-label" htmlFor="contact-email">
                    Email (optional)
                  </label>
                  <input
                    id="contact-email"
                    className="contact-field"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                </div>
                <div className="col-md-6">
                  <label className="contact-label" htmlFor="contact-service">
                    Service you need
                  </label>
                  <select
                    id="contact-service"
                    className="contact-field"
                    name="service"
                    defaultValue={serviceOptions[serviceOptions.length - 1]}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="contact-label" htmlFor="contact-message">
                    About your furniture *
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact-field contact-field--message"
                    name="message"
                    rows="5"
                    placeholder="What is the piece, what condition is it in and what would you like done?"
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="contact-submit" type="submit">
                    Send on WhatsApp
                    <i aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </i>
                  </button>
                  <p className="contact-form__status" role="status">
                    {status}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

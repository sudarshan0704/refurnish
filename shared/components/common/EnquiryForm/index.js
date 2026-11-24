"use client";

import { useId, useState } from "react";
import { whatsappUrl } from "@/features/contact/data";
import "./index.css";

export default function EnquiryForm({ service, title = "Get a Free Quote" }) {
  const id = useId();
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Hello Refurnish, I would like to enquire about ${service || "furniture restoration"}.`,
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("message") ? "" : null,
      data.get("message") ? `${data.get("message")}` : null,
    ].filter((line) => line !== null);

    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Opening WhatsApp. You can attach photos of your furniture there.");
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <h2 className="enquiry-form__title">{title}</h2>
      <p className="enquiry-form__intro">
        Tell us about your furniture and we will get back to you.
      </p>
      <label className="enquiry-form__label" htmlFor={`${id}-name`}>
        Your name *
      </label>
      <input
        id={`${id}-name`}
        className="enquiry-form__field"
        type="text"
        name="name"
        autoComplete="name"
        required
      />
      <label className="enquiry-form__label" htmlFor={`${id}-phone`}>
        Phone number *
      </label>
      <input
        id={`${id}-phone`}
        className="enquiry-form__field"
        type="tel"
        name="phone"
        autoComplete="tel"
        required
      />
      <label className="enquiry-form__label" htmlFor={`${id}-message`}>
        About your furniture
      </label>
      <textarea
        id={`${id}-message`}
        className="enquiry-form__field enquiry-form__field--message"
        name="message"
        rows="3"
        placeholder="What needs doing?"
      />
      <button className="enquiry-form__submit" type="submit">
        Send on WhatsApp
      </button>
      <p className="enquiry-form__status" role="status">
        {status}
      </p>
    </form>
  );
}

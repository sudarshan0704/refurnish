import { FaWhatsapp } from "react-icons/fa6";
import { contactDetails, whatsappUrl } from "@/features/contact/data";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello Refurnish, I would like to enquire about furniture restoration.",
  );

  return (
    <a
      className="whatsapp-float"
      href={`${whatsappUrl}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Refurnish on WhatsApp, ${contactDetails.phoneDisplay}`}
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

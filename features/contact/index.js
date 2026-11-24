import PageTitleBar from "@/shared/components/common/PageTitleBar";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export default function ContactPage() {
  return (
    <>
      <PageTitleBar title="Contact Us" image="/images/banners/contact.jpg" />
      <ContactForm />
      <ContactMap />
    </>
  );
}

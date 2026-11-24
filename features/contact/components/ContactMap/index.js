import "./index.css";

export default function ContactMap() {
  return (
    <section className="contact-map" aria-label="Refurnish service area map">
      <div className="container">
        <iframe
          src="https://maps.google.com/maps?q=Bangalore%2C%20Karnataka%2C%20India&t=m&z=11&output=embed"
          title="Map of Bangalore, Karnataka, India"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

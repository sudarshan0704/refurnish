import Image from "next/image";
import Link from "next/link";
import {
  FaChair,
  FaCouch,
  FaLocationDot,
  FaPaintbrush,
  FaScrewdriverWrench,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import "./index.css";

const points = [
  {
    icon: FaChair,
    title: "Keep What You Own",
    text: "We work on furniture you already have, so you can restore it instead of replacing it.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Fix the Wear",
    text: "Loose joints, scratched surfaces and tired frames are repaired as part of the job.",
  },
  {
    icon: FaCouch,
    title: "New Upholstery",
    text: "Re-cover a sofa or chair in fabric or leather chosen to suit your room.",
  },
  {
    icon: FaPaintbrush,
    title: "New Finish",
    text: "Polishing and refinishing bring back wood surfaces or change the look of a piece.",
  },
  {
    icon: FaWandMagicSparkles,
    title: "Made to Fit",
    text: "Makeover work adapts a familiar piece to your home's style and daily needs.",
  },
  {
    icon: FaLocationDot,
    title: "Based in Bangalore",
    text: "Restoration, repair and makeover services for homes across Bangalore.",
  },
];

function PointList({ items, animation }) {
  return (
    <div className="why-choose__list">
      {items.map((point, index) => {
        const Icon = point.icon;

        return (
          <article
            className="why-choose__item"
            key={point.title}
            data-aos={animation}
            data-aos-delay={index * 120}
          >
            <span className="why-choose__icon" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <h3 className="refurnish-h3">{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="row align-items-start why-choose__top" data-aos="fade-up">
          <div className="col-xl-4">
            <div className="section-heading text-start why-choose__heading">
              <p className="eyebrow">Why Choose Us</p>
              <h2 id="why-choose-heading">Why restore with Refurnish</h2>
            </div>
          </div>
          <div className="col-xl-6">
            <p className="why-choose__desc">
              We repair, refinish and re-cover the furniture you already own, so you keep
              what you like and lose what is worn.
            </p>
          </div>
          <div className="col-xl-2 d-xl-flex justify-content-xl-end">
            <Link className="refurnish-pill-button" href="/contact">
              Get a Quote
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </i>
            </Link>
          </div>
        </div>

        <div className="row align-items-center g-4 why-choose__body">
          <div className="col-lg-3 order-2 order-lg-1">
            <PointList items={points.slice(0, 3)} animation="fade-right" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="why-choose__image" data-aos="zoom-in">
              <Image
                src="/images/home/why-choose/centre-furniture.png"
                alt="Armchairs and plants arranged around a small table"
                width={660}
                height={660}
                sizes="(max-width: 991px) 90vw, 50vw"
              />
            </div>
          </div>
          <div className="col-lg-3 order-3">
            <PointList items={points.slice(3)} animation="fade-left" />
          </div>
        </div>
      </div>
    </section>
  );
}

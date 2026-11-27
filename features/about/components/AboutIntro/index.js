import Image from "next/image";
import Link from "next/link";
import { FaCouch, FaHammer, FaTree } from "react-icons/fa6";
import { introPoints } from "../../data";
import "./index.css";

const icons = { tree: FaTree, hammer: FaHammer, couch: FaCouch };

export default function AboutIntro() {
  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4">
            <div className="section-heading text-start about-intro__copy">
              <p className="eyebrow">About Refurnish</p>
              <h2 id="about-intro-heading">Don&apos;t replace it. Refurnish it.</h2>
              <p>
                Refurnish is a Bangalore furniture restoration business focused on repair,
                restoration, upholstery, polishing and refinishing. We begin by looking at
                the structure and condition of the piece, then recommend a practical plan
                for the damage and the result you want.
              </p>
              <p>
                We work on furniture that is worth keeping for its comfort, usefulness,
                material or sentimental value. Where a piece is sound, we help restore its
                function and appearance instead of automatically replacing it.
              </p>
            </div>
            <Link className="refurnish-pill-button" href="/services">
              Our Services
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </i>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="about-intro__image">
              <Image
                src="/images/home/about-img.webp"
                alt="Restored sofa and wooden furniture in a refreshed living room"
                width={520}
                height={620}
                sizes="(max-width: 1199px) 90vw, 30vw"
                priority
              />
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <ul className="about-intro__points">
              {introPoints.map((point) => {
                const Icon = icons[point.icon];

                return (
                  <li key={point.word}>
                    <span className="about-intro__label">
                      <Icon aria-hidden="true" />
                      {point.label}
                    </span>
                    <strong>{point.word}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

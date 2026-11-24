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
                We restore, repair, refinish and redesign furniture in Bangalore. Old
                sofas, wooden tables and worn chairs often have good structure and a
                story worth keeping. With the right craftsmanship, they can look fresh
                again without the cost of buying new.
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

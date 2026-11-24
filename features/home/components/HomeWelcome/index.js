import Image from "next/image";
import Link from "next/link";
import { FaChair, FaHammer, FaPalette, FaScrewdriverWrench } from "react-icons/fa6";
import { welcomeFeatures } from "../../data";
import "./index.css";

export default function HomeWelcome() {
  const featureIcons = [FaChair, FaHammer, FaPalette, FaScrewdriverWrench];

  return (
    <section className="home-welcome" aria-labelledby="welcome-heading">
      <div className="container">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="welcome-copy section-heading text-start">
              <p className="eyebrow">Welcome to Refurnish</p>
              <h2 id="welcome-heading">Old furniture, restored not replaced.</h2>
              <p>
                Refurnish restores, repairs and refinishes furniture in Bangalore. If a piece
                still has good bones, we fix what is worn and renew the finish or fabric.
              </p>
              <Link className="welcome-cta" href="/about">
                <span>About Us</span>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 19 19 5M8 5h11v11" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>

          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div className="welcome-image">
              <Image
                src="/images/home/about-img.webp"
                alt="Restored sofa and wooden furniture in a refreshed Bangalore living space"
                fill
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-left" data-aos-delay="150">
            <div className="welcome-features">
              {welcomeFeatures.map((feature, index) => {
                const FeatureIcon = featureIcons[index];

                return (
                  <article className="welcome-feature" key={feature.title}>
                    <span className="welcome-feature-icon" aria-hidden="true">
                      <FeatureIcon />
                    </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

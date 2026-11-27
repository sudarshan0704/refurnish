import Image from "next/image";
import { FaPiggyBank, FaRecycle } from "react-icons/fa6";
import { beliefPoints } from "../../data";
import "./index.css";

const icons = { recycle: FaRecycle, piggy: FaPiggyBank };

export default function AboutBelief() {
  return (
    <section className="about-belief" aria-labelledby="about-belief-heading">
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-xl-6">
            <div className="about-belief__panel">
              <p className="eyebrow">Why restoration</p>
              <h2 id="about-belief-heading">Old furniture is worth a second life.</h2>
              <p>
                Restoration starts with a careful assessment, not a fixed package. A solid
                wooden table may need joint repair and refinishing, while a comfortable sofa
                may need a frame check and new upholstery. We explain the work required and
                keep the finish appropriate to the piece.
              </p>
              <p>
                Our approach is practical: preserve good structure, repair damage properly,
                prepare surfaces carefully and use the right finish or fabric for the intended
                use. The aim is to help furniture return to daily use without unnecessary
                replacement.
              </p>
              <div className="about-belief__badges">
                {beliefPoints.map((point) => {
                  const Icon = icons[point.icon];

                  return (
                    <div className="about-belief__badge" key={point.icon}>
                      <span className="about-belief__ring" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3>{point.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-belief__image">
              <Image
                src="/images/about/before.png"
                alt="Bright living room with refreshed wooden furniture"
                fill
                sizes="(max-width: 1199px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

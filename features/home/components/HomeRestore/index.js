import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { restoreBenefits } from "../../data";
import "./index.css";

export default function HomeRestore() {
  return (
    <section className="home-restore" aria-labelledby="home-restore-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="home-restore__image">
              <Image
                src="/images/blog/post-5-cover.jpg"
                alt="Living room with a sofa, cushions and a glass coffee table"
                width={900}
                height={1000}
                sizes="(max-width: 991px) 90vw, 40vw"
              />
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="section-heading text-start home-restore__heading">
              <p className="eyebrow">Restore vs Replace</p>
              <h2 id="home-restore-heading">Why restore instead of replace?</h2>
              <p>
                A new sofa or table is not always the answer. Here is why restoring
                furniture you already own is worth considering.
              </p>
            </div>

            <ul className="home-restore__list">
              {restoreBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <FaCircleCheck aria-hidden="true" />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="home-restore__actions">
              {/* <Link className="refurnish-pill-button" href="/blogs/restore-or-replace-old-furniture">
                Read the Repair vs Replacement Guide
              </Link> */}
              <Link className="refurnish-pill-button" href="/contact">
                Ask About Your Furniture
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

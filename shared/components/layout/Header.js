import Link from "next/link";
import Image from "next/image";
import StickyHeader from "./StickyHeader";
import MobileMenuClose from "./MobileMenuClose";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
      <div className="header-inner">
        <nav className="navbar navbar-expand-xl" aria-label="Main navigation">
          <Link className="navbar-brand" href="/" aria-label="Refurnish home">
            <Image src="/logo-new-webp.webp" alt="Refurnish" width={2048} height={764} priority />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav header-menu">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/blogs">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
            <div className="header-actions">
              <a className="header-phone" href="tel:+917676045748" aria-label="Call Refurnish">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.1 2.8 9.7 8l-2.1 1.6a15.4 15.4 0 0 0 6.8 6.8l1.6-2.1 5.2 2.6-1.1 3.4c-.3.9-1.2 1.5-2.2 1.4C10.4 21.1 2.9 13.6 2.3 6.1c-.1-1 .5-1.9 1.4-2.2l3.4-1.1Z" />
                </svg>
                <span>+91 76760 45748</span>
              </a>
              <Link className="header-cta" href="/contact">
                <span>Book Now</span>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 19 19 5M8 5h11v11" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      </div>
      <StickyHeader />
      <MobileMenuClose />
    </header>
  );
}

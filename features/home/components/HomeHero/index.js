"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { heroSlides } from "../../data";
import "./index.css";

export default function HomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="home-hero" aria-label="Furniture restoration services">
        <div className="home-hero-slide">
          <Image
            src={heroSlides[0].image}
            alt={heroSlides[0].alt}
            fill
            priority
            sizes="100vw"
          />
          <div className="home-hero-overlay" />
          <div className="container home-hero-content-wrap">
            <div className="home-hero-content">
              <p className="home-hero-eyebrow">{heroSlides[0].eyebrow}</p>
              <h1>
                {heroSlides[0].title}
                <span>{heroSlides[0].highlight}</span>
              </h1>
              <p className="home-hero-description">{heroSlides[0].description}</p>
              <div className="home-hero-actions">
                <Link className="hero-primary-cta" href="/services">
                  View Services
                  <span aria-hidden="true">→</span>
                </Link>
                <Link className="hero-secondary-cta" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="home-hero" aria-label="Furniture restoration services">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={900}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="home-hero-slider"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="home-hero-slide">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
              />
              <div className="home-hero-overlay" />
              <div className="container home-hero-content-wrap">
                <div className="home-hero-content">
                  <p className="home-hero-eyebrow">{slide.eyebrow}</p>
                  <h1>
                    {slide.title}
                    <span>{slide.highlight}</span>
                  </h1>
                  <p className="home-hero-description">{slide.description}</p>
                  <div className="home-hero-actions">
                    <Link className="hero-primary-cta" href="/services">
                      View Services
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link className="hero-secondary-cta" href="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

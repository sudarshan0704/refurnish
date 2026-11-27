"use client";

import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { homeReviews } from "../../data";
import "./index.css";

function ReviewCard({ review }) {
  return (
    <article className="home-reviews__card">
      <div className="home-reviews__rating" aria-label={`${review.rating}-star rating`}>
        <span className="home-reviews__stars" aria-hidden="true">
          {Array.from({ length: review.rating }, (_, index) => (
            <svg key={index} viewBox="0 0 24 24">
              <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
            </svg>
          ))}
        </span>
      </div>
      <blockquote>
        <p>{review.quote}</p>
      </blockquote>
      <div className="home-reviews__author">
        <span className="home-reviews__author-name">{review.author}</span>
        <span>{review.location}</span>
      </div>
    </article>
  );
}

export default function HomeReviews() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="home-reviews" aria-labelledby="home-reviews-heading">
      <div className="container">
        <div className="section-heading home-reviews__heading" data-aos="fade-up">
          <p className="eyebrow">Client Reviews</p>
          <h2 id="home-reviews-heading">What our clients say</h2>
        </div>
        {mounted ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 16 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 24 },
            }}
            loop={false}
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="home-reviews__slider"
          >
            {homeReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="home-reviews__static-grid">
            {homeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

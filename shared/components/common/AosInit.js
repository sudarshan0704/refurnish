"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    let timer;

    // Start only after the page has fully loaded and React has hydrated, so AOS
    // never changes the markup before React has finished with it.
    const start = () => {
      timer = setTimeout(() => {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          offset: 60,
          once: true,
          disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
      }, 250);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", start);
    };
  }, []);

  return null;
}

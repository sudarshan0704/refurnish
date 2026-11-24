"use client";

import { useEffect } from "react";

/*
 * Makes the header stick to the top once the visitor has scrolled a little.
 * While it is stuck, an empty space of the same height is kept in its place,
 * so the page content does not jump.
 */
export default function StickyHeader() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const bar = header?.querySelector(".site-header__bar");
    const navbar = bar?.querySelector(".navbar");

    if (!header || !bar || !navbar) {
      return undefined;
    }

    let stuck = false;
    let waiting = false;

    const update = () => {
      waiting = false;
      const y = window.scrollY;

      if (!stuck && y > 180) {
        const height = parseFloat(getComputedStyle(navbar).minHeight) || bar.offsetHeight;
        header.style.height = `${height}px`;
        bar.classList.add("is-stuck");
        stuck = true;
      } else if (stuck && y < 60) {
        bar.classList.remove("is-stuck");
        header.style.height = "";
        stuck = false;
      }
    };

    const onScroll = () => {
      if (!waiting) {
        waiting = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.classList.remove("is-stuck");
      header.style.height = "";
    };
  }, []);

  return null;
}

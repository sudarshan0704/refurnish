"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Closes the mobile menu after a link inside it is tapped, and also whenever
 * the route changes (back/forward buttons, links elsewhere on the page).
 */
export default function MobileMenuClose() {
  const pathname = usePathname();

  const closeMenu = () => {
    const toggler = document.querySelector(".site-header .navbar-toggler");
    const menu = document.getElementById("main-nav");

    if (toggler && menu && menu.classList.contains("show")) {
      toggler.click();
    }
  };

  useEffect(() => {
    const menu = document.getElementById("main-nav");

    if (!menu) {
      return undefined;
    }

    const onClick = (event) => {
      if (event.target.closest("a")) {
        closeMenu();
      }
    };

    menu.addEventListener("click", onClick);

    return () => menu.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return null;
}

"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/*
 * Shows the current year, read in the visitor's browser so it never goes out
 * of date. The static page is built with `fallback`, which is only visible for
 * a moment before the real year replaces it.
 */
export default function CurrentYear({ fallback = 2026 }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );

  return <>{year}</>;
}

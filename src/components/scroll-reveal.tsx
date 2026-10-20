"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll reveal.
 *
 * Any element with `data-reveal` fades/slides in when it scrolls into view.
 * Optional: `data-reveal-delay="120"` (ms) to stagger items.
 * Respects prefers-reduced-motion and falls back to visible if unsupported.
 */
export function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add("is-revealed");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

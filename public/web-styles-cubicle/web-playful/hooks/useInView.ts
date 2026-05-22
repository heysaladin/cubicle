"use client";

import { useEffect } from "react";

export function useInView(selector = "[data-inview]") {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

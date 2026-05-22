"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "outfit_v";
// Matches preloader lift start: 6*90 + 680 + 6*90 = 2440ms — start hero as overlay rises
const PRELOADER_MS = 2400;

export function HeroReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Read sessionStorage during render (before effects) — preloader hasn't run yet
  const isFirstVisit = useRef(
    typeof window !== "undefined" ? !sessionStorage.getItem(SESSION_KEY) : false
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(
      () => setReady(true),
      isFirstVisit.current ? PRELOADER_MS : 80
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <div data-hero-ready={ready ? "true" : undefined} className={className}>
      {children}
    </div>
  );
}

"use client";

import { useCallback, useRef } from "react";
import { animation } from "@/lib/tokens";

const DUR = parseInt(animation.duration);

export function usePageTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((el: HTMLDivElement | null) => {
    overlayRef.current = el;
  }, []);

  const cover = useCallback((cb?: () => void) => {
    const el = overlayRef.current;
    if (!el) { cb?.(); return; }
    el.classList.remove("uncovering");
    el.classList.add("covering");
    if (cb) setTimeout(cb, DUR);
  }, []);

  const uncover = useCallback(() => {
    const el = overlayRef.current;
    if (!el) return;
    el.classList.remove("covering");
    el.classList.add("uncovering");
  }, []);

  return { setRef, cover, uncover };
}

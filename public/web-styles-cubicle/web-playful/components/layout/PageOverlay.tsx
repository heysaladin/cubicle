"use client";

import { useEffect } from "react";
import { usePageTransition } from "@/hooks/usePageTransition";

export function PageOverlay() {
  const { setRef, uncover } = usePageTransition();

  useEffect(() => {
    uncover();
  }, [uncover]);

  return <div id="page-overlay" ref={setRef} aria-hidden />;
}

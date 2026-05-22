"use client";

import { useCustomCursor } from "@/hooks/useCustomCursor";

export function CustomCursor() {
  const cursorRef = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[99999] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-3 w-3 rounded-full bg-red" />
    </div>
  );
}

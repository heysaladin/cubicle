"use client";

import { useEffect, useRef, useState } from "react";
import { animation } from "@/lib/tokens";

const SESSION_KEY = "outfit_v";

export function usePreloader() {
  const [phase, setPhase] = useState<"fan-out" | "fan-back" | "done" | "skip">(
    "skip"
  );
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => timerRef.current.forEach(clearTimeout);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("skip");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("fan-out");

    const count = animation.preloaderAngles.length;
    const stagger = animation.preloaderStagger;
    const dur = parseInt(animation.duration);

    // fan-back starts after all fan-outs finish
    const t1 = setTimeout(() => setPhase("fan-back"), stagger * count + dur);
    // done starts after fan-backs finish
    const t2 = setTimeout(
      () => setPhase("done"),
      stagger * count + dur + stagger * count + dur
    );
    timerRef.current = [t1, t2];
    return clear;
  }, []);

  return phase;
}

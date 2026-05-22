"use client";

import { useEffect, useRef, useState } from "react";
import { OutfitSvg } from "@/components/svg/OutfitSvg";

const IMAGES = [
  "/images/preloader_image-01.jpg",
  "/images/preloader_image-02.jpg",
  "/images/preloader_image-03.jpg",
  "/images/preloader_image-04.jpg",
  "/images/preloader_image-05.jpg",
  "/images/preloader_image-06.jpg",
];

const ANGLES = [7.14872, 15.5864, -9.1843, 16.2898, 4.6767, -3.96615];
const STAGGER = 90;
const DUR = 680;
const SESSION_KEY = "outfit_v";

type Phase = "idle" | "fan-out" | "fan-back" | "lift";

export function Preloader() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visible, setVisible] = useState(IMAGES.map(() => false));
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    const count = IMAGES.length;
    setPhase("fan-out");

    IMAGES.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisible((prev) => prev.map((v, idx) => (idx === i ? true : v)));
      }, i * STAGGER);
      timers.current.push(t);
    });

    const fanOutEnd = count * STAGGER + DUR;
    IMAGES.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisible((prev) => prev.map((v, idx) => (idx === count - 1 - i ? false : v)));
      }, fanOutEnd + i * STAGGER);
      timers.current.push(t);
    });

    const liftTimer = setTimeout(() => setPhase("lift"), fanOutEnd + count * STAGGER + DUR);
    timers.current.push(liftTimer);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      aria-hidden
      className="dark:bg-cream dark:text-black text-cream fixed inset-0 z-50 flex items-center justify-center gap-8 bg-black"
      style={{
        clipPath: phase === "lift" ? "inset(0% 0% 100%)" : "inset(0% 0% 0%)",
        transition: `clip-path ${DUR}ms cubic-bezier(0.87, 0, 0.13, 1)`,
        contain: "layout style paint",
        pointerEvents: phase === "lift" ? "none" : "all",
      }}
    >
      {/* Stacked rotating images */}
      <div className="relative">
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ contain: "layout paint style" }}
        >
          {IMAGES.map((src, i) => (
            <img
              key={src}
              alt=""
              loading="eager"
              width={450}
              height={600}
              className="absolute aspect-[9/12] w-[30vw] object-cover md:w-[12vw]"
              style={{
                willChange: "transform",
                transform: `translate3d(0,0,0) rotate(${ANGLES[i]}deg) scale(${visible[i] ? "1,1" : "0,0"})`,
                transition: `transform ${DUR}ms cubic-bezier(0.87, 0, 0.13, 1)`,
              }}
              src={src}
            />
          ))}
        </div>

        {/* OUTFIT SVG title */}
        <div className="overflow-hidden">
          <OutfitSvg className="dark:fill-red fill-cream relative mx-auto max-w-[70%] overflow-visible mix-blend-difference md:max-w-none dark:mix-blend-multiply w-[28rem]" />
        </div>
      </div>
    </div>
  );
}

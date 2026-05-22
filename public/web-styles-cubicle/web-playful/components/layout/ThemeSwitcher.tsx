"use client";

import { useEffect, useRef } from "react";
import { useTheme, type Theme } from "@/context/ThemeContext";

const THEMES: { id: Theme; bg: string; shadow: string }[] = [
  { id: "dark", bg: "bg-black", shadow: "shadow-[inset_0_0_0_0.05em_black]" },
  { id: "light", bg: "bg-cream", shadow: "shadow-[inset_0_0_0_0.05em_black]" },
  { id: "red", bg: "bg-red", shadow: "shadow-[inset_0_0_0_0.05em_#ff0001]" },
];

interface ThemeSwitcherProps {
  size?: "sm" | "lg";
}

export function ThemeSwitcher({ size = "sm" }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const dotRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const btnSize = size === "sm" ? "h-[1.125rem] w-[1.125rem]" : "h-[4.25rem] w-[4.25rem]";
  const dotSize = size === "sm" ? "h-1 w-1" : "h-2 w-2";

  useEffect(() => {
    if (!dotRef.current || !containerRef.current) return;
    const idx = THEMES.findIndex((t) => t.id === theme);
    const btns = containerRef.current.querySelectorAll("button");
    const btn = btns[idx];
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const parentRect = containerRef.current.getBoundingClientRect();
    const x = rect.left - parentRect.left + rect.width / 2 - (size === "sm" ? 2 : 4);
    const y = rect.top - parentRect.top + rect.height / 2 - (size === "sm" ? 2 : 4);
    dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [theme, size]);

  return (
    <div ref={containerRef} className="relative flex gap-1">
      <span
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full pointer-events-none z-10 ${dotSize} bg-cream transition-transform duration-200 ease-out`}
        style={{ border: size === "lg" ? "1px solid #ede4dd" : undefined }}
      />
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-label={`Switch to ${t.id} theme`}
          className={`inline-block rounded-full transition-all duration-200 ease-out hover:scale-110 ${btnSize} ${t.bg} ${t.shadow}`}
        />
      ))}
    </div>
  );
}

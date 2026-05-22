"use client";

import React from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

export function TextReveal({
  children,
  by = "word",
  delay = 0,
  stagger = 55,
  className,
  as: As = "span",
}: {
  children: string;
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: Tag;
}) {
  const parts = by === "char" ? children.split("") : children.split(" ");

  return (
    <As className={className}>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          <span className="reveal-clip">
            <span
              className="reveal-inner"
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {part}
            </span>
          </span>
          {by === "word" && i < parts.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </As>
  );
}

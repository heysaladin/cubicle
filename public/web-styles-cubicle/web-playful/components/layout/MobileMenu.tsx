"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface MobileMenuProps {
  open: boolean;
  bagCount?: number;
  currentPath?: string;
}

export function MobileMenu({ open, bagCount = 0, currentPath = "/" }: MobileMenuProps) {
  return (
    <div
      className="fixed inset-0 z-[2] flex h-dvh w-full items-center justify-center bg-black text-white dark:bg-white dark:text-black red:bg-red red:text-white"
      style={{
        clipPath: open
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "clip-path 0.5s cubic-bezier(0.83, 0, 0.17, 1), opacity 0.3s ease, visibility 0.3s ease",
      }}
    >
      <div className="flex h-dvh w-full flex-col justify-between px-4 py-8 lg:px-6">
        <ul className="mt-20 flex w-full flex-col text-6xl font-normal tracking-tight">
          <li className="overflow-hidden">
            <Link
              className="link-hover block w-fit py-2"
              href="/"
              data-selected={currentPath === "/" ? "true" : undefined}
              style={{
                transform: open ? "translate(0px, 0px)" : "translate(0px, -80px)",
                opacity: open ? 1 : 0,
                transition: "transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.1s, opacity 0.5s ease 0.1s",
              }}
            >
              Shop
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link
              className="link-hover block w-fit"
              href="/bag"
              data-selected={currentPath === "/bag" ? "true" : undefined}
              style={{
                transform: open ? "translate(0px, 0px)" : "translate(0px, -80px)",
                opacity: open ? 1 : 0,
                transition: "transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.18s, opacity 0.5s ease 0.18s",
              }}
            >
              Bag {bagCount > 0 && <span>({bagCount})</span>}
            </Link>
          </li>
          <li>
            <div
              className="relative flex gap-5 mt-8"
              style={{
                transform: open ? "translate(0px, 0px)" : "translate(0px, -80px)",
                opacity: open ? 1 : 0,
                transition: "transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.26s, opacity 0.5s ease 0.26s",
              }}
            >
              <ThemeSwitcher size="lg" />
            </div>
          </li>
        </ul>

        <div
          className="grid grid-cols-8 gap-2"
          style={{
            transform: open ? "translate(0px, 0px)" : "translate(0px, 80px)",
            opacity: open ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.1s, opacity 0.5s ease 0.1s",
          }}
        >
          <p className="col-span-4 text-sm">© 2026</p>
          <p className="col-span-4 text-right text-sm">Outfit®</p>
        </div>
      </div>
    </div>
  );
}

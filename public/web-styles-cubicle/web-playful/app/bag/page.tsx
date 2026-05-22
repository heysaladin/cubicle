"use client";

import { useState } from "react";
import Link from "next/link";

interface BagItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

const INITIAL: BagItem[] = [
  {
    id: "kerned-confidence",
    name: "Kerned Confidence",
    variant: "Black / One Size",
    price: 25,
    quantity: 1,
    image: "/images/cap-black-outfit.jpg",
  },
];

function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function BagPage() {
  const [items, setItems] = useState<BagItem[]>(INITIAL);

  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, quantity: Math.max(0, qty) } : i)));

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div data-page="bag">
      <div className="mx-auto mb-20 flex h-full w-full flex-col overflow-hidden px-4 lg:px-6 xl:mb-40">
        {/* ── Header ── */}
        <div className="mt-26 pb-6">
          <div className="text-7xl font-bold tracking-tighter uppercase">
            <span className="sr-only">Your Bag</span>
            {/* YOUR BAG as large text matching the SVG style */}
            <h1 className="text-7xl font-bold tracking-tighter uppercase xl:text-9xl">
              Your Bag
            </h1>
            <div id="hero-line-bag" className="mt-6 mb-6 h-[5px] w-full origin-left bg-current" />
          </div>
        </div>

        {/* ── Items ── */}
        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mb-8 text-xl">Your bag is empty.</p>
            <Link className="link-hover uppercase text-sm" href="/">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            <ul id="bag-items-list" className="py-12 [&>li:first-child]:pt-0">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-8 gap-4 border-b-[3px] border-current pt-12 pb-4 text-xl leading-6 xl:grid-cols-16 xl:text-4xl xl:leading-10"
                >
                  {/* Left: name, variant, price, qty controls */}
                  <div className="col-span-5 flex flex-col gap-1 xl:col-span-10 xl:grid xl:grid-cols-10 xl:items-end xl:gap-4">
                    <h2 className="xl:order-1 xl:col-span-4">{item.name}</h2>
                    <div className="flex flex-col xl:order-3 xl:col-span-3">
                      <p className="text-sm opacity-50">{item.variant}</p>
                    </div>
                    <p className="mt-6 xl:order-2 xl:col-span-3 xl:mt-0">{fmt(item.price)}</p>

                    {/* Mobile qty controls */}
                    <div className="mt-auto flex items-center justify-between gap-2 xl:hidden">
                      <div className="flex flex-row items-center gap-3">
                        <button
                          onClick={() => setQty(item.id, item.quantity - 1)}
                          className="transition-all duration-100 hover:opacity-80 active:scale-90 flex items-center justify-center rounded-full"
                          aria-label="Decrease"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.06em" stroke="currentColor" className="h-[1em] w-[1em]">
                            <path strokeLinecap="square" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                        <p className="w-10 text-center">{item.quantity}</p>
                        <button
                          onClick={() => setQty(item.id, item.quantity + 1)}
                          className="transition-all duration-100 hover:opacity-80 active:scale-90 flex items-center justify-center rounded-full"
                          aria-label="Increase"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.06em" stroke="currentColor" className="h-[1em] w-[1em]">
                            <path strokeLinecap="square" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-sm opacity-40 hover:opacity-80 transition-opacity uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Right: image + desktop controls */}
                  <div className="col-span-3 xl:col-span-6 xl:grid xl:grid-cols-6 xl:items-end xl:gap-4">
                    <div className="relative xl:col-span-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={533}
                        className="w-full aspect-large object-cover"
                      />
                    </div>

                    {/* Desktop qty + remove */}
                    <div className="hidden xl:col-span-3 xl:flex xl:flex-col xl:items-end xl:justify-end xl:gap-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQty(item.id, item.quantity - 1)}
                          className="transition-all duration-100 hover:opacity-80 active:scale-90"
                          aria-label="Decrease"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.06em" stroke="currentColor" className="h-[1em] w-[1em]">
                            <path strokeLinecap="square" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                        <p className="w-10 text-center">{item.quantity}</p>
                        <button
                          onClick={() => setQty(item.id, item.quantity + 1)}
                          className="transition-all duration-100 hover:opacity-80 active:scale-90"
                          aria-label="Increase"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.06em" stroke="currentColor" className="h-[1em] w-[1em]">
                            <path strokeLinecap="square" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-sm opacity-40 hover:opacity-80 transition-opacity uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* ── Summary + checkout ── */}
            <div className="mt-8 grid grid-cols-8 gap-4 border-t-[3px] border-current pt-8 text-xl leading-6 xl:grid-cols-16 xl:text-4xl">
              <div className="col-span-5 xl:col-span-10">
                <Link className="link-hover text-sm uppercase" href="/">
                  ← Continue Shopping
                </Link>
              </div>
              <div className="col-span-3 xl:col-span-6 flex flex-col gap-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{fmt(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm opacity-50">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Link
                  href="/checkout"
                  className="mt-4 block w-full bg-current py-4 text-center text-sm font-bold uppercase tracking-widest text-cream dark:text-black red:text-cream transition-opacity hover:opacity-80"
                >
                  Checkout — {fmt(subtotal)}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

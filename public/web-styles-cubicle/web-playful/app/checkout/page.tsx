"use client";

import { useState } from "react";

function Field({
  label,
  type = "text",
  autoComplete,
  required,
  defaultValue,
}: {
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="relative border-b border-current/20 py-3 focus-within:border-current/60 transition-colors">
      <label className="block text-xs uppercase tracking-wider opacity-50 mb-1">{label}</label>
      <input
        type={type}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
}

const PAYMENT_ICONS = ["Visa", "Mastercard", "Amex", "PayPal", "Shop Pay"];

export default function CheckoutPage() {
  const [express, setExpress] = useState<string | null>(null);

  return (
    <div data-page="checkout">
      <main id="checkout-main" className="min-h-dvh px-4 pb-20 pt-32 lg:px-6">
        <h1 className="sr-only">++ Outfit Checkout</h1>

        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          {/* ── Left: form ── */}
          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>

            {/* Express checkout */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-widest opacity-50">
                Express checkout
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {(["Google Pay", "Apple Pay", "Shop Pay"] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setExpress(method)}
                    className={`flex h-12 items-center justify-center border border-current/20 text-xs font-medium transition-all hover:border-current/60 ${express === method ? "border-current/60" : ""}`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-current opacity-20" />
                <span className="text-xs uppercase tracking-widest opacity-40">or</span>
                <div className="h-px flex-1 bg-current opacity-20" />
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-widest opacity-50">Contact</h2>
              <Field label="Email or mobile phone number" type="email" autoComplete="email" required />
            </section>

            {/* Delivery */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-widest opacity-50">Delivery</h2>
              <div className="grid grid-cols-2 gap-x-4">
                <Field label="First name" autoComplete="given-name" required />
                <Field label="Last name" autoComplete="family-name" required />
              </div>
              <Field label="Address" autoComplete="street-address" required />
              <Field label="City" autoComplete="address-level2" required />
              <div className="grid grid-cols-2 gap-x-4">
                <Field label="Postal code" autoComplete="postal-code" required />
                <Field label="Country" autoComplete="country-name" defaultValue="France" />
              </div>
            </section>

            {/* Shipping method */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-widest opacity-50">Shipping method</h2>
              {[
                { id: "standard", label: "Standard Shipping", eta: "5–7 business days", price: "Free" },
                { id: "express", label: "Express Shipping", eta: "2–3 business days", price: "$9.00" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-none items-center justify-between border border-current/20 px-4 py-3 mb-2 has-[:checked]:border-current/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      value={opt.id}
                      defaultChecked={opt.id === "standard"}
                      className="accent-red"
                    />
                    <div>
                      <p className="text-sm font-medium">{opt.label}</p>
                      <p className="text-xs opacity-50">{opt.eta}</p>
                    </div>
                  </div>
                  <span className="text-sm">{opt.price}</span>
                </label>
              ))}
            </section>

            {/* Payment */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-widest opacity-50">Payment</h2>
              <div className="mb-3 flex gap-1 opacity-40">
                {PAYMENT_ICONS.map((icon) => (
                  <span key={icon} className="border border-current/30 px-1.5 py-0.5 text-[10px] uppercase">
                    {icon}
                  </span>
                ))}
              </div>
              <Field label="Card number" autoComplete="cc-number" required />
              <div className="grid grid-cols-2 gap-x-4">
                <Field label="Expiry (MM / YY)" autoComplete="cc-exp" required />
                <Field label="Security code" autoComplete="cc-csc" required />
              </div>
              <Field label="Name on card" autoComplete="cc-name" required />
            </section>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-current py-5 text-center text-sm font-bold uppercase tracking-widest text-cream dark:text-black red:text-cream transition-opacity hover:opacity-80"
            >
              Pay now
            </button>
          </form>

          {/* ── Right: order summary ── */}
          <aside>
            <h2 className="mb-6 text-xs uppercase tracking-widest opacity-50">Order Summary</h2>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Kerned Confidence", variant: "Black / One Size", price: "$25.00", img: "/images/cap-black-outfit.jpg" },
              ].map((item) => (
                <li key={item.name} className="flex gap-4">
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#d2cac3]">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="opacity-50">{item.variant}</p>
                    </div>
                    <p>{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2 border-t border-current/10 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="opacity-70">Subtotal</span>
                <span>$25.00</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Shipping</span>
                <span>Free</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-current/10 pt-3 font-bold">
                <span>Total</span>
                <span>$25.00</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

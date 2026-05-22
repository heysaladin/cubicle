import { OutfitSvg } from "@/components/svg/OutfitSvg";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS_GRID_1, PRODUCTS_GRID_2 } from "@/lib/products";
import { TextReveal } from "@/components/ui/TextReveal";
import { HeroReveal } from "@/components/layout/HeroReveal";

export default function HomePage() {
  return (
    <div data-page="home">
      <div className="px-4 lg:px-6">
        {/* ── Hero ── */}
        <HeroReveal className="mt-26 mb-6">
          {/* OUTFIT wordmark — lifts up from clipped container */}
          <div className="hero-svg-wrap mb-6">
            <OutfitSvg className="hero-svg-inner" />
          </div>

          {/* Hero line — expands left → right */}
          <div id="hero-line" className="mb-6 h-[5px] w-full origin-left bg-current" />

          {/* Hero content grid */}
          <div
            id="hero-content"
            className="mb-10 grid grid-cols-8 gap-x-6 gap-y-10 text-xs font-bold md:grid-cols-16 md:gap-6"
          >
            <div className="col-span-3 md:col-span-4">
              <TextReveal as="h1" by="char" delay={460} stagger={48} className="uppercase">
                Outfit
              </TextReveal>
            </div>

            <div className="col-span-5 md:col-span-8">
              <TextReveal as="h2" by="char" delay={580} stagger={48} className="mb-4 uppercase">
                Why
              </TextReveal>
              <p
                className="hero-fade text-sm leading-4 tracking-tight md:max-w-[60%]"
                style={{ transitionDelay: "720ms" }}
              >
                Created by the ++hellohello team, this store and signature collection celebrates our
                collective creativity and passion for apparel. Carefully designed.
              </p>
            </div>

            <div
              className="hero-fade col-span-3 flex h-full flex-col justify-between md:col-span-3"
              style={{ transitionDelay: "820ms" }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover max-w-fit uppercase"
                href="https://www.hellohello.is"
              >
                Visit ++ website
              </a>
              <a
                className="link-hover max-w-fit uppercase hidden md:inline-block"
                href="#"
              >
                Shipping &amp; Returns
              </a>
            </div>

            <div
              className="hero-fade col-span-5 flex justify-end md:col-span-1"
              style={{ transitionDelay: "880ms" }}
            >
              © 2026
            </div>

            <div
              className="hero-fade col-span-8 inline-block md:hidden"
              style={{ transitionDelay: "940ms" }}
            >
              <a className="link-hover max-w-fit uppercase" href="#">
                Shipping &amp; Returns
              </a>
            </div>
          </div>
        </HeroReveal>
      </div>

      {/* ── Product grids ── */}
      <div className="px-4 lg:px-6">
        {/* Grid 1 — 4-col equal */}
        <div>
          <section className="mb-34 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {PRODUCTS_GRID_1.map((product, i) => (
              <ProductCard key={product.id} product={product} stagger={i * 75} />
            ))}
          </section>
        </div>

        {/* Grid 2 — asymmetric 8-col / 16-col */}
        <div>
          <div className="mb-34 grid grid-cols-8 gap-6 md:grid-cols-16">
            <div className="col-span-3">
              <ProductCard product={PRODUCTS_GRID_2[0]} stagger={0} />
            </div>
            <div className="col-span-3">
              <ProductCard product={PRODUCTS_GRID_2[1]} stagger={75} />
            </div>
            <div className="col-start-3 col-end-9 md:col-start-9 md:-col-end-1">
              <ProductCard product={PRODUCTS_GRID_2[2]} stagger={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

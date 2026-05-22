import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  price: string;
  front: string;
  back: string;
  category?: string;
  aspect?: "large" | "small" | "square";
}

interface ProductCardProps {
  product: Product;
  stagger?: number;
}

const aspectClass: Record<string, string> = {
  large: "aspect-large",
  small: "aspect-small",
  square: "aspect-square",
};

export function ProductCard({ product, stagger = 0 }: ProductCardProps) {
  const aspect = aspectClass[product.aspect ?? "large"];

  return (
    <Link
      className="group block fade-up"
      href={`/product/${product.id}`}
      data-product="true"
      data-inview="true"
      style={{ transitionDelay: `${stagger}ms` }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        {/* Front image */}
        <img
          data-image="front"
          alt={product.name}
          draggable={false}
          width={1920}
          height={2560}
          className={`w-full ${aspect} h-full object-cover`}
          style={{ willChange: "transform" }}
          sizes="(min-width: 768px) 25vw, 100vw"
          src={product.front}
        />
        {/* Back image — clip-path wipe reveal */}
        <img
          data-image="back"
          alt={product.name}
          draggable={false}
          width={1920}
          height={2560}
          className={`h-full w-full object-cover ${aspect} ease-[cubic-bezier(0.87,0,0.13,1)] absolute inset-0 transition-all duration-500 scale-[1.2] group-hover:scale-[1] [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] [filter:brightness(400%)_contrast(150%)] group-hover:[filter:brightness(100%)_contrast(100%)]`}
          sizes="(min-width: 768px) 25vw, 100vw"
          src={product.back}
        />
        {/* Hover background overlay */}
        <div
          className="absolute inset-0 h-full w-full bg-[#d2cac3] dark:bg-neutral-800"
          style={{ willChange: "transform", transform: "translate(100%, 0px)" }}
        />
      </div>

      {/* Name & price */}
      <div className="mt-3 flex flex-col justify-between gap-2 text-lg leading-5 md:flex-row">
        <p>{product.name}</p>
        <p><span>{product.price}</span></p>
      </div>

      {/* Category dot */}
      <div className="mt-[6px] flex items-center gap-1 text-[11px] uppercase">
        <div className="h-2 w-2 rounded-full bg-current" />
        <span>{product.category ?? "Apparel"}</span>
      </div>
    </Link>
  );
}

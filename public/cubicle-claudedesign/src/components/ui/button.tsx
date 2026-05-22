import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // ── Cubicle / shadcn originals (backward-compatible) ──────────────────
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",

        // ── App DS — Primary (blue filled, inner white glint) ─────────────────
        primary:
          "bg-[#0063f5] text-white border-2 border-white/[0.12] hover:bg-[#0056d6] active:bg-[#004ab8]",

        // ── App DS — 2nd Primary (yellow filled) ──────────────────────────────
        "primary-yellow":
          "bg-[#ffdd33] text-neutral-900 border-2 border-white/[0.12] hover:bg-[#f5d100] active:bg-[#e6c500]",

        // ── App DS — Secondary gray (white bg, 1.5px gray border) ─────────────
        "secondary-gray":
          "bg-white [border-width:1.5px] border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 active:bg-neutral-100 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600",

        // ── App DS — Secondary color (white bg, 1.5px blue border) ───────────
        "secondary-color":
          "bg-white [border-width:1.5px] border-[#0063f5] text-[#0063f5] hover:bg-blue-50 active:bg-blue-100 dark:bg-transparent dark:border-blue-500 dark:text-blue-400",

        // ── App DS — Tertiary gray (subtle gray fill, no border) ──────────────
        "tertiary-gray":
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700",

        // ── App DS — Tertiary color (subtle blue fill, no border) ─────────────
        "tertiary-color":
          "bg-blue-50 text-[#0063f5] hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:bg-blue-900/50",

        // ── App DS — Link gray (text-only, gray) ──────────────────────────────
        "link-gray":
          "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",

        // ── App DS — Link color (text-only, blue) ─────────────────────────────
        "link-color":
          "text-[#0063f5] hover:text-[#0056d6] dark:text-blue-400 dark:hover:text-blue-300",
      },

      size: {
        // ── shadcn originals ──────────────────────────────────────────────────
        default: "h-10 gap-2 px-4 py-2 rounded-md text-sm font-medium [&_svg]:size-4",
        sm:      "h-9 gap-2 px-3 rounded-md text-sm font-medium [&_svg]:size-4",
        lg:      "h-11 gap-2 px-8 rounded-md text-sm font-medium [&_svg]:size-4",
        icon:    "size-10 rounded-md [&_svg]:size-4",

        // ── App DS — sm (~32 px, 14 px icon) ─────────────────────────────────
        "app-sm":
          "min-h-8 gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold tracking-[0.5px] [&_svg]:size-3.5",

        // ── App DS — xl (~46 px, 20 px icon) ─────────────────────────────────
        "app-xl":
          "min-h-[46px] min-w-[90px] gap-1.5 px-4 py-3 rounded-lg text-sm font-semibold tracking-[0.5px] [&_svg]:size-5",

        // ── App DS — 2xl (~56 px, 24 px icon) ────────────────────────────────
        "app-2xl":
          "min-h-14 min-w-[90px] gap-2 px-5 py-4 rounded-[10px] text-[17.5px] leading-[26px] font-bold tracking-[0.1px] [&_svg]:size-6",

        // ── App DS — icon-only variants ───────────────────────────────────────
        "icon-app-sm":  "size-8 rounded-md [&_svg]:size-3.5",
        "icon-app-xl":  "size-[46px] rounded-lg [&_svg]:size-5",
        "icon-app-2xl": "size-14 rounded-[10px] [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

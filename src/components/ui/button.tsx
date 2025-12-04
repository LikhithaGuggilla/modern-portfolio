import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 shadow-lg shadow-amber-900/30",
        destructive:
          "bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:via-red-600 hover:to-red-700 shadow-lg shadow-red-900/30 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-amber-900/40 bg-gradient-to-r from-transparent via-amber-950/20 to-transparent text-foreground hover:from-amber-900/20 hover:via-amber-900/30 hover:to-amber-900/20 hover:border-amber-800/50 dark:border-amber-900/40",
        secondary:
          "bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white hover:from-zinc-600 hover:via-zinc-700 hover:to-zinc-800 shadow-lg shadow-black/30",
        ghost:
          "hover:bg-gradient-to-r hover:from-amber-950/30 hover:via-amber-900/20 hover:to-amber-950/30 text-foreground dark:hover:from-amber-950/40 dark:hover:via-amber-900/30 dark:hover:to-amber-950/40",
        link: "text-amber-600 underline-offset-4 hover:underline hover:text-amber-500",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
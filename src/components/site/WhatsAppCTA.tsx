import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

type Variant = "gold" | "outline" | "navy" | "link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy px-7 py-3.5 shadow-soft hover:-translate-y-0.5 hover:shadow-lift hover:bg-gold/90",
  navy: "bg-navy text-background px-7 py-3.5 shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-current/25 px-7 py-3.5 hover:border-gold hover:text-gold hover:-translate-y-0.5",
  link: "text-gold underline-offset-4 hover:underline p-0 text-sm font-semibold",
};

export function WhatsAppCTA({
  message,
  children,
  variant = "gold",
  className,
}: {
  message: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
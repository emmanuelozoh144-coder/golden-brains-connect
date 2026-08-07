import logo from "@/assets/gbyf-logo.png";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logo}
        alt="Golden Brains Youth Foundation logo"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-full bg-background object-cover ring-1 ring-gold/50"
      />
      <span className="min-w-0 leading-tight">
        <span
          className={`block font-display text-[1.05rem] tracking-tight ${
            tone === "light" ? "text-background" : "text-navy"
          }`}
        >
          Golden Brains
        </span>
        <span
          className={`block text-[0.62rem] tracking-[0.24em] uppercase ${
            tone === "light" ? "text-background/60" : "text-muted-foreground"
          }`}
        >
          Youth Foundation
        </span>
      </span>
    </span>
  );
}

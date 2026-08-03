export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy">
        <span className="absolute inset-[3px] rounded-[10px] border border-gold/60" />
        <span className="font-display text-lg leading-none text-gold">G</span>
      </span>
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
          4 Youths
        </span>
      </span>
    </span>
  );
}
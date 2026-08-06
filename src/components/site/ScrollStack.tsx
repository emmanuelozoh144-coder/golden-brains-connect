import type { ReactNode } from "react";

export type ScrollStackItem = {
  src: string;
  title: string;
  caption: string;
};

export function ScrollStack({ items }: { items: ScrollStackItem[] }) {
  return (
    <div className="scroll-stack">
      {items.map((item, i) => (
        <div
          key={item.src}
          className="scroll-stack-card"
          style={{ top: `calc(6rem + ${i * 1.25}rem)`, zIndex: i + 1 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-lift">
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[440px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-6 sm:p-8">
              <p className="eyebrow text-gold">{item.title}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-background/85 sm:text-base">
                {item.caption}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ScrollStackWrapper({ children }: { children: ReactNode }) {
  return <div className="scroll-stack">{children}</div>;
}

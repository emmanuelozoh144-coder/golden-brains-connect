import type { ReactNode } from "react";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: ReactNode }[];
}) {
  return (
    <>
      <section className="bg-navy px-5 pt-40 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-6 text-4xl leading-tight text-background sm:text-5xl">{title}</h1>
          <p className="mt-6 leading-relaxed text-background/70">{intro}</p>
          <p className="mt-6 text-xs tracking-[0.14em] text-background/50 uppercase">
            Last updated: 30 July 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <div className="space-y-12">
          {sections.map((s) => (
            <article key={s.heading}>
              <h2 className="text-2xl text-navy">{s.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{s.body}</div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-secondary/60 p-10 text-center">
          <h2 className="text-2xl text-navy">Questions about this policy?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Our team is happy to clarify anything on this page.
          </p>
          <WhatsAppCTA
            className="mt-7"
            message="Hello, I have a question about the policies on your website."
          >
            Contact us on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
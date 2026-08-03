import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", hash: "about" },
  { label: "Focus", hash: "focus" },
  { label: "Impact", hash: "impact" },
  { label: "Gallery", hash: "gallery" },
  { label: "Founder", hash: "founder" },
  { label: "Get Involved", hash: "help" },
  { label: "FAQ", hash: "faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" hash="top" className="min-w-0" aria-label="Golden Brains 4 Youths home">
          <Logo tone={scrolled ? "navy" : "light"} />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-navy"
                    : "text-background/75 hover:text-gold",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <WhatsAppCTA
            message="Hello Golden Brains 4 Youths, I'd like to learn more about your work."
            className="hidden px-6 py-2.5 text-sm sm:inline-flex"
          >
            Talk to us
          </WhatsAppCTA>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full border lg:hidden",
              scrolled ? "border-border text-navy" : "border-background/25 text-background",
            )}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <nav className="flex flex-col py-2" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-navy"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <WhatsAppCTA
            message="Hello Golden Brains 4 Youths, I'd like to learn more about your work."
            className="mt-4 w-full"
          >
            Talk to us on WhatsApp
          </WhatsAppCTA>
        </div>
      )}
    </header>
  );
}
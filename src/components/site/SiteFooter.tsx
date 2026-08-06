import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";

const quickLinks = [
  { label: "About", hash: "about" },
  { label: "Focus Areas", hash: "focus" },
  { label: "Our Impact", hash: "impact" },
  { label: "Gallery", hash: "gallery" },
  { label: "Founder", hash: "founder" },
  { label: "Get Involved", hash: "help" },
];

const socials = [
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/1BtqSP6tuD/" },
  { label: "WhatsApp", Icon: MessageCircle, href: "https://wa.me/qr/LZJJMFKIZWYSN1" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-background/70">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-6 text-sm leading-relaxed">
              We raise a generation of capable, principled young leaders through education,
              mentorship and community-led programmes across Africa.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-background/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="eyebrow text-gold">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.hash}>
                  <Link to="/" hash={l.hash} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow text-gold">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hello Golden Brains Youth Foundation, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-transform hover:-translate-y-0.5"
                >
                  Message us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-background/12 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-gold">
              Terms of Use
            </Link>
            <Link to="/cookie-policy" className="hover:text-gold">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Golden Brains Youth Foundation" },
      {
        name: "description",
        content:
          "How Golden Brains Youth Foundation uses cookies and similar technologies, and how you can control them.",
      },
      { property: "og:title", content: "Cookie Policy | Golden Brains Youth Foundation" },
      {
        property: "og:description",
        content: "A short, plain-language explanation of cookies on our website.",
      },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="We keep this website deliberately light. This page explains the small number of cookies and similar technologies involved when you visit."
      sections={[
        {
          heading: "1. What cookies are",
          body: (
            <p>
              Cookies are small text files placed on your device by a website. They are widely used
              to make sites work correctly, remember preferences and understand how visitors use a
              page.
            </p>
          ),
        },
        {
          heading: "2. Cookies we use",
          body: (
            <>
              <p>
                <strong className="text-navy">Essential:</strong> required for the website to load,
                render and remain secure. These cannot be switched off.
              </p>
              <p>
                <strong className="text-navy">Analytics (aggregate):</strong> where enabled, these
                help us understand which pages are read most, so we can improve our communication.
                They are not used to identify individuals.
              </p>
              <p>We do not use advertising or cross-site tracking cookies.</p>
            </>
          ),
        },
        {
          heading: "3. Third-party technologies",
          body: (
            <p>
              Our hosting provider and font provider may set technical cookies or record standard
              request logs. Clicking a WhatsApp or social media link takes you to a third-party
              platform with its own cookie practices.
            </p>
          ),
        },
        {
          heading: "4. Managing cookies",
          body: (
            <p>
              Every major browser allows you to view, block or delete cookies through its settings.
              Blocking cookies will not prevent you from reading this website or contacting us.
            </p>
          ),
        },
        {
          heading: "5. Contact information",
          body: (
            <p>
              {site.name} · {site.email} · {site.phone}
            </p>
          ),
        },
      ]}
    />
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Golden Brains Youth Foundation" },
      {
        name: "description",
        content:
          "How Golden Brains Youth Foundation collects, uses, stores and protects information shared through our website.",
      },
      { property: "og:title", content: "Privacy Policy | Golden Brains Youth Foundation" },
      {
        property: "og:description",
        content: "Our commitment to handling your information with care and transparency.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This page is maintained by Golden Brains Youth Foundation to explain, in plain language, what information we handle when you visit this website or contact us."
      sections={[
        {
          heading: "1. Information we collect",
          body: (
            <>
              <p>
                This website does not host contact forms, accounts or payment pages, so we do not
                collect personal details directly through it. Basic technical information such as browser
                type, device type, approximate region and pages visited may be recorded by
                our hosting provider for security and performance purposes.
              </p>
              <p>
                When you choose to contact us on WhatsApp, by email or by phone, we receive the
                information you send us: typically your name, contact details and the content of
                your message.
              </p>
            </>
          ),
        },
        {
          heading: "2. How we use information",
          body: (
            <p>
              We use the information you send us only to respond to your enquiry, coordinate
              volunteering, partnership, sponsorship or invitation arrangements, and keep records of
              our programme relationships. We do not sell, rent or trade personal information, and we
              do not send unsolicited marketing.
            </p>
          ),
        },
        {
          heading: "3. Cookies",
          body: (
            <p>
              We keep cookie use to the minimum needed for the website to function and load
              correctly. Any additional analytics or preference cookies would be strictly limited to
              understanding aggregate site usage. You can block or delete cookies through your
              browser settings at any time; the site will continue to work.
            </p>
          ),
        },
        {
          heading: "4. Third-party services",
          body: (
            <p>
              Our contact buttons open WhatsApp, a service operated independently of this
              foundation. Messages you send there are governed by WhatsApp's own privacy terms.
              Our website is served by a third-party hosting provider and may load fonts from a
              third-party font service. We do not control, and are not responsible for, the privacy
              practices of these external services.
            </p>
          ),
        },
        {
          heading: "5. Data security",
          body: (
            <p>
              We apply reasonable organisational and technical measures to protect the information
              in our care, including restricted access to correspondence and programme records.
              No method of transmission or storage is completely secure, so we cannot guarantee
              absolute security, but we treat every message we receive as confidential.
            </p>
          ),
        },
        {
          heading: "6. Your rights",
          body: (
            <p>
              You may ask us what information we hold about you, request a correction, or ask us to
              delete your details from our records. Contact us using the details below and we will
              respond within a reasonable period.
            </p>
          ),
        },
        {
          heading: "7. Contact information",
          body: (
            <p>
              {site.name} · {site.email} · {site.phone} · {site.address}
            </p>
          ),
        },
      ]}
    />
  );
}
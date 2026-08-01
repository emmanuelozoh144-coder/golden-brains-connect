import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Golden Brains Youth Foundation" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Golden Brains Youth Foundation website, including acceptable use and liability.",
      },
      { property: "og:title", content: "Terms of Use | Golden Brains Youth Foundation" },
      {
        property: "og:description",
        content: "Acceptable use, intellectual property, disclaimers and liability for this website.",
      },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="By accessing this website you agree to the terms set out below. If you do not agree with them, please discontinue use of the site."
      sections={[
        {
          heading: "1. Acceptable use",
          body: (
            <p>
              You may browse, read and share this website for lawful, non-commercial purposes. You
              agree not to misuse the site, including attempting to gain unauthorised access,
              interfering with its operation, scraping content at scale, or using it to distribute
              unlawful, misleading or harmful material.
            </p>
          ),
        },
        {
          heading: "2. Intellectual property",
          body: (
            <p>
              The name, logo, written content, design and imagery on this website belong to
              Golden Brains Youth Foundation or are used with permission. You may quote short
              extracts with clear attribution. Reproducing substantial portions, or using our name
              or marks to imply endorsement or affiliation, requires our prior written consent.
            </p>
          ),
        },
        {
          heading: "3. Website disclaimer",
          body: (
            <p>
              Content on this site is provided for general information about our mission and
              programmes. Statistics, testimonials and programme descriptions are presented in good
              faith and may be updated as our work evolves. Nothing on this website constitutes
              professional, legal, medical or financial advice.
            </p>
          ),
        },
        {
          heading: "4. No payments through this website",
          body: (
            <p>
              This website does not process donations or payments of any kind. We will never request
              card details, bank credentials or transfers through this site. If you encounter any
              page or message claiming otherwise in our name, please contact us immediately.
            </p>
          ),
        },
        {
          heading: "5. External links",
          body: (
            <p>
              Our site links to external services such as WhatsApp and social platforms. These are
              provided for convenience only. We do not control their content, availability or
              policies, and we accept no responsibility for them.
            </p>
          ),
        },
        {
          heading: "6. Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted by law, Golden Brains Youth Foundation, its trustees,
              staff and volunteers shall not be liable for any loss or damage arising from your use
              of, or inability to use, this website or any content on it.
            </p>
          ),
        },
        {
          heading: "7. Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time to reflect changes in our work or legal
              obligations. The revised terms take effect once published on this page, and the date
              above will be amended accordingly.
            </p>
          ),
        },
        {
          heading: "8. Contact information",
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
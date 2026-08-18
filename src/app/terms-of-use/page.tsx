import { LegalPage, type LegalSection } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use | ARS Green Steel",
  description: "Terms governing the use of the ARS Green Steel website, content, and enquiry channels.",
  path: "/terms-of-use",
});

const sections: LegalSection[] = [
  {
    title: "Website use",
    body: "This website is provided to help visitors understand ARS Green Steel products, services, business information, and enquiry channels. You may browse, reference, and contact ARS through the site for lawful business and informational purposes only.",
  },
  {
    title: "Information accuracy",
    body: "ARS Green Steel works to keep website information current and useful, but product availability, pricing context, technical guidance, certifications, and contact workflows may change over time. Confirm business-critical details with the ARS team before making purchase, construction, procurement, or specification decisions.",
  },
  {
    title: "Intellectual property",
    body: "Website content, branding, product materials, design elements, images, downloads, and written copy remain the property of ARS Green Steel or their respective owners unless stated otherwise. They may not be copied, republished, or commercially reused without permission.",
  },
  {
    title: "External actions and enquiries",
    body: "Submitting an enquiry, requesting a quote, or contacting ARS through the website does not create a binding supply agreement. Commercial terms, pricing, delivery, technical commitments, and warranties are governed separately through direct ARS communication and approved business documents.",
  },
  {
    title: "Updates to these terms",
    body: "ARS Green Steel may revise these terms as the website evolves. Continued use of the site after updates means you accept the latest published version.",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      label="Legal terms"
      title="Terms of Use"
      intro="The terms that govern access to ARS Green Steel website content, services, and enquiry channels."
      sections={sections}
      note="For official product, pricing, or business confirmation, contact ARS before relying on website content for a project decision."
      relatedHref="/privacy-policy"
      relatedLabel="Privacy Policy"
    />
  );
}

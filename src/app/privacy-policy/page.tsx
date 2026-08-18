import { LegalPage, type LegalSection } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy | ARS Green Steel",
  description: "Privacy policy for ARS Green Steel website enquiries.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    title: "Privacy policy",
    body: "At ARS Group, accessible from https://arsgroup.in/, one of our main priorities is the privacy of our visitors. This Privacy Policy explains the types of information collected and recorded by ARS Group and how we use it.",
  },
  {
    title: "Consent",
    body: "By using our website, you consent to this Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, please contact the ARS team.",
  },
  {
    title: "Information we collect",
    body: "The personal information you are asked to provide, and the reasons why it is requested, will be made clear at the point we ask you to provide it. Depending on the interaction, this may include your name, company name, address, email address, telephone number, message contents, attachments, or other information you choose to provide.",
  },
  {
    title: "How we use information",
    body: "Information shared through the website may be used to respond to enquiries, provide product or project support, process quote requests, improve the website experience, and communicate with you about the request you submitted.",
  },
  {
    title: "Scope of this policy",
    body: "This Privacy Policy applies to ARS Group’s online activities and is valid for visitors to this website in relation to information they share with or that is collected by ARS Group. It does not apply to information collected offline or through channels other than this website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Legal & privacy"
      title="Privacy Policy"
      intro="How ARS Green Steel handles information shared through this website and its enquiry channels."
      sections={sections}
      note="For questions about this policy or the information you have shared with ARS, please use the official contact channels."
      relatedHref="/terms-of-use"
      relatedLabel="Terms of Use"
    />
  );
}

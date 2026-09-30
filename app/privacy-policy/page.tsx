import type { Metadata } from "next";
import { company } from "../lib/content";

const title = "Privacy Policy";
const description =
  "Learn how Blue Cloud AI Technologies collects, uses, and protects information when you visit our website or contact us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy" },
};

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "If you contact us through our website, we collect the information you choose to provide, such as your name, email address, company, and message. We also receive information you send to us by email.",
      "When you visit the site, basic technical information may be processed by our hosting and security services to deliver the site, maintain its reliability, and protect it from misuse. This can include your browser, device, and general request information.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use inquiry information to respond to you, discuss potential services, and maintain business records. Technical information is used to operate, secure, and improve the website.",
      "The site may use Google Tag Manager to manage website measurement tags. Depending on the tags configured, those tools may use cookies or similar technologies and process information about site visits. You can manage cookies through your browser settings; blocking them may affect some site functionality. Please also review Google’s privacy information for details about its processing.",
    ],
  },
  {
    title: "How information is shared",
    paragraphs: [
      "We do not sell personal information. We may share information with service providers that help us host, secure, measure, or operate the website and respond to inquiries. They may process information only to provide their services to us. We may also disclose information when required by law or to protect our rights, users, or services.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep personal information only for as long as reasonably needed for the purposes described in this policy, including responding to you, maintaining business records, and meeting legal obligations. We use reasonable safeguards designed to protect information, but no method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      "You may ask us to access, correct, or delete personal information you have provided, subject to applicable legal requirements. You can also choose not to provide information, though we may then be unable to respond to your inquiry. Contact us using the details below to make a request.",
    ],
  },
  {
    title: "Third-party websites and children",
    paragraphs: [
      "Our website may link to third-party sites that operate under their own privacy practices. We are not responsible for those practices. This website is intended for business audiences and is not directed to children under 13; we do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our practices or legal requirements change. The revised version will appear on this page with an updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow on-dark">Legal</div>
          <h1>{title}</h1>
          <p>How we handle information when you use our website or contact our team.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap privacy-content">
          <p className="privacy-updated">Last updated: September 30, 2026</p>
          <p>
            Blue Cloud AI Technologies ("Blue Cloud AI," "we," or "us") respects your privacy.
            This policy explains what information we collect through our website and how we use,
            share, and protect it.
          </p>

          {sections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <section className="privacy-section">
            <h2>Contact us</h2>
            <p>
              For privacy questions or requests, email <a href={`mailto:${company.email}`}>{company.email}</a>
              {" "}or write to {company.name}, {company.location}.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

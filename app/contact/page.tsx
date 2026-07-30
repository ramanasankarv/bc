import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { company, contact } from "../lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Blue Cloud AI Technologies to accelerate your journey to modern data and AI platforms.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow on-dark">{contact.eyebrow}</div>
          <h1>{contact.title}</h1>
          <p>
            Partner with Blue Cloud AI Technologies to accelerate your journey to modern data and AI
            platforms. Whether you are planning a migration, optimizing performance, or implementing
            AI, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <Reveal className="contact-info" as="div">
            <h3>Let&apos;s talk modernization</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.98rem", marginBottom: 8 }}>
              Tell us about your data estate and goals. We provide tailored strategies aligned to
              your business and technical landscape.
            </p>

            <div className="item">
              <div className="lab">Email</div>
              <div className="val">
                <a href={`mailto:${company.email}`} style={{ color: "var(--azure)" }}>
                  {company.email}
                </a>
              </div>
            </div>
            <div className="item">
              <div className="lab">Based in</div>
              <div className="val">{company.location}</div>
            </div>
            <div className="item">
              <div className="lab">Focus</div>
              <div className="val">Database modernization · Cloud transformation · Enterprise AI</div>
            </div>
            <div className="item">
              <div className="lab">Response time</div>
              <div className="val">Within one business day</div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

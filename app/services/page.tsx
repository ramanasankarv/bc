import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import CTABand from "../components/CTABand";
import { services, company } from "../lib/content";
import { serviceImages } from "../lib/sectionIcons";

const title = "Services";
const description =
  "Database modernization, AI-powered frameworks, mainframe-to-cloud transformation, AI solutions, metadata-driven data platforms, and staff augmentation.";
const images = [{ url: "/og-image.jpg", width: 1200, height: 630, alt: company.name }];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", images },
  twitter: { title, description, images: ["/og-image.jpg"] },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/heroes/services-hero.jpg" alt="" fill priority />
        </div>
        <div className="wrap">
          <div className="eyebrow on-dark">Services</div>
          <h1>End-to-end services across data, cloud, and AI.</h1>
          <p>
            Our capabilities span AI-driven schema conversion, automated pipeline development,
            metadata enrichment, and performance optimization for AI workloads — delivered
            automation-first to reduce technical debt and accelerate time-to-value.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {services.map((s) => (
            <Reveal key={s.num}>
              <article className="card has-img">
                <div className="card-img">
                  <Image src={serviceImages[s.num]} alt="" width={800} height={450} />
                </div>
                <div className="card-body" style={{ padding: "30px 40px 44px" }}>
                  <div className="num">{s.num}</div>
                  <h3 style={{ fontSize: "1.55rem", marginTop: 10 }}>{s.title}</h3>
                  <p style={{ maxWidth: "50em" }}>{s.summary}</p>

                  {(s.from || s.to) && (
                    <div className="migrate">
                      {s.from ? (
                        <div className="col from">
                          <h4>{s.title.includes("Metadata") ? "Enables" : "From"}</h4>
                          <ul>
                            {s.from.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div />
                      )}
                      <div className="arrow">→</div>
                      {s.to ? (
                        <div className="col to">
                          <h4>{s.title.includes("Metadata") ? "Across" : "To"}</h4>
                          <ul>
                            {s.to.map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  )}

                  <div style={{ marginTop: 22 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: 12,
                      }}
                    >
                      Capabilities
                    </h4>
                    <ul className="taglist">
                      {s.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import { framework, differentiators, services, company } from "../lib/content";
import { serviceImages, differentiatorImages } from "../lib/sectionIcons";

const title = "Solutions";
const description =
  "AI-powered modernization frameworks that transform legacy systems into intelligent cloud platforms with metadata-driven architectures.";
const images = [{ url: "/og-image.jpg", width: 1200, height: 630, alt: company.name }];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title, description, url: "/solutions", images },
  twitter: { title, description, images: ["/og-image.jpg"] },
};

export default function SolutionsPage() {
  const metadata = services.find((s) => s.title.includes("Metadata"));
  const aiSolutions = services.find((s) => s.title.includes("AI Solutions"));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/heroes/solutions-hero.jpg" alt="" fill priority />
        </div>
        <div className="wrap">
          <div className="eyebrow on-dark">Solutions</div>
          <h1>AI-powered frameworks that turn legacy systems into intelligent cloud platforms.</h1>
          <p>
            We integrate service principals, automation, and AI agents to improve performance for AI
            assistants, NLP models, and enterprise analytics — unlocking real-time insight and
            operational intelligence.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="section frame">
        <div className="wrap">
          <SectionHead eyebrow={framework.eyebrow} title={framework.title} onDark />
          <div className="steps">
            {framework.steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <div className="bar" />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metadata-driven platforms + AI solutions */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Platform solutions"
            title="Metadata-driven architectures and enterprise AI, engineered together."
            body="Intelligent metadata frameworks provide the governed foundation; AI solutions turn that foundation into assistants, agents, and analytics."
          />
          <div className="two-col">
            {metadata && (
              <Reveal>
                <div className="card has-img">
                  <div className="card-img">
                    <Image src={serviceImages[metadata.num]} alt="" width={800} height={450} />
                  </div>
                  <div className="card-body" style={{ padding: 34 }}>
                    <h3 style={{ fontSize: "1.35rem" }}>{metadata.title}</h3>
                    <p>{metadata.summary}</p>
                    <ul className="taglist" style={{ marginTop: 18 }}>
                      {metadata.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    {metadata.to && (
                      <>
                        <h4
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--muted)",
                            margin: "22px 0 12px",
                          }}
                        >
                          Especially powerful across
                        </h4>
                        <ul className="taglist">
                          {metadata.to.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            )}
            {aiSolutions && (
              <Reveal delay={80}>
                <div className="card has-img">
                  <div className="card-img">
                    <Image src={serviceImages[aiSolutions.num]} alt="" width={800} height={450} />
                  </div>
                  <div className="card-body" style={{ padding: 34 }}>
                    <h3 style={{ fontSize: "1.35rem" }}>{aiSolutions.title}</h3>
                    <p>{aiSolutions.summary}</p>
                    <ul className="taglist" style={{ marginTop: 18 }}>
                      {aiSolutions.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                      <li>data intelligence platforms</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section who">
        <div className="wrap">
          <SectionHead
            eyebrow="Why our solutions"
            title="Built AI-first, delivered automation-first, tuned for AI performance."
          />
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <Reveal key={d.title}>
                <div className="diff has-img" style={{ background: "#fff" }}>
                  <div className="card-img">
                    <Image src={differentiatorImages[i]} alt="" width={800} height={450} />
                  </div>
                  <div className="card-body">
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                    <ul>
                      {d.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

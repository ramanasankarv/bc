import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import CTABand from "../components/CTABand";
import { whoWeAre, company, differentiators } from "../lib/content";
import { whoWeAreIcons, differentiatorIcons } from "../lib/sectionIcons";

export const metadata: Metadata = {
  title: "About",
  description:
    "A team of AI specialists, data architects, and engineers modernizing enterprise data estates at scale.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image src="/heroes/about-hero.jpg" alt="" fill priority />
        </div>
        <div className="wrap">
          <div className="eyebrow on-dark">About us</div>
          <h1>Turning legacy complexity into intelligent, high-performing data platforms.</h1>
          <p>
            We are a team of AI specialists, data architects, and engineers focused on transforming
            enterprise data ecosystems — combining deep technical knowledge with AI-powered
            innovation frameworks.
          </p>
        </div>
      </section>

      {/* Mission / who */}
      <section className="section">
        <div className="wrap two-col">
          <Reveal>
            <div className="rule" />
            <div className="eyebrow">Who we are</div>
            <p className="lead-text" style={{ marginTop: 16 }}>{whoWeAre.title}</p>
            <p className="body-text">
              Blue Cloud AI Technologies is a technology consulting firm focused on helping
              enterprises modernize legacy data platforms and operationalize AI at scale. Our
              approach pairs enterprise-grade engineering discipline with an AI-first innovation
              mindset.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ color: "var(--muted)", marginBottom: 18 }}>Our expertise spans:</p>
            <div className="chips">
              {whoWeAre.capabilities.map((c, i) => {
                const Icon = whoWeAreIcons[i];
                return (
                  <span className="chip" key={c}>
                    <Icon size={15} strokeWidth={2} /> {c}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission statement band */}
      <section className="section frame">
        <div className="wrap">
          <div className="eyebrow on-dark">Our mission</div>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
                color: "#fff",
                lineHeight: 1.28,
                marginTop: 20,
                maxWidth: "20em",
                letterSpacing: "-0.01em",
              }}
            >
              {company.mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Blue Cloud AI"
            title="What makes our modernization approach different."
          />
          <div className="diff-grid">
            {differentiators.map((d, i) => {
              const Icon = differentiatorIcons[i];
              return (
              <Reveal key={d.title}>
                <div className="diff">
                  <div className="icon-badge">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <ul>
                    {d.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

import Link from "next/link";
import Lattice from "./components/Lattice";
import Reveal from "./components/Reveal";
import SectionHead from "./components/SectionHead";
import ServiceCard from "./components/ServiceCard";
import CTABand from "./components/CTABand";
import { hero, metrics, whoWeAre, services, framework } from "./lib/content";
import { whoWeAreIcons, frameworkIcons } from "./lib/sectionIcons";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <div className="hero-tag">
              <span className="dot" />
              <span>{hero.eyebrow}</span>
            </div>
            <h1>
              {hero.headline[0]}
              <br />
              Accelerate <span className="g">AI</span>.
              <br />
              {hero.headline[2]}
            </h1>
            <p className="lead">{hero.lead}</p>
            <p className="flow">
              {hero.flow.map((f, i) => (
                <span key={f.from}>
                  <b>{f.from}</b> → {f.to}
                  {i < hero.flow.length - 1 ? "  ·  " : ""}
                </span>
              ))}
            </p>
            <div className="hero-cta">
              <Link className="btn" href="/contact">Start a conversation →</Link>
              <Link className="btn ghost on-dark" href="/services">Explore services</Link>
            </div>
          </div>
          <div className="hero-visual">
            <Lattice seed={7} />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <div className="metrics">
        <div className="wrap">
          {metrics.map((m) => (
            <div className="metric" key={m.l}>
              <div className="k">
                {m.k}
                <span className="u">{m.u}</span>
              </div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section who">
        <div className="wrap who-grid">
          <SectionHead
            eyebrow={whoWeAre.eyebrow}
            title={whoWeAre.title}
            body={whoWeAre.body}
            style={{ margin: 0 }}
          />
          <Reveal>
            <p style={{ color: "var(--muted)", marginBottom: 18 }}>
              We combine deep technical capability across:
            </p>
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
            <Link className="btn ghost" href="/about" style={{ marginTop: 26 }}>
              More about us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title="End-to-end modernization, from schema to intelligent agent."
            body="Automation-first delivery that reduces technical debt and accelerates time-to-value across data migration, AI integration, and cloud transformation."
          />
          <div className="svc-grid">
            {services.map((s) => (
              <Reveal key={s.num}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn ghost" href="/services">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section frame">
        <div className="wrap">
          <SectionHead eyebrow={framework.eyebrow} title={framework.title} onDark />
          <div className="steps">
            {framework.steps.map((s, i) => {
              const Icon = frameworkIcons[i];
              return (
                <div className="step" key={s.n}>
                  <div className="step-top">
                    <div className="icon-badge sm">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div className="n">{s.n}</div>
                  </div>
                  <div className="bar" />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

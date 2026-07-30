import Link from "next/link";
import { contact } from "@/app/lib/content";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="cta-wrap">
      <div className="wrap">
        <Reveal className="cta-box" as="div">
          <div className="in">
            <div>
              <div className="eyebrow on-dark">{contact.eyebrow}</div>
              <h2 style={{ marginTop: 14 }}>{contact.title}</h2>
              <p>{contact.body}</p>
            </div>
            <Link className="btn" href="/contact" style={{ whiteSpace: "nowrap" }}>
              Start a conversation →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

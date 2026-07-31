import Link from "next/link";
import Image from "next/image";
import { company } from "@/app/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <span className="foot-logo-badge">
                <Image src="/logo.png" alt={company.name} width={219} height={120} />
              </span>
            </div>
            <p style={{ marginTop: 16, maxWidth: "26em", fontSize: "0.92rem" }}>
              {company.tagline} Modernizing legacy data platforms and operationalizing AI at
              enterprise scale.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>Services</h4>
            <Link href="/services">Database Modernization</Link>
            <Link href="/services">Mainframe to Cloud</Link>
            <Link href="/services">AI Solutions</Link>
            <Link href="/services">Metadata Platforms</Link>
          </div>

          <div>
            <h4>Connect</h4>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <Link href="/contact">Request a consultation</Link>
            <span style={{ display: "block", padding: "6px 0", fontSize: "0.93rem" }}>
              {company.location}
            </span>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} {company.name}</span>
          <span>Legacy → Cloud → Intelligence</span>
        </div>
      </div>
    </footer>
  );
}

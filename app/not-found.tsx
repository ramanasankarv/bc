import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "grid", alignItems: "center" }}>
      <div className="wrap">
        <div className="eyebrow on-dark">404</div>
        <h1 style={{ maxWidth: "12em" }}>This page has been modernized away.</h1>
        <p>The address you followed doesn&apos;t map to anything here.</p>
        <Link className="btn" href="/" style={{ marginTop: 28 }}>
          Back to home →
        </Link>
      </div>
    </section>
  );
}

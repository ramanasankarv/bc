import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { company } from "./lib/content";

// Self-hosted fonts — no external Google Fonts request at build or runtime.
const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});
const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});
const mono = localFont({
  variable: "--font-mono",
  display: "swap",
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const siteUrl = "https://bluecloudai.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Database Modernization & AI Transformation`,
    template: `%s · ${company.short}`,
  },
  description:
    "Blue Cloud AI Technologies is an IT consulting and systems-integration firm specializing in database modernization, cloud transformation, and AI-powered enterprise solutions.",
  keywords: [
    "database modernization",
    "mainframe to cloud",
    "AI transformation",
    "cloud migration",
    "metadata-driven data platforms",
    "GenAI agents",
    "systems integration",
    "data and AI governance",
    "staff augmentation",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    title: `${company.name} — Modernize Legacy Data. Accelerate AI.`,
    description:
      "Move from legacy databases, mainframes, and monoliths into secure cloud environments engineered for AI.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Modernize Legacy Data. Accelerate AI.`,
    description:
      "Move from legacy databases, mainframes, and monoliths into secure cloud environments engineered for AI.",
    images: ["/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.short,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "IT consulting and systems-integration firm specializing in database modernization, cloud transformation, and AI-powered enterprise solutions.",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.location,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: company.email,
    contactType: "sales",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

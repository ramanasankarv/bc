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

export const metadata: Metadata = {
  metadataBase: new URL("https://bluecloudai.tech"),
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
  ],
  openGraph: {
    title: `${company.name} — Modernize Legacy Data. Accelerate AI.`,
    description:
      "Move from legacy databases, mainframes, and monoliths into secure cloud environments engineered for AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

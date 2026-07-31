"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/app/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="brand" href="/" aria-label="Blue Cloud AI Technologies — home">
          <Image src="/logo.png" alt="Blue Cloud AI Technologies" width={219} height={120} priority />
        </Link>

        <nav className={`navlinks ${open ? "open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link ${pathname === item.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn" href="/contact" onClick={() => setOpen(false)}>
            Start a conversation
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

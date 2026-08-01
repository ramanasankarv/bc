"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "err";

const interests = [
  "Database Modernization",
  "Mainframe to Cloud",
  "AI Solutions & Agents",
  "Metadata Platforms",
  "Performance for AI",
  "Others",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: interests[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 4;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setForm({ name: "", email: "", company: "", interest: interests[0], message: "" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" value={form.name} onChange={update("name")} placeholder="Your full name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" required />
      </div>

      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" value={form.company} onChange={update("company")} placeholder="Organization" />
      </div>

      <div className="field">
        <label htmlFor="interest">What can we help with?</label>
        <select id="interest" value={form.interest} onChange={update("interest")}>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={form.message} onChange={update("message")} placeholder="Tell us about your data estate, timeline, and goals." required />
      </div>

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>

      {status === "ok" && (
        <div className="form-status ok" role="status">
          Thanks — your message is in. We&apos;ll reply within one business day.
        </div>
      )}
      {status === "err" && (
        <div className="form-status err" role="alert">
          Please add your name, a valid email, and a short message, then try again.
        </div>
      )}
      <p className="form-note">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:hello@bluecloudai.tech" style={{ color: "var(--azure)" }}>hello@bluecloudai.tech</a>.
      </p>
    </form>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/app/lib/content";

/** Contact form endpoint — delivers submissions to the company inbox via Resend. */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data?.name ?? "").trim();
    const email = String(data?.email ?? "").trim();
    const message = String(data?.message ?? "").trim();
    const companyName = String(data?.company ?? "").trim();
    const interest = String(data?.interest ?? "").trim();

    if (!name || !/\S+@\S+\.\S+/.test(email) || message.length < 5) {
      return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set — message not delivered:", { name, email });
      return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL || "Blue Cloud AI Website <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: company.email,
      replyTo: email,
      subject: `New enquiry from ${name}${companyName ? ` (${companyName})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        companyName && `Company: ${companyName}`,
        interest && `Interest: ${interest}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}

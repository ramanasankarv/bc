import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This is a working stub: it validates the payload and returns success so the
 * front-end flow is complete out of the box. To actually deliver messages,
 * wire one of the following where indicated below:
 *   - an email service (Resend, SendGrid, AWS SES)
 *   - a CRM / webhook (HubSpot, Slack incoming webhook)
 *   - a database insert
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data?.name ?? "").trim();
    const email = String(data?.email ?? "").trim();
    const message = String(data?.message ?? "").trim();

    if (!name || !/\S+@\S+\.\S+/.test(email) || message.length < 5) {
      return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
    }

    // TODO: deliver the message (email / CRM / webhook / db).
    console.log("[contact] new enquiry:", { name, email, company: data?.company, interest: data?.interest });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}

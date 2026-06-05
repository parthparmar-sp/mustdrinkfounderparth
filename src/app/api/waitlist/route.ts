import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL ?? "mustdrink04@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "MUSTDRINK <onboarding@resend.dev>";

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          subject: "New MUSTDRINK waitlist signup",
          html: `
            <h2>New waitlist signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json(
          { error: "Unable to join waitlist right now. Please try again." },
          { status: 500 }
        );
      }
    } else {
      console.log(`[waitlist] New signup: ${email}`);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

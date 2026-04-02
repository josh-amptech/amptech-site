import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, idea, triedBefore, timeline } = body;

    if (!name || !email || !idea) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Contact delivery is not configured" },
        { status: 503 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "AmpTech <noreply@amptech.dev>",
      to: "hello@amptech.dev",
      subject: `New discovery call request from ${name}`,
      text: `Name: ${name}
Email: ${email}
Idea: ${idea}
Tried before: ${triedBefore}
Timeline: ${timeline}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

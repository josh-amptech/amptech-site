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

    // TODO: Wire up email delivery via AWS SES or Resend
    // Example with Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'AmpTech <noreply@amptech.dev>',
    //   to: 'hello@amptech.dev',
    //   subject: `New discovery call request from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nIdea: ${idea}\nTried before: ${triedBefore}\nTimeline: ${timeline}`,
    // })

    console.log("New discovery call request:", {
      name,
      email,
      idea,
      triedBefore,
      timeline,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, mode, formType, message } = body;

    // 1. Instantly forward all Form Submissions or Voice initialization leads to GoHighLevel
    if (process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL) {
      await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          mode, // Tells GHL if it's a form_submission, voice, or text interaction
          formType, // 'buyer' or 'seller'
          message,
          source: "Parkes Neighborhood Microsite"
        }),
      }).catch(err => console.error("GHL Webhook Transmission Error:", err));
    }

    // If it's just a standard contact form submission, we stop here and return success
    if (mode === "form_submission") {
      return NextResponse.json({ success: true });
    }

    // 2. Assign the explicit Agent IDs for Voice vs Text Chat
    const voiceAgentId = "agent_76777e665bcbd48ac9fa830194";
    const textAgentId = "agent_59d3c5586b2cefa96eff5e9e83";
    const selectedAgentId = mode === "text" ? textAgentId : voiceAgentId;

    // 3. Request a secure web session access token from Retell
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: selectedAgentId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to retrieve Retell session validation token");
    }

    const data = await response.json();
    
    return NextResponse.json({ accessToken: data.access_token });
  } catch (error) {
    console.error("Microsite Backend API Processing Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

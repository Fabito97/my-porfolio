import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject && typeof subject === "string" && subject.trim().length > 0
      ? subject.trim()
      : `New Portfolio Inquiry from ${cleanName}`;
    const cleanMessage = message.trim();

    // 2. Resend API Configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Resend Contact API] RESEND_API_KEY environment variable is not configured.");
      return NextResponse.json(
        { 
          success: false, 
          error: "Email delivery service is currently not configured. Please set RESEND_API_KEY in environment variables or email fabbenco97@gmail.com directly." 
        },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "fabbenco97@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const emailSubject = `[Portfolio Contact] ${cleanSubject}`;
    const timestamp = new Date().toUTCString();

    // 3. HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${emailSubject}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              background-color: #030712;
              color: #f3f4f6;
              margin: 0;
              padding: 24px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #111827;
              border: 1px solid #1f2937;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            }
            .header {
              background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
              padding: 28px 24px;
              text-align: left;
            }
            .header h1 {
              margin: 0;
              font-size: 20px;
              font-weight: 800;
              color: #ffffff;
              letter-spacing: -0.02em;
            }
            .header p {
              margin: 6px 0 0 0;
              font-size: 13px;
              color: rgba(255, 255, 255, 0.9);
              font-family: monospace;
            }
            .content {
              padding: 28px 24px;
            }
            .field-group {
              margin-bottom: 20px;
              background-color: #1f2937;
              border-radius: 10px;
              padding: 14px 18px;
              border: 1px solid #374151;
            }
            .field-label {
              font-size: 11px;
              font-family: monospace;
              text-transform: uppercase;
              color: #9ca3af;
              letter-spacing: 0.05em;
              margin-bottom: 4px;
            }
            .field-value {
              font-size: 15px;
              color: #f9fafb;
              font-weight: 500;
            }
            .field-value a {
              color: #34d399;
              text-decoration: none;
            }
            .message-box {
              background-color: #0f172a;
              border: 1px solid #334155;
              border-left: 4px solid #10b981;
              border-radius: 10px;
              padding: 18px;
              margin-top: 24px;
            }
            .message-text {
              font-size: 14px;
              line-height: 1.6;
              color: #e2e8f0;
              white-space: pre-wrap;
              word-break: break-word;
            }
            .reply-button-container {
              margin-top: 28px;
              text-align: center;
            }
            .reply-button {
              display: inline-block;
              background-color: #10b981;
              color: #ffffff;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 14px;
              text-decoration: none;
            }
            .footer {
              padding: 20px 24px;
              border-top: 1px solid #1f2937;
              font-size: 12px;
              color: #6b7280;
              text-align: center;
              font-family: monospace;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ New Contact Inquiry</h1>
              <p>Sent from your portfolio website</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${cleanName}</div>
              </div>
              
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Subject</div>
                <div class="field-value">${cleanSubject}</div>
              </div>

              <div class="message-box">
                <div class="field-label">Message Content</div>
                <div class="message-text">${cleanMessage}</div>
              </div>

              <div class="reply-button-container">
                <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}" class="reply-button">
                  Reply Directly to ${cleanName} →
                </a>
              </div>
            </div>
            <div class="footer">
              Received: ${timestamp} · Fabian Muoghalu Portfolio
            </div>
          </div>
        </body>
      </html>
    `;

    // 4. Plain text fallback
    const textContent = `
New Contact Inquiry from Fabian Muoghalu Portfolio
--------------------------------------------------
Sender Name:  ${cleanName}
Email:        ${cleanEmail}
Subject:      ${cleanSubject}
Received:     ${timestamp}

Message:
${cleanMessage}
--------------------------------------------------
Reply directly to: ${cleanEmail}
    `.trim();

    // 5. Send Email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: emailSubject,
        html: htmlContent,
        text: textContent,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("[Resend API Error]", resendData);
      return NextResponse.json(
        { 
          success: false, 
          error: resendData.message || "Failed to deliver message via Resend service." 
        },
        { status: resendResponse.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered successfully! I will get back to you shortly.",
      id: resendData.id,
    });
  } catch (error: any) {
    console.error("[Contact API Catch]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}


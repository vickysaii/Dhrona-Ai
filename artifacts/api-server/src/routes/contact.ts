import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const TO_EMAIL = "annarapuvirupaksh@gmail.com";

function buildHtml(data: Record<string, string>): string {
  const rows = [
    ["👤 Name",       data.name],
    ["🏢 Company",    data.company    || "—"],
    ["📧 Email",      `<a href="mailto:${data.email}" style="color:#3B82F6;">${data.email}</a>`],
    ["📞 Phone",      data.phone      || "—"],
    ["🏭 Industry",   data.industry   || "—"],
    ["⚙️ Service",   data.service    || "—"],
    ["💰 Budget",     data.budget     || "—"],
  ];

  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;background:#f9f9f9;color:#1a1a1a;">
  <div style="background:#0A0A0F;padding:22px 28px;border-radius:10px;margin-bottom:22px;">
    <h2 style="color:#3B82F6;margin:0;font-size:20px;">📩 New Contact Form Submission</h2>
    <p style="color:#94A3B8;margin:6px 0 0;font-size:13px;">Dhrona AI — Architects of Intelligence</p>
  </div>

  <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    ${rows.map(([label, value], i) => `
    <tr style="background:${i % 2 === 0 ? "#fff" : "#f8fafc"};">
      <td style="padding:12px 16px;font-weight:600;font-size:13px;color:#555;width:38%;border-bottom:1px solid #f0f0f0;">${label}</td>
      <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #f0f0f0;">${value}</td>
    </tr>`).join("")}
  </table>

  <div style="margin-top:20px;padding:20px;background:#fff;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    <h3 style="margin:0 0 10px;font-size:14px;color:#333;font-weight:600;">📝 Project Description</h3>
    <p style="margin:0;font-size:14px;line-height:1.7;color:#444;">${data.description || "—"}</p>
  </div>

  <p style="margin-top:24px;font-size:11px;color:#aaa;text-align:center;">
    Sent automatically from the Dhrona AI contact form
  </p>
</body>
</html>`;
}

router.post("/contact", async (req, res) => {
  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    res.status(503).json({ error: "Email service not configured. Please contact us on WhatsApp." });
    return;
  }

  try {
    const body = req.body as Record<string, string>;
    const { name, email } = body;

    if (!name?.trim() || !email?.trim()) {
      res.status(400).json({ error: "Name and email are required." });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"Dhrona AI Contact Form" <${gmailUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry — ${name}${body.company ? ` (${body.company})` : ""} | Dhrona AI`,
      html: buildHtml(body),
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again or reach us on WhatsApp." });
  }
});

export default router;

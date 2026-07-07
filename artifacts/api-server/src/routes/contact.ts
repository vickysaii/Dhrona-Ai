import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router: IRouter = Router();

const TO_EMAIL = "annarapuvirupaksh@gmail.com";

function buildRaw(data: Record<string, string>): string {
  const subject = `New Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""} | Dhrona AI`;

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;color:#1a1a1a;background:#f9f9f9;">
  <div style="background:#0A0A0F;padding:24px 28px;border-radius:10px;margin-bottom:24px;">
    <h2 style="color:#3B82F6;margin:0;font-size:20px;">📩 New Contact Form Submission</h2>
    <p style="color:#94A3B8;margin:6px 0 0;font-size:13px;">Dhrona AI — Architects of Intelligence</p>
  </div>

  <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    ${[
      ["👤 Name", data.name],
      ["🏢 Company", data.company || "—"],
      ["📧 Email", `<a href="mailto:${data.email}" style="color:#3B82F6;">${data.email}</a>`],
      ["📞 Phone", data.phone || "—"],
      ["🏭 Industry", data.industry || "—"],
      ["⚙️ Service", data.service || "—"],
      ["💰 Budget", data.budget || "—"],
    ]
      .map(
        ([label, value], i) =>
          `<tr style="background:${i % 2 === 0 ? "#fff" : "#f8fafc"};">
            <td style="padding:12px 16px;font-weight:600;font-size:13px;color:#555;width:38%;border-bottom:1px solid #f0f0f0;">${label}</td>
            <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #f0f0f0;">${value}</td>
          </tr>`
      )
      .join("")}
  </table>

  <div style="margin-top:20px;padding:20px;background:#fff;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    <h3 style="margin:0 0 10px;font-size:14px;color:#333;font-weight:600;">📝 Project Description</h3>
    <p style="margin:0;font-size:14px;line-height:1.7;color:#444;">${data.description || "—"}</p>
  </div>

  <p style="margin-top:24px;font-size:11px;color:#aaa;text-align:center;">
    Sent automatically from the Dhrona AI contact form · <a href="https://dhronaai.com" style="color:#3B82F6;">dhronaai.com</a>
  </p>
</body>
</html>`;

  const subjectEncoded = `=?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`;

  const message = [
    `To: ${TO_EMAIL}`,
    `From: me`,
    `Reply-To: ${data.email}`,
    `Subject: ${subjectEncoded}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    ``,
    html,
  ].join("\r\n");

  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

router.post("/contact", async (req, res) => {
  try {
    const body = req.body as Record<string, string>;
    const { name, email } = body;

    if (!name?.trim() || !email?.trim()) {
      res.status(400).json({ error: "Name and email are required." });
      return;
    }

    const raw = buildRaw(body);

    const connectors = new ReplitConnectors();
    const gmailRes = await connectors.proxy(
      "google-mail",
      "/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        body: JSON.stringify({ raw }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!gmailRes.ok) {
      const errText = await gmailRes.text();
      console.error("Gmail API error:", gmailRes.status, errText);
      res.status(502).json({ error: "Failed to send email. Please try again." });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

export default router;

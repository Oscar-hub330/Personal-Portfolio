// api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message, hp } = req.body;

    // Honeypot spam trap (bots fill this, humans don’t)
    if (hp && hp.length > 0) {
      return res.status(200).json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing fields" });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("Missing API key");
      return res
        .status(500)
        .json({ error: "Server misconfigured" });
    }

    // Send email via Resend REST API
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "madalaneoscar50@gmail.com",
        subject: `New message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        `
      })
    });

    if (!resendRes.ok) {
      console.error(await resendRes.text());
      return res
        .status(502)
        .json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server Error" });
  }
}

import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Oscar Website Contact <onboarding@resend.dev>",
      to: "madalaneoscar50@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Message From Your Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ message: "Failed to send message." });
  }
}

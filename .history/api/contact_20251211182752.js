import React, { useState } from "react";
import { Mail, User, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hp: "" // Honeypot
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 glass rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Honeypot field (hidden) */}
        <input
          type="text"
          name="hp"
          value={form.hp}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        {/* NAME FIELD */}
        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
          <User className="text-cyan-300" size={20} />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            required
          />
        </div>

        {/* EMAIL FIELD */}
        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
          <Mail className="text-cyan-300" size={20} />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            required
          />
        </div>

        {/* MESSAGE FIELD */}
        <div className="flex items-start gap-3 bg-white/10 p-3 rounded-lg">
          <MessageSquare className="text-cyan-300 mt-1" size={20} />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 min-h-[120px]"
            required
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold flex items-center justify-center gap-2 transition"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* FEEDBACK MESSAGES */}
        {status === "success" && (
          <p className="text-green-400 text-center mt-2">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}

import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // honeypot
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: "Message sent successfully!", error: "" });
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        setStatus({ loading: false, success: "", error: data.error || "Failed to send message" });
      }

    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus({ loading: false, success: "", error: "Server error. Try again later." });
    }
  }

  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Form */}
        <form onSubmit={onSubmit} className="glass rounded-xl p-6 space-y-4">

          {/* Honeypot (hidden from humans) */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={onChange}
            className="hidden"
          />

          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="w-full p-3 rounded bg-transparent border border-gray-700 text-white"
          />

          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Your email"
            className="w-full p-3 rounded bg-transparent border border-gray-700 text-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Your message"
            className="w-full p-3 rounded bg-transparent border border-gray-700 text-white"
          />

          {/* Status messages */}
          {status.success && (
            <p className="text-green-400 text-sm">{status.success}</p>
          )}
          {status.error && (
            <p className="text-red-400 text-sm">{status.error}</p>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded font-semibold disabled:opacity-50"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Information */}
        <aside className="glass rounded-xl p-6 text-gray-300 space-y-4">

          <h3 className="font-semibold text-white">Contact Info</h3>

          <div className="flex items-center gap-3">
            <MdEmail className="text-cyan-300 text-xl" />
            <a href="mailto:madalaneoscar50@gmail.com" className="text-cyan-300">
              madalaneoscar50@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MdPhone className="text-cyan-300 text-xl" />
            <a href="tel:0728968717" className="text-cyan-300">
              072 896 8717
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-cyan-300 text-xl" />
            <a
              href="https://www.linkedin.com/in/oscar-madalane-123456789/"
              target="_blank"
              className="text-cyan-300"
              rel="noreferrer"
            >
              Oscar Madalane
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-cyan-300 text-xl" />
            <a
              href="https://github.com/oscar-madalane"
              target="_blank"
              className="text-cyan-300"
              rel="noreferrer"
            >
              oscar-madalane
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MdLocationOn className="text-cyan-300 text-xl" />
            <span>South Africa</span>
          </div>

          <p className="text-gray-400 pt-2 text-sm">
            Open to remote and hybrid opportunities. Available for interviews.
          </p>
        </aside>
      </div>
    </section>
  );
}

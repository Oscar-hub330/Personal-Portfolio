import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // placeholder: wire to email API or backend
    alert("Thanks! Message sent (demo).");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="glass rounded-xl p-6 space-y-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="w-full p-3 rounded bg-transparent border border-gray-700 text-white" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Your email" className="w-full p-3 rounded bg-transparent border border-gray-700 text-white" />
          <textarea name="message" value={form.message} onChange={onChange} rows={6} placeholder="Message" className="w-full p-3 rounded bg-transparent border border-gray-700 text-white" />
          <button type="submit" className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded font-semibold">Send Message</button>
        </form>

        <aside className="glass rounded-xl p-6">
          <h3 className="font-semibold">Contact Info</h3>
          <p className="text-gray-300 mt-2">Email: <a className="text-cyan-300" href="mailto:madalaneoscar50@gmail.com">madalaneoscar50@gmail.com</a></p>
          <p className="text-gray-300 mt-2">Phone: <a className="text-cyan-300" href="tel:0728968717">072 896 8717</a></p>
          <p className="text-gray-300 mt-2">LinkedIn: <a className="text-cyan-300" href="https://www.linkedin.com/in/oscar-madalane-123456789/">Oscar Madalane</a></p>
          
          <p className="text-gray-300 mt-2">Location: South Africa</p>
          <p className="text-gray-300 mt-4">Open to remote and hybrid opportunities. Available for interviews.</p>
        </aside>
      </div>
    </section>
  );
}

import React from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <SectionTitle title="Contact Me" />
      <form className="bg-black/40 border border-gray-800 rounded-lg p-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border border-gray-700 bg-black/50 px-4 py-2 rounded-lg text-white focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Your Email" className="w-full border border-gray-700 bg-black/50 px-4 py-2 rounded-lg text-white focus:ring-2 focus:ring-blue-500" />
        <textarea rows="4" placeholder="Your Message" className="w-full border border-gray-700 bg-black/50 px-4 py-2 rounded-lg text-white focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;

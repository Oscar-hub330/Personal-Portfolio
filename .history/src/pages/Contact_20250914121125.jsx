import React from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <SectionTitle title="Contact Me" />
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;

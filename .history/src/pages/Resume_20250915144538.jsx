import React from "react";
import SectionTitle from "../components/SectionTitle";

function Resume() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      <SectionTitle title="Resume" />
      <p className="text-gray-300 mb-6">
        Download a copy of my professional resume or view it online.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;

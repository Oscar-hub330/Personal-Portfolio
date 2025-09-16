import React from "react";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <SectionTitle title="About Me" />
      <p className="text-gray-300 leading-relaxed text-lg text-center">
        I am a **tech-driven problem solver** with a strong foundation in software
        development, databases, and AI. Currently pursuing ICT studies, I focus
        on delivering **innovative digital solutions** that empower communities
        and businesses. My vision is to bridge technology with real-world impact,
        blending creativity and engineering.
      </p>
    </section>
  );
}

export default About;

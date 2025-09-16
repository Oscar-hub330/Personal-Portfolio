import React from "react";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <SectionTitle title="About Me" />
      <p className="text-gray-600 leading-relaxed text-lg">
        I am Oscar Madalane, a junior software developer with expertise in
        full-stack development, database design, and AI-driven systems.
        Currently pursuing ICT studies while actively building real-world
        applications. My goal is to contribute to impactful projects and grow as
        a professional developer.
      </p>
    </section>
  );
}

export default About;

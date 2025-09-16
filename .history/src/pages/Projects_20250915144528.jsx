import React from "react";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  const projects = [
    { name: "Smart IoT Dashboard", description: "Real-time IoT device control with weather API & AI voice." },
    { name: "Zulu-English AI Translator", description: "Built using Meta’s NLLB with offline Raspberry Pi support." },
    { name: "NPO Website + Admin Portal", description: "Dynamic React + MongoDB system with newsletters/events." }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:scale-105 transition transform border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400">{proj.name}</h3>
            <p className="text-gray-300 mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  const projects = [
    {
      name: "Smart IoT Dashboard",
      description:
        "A web dashboard with real-time IoT device control, weather API integration, and AI-based voice commands.",
    },
    {
      name: "AI Zulu-English Translator",
      description:
        "Built on Meta’s NLLB model with voice input/output, supporting offline use on Raspberry Pi.",
    },
    {
      name: "NPO Website with Admin Portal",
      description:
        "Dynamic React + MongoDB system for blogs, newsletters, and events with secure admin authentication.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{proj.name}</h3>
            <p className="text-gray-600 mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

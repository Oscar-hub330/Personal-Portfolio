import React from "react";
import SectionTitle from "../components/SectionTitle";

function Experience() {
  const jobs = [
    {
      role: "Software Developer Intern",
      company: "JumpStart NPO",
      duration: "2024 - Present",
      details: "Contributed to AI-driven educational systems, admin portals, and IoT integration."
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2023 - 2024",
      details: "Developed IoT systems, React websites, and smart applications."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <SectionTitle title="Experience" />
      <div className="space-y-8 mt-8">
        {jobs.map((job, i) => (
          <div key={i} className="bg-black/40 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-400">{job.role}</h3>
            <p className="text-gray-400">{job.company} | {job.duration}</p>
            <p className="text-gray-300 mt-2">{job.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

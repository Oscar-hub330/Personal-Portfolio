import React from "react";

const jobs = [
  {
    role: "Software Developer Intern",
    company: "JumpStart NPO",
    period: "2024 — Present",
    bullets: [
      "Built admin portals (React + MongoDB) for blog/news management",
      "Integrated voice-enabled assistant features for the Alpha robot",
      "Worked on database schemas and infra design"
    ]
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 — 2024",
    bullets: ["Delivered small web apps, IoT prototypes, and dashboards"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Experience</h2>

      <div className="space-y-6">
        {jobs.map((j, idx) => (
          <div key={idx} className="glass rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-semibold">{j.role}</div>
                <div className="text-sm text-gray-300">{j.company}</div>
              </div>
              <div className="text-sm text-gray-400">{j.period}</div>
            </div>

            <ul className="mt-3 list-disc ml-5 text-gray-300">
              {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

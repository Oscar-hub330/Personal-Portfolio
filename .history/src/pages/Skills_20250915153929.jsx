import React from "react";

const frontend = [
  { name: "React", score: 85 },
  { name: "Tailwind CSS", score: 80 },
  { name: "MUI", score: 70 },
  { name: "HTML/CSS", score: 90 }
];
const backend = [
  { name: "Node.js", score: 70 },
  { name: "Express", score: 68 },
  { name: "MongoDB", score: 72 },
  { name: "Postgres", score: 60 }
];
const tools = ["Git", "Docker (basic)", "Supabase", "Linux"];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass rounded-xl p-6">
          <h4 className="font-semibold mb-4">Frontend</h4>
          <div className="space-y-3">
            {frontend.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{s.name}</span>
                  <span>{s.score}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded mt-1 overflow-hidden">
                  <div style={{ width: `${s.score}%` }} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h4 className="font-semibold mb-4">Backend</h4>
          <div className="space-y-3">
            {backend.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{s.name}</span>
                  <span>{s.score}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded mt-1 overflow-hidden">
                  <div style={{ width: `${s.score}%` }} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h4 className="font-semibold mb-4">Tools & Concepts</h4>
          <ul className="text-gray-300 space-y-2">
            {tools.map((t) => <li key={t}>• {t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

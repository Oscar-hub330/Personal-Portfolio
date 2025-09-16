import React from "react";

const projects = [
  {
    title: "NPO Website & Admin Portal",
    desc: "React + MongoDB platform supporting blogs, newsletters, events, and admin management.",
    tech: ["React", "Node", "MongoDB"]
  },
  {
    title: "Smart IoT Dashboard",
    desc: "Dashboard for device control, weather integration, and status monitoring.",
    tech: ["React", "Python", "REST"]
  },
  {
    title: "Alpha Talk Back Robot",
    desc: "Offline conversational assistant using Vosk ASR and pyttsx3 TTS on Raspberry Pi.",
    tech: ["Python", "Vosk", "TTS"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="glass rounded-xl p-6 hover:translate-y-[-4px] transition-transform shadow-lg">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800/60 text-gray-200">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="text-cyan-300 text-sm hover:underline" href="#">Demo</a>
              <a className="text-cyan-300 text-sm hover:underline" href="#">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

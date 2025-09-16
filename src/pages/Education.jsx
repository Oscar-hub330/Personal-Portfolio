import React from "react";

const edu = [
  { degree: "Diploma in ICT (Software Development)", institution: "Your Institution", period: "2022 — Present" },
  { degree: "High School", institution: "Your High School", period: "Graduated 2021" }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Education</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {edu.map((e, i) => (
          <div key={i} className="glass rounded-xl p-6">
            <div className="font-semibold">{e.degree}</div>
            <div className="text-sm text-gray-300">{e.institution}</div>
            <div className="text-sm text-gray-400 mt-2">{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

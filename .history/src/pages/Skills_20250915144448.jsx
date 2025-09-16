import React from "react";
import SectionTitle from "../components/SectionTitle";

function Skills() {
  const skills = [
    "React.js","Node.js","Python","Tailwind CSS","MongoDB",
    "SQL/PostgreSQL","REST APIs","AI/NLP","IoT Systems"
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <SectionTitle title="Tech Stack" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition transform border border-gray-700"
          >
            <p className="text-white font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

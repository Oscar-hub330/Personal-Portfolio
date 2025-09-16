import React from "react";
import SectionTitle from "../components/SectionTitle";

function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "MongoDB",
    "SQL/PostgreSQL",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <SectionTitle title="Technical Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg py-4 px-6 text-center hover:shadow-lg transition"
          >
            <p className="text-gray-800 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

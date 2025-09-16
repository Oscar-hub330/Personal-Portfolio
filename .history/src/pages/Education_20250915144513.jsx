import React from "react";
import SectionTitle from "../components/SectionTitle";

function Education() {
  const education = [
    { degree: "Diploma in ICT (Software Development)", institution: "University Name", year: "2022 - Present" },
    { degree: "High School", institution: "School Name", year: "Graduated 2021" }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <SectionTitle title="Education" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {education.map((edu, i) => (
          <div key={i} className="bg-black/40 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-blue-400">{edu.institution}</p>
            <p className="text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

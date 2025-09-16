import React from "react";
import SectionTitle from "../components/SectionTitle";

function Education() {
  const education = [
    {
      degree: "Diploma in ICT (Software Development)",
      institution: "University/College Name",
      year: "2022 - Present",
    },
    {
      degree: "High School",
      institution: "School Name",
      year: "Graduated 2021",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <SectionTitle title="Education" />
      {education.map((edu, index) => (
        <div key={index} className="mb-6 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
          <p className="text-blue-600">{edu.institution}</p>
          <p className="text-gray-500 text-sm">{edu.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;

import React from "react";
import SectionTitle from "../components/SectionTitle";

function Experience() {
  const jobs = [
    {
      role: "Software Developer Intern",
      company: "JumpStart NPO",
      duration: "2024 - Present",
      details:
        "Contributed to building an AI-driven educational platform and developed admin portals for blog/news management.",
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2023 - 2024",
      details:
        "Worked on small-scale projects including IoT systems, React websites, and database design solutions.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <SectionTitle title="Work Experience" />
      {jobs.map((job, index) => (
        <div key={index} className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
          <p className="text-blue-600">{job.company}</p>
          <p className="text-gray-500 text-sm">{job.duration}</p>
          <p className="text-gray-600 mt-2">{job.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;

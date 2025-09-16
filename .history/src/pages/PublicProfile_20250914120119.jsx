import React from "react";
import { Avatar, Chip, Box, Button, Divider } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

export default function PublicProfile() {
  // For now, static data (we can later pull this from DB or JSON)
  const profile = {
    name: "Oscar Siyabonga Madalane",
    headline: "Junior Software Developer | ICT Student",
    bio: "Passionate about building innovative web applications, AI-driven systems, and scalable solutions. Skilled in full-stack development and eager to contribute to impactful tech projects.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Tailwind CSS",
      "Material UI",
      "Git/GitHub",
    ],
    projects: [
      {
        title: "NPO Website & Admin Portal",
        description:
          "Built a React + MongoDB platform for managing blog posts, news, and events for a youth-focused NPO.",
      },
      {
        title: "Smart IoT System Dashboard",
        description:
          "Designed a futuristic dashboard for IoT device control and real-time monitoring using Python backend.",
      },
      {
        title: "Alpha Talk Back Robot",
        description:
          "Integrated Vosk ASR and pyttsx3 TTS for offline conversational AI in a Raspberry Pi robot assistant.",
      },
    ],
    education: [
      {
        degree: "ICT Diploma (Ongoing)",
        institution: "South African Institution",
        period: "2022 – Present",
      },
    ],
    avatarUrl: "https://via.placeholder.com/150", // replace with real photo
    contact: {
      email: "oscar.madalane@example.com",
      github: "https://github.com/oscar-madalane",
      linkedin: "https://linkedin.com/in/oscar-madalane",
    },
  };

  return (
    <div className="min-h-screen flex justify-center p-6 bg-gray-50">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            sx={{ width: 120, height: 120 }}
          />
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-lg text-gray-600">{profile.headline}</p>
            <p className="text-sm text-gray-700 mt-2">{profile.bio}</p>
            <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
              {profile.skills.map((s) => (
                <Chip key={s} label={s} size="small" color="primary" />
              ))}
            </Box>
          </div>
        </div>

        {/* Divider */}
        <Divider sx={{ my: 4 }} />

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-3">
            {profile.projects.map((p, i) => (
              <li
                key={i}
                className="p-4 border rounded-lg hover:shadow transition"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <ul>
            {profile.education.map((edu, i) => (
              <li key={i} className="mb-2">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution} — {edu.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <div className="flex gap-3">
            <Button
              variant="outlined"
              startIcon={<Mail />}
              href={`mailto:${profile.contact.email}`}
            >
              Email
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              href={profile.contact.github}
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              href={profile.contact.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
    
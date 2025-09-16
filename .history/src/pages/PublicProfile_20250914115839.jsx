import React from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

export default function PublicProfile() {
  const { username } = useParams();

  // Temporary mock profile
  const profile = {
    name: "John Doe",
    headline: "Aspiring Software Developer",
    bio: "Passionate about building modern web applications.",
    skills: ["React", "Tailwind", "Node.js"],
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow p-6">
        <div className="flex gap-6 items-start">
          <Avatar src={profile.avatarUrl} sx={{ width: 96, height: 96 }} />
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{profile.headline}</p>
            <p className="text-sm text-gray-700 mb-4">{profile.bio}</p>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {profile.skills.map((s) => (
                <Chip key={s} label={s} size="small" />
              ))}
            </Box>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Viewing profile: <span className="font-mono">{username}</span>
        </p>
      </div>
    </div>
  );
}

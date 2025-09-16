import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">My Profiles</h1>
          <Link to="/edit">
            <Button variant="contained">Create / Edit Profile</Button>
          </Link>
        </header>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">
            No profiles yet — create one.
          </p>
        </div>
      </div>
    </div>
  );
}

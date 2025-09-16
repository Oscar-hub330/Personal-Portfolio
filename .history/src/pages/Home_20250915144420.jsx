import React from "react";
import { Button } from "@mui/material";

function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-28 px-6 bg-gradient-to-r from-indigo-900 via-black to-indigo-900">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
        Hi, I’m <span className="text-blue-400">Oscar Madalane</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl">
        🚀 Junior Software Developer passionate about building smart solutions with AI, IoT, and modern web technologies.
      </p>
      <div className="mt-8 flex gap-4">
        <Button variant="contained" color="primary" href="/projects">
          View Projects
        </Button>
        <Button variant="outlined" color="secondary" href="/resume">
          Download CV
        </Button>
      </div>
    </section>
  );
}

export default Home;

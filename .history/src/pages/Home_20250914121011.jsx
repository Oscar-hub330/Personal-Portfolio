import React from "react";
import { Button } from "@mui/material";

function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <img
        src="/profile.jpg"
        alt="Oscar Madalane"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-blue-500"
      />
      <h1 className="text-4xl font-bold text-gray-800">Oscar Madalane</h1>
      <p className="text-lg text-gray-600 mt-2">Junior Software Developer</p>
      <p className="max-w-2xl text-gray-500 mt-4">
        Passionate about building scalable applications, problem-solving, and
        learning modern technologies to deliver innovative solutions.
      </p>
      <div className="mt-6 flex gap-4">
        <Button variant="contained" color="primary" href="/resume">
          View Resume
        </Button>
        <Button variant="outlined" color="secondary" href="/contact">
          Contact Me
        </Button>
      </div>
    </section>
  );
}

export default Home;

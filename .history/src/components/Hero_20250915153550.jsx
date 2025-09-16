import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left: text */}
        <div className="space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi There! <span className="text-cyan-400">👋</span>
            <br />
            I'M <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-500">Oscar Madalane</span>
          </motion.h1>

          <div className="text-lg text-gray-300 max-w-xl">
            <p className="mb-3">
              I build polished, production-ready frontends — with a strong understanding of backend systems. I love crafting delightful user experiences, optimizing performance, and shipping reliable features.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="text-cyan-400 font-medium">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer", 2000,
                    "Backend Enthusiast", 2000,
                    "UI/UX Focused", 2000
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              href="#contact"
              variant="contained"
              sx={{
                background: "linear-gradient(90deg,#00f7ff,#6a00f4)",
                px: 3,
                py: 1.25,
                fontWeight: 600
              }}
            >
              Hire Me
            </Button>

            <Button
              href="/resume.pdf"
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.12)", color: "inherit" }}
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right: profile image + glass bio */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 glass rounded-2xl p-6 text-left shadow-xl">
            <img
              src="/profile.jpg"
              alt="Oscar Madalane"
              className="w-28 h-28 rounded-full border-2 border-cyan-400 mb-4 object-cover"
            />
            <div>
              <div className="text-lg font-semibold">Oscar Siyabonga Madalane</div>
              <div className="text-sm text-gray-300">Junior Software Developer</div>
              <div className="text-sm text-gray-400 mt-3">
                Location: South Africa
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline text-sm">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

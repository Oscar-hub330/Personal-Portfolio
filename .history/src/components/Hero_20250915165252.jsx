// src/components/Hero.jsx
import { Button } from "@mui/material";
import { motion as _motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Oscar Madalane 👋
        </motion.h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          🚀 Junior Software Developer passionate about building smart solutions 
          with <span className="text-cyan-400">AI</span>, 
          <span className="text-purple-400"> IoT</span>, 
          and modern web technologies.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Button variant="contained" color="primary" size="large">
            View Projects
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Download CV
          </Button>
        </div>
      </div>

      {/* Right Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400">
          <img
            src="/profile.jpg"
            alt="Oscar Madalane"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}

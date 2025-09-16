import React from "react";
import { Button, Typography } from "@mui/material";
import { motion as  } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Typography 
          variant="h1" 
          className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-4xl md:text-5xl lg:text-6xl"
        >
          Hi, I'm Oscar Madalane
        </Typography>
        
        <Typography 
          variant="h4" 
          className="mb-10 text-gray-300 text-xl md:text-2xl font-normal max-w-3xl mx-auto leading-relaxed"
        >
          Junior Software Developer passionate about building smart solutions with 
          <span className="text-cyan-400 font-medium"> AI</span>, 
          <span className="text-purple-400 font-medium"> IoT</span>, and 
          <span className="text-pink-400 font-medium"> modern web technologies</span>.
        </Typography>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            variant="contained"
            size="large"
            href="#projects"
            className="!bg-gradient-to-r !from-cyan-500 !to-blue-600 !rounded-full px-8 py-3 !text-lg !font-semibold !normal-case shadow-lg hover:shadow-cyan-500/25 hover:!scale-105 transition-transform duration-300"
            sx={{
              background: 'linear-gradient(45deg, #06b6d4 30%, #2563eb 90%)',
              boxShadow: '0 3px 5px 2px rgba(6, 182, 212, .3)',
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/resume.pdf"
            className="!border-2 !border-purple-500 !text-purple-400 hover:!bg-purple-500 hover:!text-white !rounded-full px-8 py-3 !text-lg !font-semibold !normal-case shadow-lg hover:shadow-purple-500/25 hover:!scale-105 transition-transform duration-300"
            sx={{
              boxShadow: '0 3px 5px 2px rgba(147, 51, 234, .1)',
            }}
          >
            Download CV
          </Button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
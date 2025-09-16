import React from "react";
import { Button, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Hi, I’m Oscar Madalane
        </Typography>
        <Typography variant="h6" className="mb-6 text-gray-300 max-w-2xl mx-auto">
           Junior Software Developer passionate about building smart solutions with 
          <span className="text-cyan-400"> AI</span>, 
          <span className="text-purple-400"> IoT</span>, and 
          <span className="text-blue-400"> modern web technologies</span>.
        </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
        variant="outlined"
        size="medium"
        href="#projects"
        className=" !to-blue-600 !rounded-full px-8 py-3 !text-lg !normal-case shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 w-full sm:w-auto text-center"
        
      >
        View Projects
      </Button>
          <Button
            variant="outlined"
            color="secondary"
            href="/resume.pdf"
            className="!border-purple-500 !text-purple-400 hover:!bg-purple-500 hover:!text-white !rounded-full px-6"
          >
            Download CV
          </Button>
        </div>

      </motion.div>
    </section>
  );
}

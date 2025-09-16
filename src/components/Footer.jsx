import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/70 backdrop-blur-lg border-t border-gray-800 py-6 text-gray-400 text-center">
      <p>© {new Date().getFullYear()} Oscar Madalane</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-pink-500">
          <FaEnvelope size={22} />
        </a>
      </div>
    </footer>
  );
}

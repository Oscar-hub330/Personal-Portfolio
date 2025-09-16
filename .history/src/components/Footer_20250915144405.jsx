import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-6 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          <FaGithub size={24} className="hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-400 transition" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope size={24} className="hover:text-blue-400 transition" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Oscar Madalane. Built with ❤️ & React.</p>
    </footer>
  );
}

export default Footer;

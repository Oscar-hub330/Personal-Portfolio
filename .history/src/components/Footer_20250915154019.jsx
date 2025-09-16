import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-300">© {new Date().getFullYear()} Oscar Madalane</div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

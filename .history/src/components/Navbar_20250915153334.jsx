import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBlog, FaEnvelope } from "react-icons/fa";

const nav = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "resume", label: "Resume", icon: <FaFileAlt /> },
  { id: "blogs", label: "Blogs", icon: <FaBlog /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> }
];

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 top-0">
      <div className="bg-gray-900 text-gray-100/90 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-cyan-400 font-semibold">OscarMadalane.dev</div>
            <div className="text-xs text-gray-400">Frontend Developer</div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <Link
                key={n.id}
                to={n.id}
                smooth
                offset={-70}
                duration={500}
                className="flex items-center gap-2 text-gray-200 hover:text-cyan-300 cursor-pointer text-sm"
              >
                <span className="text-base">{n.icon}</span>
                <span>{n.label}</span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden text-gray-200">Menu</div>
        </div>
      </div>
    </header>
  );
}

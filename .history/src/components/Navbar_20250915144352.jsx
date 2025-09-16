import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide hover:text-cyan-400 transition">
          Oscar Madalane
        </h1>
        <ul className="flex gap-6 text-gray-300 font-medium">
          {["Home","About","Skills","Experience","Education","Projects","Resume","Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

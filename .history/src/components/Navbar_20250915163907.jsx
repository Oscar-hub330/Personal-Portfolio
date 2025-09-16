import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Home, Person, Work, School, Folder, Description, Email } from "@mui/icons-material";

export default function Navbar() {
  const navItems = [
    { label: "Home", icon: <Home />, link: "#home" },
    { label: "About", icon: <Person />, link: "#about" },
    { label: "Skills", icon: <Work />, link: "#skills" },
    { label: "Projects", icon: <Folder />, link: "#projects" },
    { label: "Experience", icon: <Work />, link: "#experience" },
    { label: "Education", icon: <School />, link: "#education" },
    { label: "Resume", icon: <Description />, link: "#resume" },
    { label: "Contact", icon: <Email />, link: "#contact" },
  ];

  return (
    <AppBar
      position="fixed"
      className="bg-black/50 backdrop-blur-lg border-b border-gray-800"
      elevation={0}
    >
      <Toolbar className="flex justify-between max-w-7xl mx-auto w-full">
        <h1 className="text-xl font-bold text-cyan-400">OscarMadalane.dev</h1>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, idx) => (
            <Button
              key={idx}
              href={item.link}
              startIcon={item.icon}
              className="!text-gray-200 hover:!text-cyan-400 transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

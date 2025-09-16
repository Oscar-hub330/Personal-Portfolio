import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
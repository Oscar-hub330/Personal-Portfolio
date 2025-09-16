import React, { useEffect } from "react";
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
  // Handle smooth scrolling for navigation
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Check if the click is on an anchor link with a hash
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate position with offset for navbar
          const navbarHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 70;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without refreshing the page
          window.history.pushState(null, null, href);
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleSmoothScroll);

    // Handle initial page load with hash in URL
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      const navbarHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 70;
      
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    }

    // Clean up
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
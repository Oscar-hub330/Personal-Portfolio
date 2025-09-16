import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">About Me</motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-xl p-6">
          <p className="text-gray-300 leading-relaxed">
            I'm Oscar — a front-end-focused developer with practical backend experience. I design and build fast, accessible, and maintainable products. I enjoy translating product requirements into clean code and shipping production features. Key interests: UI performance, component architecture, accessible interfaces, and applied machine learning for practical problems.
          </p>

          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="text-sm text-gray-300"><strong>Role:</strong> Frontend Developer</li>
            <li className="text-sm text-gray-300"><strong>Experience:</strong> Junior (projects & internships)</li>
            <li className="text-sm text-gray-300"><strong>Stack:</strong> React, Tailwind, Node.js, Python</li>
            <li className="text-sm text-gray-300"><strong>Open to:</strong> Remote / Hybrid roles</li>
          </ul>
        </div>

        <aside className="glass rounded-xl p-6">
          <h3 className="font-semibold mb-3">Quick facts</h3>
          <div className="text-sm text-gray-300 space-y-2">
            <div>📍 Based in South Africa</div>
            <div>🎓 ICT Student</div>
            <div>💼 Worked on NPO & IoT dashboards</div>
            <div>⚡ Open to contract / full-time</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

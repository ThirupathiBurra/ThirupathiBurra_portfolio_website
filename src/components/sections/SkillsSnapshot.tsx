"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSnapshot() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl font-normal text-white">Core Competencies.</h2>
          <p className="text-zinc-400 mt-2">Technical arsenal deployed in production.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-white border-b border-white/10 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-col space-y-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center space-x-3 text-zinc-400 group">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-zinc-400 transition-colors"></span>
                    <span className="font-light tracking-wide group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

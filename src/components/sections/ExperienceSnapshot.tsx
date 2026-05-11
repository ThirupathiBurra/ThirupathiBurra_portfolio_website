"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSnapshot() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl font-normal text-white">Experience.</h2>
          <p className="text-zinc-400 mt-2">Professional roles and internships.</p>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-16 group"
            >
              <div className="md:w-1/3 flex-shrink-0">
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">{exp.date}</p>
                <h3 className="text-xl font-medium text-white mt-2">{exp.role}</h3>
                <p className="text-zinc-400 mt-1">{exp.company}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

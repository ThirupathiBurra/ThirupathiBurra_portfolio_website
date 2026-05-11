"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { secondaryProjects, ProjectCategory } from "@/data/projects";
import { Github } from "@/components/icons";
import Link from "next/link";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All", "GenAI", "Backend", "ML", "CV", "Data Science", "Automation", "Other"
];

export default function SecondaryProjects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = secondaryProjects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section className="py-32 border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-3xl font-normal text-white mb-8">Other Engineering Work.</h2>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white text-black font-medium"
                  : "bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              key={project.id}
              className="group flex flex-col justify-between bg-[#0A0A0A] border border-white/10 rounded-xl p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-white">{project.title}</h3>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                      <Github strokeWidth={1.5} className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-4">{project.category}</p>
                <p className="text-zinc-400 font-light leading-relaxed mb-8">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs text-zinc-500 bg-white/5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl font-normal text-white">Selected Works.</h2>
          <p className="text-zinc-400 mt-2">Flagship builds highlighting AI, backend, and multi-agent workflows.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-700 ease-out"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  <Link href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight strokeWidth={1.5} className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-4">{project.subtitle}</p>
                <p className="text-zinc-400 font-light leading-relaxed mb-8">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs text-zinc-400 border border-zinc-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center justify-center space-x-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-white/10"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

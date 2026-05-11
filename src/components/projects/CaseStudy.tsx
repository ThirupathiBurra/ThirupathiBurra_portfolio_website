"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";

export default function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8 py-24 border-b border-white/5 last:border-0"
    >
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-4 block">
            0{index + 1} — {project.category}
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {project.title}
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            {project.summary}
          </p>
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Source</span>
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:scale-[0.98] transition-transform duration-300"
            >
              <span className="text-sm font-medium">Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Grid Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-white/5">
        
        {/* Left Column: Context */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">The Problem</h3>
            <p className="text-zinc-300 font-light leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">The Solution</h3>
            <p className="text-zinc-300 font-light leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Right Column: Technicals */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">Architecture</h3>
            <p className="text-zinc-300 font-light leading-relaxed">{project.architecture}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">Impact & Metrics</h3>
            <p className="text-white font-medium leading-relaxed">{project.impact}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">Key Learnings</h3>
            <p className="text-zinc-300 font-light leading-relaxed">{project.keyLearnings}</p>
          </div>
          
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs text-zinc-400 border border-zinc-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
}

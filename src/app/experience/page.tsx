"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="container mx-auto max-w-4xl px-6 py-24 sm:py-32">
        
        {/* Navigation / Back Button */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-24">
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-6">
            Experience.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            A track record of building, optimizing, and deploying production-grade AI systems in enterprise and startup environments.
          </p>
        </header>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 md:pl-0"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Left Column: Metadata */}
                <div className="md:w-1/3 shrink-0">
                  <div className="sticky top-24">
                    <span className="text-sm font-medium tracking-wider text-zinc-500 uppercase block mb-2">
                      {exp.duration}
                    </span>
                    <h2 className="text-2xl font-medium text-white mb-1">{exp.role}</h2>
                    <h3 className="text-lg text-zinc-400 font-light">{exp.company}</h3>
                    <p className="text-sm text-zinc-600 mt-2">{exp.location}</p>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="md:w-2/3 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-500">
                  <div className="mb-8">
                    <h4 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-4">Responsibilities</h4>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-4 text-zinc-300 font-light leading-relaxed">
                          <span className="text-zinc-600 select-none">—</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-medium tracking-wider text-zinc-500 uppercase mb-3">Key Outcome</h4>
                    <p className="text-white font-medium leading-relaxed">{exp.outcomes}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 text-xs text-zinc-400 border border-zinc-800 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

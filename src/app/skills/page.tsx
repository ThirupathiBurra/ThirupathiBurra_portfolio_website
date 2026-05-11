"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-32">
        
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
            Technical Arsenal.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            A strictly curated breakdown of the languages, frameworks, and tools I use to build intelligent, production-ready systems.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cluster, idx) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-500 flex flex-col"
            >
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                {cluster.category}
              </h2>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-light text-zinc-300 bg-white/5 border border-white/5 rounded-md hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}

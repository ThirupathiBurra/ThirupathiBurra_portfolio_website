"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";
import Link from "next/link";
import { ArrowLeft, BookOpen, Trophy, Award } from "lucide-react";

export default function AchievementsPage() {
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
            Validation.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Academic research, national hackathon finals, and global community recognition proving technical depth and execution under pressure.
          </p>
        </header>

        <div className="space-y-32">
          
          {/* Publications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
              <BookOpen className="w-6 h-6 text-zinc-400" />
              <h2 className="text-3xl font-medium text-white">Publications</h2>
            </div>
            <div className="space-y-8">
              {achievementsData.publications.map((pub, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <h3 className="text-2xl font-medium text-white">{pub.title}</h3>
                    <span className="text-sm font-medium tracking-wider text-zinc-500 uppercase shrink-0">{pub.date}</span>
                  </div>
                  <p className="text-zinc-300 font-light mb-4">{pub.journal}</p>
                  <p className="text-zinc-400 font-light leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Competitions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
              <Trophy className="w-6 h-6 text-zinc-400" />
              <h2 className="text-3xl font-medium text-white">Hackathons & Competitions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievementsData.competitions.map((comp, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-white/5 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-6">
                    {comp.award}
                  </span>
                  <h3 className="text-xl font-medium text-white mb-2">{comp.title}</h3>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">{comp.date}</p>
                  <p className="text-zinc-400 font-light leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
              <Award className="w-6 h-6 text-zinc-400" />
              <h2 className="text-3xl font-medium text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {achievementsData.certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors duration-300">
                  <h3 className="text-white font-medium mb-4">{cert.name}</h3>
                  <p className="text-sm text-zinc-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}

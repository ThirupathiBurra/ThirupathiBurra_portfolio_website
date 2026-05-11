"use client";

import { motion } from "framer-motion";
import { communityData } from "@/data/community";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, Users2 } from "lucide-react";
import { Github } from "@/components/icons";

export default function CommunityPage() {
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
            Beyond the Code.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            I am not just a resume holder. I am an active builder in the AI ecosystem—attending events, contributing to open source, and constantly collaborating.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Events & OS */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Open Source Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Github className="w-6 h-6 text-white" />
                <h2 className="text-3xl font-medium text-white">Open Source</h2>
              </div>
              <div className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-6">
                  {communityData.openSource.role}
                </span>
                <h3 className="text-2xl font-medium text-white mb-4">{communityData.openSource.program}</h3>
                <p className="text-zinc-400 font-light leading-relaxed max-w-lg">
                  {communityData.openSource.description}
                </p>
              </div>
            </motion.section>

            {/* Events Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Users2 className="w-6 h-6 text-white" />
                <h2 className="text-3xl font-medium text-white">Events & Build Sessions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityData.events.map((event, idx) => (
                  <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-500 flex flex-col h-full">
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-4">{event.type}</span>
                    <h3 className="text-xl font-medium text-white mb-2">{event.title}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{event.date} — {event.role}</p>
                    <p className="text-zinc-500 font-light text-sm leading-relaxed mt-auto">{event.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Right Column: Community & CTAs */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Community Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-lg font-medium text-white mb-6">Community Footprint</h3>
              <p className="text-sm text-zinc-400 font-light mb-6">Active participant and attendee across local and global networks:</p>
              <div className="flex flex-wrap gap-2">
                {communityData.involvement.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-xs text-zinc-300 bg-white/5 border border-white/5 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Freelance CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white text-black rounded-2xl p-8 relative overflow-hidden group"
            >
              <Code2 className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-medium mb-3">Open for Freelance</h3>
              <p className="text-black/70 font-medium text-sm leading-relaxed mb-8">
                Available for contract roles and freelance projects involving AI agents, RAG systems, and full-stack architecture.
              </p>
              <Link
                href="mailto:burrathirupathi453@gmail.com?subject=Freelance Inquiry"
                className="inline-flex items-center space-x-2 text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                <span className="font-medium">Let&apos;s Discuss</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Collaboration CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#050505] border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-medium text-white mb-3">Hack & Collaborate</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
                Building something cool for a hackathon? Need an AI engineer for your team? I&apos;m always open to teaming up on ambitious ideas.
              </p>
              <Link
                href="mailto:burrathirupathi453@gmail.com?subject=Collaboration Inquiry"
                className="inline-flex items-center space-x-2 text-white hover:text-zinc-400 transition-colors"
              >
                <span className="font-medium text-sm">Reach Out</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}

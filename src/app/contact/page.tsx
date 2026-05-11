"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, FileText, Code2, Terminal, BadgeCheck, MessageSquare } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="container mx-auto max-w-6xl px-6 py-24 sm:py-32">
        
        {/* Navigation / Back Button */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Contact & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center space-x-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
                </span>
                <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
                  Available for Hire
                </span>
              </span>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                Let&apos;s talk about your next project.
              </h1>
              
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 mb-12">
                <p className="text-zinc-300 font-light leading-relaxed mb-6">
                  I am actively open to discussions regarding new opportunities. Whether you need a specialist to architect a new RAG pipeline, or a dedicated engineer to join your core backend team, I am ready to contribute.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-time roles",
                    "Internships",
                    "Part-time work",
                    "Contract work",
                    "Software development",
                    "Data-related roles",
                    "Freelance collaborations"
                  ].map((role) => (
                    <span key={role} className="px-3 py-1.5 text-xs text-zinc-400 border border-zinc-800 rounded-md">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:burrathirupathi453@gmail.com"
                  className="group flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-medium transition-transform duration-300 hover:scale-[0.98] w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="https://linkedin.com/in/thirupathi-burra-49658b2a6"
                  target="_blank"
                  className="group flex items-center justify-center space-x-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 hover:bg-white/10 w-full sm:w-auto"
                >
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                  <span>LinkedIn Message</span>
                </Link>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5">
                <ContactForm />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profiles Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h2 className="text-xl font-medium text-white mb-6">Digital Footprint</h2>

              {[
                { name: "GitHub", icon: Github, href: "https://github.com/ThirupathiBurra", desc: "Open source contributions & repositories" },
                { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/thirupathi-burra-49658b2a6", desc: "Professional network & posts" },
                { name: "LeetCode", icon: Code2, href: "https://leetcode.com/u/6302839985/", desc: "Algorithmic problem solving" },
                { name: "GeeksforGeeks", icon: Terminal, href: "https://www.geeksforgeeks.org/profile/thiru09", desc: "Data structures & coding practice" },
                { name: "Google Skills", icon: BadgeCheck, href: "https://www.skills.google/profile/activity", desc: "Verified cloud & AI credentials" },
              ].map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  className="group flex items-center justify-between p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#0A0A0A] rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                      <profile.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{profile.name}</h3>
                      <p className="text-sm font-light text-zinc-500">{profile.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </Link>
              ))}

              {/* Resume Download CTA */}
              <Link
                href="/ThirupathiBurraResume.pdf"
                target="_blank"
                className="group flex items-center justify-between p-6 mt-8 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-medium text-white">Download Resume</h3>
                    <p className="text-sm font-light text-zinc-400">PDF Document (120 KB)</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={2} />
                </div>
              </Link>

            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Hero3D from "@/components/ui/Hero3D";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // fluid ease-out
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* 3D Background */}
      <Hero3D />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-8"
        >
          {/* Eyebrow / Availability */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            <p className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Available for new opportunities
            </p>
          </motion.div>

          {/* Core Identity */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Thirupathi Burra.
            </h1>
            <h2 className="text-3xl sm:text-4xl font-normal text-zinc-400">
              AI/ML Software Engineer
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-light leading-relaxed text-zinc-400 max-w-2xl"
          >
            I build intelligent systems that work. Specializing in moving beyond 
            proofs-of-concept to architect production-grade RAG pipelines, 
            multi-agent workflows, and highly scalable REST APIs.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="group flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-medium transition-transform duration-300 hover:scale-[0.98] w-full sm:w-auto"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 hover:bg-zinc-800/50 w-full sm:w-auto"
            >
              <span>Contact Me</span>
            </Link>
          </motion.div>

          {/* Social Proof Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-8"
          >
            <Link
              href="https://github.com/ThirupathiBurra"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://linkedin.com/in/thirupathi-burra-49658b2a6"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="text-zinc-500 hover:text-white transition-colors duration-300"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

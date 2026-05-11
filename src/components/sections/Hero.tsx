"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Hero3D from "@/components/ui/Hero3D";
import Link from "next/link";
import Image from "next/image";

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
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text content & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-8"
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

          {/* Right Column: Premium Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-8 lg:pt-0"
          >
            {/* Gentle Floating Motion Wrapper */}
            <motion.div
              animate={{ y: [-6, 6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ y: -8 }}
              className="relative group w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-center justify-center"
            >
              {/* Premium Glow Aura Behind Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-500/10 to-transparent blur-2xl rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Main Editorial Frame */}
              <div className="relative h-full w-full p-3 rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-colors duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/20">
                {/* Tech/Editorial Corner Crop Marks */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />

                {/* Cropped Image Wrapper */}
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-zinc-950">
                  <Image
                    src="/portrait.png"
                    alt="Thirupathi Burra Portrait"
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                    priority
                  />
                  {/* Subtle Elegant Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-70 transition-opacity duration-700" />
                  
                  {/* Glass Edge Highlight */}
                  <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none" />
                </div>
              </div>

              {/* Float Badge 1: Location & Coordinates (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-950/90 border border-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-2xl flex items-center gap-2 pointer-events-none transition-colors duration-500 group-hover:border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">SYS_ARCH // IN</span>
              </div>

              {/* Float Badge 2: Initials / Tag (Top Right) */}
              <div className="absolute -top-3 -right-3 bg-zinc-950/90 border border-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-2xl pointer-events-none transition-colors duration-500 group-hover:border-white/10">
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 uppercase">CORE // TB</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

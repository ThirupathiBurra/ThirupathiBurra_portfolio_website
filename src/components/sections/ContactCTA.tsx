"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8">
            Availability
          </span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8">
            Architect the <br className="hidden md:block" /> next phase.
          </h2>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-12">
            I am actively seeking full-time roles, internships, and freelance projects 
            where I can help transform complex AI capabilities into tangible, real-world value.
          </p>
          
          <Link
            href="/contact"
            className="group flex items-center justify-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-medium text-lg transition-transform duration-300 hover:scale-[0.98]"
          >
            <span>Say Hello</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

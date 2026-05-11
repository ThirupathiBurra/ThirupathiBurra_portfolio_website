"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ProofBar() {
  return (
    <div className="w-full border-y border-white/5 bg-[#0A0A0A] overflow-hidden py-6 relative">
      {/* Premium Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap"
        >
          {/* Double the array for seamless looping */}
          {[...portfolioData.proofPoints, ...portfolioData.proofPoints].map((point, idx) => (
            <div key={idx} className="flex items-center mx-8">
              <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
                {point}
              </span>
              <span className="mx-8 text-zinc-800">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

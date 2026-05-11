"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function EventsAndAchievements() {
  return (
    <section id="events" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-normal text-white mb-2">Events & Community.</h2>
            <p className="text-zinc-400 mb-12">Active participation in global tech ecosystems.</p>
            
            <div className="space-y-8">
              {portfolioData.events.map((event, idx) => (
                <div key={idx} className="group flex justify-between items-start border-b border-white/5 pb-8 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{event.name}</h3>
                    <p className="text-zinc-500 font-light mt-1">{event.role}</p>
                  </div>
                  <span className="text-sm font-medium tracking-wider text-zinc-600 uppercase shrink-0 text-right ml-4">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-normal text-white mb-2">Achievements.</h2>
            <p className="text-zinc-400 mb-12">Academic and competitive validation.</p>
            
            <div className="space-y-8">
              {portfolioData.achievements.map((ach, idx) => (
                <div key={idx} className="group relative pl-6 border-l border-zinc-800 hover:border-zinc-500 transition-colors">
                  <div className="absolute w-2 h-2 bg-zinc-800 rounded-full -left-[4.5px] top-2 group-hover:bg-zinc-400 transition-colors"></div>
                  <h3 className="text-lg font-medium text-white">{ach.title}</h3>
                  <span className="block text-sm font-medium tracking-wider text-zinc-500 uppercase mt-1 mb-2">
                    {ach.date}
                  </span>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {ach.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

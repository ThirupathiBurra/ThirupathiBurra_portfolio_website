"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-medium text-white mb-2">Message Sent</h3>
        <p className="text-zinc-400 font-light">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-medium text-white mb-6">Send a Message</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium tracking-wider text-zinc-500 uppercase">Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium tracking-wider text-zinc-500 uppercase">Email</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium tracking-wider text-zinc-500 uppercase">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
          placeholder="How can we collaborate?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-lg font-medium transition-transform duration-300 hover:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
      >
        <span>{status === "submitting" ? "Sending..." : "Submit Message"}</span>
        {!status && <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}

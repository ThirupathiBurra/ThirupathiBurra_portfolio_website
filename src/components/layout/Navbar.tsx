"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Community", path: "/community" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="relative z-50 text-xl font-medium tracking-tight text-white hover:text-zinc-300 transition-colors">
          TB.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.path ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-white/20 mx-4"></div>
          <Link
            href="/ThirupathiBurraResume.pdf"
            target="_blank"
            className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-[0.98] transition-transform"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%", pointerEvents: "none" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center px-6"
        >
          <nav className="flex flex-col items-center space-y-8 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-medium tracking-tight transition-colors duration-300 ${
                  pathname === link.path ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/ThirupathiBurraResume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-8 flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black rounded-full text-lg font-medium w-full max-w-xs"
            >
              <FileText className="w-5 h-5" />
              <span>Download Resume</span>
            </Link>
          </nav>
        </motion.div>

      </div>
    </header>
  );
}

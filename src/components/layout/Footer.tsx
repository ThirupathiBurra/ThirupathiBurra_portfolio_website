import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-medium tracking-tight text-white mb-2">Thirupathi Burra.</span>
          <p className="text-sm font-light text-zinc-500">
            &copy; {currentYear} Thirupathi Burra. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/ThirupathiBurra"
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://linkedin.com/in/thirupathi-burra-49658b2a6"
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link
            href="mailto:burrathirupathi453@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </div>

      </div>
    </footer>
  );
}

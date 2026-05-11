import { flagshipProjects } from "@/data/projects";
import CaseStudyCard from "@/components/projects/CaseStudy";
import SecondaryProjects from "@/components/projects/SecondaryProjects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
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
            Selected Works.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            A curated deep-dive into production-grade systems, RAG architectures, 
            and multi-agent workflows. Designed for scale, compliance, and performance.
          </p>
        </header>

        {/* Flagship Case Studies */}
        <section className="flex flex-col gap-12">
          {flagshipProjects.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* Secondary Projects Filter Grid */}
        <SecondaryProjects />

      </div>
    </main>
  );
}

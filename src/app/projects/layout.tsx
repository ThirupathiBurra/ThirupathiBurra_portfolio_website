import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated deep-dive into production-grade systems, RAG architectures, and multi-agent workflows.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

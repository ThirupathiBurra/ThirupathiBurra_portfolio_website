import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "A strictly curated breakdown of the languages, frameworks, and tools used to build intelligent, production-ready systems.",
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

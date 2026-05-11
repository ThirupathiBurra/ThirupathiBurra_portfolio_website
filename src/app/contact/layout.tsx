import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Available for new opportunities. Whether you need a specialist to architect a new RAG pipeline, or a dedicated engineer.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

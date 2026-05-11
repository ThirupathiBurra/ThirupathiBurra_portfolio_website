import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Thirupathi Burra",
    default: "Thirupathi Burra | AI/ML Software Engineer",
  },
  description: "AI/ML Software Engineer specializing in building production-grade RAG pipelines, multi-agent workflows, and highly scalable REST APIs.",
  keywords: ["AI Engineer", "Machine Learning", "RAG", "Next.js", "Python", "FastAPI"],
  authors: [{ name: "Thirupathi Burra" }],
  creator: "Thirupathi Burra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thirupathiburra.com",
    title: "Thirupathi Burra | AI/ML Software Engineer",
    description: "Building intelligent systems that work. Specializing in RAG pipelines and multi-agent workflows.",
    siteName: "Thirupathi Burra Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "bg-[#050505] text-foreground min-h-screen antialiased flex flex-col")}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Open Source",
  description: "An active builder in the AI ecosystem—attending events, contributing to open source, and constantly collaborating.",
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}

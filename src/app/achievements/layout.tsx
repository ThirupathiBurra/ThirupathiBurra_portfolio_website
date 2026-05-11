import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic research, national hackathon finals, and global community recognition proving technical depth.",
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

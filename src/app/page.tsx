import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSnapshot from "@/components/sections/ExperienceSnapshot";
import SkillsSnapshot from "@/components/sections/SkillsSnapshot";
import EventsAndAchievements from "@/components/sections/EventsAndAchievements";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <ProofBar />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <SkillsSnapshot />
      <EventsAndAchievements />
      <ContactCTA />
    </main>
  );
}

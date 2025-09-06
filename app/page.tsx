"use client";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingThemeToggle } from "@/components/floating-theme-toggle";
import { useState } from "react";
import { FloatingLanguageToggle } from "@/components/floating-language-toggle";

export default function Home() {
  // Definisikan tipe untuk state bahasa
  const [language, setLanguage] = useState<"en" | "id">("en");

  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection language={language} />
        <SkillsSection />
        <ProjectsSection language={language} />
        <ExperienceSection language={language} />
        <ContactSection />
      </main>
      <FloatingThemeToggle />
      <FloatingLanguageToggle language={language} setLanguage={setLanguage} />
    </>
  );
}

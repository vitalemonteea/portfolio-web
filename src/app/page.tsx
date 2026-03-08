"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AIDevMode } from "@/components/sections/AIDevMode";
import { RightNav } from "@/components/RightNav";

export default function Home() {
  const [isAiDevMode, setIsAiDevMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer to detect which section is currently active
  // This drives the AI Dev Mode terminal display
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      {/* Background grain texture for geek feel */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Header isAiDevMode={isAiDevMode} setIsAiDevMode={setIsAiDevMode} />
      <RightNav />

      {/* 
        The AIDevMode Terminal.
        It listens to activeSection to dynamically switch the code generation typing effect.
      */}
      <AIDevMode
        isOpen={isAiDevMode}
        setIsOpen={setIsAiDevMode}
        activeSection={activeSection}
      />

      <div className="relative z-10 w-full md:w-auto md:pr-0 transition-all duration-500 ease-in-out">
        {/* If AI dev mode is open on desktop, shift content slightly to the left */}
        <div className={`transition-all duration-500 ${isAiDevMode ? 'md:mr-[420px]' : ''}`}>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <TechStack />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

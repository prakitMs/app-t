"use client";

import { About } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/project";
import { Skills } from "@/components/skill";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <div>
        <Toaster />
      </div>
    </div>
  );
}

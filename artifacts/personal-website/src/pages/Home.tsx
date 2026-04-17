import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Thesis } from "@/components/sections/Thesis";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Photography } from "@/components/sections/Photography";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Thesis />
      <Projects />
      <Achievements />
      <Photography />
      <Footer />
    </main>
  );
}

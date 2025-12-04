import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { FloatingParticles } from "./components/floating-particles";
import { MouseEffects } from "./components/mouse-effects";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Floating particles background for entire site */}
      <FloatingParticles />
      
      {/* Mouse glow and bubbles effect */}
      <MouseEffects />
      
      {/* All content with relative z-index */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
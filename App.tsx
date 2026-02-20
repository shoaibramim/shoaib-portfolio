import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Reviews } from "./components/sections/Reviews";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bgPrimary flex flex-col relative selection:bg-accent/30 selection:text-white">
      {/* Global Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-900/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-gray-700/30 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Global Background Noise Texture (Subtle) */}
      <div
        className="fixed inset-0 opacity-[0.015] z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <Navbar />

      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

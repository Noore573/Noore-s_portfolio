import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
function App() {
  return (
    <div className="font-sans">
      <Navbar /> {/* stays fixed to viewport */}
      <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-hero-gradient animate-gradient-diagonal scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-900">
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <About />
        </section>
        <section className="snap-start h-screen">
          <Skills />
        </section>
        <section className="snap-start h-screen">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;

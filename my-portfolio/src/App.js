import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="font-sans h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <About />
        <section className="snap-start">
          <Skills />
        </section>
        <section className="snap-start">
          <Projects />
        </section>
      </section>
    </div>
  );
}

export default App;

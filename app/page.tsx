import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
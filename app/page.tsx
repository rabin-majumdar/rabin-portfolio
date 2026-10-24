import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="relative z-10">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
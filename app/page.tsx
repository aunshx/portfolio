import Ticker from "@/components/layout/Ticker";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Writing from "@/components/sections/Writing";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Ticker />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Research />
        <Writing />
        <Education />
      </main>
      <Footer />
    </>
  );
}

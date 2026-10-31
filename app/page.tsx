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
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-text focus:px-4 focus:py-3 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Work />
        <Experience />
        <Writing />
        <Research />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}

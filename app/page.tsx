import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
import FinePrint from "@/components/sections/FinePrint";
import Marquee from "@/components/motion/Marquee";
import Motion from "@/components/motion/Motion";
import Preloader from "@/components/motion/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-text focus:px-4 focus:py-3 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <Statement />
        <Work />
        <FinePrint />
      </main>
      <Footer />
      <Motion />
    </>
  );
}

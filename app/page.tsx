import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
import FinePrint from "@/components/sections/FinePrint";
import Motion from "@/components/motion/Motion";
import Preloader from "@/components/motion/Preloader";
import { PROFILE_PAGE_LD, ldJson } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(PROFILE_PAGE_LD) }} />
      <Preloader />
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Work />
        <FinePrint />
      </main>
      <Footer />
      <Motion />
    </>
  );
}

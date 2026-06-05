import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { WhyMustdrink } from "@/components/sections/WhyMustdrink";
import { Ingredients } from "@/components/sections/Ingredients";
import { Vision } from "@/components/sections/Vision";
import { Founder } from "@/components/sections/Founder";
import { Incubated } from "@/components/sections/Incubated";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyMustdrink />
        <Ingredients />
        <Vision />
        <Founder />
        <Incubated />
        <EarlyAccess />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "No Caffeine Crash",
    description: "Plant-based energy that sustains — without the afternoon slump.",
  },
  {
    title: "Supports Digestion",
    description: "Formulated with ingredients traditionally used for gut wellness.",
  },
  {
    title: "Functional Nutrition",
    description: "Real superfoods, not synthetic additives or empty calories.",
  },
  {
    title: "Traditional Ingredients",
    description: "Fenugreek, Moringa, and Ayurvedic botanicals you can trust.",
  },
  {
    title: "Modern Taste",
    description: "Designed for palates that expect premium — not medicinal.",
  },
  {
    title: "Daily Wellness Ritual",
    description: "A beverage you'll actually want to drink every single morning.",
  },
];

export function WhyMustdrink() {
  return (
    <AnimatedSection className="py-24 md:py-32 bg-forest text-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Why MUSTDRINK"
          title="Built different. Built for you."
          description="Six reasons India's next-generation wellness beverage is worth the wait."
          theme="dark"
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group p-7 rounded-2xl border border-offwhite/10 bg-offwhite/5 hover:bg-offwhite/10 transition-all duration-500"
            >
              <div className="w-8 h-px bg-gold mb-5 group-hover:w-12 transition-all duration-500" />
              <h3 className="font-display text-lg text-offwhite">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-offwhite/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

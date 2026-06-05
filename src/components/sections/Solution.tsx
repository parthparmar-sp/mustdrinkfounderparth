"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const pillars = [
  {
    title: "Functional Ingredients",
    description:
      "Every sip is powered by clinically respected superfoods — Fenugreek, Moringa, and Ayurvedic botanicals with real nutritional value.",
  },
  {
    title: "Modern Ayurveda",
    description:
      "Ancient Indian wellness wisdom, reformulated for how you actually live — convenient, delicious, and scientifically grounded.",
  },
  {
    title: "A Daily Ritual",
    description:
      "Replace your morning coffee with a beverage designed to become the healthiest habit in your day.",
  },
  {
    title: "Sustained Energy",
    description:
      "Clean, plant-based energy that carries you through the morning without the spike-and-crash cycle.",
  },
  {
    title: "Better Digestion",
    description:
      "Ingredients traditionally used to support gut health and metabolic balance — because how you feel matters as much as how you perform.",
  },
];

export function Solution() {
  return (
    <AnimatedSection id="solution" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="The Solution"
          title="MUSTDRINK is what comes next."
          description="A functional beverage built at the intersection of Indian tradition and modern nutrition science."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className={`flex gap-6 ${i === pillars.length - 1 ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""}`}
            >
              <div className="flex-shrink-0 w-px bg-gradient-to-b from-gold via-beige to-transparent" />
              <div>
                <h3 className="font-display text-xl md:text-2xl text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    title: "Coffee Dependency",
    description:
      "Millions of Indians start every day with coffee — a habit that creates dependency without delivering real nourishment.",
  },
  {
    title: "Energy Crashes",
    description:
      "The caffeine spike feels productive for an hour, then leaves you drained, unfocused, and reaching for another cup.",
  },
  {
    title: "Acidity & Discomfort",
    description:
      "Daily coffee consumption contributes to acidity, bloating, and digestive discomfort that compounds over time.",
  },
  {
    title: "Sugar-Loaded Alternates",
    description:
      "Energy drinks and packaged beverages trade one problem for another — loaded with sugar, artificial flavors, and empty calories.",
  },
  {
    title: "No Healthy Daily Ritual",
    description:
      "There is no premium, functional beverage designed for the modern Indian lifestyle — until now.",
  },
];

export function Problem() {
  return (
    <AnimatedSection id="problem" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="The Problem"
          title="Your morning ritual deserves better."
          description="India runs on coffee and sugar-loaded drinks. Neither was built for sustained wellness."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`p-8 rounded-2xl border border-beige/60 bg-cream/50 hover:bg-cream transition-colors duration-500 ${
                i === problems.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-xs font-medium text-gold tracking-wider">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

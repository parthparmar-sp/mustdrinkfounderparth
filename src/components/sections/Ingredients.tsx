"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

const ingredients = [
  {
    name: "Fenugreek",
    sanskrit: "Methi",
    story:
      "For centuries, Methi has been a cornerstone of Indian kitchens and Ayurvedic medicine. Rich in soluble fiber, iron, and compounds that support blood sugar balance and digestive health — it is the quiet powerhouse behind sustained morning energy.",
    benefit: "Digestion & Metabolic Support",
  },
  {
    name: "Moringa",
    sanskrit: "Shigru",
    story:
      "Called the 'miracle tree' across India, Moringa delivers more iron than spinach, more calcium than milk, and a complete profile of antioxidants. It is nature's multivitamin — concentrated into every serving of MUSTDRINK.",
    benefit: "Nutrient Density & Antioxidants",
  },
  {
    name: "Ayurvedic Botanicals",
    sanskrit: "Traditional Wisdom",
    story:
      "Our formulation draws from generations of Indian wellness practice — selecting ingredients not for trend, but for thousands of years of documented use in supporting daily vitality, clarity, and balance.",
    benefit: "Holistic Daily Wellness",
  },
];

export function Ingredients() {
  return (
    <AnimatedSection id="ingredients" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Ingredient Story"
          title="Rooted in tradition. Engineered for today."
          description="Every ingredient in MUSTDRINK has a story — centuries old, and more relevant than ever."
        />

        <div className="space-y-8">
          {ingredients.map((ingredient, i) => (
            <motion.div
              key={ingredient.name}
              className="grid md:grid-cols-12 gap-8 items-start p-8 md:p-10 rounded-3xl border border-beige/60 bg-cream/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
            >
              <div className="md:col-span-4">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-gold">
                  {ingredient.sanskrit}
                </p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-charcoal">
                  {ingredient.name}
                </h3>
                <p className="mt-3 text-sm font-medium text-forest">
                  {ingredient.benefit}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  {ingredient.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

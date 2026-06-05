"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

export function Vision() {
  return (
    <AnimatedSection id="vision" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Product Vision"
          title="Building the future of Indian functional beverages."
        />

        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            India deserves a beverage category of its own — one that doesn&apos;t
            copy Western energy drinks or repackage colonial coffee culture. MUSTDRINK
            is creating a new standard: functional, delicious, and deeply rooted in
            the ingredients that have sustained Indian wellness for millennia.
          </p>
          <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
            We&apos;re not building another health drink. We&apos;re building the
            daily ritual that replaces your coffee cup — and makes you feel genuinely
            better for it.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          {[
            { stat: "0mg", label: "Caffeine" },
            { stat: "100%", label: "Plant-Based" },
            { stat: "1000+", label: "Years of Ayurvedic Wisdom" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-forest">
                {item.stat}
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

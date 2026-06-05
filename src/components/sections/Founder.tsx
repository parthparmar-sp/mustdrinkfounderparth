"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

export function Founder() {
  return (
    <AnimatedSection id="founder" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionHeader
              label="Founder Story"
              title="Young founders. Ancient wisdom. One mission."
              align="left"
            />
            <p className="text-muted leading-relaxed text-base md:text-lg -mt-8">
              MUSTDRINK was born from a simple observation: India has the world&apos;s
              richest wellness traditions, yet its daily beverage choices are dominated
              by imported habits that don&apos;t serve our bodies.
            </p>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              Our founders — young, mission-driven, and deeply connected to Indian
              food culture — set out to build something that didn&apos;t exist: a
              premium functional beverage that feels as modern as any Silicon Valley
              startup, and as authentic as your grandmother&apos;s kitchen.
            </p>
            <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
              This isn&apos;t a side project. It&apos;s a company built to redefine
              how India starts its day.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-beige/40 via-cream to-beige/60 border border-beige flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center">
                  <span className="font-display text-2xl text-forest">M</span>
                </div>
                <p className="mt-6 font-display text-xl text-charcoal">
                  Mission-Driven
                </p>
                <p className="mt-2 text-sm text-muted">
                  Innovation meets Indian wellness
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

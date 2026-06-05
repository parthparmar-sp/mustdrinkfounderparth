"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { ProductMockup } from "@/components/ui/ProductMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-offwhite to-cream" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-beige/30 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-forest/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-beige/50 text-earth border border-beige">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Launching Soon
              </span>
            </motion.div>

            <motion.h1
              className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] text-charcoal leading-[1.1] tracking-tight"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              The Modern Indian Alternative to Coffee.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.35 }}
            >
              Sustained Energy. Better Digestion. No Caffeine Crash.
            </motion.p>

            <motion.div
              className="mt-10"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.5 }}
            >
              <WaitlistForm variant="hero" />
            </motion.div>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.65 }}
            >
              <a
                href="#problem"
                className="text-sm text-muted hover:text-forest transition-colors underline underline-offset-4 decoration-beige hover:decoration-forest/30"
              >
                Learn More
              </a>
              <span className="hidden sm:block text-beige">|</span>
              <p className="text-xs text-muted/70">
                Join 500+ early supporters on the waitlist
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.4 }}
          >
            <ProductMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

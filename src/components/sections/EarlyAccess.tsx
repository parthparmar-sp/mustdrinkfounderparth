"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { fadeUp } from "@/lib/animations";

export function EarlyAccess() {
  return (
    <AnimatedSection id="waitlist" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-beige/50 text-earth border border-beige mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Early Access
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
            Be the first to experience MUSTDRINK.
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Join our waitlist for exclusive early access, launch updates, and a
            first taste of India&apos;s next-generation wellness beverage.
          </p>

          <div className="mt-10">
            <WaitlistForm variant="hero" />
          </div>

          <p className="mt-6 text-xs text-muted/60">
            No spam. Unsubscribe anytime. Launching soon across India.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const logos = [
  {
    src: "/partners/aic-anand.svg",
    alt: "AIC Anand — Aspire. Innovate. Create.",
    width: 120,
    height: 120,
  },
  {
    src: "/partners/aau.svg",
    alt: "Anand Agricultural University",
    width: 100,
    height: 120,
  },
  {
    src: "/partners/aic-anand-foundation.svg",
    alt: "AIC Anand Foundation — Anand Agricultural University",
    width: 200,
    height: 120,
  },
];

const blocks = [
  {
    title: "Incubation Support",
    items: [
      "Startup mentorship",
      "Product validation support",
      "Business development guidance",
      "Innovation ecosystem access",
    ],
  },
  {
    title: "Research & Development Access",
    items: [
      "Agrifood innovation ecosystem",
      "Product development support",
      "Testing and validation opportunities",
    ],
  },
  {
    title: "Growth & Network",
    items: [
      "Startup community",
      "Industry connections",
      "Investor readiness",
      "Market access opportunities",
    ],
  },
];

export function Incubated() {
  return (
    <AnimatedSection id="incubated" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-beige/50 text-earth border border-beige">
            Officially Incubated Startup
          </span>
        </motion.div>

        <SectionHeader
          label="Incubated at AIC Anand Foundation, AAU"
          title="Backed by a Leading Agrifood Startup Ecosystem"
          description="MUSTDRINK is proudly incubated at AIC Anand Foundation, Anand Agricultural University (AAU), receiving access to mentorship, startup support, product development guidance, industry experts, and innovation resources."
        />

        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 py-10 md:py-14 mb-16 md:mb-20 border-y border-beige/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="group flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              variants={fadeUp}
              className="p-8 rounded-2xl border border-beige/60 bg-cream/50"
            >
              <div className="w-8 h-px bg-gold mb-5" />
              <h3 className="font-display text-xl text-charcoal">{block.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted leading-relaxed flex gap-2.5"
                  >
                    <span className="text-gold mt-1.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-14 text-center text-sm text-muted/80 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Building the future of functional beverages with support from one of
          India&apos;s growing agrifood innovation ecosystems.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

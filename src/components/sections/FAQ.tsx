"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "What is MUSTDRINK?",
    answer:
      "MUSTDRINK is a premium functional beverage — a modern Indian alternative to coffee. It's crafted with Fenugreek (Methi), Moringa, and Ayurvedic superfoods to deliver sustained energy and better digestion without caffeine.",
  },
  {
    question: "Does MUSTDRINK contain caffeine?",
    answer:
      "No. MUSTDRINK is completely caffeine-free. It provides clean, plant-based energy through functional ingredients — without the spike-and-crash cycle of coffee or energy drinks.",
  },
  {
    question: "When will MUSTDRINK launch?",
    answer:
      "We're launching soon across India. Join the waitlist to be among the first to know when we go live and get exclusive early access.",
  },
  {
    question: "Where can I buy MUSTDRINK?",
    answer:
      "MUSTDRINK is not yet available for purchase. We're currently in pre-launch and building our waitlist. Sign up above to be notified when we launch.",
  },
  {
    question: "Is MUSTDRINK suitable for daily consumption?",
    answer:
      "Yes. MUSTDRINK is designed as a daily wellness ritual — a morning beverage you can enjoy every day as part of a healthy lifestyle.",
  },
  {
    question: "What makes MUSTDRINK different from other health drinks?",
    answer:
      "Unlike generic health drinks or herbal teas, MUSTDRINK is built at the intersection of modern nutrition science and authentic Indian wellness traditions. It's premium, delicious, and functional — not medicinal.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="FAQ"
          title="Questions? We've got answers."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-beige/60 bg-cream/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-charcoal pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-6 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

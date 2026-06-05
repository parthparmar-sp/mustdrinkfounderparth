"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = theme === "dark";

  return (
    <motion.div
      className={`max-w-2xl mb-16 md:mb-20 ${alignClass}`}
      variants={fadeUp}
    >
      {label && (
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
          {label}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight ${
          isDark ? "text-offwhite" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            isDark ? "text-offwhite/60" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

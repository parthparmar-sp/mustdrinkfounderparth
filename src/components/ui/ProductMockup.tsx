"use client";

import { motion } from "framer-motion";

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-sm aspect-[3/4]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-beige/60 via-offwhite to-beige/40 border border-beige/60 shadow-2xl shadow-earth/10" />

      <div className="absolute inset-0 rounded-3xl flex items-center justify-center p-10">
        <motion.div
          className="relative"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Bottle cap */}
          <div className="mx-auto w-14 h-5 rounded-t-lg bg-earth/80 shadow-inner" />
          <div className="mx-auto w-16 h-2 bg-earth/60" />

          {/* Bottle neck */}
          <div className="mx-auto w-12 h-6 bg-gradient-to-b from-forest-light to-forest" />

          {/* Bottle body */}
          <div className="relative w-28 h-52 mx-auto rounded-b-3xl rounded-t-lg bg-gradient-to-b from-forest via-forest to-forest-light shadow-xl overflow-hidden">
            <div className="absolute inset-y-0 left-3 w-3 bg-offwhite/10 rounded-full blur-[1px]" />
            <div className="absolute top-8 inset-x-0 flex justify-center">
              <div className="w-20 h-28 rounded border border-offwhite/20 bg-offwhite/5 flex flex-col items-center justify-center px-2">
                <span className="font-display text-offwhite text-[10px] tracking-[0.25em] uppercase">
                  Must
                </span>
                <span className="font-display text-gold text-[10px] tracking-[0.25em] uppercase mt-0.5">
                  Drink
                </span>
                <div className="w-8 h-px bg-gold/40 mt-2" />
                <span className="text-[6px] text-offwhite/50 tracking-widest uppercase mt-2 text-center leading-relaxed">
                  Functional
                  <br />
                  Beverage
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 inset-x-0 text-center">
              <span className="text-[7px] text-offwhite/40 tracking-[0.3em] uppercase">
                250ml
              </span>
            </div>
          </div>

          {/* Base shadow */}
          <div className="mx-auto mt-3 w-24 h-3 rounded-full bg-earth/10 blur-md" />
        </motion.div>
      </div>

      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/10 border border-gold/20" />
      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-forest/5 border border-forest/10" />
    </div>
  );
}

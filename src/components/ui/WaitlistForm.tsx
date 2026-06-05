"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  variant?: "hero" | "inline";
  className?: string;
}

export function WaitlistForm({ variant = "inline", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-3 ${isHero ? "justify-center" : ""}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-offwhite text-sm">
              ✓
            </span>
            <p className="text-forest font-medium">
              You&apos;re on the list. We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-3 ${isHero ? "max-w-md mx-auto" : ""}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className={`flex-1 px-5 py-3.5 rounded-full text-sm bg-offwhite border border-beige/80 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all ${
                isHero ? "text-center sm:text-left" : ""
              }`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-forest text-offwhite hover:bg-forest-light transition-colors duration-300 disabled:opacity-60 whitespace-nowrap cursor-pointer"
            >
              {status === "loading" ? "Joining..." : "Join the Waitlist"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && errorMessage && (
        <p className="mt-2 text-sm text-earth text-center sm:text-left">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

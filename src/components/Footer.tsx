export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-beige/60 bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-xl text-charcoal">
              MUST<span className="text-forest">DRINK</span>
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              India&apos;s next-generation functional beverage. Sustained energy.
              Better digestion. No caffeine crash.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "Why MUSTDRINK", href: "#solution" },
                { label: "Ingredients", href: "#ingredients" },
                { label: "Vision", href: "#vision" },
                { label: "FAQ", href: "#faq" },
                { label: "Join Waitlist", href: "#waitlist" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-forest transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mustdrink04@gmail.com"
                  className="text-sm text-muted hover:text-forest transition-colors"
                >
                  mustdrink04@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://mustdrink.in"
                  className="text-sm text-muted hover:text-forest transition-colors"
                >
                  mustdrink.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-beige/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; {currentYear} MUSTDRINK. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            Made in India. Built for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}

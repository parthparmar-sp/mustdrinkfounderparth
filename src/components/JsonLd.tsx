export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MUSTDRINK",
    url: "https://mustdrink.in",
    logo: "https://mustdrink.in/og-image.svg",
    description:
      "India's next-generation functional beverage — a modern alternative to coffee built with Fenugreek, Moringa, and Ayurvedic superfoods.",
    email: "hello@mustdrink.in",
    foundingLocation: {
      "@type": "Place",
      name: "India",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

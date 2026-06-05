import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mustdrink.in"),
  title: {
    default: "MUSTDRINK — The Modern Indian Alternative to Coffee",
    template: "%s | MUSTDRINK",
  },
  description:
    "Sustained energy. Better digestion. No caffeine crash. MUSTDRINK is India's next-generation functional beverage — built with Fenugreek, Moringa, and modern Ayurveda.",
  keywords: [
    "MUSTDRINK",
    "functional beverage",
    "Indian wellness",
    "coffee alternative",
    "fenugreek drink",
    "moringa beverage",
    "Ayurveda",
    "caffeine free energy",
    "healthy drinks India",
  ],
  authors: [{ name: "MUSTDRINK" }],
  creator: "MUSTDRINK",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mustdrink.in",
    siteName: "MUSTDRINK",
    title: "MUSTDRINK — The Modern Indian Alternative to Coffee",
    description:
      "Sustained energy. Better digestion. No caffeine crash. Join the waitlist for India's next-generation wellness beverage.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MUSTDRINK — Functional Beverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUSTDRINK — The Modern Indian Alternative to Coffee",
    description:
      "Sustained energy. Better digestion. No caffeine crash. Join the waitlist.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mustdrink.in",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="grain antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

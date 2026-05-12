import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-signet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howdybydesign.com"),
  title: {
    default: "Ben Howard | UX Strategist & Senior Product Designer",
    template: "%s | Ben Howard",
  },
  description:
    "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
  openGraph: {
    title: "Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
    type: "website",
    url: "https://howdybydesign.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ben Howard | UX Strategist & Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Benjamin Howard",
  "jobTitle": "UX Strategist & Senior Product Designer",
  "url": "https://www.howdybydesign.com",
  "image": "https://www.howdybydesign.com/og-image.png",
  "sameAs": ["https://linkedin.com/in/bhowarddesign"],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "d.MBA" },
    { "@type": "EducationalOrganization", "name": "Maryland Institute College of Art" },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "knowsAbout": [
    "Product Design",
    "UX Strategy",
    "Service Blueprinting",
    "Design Systems",
    "Generative AI",
    "Defense Technology",
    "Healthcare UX",
    "Enterprise SaaS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrumentSans.variable} ${zillaSlab.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-warm-50 text-warm-900 antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

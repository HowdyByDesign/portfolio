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
    default: "Ben Howard — Senior Product Designer & Systems Strategist",
    template: "%s — Ben Howard",
  },
  description:
    "Nine years designing for Pfizer, the U.S. Air Force, and Capital Group. I orchestrate digital systems that reclaim thousands of manual hours and modernize enterprise operations.",
  openGraph: {
    title: "Ben Howard — Senior Product Designer & Systems Strategist",
    description:
      "Bridging the gap between complex user needs and strategic business goals with a d.MBA lens.",
    type: "website",
    url: "https://howdybydesign.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ben Howard — Senior Product Designer & Systems Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Howard — Senior Product Designer & Systems Strategist",
    description:
      "Bridging the gap between complex user needs and strategic business goals with a d.MBA lens.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrumentSans.variable} ${zillaSlab.variable}`}>
      <body className="bg-warm-50 text-warm-900 antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

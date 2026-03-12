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
  title: {
    default: "Ben Howard — Staff Designer",
    template: "%s — Ben Howard",
  },
  description:
    "I design the systems that modernize how complex organizations operate — working at the intersection of organizational complexity, AI integration, and measurable business outcomes.",
  openGraph: {
    title: "Ben Howard — Staff Designer",
    description:
      "I design the systems that modernize how complex organizations operate.",
    type: "website",
    url: "https://howdybydesign.com",
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

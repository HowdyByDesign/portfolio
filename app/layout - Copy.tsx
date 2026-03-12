import type { Metadata } from "next";
import { Inter, Sriracha } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sriracha",
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
    <html lang="en" className={`${inter.variable} ${sriracha.variable}`}>
      <body className="bg-white text-zinc-900 antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

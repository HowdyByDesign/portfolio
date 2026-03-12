"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

// ── Easing ─────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const;

// ── Wordmark fades down separately from logo ────────────────────────────
const wordmarkVariant = {
  hidden: { opacity: 0, y: -6 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: expo, delay: 0.1 } },
};

// ── Nav links stagger in after logo/wordmark ────────────────────────────
// Budget: all 3 links must be visible within 300ms of mount.
// Last link enters at: delayChildren(120ms) + staggerChildren(55ms × 2) = 230ms ✓
const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,  // 55ms between each link
      delayChildren:   0.12,   // logo leads, links follow at 120ms
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -5 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: expo } },
};

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-warm-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo lockup — signet + wordmark ───────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Howdy by Design — home"
        >
          {/* Signet animates via its own motion.div inside Logo */}
          <Logo size={28} className="opacity-100 group-hover:opacity-70 transition-opacity duration-300" />

          {/* Wordmark staggered slightly after signet */}
          <motion.span
            variants={wordmarkVariant}
            initial="hidden"
            animate="show"
            className="text-sm font-semibold text-warm-900 group-hover:text-warm-500 transition-colors duration-300"
          >
            Ben Howard
          </motion.span>
        </Link>

        {/* ── Nav links — stagger after logo ────────────────────────────── */}
        <motion.ul
          className="flex items-center gap-7"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          {links.map((link) => (
            <motion.li key={link.href} variants={navItem}>
              <Link
                href={link.href}
                className={`text-sm transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-warm-900 font-medium"
                    : "text-warm-400 hover:text-warm-900"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={navItem}>
            <a
              href="mailto:Howdy@Howdybydesign.com"
              className="text-sm text-warm-400 hover:text-warm-900 transition-colors duration-300"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>

      </nav>
    </header>
  );
}

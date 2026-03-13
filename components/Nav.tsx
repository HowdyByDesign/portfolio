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
// Budget: all 4 links must be visible within 300ms of mount.
// Last link enters at: delayChildren(120ms) + staggerChildren(55ms × 3) = 285ms ✓
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
          <motion.li variants={navItem}>
            <a
              href="https://linkedin.com/in/bhowarddesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-warm-400 hover:text-warm-900 transition-colors duration-300 flex items-center"
            >
              {/* LinkedIn "in" mark — official proportions at 16px */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.983 1.983 0 0 1-1.984-1.98 1.984 1.984 0 1 1 1.984 1.98zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.li>
        </motion.ul>

      </nav>
    </header>
  );
}

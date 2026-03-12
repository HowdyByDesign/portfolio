"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-950 hover:text-zinc-500 transition-colors"
        >
          Ben Howard
        </Link>

        <ul className="flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-zinc-950 font-medium"
                    : "text-zinc-400 hover:text-zinc-950"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:Howdy@Howdybydesign.com"
              className="text-sm text-zinc-400 hover:text-zinc-950 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

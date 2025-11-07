"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 flex w-[min(90%,960px)] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md"
    >
      <span className="font-display text-lg tracking-wide text-neutral">
        Ava Mirren
      </span>
      <div className="flex items-center gap-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral/80">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="relative group">
            <span>{item.label}</span>
            <span className="absolute -bottom-1 left-0 w-full scale-x-0 bg-neutral h-px transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="rounded-full border border-accent/60 bg-accent/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accentSoft shadow-glow transition hover:bg-accent hover:text-background"
      >
        Book a Call
      </Link>
    </motion.nav>
  );
}

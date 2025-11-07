"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 py-12 text-xs uppercase tracking-[0.3em] text-neutral/60"
    >
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </Link>
        <Link href="https://www.behance.net" target="_blank" rel="noreferrer">
          Behance
        </Link>
        <Link href="https://dribbble.com" target="_blank" rel="noreferrer">
          Dribbble
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </Link>
      </div>
      <p>© {new Date().getFullYear()} Ava Mirren Studio. All rights reserved.</p>
    </motion.footer>
  );
}

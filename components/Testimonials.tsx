"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid gap-6 md:grid-cols-3"
    >
      {testimonials.map((item) => (
        <blockquote
          key={item.author}
          className="relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <span className="text-4xl text-accent/60">“</span>
          <p className="text-sm text-neutral/70">{item.quote}</p>
          <footer className="mt-auto">
            <p className="font-display text-lg text-neutral">{item.author}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral/60">{item.role}</p>
          </footer>
        </blockquote>
      ))}
    </motion.div>
  );
}

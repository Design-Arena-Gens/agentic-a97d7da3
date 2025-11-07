"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : ""}`}
    >
      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-neutral/60">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl text-neutral md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base text-neutral/70 md:text-lg">{description}</p>
    </motion.div>
  );
}

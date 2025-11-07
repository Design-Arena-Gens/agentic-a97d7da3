"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur md:grid-cols-2"
    >
      <div className="space-y-4">
        <h3 className="font-display text-3xl text-neutral">
          Ava Mirren — Designer, Director, Worldbuilder
        </h3>
        <p className="text-sm text-neutral/70">
          With a decade of experience across fashion, music, and emerging tech, I craft brand
          identities that feel cinematic and touchable. My process fuses tactile material studies,
          experimental typography, and cinematic lighting to engineer multisensory worlds.
        </p>
        <p className="text-sm text-neutral/70">
          I collaborate with creative teams as an embedded partner—from brand strategy to realtime
          3D builds. Together we architect visual languages that evolve across seasons, campaigns,
          and experiential launches.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 to-transparent p-6 text-sm text-neutral/70">
          <h4 className="font-display text-xl text-neutral">Selected Collaborations</h4>
          <ul className="mt-3 space-y-1 uppercase tracking-[0.35em] text-xs text-neutral/60">
            <li>Netflix Creative Labs</li>
            <li>Adobe Futures</li>
            <li>MoMA Design Store</li>
            <li>Meta Reality Labs</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-secondary/15 to-transparent p-6 text-sm text-neutral/70">
          <h4 className="font-display text-xl text-neutral">Press & Features</h4>
          <ul className="mt-3 space-y-1 uppercase tracking-[0.35em] text-xs text-neutral/60">
            <li>It&apos;s Nice That</li>
            <li>Design Milk</li>
            <li>Behance Interactive</li>
            <li>Creative Boom</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

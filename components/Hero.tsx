"use client";

import { motion } from "framer-motion";
import { SceneCanvas } from "./SceneCanvas";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-32">
      <SceneCanvas />
      <div className="noise-bg" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-neutral/70 backdrop-blur">
          Immersive graphic design & 3D storytelling
        </span>
        <h1 className="font-display text-5xl leading-tight tracking-tight text-neutral md:text-6xl">
          Transforming visual identities into living, breathing worlds.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral/75 md:text-xl">
          Ava Mirren crafts cinematic brand universes that blend tactile textures, bold typography,
          and interactive 3D moments. Every project is a sensory narrative you can step into.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.04 }}
            className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-background shadow-glow"
          >
            Discover Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral/80 backdrop-blur"
          >
            Book a Collaboration Call
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

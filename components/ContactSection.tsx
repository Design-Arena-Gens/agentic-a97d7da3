"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 opacity-70" />
      <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <h3 className="font-display text-3xl text-neutral">Let&apos;s craft your next universe</h3>
          <p className="text-sm text-neutral/70">
            Share a glimpse of your project, timeline, and intentions. I&apos;ll reply within 48
            hours with a tailored collaboration deck and moodboard sparks.
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-neutral/60">
            <div>
              <span className="block text-neutral/40">Studio Hours</span>
              Mon — Fri, 10am to 6pm CET
            </div>
            <div>
              <span className="block text-neutral/40">Remote</span>
              Amsterdam · Worldwide
            </div>
            <div>
              <span className="block text-neutral/40">Email</span>
              ava@mirren.studio
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm text-neutral/80">
          <label className="flex flex-col gap-2">
            <span className="uppercase tracking-[0.3em] text-xs text-neutral/60">Name</span>
            <input
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-accent"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="uppercase tracking-[0.3em] text-xs text-neutral/60">Email</span>
            <input
              required
              placeholder="your@email.com"
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-accent"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="uppercase tracking-[0.3em] text-xs text-neutral/60">
              Project Overview
            </span>
            <textarea
              required
              rows={4}
              placeholder="Tell me about your vision..."
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-2 rounded-full border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-background shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "idle" && "Send Invitation"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Invitation Sent"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}

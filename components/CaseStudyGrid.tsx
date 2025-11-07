"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/content";

export function CaseStudyGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {caseStudies.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-accent/50 hover:bg-white/10"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 aspect-square w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
          <div className="flex h-full flex-col gap-6">
            <header className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.4em] text-neutral/60">
                Signature Project
              </span>
              <h3 className="font-display text-2xl text-neutral">{project.title}</h3>
              <p className="text-sm text-neutral/70">{project.description}</p>
            </header>
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((disc) => (
                <span
                  key={disc}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neutral/60"
                >
                  {disc}
                </span>
              ))}
            </div>
            <footer className="mt-auto flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              {project.stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </footer>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

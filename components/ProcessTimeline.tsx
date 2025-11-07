"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <div className="relative mt-16">
      <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />
      <div className="flex flex-col gap-12">
        {process.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col gap-4 md:w-1/2 ${
                isEven ? "md:self-start md:pr-16" : "md:self-end md:pl-16"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                {step.phase}
              </span>
              <h3 className="font-display text-2xl text-neutral">{step.summary}</h3>
              <p className="text-sm text-neutral/70">{step.copy}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";

export function Services() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 backdrop-blur"
        >
          <h3 className="font-display text-xl text-neutral">{service.title}</h3>
          <p className="mt-4 text-sm text-neutral/70">{service.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
